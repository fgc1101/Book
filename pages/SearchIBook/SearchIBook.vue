<template>
	<view class="container">
    <!-- 页面头部 -->
    <PageHeader :left="left" :center_text="center_text"></PageHeader>

    <!-- 搜索 -->
    <view class="search">
      <input type="text" class="s_input" placeholder="搜索...">
      <text class="icon search_icon iconfont">&#xe607;</text>
    </view>

    <!-- 选项卡 -->
    <view class="tab-container">
      <scroll-view class="scroll-view" scroll-x="true" show-scrollbar="false">
        <view class="tab-tit">
          <view class="scroll-view-item" :class="{'cur':current===0}" @click="current=0">
            <text>选项1</text>
          </view>
          <view class="scroll-view-item" :class="{'cur':current===1}" @click="current=1">
            <text>选项2</text>
          </view>
          <view class="scroll-view-item" :class="{'cur':current===2}" @click="current=2">
            <text>选项3</text>
          </view>
          <view class="scroll-view-item" :class="{'cur':current===3}" @click="current=3">
            <text>选项4</text>
          </view>
          <view class="scroll-view-item" :class="{'cur':current===4}" @click="current=4">
            <text>选项5</text>
          </view>
        </view>
      </scroll-view>
      <view class="content">
        <view v-show="current === 0">
          <BookList left_text="新上架"></BookList>
          <view class="hr"></view>
          <BookList left_text="热门"></BookList>
        </view>
        <view v-show="current === 1">
          <BookList></BookList>
        </view>
        <view v-show="current === 2">
          <BookList></BookList>
        </view>
        <view v-show="current === 3">
          <BookList></BookList>
        </view>
        <view v-show="current === 4">
          <BookList></BookList>
        </view>
      </view>
    </view>

	</view>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import BookList from "@/components/common/BookList";
	export default {
		data() {
      return {
        left:{
          "icon": "icon-fanhui"
        },
        center_text: "分类",
        items: ['选项1', '选项2', '选项3','选项4'],
        current: 0
      }
		},
		methods: {
      onClickItem(e) {
        if (this.current !== e.currentIndex) {
          this.current = e.currentIndex;
        }
      }
		},
    components:{
      PageHeader, BookList
    }
	}
</script>

<style lang="less" scoped>
  .container{
    padding: 0 24px;

    // 搜索
    .search {
      height: 48px;
      margin-top: 24px;
      margin-bottom: 30px;
      line-height: 48px;
      position: relative;

      .search_icon {
        position: absolute;
        top: 0;
        left: 12px;
        color: #69707f;
      }

      .s_input {
        height: 48px;
        border-radius: 24px;
        background-color: #2d353d;
        padding-left: 36px;
        font-size: 16px;
        font-family: "PingFang SC";
        color: #fff;
      }
    }

    // tab选项卡
    .tab-container{
      height: 100px;

      .scroll-view{
        width: 100%;
        white-space: nowrap;

        .scroll-view-item{
          width: 65px;
          display: inline-block;
          text-align: center;
          padding-bottom: 19px;
          border-bottom: 1px solid #2d353d;
          text{
            width: 100%;
            height: 40px;
            font-size: 16px;
            color: #545f6c;
          }
        }

        .cur{
          border-bottom: 1px solid #fb6894;

          text{
            color: #ffffff;
          }
        }
      }

      .content{
        margin-top: 35px;

        .hr{
          border-bottom: 1px solid #393d45;
          margin-bottom: 34px;
        }
      }
    }


  }
</style>
