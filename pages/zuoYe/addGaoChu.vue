<template>
	<view>
		<view class="cu-form-group">
			<view class="title">作业证编号:</view>
			<input placeholder="保存后自动生成" name="input" v-model="dataList.zyzbh" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业证类型:</view>
			<picker @change="bindPickerChange1" :value="index1" :range="arrayzyzlx" class="item2" style="">
				<view class="uni-input" style="">{{arrayzyzlx[index1]}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">申请日期:</view>
			<input placeholder="" name="input" v-model="dataList.zyzsqrq" ></input>
		</view>
		<!-- <view class="cu-form-group">
			<view class="title">申请单位:</view>
			<input placeholder="" name="input" v-model="dataList.sqbm" ></input>
		</view> -->
		<view class="cu-form-group">
			<view class="title">申请单位:</view>
			<picker @change="bindPickerChange" :value="index" :range="arrayBz" class="item2" style="">
				<view class="uni-input" style="">{{arrayBz[index]}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">内部单位负责人:</view>
			<input placeholder="" name="input" v-model="dataList.zynbfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">外部单位负责人:</view>
			<input placeholder="" name="input" v-model="dataList.zywbfzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">申请人:</view>
			<input placeholder="" name="input" v-model="dataList.sqr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业地点:</view>
			<input placeholder="" name="input" v-model="dataList.zydd" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">作业高度:</view>
			<input placeholder="" name="input" v-model="dataList.zygd" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">施工项目:</view>
			<input placeholder="" name="input" v-model="dataList.sgxm" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">编制人:</view>
			<input placeholder="" name="input" v-model="dataList.bzr" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">实施安全教育人:</view>
			<input placeholder="" name="input" v-model="dataList.ssaqjyr" ></input>
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
			<scroll-view scroll-y="true" >
				<view class="title">作业期限:</view>
				<input placeholder="" name="input" v-model="dataList.zyqx" ></input>
			</scroll-view>
		</view>
		<view class="cu-form-group">
			<view class="title">危害辨识:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.whbs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.whbs" style="width: 200px;"></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">安全措施:</view>
			<view class="item2" style="width: 255px;">
				<!-- <textarea class=""  :value="dataList.aqcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/> -->
				<input placeholder="" name="input" v-model="dataList.aqcs" style="width: 200px;"></input>
			</view>
		</view>
		<view class="btn">
			<button type="default" class="btn1" @click="btn1()" :disabled="jinyong">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrayBz:[],
				jinyong:false,
				index:0,
				dataList:{
					id:0,
					zyzbh:'',
					gczlx:'',
					sqr:'',
					sqbm:'',
					zynbfzr:'',
					zydd:'',
					zywbfzr:'',
					zygd:'',
					sgxm:'',
					zyzsqrq:'',
					bzr:'',
					ssaqjyr:'',
					zynr:'',
					sgfa:'',
					jhr:'',
					fj:'',
					sjqtzyz:'',
					jhrgw:'',
					zyqx:'',
					whbs:'',
					aqcs:'',
					ssqk:'',
					jhqk:'',
					
				},
				arrayzyzlx:['特级高处作业证(h>=30)','一级高处作业证(15<=h<30)','二级高处作业证(5<=h<15)','三级高处作业证(2<=h<5)'],
				
				index1:0,
			}
		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.detail.value
				this.dataList.sqbm = this.arrayBz[this.index]
			},
			bindPickerChange1(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.detail.value
				this.dataList.gczlx = this.index1
				},
				//保存高处作业
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
						url:'/api/workorder/changeHighOrder',
						method:'POST',
						data:this.dataList,
						header:{
							'content-type': 'application/json',
							'token': token
						}
					}) 
					if(res.data.code==200){
						uni.navigateTo({
							url:'gaoChuZuoYe'
						})
					}
					//保存按钮解禁
					this.jinyong = false
				}
		},
		onBackPress(event) {
			if (event.from === 'navigateBack') {
				return false;
			}
			uni.navigateTo({
				url:'gaoChuZuoYe'
			})
			return true;
		},
		async onLoad() {
			const res = await this.$myRequest({
					url:'/api/util/getDepartment',
					method:'POST'
				})
				 for (var i = 0; i < res.data.data.length; i++) {
					 this.arrayBz.push(res.data.data[i].bmmc)  
				 }
			var tianbr = uni.getStorageSync('admin').nick
			this.dataList.sqr = tianbr
			this.dataList.gczlx = this.index1
			this.dataList.sqbm = this.arrayBz[this.index]
			var date = new Date()
			var year = date.getFullYear()
			var month = date.getMonth() + 1
			var day = date.getDate()
			if(month<10){
				month = '0'+month
			}
			var day = date.getDate()
			if(day<10){
				day = '0'+day
			}
			var timer = year + '-' + month + '-' + day 
			this.dataList.zyzsqrq = timer
		},
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
