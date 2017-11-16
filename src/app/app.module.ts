import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StandardComponent } from './containers/standard/standard.component';
import { DynamicComponent } from './containers/dynamic/dynamic.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: StandardComponent, outlet: 'left' },
  { path: '', component: DynamicComponent, outlet: 'right' }
];


@NgModule({
  declarations: [
    AppComponent,
    StandardComponent,
    DynamicComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  entryComponents: [
    LoginComponent,
    SignUpComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
