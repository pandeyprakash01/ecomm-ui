import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallbackComponentComponent } from './callback-component/callback-component.component';
import { SearchComponent } from './search/search.component';
import { apiGaurdGuard } from './services/api-gaurd.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'callback', component: CallbackComponentComponent},
    // {path: 'search', component: SearchComponent,canActivate:[apiGaurdGuard]},
    {path: 'productdetails/:productId',component:ProductdetailsComponent},
    {path: 'search', component: SearchComponent},
    {path:'home',component:HomeComponent}
];
