<template>
  <view class="popup-msg">
    <image class="image" src="/static/images/common/book1.jpeg"></image>
    <text class="msg">已经将这本书加入到个人书架</text>
    <view class="button ok">
      <text>好的</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "addBookshelf"
}
</script>

<style lang="less" scoped>
.popup-msg{
  width: 275px;
  height: 383px;
  background-color: #373a48;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  .image{
    width: 108px;
    height: 160px;
    border-radius: 10px;
  }
  .msg{
    width: 212px;
    margin-top: 28px;
    font-size: 20px;
    color: #FFFFFF;
  }

  .ok{
    width: 212px;
    background-color: #FB6894;
    margin-top: 34px;
  }
}
</style>