import Vue from 'vue';
import App from './App';
import { createRouter } from './router';
import { createStore } from './vuex/store';
// Vue.prototype.$http = axios;
export function createApp() {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        store,
        router,
        render:h=>h(App)
    });
    return {app,router,store}
}
