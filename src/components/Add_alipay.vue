<template>
	<!--添加支付宝-->
	<div class="Add_alipay">
		<div class="hea">
			<router-link to="/withdrawal_WeChat" tag="p"><i class="iconfont">&#xe646;</i></router-link>
		</div>
		<form action="" method="" class="payForm">
			<div class="add">
				<li>
					<p>支付宝账号</p><input type="number/email" name="" id="" value="" placeholder="请输入手机号/邮箱"/>
				</li>
				<li>
					<p>真实姓名</p><input type="text" name="" id="" value="" placeholder="请输入"/>
				</li>
			</div>
			<router-link to="/withdrawal_WeChat" tag="p">
				<input type="submit" name="" id="ok" value="确定" />
			</router-link>
			
		</form>
	</div>
</template>

<script>
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
	.Add_alipay{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.hea>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.hea>p:first-child{
		width: 10%;
	}
	.add{
		width: 100%;
		background: white;
	}
	.add>li{
		width: 96%;
		height: 4rem;
		border-bottom: 1px solid #F0F0F0;
		line-height: 4rem;
		margin-left: 4%;
	}
	.add>li>p{
		width: 25%;
		height: 4rem;
		float: left;
		font-size: 15px;
		font-weight: bold;
	}
	.add>li>input{
		display: block;
	    float: left;
	    height: 4rem;
	    font-size: 14px;
	    margin-left: 8%;
	}
	.payForm{
		width: 100%;
		height: 52rem;
		background: #F0F0F0;
	}
	#ok{
		width: 80%;
		height: 3.5rem;
		text-align: center;
		line-height: 3.5rem;
		font-size: 16px;
		border-radius: 30px;
		margin: auto;
		background: #FAE64F;
		margin-top: 15%;
    	margin-left: 10%;
	}
</style>