# ⚛️SRIM2013安装



- SRIM在Windows10下安装“踩坑”记录
- 我们目前的开放环境一般都是Windows10，很少有人使用Windows7，WindowsXP之类的，所以有可能碰到如下问题





## 一、版本信息

- 软件版本：SRIM2013
- 电脑系统版本：『Windows10』
- PS：老师的电脑『Windows7』是没有碰到这种奇怪的现象的









## 二、安装过程出现问题的情况





### （1）未注册bug产生

```txt
Run-time error '339":
Component 'RICHTX32.OCX' not correctly registered: file is missing orinvalid
```





### （2）解决方案

- 1、第一步，去网上查找对应的名字的东西下载
- 2、使用下述操作进行注册



Windows10下获得管理员权限，2种比较快速的方法

方法1：win+X，然后按下A

在出现的管理员的powershell中cd到那个文件的目录之后再

```cmd
regsvr32 RICHTX32.OCX
```















## 三、区域语言设置



### （1）bug产生原因



- 1、使用PEID逆向如下：SRIM2013是一个没有进行加壳保护的软件，所以才能直接逆向出结果，该软件的编写使用的是VB语言。

<img src=".\img\01.PEiD逆向结果VB.png">

- 2、猜测：软件是由于母语为英语的开发者开发的，编写后对Unicode编码的中文，支持不好
- 3、导致的现象：（SRIM软件能打开，我们使用TRIM Calulation会导致无法显示文字）

『**主界面显示**』

<img src=".\img\02.SRIM主界面.png">

『**TRIM显示出错**』

<img src=".\img\03.显示问题.png">

『**关闭上面的窗口的方式**』

- 1、快捷键『Ctrl+Shift+ESC』打开任务管理器，安装图示进行操作就可以关闭
- 2、操作图片如下

<img src=".\img\04.解决方案.png">











### （2）解决方案

> 『修改系统编码』

- 1、快捷键『win+R』打开窗口，输入`intl.cpl`后确认
- <img src=".\img\05.intl.png">
- 2、弹出窗口后，安装下面操作

<img src=".\img\06.区域语言设置.png">

- 3、重启计算机『一定要重启』







