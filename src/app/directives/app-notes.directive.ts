import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {FbService} from '../services/fb.service';
import {ModalComponent} from '../components/modal/modal.component';
import {Notes} from '../interface';

@Directive({
  selector: '[appNotes]'
})
export class AppNotesDirective implements AfterViewInit, OnInit{
  openedModal = false;
  allNotes: Notes[] = [];
  modalComponent: any;
  currentNoteId: string;
  UnselectedElem: {activeModal: boolean, innerEl: string, currentElem: Element};
  constructor(
    private resolver: ComponentFactoryResolver,
    private containerRef: ViewContainerRef,
    private el: ElementRef,
    private r: Renderer2,
    private fb: FbService) {
  }
  
  ngOnInit(): void {
    this.UnselectedElem = {
      activeModal: false,
      innerEl: '',
      currentElem: null
    };
  }

  ngAfterViewInit(): void {
    this.fb.getNotes().subscribe(res => {
      if (res) {
        this.allNotes = res;
        res.forEach(note => {
          note.target = note.target.split(' ');
          this.el.nativeElement.querySelectorAll(note.target[1]).forEach(parent => {
            parent.querySelectorAll(note.target[0]).forEach(elem => {
              if (elem.textContent.includes(note.selectedText)) {
                this.addSelectedTextToElem(elem, note.selectedText);
                this.setColor(elem);
              }
            });
          });
        });
      }
    });
  }
  @HostListener('mouseup', ['$event.target']) onClick(e: Element): void {
    if (window.getSelection().toString().length > 2) {
      if (!this.openedModal) {
        const selectedText = window.getSelection().toString();
        console.log('i am select', this.UnselectedElem);
        this.UnselectedElem.activeModal = true;
        this.UnselectedElem.currentElem = e;
        this.UnselectedElem.innerEl = e.innerHTML;
        console.log('i am select', this.UnselectedElem);
        this.createModalWindow(e, this.onSelectedText(e, selectedText));
      }
    } else {
      if (this.modalComponent) {
        if (!(this.modalComponent.location.nativeElement as HTMLElement).contains(e)) {
          this.openedModal = false;
          this.containerRef.clear();
          if (this.UnselectedElem.activeModal) {
            console.log('i am select', this.UnselectedElem);
            this.r.removeClass(this.UnselectedElem.currentElem, 'selectedText');
            this.r.removeStyle(this.UnselectedElem.currentElem, 'color');
            this.UnselectedElem.currentElem.innerHTML = this.UnselectedElem.innerEl;
            this.UnselectedElem.activeModal = false;
          }
        }
      }
    }
  }

  @HostListener('mouseover', ['$event.target']) onHover(e: Element): void {
    this.hoverOn(e);
  }

  @HostListener('touch', ['$event.target']) touch(e: Element): void {
    this.hoverOn(e);
  }
  hoverOn(e): void {
    if (e.className === 'selectedText') {
      if (this.allNotes) {
        this.allNotes.forEach(note => {
          if (e.textContent === note.selectedText) {
            this.currentNoteId = note.id;
            this.createModalWindow(e, note);
          }
        });
      }
    }
  }
  createModalWindow(currentEl: Element, newNote): void {
    this.openedModal = true;
    this.containerRef.clear();
    // CREATE MODAL COMPONENT
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.modalComponent = this.containerRef.createComponent(modalFactory);
    this.modalComponent.instance.title = 'Lena Kravets';
    this.modalComponent.instance.notesArr = newNote;
    // CLOSE THE MODAL COMPONENT
    this.modalComponent.instance.close.subscribe(() => {
      this.openedModal = false;
      this.containerRef.clear();
    });
    // SEND THE NOTE
    this.modalComponent.instance.send.subscribe((val) => {
      const noteList = [{comments: val, date: new Date()}];
      if (!newNote.noteList) {
        this.createNote(noteList, newNote);
      } else {
        newNote.noteList.push(...noteList);
        this.patchNote(this.currentNoteId , newNote.noteList);
      }

    });
    // REMOVE THE NOTE
    this.modalComponent.instance.remove.subscribe((list) => {
      const deleteNote = list[0].noteList.filter(note => note.comments !== list[0].noteList[list[1]].comments);
      newNote.noteList = deleteNote;
      if (newNote.noteList.length > 0) {
        this.patchNote(this.currentNoteId , newNote.noteList);
      } else {
        this.fb.remove(this.currentNoteId).subscribe(() => {
          this.openedModal = false;
          this.containerRef.clear();
          this.r.removeClass(currentEl, 'selectedText');
          this.r.removeStyle(currentEl, 'color');
          currentEl.innerHTML = currentEl.textContent;
        });

      }
    });
    // INSTALL THE MODAL COMPONENT IN THE DOM
    const modalElement: HTMLElement = (this.modalComponent.location.nativeElement as HTMLElement);
    this.r.setStyle(currentEl, 'position', 'relative');
    this.r.appendChild(currentEl, modalElement);
    this.fb.getNotes().subscribe(res => this.allNotes = res);
  }

  createNote(noteList, newNote): void {
    this.UnselectedElem.activeModal = false;
    this.openedModal = false;
    newNote.noteList = noteList;
    this.modalComponent.instance.notesArr = newNote;
    this.fb.createNotes(newNote).subscribe(res => this.currentNoteId = res.id);
  }

  patchNote(id, obj): void {
    this.fb.patch(id, {noteList: obj})
      .subscribe(() => console.log(id));
  }

  // The selected text in the tag
  onSelectedText(elem, selectedText): object {
    const target = elem.tagName + ' .' + elem.parentElement.className;
    this.addSelectedTextToElem(elem, selectedText);
    this.setColor(elem);
    return ({selectedText, target});
  }
  setColor(elem): void {
    if (elem.firstElementChild.className === 'selectedText') {
      this.r.setStyle(elem.firstElementChild, 'color', 'yellow');
    }
  }
  addSelectedTextToElem( elem, selectedText): void {
    elem.innerHTML = elem.innerHTML.replace(selectedText, '<span class="selectedText">' + selectedText + '</span>');
  }

}
