import welcome from '../components/welcomeScreen';
import settings from '../components/settings';
import category from '../components/category';
import score from '../components/score';
import game from '../components/game';
import Router from '../core/route';
import results from '../components/results';
/**
 * Router initialization
 * @module routerInit
 */
const router = new Router({
  routes: {
    welcome,
    settings,
    category,
    score,
    game,
    results,
  },
});

export default router;
