'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2;

var _awilixKoa = require('awilix-koa');

var _vueServerRenderer = require('vue-server-renderer');

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

const fs = require("fs");
const path = require("path");
const LRU = require('lru-cache');
let helloAPI = (_dec = (0, _awilixKoa.route)('/'), _dec2 = (0, _awilixKoa.route)('/test'), _dec3 = (0, _awilixKoa.route)('/about'), _dec4 = (0, _awilixKoa.route)('/topics'), _dec5 = (0, _awilixKoa.GET)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = class helloAPI {
    constructor({ indexService }) {
        this.indexService = indexService;
        this.metaDictionaries = {
            "index": {
                title: "京程一灯",
                meta: '<meta name="keywords" content=京程一灯>'
            }
        };
    }
    createRenderer(serverbundle, template, clientManifest) {
        return (0, _vueServerRenderer.createBundleRenderer)(serverbundle, {
            cache: LRU({
                max: 10000
            }),
            runInNewContext: false,
            template,
            clientManifest
        });
    }

    async getIndex(ctx) {
        const rootPath = path.join(__dirname, '..');
        const serverBundle = require('../assets/vue-ssr-server-bundle.json');
        const clientManifest = require('../assets/vue-ssr-client-manifest.json');
        const template = fs.readFileSync(rootPath + '/assets/index.html', 'utf-8');
        const context = { url: ctx.url };
        const ssrrender = this.createRenderer(serverBundle, template, clientManifest);

        function createSsrStreamPromise() {
            return new Promise((resolve, reject) => {
                if (!ssrrender) {
                    return ctx.body = 'waiting for compilation.. refresh in a moment.';
                }
                const ssrStream = ssrrender.renderToStream(context);
                ctx.status = 200;
                ctx.type = 'html';
                ssrStream.on('error', err => {
                    reject(err);
                }).pipe(ctx.res);
            });
        }
        await createSsrStreamPromise(context);
    }
}, (_applyDecoratedDescriptor(_class2.prototype, 'getIndex', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'getIndex'), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
exports.default = helloAPI;