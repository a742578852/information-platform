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
			<view class="title">申请人:</view>
			<input placeholder="" name="input" v-model="sqr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受限空间介质:</view>
			<input placeholder="" name="input" v-model="sxkjjz" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受限空间名称:</view>
			<input placeholder="" name="input" v-model="sxkjmc" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业部门:</view>
			<input placeholder="" name="input" v-model="zybm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业负责人:</view>
			<input placeholder="" name="input" v-model="zyfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">安全监护人:</view>
			<input placeholder="" name="input" v-model="aqjhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">确认人:</view>
			<input placeholder="" name="input" v-model="qrr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受限空间分析人:</view>
			<input placeholder="" name="input" v-model="sxkjfxr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">计划性:</view>
			<picker @change="bindPickerChange" :value="index2" :range="arrayjhx" class="item2" style="">
				<view class="uni-input" style="">{{jhx==''?arrayjhx[index2] : jhx}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">施工项目:</view>
			<input placeholder="" name="input" v-model="sgxm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">电源情况:</view>
			<view class="item2" style="width: 150px;">
				<textarea class=""  value="" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">作业内容:</view>
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
			<view class="title">监护人:</view>
			<input placeholder="" name="input" v-model="jhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">监护人岗位:</view>
			<input placeholder="" name="input" v-model="jhrgw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业期限:</view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
