<template>
  <view class="book">
<!--    <image :src="/static/images/common/book1.jpeg"></image>-->
    <image :src="book_src"></image>
    <text class="title">{{book_title}}</text>
    <text class="author">{{book_author}}</text>
  </view>
</template>

<script>
export default {
  name: "BookItem",
  props:['book_src', 'book_title', 'book_author']
}
</script>

<style lang="less" scoped>
  .book{
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    image{
      width: 96px;
      height: 148px;
      border-radius: 16px;
    }

    .title{
      font-size: 14px;
      color: #fff;
      font-weight: 600;
    }

    .author{
      font-size: 12px;
      color: #5d637c;
      font-weight: 600;
    }

  }
</style>