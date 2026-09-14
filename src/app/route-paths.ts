/**
 * Central route paths used by both the router configuration and navigation code.
 * Keep route changes in this file so links and redirects cannot drift apart.
 */
export const ROUTE_PATHS = {
  root: '',
  auth: 'auth',
  login: 'login',
  signup: 'signup',
  forgotPassword: 'forgot',
  home: 'home',
  dashboard: 'dashboard',
  reports: 'reports',
  reportOne: 'report-one',
  reportTwo: 'report-two'
} as const;

export const ROUTE_URLS = {
  auth: ROUTE_PATHS.auth,
  login: `${ROUTE_PATHS.auth}/${ROUTE_PATHS.login}`,
  signup: `${ROUTE_PATHS.auth}/${ROUTE_PATHS.signup}`,
  forgotPassword: `${ROUTE_PATHS.auth}/${ROUTE_PATHS.forgotPassword}`,
  home: ROUTE_PATHS.home,
  dashboard: `${ROUTE_PATHS.home}/${ROUTE_PATHS.dashboard}`,
  reportOne: `${ROUTE_PATHS.home}/${ROUTE_PATHS.reports}/${ROUTE_PATHS.reportOne}`,
  reportTwo: `${ROUTE_PATHS.home}/${ROUTE_PATHS.reports}/${ROUTE_PATHS.reportTwo}`
} as const;
