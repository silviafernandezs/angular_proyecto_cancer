import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { PrevensionComponent } from './prevension/prevension.component';
import { PrevencionComponent } from './prevencion/prevencion.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { CampaniasComponent } from './campanias/campanias.component';
import { CentrosMedicosComponent } from './centros-medicos/centros-medicos.component';
import { FooterComponent } from './footer/footer.component';
import { CardPrevencionComponent } from './card-prevencion/card-prevencion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    PrevensionComponent,
    PrevencionComponent,
    TratamientosComponent,
    CampaniasComponent,
    CentrosMedicosComponent,
    FooterComponent,
    CardPrevencionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
