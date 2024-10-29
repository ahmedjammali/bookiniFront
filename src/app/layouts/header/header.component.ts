import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviecs/authentification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggin: boolean = false;
  userDate: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to login status
    this.authService.currentLoginStatus.subscribe(isLogged => {
      this.loggin = isLogged;
      if (this.loggin) {
        this.userDate = this.authService.getUserCredentials();
        console.log(this.userDate);
      } else {
        this.userDate = null; 
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
