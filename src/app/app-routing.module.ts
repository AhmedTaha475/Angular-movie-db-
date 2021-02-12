import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TvshowsComponent } from './tvshows/tvshows.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent, canActivate: [AuthGaurdService] },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGaurdService] },
  { path: 'tvshow', component: TvshowsComponent, canActivate: [AuthGaurdService] },
  { path: 'details/:type/:id', component: DetailsComponent, canActivate: [AuthGaurdService] },
  { path: 'people', component: PeopleComponent, canActivate: [AuthGaurdService] },
  { path: 'search/:query', component: SearchComponent, canActivate: [AuthGaurdService] },
  { path: 'about', component: AboutComponent },
  { path: 'network', component: NetworksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
