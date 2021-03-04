<template>
	<view >
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">申请动土作业</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 30px;">序号</view>
				<view class="table-item" style="padding-left: 1px;">作业证编号</view>
				<view class="table-item" style="padding-left: 10px;">作业证名称</view>
				<view class="table-item" style="padding-left: 25px;">申请人</view>
				<view class="table-item" style="padding-left: 22px;">申请部门</view>
				<view class="table-item" style="padding-left: 22px;">作业期限</view>
				<view class="table-item" style="padding-left: 25px;">监护人</view>
			</view>
				<view class="table-data" hover-class="onclick" v-for="(item,index) in dataList" @click="select(item.id)">
					<view class="table-data-item" >{{index+1}}</view>
					<view class="table-data-item">{{item.zyzbh}}</view>
					<view class="table-data-item">{{item.zyzmc}}</view>
					<view class="table-data-item" >{{item.sqr}}</view>
					<view class="table-data-item">{{item.sqdw}}</view>
					<view class="table-data-item">{{item.zyqx}}</view>
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
					url:'chaKanDongTu?orderId='+orderId
				})
			},
			//新增动土作业
			btn1(){
				uni.navigateTo({
					url:'./addDongTu'
				})
			}
		},
		async onLoad() {
			// 获取动土列表
			const res = await this.$myRequest({
				url:'/api/workorder/getSoilorderList',
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
		width: 188%;
		.table-data-item{
			border: 1px solid;
			border-color: #D2F1F0;
			width: 198px;
			text-align: center;
			padding-top: 5px;
		}
	}
	.onclick{
		background: #D2F1F0;
	}
	}
</style>