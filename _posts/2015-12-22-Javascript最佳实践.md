---
layout: post
title:  "Javascript最佳实践笔记"
date:   2015-12-22
categories: frontend
permalink: /frontend/JavaScriptBestPractices
---

[原文链接](http://www.w3.org/wiki/JavaScript_best_practices) --[页面快照](/demo/PageSnapshot/JavaScript%20best%20practices%20-%20W3C%20Wiki.html)

##  1. Call things by their name — easy, short and readable variable and function names  
方便代码阅读，为以后维护提供便利：驼峰命名法、帕斯卡命名法、匈牙利命名法...

##  2. Avoid globals  
 全局变量的优点：  
 * 全局调用，方便传参  
 
 缺点：  
 * 生存周期长，过多全局变量会占用较多内存
 * 变量冲突，由于全局变量是在全局范围内有效，在网站越来越复杂或引入第三方库时，很容易造成变量名冲突
 * 函数不稳定性，由于全局变量在全局任意地方都有可能被修改，导致其他依赖的函数出现执行异常情况
 
## 3. Stick to a strict coding style  
* 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
* 消除代码运行的一些不安全之处，保证代码运行的安全；
* 提高编译器效率，增加运行速度；
* 为未来新版本的Javascript做好铺垫。

## 4. Comment as much as needed but not more
注释这玩意，重要也不重要。不重要在于：不写注释对程序运行没有任何影响。重要在于后期维护。  
不管你是维护别人的代码，还是过了一段时间后，维护自己开发的代码，那时候能在关键位置看到详细的注释是多么幸福的一件事。
方法的作用，以及关键位置的逻辑，写上详细的注释，方便后期维护人员快速理解你的代码，而那些一眼就能看懂的代码，或者说一个自解释的变量名就不用写注释了，毕竟写注释也是额外的工作量

## 5. Avoid mixing with other technologies
用Js去直接控制页面展示样式是不明智的。
* 不是所有JS coder都对css感兴趣，会导致后期维护的js开发头疼
* 当你需要修改一个样式的时候，会去js文件的找这段代码，这个过程通常是痛苦的
* 最好的方法是通过修改元素的类名，变相的修改样式

## 6. Use shortcut notation when it makes sense
* 对象、数组字面量： var obj = {pro1：“”} ； var arr = [1,2,3...]
* 三元表达式： var result = condition ？ r1 : r2 ;
* 赋默认值: var m = v || 20;
* ...  

## 7. Modularize — one function per task
面向对象五个基本原则：职责单一原则

## 8. Enhance progressively

## 9. Allow for configuration and translation

## 10. Avoid heavy nesting
避免重复嵌套。拆分嵌套，一方面符合职责单一原则，另一方面方便理解方法的逻辑

## 11. Optimize loops
循环通常会伴随着大量的性能消耗，特变是数量级较大的时候。优化循环有很多方面，特别是前端。
* 优化循环，优先优化的是循环内的执行体，因为这个循环性能消耗的根本原因；
* 循环次数非常多的时候，使用“达夫设备（Duff's Device）”，可以提升性能；
* 降低DOM相关操作，全局对象或大对象的读取，采用虚拟DOM和局部变量和提升性能；
* ...

## 12. Keep DOM access to a minimum

## 13. Don’t yield to browser whims
浏览器兼容性现在可以通过autoprefixer来自动加前缀了，当然，太新或某浏览器独有的特性还是不要写了

## 14. Don’t trust any data
数据检查方面，可以写一篇新文章了

## 15. Add functionality with JavaScript, don’t create too much content

## 16. Build on the shoulders of giants
随着node.js在前端领域的崛起，各种库，各种插件，能用就用上，方便开发。npm获取这些库也很方便。

## 17. Development code is not live code