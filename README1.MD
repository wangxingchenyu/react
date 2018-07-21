#React 脚本架安装&注意点 
- vue-cli 
- create-react-app
- 都是基于npm node包管理工具来执行
- yarn add install 也都是可以的

## 脚手架安装注意点
- 如果用npm来装软件 ，想选择哪一个版本的话，则要用@符号
- pip == 来确定软件或者包的版本号
- 安装方法 (create-react-app 项目名[自定义]) 安装的时候我们用是的npm 但是在脚手架创建的时候，里面的包安装用的是yarn
    - 安装的时候错误一
    ```angular2html
      Could not create a project called "ONE" because of npm naming restrictions:
        *  name can no longer contain capital letters
    ```
    - 安装的时候错误二
    ```angular2html
      Could not create a project called "云知梦" because of npm naming restrictions:
        *  name can only contain URL-friendly characters
    ```
    - 可以用"_" 也可以用中划线"-"

- 学前必备知识
  - es6 ajax promise async await fetch axios 
  - 学习就是一环套一环的

#React脚本架目录详解
- node_modules  脚本架默认给安装的包
- public        存放的页面(单页应用SPA )
- src           主要的react编程目录，主入口文件是index.js      
- .gitingore    集中式的svn 采用分布式的 github git commit -a -m ""
- package.json  npm init 里面存放的是安装的开发与产品安装包与相关的script执行脚本的配置


   - 在create-react-app 项目名 在装的时候会将相关的包安装好，安装好的包放的路径就是在node_modules目录里面
   - 我们可以通过es6 里面的import 在src目录下面导入到index.js主入口文件里面去，也可以在主页面时面直接的引入
   - 建议引入的路径为绝对路径 在主页面里面要用%PUBLIC_URL% 来构建绝对路径

## 默认安装 
 - "react": "^16.4.1",
 - "react-dom": "^16.4.1",
 - "react-scripts": "1.1.4"  
 
## 默认安装的命令
- "start": "react-scripts start",
- "build": "react-scripts build",
- "eject": "react-scripts eject"  

## 脚手架
- webpack ,babel ,url-loader file-loader style-loader css-loader less,less-loader webpack-dev-server html-webpack-plugin

## React 脚手架调用的关系
-  "start": "react-scripts start", node_modules>.bin>react-scirpts>node xxx 
-  node_modules>react-scrpit>package.json 查看默认脚手架安装有webpac,等内容

## 渐进式   
  -  一个框架集成大部分的功能，但是也不能完全的适应每个项目的需要，所以要安装其它的包，用来丰富框架的整体功能
    
## 全家桶
  - 几乎包含了各项目所需要的或者所依赖的库
  reactDOM react react-router-dom redux React-redux axios 

## 安装包，需要来判断 ，是否需要更改webapck的配置，如果不需要的话，则直接在主文件时面import 就可以了
## entry output resolve moduls=[]

## 如果安装的包需要更改webpack的配置的话，则要将配置相关的文件暴露出来
- yarn eject  这个操作是不可逆的，只能执行一次，一旦暴露了，则不能隐藏
- 如果你已经在当前目录中用到github，需要先提交然后再暴露，然后再暴露出来
- 多出来两个目录，一个是scripts   一个是config

> config
> scripts

## config
- webpack.config.prod.js
- webpack.config.dev.js

## scripts
- build.js  打包的时候用到   webpack.config.prod.js
- start.js  开发的时候用到   webpack.config.dev.js
- 如果改变配置文件，则要同时修改开发与生产两个配置文件才行
    - 在开发环境下面配置
    ```angular2html
       {
                  test: /\.(css|less)$/,
                  use: [
                    require.resolve('style-loader'),
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                      },
                    },
                    {
                      loader: require.resolve('postcss-loader'),
                      options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                          require('postcss-flexbugs-fixes'),
                          autoprefixer({
                            browsers: [
                              '>1%',
                              'last 4 versions',
                              'Firefox ESR',
                              'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                          }),
                        ],
                      },
                    },
                      {
                          loader: require.resolve('less-loader'),
                      },
                  ],
                },
    ```
- 环境变量的配置
 - 配置协议  set HTTPS=true&yarn start ps: true与&中间不能有空格
 - 配置端口
 - 配置域名
 
 
 

