<template>
  <!-- menus -->
  <view class="menu_list">
    <ul>
      <li v-for="item in menu_list" :key="item.id">
        <slot>
          <text class="menu_name">{{ item.name }}</text>
          <text style="color: #a2a8ba" v-if="item.extend">{{item.extend.text}}<text class="icon-right"></text></text>
          <text v-else-if="item.type == 'jump'" class="icon-right" style="color: #a2a8ba"></text>
          <switch v-else="item.type == 'switch'" checked @change="switch1Change" color="#fb6894" />
        </slot>
      </li>
    </ul>
  </view>
</template>

<script>
export default {
  name: "MenuList",
  props: {
    menu_list : Array
  },
  data(){
    return {

    }
  },
  methods:{
    switch1Change: function (e) {
      console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    },
  }
}
</script>

<style lang="less" scoped>
// 菜单列表
.menu_list {
  margin-top: 45px;
  padding: 0 24px;

  ul {
    list-style: none;
    padding-left: 0;

    li {
      width: 100%;
      height: 45px;
      border-bottom: 1px solid #333c47;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 26px;

      .menu_name {
        font-size: 18px;
        color: #FFFFFF;
        font-family: "PingFang SC";
      }

      .message_number {
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #fb6894;
        color: #FFFFFF;
        font-size: 12px;
        text-align: center;
        font-weight: 600;
      }

      .amount {
        font-size: 18px;
        color: #fb6894;
        font-family: "PingFang SC";
        font-weight: 600;
      }
    }
  }
}
</style>