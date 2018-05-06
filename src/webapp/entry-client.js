import { createApp } from './main.js';
const { app, router } = createApp();
router.onReady(() => {
    app.$mount('#app');
});
