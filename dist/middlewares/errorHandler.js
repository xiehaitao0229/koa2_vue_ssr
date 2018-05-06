'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const errorHandler = {
    error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (error) {
                //error logs pm2 logs
                logger.error(error);
                ctx.status = error.status || 500;
                ctx.body = 500;
            }
        });
        app.use(async (ctx, next) => {
            await next();
            if (404 != ctx.status) return;
            ctx.status = 404;
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://yoursite.com/yourPage.html" homePageName="回到我的主页"></script>';
        });
    }
};
exports.default = errorHandler;