---
title: PWDpage中的一些頁面設置問題
date: '2022-02-28 22:23:59'
sidebar: 'auto'
tags:
 - Position
 - flex
categories:
 - 前端
---





### 在設計PWDpage時遇到的一些問題

1、背景

背景圖片撐滿整個屏幕並固定，不隨頁面滾動；

```css
body {
    margin: 0px;
    padding: 0px;
    background: url(https://mini.apiao.net.cn/bing/getPic) no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
```



2、佈局

- 利用flex佈局，將不同組的div分爲4列，并且相互之間間距相等；
- 儅頁面壓縮 卡片換行時，頁面上半部分固定，下半部分可在頁面中滑動；
  - position: fixed 固定兩個div的位置，達到不動的效果
  - 利用div overflow-y: scroll Y軸垂直滑動
  - float: none 避免子div將父div撐開，調整後此條未生效
  - flex-wrap: wrap 超過父元素寬度，換行
  - height: auto 卡片内按鈕將卡片撐開，不溢出
  - background: rgba()  半透明背景

```css
/* flex-container */
.bodydiv{
    position: fixed;
    /* 249px-15px */
    margin-top: 234px;
    width: 100%;
    height: 60%;
    overflow-y: scroll;
    float: none;
    /* flex-container */
    display: flex;  
    /* height: auto; */
    justify-content: space-around;
    /* 总宽度超过父容器：换行； */
    flex-wrap: wrap;
}
/* 隱藏滾動條 */
.bodydiv::-webkit-scrollbar {
    display: none;
}
/* flex-items */
.div_outer{
    margin-top: 10px;
    width: 300px;
    min-height: 400px;
    height: auto;
    border: solid 1px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.7);
}
```

