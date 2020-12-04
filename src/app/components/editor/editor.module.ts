import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import {MarkdownEditorComponent} from './markdown-editor/markdown-editor.component';
import {MarkdownPreviewComponent} from './markdown-preview/markdown-preview.component';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TextFieldModule, MarkdownModule],
  exports: [MarkdownEditorComponent, MarkdownPreviewComponent],
  declarations: [MarkdownEditorComponent, MarkdownPreviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorModule {}
