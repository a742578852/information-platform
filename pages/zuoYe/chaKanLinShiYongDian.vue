<template>
	<view>
		<view class="cu-form-group">
			<view class="title">作业证编号:</view>
			<input placeholder="" name="input" v-model="dataList.zyzbh" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请日期:</view>
			<input placeholder="" name="input" v-model="dataList.sqrq" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请单位:</view>
			<input placeholder="" name="input" v-model="dataList.sqdw" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请人:</view>
			<input placeholder="" name="input" v-model="dataList.sqr" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">用电作业单位:</view>
			<input placeholder="" name="input" v-model="dataList.ydzydw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">用电单位负责人:</view>
			<input placeholder="" name="input" v-model="dataList.yddwfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">用电人:</view>
			<input placeholder="" name="input" v-model="dataList.ydr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">计划性:</view>
			<picker @change="bindPickerChange" :value="index1" :range="arrayjhx" class="item2" style="">
				<view class="uni-input" style="">{{arrayjhx[index1]}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">监护人:</view>
			<input placeholder="" name="input" v-model="dataList.jhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">实施安全教育人:</view>
			<input placeholder="" name="input" v-model="dataList.ssaqjyr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">用电设备功率:</view>
			<input placeholder="" name="input" v-model="dataList.ydsbjgl" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">用电电压:</view>
			<input placeholder="" name="input" v-model="dataList.gzyl" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">用电区域:</view>
			<input placeholder="" name="input" v-model="dataList.ydqy" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">接引设施:</view>
			<input placeholder="" name="input" v-model="dataList.jyss" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">施工项目:</view>
			<input placeholder="" name="input" v-model="dataList.sgxm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">临时用电原因:</view>
			<view class="item2" style="width: 230px;">
				<!-- <textarea class=""  :value="dataList.lsydyy" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.lsydyy" style="width: 200px;"></input>
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
			<scroll-view scroll-y="true" >
				<view class="title">临时用电证有效期:</view>
				<input placeholder="" name="input" v-model="dataList.lsydzyxq" ></input>
			</scroll-view>
		</view>  
		<view class="cu-form-group">
			<view class="title">生产工艺风险危害辨识:</view>
			<view class="item2" style="width: 170px;">
				<!-- <textarea class=""  :value="dataList.whbs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.whbs" style="width: 200px;"></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">消减风险安全措施:</view>
			<view class="item2" style="width: 200px;">
				<!-- <textarea class=""  :value="dataList.aqcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.aqcs" style="width: 200px;"></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">施工  风险评估危害辨识:</view>
			<view class="item2" style="width: 170px;">
				<!-- <textarea class=""  :value="dataList.pgwhbs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.pgwhbs" style="width: 200px;"></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">施工消减风险安全措施:</view>
			<view class="item2" style="width: 170px;">
				<!-- <textarea class=""  :value="dataList.fxaqcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.fxaqcs" style="width: 200px;"></input>
			</view>
		</view>
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()" :disabled="jinyong">保存修改</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jinyong:false,
				dataList:{
					zyzbh:'',
					sqrq:'',
					sqdw:'',
					sqr:'',
					ydzydw:'',
					yddwfzr:'',
					ydr:'',
					jhx:'',
					jhr:'',
					ssaqjyr:'',
					ydsbjgl:'',
					gzyl:'',
					ydqy:'',
					jyss:'',
					sgxm:'',
					lsydyy:'',
					sgfa:'',
					fj:'',
					sjqtzyz:'',
					jhrgw:'',
					lsydzyxq:'',
					whbs:'',
					aqcs:'',
					pgwhbs:'',
					fxaqcs:'',
					ssqk:'',
					jhqk:''
				},
				arrayjhx:['非计划性','计划性'],
				index1:0
			}
		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.detail.value
				this.dataList.jhx = this.index1
				},
				//修改临时用电作业
				async btn1(){
					var token = uni.getStorageSync('token')
					//禁用保存按钮
					this.jinyong = true
					uni.showLoading({
						title:'请稍候。。。'
					})
					setTimeout(function(){
						uni.hideLoading()
					},1500)
					const res = await this.$myRequest({
						url:'/api/workorder/changeElectricOrder',
							method:'POST',
							data:this.dataList,
							header:{
								'content-type': 'application/json',
								'token': token
							}
						}) 
						if(res.data.code==200){
							uni.navigateTo({
								url:'linShiYongDian'
							})
						} 
					//保存按钮解禁
					this.jinyong = false
				}
		},
		async onLoad(option) {
			var orderId = option.orderId
			// 获取临时用电作业证详情
			const res = await this.$myRequest({
				url:'/api/workorder/getelectricorderDetail',
				method:'POST',
				data:{
					'orderId':orderId
				}
			})
			if(res.data.code==200){
				this.dataList = res.data.data
				this.index1 = this.dataList.jhx
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
