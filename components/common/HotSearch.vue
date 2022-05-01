<template>
  <view class="container">

    <view class="header">
      <text class="left">{{left_text}}</text>
    </view>

    <view class="hot-list">
      <text v-for="(item, index) in search_list" :style="{'border-color':item.color, 'color':item.color}">{{item.name}}</text>
    </view>

  </view>
</template>

<script>
export default {
  name: "HotSearch",
  data(){
    return {
      search_list : [
          {
            name: "2018排行榜",
            color: "pink"
          },
        {
          name: "职场热门",
          color: "green"
        },{
          name: "都市言情",
          color: "red"
        },
        {
          name: "哈佛大学经济管理类",
          color: "purple"
        },{
          name: "领导才能",
          color: "yellow"
        }
      ]
    }
  },
  props:{
    left_text:{
      type:String,
      default: "热门搜索"
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0 24px;

    .header{
      margin-top: 34px;
      margin-bottom: 24px;
      .left{
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 600;
      }
    }

    .hot-list{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;

      text{
        padding: 8px 20px;
        margin-left: 8px;
        margin-right: 8px;
        border: 1px solid #fff;
        color: #FFFFFF;
        font-size: 12px;
        border-radius: 28px;
        margin-bottom: 14px;
        font-weight: 600;
      }

    }
  }
</style>