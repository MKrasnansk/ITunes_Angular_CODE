import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { TunesComponent } from './views/tunes/tunes.component';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tunes', component: TunesComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
