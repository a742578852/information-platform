<template>
	<view>
		<view class="cu-form-group">
			<view class="title">标题:</view>
			<input  name="input" v-model="bt" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">填报人:</view>
			<input  name="input" v-model="tbr" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">是否通用:</view>
			<input  name="input" v-model="isty" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">备注:</view>
			<input  name="input" v-model="bz" disabled=""></input>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 20px;">序号</view>
				<view class="table-item" style="padding-left: 60px;">检查项目</view>
				<view class="table-item" style="padding-left: 70px;padding-right: 30px;">检查内容</view>
				
			</view>
		<view class="table-data" v-for="(item,index) in dataList" >
			<view class="table-data-item" style="width: 20%;">{{index+1}}</view>
			<view class="table-data-item">{{item.jcxm}}</view>
			<view class="table-data-item">{{item.jcnr}}</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{
						jcbid:'',
						jcxm:'',
						jcnr:''
					}
				],
				bt:'',
				tbr:'',
				isty:'',
				bz:''
			}
		},
		methods: {
			
		},
		async onLoad(option) {
			var formId = option.formId
			this.bt = option.bt
			this.tbr = option.tbr
			this.isty = option.isty
			this.bz = option.bz
			
			const res = await this.$myRequest({
				url:'/api/risk/getCheckFormDetail',
				method:'POST',
				data:{
					'formId':formId
				}
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
			padding-left: 50px;
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
			border-color: #D2F1F0;
			// height: 35px;
			width: 41%;
			// line-height: 35px;
			text-align: center;
		}
	}
	}
</style>

