import welcome from '../components/welcomeScreen';
import settings from '../components/settings';
import category from '../components/category';
import profile from '../components/profile';
import game from '../components/game';
import Router from '../core/route';
/**
 * Router initialization
 * @module routerInit
 */
const router = new Router({
  routes: {
    welcome,
    settings,
    category,
    profile,
    game,
  },
});

export default router;
