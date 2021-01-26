<template>
	<view style="width: 100%;">
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">增加</button>
			<button type="default" class="btn2">车间级班组汇总</button>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 17px;">班组</view>
				<view class="table-item" style="padding-left: 20px;">填报人</view>
				<view class="table-item" style="padding-left: 18px;">日期</view>
				<view class="table-item" style="padding-left: 55px;">操作</view>
			</view>
		<view class="table-data" v-for="(item,index) in dataList">
			<view class="table-data-item" >{{index+1}}</view>
			<view class="table-data-item">{{item.bz}}</view>
			<view class="table-data-item">{{item.tbr}}</view>
			<view class="table-data-item" style="width: 30%;">{{item.tbrq}}</view>
			<view class="table-data-item" style="display: flex;width: 32%;">
				<button @click="select(item.id)" type="default" style="width: 60px;height: 30px;font-size: 10px;line-height: 30px;background-color: #CCE6FF;">查看</button>
				<view class=""style="font-size: 30px;">/</view>
				<button type="default" style="width: 60px;height: 30px;font-size: 10px;line-height: 30px;background-color: #CCE6FF;">修改</button>
			</view>
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
					url:'addBanZu'
				})
			},
			//根据id查看研判详情
			async select(id){
				const bid = id
				uni.navigateTo({
					url:'chaKanBanZu?bid='+bid
				})
			}
		},
		async onLoad() {
			// 获取风险研判列表
			const res = await this.$myRequest({
				url:'/api/judge/getJudgeInfoByParms',
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
		width: 100%;
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
			background-color: #CCE6FF;
		}
		.btn2{
			background-color: #CCE6FF;
		}
	}
	.scroll{
		width: 100%;
	
	.table{
		white-space: nowrap;
		width: 100%;
		height: 60px;
		line-height: 40px;
		display: flex;
		padding: 10px 0;
		font-size: 18px;
		background-color: #D2F1F0;
		.table-item{
			display: inline-block;
			padding-left: 30px;
		}
	}
	
	.table-data{
		display: flex;
		font-size: 12px;
		// margin: 10px;
		width: 100%;
		// background-color: #D2F1F0;
		.table-data-item{
			// margin-left: 20px;
			border: 1px solid;
			height: 35px;
			width: 20%;
			line-height: 35px;
			text-align: center;
		}
	}
	}
</style>
