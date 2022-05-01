<template>
  <view class="container">
    <view class="title">
      <text class="left">{{left_text}}</text>
      <text class="right">查看全部<text class="icon-right"></text></text>
    </view>

    <view class="c-list uni-padding-wrap uni-common-mt">
      <scroll-view  class="scroll-view" scroll-x="true">
        <view v-for="(item, index) in cate_list" class="scroll-view-item">
            <view class="item">
              <image :src="item.src_url"></image>
              <text>{{item.title}}</text>
            </view>
        </view>
        <view class="scroll-view-item">
          <view class="item">
            <image src="/static/images/common/avatar.png"></image>
            <text>科技</text>
          </view>
        </view>
        <view class="scroll-view-item">
          <view class="item">
            <image src="/static/images/common/avatar.png"></image>
            <text>科技</text>
          </view>
        </view>
        <view class="scroll-view-item">
          <view class="item">
            <image src="/static/images/common/avatar.png"></image>
            <text>科技</text>
          </view>
        </view>
        <view class="scroll-view-item">
          <view class="item">
            <image src="/static/images/common/avatar.png"></image>
            <text>科技</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  name: "CateList",
  props:{
    left_text:{
      type:String,
      default: "排行"
    },
    cate_list:{
      type:Array,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0 24px;


    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left{
        font-size: 18px;
        color: #fff;
        font-weight: 600;
      }

      .right{
        font-size: 13px;
        color: #a2a8ba;
      }
    }

    .c-list{
      margin-top: 24px;
      padding-bottom: 10px;
      margin-bottom: 30px;
      border-bottom: 1px solid #5d637c;

      .scroll-view{
        width: 100%;
        white-space: nowrap;

        .scroll-view-item{
          display: inline-block;
          width: 80px;
          height: 120px;
          margin-right: 20px;

          .item{
            display: flex;
            flex-direction: column;
            image{
              width: 80px;
              height: 80px;
              border-radius: 20px;
            }

            text{
              margin-top: 10px;
              font-size: 14px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
</style>