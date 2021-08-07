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
			<view class="title">申请部门:</view>
			<input placeholder="" name="input" v-model="dataList.sqbm" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请人:</view>
			<input placeholder="" name="input" v-model="dataList.sqr" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受限空间介质:</view>
			<input placeholder="" name="input" v-model="dataList.sxkjzyjz" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受限空间名称:</view>
			<input placeholder="" name="input" v-model="dataList.sxkjmc" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业部门:</view>
			<input placeholder="" name="input" v-model="dataList.zybm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业负责人:</view>
			<input placeholder="" name="input" v-model="dataList.zyfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">安全监护人:</view>
			<input placeholder="" name="input" v-model="dataList.aqjhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">确认人:</view>
			<input placeholder="" name="input" v-model="dataList.qrr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">受限空间分析人:</view>
			<input placeholder="" name="input" v-model="dataList.sxkjfxr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">计划性:</view>
			<picker @change="bindPickerChange1" :value="index1" :range="arrayjhx" class="item2" style="">
				<view class="uni-input" style="">{{arrayjhx[index1]}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">施工项目:</view>
			<input placeholder="" name="input" v-model="dataList.sgxm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">电源情况:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.dyqk" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.dyqk" style="width: 200px;"></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">作业内容:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.zynr" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.zynr" style="width: 200px;"></input>
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
			<input placeholder="" name="input" v-model="dataList.jhr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">监护人岗位:</view>
			<input placeholder="" name="input" v-model="dataList.jhrgw" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业期限:</view>
			<input placeholder="" name="input" v-model="dataList.zyqx" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">危害辨识:</view>
			<view class="item2" style="width: 255px;" @click="wh">
				<!-- <textarea class=""  :value="dataList.whbs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.whbs" style="width: 200px;" disabled="" maxlength=""></input>
			</view>
		</view>
		<scroll-view scroll-x="true" class="scroll" v-if="isTrue">
			<view class="table">
				<view class="table-item-item" style="width: 150rpx;">序号</view>
				<view class="table-item-item" style="width: 320rpx;">风险因素</view>
				<view class="table-item-item" style="width: 320rpx;">安全措施</view>
			</view>
			<checkbox-group @change="checkboxChange">
				
				<view class="table-data"  v-for="(item,inde) in whbsList" >
					<checkbox :value="inde" >
					<view class="table-data-item1" style="width: 150rpx;padding-left: 25rpx;">{{inde+1}}</view>
					<view class="table-data-item1" style="width: 300rpx;">{{item.fxys}}</view>
					<view class="table-data-item1" style="width: 300rpx;">{{item.aqcs}}</view>
					</checkbox>
				</view>
			</checkbox-group>
				<view class="btn">
					<button type="default" class="btn1" @click="btnAqcs">保存</button>
				</view>
		</scroll-view>
		<view class="cu-form-group">
			<view class="title">安全措施:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.aqcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.aqcs" style="width: 200px;" disabled="" maxlength=""></input>
			</view>
		</view>
		<view class="btn">
			<button type="default" class="btn8" @click="btn9">签名</button>
			<button type="default" class="btn1" @click="btn1()" :disabled="jinyong">保存修改</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				whbsList:[],
				values:[],
				isTrue:false,
				jinyong:false,
				dataList:{
					zyzbh:'',
					sqrq:'',
					sxkjmc:'',
					sxkjzyjz:'',
					zybm:'',
					zyfzr:'',
					jhx:'',
					sqbm:'',
					sqr:'',
					aqjhr:'',
					qrr:'',
					sxkjfxr:'',
					sgxm:'',
					dyqk:'',
					zynr:'',
					sjqtzyz:'',
					jhr:'',
					jhrgw:'',
					zyqx:'',
					whbs:'',
					aqcs:'',
					ssqk:'',
					jhqk:''
				},
				index1:0,
				arrayjhx:['非计划性','计划性']
			}
		},
		methods: {
			//签名
			btn9(){
				uni.navigateTo({
					url:'../canvas/canvas'
				})
			},
			checkboxChange: function (e) {
				 this.values = e.detail.value
			 },
			//选择危害辨识
			btnAqcs(){
				this.dataList.whbs = ''
				this.dataList.aqcs = ''
				this.isTrue = false
				for(var i=0;i<this.values.length;i++){
					var ind = this.values[i]
				    this.dataList.whbs = this.dataList.whbs+' '+this.whbsList[ind].fxys+' '
					this.dataList.aqcs = this.dataList.aqcs+' '+this.whbsList[ind].aqcs
				}
			},
			wh(){
				this.isTrue = !this.isTrue
			},
			bindPickerChange1(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.detail.value
				this.dataList.jhx = this.index1
				},
				//修改受限作业
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
					url:'/api/workorder/changeSpaceOrder',
						method:'POST',
						data:this.dataList,
						header:{
							'content-type': 'application/json',
							'token': token
						}
					}) 
					if(res.data.code==200){
						uni.navigateTo({
							url:'shouXianKongJian'
						})
					} 
					//保存按钮解禁
					this.jinyong = false
				}
		},
		async onLoad(option) {
			const ress = await this.$myRequest({
					url:'/api/workorder/getSafetyMeasures',
					method:'get',
					data:{
						'orderName':'受限空间作业证'
					}
				})
				if(ress.data.code==200){
					this.whbsList = ress.data.data
				}
			var orderId = option.orderId
			// 获取受限作业证详情
			const res = await this.$myRequest({
				url:'/api/workorder/getSpaceorderDetail',
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
		.table-item-item{
			width: 750rpx;
			display: inline-block;
			background-color: #D2F1F0;
			padding-left: 30px;
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

