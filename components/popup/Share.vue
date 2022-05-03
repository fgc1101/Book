<template>
  <view class="share">
    <view class="header">
      <view class="close">
        <text class="icon-tianjia"></text>
      </view>
    </view>
    <view class="content">
      <view class="border">
        <text class="t-icon t-icon-shejiaotubiao-02"></text>
      </view>
      <view class="border">
        <text class="t-icon t-icon-QQkongjianx-"></text>
      </view>

      <view class="border">
        <text class="t-icon t-icon-weibo"></text>
      </view>

      <view class="border">
        <text class="t-icon t-icon-QQ"></text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Share"
}
</script>

<style lang="less" scoped>
.share{
  height: 170px;
  background-color: #2d353f;

  .header{
    padding: 18px 24px 0;
    display: flex;
    justify-content: end;

    .close{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #1b1f24;
      transform: rotate(45deg);
      text{
        font-size: 24px;
        color: #FFFFFF;
      }
    }
  }

  .content{
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 34px;

    .border{
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
      line-height: 62px;
      text-align: center;
    }

  }
}
</style>