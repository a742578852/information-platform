<template>
	<view>
		<view class="cu-form-group">
			<view class="title">作业证编号:</view>
			<input placeholder="" name="input" v-model="dataList.zyzbh" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请日期:</view>
			<input placeholder="" name="input" v-model="dataList.zyzsqrq" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请部门:</view>
			<input placeholder="" name="input" v-model="dataList.sqbm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请人:</view>
			<input placeholder="" name="input" v-model="dataList.zyzfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">吊装地点:</view>
			<input placeholder="" name="input" v-model="dataList.dzdd" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">吊车车牌号:</view>
			<input placeholder="" name="input" v-model="dataList.dccph" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">负责人:</view>
			<input placeholder="" name="input" v-model="dataList.fzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">实施安全教育人:</view>
			<input placeholder="" name="input" v-model="dataList.ssaqjyr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">编制人:</view>
			<input placeholder="" name="input" v-model="dataList.bzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">起吊重物质量:</view>
			<input placeholder="" name="input" v-model="dataList.qdzwzl" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">起吊最大质量:</view>
			<input placeholder="" name="input" v-model="dataList.zdqzl" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">施工项目:</view>
			<input placeholder="" name="input" v-model="dataList.sgxm" ></input>
		</view>
		
		<view class="cu-form-group">
			<view class="title">吊装内容:</view>
			<view class="item2" style="width: 150px;">
				<textarea class=""  :value="dataList.dznr" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
			</view>
		</view>
		<!-- <view class="">涉及其他作业证</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 10px;">动火人</view>
				<view class="table-item" style="padding-left: 10px;">作业人角色</view>
				<view class="table-item" style="padding-left: 17px;">所属单位</view>
				<view class="table-item" style="padding-left: 20px;">证书名称</view>
				<view class="table-item" style="padding-left: 18px;">证书号</view>
			</view>
				<view class="table-data" v-for="(item,index) in dataList">
					<view class="table-data-item" >{{index+1}}</view>
					<view class="table-data-item">{{}}</view>
					<view class="table-data-item">{{}}</view>
					<view class="table-data-item" >{{}}</view>
					<view class="table-data-item">{{}}</view>
					<view class="table-data-item">{{}}</view>
				</view>
		</scroll-view> -->
		<view class="cu-form-group">
			<view class="title">监护人:</view>
			<input placeholder="" name="input" v-model="dataList.aqjhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">监护人岗位:</view>
			<input placeholder="" name="input" v-model="dataList.jhrgw" ></input>
		</view>
		<view class="cu-form-group">
			<scroll-view scroll-y="true" >
			<view class="title">作业期限:</view>
			<input placeholder="" name="input" v-model="dataList.zyqx" ></input>
			</scroll-view>
		</view>
		<view class="cu-form-group">
			<view class="title">危害辨识:</view>
			<view class="item2" style="width: 150px;">
				<textarea class=""  :value="dataList.whbs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">安全措施:</view>
			<view class="item2" style="width: 150px;">
				<textarea class=""  :value="dataList.aqcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:{
					zyzbh:'',
					dzzlx:'',
					sqbm:'',
					fzr:'',
					zyzfzr:'',
					zyzsqrq:'',
					ssaqjyr:'',
					bzr:'',
					dzdd:'',
					dccph:'',
					qdzwzl:'',
					zdqzl:'',
					sgxm:'',
					dznr:'',
					sgfa:'',
					fj:'',
					sjqtzyz:'',
					aqjhr:'',
					jhrgw:'',
					zyqx:'',
					whbs:'',
					aqcs:'',
					ssqk:'',
					jhqk:''
				}
			}
		},
		methods: {
			
		},
		async onLoad(option) {
			var orderId = option.orderId
			// 获取吊装作业证详情
			const res = await this.$myRequest({
				url:'/api/workorder/getHoistingorderDetail',
				method:'POST',
				data:{
					'orderId':orderId
				}
			})
			if(res.data.code==200){
				this.dataList = res.data.data
				}
		}
	}
</script>

<style lang="scss">
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

