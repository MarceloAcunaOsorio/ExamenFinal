import { Component, Inject } from '@angular/core';
import { RouterLink, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/userdata.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostUploadComponent } from '../../post-upload/post-upload.component';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,PostUploadComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  userData: User | null = null;
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/home']);
  }

 
}
