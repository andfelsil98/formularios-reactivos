import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlatziformsComponent } from './components/platziforms/platziforms.component';
import { FormgroupComponent } from './components/formgroup/formgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatziformsComponent,
    FormgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
