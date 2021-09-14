<template>
  <div>
    demo
    {{ test }}
    <div @click="handleClick">测试一下点击事件</div>
  </div>
</template>
<script>
export default {
  name: "DemoTest",
  props: {
    test: "",
  },
  methods: {
    handleClick() {
      console.log("这个是内层的功能");
      this.$emit("emitClick", this.test);
    },
  },
};
</script>
