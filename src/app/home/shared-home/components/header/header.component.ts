import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ROUTE_URLS } from '../../../../route-paths';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly isOpen = input(false);
  readonly toggleSidebar = output<boolean>();

  constructor(private router: Router) {}

  public toggle(): void {
    this.toggleSidebar.emit(!this.isOpen());
  }

  public logout(): void {
    this.router.navigate([ROUTE_URLS.login]);
  }

}
