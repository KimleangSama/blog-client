import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EditorComponent} from './components/editor/editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from './components/editor/editor.module';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    EditorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
