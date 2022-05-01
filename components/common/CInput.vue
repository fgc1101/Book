<template>
  <view class="c-input">
    <label class="input-label">{{label_text}}</label>
    <input type="text" class="input-value" placeholder="搜索..."/>
  </view>
</template>

<script>
export default {
  name: "CInput",
  props:{
    label_text: String
  }
}
</script>

<style lang="less" scoped>
.c-input{
  border-radius: 5px;
  height: 54px;
  background-color: #f7f7fb;
  position: relative;
  padding: 0 17px;

  .input-label{
    position: absolute;
    top: 9px;
    font-size: 12px;
    color: #69707f;
  }

  .input-value{
    position: absolute;
    bottom: 5px;
  }

  /deep/ .input-placeholder{
    font-size: 14px;
  }

  /deep/ .uni-input-input {
    font-size: 16px;
    font-family: "Montserrat-Medium";
    font-weight: 400;
    color: #1d1e2c;
  }

}
</style>