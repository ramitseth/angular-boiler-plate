import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { ROUTE_PATHS } from './route-paths';

export const appRoutes: Routes = [
  {
    path: ROUTE_PATHS.auth,
    children: [
      {
        path: ROUTE_PATHS.login,
        loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent)
      },
      {
        path: ROUTE_PATHS.signup,
        loadComponent: () => import('./auth/signup/signup.component').then((m) => m.SignupComponent)
      },
      {
        path: ROUTE_PATHS.forgotPassword,
        loadComponent: () => import('./auth/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent)
      },
      { path: ROUTE_PATHS.root, redirectTo: ROUTE_PATHS.login, pathMatch: 'full' }
    ]
  },
  {
    path: ROUTE_PATHS.home,
    canMatch: [AuthGuard],
    children: [
      {
        path: ROUTE_PATHS.root,
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
        children: [
          {
            path: ROUTE_PATHS.dashboard,
            loadComponent: () => import('./home/dashboard/dashboard.component').then((m) => m.DashboardComponent)
          },
          {
            path: ROUTE_PATHS.reports,
            children: [
              {
                path: ROUTE_PATHS.reportOne,
                loadComponent: () => import('./home/reports/report-one/report-one.component').then((m) => m.ReportOneComponent)
              },
              {
                path: ROUTE_PATHS.reportTwo,
                loadComponent: () => import('./home/reports/report-two/report-two.component').then((m) => m.ReportTwoComponent)
              },
              { path: ROUTE_PATHS.root, redirectTo: ROUTE_PATHS.reportOne, pathMatch: 'full' }
            ]
          },
          { path: ROUTE_PATHS.root, redirectTo: ROUTE_PATHS.dashboard, pathMatch: 'full' }
        ]
      }
    ]
  },
  { path: ROUTE_PATHS.root, redirectTo: ROUTE_PATHS.auth, pathMatch: 'full' }
];
