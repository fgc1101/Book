<template>
	<view class="container">
    <view class="header">
      <text class="icon icon-fanhui"></text>
      <text>科幻</text>
      <text class="icon icon-caidan"></text>
    </view>

    <view class="list">
      <view class="list-item">
        <Book></Book>
      </view>
      <view class="list-item">
        <Book></Book>
      </view>
      <view class="list-item">
        <Book></Book>
      </view>
      <view class="list-item">
        <Book></Book>
      </view>
      <view class="list-item">
        <Book></Book>
      </view>

    </view>
	</view>
</template>

<script>
  import Book from "@/components/common/Book";
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
    components:{
      Book
    }
	}
</script>

<style lang="less" scoped>
  .container{
    padding: 0 24px;

    //我的
    .header {
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

    .list-item{
      margin: 30px 0;
    }
  }
</style>
