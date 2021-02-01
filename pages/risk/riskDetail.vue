<template>
	<view>

		<form method="post" enctype="multipart/form-data">
			<view class="cu-form-group margin-top">
				<view class="title"><span style="color:red;">* </span>风险位置</view>
				<input placeholder="请输入风险位置" name="fxwz" v-model:value="fxwz"></input>
			</view>

			<view class="cu-form-group">
				<view class="title"><span style="color:red;">* </span>风险因素</view>
				<picker @change="PickerChange" v-model:value="fxys" :range="fxyss">
					<view class="picker">
						{{index>-1?fxyss[index]:fxys}}
					</view>

				</picker>
			</view>

			<view class="cu-form-group align-start">
				<view class="title">风险描述</view>
				<textarea maxlength="-1" placeholder="请输入风险描述" v-model:value='fxms'></textarea>
			</view>

			<view class="cu-form-group">
				<view class="title"><span style="color:red;">* </span>发现人姓名</view>
				<input placeholder="发现人姓名" name="input" v-model:value="fxrxm"></input>
			</view>

			<view class="cu-form-group">
				<view class="title"><span style="color:red;">* </span>发现日期</view>
				<picker mode="date" start="2019-09-01" end="2030-09-01" v-model:value="fxrq">
					<view class="picker">
						{{fxrq}}
					</view>
				</picker>
			</view>

			<view class="cu-bar bg-white">
				<view class="action">
					附件
				</view>
				<view class="action">
					{{imgList.length}}/1
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>

			<view class="padding flex flex-direction">
				<button @click="sumbitRisk" class="cu-btn bg-green lg">保存</button>
				<button @click="goChangeList" class="cu-btn bg-red margin-tb-sm lg">查看关联隐患</button>
			</view>
		</form>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				index: -1,
				fxwz: '',
				fxyss: ['人', '机', '料', '法', '环', '管'],
				fxys: '',
				fxms: '',
				fxrxm: '',
				fxrq: '2020-12-25',
				imgList: [],
				url: 'http://192.168.41.5:8081'

			}
		},
		methods: {
			//表单上传
			sumbitRisk() {

				uni.uploadFile({
					url: this.url + '/api/risk/riskReport',
					filePath: this.imgList[0],
					name: 'file',
					formData: {
						riskId: this.id,
						fxwz: this.fxwz,
						fxys: this.fxys,
						fxms: this.fxms,
						fxrxm: this.fxrxm,
						fxrq: this.fxrq,
						token: uni.getStorageSync('token')
					},
					success: (uploadFileRes) => {

						uni.navigateTo({
							url: '../risk/risk',

						})
					}
				})

			
				// const res = await this.$myRequest({
				// 	url: '/api/risk/riskReport',
				// 	method: 'POST',
				// 	data: {
				// 		riskId:this.id,
				// 		fxwz:this.fxwz,
				// 		fxys:this.fxys,
				// 		fxms:this.fxms,
				// 		fxrxm:this.fxrxm,
				// 		fxrq:this.fxrq,
				// 		file:this.imgList
				// 	}
				// })

			},
		goChangeList(){
				
				uni.navigateTo({
					url:"../danger/dangerList?riskid="+this.id
				})
			},
			//初始化	
			async getDetail() {
				const res = await this.$myRequest({
					url: '/api/risk/getRisk',
					method: 'POST',
					data: {
						riskId: this.id
					}
				})
				//风险位置
				this.fxwz = res.data.data.fxwz
				//风险因素
				this.fxys = res.data.data.fxys
				//风险描述
				this.fxms = res.data.data.fxms
				//发现人姓名
				this.fxrxm = res.data.data.fxrxm
				//发现日期
				this.fxrq = res.data.data.fxrq
				//附件
				var fj = res.data.data.fj
				var address = uni.getStorageSync('address')
				this.imgList.push('http://' + address + '/' + fj)

			},


			PickerChange(e) {

				this.index = e.detail.value
				this.fxys = this.fxyss[this.index]


			},
			ChooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0 && this.imgList.length < this.count) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '您',
					content: '确定要删除吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},

		},
		onLoad: function(option) {
			this.id = option.id
			if (this.id == '') {
				id = 'null'
			}
		},
		created() {
			this.getDetail()
		}
	}
</script>

<style>

</style>
