"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _errorHandler = require("./middlewares/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { createContainer, Lifetime } = require('awilix');
const { loadControllers, scopePerRequest } = require('awilix-koa');
const app = new _koa2.default();
//创建IOC的容器
const container = createContainer();
//每一次的请求都是一个 new model
app.use(scopePerRequest(container));
//装载所有的models 并将services代码注入到controllers
container.loadModules([__dirname + '/services/*.js'], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
});
_log4js2.default.configure({
    appenders: { cheese: { type: 'file', filename: './logs/xht.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
//此处除了配置config开发阶段还有/__webpack_hmr
const config = (0, _config2.default)(app);
const logger = _log4js2.default.getLogger('cheese');
_errorHandler2.default.error(app, logger);
//注册所有的路由
app.use(loadControllers(__dirname + '/controllers/*.js', { cwd: __dirname }));
app.use((0, _koaStatic2.default)(config.staticDir)); // 静态资源文件
app.listen(config.port, () => {
    console.log(`xhtSystem listening on ${config.port}`);
});
module.exports = app;