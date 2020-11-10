import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Notes} from '../../interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  form: FormGroup;
  @Input() title: string;
  @Input() notesArr: Notes;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Input() date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      note: new FormControl(''),
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.send.emit(this.form.value.note);
    this.form.patchValue({note: ''});
  }
}
