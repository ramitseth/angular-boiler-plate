import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_URLS } from '../../../../route-paths';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate([ROUTE_URLS.home]);
  }

}
