<template>
	<div id="hurry">
		<div class="hea">
			<p @click="showBuyhurry"><i class="iconfont">&#xe646;</i></p>
			<p>抢购信息</p>
		</div>
		<hr />
		<div class="cont">
			<ul class="relation">
				<li>
					<p>抢购人数：</p>
					<input type="text" placeholder="请填写具体费用信息"/>
				</li>
				<li>
					<p>费用/人：</p>
					<input type="text" placeholder="免费请填0，有人报名后不仅可修改"/>
				</li>
				<li>
					<p>抢购时间：</p>
					<input type="text" placeholder="请选择开始时间"/>
				</li>
				<li>
					<p></p>
					<input type="text" placeholder="请选择结束时间"/>
				</li>
				<li>
					<p>审核</p>
					<span>抢购成功后需要我审核</span>
					<el-switch class="switch"
						v-model="value"
						active-color="#FAE64F"
						inactive-color="#F0F0F0">
					</el-switch>
				</li>
			</ul>
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
				value:true
			}
		},
		props:{
			showBuyhurry:{type:Function}
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
</style>