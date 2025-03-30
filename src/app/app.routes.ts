import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallbackComponentComponent } from './callback-component/callback-component.component';
import { SearchComponent } from './search/search.component';
import { apiGaurdGuard } from './services/api-gaurd.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'callback', component: CallbackComponentComponent},
    {path: 'search', component: SearchComponent,canActivate:[apiGaurdGuard]}
];
