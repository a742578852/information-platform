<template>
	<view >
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">申请动火作业</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 8px;">作业证编号</view>
				<view class="table-item" style="padding-left: 10px;">申请日期</view>
				<view class="table-item" style="padding-left: 15px;">申请单位</view>
				<view class="table-item" style="padding-left: 22px;">动火地点</view>
				<view class="table-item" style="padding-left: 18px;">动火方式</view>
				<view class="table-item" style="padding-left: 28px;padding-right: 20px;">监火人</view>
				<!-- <view class="table-item" style="padding-left: 55px;">操作</view> -->
			</view>
				<view class="table-data" hover-class="onclick" v-for="(item,index) in dataList" @click="select(item.id)">
					<view class="table-data-item" style="width: 120px;">{{index+1}}</view>
					<view class="table-data-item" style="padding-top: 0px;">{{item.zyzbh}}</view>
					<view class="table-data-item">{{item.sqrq}}</view>
					<view class="table-data-item" >{{item.sqdw}}</view>
					<view class="table-data-item">{{item.dhdd}}</view>
					<view class="table-data-item">{{item.dhfs}}</view>
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
			//根据id查看动火详情
			async select(id){
				const orderId = id
				uni.navigateTo({
					url:'chaKanDongHuo?orderId='+orderId
				})
			},
			//新增动火作业
			btn1(){
				uni.navigateTo({
					url:'./addDongHuo'
				})
			}
		},
		async onLoad() {
			// 获取动火作业证列表
			const res = await this.$myRequest({
				url:'/api/workorder/getFireorderList',
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
			padding-left: 30px;
			background-color: #D2F1F0;
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
