import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppGrillaComponent } from './grilla/grilla.component';
import { AppCeldaComponent} from './celda/celda.component';

@NgModule({
  declarations: [
    AppComponent,
    AppGrillaComponent,
    AppCeldaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
