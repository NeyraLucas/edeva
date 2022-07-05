import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/home/view-one/movies/movies.component';
import { ContactComponent } from './pages/home/view-two/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
