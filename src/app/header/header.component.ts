import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  showRegister = false;
  showLogin = false;


  constructor() {}

  ngOnInit() {}

  register(): void {
    this.showRegister = true;
    console.log('reg', this.showRegister);
  }

  registerResult(result: boolean): void {
    this.showRegister = false;
  }

  login(): void {
    this.showLogin = true;
    console.log('reg', this.showLogin);
  }

  loginResult(result: boolean): void {
    this.showLogin = false;
  }

  logout(): void {}

  toggleSidebar(): void {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    } else {
      sidebar.classList.add('open');
    }
  }
}
