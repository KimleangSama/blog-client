import { Component, HostBinding,  Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import '@github/markdown-toolbar-element';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  markdownForm: FormGroup;

  controlId: string;

  @Input() control: FormControl;

  @HostBinding('class.focus') isFocus: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.controlId = `MarkdownEditor-${Math.floor(100000 * Math.random())}`;
    this.control = this.control ?? new FormControl();

    this.markdownForm = this.formBuilder.group({
      title: ['Hello, I am Trung', Validators.required],
      description: [
        'This is a markdown text editor for - http://jira.trungk18.com/'
      ]
    });
  }

  focus = () => {
    this.isFocus = true;
  }

  blur = () => {
    this.isFocus = false;
  }

}
