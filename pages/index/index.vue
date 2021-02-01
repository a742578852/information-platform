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
	import jpCharts from '@/components/jp-charts/index.vue';
	export default {
		components: {
			cgSwiper,
			jpCharts
		},
		data() {
			return {
				swiperList: [{
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
						text: '隐患排查',
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
				Charts: { //y轴配置 value在list中的键 showY是否一直显示数据 size字大小 units文字后缀
					Y: {
						value: 'value',
						showY: true,
						size: 20,
						units: '次'
					},
					X: {
						value: 'keyw',
						showX: true,
						size: 20,
						units: '月'
					},
					keyId: 'keyw',
					list: [],
					items: {},
					width: 750,
					height: 500,
					x_width: 100,
					proportion: 30, //宽度占比
					showZ: false, //是否显示线条
					checkedColor: 'red',
					canClick: true, //不可以点击
					bgColor: '#007aff',
					scrollLeft: 0
				},
				list: [{
						keyw: '01',
						value: 100
					}, {
						keyw: '02',
						value: 120
					}, {
						keyw: '03',
						value: 110
					},
					{
						keyw: '04',
						value: 80
					},
					{
						keyw: '05',
						value: 90
					},
					{
						keyw: '06',
						value: 70
					},
					{
						keyw: '07',
						value: 60
					},
					{
						keyw: '08',
						value: 50
					},
					{
						keyw: '09',
						value: 40
					},
					{
						keyw: '10',
						value: 30
					},
					{
						keyw: '11',
						value: 20
					},
					{
						keyw: '12',
						value: 90
					},
				 ],
				items: {
					keyw: '02',
					value: 110,
				}
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
					uni.showToast({
						title: "测试中..."
					})
				} else if (item.text == '风险研判') {
					uni.navigateTo({
						url: '../yanPan/yanPan',
					})
				}


			}
		},

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
