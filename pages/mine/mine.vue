<template>
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
		<!-- <view class="pass" @click="update">
			<image src="../../static/my/images/my_23_23.jpg" style="width: 40px; height: 40px;"></image>
			<view class="pas">修改密码</view>
		</view>
		<view class="banben">
			<image src="../../static/account/set.png" style="width: 40px; height: 40px;"></image>
			<view class="ban">检查更新</view>
		</view> -->
		
		<view style="font-size: 50upx;margin-left: 25upx;margin-bottom: 50upx;">
			登录人：{{nick}}
		</view>
		
		<view class="zhuxiao" @click="back">
			<image src="../../static/hm-sms-list-card/images/img_25832_0_2.png" style="width: 40px; height: 40px;"></image>
			<view class="zhu">账号注销</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nick:''
			}
		},
		methods: {
			back(){
				// uni.clearStorageSync('token')
				uni.removeStorageSync('token')
				// uni.clearStorageSync('isShow')
				uni.navigateTo({
					url:'../login/login',
					})
			},
			
		},
		onShow() {
			this.nick = uni.getStorageSync('admin').nick
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #D2F1F0;
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
	.pass{
		display: flex;
		margin: 10px;
		.pas{
			font-size: 25px;
			margin-left: 10px;
			margin-top: 5px;
			width: 80%;
			height: 40px;
		}
	}
	.banben{
		display: flex;
		margin: 10px;
		.ban{
			font-size: 25px;
			margin-left: 10px;
			margin-top: 5px;
			width: 80%;
			
		}
	}
	.zhuxiao{
		display: flex;
		margin: 10px;
		.zhu{
			font-size: 25px;
			margin-left: 10px;
			margin-top: 5px;
			width: 80%;
		}
	}
</style>
