<template>
	<view>
		<view class="btn">
			<button type="default" class="btn2">公司级汇总</button>
		</view>
		<view class="table">
			<view class="table-item" style="padding-left: 1px;">序号</view>
			<view class="table-item">填报日期</view>
			<view class="table-item">填报人</view>
			<view class="table-item">部门名称</view>
			<view class="table-item">操作</view>
		</view>
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
		width: 100%;
		height: 60px;
		line-height: 40px;
		display: flex;
		padding: 10px;
		font-size: 20px;
		background-color: #8799A3;
		
		.table-item{
			padding-left: 10px;
			
		}
	}
</style>
