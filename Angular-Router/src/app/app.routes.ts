import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Post } from './post/post';
import { PageNotFound } from './page-not-found/page-not-found';
export const routes: Routes = [  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: Home},
  { path: 'home/:id', component: Home},//Dynamic Route
  { path: 'about', component: About },
  { path: 'contact', component:Contact },
  {path:'feature1',loadComponent: ()=> import('./feature1/feature1').then(m => m.Feature1)},
  { path: 'post/:id', component:Post },
  {path:'**',component:PageNotFound }
];
