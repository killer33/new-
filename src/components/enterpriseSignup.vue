<template>
	<!--发布-企业信息-->
	<div class="enterpriseSignup">
		<div class="hea">
			<p @click="showEnter"><i class="iconfont">&#xe646;</i></p>
			<p>联系电话</p>
		</div>
		<hr />
		<div class="tb1">
			<p>咨询电话:</p><input type="text" v-model="subdata.company_zi_phone" placeholder="手机号/座机号/（区号-电话号码-分机号）"/>
		</div>
		<div class="tb1">
			<p>服务合作:</p><input type="number"  v-model="subdata.company_fu_phone" placeholder="手机号/座机号/（区号-电话号码-分机号）"/>
		</div>
		<div class="registration_sure1">
			<p @click="showEnter">确定</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			showEnter:{type:Function},
			subdata:{type:Object},
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		border: 0;
		outline: none;
		vertical-align:baseline;
	}
	img{
		border: none;
	}
	a{
		text-decoration: none;
	}
	li{
		list-style: none;
	}
	.enterpriseSignup{
		width: 100%;
		height: 100%;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: #ffffff;
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
	.hea>p:first-child>i{
		font-size: 1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 1.7rem;
	}
	hr{
		width:100%;
		height:5px;
		background: #F0F0F0;
	}
	.tb1{
		width: 96%;
		height: 3.5rem;
		padding-left: 4%;
		border-bottom: 1px solid #F0F0F0;
		line-height: 3.5rem;
		font-size: 16px;
		background: #fff;
	}
	.tb1>p{
		float: left;
		font-weight:bold;
		color:rgba(102,102,102,1);
	}
	.tb1 input{
		width: 70%;
	    display: block;
	    float: left;
	    height: 2.5rem;
	    margin-left: 6%;
	    margin-top: 2%;
	    font-size: 0.7rem;
	}
	.registration_sure1{
		width: 100%;
		height: 40rem;
		background: #F0F0F0;
	}
	.registration_sure1>p{
		width: 80%;
		margin: auto;
		height: 3.5rem;
		line-height: 3.5rem;
		text-align: center;
		font-size: 16px;
		border-radius: 30px;
		background: #FAE64F;
		position: relative;
    	top: 20%;
	}
</style>