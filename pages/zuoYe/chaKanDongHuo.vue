<template>
	<view>
		<view class="cu-form-group">
			<view class="title">作业证编号:</view>
			<input placeholder="" name="input" v-model="zyzbh" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请日期:</view>
			<input placeholder="" name="input" v-model="sqrq" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请单位:</view>
			<input placeholder="" name="input" v-model="sqdw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">内部单位负责人:</view>
			<input placeholder="" name="input" v-model="nbdwfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请人:</view>
			<input placeholder="" name="input" v-model="sqr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火地点:</view>
			<input placeholder="" name="input" v-model="dhdd" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火方式:</view>
			<input placeholder="" name="input" v-model="dhfs" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火分析人:</view>
			<input placeholder="" name="input" v-model="dhfxr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">施工项目:</view>
			<input placeholder="" name="input" v-model="sgxm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">施工负责人:</view>
			<input placeholder="" name="input" v-model="sgfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火证类型:</view>
			<picker @change="bindPickerChange" :value="index1" :range="arraydhzlx" class="item2" style="">
				<view class="uni-input" style="">{{dhzlx==''?arraydhzlx[index1] : dhzlx}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">计划性:</view>
			<picker @change="bindPickerChange" :value="index2" :range="arrayjhx" class="item2" style="">
				<view class="uni-input" style="">{{jhx==''?arrayjhx[index2] : jhx}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">施工安全教育人:</view>
			<input placeholder="" name="input" v-model="ssaqjyr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">包含外部单位:</view>
			<radio-group name="" @change="radioChange1" style="display: flex;">
				<label>
					<radio value="是" :checked="check1"/><text style="margin-left: 5px;">是</text>
				</label>
				<label>
					<radio value="否" :checked="check11"/><text style="margin-left: 5px;">否</text>
				</label>
			</radio-group>
		</view>
		<view class="cu-form-group">
			<view class="title">外部作业单位:</view>
			<input placeholder="" name="input" v-model="wbzydw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">外部单位负责人:</view>
			<input placeholder="" name="input" v-model="wbdwfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火内容:</view>
			<view class="item2" style="width: 150px;">
				<textarea class=""  value="" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
			</view>
		</view>
		<view class="">涉及其他作业证</view>
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
		</scroll-view>
		<view class="cu-form-group">
			<view class="title">监火人:</view>
			<input placeholder="" name="input" v-model="jhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">监火人岗位:</view>
			<input placeholder="" name="input" v-model="jhrgw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火期限:</view>
			<input placeholder="" name="input" v-model="jhrgw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">危害辨识:</view>
			<view class="item2" style="width: 150px;">
				<textarea class=""  value="" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">安全措施:</view>
			<view class="item2" style="width: 150px;">
				<textarea class=""  value="" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arraydhzlx:[],
				arrayjhx:[],
				index1:0,
				index2:0,
				
				
			}
		},
		methods: {
			
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
