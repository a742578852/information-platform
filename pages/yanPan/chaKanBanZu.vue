<template>
	<view>
		<view class="baseinfo">
			<view class="cu-form-group">
				<view class="title">班组:</view>
				<input placeholder="选择班组" name="input" v-model="banzu"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">填报人:</view>
				<input  name="input" v-model="tianbaoren"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">所属车间:</view>
				<input placeholder="选择车间" name="input" v-model="chejian"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">填报日期:</view>
				<input  name="input" v-model="riqi"></input>
			</view>
			<view class=""style="height: 5px; background-color: #D2F1F0;"></view>
		</view>
		<view class="" style="width: 50%;height: 30px; border: 1px solid; background-color: #CCE6FF;border-radius: 20px;margin:10px 25%;padding-left: 65px;padding-top: 5px;">风险研判</view>
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
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[0].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[0].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[0].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
								</view>
								
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">压力容器、压力管道等特种</br>设备是否处于安全运行状态</view>
						
								<picker @change="bindPickerChange2" :value="index2" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[1].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[1].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[1].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">各类设备设施的静动密封是</br>否完好无泄漏</view>
						
								<picker @change="bindPickerChange3" :value="index3" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[2].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[2].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[2].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">超限报警、紧急切断、联锁</br>等各类安全设施配备是否完</br>好投用，并可靠运行</view>
						
								<picker @change="bindPickerChange4" :value="index4" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[3].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[3].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[3].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
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
						
								<picker @change="bindPickerChange5" :value="index5" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[4].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[4].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[4].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
								</view>
								
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">储罐的液位、温度、压力是</br>否超限运行</view>
						
								<picker @change="bindPickerChange6" :value="index6" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[5].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[5].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[5].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">内浮顶储罐运行中浮盘是否</br>可能落底</view>
						
								<picker @change="bindPickerChange7" :value="index7" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[6].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[6].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[6].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">油气罐区手动切水、切罐、</br>装卸车时是否确保人员在岗</view>
						
								<picker @change="bindPickerChange8" :value="index8" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[7].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[7].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[7].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">可燃及有毒气体报警和联锁</br>是否处于可靠运行状态</view>
						
								<picker @change="bindPickerChange9" :value="index9" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[8].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[8].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[8].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">仓库是否按国家标准分区分</br>类储存危险化学品</view>
						
								<picker @change="bindPickerChange10" :value="index10" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[9].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[9].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[9].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">是否超量、超品种储存，相</br>互禁配物质是否混放混存</view>
						
								<picker @change="bindPickerChange11" :value="index11" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[10].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[10].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[10].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
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
						
								<picker @change="bindPickerChange12" :value="index12" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[11].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[11].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[11].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
								</view>
								
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">各项特殊作业、检维修作业</br>、承包商作业是否健全和完</br>善相关管理制度，作业过程</br>是否进行安全风险辨识，严</br>格程序确认和作业许可审批</br>，加强现场监督，危险化学</br>品罐区动火作业是否做到升</br>级管理等</view>
						
								<picker @change="bindPickerChange13" :value="index13" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[12].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[12].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[12].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
						<view class="state1-item2">
							<view class="item2" style="border: 1px solid;border-color: #C8C7CC;width: 180px;">各项变更的审批程序是否符</br>合规定</view>
						
								<picker @change="bindPickerChange14" :value="index14" :range="array" class="item2" style="margin-left: 100px;">
									<view class="uni-input" style="width: 50px;margin-left: -80px;">{{fxypYpnrinfos[13].ypjg}}</view>
								</picker>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[13].gkcs" auto-height="true" style="width: 150px;border:1px solid ;border-color: #C8C7CC;"/>
								</view>
								<view class="item2" style="width: 150px;">
									<textarea class="" :value="fxypYpnrinfos[13].bz" auto-height="true" style="width: 150px; border: 1px solid;border-color: #C8C7CC;"/>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="" style="width: 50%;height: 30px; border: 1px solid; background-color: #CCE6FF;border-radius: 20px;margin:10px 25%;padding-left: 65px;padding-top: 5px;">安全承诺</view>
		<view class="chengnuo">
			<view class="">
				<view class="cu-form-group" >
					<button type="default" class="title" @click="state4=!state4">高危生产活动及作业的安全风险可控状态</button>
				</view>
				<view class="" v-if="state4">
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">研判风险点数量:</view>
						<input  name="input" v-model="point" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">各风险点风险研判结果是否落实</br>相应的风险管控措施:</view>
						<radio-group name="" @change="radioChange1" style="display: flex;">
							<label>
								<radio value="是" :checked="check1"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check11"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">特殊作业的风险辨识、作业许可</br>及管控是否落实:</view>
						<radio-group name="" @change="radioChange2" style="display: flex;">
							<label>
								<radio value="是" :checked="check2"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check22"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否处于试生产:</view>
						<radio-group name="" @change="radioChange3" style="display: flex;">
							<label>
								<radio value="是" :checked="check3"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check33"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否处于开停车状态:</view>
						<radio-group name="" @change="radioChange4" style="display: flex;">
							<label>
								<radio value="是" :checked="check4"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check44"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">承包商作业是否管控:</view>
						<radio-group name="" @change="radioChange5" style="display: flex;">
							<label>
								<radio value="是" :checked="check5"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check55"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否存在变更情况:</view>
						<radio-group name="" @change="radioChange6" style="display: flex;">
							<label>
								<radio value="是" :checked="check6"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check66"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否落实审批程序:</view>
						<radio-group name="" @change="radioChange7" style="display: flex;">
							<label>
								<radio value="是" :checked="check7"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check77"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">一级动火数量:</view>
						<input  name="input" v-model="fire1" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">二级动火数量:</view>
						<input  name="input" v-model="fire2" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">特级动火数量:</view>
						<input  name="input" v-model="fire3" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">受限空间作业数量:</view>
						<input  name="input" v-model="space" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">高处作业数量:</view>
						<input  name="input" v-model="height" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其他作业数量:</view>
						<input  name="input" v-model="els" ></input>
					</view>
				</view>
				<view class="cu-form-group" >
					<button type="default" class="title" @click="state5=!state5">生产装置运行状态</button>
				</view>
				<view class="" v-if="state5">
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">班组岗位生产装置数量:</view>
						<input  name="input" v-model="jiqi" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其中运行生产装置数量:</view>
						<input  name="input" v-model="yunxing" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其中停产装置数量:</view>
						<input  name="input" v-model="tingchan" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其中检修装置数量:</view>
						<input  name="input" v-model="jianxiu" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">温度/压力/危化品/液位/流量</br>等工艺参数是否处于指标范围:</view>
						<radio-group name="" @change="radioChange8" style="display: flex;">
							<label>
								<radio value="是" :checked="check8"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check88"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">特种设备是否安全运行:</view>
						<radio-group name="" @change="radioChange9" style="display: flex;">
							<label>
								<radio value="是" :checked="check9"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="check99"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">设备设施是否完好无泄漏:</view>
						<radio-group name="" @change="radioChange10" style="display: flex;">
							<label>
								<radio value="是" :checked="checka"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="checkaa"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">超限报警、紧急切断、连锁等各类</br>安全设施配备完好投用，并可靠运行:</view>
						<radio-group name="" @change="radioChange11" style="display: flex;">
							<label>
								<radio value="是" :checked="checkb"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="checkbb"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="cu-form-group" >
					<button type="default" class="title" @click="state6=!state6">涉及罐区、仓库等重大危险源处于安全状态</button>
				</view>
				<view class="" v-if="state6">
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">储罐、管道、机泵、阀门及仪表</br>系统完好无泄漏:</view>
						<radio-group name="" @change="radioChange12" style="display: flex;">
							<label>
								<radio value="是" :checked="checkc"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="checkcc"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">储罐的液位、温度、压力无超限</br>运行:</view>
						<radio-group name="" @change="radioChange13" style="display: flex;">
							<label>
								<radio value="是" :checked="checkd"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="checkdd"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">装卸车时确保人员是否在岗:</view>
						<radio-group name="" @change="radioChange14" style="display: flex;">
							<label>
								<radio value="是" :checked="checke"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="checkee"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">可燃及有毒气体报警和联锁是否</br>处于可靠运行状态:</view>
						<radio-group name="" @change="radioChange15" style="display: flex;">
							<label>
								<radio value="是" :checked="checkf"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="checkff"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">仓库按照国家标准分区分类储存</br>危险化学品，无超量、超品种储存</br>，相互禁配物质无混放混存:</view>
						<radio-group name="" @change="radioChange16" style="display: flex;">
							<label>
								<radio value="是" :checked="checkg"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" :checked="checkgg"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="cu-form-group" >
					<button type="default" class="title" @click="state7=!state7">班组承诺</button>
				</view>
				<view class="" v-if="state7">
					<textarea class="" value="今天我班组已根据岗位风险辨识管控相关内容以及安全风险评估表进行安全风险研判，各项安全风险防控措施已落实到位，我承诺本岗位处于安全运行状态，涉及罐区、仓库等重大危险源安全风险得到有效管控。" auto-height="true" style="width: 750rpx; border: 1px solid;border-color: #C8C7CC;"/>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">班组负责人:</view>
						<input  name="input" v-model="fzr" ></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">日期:</view>
						<input  name="input" v-model="rq" ></input>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				fxypYpnrinfos:[
					{
						ypjg:'',
						gkcs:'',
						bz:''
					}
				],
				fxypAqcninfo:{
					fxd:'',
					fxgk:'',
					lscs:'',
					yj:'',
					ej:'',
					tj:'',
					sx:'',
					gc:'',
					ts:'',
					ssc:'',
					ktc:'',
					cbs:'',
					bg:'',
					lssp:'',
					bzgw:'',
					qzyx:'',
					tc:'',
					jx:'',
					zbfw:'',
					aqyx:'',
					wxl:'',
					kkyx:'',
					whwxl:'',
					cxyx:'',
					ryzg:'',
					yxzt:'',
					hfhc:'',
					bzfzr:'',
					rq:'',
				},
				fxypBzjinfo:{
					bz:'',
					tbr:'',
					cj:'',
					tbrq:''
				},
				check1:false,
				check11:false,
				check2:false,
				check22:false,
				check3:false,
				check33:false,
				check4:false,
				check44:false,
				check5:false,
				check55:false,
				check6:false,
				check66:false,
				check7:false,
				check77:false,
				check8:false,
				check88:false,
				check9:false,
				check99:false,
				checka:false,
				checkaa:false,
				checkb:false,
				checkbb:false,
				checkc:false,
				checkcc:false,
				checkd:false,
				checkdd:false,
				checke:false,
				checkee:false,
				checkf:false,
				checkff:false,
				checkg:false,
				checkgg:false,
				banzu:'',
				tianbaoren:'',
				chejian:'',
				rq:'',
				fzr:'',
				riqi:'',
				val1:'',
				val2:'',
				val3:'',
				val4:'',
				val5:'',
				val6:'',
				val7:'',
				val8:'',
				val9:'',
				val10:'',
				val11:'',
				val12:'',
				val13:'',
				val14:'',
				val15:'',
				val16:'',
				point:'',
				fire1:'',
				fire2:'',
				fire3:'',
				space:'',
				height:'',
				els:'',
				jiqi:'',
				yunxing:'',
				tingchan:'',
				jianxiu:'',
				info:{
					
				},
				state1:false,
				state2:false,
				state3:false,
				state4:false,
				state5:false,
				state6:false,
				state7:false,
				array: ['不涉及', '是', '否'],
				index1: 0,
				index2: 0,
				index3: 0,
				index4: 0,
				index5: 0,
				index6: 0,
				index7: 0,
				index8: 0,
				index9: 0,
				index10: 0,
				index11: 0,
				index12: 0,
				index13: 0,
				index14: 0
			}
		},
		async onLoad(option) {
			const bid = option.bid
			//根据id查看研判详情
			const res = await this.$myRequest({
				url:'/api/judge/getBzjinfoByBzId',
				method:'POST',
				data:{
					bid:bid
				}
			})
			if(res.data.code==200){
				//班组基本信息
				this.fxypBzjinfo = res.data.data.fxypBzjinfo
				this.banzu = this.fxypBzjinfo.bz
				this.tianbaoren = this.fxypBzjinfo.tbr
				this.chejian = this.fxypBzjinfo.cj
				this.riqi = this.fxypBzjinfo.tbrq
				
				//风险研判
				this.fxypYpnrinfos = res.data.data.fxypYpnrinfos
				//安全承诺
				this.fxypAqcninfo = res.data.data.fxypAqcninfo
				this.point = this.fxypAqcninfo.fxd
				this.fire1 = this.fxypAqcninfo.yj
				this.fire2 = this.fxypAqcninfo.ej
				this.fire3 = this.fxypAqcninfo.tj
				this.space = this.fxypAqcninfo.sx
				this.height = this.fxypAqcninfo.gc
				this.els = this.fxypAqcninfo.ts
				this.jiqi = this.fxypAqcninfo.bzgw
				this.yunxing = this.fxypAqcninfo.qzyx
				this.tingchan = this.fxypAqcninfo.tc
				this.jianxiu = this.fxypAqcninfo.jx
				this.rq = this.fxypAqcninfo.rq
				this.fzr = this.fxypAqcninfo.bzfzr
				//动态改变radio
				if(this.fxypAqcninfo.fxgk=='是'){
					this.check1 = true
				}
				if(this.fxypAqcninfo.fxgk=='否'){
					this.check11 = true
				}
				if(this.fxypAqcninfo.lscs=='是'){
					this.check2 = true
				}
				if(this.fxypAqcninfo.lscs=='否'){
					this.check22 = true
				}
				if(this.fxypAqcninfo.ssc=='是'){
					this.check3 = true
				}
				if(this.fxypAqcninfo.ssc=='否'){
					this.check33 = true
				}
				if(this.fxypAqcninfo.ktc=='是'){
					this.check4 = true
				}
				if(this.fxypAqcninfo.ktc=='否'){
					this.check44 = true
				}
				if(this.fxypAqcninfo.cbs=='是'){
					this.check5 = true
				}
				if(this.fxypAqcninfo.cbs=='否'){
					this.check55 = true
				}
				if(this.fxypAqcninfo.bg=='是'){
					this.check6 = true
				}
				if(this.fxypAqcninfo.bg=='否'){
					this.check66 = true
				}
				if(this.fxypAqcninfo.lssp=='是'){
					this.check7 = true
				}
				if(this.fxypAqcninfo.lssp=='否'){
					this.check77 = true
				}
				if(this.fxypAqcninfo.zbfw=='是'){
					this.check8 = true
				}
				if(this.fxypAqcninfo.zbfw=='否'){
					this.check88 = true
				}
				if(this.fxypAqcninfo.aqyx=='是'){
					this.check9 = true
				}
				if(this.fxypAqcninfo.aqyx=='否'){
					this.check99 = true
				}
				if(this.fxypAqcninfo.wxl=='是'){
					this.checka = true
				}
				if(this.fxypAqcninfo.wxl=='否'){
					this.checkaa = true
				}
				if(this.fxypAqcninfo.kkyx=='是'){
					this.checkb = true
				}
				if(this.fxypAqcninfo.kkyx=='否'){
					this.checkbb = true
				}
				if(this.fxypAqcninfo.whwxl=='是'){
					this.checkc = true
				}
				if(this.fxypAqcninfo.whwxl=='否'){
					this.checkcc = true
				}
				if(this.fxypAqcninfo.cxyx=='是'){
					this.checkd = true
				}
				if(this.fxypAqcninfo.cxyx=='否'){
					this.checkdd = true
				}
				if(this.fxypAqcninfo.ryzg=='是'){
					this.checke = true
				}
				if(this.fxypAqcninfo.ryzg=='否'){
					this.checkee = true
				}
				if(this.fxypAqcninfo.yxzt=='是'){
					this.checkf = true
				}
				if(this.fxypAqcninfo.yxzt=='否'){
					this.checkff = true
				}
				if(this.fxypAqcninfo.hfhc=='是'){
					this.checkg = true
				}
				if(this.fxypAqcninfo.hfhc=='否'){
					this.checkgg = true
				}
			}
		},
		methods: {
			SetBorderSize(e) {
				this.bordersize = e.detail.value
			},
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
			},
			bindPickerChange5: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index5 = e.target.value
			},
			bindPickerChange6: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index6 = e.target.value
			},
			bindPickerChange7: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index7 = e.target.value
			},
			bindPickerChange8: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index8 = e.target.value
			},
			bindPickerChange9: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index9 = e.target.value
			},
			bindPickerChange10: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index10 = e.target.value
			},
			bindPickerChange11: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index11 = e.target.value
			},
			bindPickerChange12: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index12 = e.target.value
			},
			bindPickerChange13: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index13 = e.target.value
			},
			bindPickerChange14: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index14 = e.target.value
			},
			radioChange1(event){
				const val1 = event.value
			},
			radioChange2(event){
				const val2 = event.value
			},
			radioChange3(event){
				const val3 = event.value
			},
			radioChange4(event){
				const val4 = event.value
			},
			radioChange5(event){
				const val5 = event.value
			},
			radioChange6(event){
				const val6 = event.value
			},
			radioChange7(event){
				const val7 = event.value
			},
			radioChange8(event){
				const val8 = event.value
			},
			radioChange9(event){
				const val9 = event.value
			},
			radioChange10(event){
				const val10 = event.value
			},
			radioChange11(event){
				const val11 = event.value
			},
			radioChange12(event){
				const val12 = event.value
			},
			radioChange13(event){
				const val13 = event.value
			},
			radioChange14(event){
				const val14 = event.value
			},
			radioChange15(event){
				const val15 = event.value
			},
			radioChange16(event){
				const val16 = event.value
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
