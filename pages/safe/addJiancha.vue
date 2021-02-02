<template>
	<view>
		<view class="cu-form-group">
			<view class="title">检查类型:</view>
			<picker @change="bindPickerChange" :value="YhpcJcjlinfo.jclx" :range="arrayLx" class="item2" style="">
				<view class="uni-input" style="">{{YhpcJcjlinfo.jclx == ''?arrayLx[index]:YhpcJcjlinfo.jclx}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">录入人:</view>
			<input  name="input" v-model="YhpcJcjlinfo.lrr" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查日期:</view>
			<input  name="input" v-model="YhpcJcjlinfo.jcrq" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">检查组成员:</view>
			<input  name="input" v-model="YhpcJcjlinfo.jczcy" ></input>
		</view>
		<!-- <view class="cu-form-group">
			<view class="title">受检部门:</view>
			<input  name="input" v-model="YhpcJcjlinfo.sjbm" ></input>
		</view> -->
		<view class="cu-form-group">
			<view class="title">受检部门:</view>
			<picker @change="bindPickerChanges" :value="YhpcJcjlinfo.sjbm" :range="arrayBz" class="item2" style="">
				<view class="uni-input" style="">{{YhpcJcjlinfo.sjbm==''?arrayBz[indexs]:YhpcJcjlinfo.sjbm}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">选择检查表:</view>
			<picker @change="bindPickerChange1" :value="index1" :range="arrayJCB" class="item2" style="">
				<view class="uni-input" style="">{{arrayJCB[index1]}}</view>
			</picker>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 17px;">检查项目</view>
				<view class="table-item" style="padding-left: 10px;">检查标准</view>
				<view class="table-item" style="padding-left: 8px;">检查结论</view>
				<view class="table-item" style="padding-left: 20px;">描述</view>
				<view class="table-item" style="padding-left: 35px;padding-right: 20px;">整改方式</view>
			</view>
		<view class="table-data" v-for="(item,index) in yhpcJcxminfos">
			<view class="table-data-item" style="width: 15%;">{{index+1}}</view>
			<!-- <view class="table-data-item">
				<input  name="input" v-model="item.jcxm" ></input>
			</view>
			<view class="table-data-item">
				<input  name="input" v-model="item.jcnr" ></input>
			</view> -->
			<view class="table-data-item">{{item.jcxm}}</view>
			<view class="table-data-item">{{item.jcnr}}</view>
			<!-- <view class="table-data-item">
				<picker @change="bindPickerChange2" :value="index2" :range="arrayjl" class="item2" style="">
					<view class="uni-input" style="">{{arrayjl[index2]}}</view>
				</picker>
			</view> -->
			<view class="table-data-item">
				<input  name="input" v-model="item.jcjl" ></input>
			</view>
			<view class="table-data-item">
				<input  name="input" v-model="item.ms" ></input>
			</view>
			<!-- <view class="table-data-item">
				<picker @change="bindPickerChange3" :value="index3" :range="arrayFS" class="item2" style="">
					<view class="uni-input" style="">{{arrayFS[index3]}}</view>
				</picker>
			</view> -->
			<view class="table-data-item">
				<input  name="input" v-model="item.zgfs" ></input>
			</view>
		</view>
		</scroll-view>
		<view class="btn">
			<button type="default" class="btn1" @click="btn1" >保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrayLx:['综合性检查','专业性检查','季节性检查','日常性检查','节假日检查'],
				dataList:{},
				arrayjl:['正常','未检','异常'],
				arrayJCB:['请选择检查表'],
				arrayJCBID:[],
				arrayBz:[],
				arrayFS:['无需整改','立即整改','整改通知'],
				index:0,
				indexs:0,
				index1:0,
				index2:0,
				index3:0,
				YhpcJcjlinfo:{
					jclx:'',
					lrr:'',
					jcrq:'',
					jczcy:'',
					sjbm:'',
					jcbid:''
				},
				yhpcJcxminfos:[
					{
						jcxm:'',
						jcbz:'',
						jcjl:'',
						ms:'',
						zgfs:''
						
					}
				],
				
			}
		},
		methods: {
			async btn1(){
				
				var token = uni.getStorageSync('token')
				const res = await this.$myRequest({
					url:'/api/risk/addCheckRecord',
					method:'POST',
					data:{
						'jcb':this.YhpcJcjlinfo,
						'jcbcc':this.yhpcJcxminfos
					},
					header:{
						'content-type': 'application/json',
						'token': token
					}
				})
				if(res.data.code==200){
					uni.navigateTo({
						url:'jianChaJiLu'
					})
				}
			},
			async selects(formId){
				const res = await this.$myRequest({
					url:'/api/risk/getCheckFormDetail',
					method:'POST',
					data:{
						'formId':formId
					}
				})
				if(res.data.code==200){
					this.yhpcJcxminfos = res.data.data
				}
			},
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.detail.value
				this.YhpcJcjlinfo.jclx = this.arrayLx[this.index]
				},
			bindPickerChange1(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.detail.value
				this.selects(this.arrayJCBID[this.index1-1])
				this.YhpcJcjlinfo.jcbid = this.arrayJCBID[this.index1-1]
				},
				
			bindPickerChange2(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index2 = e.detail.value
				console.log(this.index2);
				this.yhpcJcxminfos[this.index2].jcjl = this.arrayLx[this.index2]
				},
			bindPickerChange3(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index3 = e.detail.value
				this.yhpcJcxminfos[this.index3].zgfs = this.arrayFS[this.index3]
				},
				bindPickerChanges(e) {
					console.log('picker发送选择改变，携带值为', e.target.value)
					this.indexs = e.detail.value
					this.YhpcJcjlinfo.sjbm = this.arrayBz[this.indexs]
					},
		},
		async onLoad() {
			this.YhpcJcjlinfo.jclx = this.arrayLx[this.index]
			
			
			// 获取检查记录列表
			const res = await this.$myRequest({
				url:'/api/risk/getCheckForm',
				method:'POST'
			})
			if(res.data.code==200){
				this.dataList = res.data.data
			}
			for(var i = 0;i<this.dataList.length;i++){
				this.arrayJCB.push(this.dataList[i].bt)
				this.arrayJCBID.push(this.dataList[i].id)
			}
			
			var tianbr = uni.getStorageSync('admin').nick
			this.YhpcJcjlinfo.lrr = tianbr
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
			this.YhpcJcjlinfo.jcrq = timer
			const res1 = await this.$myRequest({
					url:'/api/util/getDepartment',
					method:'POST'
				})
				 for (var i = 0; i < res1.data.data.length; i++) {
					 this.arrayBz.push(res1.data.data[i].bmmc)  
				 }
				 this.YhpcJcjlinfo.sjbm = this.arrayBz[this.indexs]
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
			padding-left: 30px;
			background-color: #D2F1F0;
		}
	}
	
	.table-data{
		display: flex;
		font-size: 12px;
		width: 128%;
		.table-data-item{
			border: 1px solid;
			width: 20%;
			text-align: center;
			border-color: #D2F1F0;
		}
	}
	}
	.btn{
			width: 100%;
			height: 65px;
			line-height: 30px;
			font-size: 30px;
			padding: 10px;
			// background-color: #CCE6FF;
			display: flex;
			.btn1{
				width: 100%;
				background-color: #CCE6FF;
			}
			
		}
</style>
