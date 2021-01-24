<template>
	<view>
		<view class="baseinfo">
			<view class="cu-form-group">
				<view class="title">班组</view>
				<input placeholder="选择班组" name="input" v-model="banzu"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">填报人</view>
				<input  name="input" v-model="tianbaoren"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">所属车间</view>
				<input placeholder="选择车间" name="input" v-model="chejian"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">填报日期</view>
				<input  name="input" v-model="riqi"></input>
			</view>
			<view class=""style="margin-left: 7px; height: 5px; background-color: #D2F1F0;"></view>
		</view>
		<view class="yanpan">
			<view class="cu-form-group" >
				<!-- <view class="title" >生产装置安全运行状态</view> -->
				<button type="default" class="title" @click="state1=!state1">生产装置安全运行状态</button>
			</view>
			<view class="">
				<view class="state1-item" v-if="state1">
					<scroll-view scroll-x="true" class="scroll">
						<view class="state1-item1">
							<view class="item1">风险研判内容</view>
							<view class="item1">研判结果</view>
							<view class="item1">管控措施</view>
							<view class="item1"style="margin-left: 150px;">备注</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">生产装置的温度、压力、</br>组分、液位、流量等主要</br>工艺参数是否处于指标范围</view>
						
								<picker @change="bindPickerChange1" :value="index1" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index1]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
								</view>
								
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">压力容器、压力管道等特种</br>设备是否处于安全运行状态</view>
						
								<picker @change="bindPickerChange2" :value="index2" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index2]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">各类设备设施的静动密封是</br>否完好无泄漏</view>
						
								<picker @change="bindPickerChange3" :value="index3" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index3]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">超限报警、紧急切断、联锁</br>等各类安全设施配备是否完</br>好投用，并可靠运行</view>
						
								<picker @change="bindPickerChange4" :value="index4" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index4]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="cu-form-group" >
				<!-- <view class="title">危险化学品罐区、仓库等重大危险源的运行状态</view> -->
				<button type="default" class="title"  @click="state2=!state2">危险化学品罐区、仓库等重大危险源的运行状态</button>
			</view>
			<view class="">
				<view class="state1-item" v-if="state2">
					<scroll-view scroll-x="true" class="scroll">
						<view class="state1-item1">
							<view class="item1">风险研判内容</view>
							<view class="item1">研判结果</view>
							<view class="item1">管控措施</view>
							<view class="item1"style="margin-left: 150px;">备注</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">储罐、管道、机泵、阀门</br>及仪表系统是否完好无泄漏</view>
						
								<picker @change="bindPickerChange1" :value="index1" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index1]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
								</view>
								
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">储罐的液位、温度、压力是</br>否超限运行</view>
						
								<picker @change="bindPickerChange2" :value="index2" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index2]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">内浮顶储罐运行中浮盘是否</br>可能落底</view>
						
								<picker @change="bindPickerChange3" :value="index3" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index3]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">油气罐区手动切水、切罐、</br>装卸车时是否确保人员在岗</view>
						
								<picker @change="bindPickerChange4" :value="index4" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index4]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">可燃及有毒气体报警和联锁</br>是否处于可靠运行状态</view>
						
								<picker @change="bindPickerChange4" :value="index4" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index4]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">仓库是否按国家标准分区分</br>类储存危险化学品</view>
						
								<picker @change="bindPickerChange4" :value="index4" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index4]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">是否超量、超品种储存，相</br>互禁配物质是否混放混存</view>
						
								<picker @change="bindPickerChange4" :value="index4" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index4]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="cu-form-group" >
				<!-- <view class="title">高危生产活动及作业的安全风险可控状态</view> -->
				<button type="default" class="title" @click="state3=!state3">高危生产活动及作业的安全风险可控状态</button>
			</view>
			<view class="">
				<view class="state1-item" v-if="state3">
					<scroll-view scroll-x="true" class="scroll">
						<view class="state1-item1">
							<view class="item1">风险研判内容</view>
							<view class="item1">研判结果</view>
							<view class="item1">管控措施</view>
							<view class="item1"style="margin-left: 150px;">备注</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">装置开停车是否制定开停车</br>方案，试生产是否制定试生</br>产方案并经专家论证</view>
						
								<picker @change="bindPickerChange1" :value="index1" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index1]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
								</view>
								
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">各项特殊作业、检维修作业</br>、承包商作业是否健全和完</br>善相关管理制度，作业过程</br>是否进行安全风险辨识，严</br>格程序确认和作业许可审批</br>，加强现场监督，危险化学</br>品罐区动火作业是否做到升</br>级管理等</view>
						
								<picker @change="bindPickerChange2" :value="index2" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index2]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">各项变更的审批程序是否符</br>合规定</view>
						
								<picker @change="bindPickerChange3" :value="index3" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{array[index3]}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" value="测试测试测试测试测试测试测试测试测试测试" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{
					banzu:'',
					tianbaoren:'',
					chejian:'',
					riqi:''
				},
				state1:false,
				state2:false,
				state3:false,
				array: ['不涉及', '是', '否'],
				index1: 0,
				index2: 0,
				index3: 0,
				index4: 0
			}
		},
		methods: {
			bindPickerChange1: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.target.value
			},
			bindPickerChange2: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index2 = e.target.value
			},
			bindPickerChange3: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index3 = e.target.value
			},
			bindPickerChange4: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index4 = e.target.value
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
		.state1-item1{
			width: 100%;
			height: 50px;
			line-height: 50px;
			display: inline-block;
			display: flex;
			//margin-left: 10px;
			.item1{
				margin-left: 60px;
			}
		}
		.state1-item2{
			display: inline-block;
			display: flex;
			width: 100%;
			.item2{
				margin-left: 20px;
				width: 25%;
			}
			.uni-input{
				border: 1px solid;
				border-color: #C8C7CC;
			}
		}
	}
</style>
