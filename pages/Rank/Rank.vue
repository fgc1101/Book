<template>
  <view class="container">
    <PageHeader :left="left" :center_text="center" :right="right"></PageHeader>

    <view class="rank">
      <view class="second rank-item">
        <view class="item">
          <view class="avatar">
            <image src="/static/images/common/avatar.jpeg"></image>
          </view>
          <text class="icon icon-huangguan"></text>
          <text class="paiming">2</text>
        </view>
        <view class="name">余秋雨</view>
        <view class="fs_number">5663 粉丝</view>
      </view>
      <view class="first rank-item">
        <view class="item">
          <view class="avatar">
            <image src="/static/images/common/avatar.jpeg"></image>
          </view>
          <text class="icon icon-huangguan"></text>
          <text class="paiming">1</text>
        </view>
        <view class="name">余秋雨</view>
        <view class="fs_number">5663 粉丝</view>
      </view>
      <view class="third rank-item">
        <view class="item">
          <view class="avatar">
            <image src="/static/images/common/avatar.jpeg"></image>
          </view>
          <text class="icon icon-huangguan"></text>
          <text class="paiming">3</text>
        </view>
        <view class="name">余秋雨</view>
        <view class="fs_number">5663 粉丝</view>
      </view>
    </view>

    <!-- 热门作者 -->
    <view class="hot-list">
      <view class="header">
        <text class="left">热门作者</text>
        <text class="right">查看全部<text class="icon-right"></text></text>
      </view>

      <view class="author-list">
        <scroll-view  class="scroll-view" scroll-x="true" show-scrollbar="false">
          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">特鲁索娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">特鲁索娃</text>
              <text class="follow"><text class="icon-tianjia"></text>关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">特鲁索娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">特鲁索娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">特鲁索娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">特鲁索娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">特鲁索娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

        </scroll-view>
      </view>
    </view>

    <!-- 新晋作者 -->
    <view class="new-list">
      <view class="header">
        <text class="left">新晋作者</text>
        <text class="right">查看全部<text class="icon-right"></text></text>
      </view>

      <view class="author-list">
        <scroll-view  class="scroll-view" scroll-x="true" show-scrollbar="false">
          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">瓦利耶娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">瓦利耶娃</text>
              <text class="follow"><text class="icon-tianjia"></text>关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">瓦利耶娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">瓦利耶娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">瓦利耶娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">瓦利耶娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">瓦利耶娃</text>
              <text class="followed">已关注</text>
            </view>
          </view>

        </scroll-view>
      </view>
    </view>

    <!-- 其他作者 -->
    <view class="other-list">
      <view class="header">
        <text class="left">其他作者</text>
        <text class="right">查看全部<text class="icon-right"></text></text>
      </view>

      <view class="author-list">
        <scroll-view  class="scroll-view" scroll-x="true" show-scrollbar="false">
          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">索菲亚</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">索菲亚</text>
              <text class="follow"><text class="icon-tianjia"></text>关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">索菲亚</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">索菲亚</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">索菲亚</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">索菲亚</text>
              <text class="followed">已关注</text>
            </view>
          </view>

          <view class="scroll-item">
            <view class="item">
              <view class="avatar">
                <image src="/static/images/common/avatar.jpeg"></image>
              </view>
              <text class="username">索菲亚</text>
              <text class="followed">已关注</text>
            </view>
          </view>

        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";

export default {
  data() {
    return {
      left:{
        icon: "icon-fanhui"
      },
      center: "作者",
      right:[
        {
          icon: "icon-caidan2"
        }
      ]
    };
  },
  components:{
    PageHeader
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0 24px;

    // 排行版
    .rank{
      height: 224px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #a2a8ba;
      margin-bottom: 24px;
      margin-top: 30px;

      .rank-item{
        width: 33.333%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .item{
          position: relative;
          margin-bottom: 20px;

          .icon{
            // font-size: 30px;
            position: absolute;
            //top: -16px;
            //left: 24px;
          }

          .avatar{
            // width: 80px;
            // height: 80px;

            image{
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 1px solid #FFFFFF;
            }
          }

          .paiming{
            position: absolute;
            display: block;
            width: 17px;
            height: 17px;
            line-height: 17px;
            border-radius: 50%;
            font-size: 12px;
            color: #fff;
            text-align: center;
            // background-color: #f44380;
            border: 1px solid #fff;
            // top: 74px;
            // left: 32px;
          }
        }

        .name{
          color: #f44380;
          font-size: 18px;
          font-weight: bold;
        }

        .fs_number{
          font-size: 14px;
          color: #a2a8ba;
        }
      }

      .second{
        .item{
          .avatar{
            width: 80px;
            height: 80px;
          }

          .icon{
            font-size: 30px;
            color: #f44380;
            top: -20px;
            left: 24px;
          }
          .paiming{
            top: 70px;
            left: 30px;
            background-color: #f44380;
          }
        }
      }

      .first{
        .item{
          .icon{
            font-size: 44px;
            color: #fdaf01;
            top: -26px;
            left: 28px;
          }

          .avatar{
            width: 100px;
            height: 100px;

            image{
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 1px solid #FFFFFF;
            }
          }

          .paiming{
            top: 94px;
            left: 42px;
            background-color: #fdaf01;
          }
        }

        .name{
          color: #fdaf01;
          font-size: 18px;
          font-weight: bold;
        }
      }

      .third{
        .item{

          .avatar{
            width: 80px;
            height: 80px;
          }

          .icon{
            font-size: 30px;
            color: #00a2ff;
            top: -20px;
            left: 24px;
          }

          .paiming{
            background-color: #00a2ff;
            top: 70px;
            left: 30px;
          }
        }

        .name{
          color: #00a2ff;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }

    // 作者列表
    .hot-list, .new-list, .other-list{
      padding-bottom: 38px;
      margin-bottom: 24px;
      border-bottom:  1px solid #545c66;
      .header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left{
          font-size: 18px;
          color: #fff;
          font-weight: 600;
        }

        .right{
          font-size: 13px;
          color: #a2a8ba;
        }
      }

      .author-list{
        margin-top: 24px;

        .scroll-view{
          width: 100%;
          white-space: nowrap;

          .scroll-item{
            display: inline-block;
            width: 80px;
            margin-right: 20px;

            .item{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .avatar{
                width: 60px;
                height: 60px;
                margin-bottom: 12px;

                image{
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                }
              }

              .username{
                font-size: 15px;
                color: #fff;
                margin-bottom: 12px;
              }

              .followed{
                width: 50px;
                font-size: 12px;
                padding: 6px 13px;
                border: 1px solid #545c66;
                text-align: center;
                border-radius: 4px;
                color:#fff;
              }

              .follow{
                width: 52px;
                font-size: 12px;
                padding: 6px 13px;
                text-align: center;
                border-radius: 4px;
                background-color: #478ce0;
                color: #fff;

                text{
                  color: #fff;
                }
              }
            }
          }
        }

      }
    }

  }
</style>
