<template>
	<!--充值-->
	<div class="top_up">
		<div class="hea">
			<router-link to="/Integral_record" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>充值</p>
		</div>
		<div class="up_price">
			<ul>
				<li>
					<p class="price_p1">￥<span>20</span></p>
					<p class="price_p2"><span>20</span>积分</p>
				</li>
				<li>
					<p class="price_p1">￥<span>30</span></p>
					<p class="price_p2"><span>30</span>积分</p>
				</li>
				<li>
					<p class="price_p1">￥<span>50</span></p>
					<p class="price_p2"><span>50</span>积分</p>
				</li>
				<li>
					<p class="price_p1">￥<span>80</span></p>
					<p class="price_p2"><span>80</span>积分</p>
				</li>
				<li>
					<p class="price_p1">￥<span>100</span></p>
					<p class="price_p2"><span>100</span>积分</p>
				</li>
				<li>
					<input type="number" name="" id="zdy_price" value="" placeholder="自定义金额"/>
				</li>
			</ul>
		</div>
		<p class="czfs"><span>充值方式</span></p>
		<div class="fs_div">
			<ul>
				<li>
					<div class="zf_logo"><img src="../../img/wxzf.png"/></div>
					<p class="zf_text">微信支付</p>
					<p class="zf_check"><img src="../../img/dh.png" name="zf"/></p>
				</li>
				<li>
					<div class="zf_logo"><img src="../../img/zfbzf.png"/></div>
					<p class="zf_text">支付宝支付</p>
					<p class="zf_check"><img src="../../img/dh.png" name="zf"/></p>
				</li>
			</ul>
			<p class="ljcz">立即充值</p>
		</div>
		
	</div>
</template>

<script>
	$(function(){
		$(".fs_div>ul>li").click(function(){
			$(this).children(".zf_check").children("img").toggle();
		})
		$(".up_price>ul>li").click(function(){
			$(this).css("background","#FAE64E").siblings().css("background","white");
		})
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
	.top_up{
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
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 15px;
	}
	.up_price{
		width: 100%;
		height: 13rem;
		background: #F0F0F0;
	}
	.up_price>ul{
		width: 100%;
	}
	.up_price>ul>li{
		float: left;
	    width: 25%;
	    height: 4.5rem;
	    background: white;
	    border-radius: 5px;
	    text-align: center;
	    position: relative;
	  	margin-left: 6%;
    	margin-top: 3%;
	}
	.price_p1{
		width: 100%;
	    height: 3rem;
	    line-height: 3rem;
	    font-size: 14px;
	}
	.price_p1>span{
		font-size: 20px;
	}
	.price_p2{
		width: 100%;
		position: absolute;
		top: 55%;
		color: rgb(186,186,186);
	}
	#zdy_price{
		width: 100%;
		height: 100%;
		text-align: center;
		font-weight: bold;
   		font-size: 14px;
	}
	.czfs{
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		font-size: 15px;
	}
	.czfs>span{
		margin-left: 3%;
	}
	.fs_div{
		width: 100%;
		height: 35rem;
		background: #F0F0F0;
		position: relative;
	}
	.fs_div>ul{
		width: 100%;
		position: absolute;
		top: 3%;
	}
	.fs_div>ul>li{
		width: 92%;
		height: 4.5rem;
		margin: auto;
		background: white;
		border-radius: 5px;	
	}
	.fs_div>ul>li:nth-child(n+2){
		margin-top: 3%;
	}
	.zf_logo{
		width: 15%;
		height: 4.5rem;
		text-align: center;
		float: left;
	}
	.zf_logo>img{
		width: 60%;
		height: 60%;
		margin-top: 22%;
	}
	.zf_text{
		width: 30%;
		height: 4.5rem;
		line-height: 4.5rem;
		font-size: 15px;
		font-weight: bold;
		float: left;
	}
	.zf_check{
		width: 1.5rem;
	    height: 1.5rem;
	    border: 2px solid #FAE64F;
	    border-radius: 50%;
	    float: right;
	    margin-top: 4.5%;
	    margin-right: 4%;
	}
	.zf_check>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		display: none;
	}
	.zf_check1{
		width: 1.5rem;
	    height: 1.5rem;
	    border: 2px solid #FAE64F;
	    border-radius: 50%;
	    float: right;
	    margin-top: 4.5%;
	    margin-right: 4%;
	}
	.zf_check1>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		display: none;
	}
	.ljcz{
		width: 80%;
		height: 3.5rem;
		text-align: center;
		font-size: 16px;
		line-height: 3.5rem;
		border-radius: 30px;
		background: #FAE64E;
		margin: auto;
		position: relative;
		top: 70%;
	}
</style>