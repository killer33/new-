<template>
	<!--报名信息-->
	<div class="registration_information">
		<div class="hea">
			<p @click="showEnterprise"><i class="iconfont">&#xe646;</i></p>
			<p>报名信息</p>
		</div>
		<div class="xxs">
			<p class="information_p1"><span>人数显示</span></p>
			<div class="information_p2">
				<span>在活动报名项显示已报名人数及报名列表</span>
				<el-switch
					v-model="value"
					active-color="#FAE64F"
					inactive-color="#F0F0F0">
				</el-switch>
			</div>
			<p class="information_p1"><span>设置用户报名时的填写信息</span></p>
			<div class="tb">
				<p>姓名</p><input type="text" name="" id="" value="" />
			</div>
			<div class="tb">
				<p>手机</p><input type="number" name="" id="" value="" />
			</div>
			<p class="zdy">添加自定义填写项</p>
		</div>
		<div class="registration_sure">
			<p>确定</p>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				value:true
			}
		},
		props:{
			showEnterprise:{type:Function }
		}
	}
</script>

<style>
	.registration_information{
		background:#F0F0F0 ;
	}
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
	.registration_information{
		width: 100%;
	}
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
	.xxs{
		background: white;
	}
	.information_p1{
		width: 100%;
		height: 1.8rem;
		line-height: 1.8rem;
		background: #F0F0F0;
	}
	.information_p1>span{
		margin-left: 3%;
	}
	.information_p2{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		position: relative;
		font-size: 1.3rem;
	}
	.information_p2>span{
		margin-left: 3%;
	}
	.el-switch{
        display: inline-block;
	    position: relative;
	    vertical-align: top;
	    cursor: pointer;
	    float: right;
	    margin-top: 3%;
	    margin-right: 6%;
    }
	.open1{
		width: 1.5rem;
	    height: 1.5rem;
	    border-radius: 50%;
	    background: #999999;
	    margin-left: 5%;
	    margin-top: 2%;
	}
	.tb{
		width: 96%;
		height: 3.5rem;
		margin-left: 4%;
		border-bottom: 1px solid #F0F0F0;
		line-height: 3.5rem;
		font-size: 1.6rem;
	}
	.tb>p{
		float: left;
	}
	.tb input{
	    display: block;
	    float: left;
	    height: 2.5rem;
	    margin-left: 6%;
	    margin-top: 2%;
	}
	.zdy{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
	}
	.registration_sure{
		width: 100%;
		background: #F0F0F0;
	}
	.registration_sure>p{
		width: 80%;
		margin: auto;
		height: 3.5rem;
		line-height: 3.5rem;
		text-align: center;
		font-size: 1.6rem;
		border-radius: 2.3rem;
		background: #FAE64F;
		margin-top: 3rem;
	}
</style>