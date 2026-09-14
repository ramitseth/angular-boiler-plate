import { Component, input, signal } from '@angular/core';
import { ROUTE_URLS } from '../../../../route-paths';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  readonly isOpen = input(false);
  public readonly showReports = signal(false);

  constructor(private router: Router) {}

  public goToDashboard(): void {
    this.showReports.set(false);
    this.router.navigate([ROUTE_URLS.dashboard]);
  }

  public goToReportOne(): void {
    this.router.navigate([ROUTE_URLS.reportOne]);
  }

  public goToReportTwo(): void {
    this.router.navigate([ROUTE_URLS.reportTwo]);
  }

  public activateReports(): void {
    this.showReports.update((showReports) => !showReports);
  }

}
