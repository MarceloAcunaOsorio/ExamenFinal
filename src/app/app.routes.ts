import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth/auth.component';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { PostUploadComponent } from './shared/post-upload/post-upload.component';
import { HomeComponent } from './pages/components/home/home.component';
import { PumaComponent } from './pages/components/puma/puma.component';
import { NikeComponent } from './pages/components/nike/nike.component';
import { AdidasComponent } from './pages/components/adidas/adidas.component';
import { ReebokComponent } from './pages/components/reebok/reebok.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
           { path: 'login',component: LoginComponent},
           { path: 'register', component: RegisterComponent},
           { path: 'puma',component:PumaComponent},
           { path: 'nike',component: NikeComponent},
           { path: 'adidas',component:AdidasComponent},
           { path: 'reebok',component:ReebokComponent},
           { path: 'home',component: HomeComponent},
           { path: '', redirectTo: 'home', pathMatch: 'full'},
           
        ]
     },
     { path: 'layout',component: LayoutComponent, canActivate: [authGuard] },
     { path: 'profile/edit', component: ProfileEditComponent, canActivate: [authGuard] },
     { path: 'upload-photo', component: PostUploadComponent },
     { path: '', redirectTo: '/auth/home', pathMatch: 'full' }
    
];
