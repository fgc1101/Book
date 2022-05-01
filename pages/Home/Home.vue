<template>
	<view>
    <Header :left="left" :right="right"></Header>

    <!-- 搜索  -->
    <view class="search">
      <text class="icon icon-sousuo"></text>
      <input type="text" class="s_input" placeholder="搜索...">
    </view>

	</view>
</template>

<script>
import Header from "@/components/common/Header";
	export default {
		data() {
			return {
				left:{
          text:'icon-jiangbei'
        },
        right:{
          text:'icon-caidan2'
        }
			}
		},
		methods: {
			
		},
    components:{
      Header
    }
	}
</script>

<style lang="less" scoped>
  .search{
    padding: 0 24px;
    height: 48px;
    margin-top: 24px;
    position: relative;
    line-height: 48px;

    .s_input{
      height: 100%;
      border-radius: 24px;
      background-color: #2d353d;
      padding-left: 36px;
      font-size: 16px;
      font-family: "PingFang SC";
    }

    .icon{
      position: absolute;
      left: 36px;
      font-size: 24px;
      color: #69707f;
    }


  }
</style>
