<template>
	<view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title" style="color: red;">整改来源:</view>
				<input placeholder="" name="input" >风险上报</input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >整改单编号:</view>
				<input placeholder="" name="input" :value="risk.zgdbh"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >隐患所在地:</view>
				<input placeholder="" name="input" :value="risk.yhszd"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >隐患等级:</view>
				<input placeholder="" name="input" :value="risk.yhdj"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >隐患后果:</view>
				<input placeholder="" name="input" :value="risk.yhhg"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >隐患类别:</view>
				<input placeholder="" name="input" :value="risk.yhlb"></input>
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
				<input placeholder="" name="input" :value="risk.fxr"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >发现日期:</view>
				<input placeholder="" name="input" :value="risk.fxrq"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >是否现场整改:</view>
				<input placeholder="" name="input" :value="risk.sfxczg"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >整改期限:</view>
				<input placeholder="" name="input" :value="risk.zgqx"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >责任部门:</view>
				<input placeholder="" name="input" :value="risk.zrbm"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >填报日期:</view>
				<input placeholder="" name="input" :value="risk.tbrq"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >填报人:</view>
				<input placeholder="" name="input" :value="risk.tbr"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title" >填报人部门:</view>
				<input placeholder="" name="input" :value="risk.tbrbm"></input>
			</view>
			
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/1
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index"  :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						
					</view>
					
				</view>
			</view>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				risk:{
					id:'',
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
		methods: {
			
		},
		async onLoad(option) {
			this.risk.id = option.riskId
			const res = await this.$myRequest({
				url: '/api/risk/getDangerDetail',
				method: 'POST',
				data: {
					id: this.risk.id
				}
			})
			this.risk = res.data.data
			var address = uni.getStorageSync('address')
			this.imgList.push('http://' + address + '/' + this.risk.yhzp)
		}
	}
</script>

<style>

</style>
