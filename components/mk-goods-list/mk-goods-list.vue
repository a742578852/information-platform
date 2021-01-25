<template>
	<view class="content-list">
		<view class="goods-item" v-for="(item, key) in goods" :key="key" @click="detail(item, $event)">
			<!-- <image src="../../static/yx-login/logo.png"></image> -->
			<image src="../../static/yx-login/logo.png" ></image>
			<view class="goods-item-content">
				<view class="goods-title text-line-hide">{{item.subject.kmmc}}</view>
				<view class="goods-amount">
					<text space="emsp">学习进度：{{item.studyCount}}/{{item.questionCount}}</text>
				</view>
				<view class="goods-label"><rich-text :nodes="item.label"></rich-text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MkGoodsList",
		props:{
			goods:{
				options:{
					type:'array',
					default:''
				}
			}
		},
		methods: {
			detail(item, e) {
				this.$emit("clickItem", item, e);
			},
			detail(item){
				var id = item.subject.id
				uni.navigateTo({
					url:'../../pages/daTi/daTi?id='+id
				})
			}
		},
		
	}
</script>

<style lang="scss">
	.content-list {
		width: 100%;
		margin: 0 19rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.goods-item {
		background-color: #ffffff;
		width: 347.5rpx;
		border-radius: 19rpx;
		margin: 0 19rpx 19rpx 0;
	}
	.goods-item image {
		width: 100%;
		height: 308rpx;
		border-radius: 19rpx 19rpx 0 0;
	}
	.goods-item-content {
		padding: 19rpx;
	}
	.goods-little-title {
		padding: 10rpx 0;
	}
	.goods-title {
		font-weight: bold;
	}
	.goods-amount {
		display: flex;
		align-items: baseline;
	}
	.goods-amount text {
		color: #ff0000;
	}
	.goods-amount view {
		margin-left: 22rpx;
	}
	.goods-label {
		padding: 10rpx 0 0;
	}
	.gary-font {
		color: #999;
		font-size: 22rpx;
	}
	.text-line-hide {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
