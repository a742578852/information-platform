<template>
	<view>
		<view class="">
			<button type="default" class="btn1" @click="btn1()">新增隐患</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item">序号</view>
				<view class="table-item">整改单编号</view>
				<view class="table-item">隐患所在地</view>
				<view class="table-item">隐患等级</view>
				<view class="table-item">整改要求</view>
			</view>
			<view @click="goDangeDetail(item)" hover-class="onclick" class="table-data" v-for="(item,index) in risks">
				<view class="table-data-item">{{index+1}}</view>
				<view class="table-data-item">{{item.zgdbh}}</view>
				<view class="table-data-item">{{item.yhszd}}</view>
				<view class="table-data-item" style="width: 30%;">{{item.yhdj}}</view>
				<view class="table-data-item">{{item.zgyq}}</view>
			</view>

		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				risks: [

				]
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
			goDangeDetail(item) {
				uni.navigateTo({
					url: 'dangerDetail?riskId=' + item.id
				})
			},
			//新增隐患
			btn1(){
				uni.navigateTo({
					url:'./addYinHuan'
				})
			}
		},
		async onLoad(option) {
			
			this.id = option.riskid
			if(this.id == null){
				this.id = ''
			}
			const res = await this.$myRequest({
				url: '/api/risk/getDangerByRisk',
				method: 'POST',
				data: {
					riskId: this.id
				}
			})
			this.risks = res.data.data
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
		width: 100%;
		.btn1{
			width: 100%;
			background-color: #CCE6FF;
		}
	}

	

	.scroll {
		width: 100%;
		.table {
			white-space: nowrap;
			width: 100%;
			height: 60px;
			line-height: 40px;
			display: flex;
			padding: 10px 0;
			font-size: 18px;
			background-color: #D2F1F0;
			margin: 10px 0;
			.table-item {
				font-size: 15px;
				display: inline-block;
				padding-left: 10px;
			}
		}
		.table-data {
			display: flex;
			font-size: 12px;
			width: 100%;
			.table-data-item {
				white-space: pre-line;
				border: 1px solid;
				border-color: #D2F1F0;
				width: 20%;
				text-align: center;
			}
		}
		.onclick{
			background: #D2F1F0;
		}
	}
</style>
