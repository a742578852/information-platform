<template>
	<view>
		<view class="cu-form-group">
			<view class="title">检查类型:</view>
			<input name="input" v-model="jclx"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查单号:</view>
			<input name="input" v-model="jcdh"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">录入人:</view>
			<input name="input" v-model="lrr"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查日期:</view>
			<input name="input" v-model="jcrq"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查成员:</view>
			<input name="input" v-model="jccy"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受检部门:</view>
			<input name="input" v-model="sjbm"></input>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 17px;">检查项目</view>
				<view class="table-item" style="padding-left: 20px;">检查标准</view>
				<view class="table-item" style="padding-left: 18px;">检查结论</view>
				<view class="table-item" style="padding-left: 18px;">描述</view>
				<view class="table-item" style="padding-left: 18px;">整改方式</view>
			</view>
		<view class="table-data" v-for="(item,index) in dataList">
			<view class="table-data-item" >{{index+1}}</view>
			<view class="table-data-item">{{}}</view>
			<view class="table-data-item">{{}}</view>
			<view class="table-data-item">{{}}</view>
			<view class="table-data-item">{{}}</view>
			<view class="table-data-item">{{}}</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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

