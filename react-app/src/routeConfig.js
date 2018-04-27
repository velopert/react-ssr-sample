import { ProfilePage, RepoPage } from './pages';

// list of routes that need preloading
const routes = [
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/repo',
    component: RepoPage
  }
];

export default routes;
