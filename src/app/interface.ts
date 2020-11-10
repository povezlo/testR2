export interface Notes {
  id?: string;
  noteList?: {comments: string, date: Date}[];
  target: any;
  selectedText: string;
}

export interface Books {
  title: string;
  img: string;
}
