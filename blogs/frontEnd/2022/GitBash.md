---
title: GitBash alias别名的使用
date: '2022-04-08 18:24:59'
sidebar: 'auto'
tags:
 - GitBash
 - alias
categories:
 - 前端
---



> GitBash中使用alias
>
> 只在Git根目录下别名命令才有效。。。

<!-- more -->

## GitBash中配置alias方法

若在GitBash中需要经常使用到某一些命令，而且这些命令又都很长，这时候每次都手动进行输入的话，那就有点费时费力了。

alias的作用就是为了让频繁使用的命令变得简单，它能够完美的解决这个问题。

1. 进入GitBash所在的根目录（注：windows下的Program Files路劲需要加引号才能找到）

```shell
cd C:/"Programs Files"/Git
```

2. 创建`.bashrc`文件。

```bash
touch .bashrc 
vim .bashrc
  alias cdD = "cd D:/Users/Desktop"
  :wq
```

	3. 终端执行 `source .bashrc `

上述配置完成后，即可在GitBash中输入别名执行相应的命令！
