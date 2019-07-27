<template>
	<div id="hurry">
		<div class="hea">
			<p @click="showBuyCollage"><i class="iconfont">&#xe646;</i></p>
			<p>拼团信息</p>
		</div>
		<hr />
		<div class="cont">
			<ul class="relation">
				<li>
					<p>拼团人数：</p>
					<input type="text" placeholder="请填写具体费用信息"/>
				</li>
				<li>
					<p>费用/人：</p>
					<input type="text" placeholder="免费请填0，有人报名后不可修改"/>
				</li>
				<li>
					<p>拼团时间：</p>
					<input type="text" placeholder="请选择开始时间"/>
				</li>
				<li>
					<p></p>
					<input type="text" placeholder="请选择结束时间"/>
				</li>
				<li>
					<p>审核</p>
					<span>拼团成功后需要我审核</span>
					<el-switch class="switch"
						v-model="value"
						active-color="#FAE64F"
						inactive-color="#F0F0F0">
					</el-switch>
				</li>
				<li @click="showPicUp">
					<p>未完成拼团</p>
					<p>{{collage}}</p>
					<i class="iconfont">&#xe61f;</i>
				</li>
			</ul>
			<van-popup v-model="showPic" position="bottom" class="sePopup">
				<div class="title">
					<p>请选择未完成拼团</p>
					<p>请上下拨动进行选择</p>
				</div>
				<van-picker :columns="columns" @change="onChange" />
				<button class="bu-true" @click="selectTrue">确定</button>
				<button class="bu-false" @click="showPicUp">取消</button>
			</van-popup>
		</div>

		<div class="true">
			<button>确定</button>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				value:true,
				collage:"恢复原价",
				columns:['恢复原价','已拼团的保持不变其余原价进行'],
				Select:'',
				showPic:false
			}
		},
		props:{
			showBuyCollage:{type:Function}
		},
		methods:{
			showPicUp(){
				if(this.showPic==false){
					this.showPic=true;
				}else{
					this.showPic=false;
				}
			},
			onChange(Picker,value){
				this.Select=value;
			},
			selectTrue(){
				this.collage=this.Select;
				this.showPic=false;
			}
		}
	}
</script>
<style type="text/css">
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: white;
	}
	.hea>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.hea>p:first-child{
		width: 10%;
	}
	.hea>p:first-child{
		font-size: 1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 1.7rem;
	}
	hr{
		width: 100%;
		height: 0.5rem;
		background: #F0F0F0;
	}
	.relation{
		width: 100%;
	}
	.relation>li{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		float: right;
		background: white;
		position: relative;
	}
	.relation>li>p:first-child{
		width: 20%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    float: left;
	    font-size: 1.4rem;
	    font-weight: bold;	
	    margin-left: 3%;
	}
	.relation>li>p:nth-child(2){
		float: right;
		margin-right: 10%;
		color: #666;
	}
	.relation>li>i{
		color: #999;
		position: absolute;
		right: 5%;
	}
	.relation input{
		width: 60%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    margin-left: 4%;
	    color: #999999;
	}
	.relation>li>span{
		margin-left: 4%;
		font-weight:500;
		color:#333333;
	}
	.switch{
		margin-left: 20%;
	}
	.true{
		width: 100%;
		float: left;
		background: #F0F0F0;		
		margin-top: 20rem;
	}
	.true>button{
		width: 80%;
		height: 3.5rem;
		text-align: center;
		line-height: 3.5rem;
		font-size: 1.6rem;
		background: #FAE64E;
		border-radius: 3rem;
		margin-left: 10%;

	}
	.sePopup{
		height: 50%;
		border-radius: 3% 3% 0 0;
		text-align: center;
	}
	.sePopup div.title{
		padding-top:2rem ;
		text-align:center;
	}
	.sePopup div.title>p:first-child{
		font-size: 2rem;
	}
	.sePopup div.title>p:nth-child(2){
		font-size: 1rem;
		color: #999;
	}
	.sePopup div.van-picker{
		height: 15rem;
		overflow: hidden;
	}
	.sePopup>button{
		width: 13rem;
		height: 3rem;
		text-align: center;
		line-height: 2.5rem;
		border-radius: 0.5rem;
	    margin-top: 9%;
	    font-size: 1.5rem;
	}
	.sePopup>button.bu-true{
		background: #FAE74F;
		color: #333333;
		margin-right: 1rem;
	}
	.sePopup>button.bu-false{
		background: #fff;
		border:1px solid #999;
		color: #999;
		margin-left: 1rem;
	}
</style>