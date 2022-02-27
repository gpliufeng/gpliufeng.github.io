---
title: Git相關點
date: '2022-02-16 18:24:59'
sidebar: 'auto'
tags:
 - Git
categories:
 - 前端
---



> Tips: 這裏的内容會被顯示成摘要。
>
> 1.可以編輯文案;
>
> 2.可以添加圖片作爲文章的封面。
>
> Have a Try ！

<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.learnku.com%2Fuploads%2Fimages%2F201911%2F20%2F1%2FtcnsXi0G1J.png!large&refer=http%3A%2F%2Fcdn.learnku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647597080&t=42b647b9acfe2983148364dde0c2d84e" alt="img" style="zoom:66%;" />

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

1、配置账号登录权限（如GitHub、Gitee等，使用ssh密钥进行登录验证）；

<img src="https://gitee.com/liufeng3214/imgbed/raw/master/img/image-20220225105044785.png" alt="image-20220225105044785" style="zoom:50%; " />

2、配置远程仓库地址；

```bash
#链接为远程仓库地址
git remote add origin https://xxx/xxxx.git
```

3、推送到远程仓库；

```bash
#若首次提交，且仓库为空，则需加上参数 -u
git push (-u) origin master
```
