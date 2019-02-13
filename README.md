# next.js入门教程实践

## 项目部署
Next.js 项目的部署，需要一个 Node.js的服务器，可以选择 Express, Koa 或其他 Nodejs 的Web服务器。本文中以 Express 为例来部署 Next 项目。

服务器的入口文件就使用上文中提到的 server.js，在 server.js 里添加了针对部署环境的选择，代码如下：

```
    const dev = process.env.NODE_ENV !== 'production'
```

为了区分部署环境，我们需要在 package.json 中修改 script 属性如下：


```
    "scripts": {
    "build": "next build",
    "start": "NODE_ENV=production node server.js -",
    "dev": "NODE_ENV=dev node server.js"
    }
```
其中，build 命令是用于打包项目，start 命令是用于生产环境部署，dev 命令是用于本地开发。

执行如下命令即可将 Next项目 部署到服务器：

$ npm run build
$ npm run start
执行完命令后，可在 `http://host:3000` 访问。其中，host 是指服务器的IP地址。