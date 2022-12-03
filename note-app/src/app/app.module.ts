import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TelaCadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
