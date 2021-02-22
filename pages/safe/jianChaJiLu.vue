<template>
	<view style="width: 100%;">
		<view class="btn">
			<button type="default" class="btn1" @click="btn1">新增检查记录</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 17px;">检查类型</view>
				<view class="table-item" style="padding-left: 17px;">检查单号</view>
				<view class="table-item" style="padding-left: 18px;">录入人</view>
				<view class="table-item" style="padding-left: 25px;">检查日期</view>
				<view class="table-item" style="padding-left: 25px;">检查成员</view>
				<view class="table-item" style="padding-left: 25px;">受检部门</view>
			</view>
		<view class="table-data" v-for="(item,index) in dataList" @click="select(item.id)">
			<view class="table-data-item" style="width: 15%;">{{index+1}}</view>
			<view class="table-data-item">{{item.jclx}}</view>
			<view class="table-data-item">{{item.jcdh}}</view>
			<view class="table-data-item">{{item.lrr}}</view>
			<view class="table-data-item">{{item.jcrq}}</view>
			<view class="table-data-item">{{item.jczcy}}</view>
			<view class="table-data-item">{{item.sjbm}}</view>
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
		methods: {
			btn1(){
				uni.navigateTo({
					url:'./addJiancha'
				})
			},
			//根据id查看记录详情
			async select(id){
				const checkId = id
				uni.navigateTo({
					 url:'chanKanJianCha?checkId='+checkId
				})
			}
		},
		async onLoad() {
			// 获取检查记录列表
			const res = await this.$myRequest({
				url:'/api/risk/getCheckrecordList',
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
		// width: 100%;
	}

	.scroll{
		// width: 100%;
	
	.table{
		white-space: nowrap;
		// width: 100%;
		// height: 60px;
		line-height: 40px;
		display: flex;
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
		width: 158%;
		.table-data-item{
			border: 1px solid;
			border-color: #D2F1F0;
			width: 22%;
			text-align: center;
		}
	}
	}
	.btn{
			width: 100%;
			height: 65px;
			line-height: 30px;
			font-size: 30px;
			padding: 10px;
			// background-color: #CCE6FF;
			display: flex;
			.btn1{
				width: 100%;
				background-color: #CCE6FF;
			}
			
		}
</style>
