// This file is required by karma.conf.js and loads all the .spec files.

import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

import './app/app.component.spec';
import './app/auth/forgot-password/forgot-password.component.spec';
import './app/auth/login/login.component.spec';
import './app/auth/signup/signup.component.spec';
import './app/core/services/user.service.spec';
import './app/home/dashboard/dashboard.component.spec';
import './app/home/home.component.spec';
import './app/home/reports/report-one/report-one.component.spec';
import './app/home/reports/report-two/report-two.component.spec';
import './app/home/shared-home/components/footer/footer.component.spec';
import './app/home/shared-home/components/header/header.component.spec';
import './app/home/shared-home/components/sidebar/sidebar.component.spec';
import './app/shared/components/default-modal/default-modal.component.spec';
import './app/shared/directives/auto-focus.directive.spec';
import './app/shared/guards/auth.guard.spec';
