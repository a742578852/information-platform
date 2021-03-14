<template>
	<view>
			<view class="cu-form-group">
				<view class="title" >整改单编号:</view>
				<input placeholder="保存后自动生成" name="input" :value="risk.zgdbh" disabled=""></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >隐患所在地:</view>
				<input placeholder="" name="input" v-model="risk.yhszd"></input>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >隐患等级:</view>
				<input placeholder="" name="input" :value="risk.yhdj"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">隐患等级:</view>
				<picker @change="bindPickerChange" :value="index" :range="arrayDj" class="item2" style="">
					<view class="uni-input" style="">{{arrayDj[index]}}</view>
				</picker>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >隐患后果:</view>
				<input placeholder="" name="input" :value="risk.yhhg"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">隐患后果:</view>
				<picker @change="bindPickerChange1" :value="index1" :range="arrayHg" class="item2" style="">
					<view class="uni-input" style="">{{arrayHg[index1]}}</view>
				</picker>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >隐患类别:</view>
				<input placeholder="" name="input" :value="risk.yhlb"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">隐患类别:</view>
				<picker @change="bindPickerChange2" :value="index2" :range="arrayLb" class="item2" style="">
					<view class="uni-input" style="">{{arrayLb[index2]}}</view>
				</picker>
			</view>
			
			<view class="cu-form-group align-start">
				<view class="title">不合格因素:</view>
				<textarea v-model="risk.bhgys" maxlength="-1" :disabled="modalName!=null"  placeholder="多行文本输入框" ></textarea>
			</view>
			
			<view class="cu-form-group align-start">
				<view class="title">整改要求:</view>
				<textarea v-model="risk.zgyq" maxlength="-1" :disabled="modalName!=null"  placeholder="多行文本输入框" ></textarea>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >发现人:</view>
				<input placeholder="" name="input" v-model="risk.fxr"></input>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >发现日期:</view>
				<input placeholder="" name="input" :value="risk.fxrq"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">发现日期:</view>
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >是否现场整改:</view>
				<input placeholder="" name="input" :value="risk.sfxczg"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">是否现场整改:</view>
				<picker @change="bindPickerChange5" :value="index5" :range="arraySf" class="item2" style="">
					<view class="uni-input" style="">{{arraySf[index5]}}</view>
				</picker>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >整改期限:</view>
				<input placeholder="" name="input" :value="risk.zgqx"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">整改期限:</view>
					<picker mode="date" :value="date1" :start="startDate" :end="endDate" @change="bindDateChange1">
						<view class="uni-input">{{date1}}</view>
					</picker>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >责任部门:</view>
				<input placeholder="" name="input" :value="risk.zrbm"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">责任部门:</view>
				<picker @change="bindPickerChange3" :value="index3" :range="arrayBz" class="item2" style="">
					<view class="uni-input" style="">{{arrayBz[index3]}}</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >填报日期:</view>
				<input placeholder="" name="input" :value="risk.tbrq" disabled=""></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >填报人:</view>
				<input placeholder="" name="input" :value="risk.tbr" disabled=""></input>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title" >填报人部门:</view>
				<input placeholder="" name="input" :value="risk.tbrbm"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title">填报人部门:</view>
				<picker @change="bindPickerChange4" :value="index4" :range="arrayBz" class="item2" style="">
					<view class="uni-input" style="">{{arrayBz[index4]}}</view>
				</picker>
			</view>
			<view class="btn">
				<button type="default" class="btn1" @click="btn1()" :disabled="jinyong" style="background-color: #CCE6FF;">保存</button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date:currentDate,
				date1:currentDate,
				index:0,
				index1:0,
				index2:0,
				index3:0,
				index4:0,
				index5:0,
				arrayBz:[],
				arrayDj:[],
				arrayLb:[],
				arrayHg:['轻伤','重伤','死亡','火灾','爆炸','交通事故','财产损失','其它'],
				arraySf:['是','否'],
				jinyong:false,
				risk:{
					id:0,
					fxsbid:'',
					zgdbh:'',
					yhszd:'',
					yhdj:'',
					yhhg:'',
					yhlb:'',
					bhgys:'',
					zgyq:'',
					fxr:'',
					fxrq:'',
					sfxczg:'',
					zgqx:'',
					zrbm:'',
					tbrq:'',
					tbr:'',
					tbrbm:'',
				},
				imgList: [],
				modalName: null,
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onBackPress(event) {
			if (event.from === 'navigateBack') {
				return false;
			}
			uni.navigateTo({
				url:'dangerList'
			})
			return true;
		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.detail.value
				this.risk.yhdj = this.arrayDj[this.index]
			},
			bindPickerChange1(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.detail.value
				this.risk.yhhg = this.arrayHg[this.index1]
			},
			bindPickerChange2(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index2 = e.detail.value
				this.risk.yhlb = this.arrayLb[this.index2]
			},
			bindPickerChange3(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index3 = e.detail.value
				this.risk.zrbm = this.arrayBz[this.index3]
			},
			bindPickerChange4(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index4 = e.detail.value
				this.risk.tbrbm = this.arrayBz[this.index4]
			},
			bindPickerChange5(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index5 = e.detail.value
				this.risk.sfxczg = this.arraySf[this.index5]
			},
			bindDateChange: function(e) {
				this.date = e.target.value
				this.risk.fxrq = this.date
			},
			bindDateChange1: function(e) {
				this.date1 = e.target.value
				this.risk.zgqx = this.date1
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//保存隐患
			async btn1(){
				console.log(this.risk.yhszd);
				console.log(this.risk.fxr);
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
					url:'/api/risk/fillDanger',
						method:'POST',
						data:this.risk,
						header:{
							'content-type': 'application/json',
							'token': token
						}
					}) 
					console.log(res);
					if(res.data.code==200){
						uni.navigateTo({
							url:'dangerList'
						})
					} 
				//保存按钮解禁
				this.jinyong = false
			},
		},
		async onLoad() {
			const res1 = await this.$myRequest({
					url:'/api/util/getDepartment',
					method:'POST'
				})
				 for (var i = 0; i < res1.data.data.length; i++) {
					 this.arrayBz.push(res1.data.data[i].bmmc)  
				 }
			var tianbr = uni.getStorageSync('admin').nick
			this.risk.tbr = tianbr
			this.sfxczg = this.arraySf[0]
			this.risk.zrbm = this.arrayBz[this.index3]
			this.risk.tbrbm = this.arrayBz[this.index4]
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
			this.risk.tbrq = timer
			this.risk.fxrq = timer
			this.risk.zgqx = timer
			
			const res = await this.$myRequest({
				url: '/api/util/getDictionary',
				method: 'get',
				data: {
					code:'C12'
				}
			})
			for(var i=0;i<res.data.data.length;i++){
				this.arrayLb.push(res.data.data[i].dictdataname)
			}
			
			const ress = await this.$myRequest({
				url: '/api/util/getDictionary',
				method: 'get',
				data: {
					code:'C11'
				}
			})
			for(var j=0;j<ress.data.data.length;j++){
				this.arrayDj.push(ress.data.data[j].dictdataname)
			}
			this.risk.yhdj = this.arrayDj[0]
			this.risk.yhlb = this.arrayLb[0]
			this.risk.yhhg = this.arrayHg[0]
		}
	}
</script>

<style>

</style>
