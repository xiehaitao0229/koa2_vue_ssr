# koa2_vue_ssr
>这个项目是基于koa2+webpack4+vue+vuex，对vue进行服务端渲染的搭建demo，解决了vue做spa的时候对SEO不友好的问题，
>如果想了解直接对swig模板渲染的脚手架的话，可以看我之前写的脚手架项目https://github.com/xiehaitao0229/koa2-webpack4-gulp-awilix

####开发中用到的相应的插件
> * koa ：Koa -- 基于 Node.js 平台的下一代 web 开发框架
> * koa-static：Koa静态文件指定中间件Koa-static
> * co：基于生成器的nod​​ejs和浏览器的控制流程良好性，使用promises，可以让您以非常好的方式编写非阻塞代码。
> * log4js：日志管理
> * awilix：非常强大的依赖注入（DI）容器，用TypeScript编写。再次让IoC变得更好！
> * awilix-koa：Awilix助手，路由器和范围实例化Koa的中间件
> * cross-env: 设置环境变量
> * vuex: 管理vue数据状态
> * vue-router  管理前端路由
> * vue2.5  基于MVVM一款框架
> * axios  做前后端通信

#### 后台gulp 打包下载的依赖
> * gulp-rollup：主要在打包做 tree-shaking；
> * rollup-plugin-replace：打包时替换文件中的字符串
> * gulp-babel  对后端js编译转换
> * gulp-sequence 可以同步执行gulp任务
> *gulp-eslint 对后端代码的代码检测

####webpack 打包下载的依赖
> * babel-plugin-transform-decorators-legacy:修饰器（Decorator）是一个函数，用来修改类的行为。这是ES7的一个提案，目前Babel转码器已经支持
> * yargs-parser: 解析参数 插件
> * webpack-merge:合并对象
> * vue-server-renderer     vue-server-renderer/server-plugin 生成的 bundle 对象。
> * vue-style-loader  打包解析.vue文件

####让项目跑起来吧
> * 1.先git clone https://github.com/xiehaitao0229/koa2_vue_ssr.git
 >  * 2.cd koa2_vue_ssr
> * 3.cnpm install 下载依赖
> * 4.npm run client:dev  这个是生成前端的资源文件(vue-ssr-client-> * manifest.json)这个文件是对ssr的对照表文件
> * 5.npm run client:server 这个命令是生成vue-ssr-server-bundle.json文件，这个文件是打包前端资源整个的一个内容json文件
> * 6.npm run server:dev  这个是通过gulp来打包整个后端的资源到dist文件夹中
> * 7.  最后  npm ru start:dev 启动项目   访问http://localhost:8081/就可以看到下面结果啦！


另外：  npm run client:prod  这个是打包上线的前端资源命令
            npm run server:prod  这个是打包上线的后端资源命令
            npm run server:lint  这个是后端资源nodeuii文件夹的代码检查
