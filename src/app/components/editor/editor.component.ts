import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  markdownForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.markdownForm = this.formBuilder.group({
      title: ['Hello, I am Trung', Validators.required],
      description: [
        'This is a markdown text editor for - http://jira.trungk18.com/'
      ]
    });
  }

  onSubmit = () => {
    console.log(this.markdownForm.value.title, btoa(this.markdownForm.value.description));
  }

  get descriptionRawControl(): FormControl {
    return this.markdownForm.controls.description as FormControl;
  }

}
