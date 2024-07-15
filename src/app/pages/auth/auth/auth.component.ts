import { Component } from "@angular/core";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { animate, style, transition, trigger } from "@angular/animations";
import { HomeComponent } from "../../components/home/home.component";
import { MenuComponent } from "../../../shared/menu/menu/menu.component";
import { LoginComponent } from "../../components/login/login.component";
import { RegisterComponent } from "../../components/register/register.component";


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FooterComponent, RouterModule, CommonModule, HomeComponent,MenuComponent,LoginComponent,RegisterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AuthComponent {

  constructor(private router: Router) { }

  get isLoginRoute(): boolean {
    return this.router.url === '/auth/home';
  }
}
