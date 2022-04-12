import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as html2pdf from 'html2pdf.js';
import { LocalStorageService } from '../services/localstorage.service';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  @ViewChild('editor', { static: true }) editor;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
      { class: 'poppins', name: 'Poppins' },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'strikeThrough',
        'indent',
        'outdent',
      ],
      [
        'backgroundColor',
        'customClasses',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  };
  public name = '';
  isUpdate: boolean = false;
  notes: any[] = [];
  editorText: string = '';
  updateNote: any = {};
  constructor(private readonly dialog: MatDialog, private readonly localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.notes = this.localStorage.getItem('note') ?? [];
  }

  /**
   * save note as pdf
   */
  onSave() {
    if (this.name.length) {
      const data = this.editor.textArea.nativeElement
      const options = {
        filename: `${this.name}.pdf`,
        jsPDF: { format: 'letter', orientation: 'portrait' }
      }
      html2pdf(data, options);
      this.dialog.closeAll();
      this.editorText = '';
    }
    else {
      alert('Please enter a name for the file');
    }
  }

  /**
   * close all dialog model
   */
  close() {
    this.dialog.closeAll();
  }

  /**
   * convert text to pdf
   * @param event html element
   */
  convertToPdf(event) {
    this.dialog.open(event);
  }

  /**
   * save note as text
   */
  saveAsText() {
    const data = {
      id: new Date().getTime(),
      text: this.editorText,
      note: this.convertHtmlToText(this.editorText),
      data: this.editor.textArea.nativeElement
    }
    setTimeout(() => {
      this.notes = [...this.notes, data];
      this.editorText = '';
      this.localStorage.setItem('note', this.notes);
    }, 1000);
  }

  /**
   * update note
   */
  updateText() {
    if (this.updateNote.id) {
      this.notes = this.notes.map(item => {
        if (item.id === this.updateNote.id) {
          setTimeout(() => {
            item.text = this.editorText;
            item.note = this.convertHtmlToText(this.editorText);
          }, 1000);
        }
        return item;
      });
      this.localStorage.setItem('note', this.notes);
    }
    this.isUpdate = false;
  }

  /**
   * edit note
   * @param data note data
   */
  editText(data) {
    this.isUpdate = true;
    this.updateNote = data;
    this.editorText = data.text;
  }

  /**
   * delete note
   * @param index note index
   */
  deleteNote(index) {
    this.notes.splice(index, 1);
    this.localStorage.setItem('note', this.notes);
  }

  /**
   * 
   * @param data note data
   * @returns converts html to text
   */
  convertHtmlToText(data) {
    return data.replace(/<[^>]*>?/gm, ' ');
  }


}
