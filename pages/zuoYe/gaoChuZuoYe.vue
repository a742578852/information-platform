<template>
	<view >
		<!-- <view class="btn">
			<button type="default" class="btn1" @click="btn1()">增加</button>
		</view> -->
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 10px;">作业证编号</view>
				<view class="table-item" style="padding-left: 17px;">申请人</view>
				<view class="table-item" style="padding-left: 20px;">申请部门</view>
				<view class="table-item" style="padding-left: 18px;">作业地点</view>
				<view class="table-item" style="padding-left: 18px;">监护人</view>
				<view class="table-item" style="padding-left: 18px;">审核状态</view>
				<!-- <view class="table-item" style="padding-left: 55px;">操作</view> -->
			</view>
				<view class="table-data" v-for="(item,index) in dataList">
					<view class="table-data-item" >{{index+1}}</view>
					<view class="table-data-item">{{}}</view>
					<view class="table-data-item">{{}}</view>
					<view class="table-data-item" >{{}}</view>
					<view class="table-data-item">{{}}</view>
					<view class="table-data-item">{{}}</view>
					<view class="table-data-item" >{{}}</view>
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
			huizong(){
				uni.navigateTo({
					url:'huiZongBan'
				})
			},
			// btn1(){
			// 	uni.navigateTo({
			// 		url:''
			// 	})
			// },
			//根据id查看研判详情
			async select(id){
				const bid = id
				// uni.navigateTo({
				// 	url:'chaKanBanZu?bid='+bid
				// })
			},
			//根据id修改研判详情
			async update(id){
				const bid = id
				// uni.navigateTo({
				// 	url:'updateBanZu?bid='+bid
				// })
			}
		},
		// async onLoad() {
		// 	// 获取风险研判列表
		// 	const res = await this.$myRequest({
		// 		url:'/api/judge/getJudgeInfoByParms',
		// 		method:'POST'
		// 	})
		// 	if(res.data.code==200){
		// 		this.dataList = res.data.data
		// 	}
		// }
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
		// width: 100%;
		
	}

	.scroll{
		// width: 100%;
		
	
	.table{
		white-space: nowrap;
		//  width: 100%;
		// height: 60px;
		line-height: 40px;
		//display: flex;
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
		// margin: 10px;
		// width: 100%;
		// background-color: #D2F1F0;
		.table-data-item{
			// margin-left: 20px;
			border: 1px solid;
			// height: 35px;
			width: 20%;
			// line-height: 35px;
			text-align: center;
		}
	}
	}
</style>
