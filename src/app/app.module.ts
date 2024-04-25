import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { AppComponent } from './app.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';


@NgModule({
  declarations: [
    WarningAlert,
    SuccessAlert,
    AppComponent,
    DatabindingComponent,
    DirectivesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
