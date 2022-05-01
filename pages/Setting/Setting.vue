<template>
	<view class="container">
    <view class="header">
      <text class="icon icon-fanhui"></text>
      <text>设置</text>
      <text class="icon icon-fanhui" style="opacity: 0"></text>
    </view>

    <MenuList :menu_list="menuList"></MenuList>

    <!-- 退出登录 -->
    <view class="logout_box">
      <text>退出登录</text>
    </view>
	</view>
</template>

<script>
  import MenuList from "@/components/menuList/MenuList";
	export default {
		data() {
			return {
				menuList: [
          {
            id: 1,
            name: "查看账户",
            type: "jump"
          },
          {
            id: 2,
            name: "个人资料",
            type: "jump"
          },
          {
            id: 3,
            name: "消息提醒",
            type: "switch"
          },
          {
            id: 4,
            name: "清理缓存",
            type: "jump",
            extend:{
              text: '128MB',
              color: '#a2a8ba'
            }
          },
          {
            id: 5,
            name: "帮助中心",
            type: "jump"
          },
          {
            id: 6,
            name: "关于我们",
            type: "jump"
          },
        ]
			}
		},
		methods: {
			
		},
    components:{
      MenuList
    }
	}
</script>

<style lang="less" scoped>
  .container{

    //我的
    .header {
      padding: 0 24px;
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

    .logout_box{
      background-color: #2e363f;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      width: 100%;
      height: 70px;

      text{
        font-size: 22px;
        color: #dcdeea;
        font-family: "PingFang SC";
      }
    }
  }
</style>
