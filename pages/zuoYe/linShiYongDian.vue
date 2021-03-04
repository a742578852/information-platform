<template>
	<view >
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">申请临时用电</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 30px;">序号</view>
				<view class="table-item" style="padding-left: 1px;">作业证编号</view>
				<view class="table-item" style="padding-left: 10px;">申请日期</view>
				<view class="table-item" style="padding-left: 25px;">申请人</view>
				<view class="table-item" style="padding-left: 15px;">申请部门</view>
				<view class="table-item" style="padding-left: 20px;">用电区域</view>
				<view class="table-item" style="padding-left: 25px;">监护人</view>
			</view>
				<view class="table-data" hover-class="onclick" v-for="(item,index) in dataList" @click="select(item.id)">
					<view class="table-data-item" >{{index+1}}</view>
					<view class="table-data-item">{{item.zyzbh}}</view>
					<view class="table-data-item">{{item.sqrq}}</view>
					<view class="table-data-item" >{{item.sqr}}</view>
					<view class="table-data-item">{{item.sqdw}}</view>
					<view class="table-data-item">{{item.ydqy}}</view>
					<view class="table-data-item" >{{item.jhr}}</view>
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
			
			//根据id查看临时用电详情
			async select(id){
				const orderId = id
				uni.navigateTo({
					url:'chaKanLinShiYongDian?orderId='+orderId
				})
			},
			//新增临时用电作业
			btn1(){
				uni.navigateTo({
					url:'./addLinShiYongDian'
				})
			}
		},
		async onLoad() {
			// 获取临时用电列表
			const res = await this.$myRequest({
				url:'/api/workorder/getelectricorderList',
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
			width: 98px;
		}
	}
	
	.table-data{
		display: flex;
		font-size: 12px;
		width: 188%;
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