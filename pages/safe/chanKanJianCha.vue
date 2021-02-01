<template>
	<view>
		<view class="cu-form-group">
			<view class="title">检查类型:</view>
			<input name="input" v-model="yhpcJcjlinfo.jclx"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查单号:</view>
			<input name="input" v-model="yhpcJcjlinfo.jcdh"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">录入人:</view>
			<input name="input" v-model="yhpcJcjlinfo.lrr"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查日期:</view>
			<input name="input" v-model="yhpcJcjlinfo.jcrq"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查成员:</view>
			<input name="input" v-model="yhpcJcjlinfo.jczcy"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受检部门:</view>
			<input name="input" v-model="yhpcJcjlinfo.sjbm"></input>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 17px;">检查项目</view>
				<view class="table-item" style="padding-left: 10px;">检查标准</view>
				<view class="table-item" style="padding-left: 8px;">检查结论</view>
				<view class="table-item" style="padding-left: 20px;">描述</view>
				<view class="table-item" style="padding-left: 35px;">整改方式</view>
			</view>
		<view class="table-data" v-for="(item,index) in yhpcJcxminfos">
			<view class="table-data-item" style="width: 15%;">{{index+1}}</view>
			<view class="table-data-item">{{item.jcxm}}</view>
			<view class="table-data-item">{{item.jcbz}}</view>
			<view class="table-data-item">{{item.jcjl}}</view>
			<view class="table-data-item">{{item.ms}}</view>
			<view class="table-data-item">{{item.zgfs}}</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yhpcJcxminfos:[],
				yhpcJcjlinfo:{}
			}
		},
		methods: {
			
		},
		async onLoad(option) {
			var checkId = option.checkId
			
			
			const res = await this.$myRequest({
				url:'/api/risk/getCheckRecordDetail',
				method:'POST',
				data:{
					'checkId':checkId
				}
			})
			console.log(res.data.data);
			if(res.data.code==200){
				this.yhpcJcxminfos = res.data.data.yhpcJcxminfos
				this.yhpcJcjlinfo =  res.data.data.yhpcJcjlinfo
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
		width: 128%;
		.table-data-item{
			border: 1px solid;
			width: 20%;
			text-align: center;
			border-color: #D2F1F0;
		}
	}
	}
</style>

