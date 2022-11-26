import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { CardComponent } from './common/card/card.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
