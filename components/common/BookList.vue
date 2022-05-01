<template>
  <view class="container">

    <view class="title">
      <text class="left">{{left_text}}</text>
      <text class="right">查看全部<text class="icon-right"></text></text>
    </view>

    <view class="list">
      <view class="list-item">
        <BookItem book_author="刘慈欣" book_src="/static/images/common/book1.jpeg" book_title="三体：死神永生"></BookItem>
      </view>
      <view class="list-item">
        <BookItem book_author="刘慈欣" book_src="/static/images/common/book1.jpeg" book_title="三体：死神永生"></BookItem>
      </view>
      <view class="list-item">
        <BookItem book_author="刘慈欣" book_src="/static/images/common/book1.jpeg" book_title="三体：死神永生"></BookItem>
      </view>
      <view class="list-item">
        <BookItem book_author="刘慈欣" book_src="/static/images/common/book1.jpeg" book_title="三体：死神永生"></BookItem>
      </view>

      <view class="list-item">
        <BookItem book_author="刘慈欣" book_src="/static/images/common/book1.jpeg" book_title="三体：死神永生"></BookItem>
      </view>
      <view class="list-item">
        <BookItem book_author="刘慈欣" book_src="/static/images/common/book1.jpeg" book_title="三体：死神永生"></BookItem>
      </view>
    </view>

  </view>
</template>

<script>
import BookItem from "./BookItem";
export default {
  name: "BookList",
  props:{
    left_text: {
      type: String,
      default: "新发布"
    }
  },
  components:{
    BookItem
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

    .list{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap:wrap;

      .list-item{
        margin: 10px;
      }
    }
  }
</style>