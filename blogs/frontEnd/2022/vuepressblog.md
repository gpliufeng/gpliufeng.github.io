---
title: Vuepress框架 Theme-reco主题结合GitHub Pages搭建静态個人博客
date: '2022-02-14'
sidebar: 'auto'
tags:
 - 建站
categories:
 - 前端
---

## Vuepress/Theme-reco+GitHub Pages+GitHub Actions實現自動化發佈部署

### 一、准备：
软件安装：

Git

Node.js (包含npm)：npm版本低编译时可能会报错，将其更新至较高版本即可（此处使用v8.1.0）

### 二、初始化项目

任意创建一空白文件夹，CMD或GitBash（以管理员方式运行）执行以下命令：

```bash
#搭建脚手架：
npm install @vuepress-reco/theme-cli -g

#项目初始化（初始化时会让你填写部分信息例如项目名称、标题等：先填，后续可修改），
#最后按需选择： blog 或 2.x(此处选的blog)
theme-cli init blog
```

初始化完成后，文件目录大致如下：

```
├── blog 
     ├── .vuepress      
     │   ├── public   // 存放静态资源
     │   │     ├── avatar.png  // 头像图片 
     │   │     ├── favicon.ico   // 网站icon图标
     │   │     ├── hero.png    // 主页的中间的图片文件，1.6默认未配置使用该图片
     │   │     └── logo.png    // 网站导航栏左上角的logo图片
     │   │   
     │   └── config.js      // 配置文件，非常重要！！！  
     ├── blogs  // 存放博文，即.md文件（文件标题最好使用短英文，否则可能编译不通过）
     │   ├── ...
     │   ├── ...
     │   └── ... 
     ├── docs     // 侧边栏的配置文件
     ├── .gitignore       // 提交git仓库时需要忽略的文件
     ├── package.json      // 管理包文件
     └── README.md        // 自动生成的主页文件，后续修改博客主页可根据官方文档配置
```

run dev阶段（即利用Node.js在本地试运行）：

```bash
# 进入项目根目录
cd blog

# 安装依赖（静待）
npm install

# 本地试运行部署（实时渲染开发测试环境）
npm run dev
```

若未出现问题则会自动启动浏览器并打开页面（http://localhost:8080），如下图：

![bloghomepage](https://gitee.com/liufeng3214/imgbed/raw/master/img/b1903066c765706bebb0f0a21395e75d.png)

### 三、自定义配置：

主要配置文件在 `.vuepress/config.js`中，大部分内容都是可以自定义进行配置的，一下简单介绍配置参数，详情请见[项目官方文档](https://vuepress-theme-reco.recoluan.com/)。

- **title**:  对应加载动画的大标题，导航栏最左侧标题，浏览器页签的标题；

- **description**:  对应加载动画下的描述，网站描述节点，用于SEO；

- **dest**:  对应项目打包`npm run build`后的文件目录，存储打包后站点的静态文件；

- **head**:  表示html文档的head标签中需要额外插入的其他标签；

- **theme**：当前使用的主题；

- **themeConfig**:  主题的配置信息；

  - nav:  导航栏配置信息；

  - sidebar:  侧边栏的配置信息；

  - type:  当前项目类型，我选的是blog，所以默认是blog;

  - blogConfig:  自定义的导航栏配置信息，可根具需要自行设定；

  - friendLink：友链设置，默认有项目作者和项目官方文档链接；

  - logo:  首页导航栏左侧大图标，即`.vuepress/public/logo.png`

  - search:  是否开启搜索功能；

  - lastUpdate：文章底部显示的最后更新时间；

  - author：全局作者配置，若要为单篇文章配置作者，可在.md文件中配置`front-matter yaml`项；

  - authorAvatar:  作者头像；

  - startYear：博客开始时间；

  - record: ICP备案号

    recordLink： ICP 备案指向的链接

    cyberSecurityRecord： 公安部备案文案

    cyberSecurityLink： 公安部备案指向链接；

  - markdown：对`markdown`的解析配置，例如`linenumber`即为代码块显示行号；

可以在本地运行后，根据个人需求或喜好，将网站的基础设置根据官方配置文档或参数配置好。

### 四、部署

1、新建GitHub仓库，若想最后博客域名为`<username>.github.io`，则需将仓库命名为`<username>.github.io`，并最好设置为空，即不生成 ReadMe.md文件。

2、项目文件必要修改：

- 修改`.gitignore`文件，添加`public`（与config.js中的dist的值保持一致，防止将打包后的静态文件一并上传）。
- 修改config.js文件，增加`"base":"/github仓库名/"`（若仓库名为xxxx.github.io，则此项不需增加配置）。

3、将修改好的项目文件上传至新建的仓库（GitBash中执行）：

```bash
#进入到本地项目根目录
cd desktop/blog (改为你的路径)

#将项目文件夹初始化为本地仓库
git init

#提交至本地仓库
git add -A
git commit -m "first commit"

#配置ssH密钥登录远程仓库（自行了解）

#配置远程仓库（目标上传仓库）连接
git remote add origin https://xxxxx(仓库地址)

#上传项目文件至仓库master分支(首次上传需要加`-u`)
git push -u origin master
```

上传成功后，本地CMD或GitBash运行：`npm run build`打包项目至public目录，

打包完成后，在项目根目录中新建`deploy.sh`文件（注释掉与项目不符的语句）：

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:gpliufeng/APIUJI.git master:gh-pages

cd -

```

在GitBash中运行：`bash deploy.sh`

将打包后生成的静态文件上传至仓库的`gh-pages`分支，并在仓库的`setting->pages`填写合适的信息，至此可使用setting页面的域名在公网访问该项目。

### 五、配置GitHub Action自动化流程

登录Github，打开个人setting，最下方Devolopment Setting，新生成一个token，并配置repo、githubaction权限，复制token值。

打开仓库，并按图依次配置，输入复制的token值，并命名为BLOG_ACCESS_TOKEN（自定义）。

![GitHub Actions](https://gitee.com/liufeng3214/imgbed/raw/master/img/image-20220214155201843.png)

打开项目根目录下的 `package.json` 文件，添加一个 `homepage` 字段，以此来指定项目发布后的根目录：

```json
"homepage":"https://[username].github.io/[repository]"
```

在项目根目录下创建 `.github/workflows` 目录，在目录下创建一个 `.yml` 文件，该文件的命名没有要求（deploy.yml），文件内容可参考如下我使用的Action（部分命令根据实际需求修改）：

```yml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: (1)Checkout
        uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false

      - name: (2)Install and Build
        run: |
          npm install
          npm run build
        env:
          CI: false

      - name: (3)Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.BLOG_ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: public
```

**注：**此自动流程使用`JamesIves/github-pages-deploy-action@releases/v3`实现，

push代码至master分支后自动触发，将master分支中的文件打包编译后，将生成的静态文件上传至gh-pages分支，从而实现自动部署发布。若过程中出错，则会发送通知邮件至账号关联邮箱，届时可查看错误日志进行修改。

以上yml文件主要需修改（改成自己的即可）：

```yml
GITHUB_TOKEN: ${{ secrets.BLOG_ACCESS_TOKEN }}
BRANCH: gh-pages
FOLDER: public
```

### 六、发布文章

文章的编写：

由于该项目部分内容时由文章内容配置（例如：title，date，categories，tag，author等），所以在`.md`文件的最上方应添加`front-matter`块，即yml块，如下：

```yml
---
title: 第一篇文章
date: 2021-05-07
categories:
 - 分类1
tags:
 - 标签1
 - 标签2
keys:
 - 'ababf713be53f3d10366196bf0297c30'
isShowComments: false
---

第一篇文章

```

完成后将其按照分类放置在特定的位置，并使用git上传至仓库，待GitHub Action触发并成功完成后，即可在网站中查看新发布的文章。

**注：.md文件最好使用短英文命名，防止名称过长解析失败（或解析成功但無法打開）。**

### 至此，完结！！！
