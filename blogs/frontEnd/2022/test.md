---
title: Git相關點
date: '2022-02-16 18:24:59 +08:00:00'
sidebar: 'auto'
tags:
 - Git
categories:
 - 前端
---



這裏的内容會被顯示成摘要。

Have a Try ！

![ttuu](https://raw.githubusercontent.com/gpliufeng/imgbed/master/img/ttuu.gif)

<!-- more -->

## 關於Git的一些簡單知識點

### 一、從遠程到本地：
1、從其他遠程倉庫拉取項目代碼：

```git
#進入本地項目目錄
cd D:/Users/Desktop/xxxx

#初始化項目
git clone https://github.com/<username>/<repo>.git
```

2、改動後，先添加至暫存區，提交至本地倉庫：

```bash
#添加改動文件至暫存區
git add filename #添加特定文件
git add -A #添加所有改動文件

#提交至本地倉庫
git commit -m "commit message"  #引號中衛本次提交的説明
```



### 二、將代碼推送至遠程

![ttuu](https://raw.githubusercontent.com/gpliufeng/imgbed/master/img/ttuu.gif)

