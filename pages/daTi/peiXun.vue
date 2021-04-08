<template>
	<view style="width: 100%;">
		
		
		<scroll-view scroll-x="true" class="scroll">
			
			<view class="table">
				<view class="table-item" style="padding-left: 2px;">序号</view>
				<view class="table-item" style="padding-left: 10px;">标题</view>
				<view class="table-item" style="padding-left: 10px;">所属类型</view>
				<view class="table-item" style="padding-left: 10px;">关键字</view>
				<view class="table-item" style="padding-left: 10px;">上传部门</view>
				<view class="table-item" style="padding-left: 5px;">操作</view>
			</view>
		<view class="table-data" v-for="(item,index) in dataList">
			<view class="table-data-item" style="width: 10%;">{{index+1}}</view>
			<view class="table-data-item">{{item.bt}}</view>
			<view class="table-data-item">{{item.sslx}}</view>
			<view class="table-data-item">{{item.gjz}}</view>
			<view class="table-data-item">{{item.scbm}}</view>
			<view class="table-data-item" >
				<button type="default" v-if="item.fj!=null" @click="d(item.fj)" style="font-size: 12px;background-color: #D2F1F0;margin-top: 10px;">查看附件</button>
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
				ip:'',
				pfj:'',
			}
			
		},
		// onBackPress(event) {
		// 	if (event.from === 'navigateBack') {
		// 		return false;
		// 	}
		// 	uni.navigateTo({
		// 		url:'../index/index' 
		// 	})
		// 	return true;
		// },
		methods: {
			d(fj){
				this.ip = uni.getStorageSync('address');
				// this.pfj = 'http://www.xdocin.com/xdoc?_func=to&_format=html&_cache=1&_xdoc=http://'+this.ip+fj
				// console.log(this.pfj)
				var iip = 'http://'+this.ip+fj
				 plus.runtime.openURL("https://view.xdocin.com/xdoc?_xdoc=" + encodeURIComponent(iip));
				
			},
			
		},
		async onLoad() {
			// 获取培训资料列表
			const res = await this.$myRequest({
				url:'/api/study/getTrainingMaterials',
				method:'GET'
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
		margin: 10px 0;
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
		.table-data-item{
			border: 1px solid;
			border-color: #D2F1F0;
			// height: 35px;
			width: 20%;
			line-height: 35px;
			text-align: center;
		}
	}
	}
</style>
