---
layout: post
title:  "Git SSH Key 使用说明"
date:   2016-01-25 
categories: collecting
permalink: /collecting/github_ssh_key
---

> 自己github项目都是在公司鞋的，包括一些博客。一次在宿舍帮一个朋友测试一个QQ公众号的bug，
想把测试页面挂到我的demo页面上，但是发现我的项目down不下来，于是就没搞了。这次趁着
有时间，搞了下ssh key，以后就可以在宿舍写博客了。

> [github 上的ssk教程，要学习的请走这。。。](https://help.github.com/articles/generating-an-ssh-key/)

> 本文章只是起记录作用，记录一些简单的命令，方便以后查看

## 一、什么是 ssh key

> SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this section.

简单的说，就是ssh通信不用用户名和密码。当然，还需要设置一个口令（passphrases），如果直接回车，在push的时候，便不需要输入口令。

## 二、生成并使用 ssh key

1. 下载git bash 工具，安装。[git tool 下载地址](http://git-scm.com/downloads)
2. 打开git bash，键入`$ ssh-keygen -t rsa -b 4096 -C "git_user_name@foxmail.com"`

```
    $ ssh-keygen -t rsa -b 4096 -C "git_user_name@foxmail.com"
    Generating public/private rsa key pair.
    Enter file in which to save the key (/c/Users/ruanz/.ssh/id_rsa): //此处直接回车
    Enter passphrase (empty for no passphrase): //此处键入口令，用于ssh通信，例如20160125（注意：此处输入，无字符提示）
    Enter same passphrase again: //重复输入口令
    Your identification has been saved in /c/Users/ruanz/.ssh/id_rsa. // 私钥文件地址
    Your public key has been saved in /c/Users/ruanz/.ssh/id_rsa.pub. // 公钥文件地址
    The key fingerprint is:
    SHA256:d6iYkHcsVhbC0OERmpuLfYpQEQZ+TAdAr+a1JVDgkjA git_user_name@foxmail.com
    The key's randomart image is:
    +---[RSA 4096]----+
    |E==+o==o.        |
    |++=..+oo .       |
    |o+.+o . o        |
    |. +. + +   .     |
    | o.o=.+ S o .    |
    |o..o+= = o .     |
    |....o + .        |
    | . . o           |
    |  . .            |
    +----[SHA256]-----+

```
3. 找到公钥文件，用文本编辑器打开，然后全选 + 复制。  
`ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDFDBA/8tFLHaq8G0iIl9CclYlYxlBvBbvGMQS+PHNPK
8bKhRI0XqhIMICfaqoXW+PdUEygX4rzoFUTNd4KO0myL9XMf4dC5oBq9rVcbMd/r5XInayQiHJm0QKPkym
2SGb0k8ka41UIejEd+EAUahRGq//YS/6dwrb1gaRWlvXJiUKWiHRdEXPkTYhWciCy3UhYsmcRKBX+t2DF9
SsiRTlNGIZY14m93Rzmo5I9Tqe62/Z8nAsuq7Vhr2xfrKpRqVYKn4ESX3d64RwOpABa4iX2o1GWq/aM6FL
HD/KgVY4TmKxp5tC+nnaD+Rg20E62eeKRUbp2yWdOwDUiby3bQtVyyF1CMS06eJG0KVI6RuUCZ7/JHJ+o/
MU8bL9Tb9GKXoMc5f6lTQVBLW3knp1ljFL1OOKT3MbdiidynZU8psTslldjEukRjNH5up59oqPe0O+Nd5F
GusU1I3J/N173Sb7mtvHa8Fk6WvX0sGmj6OokkRMdEzl0QoXlqytwzO95BuVhq0a92zXmdIr3eh8VIKH39
TQWr9z7NgHulyQqHbdVuTrbXSds9DP6h60ul3CtXJCzn5jRMUwl6RiyFTMREZkdxW/Z/QOsEBsB+TDP34O
VzlUy/13yA7oOozBMryHHYv+TE5QG7zAxX4RmmVeuYuFACxH/tdaFZyqSNRxStgydsw== git_user_nam
e@foxmail.com
`
4. 打开github设置中的[【ssh keys】](https://github.com/settings/ssh) ，点击“Add SSH key”按钮，
随便取个title名，然后再key中将刚才复制的 公钥 复制进来，再点绿色的 “Add key”。  
![测试图片](/sources/ssh_key.png)
5. 测试，可以选这一个项目，然后复制ssh 连接，然后clone该项目,例如我自己的博客  
    `git clone git@github.com:zjruan/zjruan.github.io.git`