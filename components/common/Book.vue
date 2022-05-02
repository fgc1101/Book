<template>
    <view class="book">
      <view class="image">
        <image src="/static/images/common/book2.jpeg"></image>
      </view>
      <view class="info">
        <view class="title">
          <text>三体：死神永生</text><text class="icon-sangedian1"></text>
        </view>
        <text class="author">作者：刘慈欣</text>
        <text class="desc">刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品...</text>
      </view>
    </view>
</template>

<script>
export default {
  name: "Book"
}
</script>

<style lang="less" scoped>
  .book {
    width: 100%;
    height: 125px;
    background-color: #2b323b;
    display: flex;
    border-radius: 10px;
    white-space:pre-wrap;

    .image{
      width: 115px;
      height: 100%;
      position: relative;

      image{
        width: 84px;
        height: 100%;
        position: relative;
        border-radius: 10px;
        top: -10px;
        left: 10px;
      }
    }
  }

  .info{
    width: 100%;
    padding: 15px 20px 0;
    display: flex;
    flex-direction: column;

    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      text {
        color: #ffffff;
        font-size: 18px;

        .icon{
          color: #969baf;
        }
      }
    }

    .author{
      font-size: 12px;
      color: #5d637c;
      margin-bottom: 10px;
      border-bottom: 1px solid #969baf;
      padding-bottom: 6px;
    }

    .desc{
      width: 100%;
      height: 36px;
      font-size: 12px;
      line-height: 18px;
      color:#868dab;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>