<template>
	<view>
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()">增加</button>
			<button type="default" class="btn2">车间级班组汇总</button>
		</view>
		<scroll-view scroll-x="true" class="table">
			
		
			<view class="table-item" style="padding-left: 1px;">序号</view>
			<view class="table-item">班组</view>
			<view class="table-item">填报人</view>
			<view class="table-item">附件</view>
			<view class="table-item">操作66666666666</view>
		</scroll-view>
		<view class="table-data" v-for="(item,index) in dataList">
			<view class="table-data-item">{{index+1}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:{}
			}
		},
		methods: {
			btn1(){
				uni.navigateTo({
					url:'addBanZu'
				})
			}
		}
	}
</script>

<style lang="scss">
.btn{
		width: 100%;
		height: 65px;
		line-height: 30px;
		font-size: 30px;
		padding: 10px;
		background-color: #CCE6FF;
		display: flex;
		.btn1{
			background-color: #007AFF;
		}
		.btn2{
			background-color: #007AFF;
		}
	}
	.table{
		white-space: nowrap;
		width: 100%;
		height: 60px;
		line-height: 40px;
		display: flex;
		padding: 10px;
		font-size: 20px;
		background-color: #8799A3;
		.table-item{
			display: inline-block;
			padding-left: 22px;
		}
	}
</style>
