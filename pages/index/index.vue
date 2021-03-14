<template>
	<view>
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
		<cg-swiper :swiperList="swiperList" @clickItem="clickItem"></cg-swiper>


	</view>
</template>

<script>
	import cgSwiper from '@/components/cg-swiper/cg-swiper.vue';
	// import jpCharts from '@/components/jp-charts/index.vue';

	export default {
		components: {
			cgSwiper,
			// jpCharts
		},
		data() {
			return {
				arrayAuthor:[],
				swiperList: [
					{
						text: '在线学习',
						img: '../../static/yx-login/logo.png'
					},
					{
						text: '在线考试',
						img: '../../static/logo.png'
					},
					{
						text: '风险上报',
						img: '../../static/home/news-selected.png'
					},
					{
						text: '安全检查',
						img: '../../static/icon-bulb.png'
					},
					{
						text: '风险研判',
						img: '../../static/home/news-selected.png'
					},
					{
						text: '作业管理',
						img: '../../static/home/ios-folder-outline.png'
					},
					{
						text: '隐患整改',
						img: '../../static/bug.png'
					}
				],
			}
		},
		methods: {
			clickItem(item) {
				if (item.text == '在线学习') {
					uni.navigateTo({
						url: '../keMu/keMu',
					})
				} else if (item.text == '在线考试') {
					uni.navigateTo({
						url: '../woDeKaoShi/woDeKaoShi',
					})
				} else if (item.text == '风险上报') {
					uni.navigateTo({
						url: '../risk/risk',
					})
				} else if (item.text == '隐患排查') {
					uni.navigateTo({
						url: '../safe/safe',
					})
				} else if (item.text == '作业管理') {
					uni.navigateTo({
						url: '../zuoYe/zuoYe',
					})
				} else if (item.text == '隐患整改') {

					uni.navigateTo({
						url: '../danger/dangerList'
					})
				} else if (item.text == '风险研判') {
					uni.navigateTo({
						url: '../yanPan/yanPan',
					})
				}


			},
			
			// getDeviceIp() {
			// 	var deviceIp = ''
			// 		if (plus.os.name == "Android") {
			// 			var Context = plus.android.importClass("android.content.Context");
			// 			var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
			// 			var wifiInfo = plus.android.invoke(wifiManager, "getConnectionInfo");
			// 			var ipAddress = plus.android.invoke(wifiInfo, "getIpAddress");
			// 			deviceIp = '';
			// 			if (ipAddress != 0) {
			// 				deviceIp = ((ipAddress & 0xff) + "." + (ipAddress >> 8 & 0xff) + "." + (ipAddress >> 16 & 0xff) + "." + (
			// 					ipAddress >> 24 & 0xff));
			// 			}
			// 		}
			// 	console.log(deviceIp)
			// 	return deviceIp;
			// },

		},

		async onLoad() {
			
			
		},
		async onShow() {
			const ress = await this.$myRequest({
				url: '/api/user/addLoginInfo',
				method: 'POST',
			})
			// if(uni.getStorageSync('isShow') == ''){
				const res = await this.$myRequest({
					url: '/api/user/authorityCheck',
					method: 'get',
				})
				if(res.data.code==200){
					// uni.setStorageSync('isShow','isshow')
					this.arrayAuthor = res.data.data
				}
				
				if(this.arrayAuthor.studyFlg==0){
					for(var i=0;i<this.swiperList.length;i++){
						if(this.swiperList[i].text == '在线学习'){
							this.swiperList.splice(i,1)
						}
					}
				}
				
				if(this.arrayAuthor.orderFlg==0){
					for(var i=0;i<this.swiperList.length;i++){
						if(this.swiperList[i].text == '作业管理'){
							this.swiperList.splice(i,1)
						}
					}
				}
				
				if(this.arrayAuthor.examinationFlg==0){
					for(var i=0;i<this.swiperList.length;i++){
						if(this.swiperList[i].text == '在线考试'){
							this.swiperList.splice(i,1)
						}
					}
				}
				
				if(this.arrayAuthor.inspectFlg==0){
					for(var i=0;i<this.swiperList.length;i++){
						if(this.swiperList[i].text == '安全检查'){
							this.swiperList.splice(i,1)
						}
					}
				}
				
				if(this.arrayAuthor.riskFlg==0){
					for(var i=0;i<this.swiperList.length;i++){
						if(this.swiperList[i].text == '风险上报'){
							this.swiperList.splice(i,1)
						}
					}
				}
				
				if(this.arrayAuthor.dangerFlg==0){
					for(var i=0;i<this.swiperList.length;i++){
						if(this.swiperList[i].text == '隐患整改'){
							this.swiperList.splice(i,1)
						}
					}
				}
				
				if(this.arrayAuthor.judgeFlg==0){
					for(var i=0;i<this.swiperList.length;i++){
						if(this.swiperList[i].text == '风险研判'){
							this.swiperList.splice(i,1)
						}
					}
				}
			// }
		}
	}
</script>

<style lang="scss">
	page {
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

	.tongji {
		width: 100%;
		height: 270px;
		background-color: #DBDBDB;
	}
</style>
