<template>
  <view class="container">
    <view class="title">
      <text></text>
      <text>我的</text>
      <text class="icon icon-setting-filling-copy"></text>
    </view>

    <view class="avatar_view">
      <view class="avatar">
        <image src="/static/images/common/avatar.jpeg" alt=""></image>
      </view>
      <view class="info">
        <view class="user_info">
          <text class="name">谢千金</text>
          <text class="address">中国·荆州</text>
        </view>
        <view class="share">
          <text class="icon-share-copy"></text>
          <text>分享</text>
        </view>
      </view>
    </view>

    <!-- 数量统计 -->
    <view class="statistics">
      <view class="item">
        <text class="number">1286</text>
        <text class="text">关注</text>
      </view>
      <view class="item">
        <text class="number">3368</text>
        <text class="text">粉丝</text>
      </view>
      <view class="item">
        <text class="number">6673</text>
        <text class="text">喜欢</text>
      </view>
    </view>

    <!-- menus -->
    <view class="menu_list">
      <ul>
        <li>
            <text class="menu_name">个人信息</text>
            <text class="icon-right" style="color: #a2a8ba"></text>
        </li>
        <li>
          <text class="menu_name">我的消息</text>
          <text class="message_number">6</text>
        </li>
        <li>
          <text class="menu_name">账户余额</text>
          <text class="amount">1375.00<text class="icon-right" style="color: #a2a8ba"></text> </text>
        </li>
        <li>
          <text class="menu_name">我的评论</text>
          <text class="icon-right" style="color: #a2a8ba"></text>
        </li>
      </ul>
    </view>

  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 24px;

  //我的
  .title {
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

  // 用户信息
  .avatar_view {
    margin-top: 25px;
    height: 126px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    // 头像
    .avatar {
      width: 120px;
      height: 120px;

      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    // 用户信息
    .info {
      position: relative;
      width: 204px;
      height: 100%;

      .user_info {
        border-bottom: 2px solid #2a2c33;
        width: 100%;
        position: absolute;
        left: 17px;
        top: 18px;

        .name {
          display: block;
          font-size: 22px;
          color: #fff;
          font-weight: bold;
        }

        .address {
          display: block;
          font-size: 14px;
          color: #b5b7c5;
          font-weight: bold;
          margin-top: 4px;
          margin-bottom: 8px;
        }

      }

      .share {
        position: absolute;
        right: 0;
        bottom: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 86px;
        height: 28px;
        border: 2px solid #545c66;
        border-radius: 4px;
        color: #9497ab;
        font-size: 13px;
      }
    }
  }

  // 数量统计
  .statistics{
    width: 100%;
    height: 64px;
    margin-top: 26px;
    padding: 12px 0;
    background-color: #2b323b;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .item:nth-child(2){
      border-left: 1px solid #363c45;
      border-right: 1px solid #363c45;
    }

    .item{
      text-align: center;
      width: 33.333%;
      .number{
        color: #FFFFFF;
        font-size: 18px;
        font-family: HeadLineA;
        font-weight: bold;
        display: block;
      }

      .text{
        font-size: 12px;
        color: #75808d;
        font-family: "PingFang SC";
      }
    }
  }

  // 菜单列表
  .menu_list{
    margin-top: 45px;

    ul{
      list-style: none;
      padding-left: 0;
      li {
        width: 100%;
        height: 45px;
        padding-right: 24px;
        border-bottom: 1px solid #333c47;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 26px;

        .menu_name{
          font-size: 18px;
          color: #FFFFFF;
          font-family: "PingFang SC";
        }

        .message_number{
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #fb6894;
          color: #FFFFFF;
          font-size: 12px;
          text-align: center;
          font-weight: 600;
        }

        .amount{
          font-size: 18px;
          color: #fb6894;
          font-family: "PingFang SC";
          font-weight: 600;
        }
      }
    }
  }
}


</style>
