import { TypeComponent } from './games/type/type.component';
import { ChooseComponent } from './games/choose/choose.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";


import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
      {
        path: 'choosegame',
        component: ChooseComponent
      },
      {
        path: 'typegame',
        component: TypeComponent
      }
];

@NgModule({
  declarations: [
    AppComponent,
    ChooseComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
