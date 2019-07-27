<template>
	<!--订单界面-输入密码-->
	<div class="order_enterpassword">
		<div class="opci">
			<div class="head5">
				<router-link to="" tag="p"><i class="iconfont">&#xe646;</i></router-link>
				<p>订单确认</p>
			</div>
			<div class="paytime">
				<span>支付剩余时间</span><br />
				<span>1</span> <span>4</span> : <span>5</span> <span>9</span>
			</div>
			<div class="tj3">
				<ul>
					<router-link to="" tag="li">
						<div class="tup3">
							<img src="../../build/zz.jpg"/>
						</div>
						<div class="fus3">
							<p class="q3">空调清理保养服务</p>
							<p class="w3"><span>2019.05.04</span>-<span>2019.05.04</span></p>
							<p class="t3">奥体中心</p>
							<p class="r3"><span>X1</span>
								<span>￥<span>150.00</span></span>
							</p>
						</div>
					</router-link>
				</ul>
			</div>
			<hr />
			<div class="payment">
				<ul>
					<li>
						<div class="payment_p1">
							<p><img src="../../build/star.png"/></p>
						</div>
						<div class="payment_p2">
							<p>
								<span>平台积分支付</span>
								<span>余额: 300</span>
							</p>
							<p>如没有积分请前往个人中心进行充值</p>
						</div>
						<div class="payment_p3">
							<p><img src="../../build/for(1).png"/></p>
						</div>
					</li>
				</ul>
			</div>
			<div class="determine">
				<router-link to="" tag="p">确认支付</router-link>
			</div>
		</div>
		<div class="pay">
			<div class="pay_div1">
				<p><img src="../../build/shut_down.png"/></p>
				<p>请输入支付密码</p>
			</div>
			<div class="pay_div2">
				<span>￥</span><span>3000</span>
			</div>
			<div class="pay_div3">
				<p><img src="../../build/star.png"/></p>
				<p>平台积分支付</p>
			</div>
			<div class="pay_div4">
				<label for="password" class="password-lable">
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li style="border: none!important;"></li>
					</ul>
					<input type="password" name="password" id="password" value="" maxlength="6"/>
				</label>
			</div>
		</div>
	</div>
</template>

<script>
	$(function(){
		$(".pay_div4 input").on("input",function(e){ //标签为password-div下的input添加oninput事件
			var number = 6;   //定义输入最大值
			var pw = $("input[name = 'password']").val(); //定义pw为name是password的input框的输入值
			var list = $(".pay_div4 ul li");  //定义list是li
			for(var i = 0; i < number ; i++){    //for循环遍历将·放入li标签
				if(pw[i]){
					$(list[i]).text(pw[i]);
				}else{
					$(list[i]).text("");
				};
			};
		});
		$(".pay_div4 ul").click(function(){      
			$("input[name = 'password']").val("");
			$("#password").focus();
			$(".pay_div4 ul li").text("");
		});
	})
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
	.order_enterpassword{
		width: 100%;
	}
	.opci{
		background: #F0F0F0;
		opacity: 0.5;
		position: relative;
		z-index: -1;
	}
	.head5{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.head5>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.head5>p:first-child{
		width: 10%;
	}
	.head5>p:nth-child(2){
		width: 20%;
		margin-left: 31%;
		font-size: 15px;
	}
	.paytime{
		width: 100%;
		height: 5rem;
		text-align: center;
	}
	.paytime>span{
		display: inline-block;
		margin-top: 2%;
	}
	.paytime>span:nth-child(n+2){
		background: #FAE64E;
		padding: 0.5% 1.5%;
		color: white;
	}
	.tj3{
		width: 100%;
		margin-top: 2%;
	}
	.tj3>ul{
		width: 100%;
	}
	.tj3>ul>li{
	    height: 8rem;
	    margin-left: 3%;
	}
	.tj3>ul>li:nth-child(n+2){
		margin-top: 2%;
	}
	.tup3{
		width: 35%;
	    height: 8rem;
	    float: left;
    }
	.tup3>img{
		width: 100%;
		height: 8rem;
		border-radius: 5px;
	}
	.fus3{
		width: 59%;
	    height: 8rem;
	    float: left;
	    position: relative;
	}
	.q3{
		width: 100%;
		text-align: left;
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 4%;
		font-weight: bold;
	}
	.w3{
		text-align: left;
		margin-top: 2%;
		margin-left: 4%;
	}
	.t3{
	    margin-top: 2%;
	    text-align: left;
	    margin-left: 4%;
	}
	.t3>span{
		color: red;
		font-weight: bold;
	}
	.t3>span>span{
		font-size: 17px;
	}
	.r3{
		width: 100%;
		position: relative;
		margin-top: 10%;
	}
	.r3>span:first-child{
		margin-left: 4%;
	}
	.r3>span:nth-child(2){
		position: absolute;
		right: 0%;
		color: red;
	}
	.r3>span:nth-child(2)>span{
		font-size: 16px;
	}
	hr{
		width: 100%;
		height: 5px;
		background: #F8F8F8;
		margin-top: 2%;
	}
	.payment{
		width: 100%;
	}
	.payment>ul{
		width: 100%;
	}
	.payment>ul>li{
		width: 95%;
		height: 5rem;
		margin: auto;
	}
	.payment_p1{
		width: 8%;
		height: 5rem;
		position: relative;
		float: left;
	}
	.payment_p1>p{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid black;
		position: absolute;
		top: 10%;
	}
	.payment_p1>p>img{
		width: 100%;
		height: 100%;
	}
	.payment_p2{
		width: 70%;
	    height: 5rem;
	    float: left;
	    margin-left: 3%;
	}
	.payment_p2>p{
		margin-top: 3%;
	}
	.payment_p2>p:first-child>span:first-child{
		font-weight: bold;
		font-size: 14px;
	}
	.payment_p2>p:first-child>span:nth-child(2){
		font-size: 10px;
		color: #C9C9C9;
		margin-left: 3%;
	}
	.payment_p2>p:nth-child(2){
		color: #C9C9C9;
	}
	.payment_p3{
		width: 18%;
		height: 5rem;
		position: relative;
		float: left;
	}
	.payment_p3>p{
		width: 18px;
	    height: 18px;
	    border-radius: 50%;
	    position: absolute;
	    top: 35%;
	    right: 25%;
	}
	.payment_p3>p>img{
		width: 100%;
		height: 100%;
	}
	.determine{
		width: 100%;
		height: 31.5rem;
		background: #A8A8A8;
		opacity: 0.4;
		margin-top: 2%;
	}
	.determine>p{
		width: 80%;
	    height: 3.5rem;
	    border-radius: 20px;
	    background: #FAE64E;
	    font-size: 15px;
	    text-align: center;
	    line-height: 3.5rem;
	    margin: auto;
	    position: relative;
	    top: 50%;
	}
	.pay{
		width: 86%;
	    height: 19rem;
	    margin: auto;
	    position: absolute;
	    top: 20%;
	    left: 6%;
	    background: white;
	    border-radius: 5px;
	}
	.pay_div1{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 1px solid #C9C9C9;
	}
	.pay_div1>p:first-child{
		width: 13%;
		height: 3.5rem;
		float: left;
	}
	.pay_div1>p:first-child>img{
		width: 60%;
	    height: 60%;
	    margin-left: 20%;
	    margin-top: 20%;
	}
	.pay_div1>p:nth-child(2){
		width: 75%;
		height: 3.5rem;
		text-align: center;
		float: left;
		font-size: 15px;
		font-weight: bold;
	}
	.pay_div2{
		width: 100%;
		height: 6rem;
		border-bottom: 1px solid #C9C9C9;
		line-height: 6rem;
		text-align: center;
		color: red;
	}
	.pay_div2>span:first-child{
		font-size: 22px;
	}
	.pay_div2>span:nth-child(2){
		font-size: 30px;
		font-weight: bold;
	}
	.pay_div3{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 1px solid #C9C9C9;
	}
	.pay_div3>p:first-child{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid black;
		float: left;
		position: relative;
    	top: 23%;
    	left: 3%;
	}
	.pay_div3>p:first-child>img{
		width: 100%;
		height: 100%;
		margin-bottom: 50%;
	}
	.pay_div3>p:nth-child(2){
		float: left;
		margin-left: 9%;
		font-weight: bold;
	}
	.pay_div4{
		width: 100%;
	}
	.pay_div4 input{
		width: 10px;
		height: 10px ;
		opacity: 0;
		border: 0;
	}
	.password-lable{
		height: 3rem;
	}
	.password-lable ul{
		width: 80%;
		height: 3.5rem;
		margin-left: 10%;
		margin-top: 4%;
		border-radius: 5px;
		border: 1px solid #DFDFDF;
	}
	.password-lable li{
		width: 16%;
		height: 3.5rem;
		line-height: 3.5rem;
		text-align: center;
		border-right: 1px solid #DFDFDF;
		float: left;
	}
</style>