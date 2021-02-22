<template>
	<view>
<!-- 		<mk-goods-list :goods="goods" @clickItem="goodsItem"></mk-goods-list>
 -->
		 
		 
		 <view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
		 	<view class="cu-item" :class="menuArrow?'arrow':''" v-for="item in goods">
		 		<view class="content" @click="goStudy(item.subject.id)">
		 			<text class="cuIcon-circlefill text-grey"></text>
		 			<text class="text-grey">{{item.subject.kmmc}}</text>
		 		</view>
		 	</view>
			</view>
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
					
				},
				menuArrow:'',
				menuCard:'',
				menuBorder:''
			}
		},
		methods: {
			goStudy(e){
				uni.navigateTo({
					url:"../daTi/daTi?id="+e
				})
				
			},
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
