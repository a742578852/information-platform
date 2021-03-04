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
			<view class="title">内部单位负责人:</view>
			<input placeholder="" name="input" v-model="dataList.nbzydwfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请人:</view>
			<input placeholder="" name="input" v-model="dataList.sqr" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火地点:</view>
			<input placeholder="" name="input" v-model="dataList.dhdd" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火方式:</view>
			<input placeholder="" name="input" v-model="dataList.dhfs" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火分析人:</view>
			<input placeholder="" name="input" v-model="dataList.dhfxr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">施工项目:</view>
			<input placeholder="" name="input" v-model="dataList.sgxm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">施工负责人:</view>
			<input placeholder="" name="input" v-model="dataList.sgfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火证类型:</view>
			<picker @change="bindPickerChange1" :value="index1" :range="arraydhzlx" class="item2" style="">
				<view class="uni-input" style="">{{dataList.dhzlx==''?arraydhzlx[index1] : dataList.dhzlx}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">计划性:</view>
			<picker @change="bindPickerChange2" :value="index2" :range="arrayjhx" class="item2" style="">
				<view class="uni-input" style="">{{dataList.jhx==''?arrayjhx[index2] : dataList.jhx}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">施工安全教育人:</view>
			<input placeholder="" name="input" v-model="dataList.ssaqjyr" ></input>
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
			<input placeholder="" name="input" v-model="dataList.wbzydw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">外部单位负责人:</view>
			<input placeholder="" name="input" v-model="dataList.wbzydwfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">动火内容:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.dhnr" auto-height="true" style="width: 200px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.dhnr" ></input>
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
			<view class="title">监火人:</view>
			<input placeholder="" name="input" v-model="dataList.jhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">监火人岗位:</view>
			<input placeholder="" name="input" v-model="dataList.jhrgw" ></input>
		</view>
		<view class="cu-form-group">
			<scroll-view scroll-x="true" class="scroll">
				<view class="title">动火期限上午:</view>
				<input placeholder="" name="input" v-model="dataList.dhqxsw" style="height: auto;"></input>
			</scroll-view>
		</view>
		<view class="cu-form-group">
			<scroll-view scroll-x="true" class="scroll">
				<view class="title">动火期限下午:</view>
				<input placeholder="" name="input" v-model="dataList.dhqxxw" ></input>
			</scroll-view>
		</view>
		<view class="cu-form-group">
			<view class="title">危害辨识:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.whbs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.whbs" ></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">安全措施:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.aqcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.whbs" ></input>
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
				arraydhzlx:['特殊动火作业证','一级动火作业证','二级动火作业证'],
				arrayjhx:['非计划性','计划性'],
				jinyong:false,
				index1:0,
				index2:0,
				check1:false,
				check11:false,
				dataList:{
					id:'',
					zyzbh:'',
					sqrq:'',
					sqdw:'',
					nbzydwfzr:'',
					sqr:'',
					dhdd:'',
					dhfs:'',
					dhfxr:'',
					sgxm:'',
					sgfzr:'',
					dhzlx:'',
					jhx:'',
					ssaqjyr:'',
					bhwbdw:'',
					wbzydw:'',
					wbzydwfzr:'',
					dhnr:'',
					sgfa:'',
					sjqtzyz:'',
					jhr:'',
					jhrgw:'',
					dhqxsw:'',
					dhqxxw:'',
					whbs:'',
					aqcs:'',
					ssqk:'',
					jhqk:'',
					
				}
			}
		},
		methods: {
			bindPickerChange1(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.detail.value
				this.dataList.dhzlx = this.index1
				},
			bindPickerChange2(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index2 = e.detail.value
				this.dataList.jhx = this.index2
				},
			radioChange1(event){
				this.dataList.bhwbdw = event.target.value
			},
			//保存动火作业
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
					url:'/api/workorder/changeFireOrder',
					method:'POST',
					data:this.dataList,
					header:{
						'content-type': 'application/json',
						'token': token
					}
				}) 
				if(res.data.code==200){
					uni.navigateTo({
						url:'dongHuoZuoYe'
					})
				}
				//保存按钮解禁
				this.jinyong = false
			}
		},
		async onLoad(option) {
			var orderId = option.orderId
			// 获取动火作业证详情
			const res = await this.$myRequest({
				url:'/api/workorder/getFireorderDetail',
				method:'POST',
				data:{
					'orderId':orderId
				}
			})
			if(res.data.code==200){
				this.dataList = res.data.data
				if(this.dataList.bhwbdw=='是'){
					this.check1 = true
				}
				if(this.dataList.bhwbdw=='否'){
					this.check11 = true
				}
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
