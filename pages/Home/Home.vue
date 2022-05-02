<template>
  <view class="container">
    <view class="headers">
      <text class="icon iconfont">&#xe603;</text>
      <text class="icon iconfont">&#xe601;</text>
    </view>

    <!-- 搜索  -->
    <view class="search">
      <input type="text" class="s_input" placeholder="搜索...">
      <text class="icon search_icon iconfont">&#xe607;</text>
    </view>

    <!-- 分类排行 -->
    <CateList left_text="分类排行" :cate_list="cate_list"></CateList>


    <!-- 作者排行 -->
    <CateList left_text="作者排行 " :cate_list="author_list"></CateList>

    <!-- 新发布列表 -->
    <BookList></BookList>

    <!-- 热门搜索 -->
    <HotSearch></HotSearch>

    <!-- 热销版 -->
    <HotSale></HotSale>
  </view>
</template>

<script>
import CateList from "@/components/common/CateList";
import BookList from "@/components/common/BookList";
import HotSearch from "@/components/common/HotSearch";
import HotSale from "@/components/common/HotSale";

const dom = weex.requireModule("dom");
dom.addRule("fontFace", {
  fontFamily: "iconfont",
  //可以使用线上字体，也可以下载到本地
  // src:"url('/static/font/iconfont.ttf')"
  src: "url('https://at.alicdn.com/t/font_3370697_0pvmrrxpckp.ttf?t=1651377278094')"
})

export default {
  data() {
    return {
      cate_list: [
          {
            "src_url": "/static/images/common/avatar.png",
            "title": "科技"
          }, {
            "src_url": "/static/images/common/avatar.png",
            "title": "生活"
          }, {
            "src_url": "/static/images/common/avatar.png",
            "title": "露营"
          }, {
            "src_url": "/static/images/common/avatar.png",
            "title": "职场"
          }
      ],
      author_list:[
        {
          "src_url": "/static/images/common/avatar.png",
          "title": "刘慈欣"
        },
        {
          "src_url": "/static/images/common/avatar.png",
          "title": "田晓华"
        },
        {
          "src_url": "/static/images/common/avatar.png",
          "title": "马尔克斯"
        },
        {
          "src_url": "/static/images/common/avatar.png",
          "title": "余秋雨"
        }
      ]
    }
  },
  components: {
    CateList, BookList, HotSearch, HotSale
  }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-family: iconfont;
}

.headers {
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
}

.icon {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
}

.search {
  padding: 0 24px;
  height: 48px;
  margin-top: 24px;
  margin-bottom: 30px;
  line-height: 48px;
  position: relative;
}

.search_icon {
  position: absolute;
  top: 0;
  left: 36px;
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

.cate_list {
  padding: 0 24px;
  height: 300px;
  background-color: palevioletred;

  .cate_con {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .cate_name {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
    }

    .cate_right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      .all {
        color: #a2a8ba;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }

  .c_list {
    width: 100%;
    background: #000;

    .scroll-view_H {
      height: 100px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

}


.list {
  margin-top: 25px;

}

/* #ifndef APP-NVUE */

/* #endif */
</style>
