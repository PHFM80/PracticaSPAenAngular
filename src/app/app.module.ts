import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/body/navbar/navbar.component';
import { HeaderComponent } from './components/body/header/header.component';
import { Section1Component } from './components/body/section1/section1.component';
import { Section2Component } from './components/body/section2/section2.component';
import { Section2AComponent } from './components/body/section2/section2-a/section2-a.component';
import { Section2BComponent } from './components/body/section2/section2-b/section2-b.component';
import { Section2CComponent } from './components/body/section2/section2-c/section2-c.component';
import { FooterComponent } from './components/body/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section2AComponent,
    Section2BComponent,
    Section2CComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
