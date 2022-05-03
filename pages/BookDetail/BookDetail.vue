<template>
  <view>
    <view class="container">
      <PageHeader :left="left"></PageHeader>

      <!-- 书详情 -->
      <view class="book-detail">
        <view class="image">
          <image src="/static/images/common/book1.jpeg"></image>
        </view>
        <view class="info">
          <text class="title">三体：死神永生</text>
          <text class="author">作者：刘慈欣</text>
          <text class="desc">刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品...</text>
          <view class="score">
            <text class="icon icon-pingjia1"></text>
            <text class="icon icon-pingjia1"></text>
            <text class="icon icon-pingjia1"></text>
            <text class="icon icon-pingjia1"></text>
            <text class="icon icon-pingjia1"></text>
            <text class="fen">5.0</text>
          </view>
        </view>
      </view>

      <!-- 选项 -->
      <view class="option">
        <view class="option-item collect">
          <text class="icon icon-shoucang"></text>
          <text class="c-text">收藏</text>
        </view>
        <view class="option-item share">
          <text class="icon icon-share-copy"></text>
          <text class="c-text">分享</text>
        </view>
        <view class="option-item add-bookshelf">
          <text class="icon icon-shujia"></text>
          <text class="c-text">放入书架</text>
        </view>
      </view>

      <!-- 书内容描述 -->
      <view class="c-desc">
        <text class="c-desc-title">详情</text>
        <text class="c-desc-content">
          与三体文明的战争使人类第一次看到了宇宙黑暗的真相，地球文明像一个恐惧的孩子，熄灭了寻友的篝火，在暗夜中发抖。自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格。
        </text>
      </view>

      <!-- 查看目录 -->
      <view class="chakan">
        <text class="ck-text">查看目录</text>
        <text class="ck-text-icon icon-right"></text>
      </view>

      <!-- 评论 -->
      <view class="c-comment">
        <view class="c-header">
          <view>
            <text class="c-text">评论</text>
            <text class="c-num">215条评论</text>
          </view>
          <view>
            <text class="c-icon icon-pinglun"></text>
          </view>
        </view>

        <view class="c-list">
          <view class="item">
            <view class="avatar">
              <image src="/static/images/common/avatar.jpeg"></image>
            </view>
            <view class="c-detail">
              <text class="username">谢尔巴科娃</text>
              <text class="content">
                大刘塑造的女性都具有明显的圣母特质，但是本质上弱爆了。叶是文革的毒瘤，庄是定制禁脔，程最经典——站在圣母和傻逼的微笑曲线上。大刘塑造的男性都带有明显的缺陷但本质上极端人性化。一身痞气的小人物大史，最高情商让他活得最明白；罗辑的荒唐和不羁让他成了救世主，但也决定了他必不能善终；软弱怯懦固执的云天明，也并无理由因为慷慨和运气就得到爱啊。但我真心理解这样的人，这样的性格，这样的命运。
              </text>
              <view class="other">
                <view>
                  <text class="date">12-04 21:20</text>
                </view>
                <view>
                  <text class="num"><text class="icon icon-shoucang"></text>134</text>
                  <text class="num"><text class="icon icon-pinglun1"></text>89</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="c-list">
          <view class="item">
            <view class="avatar">
              <image src="/static/images/common/avatar.jpeg"></image>
            </view>
            <view class="c-detail">
              <text class="username">谢尔巴科娃</text>
              <text class="content">
                大刘塑造的女性都具有明显的圣母特质，但是本质上弱爆了。叶是文革的毒瘤，庄是定制禁脔，程最经典——站在圣母和傻逼的微笑曲线上。大刘塑造的男性都带有明显的缺陷但本质上极端人性化。一身痞气的小人物大史，最高情商让他活得最明白；罗辑的荒唐和不羁让他成了救世主，但也决定了他必不能善终；软弱怯懦固执的云天明，也并无理由因为慷慨和运气就得到爱啊。但我真心理解这样的人，这样的性格，这样的命运。
              </text>
              <view class="other">
                <view>
                  <text class="date">12-04 21:20</text>
                </view>
                <view>
                  <text class="num"><text class="icon icon-shoucang"></text>134</text>
                  <text class="num"><text class="icon icon-pinglun1"></text>89</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="zhanwei"></view>
    </view>
    <view class="buy">
      <view class="button shikan">
        <text>试看</text>
      </view>
      <view class="button goumai">
        <text>购买</text>
      </view>
    </view>
  </view>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
	export default {
		data() {
			return {
				left: {
          icon: "icon-fanhui"
        }
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
  .book-detail{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    .image{
      margin-right: 16px;
      image{
        width: 108px;
        height: 160px;
        border-radius: 10px;
      }
    }

    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      .title{
        font-size: 24px;
        color: #fff;
      }
      .author{
        font-size: 15px;
        color: #828d9a;
        margin-top: 12px;
      }
      .desc{
        font-size: 13px;
        line-height: 18px;
        color: #868dab;
        margin-top: 12px;
      }

      .score{
        margin-top: 16px;
        .icon{
          font-size: 20px;
          color: #fb6894;
        }
        .fen{
          font-size: 20px;
          font-family: "Microsoft YaHei";
          color: #ffce44;
          margin-left: 14px;
        }
      }

    }
  }

  .option{
    border-bottom: 1px solid #3b4144;
    border-top: 1px solid #3b4144;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-top: 34px;

    .option-item{
      height: 100%;
      line-height: 60px;
      .icon{
        font-size: 24px;
        color: #71768c;
      }

      .c-text{
        font-size: 16px;
        margin-left: 12px;
        color: #FFFFFF;
        font-weight: normal;
      }
    }

    .collect{
      .icon{
        color: #ee392f;
      }
    }
  }

  .c-desc{
    margin-top: 26px;
    display: flex;
    flex-direction: column;

    .c-desc-title{
      font-size: 18px;
      font-family: "PingFang SC";
      color: #fff;
    }

    .c-desc-content{
      margin-top: 20px;
      font-size: 14px;
      line-height: 20px;
      color: #868dab;
    }
  }

  .chakan{
    margin-top: 40px;
    border-bottom: 1px solid #3b4144;
    border-top: 1px solid #3b4144;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    .ck-text{
      font-size: 18px;
      color: #fff;
      font-weight: bold;
    }
    .ck-text-icon{
      font-size: 20px;
      color: #9295a9;
    }
  }

  .c-comment{

    .c-header{
      margin-top: 10px;
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-between;

      .c-text{
        font-size: 18px;
        color: #FFFFFF;
        font-family: "Microsoft YaHei";
      }

      .c-num{
        font-size: 12px;
        color:#007aff;
        margin-left: 10px;
      }

      .c-icon{
        font-size: 20px;
        color: #FFFFFF;
      }
    }

    .c-list{
      margin-bottom: 20px;
      .item{
        display: flex;
        .avatar{
          width: 30px;
          margin-right: 10px;
          image{
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }

        .c-detail{
          display: flex;
          flex-direction: column;
          .username{
            font-size: 14px;
            color: #FFFFFF;
            font-family: "PingFang SC";
          }
          .content{
            font-size: 12px;
            color: #868dab;
            line-height: 18px;
            margin-top: 10px;
          }

          .other{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .date, .num{
              font-size: 11px;
              color: #656a7b;
            }

            .num:nth-child(1){
              margin-right: 16px;
            }

            .icon{
              font-size: 14px;
              margin-right: 6px;
            }
          }
        }
      }
    }
  }

  .zhanwei{
    height: 80px;
  }
}
.buy{
  width: 100%;
  position: fixed;
  bottom: 0;
  height:80px;
  background-color: #373a49;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .button{
    height: 48px;
    border-radius: 24px;
    line-height: 48px;
    text-align: center;
    text{
      font-size: 14px;
      color: #FFFFFF;
      font-weight: 600;
    }
  }

  .shikan{
    width: 108px;
    background-color: #9295A9;
  }

  .goumai{
    width: 203px;
    background-color: #FB6894;
  }
}
</style>
