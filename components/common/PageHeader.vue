<template>
  <view class="header">
    <view class="content left">
      <text :class="[left.icon ? left.icon : '']">{{ left.text ? left.text : '' }}</text>
    </view>

    <view class="content center">
      <text>{{center_text ? center_text : ''}}</text>
    </view>

    <view class="content right">
      <text class="icon" v-if=" this.right.length === 1 " :class="[self_right.icon ? self_right.icon : '']">{{ self_right.right_text ? self_right.right_text : '' }}</text>
      <view v-else>
        <text class="icon" v-for="item in self_right" :class="[item.icon ? item.icon : '']">{{ item.right_text ? item.right_text: ''}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "PageHeader",
  data(){
    return {
      self_right: []
    }
  },
  props:{
    left:{
      type: Object,
      default(){
        return {}
      }
    },
    center_text: String,
    right: {
      type: Array
    }
  },
  created(){

    this.right.length > 1 ? this.self_right = this.right : this.self_right = this.right[0]
    console.log(this.self_right)

  }
}
</script>

<style lang="less" scoped>

.header {
  display: flex;
  height: 26px;
  justify-content: space-between;
  align-items: center;

  .content{
    width: 33.333%;
    display: block;
    text {
      font-size: 22px;
      font-weight: 600;
      color: #FFFFFF;
    }

    .icon {
      padding-left: 10px;
    }
  }


}
</style>