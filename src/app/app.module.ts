import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NetworksComponent } from './networks/networks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    PeopleComponent,
    AboutComponent,
    NetworksComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
