<template>
	<view>
		<view class="">
			<view class="swipers">
				<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
					<swiper-item class="swiper-item">
						<image src="../../static/hua1.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-item">
						<image src="../../static/hua2.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-item">
						<image src="../../static/hua3.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">班组级研判记录</button>
			<button type="default" class="btn2" @click="btn2()">车间级研判记录</button>
			<button type="default" class="btn3" @click="btn3()">公司级研判记录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			btn1(){
				uni.navigateTo({
					url:'banZu'
				})
			},
			btn2(){
				uni.navigateTo({
					url:'cheJian'
				})
			},
			btn3(){
				uni.navigateTo({
					url:'gongSi'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #D2F1F0;
	}
	.btn{
		width: 100%;
		height: 200px;
		line-height: 30px;
		font-size: 30px;
		padding: 10px;
		background-color: #CCE6FF;
		.btn1{
			margin: 10px;
		}
		.btn2{
			margin: 10px;
		}
		.btn3{
			margin: 10px;
		}
	}
	.swipers {
		background-color: #D2F1F0;
		width: 750rpx;
		height: 350rpx;
	
		image {
			height: 100%;
			width: 100%;
		}
	}
</style>
