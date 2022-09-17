# koa2 weibo
author 阿白@GitHub

2-12: sequelize
ORM - Object Relational Mapping
建模（外键） & 同步到数据库
增删改查 & 连表查询

ORM:
数据表，用 JS 中的模型（ class 或者对象 ） 代替
一条或者多条记录，用 JS 中一个对象或数组代替

第3节 总结:
框架选型 koa2 
数据库选型 mysql
登录技术 session vs jwt
前端页面 ejs
缓存数据库 redis
单元测试 jest

技术方案设计
架构设计
页面（模板，路由）和 API 设计
数据模型设计

            用户管理的总结：
    创建页面（模板，路由）
    数据建模
    开发登录、注册 API(分层) 包含用户名是否出在的 API 还有 JSON schema 验证
    抽离 loginCheck 中间件
    单元测试
    重点就是 技术方案的 构架图 
    
第六章总结:
创建页面： 模板和路由
开发接口（修改信息，修改密码，退出登录，图片上传）
单元测试（修改密码，修改基本信息，退出登录）

第七章总结:
创建数据模型(微博首页index)&同步导数据库(blog)
查看模板代码，接口设计
开发接口(考虑 xss 攻击) & 数据格式 校验
单元测试 (content, image)

第八章总结：
路由和模板(后端渲染数据 SSR)
加载更多
单元测试

第九章总结： 
微博广场页
模板和路由(缓存)
加载更多
单元测试

第十章总结:
创建数据模型： 用户关系
查看模板代码
路由和接口的开发(粉丝列表，关注/取消关注，关注人列表)
单元测试

// git 的使用
指令：
//初始化仓库
git init 
//对状态的跟踪
git status
//添加文件内容到暂存区（同时文件被跟踪）
git add
//添加所有文件
git add .
git -commit -m 'first commit' //从暂存区提交 -m：注释
git commit -a -m 'full commit'从工作区提交
git log //查看提交历史记录
git diff //工作区与暂存区的差异
git checkout HEAD -- <file> //将内容从上次提交复制到工作目录
git branch <branchName> //创建一个分支
git branch -v //显示所有分支信息
git checkout - //恢复到上一个分支   
git push //将本地历史推送到远程
git remote add  origin ~/git-server //添加一个远程仓库的别名
git remote -v //查看远程仓库信息
git pull
	
