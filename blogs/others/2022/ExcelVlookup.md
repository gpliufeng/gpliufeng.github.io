---
title: Excel vlookup相关操作
date: '2022-06-02 10:49:59'
sidebar: 'auto'
tags:
 - Excel
categories:
 - 其它
---

### Excel教程：vlookup一对多匹配并全部显示出来的案例：一次性返回多个结果值

> **内容提要：**关于vlookup返回多个结果的问题，我们使用一个案例来讲解vlookup一次性匹配多行值、一对多匹配并全部显示出来。

VLOOKUP函数，是咱们在使用Excel的过程中，必须必须要学会的一个函数。前面咱们也分享了很多关于VLOOKUP函数的学习教程。

今天再为大家分享一个vlookup一对多匹配并全部显示出来的实战案例。

根据F列的故障分类名称，在G列使用VLOOKUP函数将对应的故障描述列表呈现出来。

<img src="https://s2.loli.net/2022/06/02/dk8ADeOCKXHptj4.jpg" alt="img" style="zoom:67%;" />

在G2单元格输入公式，然后下拉得到对应的故障描述清单，做出来的效果如下所示：

<img src="https://s2.loli.net/2022/06/02/DcSXaiBwuAJ2hxV.gif" alt="img" style="zoom:80%;" />

这是一个典型的vlookup返回多个结果的案例。

这个案例棘手的问题在于一个故障分类，对应的故障描述有多个。而VLOOKUP函数常规基础写法只能找到其中一个。

=VLOOKUP(F2,C1:D17,2,0)，公式只返回了第一个故障描述，下面还有3个就没有返回。要想4个故障描述都能够查找出来，我们就需要重新思考。

<img src="https://s2.loli.net/2022/06/02/UGXWg8PpaovNmF7.jpg" alt="img" style="zoom:80%;" />

下面，带着大家来理一下公式思路。我们可以借助增加辅助列的方式实现vlookup一次性匹配多行值。

**第一步，在B列统计出故障分类的个数。**

B2单元格输入公式：=COUNTIF(C$2:C2,C2)

<img src="https://s2.loli.net/2022/06/02/AEmN95Bi31f74eR.jpg" alt="img" style="zoom:80%;" />

**第二步，在A列将B列和C列链接起来。**

A2单元格输入公式：=C2&B2

<img src="https://s2.loli.net/2022/06/02/Se4Et1BJqmp8jzv.jpg" alt="img" style="zoom:80%;" />

**第三步，通过上面两步，我们把辅助列做好以后，查找条件具备了，就可以使用vlookup查找多个匹配值。**

G2单元格输入公式：=VLOOKUP(F$2&ROW(1:1),$A$2:$D$17,4,0)，下拉即可。

<img src="http://www.ittribalwo.com/upfiles/image/20211219212120.jpg" alt="img" style="zoom:80%;" />

公式思路：用ROW函数根据公式所在位置返回不同行号，辅助VLOOKUP构建联合查询条件，然后在构建好的辅助区域进行查找，无论符合条件的数据有多少个，都可以完成返回所有结果。

**第四步，优化公式。**

大家也发现了，第三步的公式，我们随着公式向下复制，出现了一些不必要的NA错误，不美观。

我们可以借助一个函数来将这些NA错误屏蔽不显示。所以在公式外面嵌套IFERROR函数，再下拉，就完美了。

`=IFERROR(VLOOKUP(F$2&ROW(1:1),$A$2:$D$17,4,0),"")`

<img src="http://www.ittribalwo.com/upfiles/image/20211219212238.gif" alt="img" style="zoom:80%;" />



以上文章转载于 http://www.ittribalwo.com/article/4865.html，侵删。