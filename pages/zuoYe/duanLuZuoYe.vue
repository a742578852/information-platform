<template>
	<view >
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">申请断路作业</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 35px;">序号</view>
				<view class="table-item" style="padding-left: 5px;">作业证编号</view>
				<view class="table-item" style="padding-left: 15px;">作业单位</view>
				<view class="table-item" style="padding-left: 23px;">申请人</view>
				<view class="table-item" style="padding-left: 16px;">申请部门</view>
				<view class="table-item" style="padding-left: 8px;">安全教育人</view>
				<view class="table-item" style="padding-left: 15px;">施工项目</view>
			</view>
				<view class="table-data" hover-class="onclick" v-for="(item,index) in dataList" @click="select(item.id)">
					<view class="table-data-item" >{{index+1}}</view>
					<view class="table-data-item">{{item.zyzbh}}</view>
					<view class="table-data-item">{{item.zydw}}</view>
					<view class="table-data-item" >{{item.sqr}}</view>
					<view class="table-data-item">{{item.sqbm}}</view>
					<view class="table-data-item">{{item.ssaqjyr}}</view>
					<view class="table-data-item" >{{item.sgxm}}</view>
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
					url:'chaKanDuanLu?orderId='+orderId
				})
			},
			//新增动火作业
			btn1(){
				uni.navigateTo({
					url:'./addDuanLu'
				})
			}
		},
		async onLoad() {
			// 获取盲板抽堵列表
			const res = await this.$myRequest({
				url:'/api/workorder/getBreakorderList',
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
			width: 106px;
		}
	}
	
	.table-data{
		display: flex;
		font-size: 12px;
		width: 200%;
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
