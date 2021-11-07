import welcome from '../components/welcomeScreen';
import settings from '../components/settings';
import category from '../components/category';
import profile from '../components/profile';
import Router from '../core/route';

const router = new Router({
  routes: {
    welcome,
    settings,
    category,
    profile,
  },
});

export default router;
