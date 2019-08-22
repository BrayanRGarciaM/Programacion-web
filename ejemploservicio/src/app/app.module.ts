import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonViewComponent } from './person/person-view/person-view.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
