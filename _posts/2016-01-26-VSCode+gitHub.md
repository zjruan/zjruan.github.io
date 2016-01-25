---
layout: post
title:  "Vscode + github"
date:   2016-01-26 
categories: collecting
permalink: /collecting/visualstudio_code_github 
---

> visual studio code用了也有一段时间了，除了task功能还不是很清楚，其他基本都已摸熟。自己的博客也基本是用这个编辑器写的。
也许是从C#转过来的缘故，自己对ms的工具更富有“感觉”。从vscode刚出来开始就一直关注它，只是它现在还不支持代码
折叠功能，否则sublime我也不用了。

## 一、故事背景

在用的过程中遇到了一个问题，就是git的push功能一直用不了，一用就卡住，于是我一直都是使用vscode的commit all，
然后再用git bash的git push 来提交我的代码，这个过程很简单但对于一名程序员来说，还是不能忍啊。

## 二、机遇巧合

今天晚上闲来无事，玩了两把游戏感觉没意思，刚好想弄弄博客，于是开始折腾github 的 ssh key 。其实用起来非常简单，
这是我以前感觉很高大上，没敢去搞。在上一片文章里简单的介绍了下ssh key,没看过的[可以去瞅瞅](/github_ssh_key.html)。

## 三、解决方案

1. 配置vscode的github，没配置过的，在commit的时候，工具会提示你配置，这是后打开vscode中git的output，你能看到具体的配置方法:  
    `git config --global user.name zjruan`  
    `git config --global user.email rzhj@foxmail.com`  
    这命令在git bash工具中完成。
    
2. 配置ssh key  
    <h3 style="color:red">注意：ssh key 的口令（passphrase）直接回车，即空口令，这样在push的时候就不需要输入口令了，否则用vscode push
    的时候无法调出git bash工具输入口令，从而导致push失败。当然，这种做法是不安全的。不过对于开源的个人博客来说，还是很好用的</h3>
