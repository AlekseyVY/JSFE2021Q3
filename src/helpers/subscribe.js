import state from '../state/state';
import router from '../router/router';

state.subscribe((data) => router.listen(data));

export default router;
