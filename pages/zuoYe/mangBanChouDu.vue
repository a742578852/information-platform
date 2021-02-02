<template>
	<view >
		<!-- <view class="btn">
			<button type="default" class="btn1" @click="btn1()">增加</button>
		</view> -->
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 30px;">序号</view>
				<view class="table-item" style="padding-left: 1px;">作业证编号</view>
				<view class="table-item" style="padding-left: 20px;">编制人</view>
				<view class="table-item" style="padding-left: 25px;">申请人</view>
				<view class="table-item" style="padding-left: 20px;">申请部门</view>
				<view class="table-item" style="padding-left: 25px;">管线名称</view>
				<view class="table-item" style="padding-left: 30px;">监护人</view>
			</view>
				<view class="table-data" v-for="(item,index) in dataList" @click="select(item.id)">
					<view class="table-data-item" >{{index+1}}</view>
					<view class="table-data-item">{{item.zyzbh}}</view>
					<view class="table-data-item">{{item.bzr}}</view>
					<view class="table-data-item" >{{item.sqr}}</view>
					<view class="table-data-item">{{item.sqbm}}</view>
					<view class="table-data-item">{{item.sbgxmc}}</view>
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
			
			//根据id查看盲板抽堵详情
			async select(id){
				const orderId = id
				uni.navigateTo({
					url:'chaKanMangBanChouDu?orderId='+orderId
				})
			},
			//根据id修改研判详情
			// async update(id){
			// 	const bid = id
				// uni.navigateTo({
				// 	url:'updateBanZu?bid='+bid
				// })
			// }
		},
		async onLoad() {
			// 获取盲板抽堵列表
			const res = await this.$myRequest({
				url:'/api/workorder/getWallorderList',
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
		width: 190%;
		.table-data-item{
			border: 1px solid;
			border-color: #D2F1F0;
			width: 200px;
			text-align: center;
			padding-top: 5px;
		}
	}
	}
</style>