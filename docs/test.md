---
title: 引入插件
---

以引入 element 包 为例

## 第一步 安装

安装 elementui 包

```js
    npm i element-ui -S
```

## 第二步 引入

在 enhanceApp.js 文件中引入，参考 enhanceApp.js 文件

```js
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(ElementUI);
};
```

## 第三步 测试

::: demo 这是一个组件写的案例

```html
<template>
  <div>
    <el-button type="primary">element-ui 原始按钮</el-button>
    <el-button type="success">element-ui 成功按钮</el-button>
  </div>
  <div class="box-vue" @click="handleClick">Vue - {{ message }}</div>
</template>
<script>
  export default {
    data: () => ({ message: "测试点击我" }),
    methods: {
      handleClick() {
        this.$alert("测试", "提示");
      },
    },
  };
</script>
<style>
  .box-vue {
    color: red;
  }
</style>
```

:::
