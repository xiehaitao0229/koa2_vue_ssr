import Koa from "koa";
import serve from "koa-static";
import log4js from 'log4js';
import configure from "./config";
import co from 'co';
import errorHandler from "./middlewares/errorHandler";
const { createContainer, Lifetime } = require('awilix');
const { loadControllers, scopePerRequest } = require('awilix-koa');
const app = new Koa();
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
log4js.configure({
    appenders: { cheese: { type: 'file', filename: './logs/xht.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
//此处除了配置config开发阶段还有/__webpack_hmr
const config = configure(app);
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
//注册所有的路由
app.use(loadControllers(__dirname + '/controllers/*.js', { cwd: __dirname }));
app.use(serve(config.staticDir)); // 静态资源文件
app.listen(config.port, () => {
    console.log(`xhtSystem listening on ${config.port}`);
});
module.exports = app;
