---
title: 使用指南
---

## 说明

- 如果不用展示：vue 的组件效果、及该效果的代码写法，可以直接用 vuepress 就够了
- 具体详细用法，请观看[vuepress 文档链接](https://vuepress.vuejs.org/zh/guide/)
- 本项目主要整合了两个功能
  - vue 组件示例一次编写，即可直观展示效果，也能看到具体代码
  - 将文件内的标题，从左侧移到右侧，更为明了（个人喜好）

## 安装

可直接从下面链接中 clone 或下载到本地<br/>
[github 地址](https://github.com/wangli66/vuepress-simple-demo)
https://github.com/wangli66/vuepress-simple-demo

## 运行介绍

可以使用 npm 或者 yarn 进行安装包和其他操作,本例使用 npm 做示例

1、安装依赖包

```js
    npm install
```

2、启动项目

```js
    npm run docs:dev
```

## 导航栏侧边栏配置说明

1、说明文件建立的位置在 docs 目录下，例如示例的文件目录：docs->example<br/>
2、导航栏的配置在：docs->.vuepress->config->nav.js<br/>
3、侧边栏的配置在：docs->.vuepress->config->sidebar.js<br/>

::: tip
导航栏的根目录/必须放在最后一项

```js
module.exports = {
  "/example/": [["/example/", "示例 1"], "/example/test2", "/example/test3"],
  "/": ["/", "/test"], //在最后一项
};
```

:::

## 使用自定义组件写 demo

1、组件需放在.vuepress->components 文件夹中，示例中写了一个 test 的组件<br/>
2、编写 demo
::: demo 编写自定义组件的 demo

```html
<template>
  <demo-test :name="name" @emitClick="emitClick"></demo-test>
</template>
<script>
  export default {
    data: () => ({ name: "这是调用时的自定义属性" }),
    methods: {
      emitClick() {
        alert("测试点击事件——" + this.name);
      },
    },
  };
</script>
```

:::
