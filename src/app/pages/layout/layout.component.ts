import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryScrollerComponent } from '../../shared/story-scroller/story-scroller.component';
import { ProfileTabsComponent } from '../../shared/profile-tabs/profile-tabs.component';
import { UserService } from '../../services/userdata.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router, RouterModule } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MenuComponent } from '../../shared/menu/menu/menu.component';
import { FooterComponent } from "../../shared/footer/footer.component";
import { PostUploadComponent } from '../../shared/post-upload/post-upload.component';
import { ProfileEditComponent } from "../profile-edit/profile-edit.component";
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ListaProductoComponent } from "../lista-producto/lista-producto.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,
    StoryScrollerComponent,
    ProfileTabsComponent,
    RouterModule,
    MenuComponent,
    FooterComponent,
    PostUploadComponent,
    ProfileEditComponent,
    NavbarComponent, ListaProductoComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  userData: User | null = null;

  constructor(
      @Inject(UserService) private userService: UserService,
      private authService: AuthService,
      private router: Router
    ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.loadUserProfile();
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  loadUserProfile() {
    this.userService.getProfile().pipe(
      catchError(error => {
        console.error('Error loading user profile:', error);
        this.router.navigate(['/auth/login']);
        return of(null);
      })
    ).subscribe((user: User | null) => {
      if (user) {
        this.userData = user;
      }
    });
  }

}