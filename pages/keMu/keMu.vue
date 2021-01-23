<template>
	<view>
		<mk-goods-list :goods="goods" @clickItem="goodsItem"></mk-goods-list>
		
	</view>
</template>

<script>
	import keMuList from '../../components/mk-goods-list/mk-goods-list.vue'
	export default {
		components:{
			keMuList
		},
		data() {
			return {
				goods:{
					
				}
			}
		},
		methods: {
			goodsItem(){}
		},
		async onLoad() {
			// var token = uni.getStorageSync('token')
			const res = await this.$myRequest({
				url:'/api/study/getSubject',
				method:'POST'
			})
				if(res.data.code==200){
					this.goods=res.data.data
				}
		}
	}
</script>

<style>

</style>
