<template>
	<view >
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">申请吊装作业</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 30px;">序号</view>
				<view class="table-item" style="padding-left: 1px;">作业证编号</view>
				<view class="table-item" style="padding-left: 11px;">申请日期</view>
				<view class="table-item" style="padding-left: 11px;">吊装地点</view>
				<view class="table-item" style="padding-left: 10px;">吊车车牌</view>
				<view class="table-item" style="padding-left: 18px;">监护人</view>
			</view>
				<view class="table-data" hover-class="onclick" v-for="(item,index) in dataList" @click="select(item.id)">
					<view class="table-data-item" >{{index+1}}</view>
					<view class="table-data-item">{{item.zyzbh}}</view>
					<view class="table-data-item">{{item.zyzsqrq}}</view>
					<view class="table-data-item" >{{item.dzdd}}</view>
					<view class="table-data-item">{{item.dccph}}</view>
					<view class="table-data-item">{{item.aqjhr}}</view>
				</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				dataList:{},
			}
			
		},
		onBackPress(event) {
			if (event.from === 'navigateBack') {
				return false;
			}
			uni.navigateTo({
				url:'zuoYe' 
			})
			return true;
		},
		
		methods: {
			
			//根据id查看吊装详情
			async select(id){
				const orderId = id
				uni.navigateTo({
					url:'chaKanDiaoZhuang?orderId='+orderId
				})
			},
			//新增吊装作业
			btn1(){
				uni.navigateTo({
					url:'./addDiaoZhuang'
				})
			}
		},
		async onLoad() {
			// 获取吊装列表
			const res = await this.$myRequest({
				url:'/api/workorder/getHoistingorderList',
				method:'POST'
			})
			if(res.data.code==200){
				this.dataList = res.data.data
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
		.btn1{
			background-color: #CCE6FF;
		}
	}
	
	.scroll{
	
	.table{
		white-space: nowrap;
		line-height: 40px;
		padding: 10px 0;
		font-size: 18px;
		.table-item{
			display: inline-block;
			background-color: #D2F1F0;
			width: 100px;
		}
	}
	
	.table-data{
		display: flex;
		font-size: 12px;
		width: 160%;
		.table-data-item{
			border: 1px solid;
			border-color: #D2F1F0;
			width: 200px;
			text-align: center;
			padding-top: 5px;
		}
	}
	.onclick{
		background: #D2F1F0;
	}
	}
</style>