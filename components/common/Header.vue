<template>
  <view class="header">
    <text :class="left.text"></text>
    <text></text>
    <text :class="right.text"></text>
  </view>
</template>

<script>
export default {
  name: "Header",
  props: {
    left: {
      type: Object,
      default: function () {
        return {}
      }
    },
    center: String,
    right: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
//我的
.header {
  padding: 0 24px;
  display: flex;
  height: 26px;
  justify-content: space-between;
  align-items: center;

  text {
    font-size: 22px;
    font-weight: bold;
    color: #FFFFFF;
  }
}
</style>