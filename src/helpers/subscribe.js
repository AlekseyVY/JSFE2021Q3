import state from '../state/state';
import router from '../router/router';
/**
 * module for handling subscriptions;
 * @module Subscriptions
 */
state.subscribe((data) => router.listen(data));

export default router;
