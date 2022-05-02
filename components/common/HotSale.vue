<template>
  <view class="container">
    <view class="header">
      <text class="left">{{left_text}}</text>
      <text class="right">查看全部<text class="icon-right"></text></text>
    </view>

    <view class="hot-sale-list">
      <scroll-view  class="scroll-view" scroll-x="true" show-scrollbar="false">
        <view class="scroll-view-item">
          <Book class="book-item"></Book>
        </view>
        <view class="scroll-view-item">
          <Book class="book-item"></Book>
        </view>
        <view class="scroll-view-item">
          <Book class="book-item"></Book>
        </view>
        <view class="scroll-view-item">
          <Book class="book-item"></Book>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import Book from "./Book";
export default {
  name: "HotSale",
  data(){
    return {
      left_text: "热销版"
    }
  },
  components:{
    Book
  }
}
</script>

<style lang="less" scoped>
  .container {
    padding: 0 24px;

    .header{
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

    .hot-sale-list{
      margin-top: 36px;
      height: 125px;
      margin-bottom: 46px;
      
      .scroll-view{
        width: 100%;
        white-space: nowrap;

        .scroll-view-item{
          display: inline-block;
          width: 299px;
          margin-right: 20px;
        }
      }
    }
  }
</style>