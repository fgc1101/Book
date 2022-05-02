<template>
	<view>
    <PageHeader :center_text="center_text" :right="right"></PageHeader>
    <HotSale></HotSale>
	</view>
</template>

<script>
import HotSale from "@/components/common/HotSale";
import PageHeader from "@/components/common/PageHeader";
	export default {
		data() {
			return {
        left: {},
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
      HotSale, PageHeader
    }
	}
</script>

<style>

</style>
