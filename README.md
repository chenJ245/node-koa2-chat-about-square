# 趣味空间
此项目是个人趣味空间项目
技术栈： Node + Koa2 + ejs + MySQL + Sequelize + Session + Redis + Jest 测试

项目运行命令：
1. npm run dev 
2. npm run prd (pm2)

技术方案：
页面：先构造模板 使用ejs做的模板，然后去 routes里面的API文件夹，
做（点击、注册、点击关注....）然后routes里面还有一个校验(redis)
然后再去 controller构造业务逻辑，因为routes里面的API和view不能直接
直接透过访问后层次的数据什么的，要经过 controller 处理然后在把数据
传到service去进行数据处理，然后再去cache（使用的redis）缓存一下公共
的信息例如广场页，然后格式化处理也是在 service里面进行，数据库层面是使
用db文件夹，使用的sequelize 做定义模型，封装操作，最后 
就是日志（日志包括，seq语句的输出，正常运行的日志和错误日志）。

技术选型：
1.框架选型： ( koa2 vs express vs egg )
koa2 选择原因：express是基于js回调，koa2是在express的基础之上开发出来的框架，在里面不在使用回调形式，而是 async await 异步函数 , 为什么不用egg呢，因为他是一个企业开发的框架，egg是在koa2的基础上比egg更加的繁琐，我们选用koa2，可以自己进行编写达到egg的效果，所以说koa2是最适用于我们学习开发的。

2.数据库选型：( mysql vs mongodb )
Mysql 选择原因：mysql 是企业中用的最广泛的、成本最低的一个数据库系统，mongodb 没有mysql那么广泛，而且熟悉程度也是 mysql也是比较高，最主要的是 mysql是一个关系型数据库，方便做后续的连表查询。

3.登录技术： ( session vs jwt )
Session 选择原因: 在 webserver中 session 要比 jwt 更加的广泛一些，jwt 更适用于前后端分离，做那这种分散形的项目，session 比较适合页面比较统一，比较集中话的 webserver。

4.前端页面：( ejs后端模板引擎 vs vue/recat 前端框架 )
Ejs 选择原因： 不选择 vue/recat的原因，第一就是因为他们本身就比较复杂，而且项目主要写node 用 vue/react 之后 就相当于全栈开发，顾忌全局，选择后端模板引擎，第二就是用了 vue/react之后就是前后端分离开发模式，而且ejs模板引擎比较简单。

5.缓存数据库: ( redis )

6.单元测试 ( jest )
