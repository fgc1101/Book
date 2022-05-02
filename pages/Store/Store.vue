<template>
	<view class="container">
    <!-- 书架表头 -->
    <PageHeader center_text="书架" :right="right"></PageHeader>

    <!-- 正在阅读 -->
    <BookList left_text="正在阅读"></BookList>

    <!-- 未读 -->
    <BookList left_text="未读"></BookList>
	</view>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import BookList from "@/components/common/BookList";
	export default {
		data() {
			return {
        right: [
          {
            icon: "icon-caidan2"
          }
        ]
			}
		},
		methods: {
			
		},
    components:{
      PageHeader, BookList
    }
	}
</script>

<style lang="less" scoped>
  .container{
    padding: 0 24px;
  }
</style>
