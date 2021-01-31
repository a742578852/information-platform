<template>
	<view class="btn">
		<button type="default" class="btn1" @click="btn1">动火作业证</button>
		<button type="default" class="btn2" @click="btn2">高处作业证</button>
		<button type="default" class="btn3" @click="btn3">受限空间作业证</button>
		<button type="default" class="btn4" @click="btn4">吊装作业证</button>
		<button type="default" class="btn5" @click="btn5">临时用电作业证</button>
		<button type="default" class="btn6" @click="btn6">动土作业证</button>
		<button type="default" class="btn7" @click="btn7">盲板抽堵作业证</button>
		<button type="default" class="btn8" @click="btn8">断路作业证</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onBackPress(event) {
			if (event.from === 'navigateBack') {
				return false;
			}
			uni.switchTab({
				url:'../index/index'
			})
			return true;
		},
		methods: {
			btn1(){
				uni.navigateTo({
					url:'dongHuoZuoYe'
				})
			},
			btn2(){
				uni.navigateTo({
					url:'gaoChuZuoYe'
				})
			},
			btn3(){
				uni.navigateTo({
					url:'shouXianKongJian'
				})
			},
			btn4(){
				uni.navigateTo({
					url:'diaoZhuangZuoYe'
				})
			},
			btn5(){
				uni.navigateTo({
					url:'linShiYongDian'
				})
			},
			btn6(){
				uni.navigateTo({
					url:'dongTuZuoYe'
				})
			},
			btn7(){
				uni.navigateTo({
					url:'mangBanChouDu'
				})
			},
			btn8(){
				uni.navigateTo({
					url:'duanLuZuoYe'
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
		//line-height: 50px;
		font-size: 30px;
		padding: 10px;
		
		.btn1{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
		.btn2{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
		.btn3{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
		.btn4{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
		.btn5{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
		.btn6{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
		.btn7{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
		.btn8{
			margin: 10px;
			border-radius: 50px;
			line-height: 60px;
		}
	}
</style>
