import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './users/auth.guard';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';

export const AppRoutes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { name: 'home' }  },
  { path: '', component: HomeComponent, data: { name: 'home' }  },
  { path: 'register', component: RegisterComponent, data: { name: 'register' }  },
  { path: 'login', component: LoginComponent, data: { name: 'login' }  },
  { path: '**', component: PageNotFoundComponent }
];
