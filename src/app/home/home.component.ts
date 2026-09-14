import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './shared-home/components/header/header.component';
import { SidebarComponent } from './shared-home/components/sidebar/sidebar.component';
import { FooterComponent } from './shared-home/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public readonly isOpen = signal(true);

  public toggleSidebar(event: boolean): void {
    this.isOpen.set(event);
  }

}
