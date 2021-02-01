<template>
	<view style="width: 100%;">
		
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 20px;">序号</view>
				<view class="table-item" style="padding-left: 30px;">标题</view>
				<view class="table-item" style="padding-left: 30px;">创建人</view>
				<view class="table-item" style="padding-left: 10px;">是否通用</view>
				<view class="table-item" style="padding-left: 10px;width: 70px;">备注</view>
			</view>
		<view class="table-data" v-for="(item,index) in dataList" @click="select(item.id,item.bt,item.tbr,item.isty,item.bz)">
			<view class="table-data-item" >{{index+1}}</view>
			<view class="table-data-item">{{item.bt}}</view>
			<view class="table-data-item">{{item.tbr}}</view>
			<view class="table-data-item">{{item.isty = 0?'否':'是'}}</view>
			<view class="table-data-item">{{item.bz}}</view>
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
			
			//根据id查看检查表详情
			async select(id,bt,tbr,isty,bz){
				const formId = id
				console.log(formId);
				uni.navigateTo({
					 url:'chaKanJianchaBiao?formId='+formId+'&bt='+bt+'&tbr='+tbr+'&isty='+isty+'&bz='+bz
				})
			}
		},
		async onLoad() {
			// 获取检查记录列表
			const res = await this.$myRequest({
				url:'/api/risk/getCheckForm',
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
			// height: 35px;
			width: 20%;
			line-height: 35px;
			text-align: center;
		}
	}
	}
</style>
