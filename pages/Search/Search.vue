<template>
	<view class="container">
    <!-- 页面头部 -->
    <PageHeader :center_text="center_text" :right="right"></PageHeader>

    <view class="detail">
      <view class="info">
        <image src="/static/images/common/book1.jpeg"></image>
        <text class="title">三体：死神永生</text>
        <text class="author">刘慈欣</text>
      </view>
      <view class="read-list">
        <view class="user-list">
          <image src="/static/images/common/avatar.jpeg"></image>
          <image src="/static/images/common/avatar.jpeg"></image>
          <image src="/static/images/common/avatar.jpeg"></image>
          <image src="/static/images/common/avatar.jpeg"></image>
        </view>
        <text>457人已阅读</text>
      </view>
    </view>
	</view>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
	export default {
		data() {
			return {
        center_text: "探索",
        right:[
          {
            "icon": "icon-caidan3"
          },
          {
            "icon": "icon-checkbox-full-copy"
          }
        ]
			}
		},
		methods: {
			
		},
    components:{
      PageHeader
    }
	}
</script>

<style lang="less" scoped>
  .container{
    padding: 0 24px;

    .detail{
      margin-top: 46px;
      text-align: center;

      .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-bottom: 37px;

        image{
          width: 195px;
          height: 290px;
          border-radius: 18px;
        }

        .title{
          font-size: 22px;
          color:#fff;
          margin-top: 24px;
        }

        .author{
          font-size: 18px;
          color: #656a7b;
          margin-top: 17px;
        }
      }
    }

    .read-list {
      border-top: 2px solid #656a7b;
      padding: 0 24px;

      .user-list{
        display: flex;
        justify-content: center;
        align-items: center;

        image{
          width: 34px;
          height: 34px;
          border-radius: 50%;
          margin: 24px 2px 18px;
        }
      }
      text{
        font-size: 12px;
        color:#a2a8ba;
      }
    }
  }
</style>
