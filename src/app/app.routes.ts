import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'list', component: ListComponent}
];
