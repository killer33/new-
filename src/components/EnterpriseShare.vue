<template>
	<!--企业-分享-->
	<div class="EnterpriseShare">
		<!--企业简介-->
		<div class="enterpriseintroduction">
			<div class="head6">
				<router-link to="" tag="p"><i class="iconfont">&#xe646;</i></router-link>
				<router-link to="" tag="p"><img src="../../build/share.png"/></router-link>
			</div>
			<div class="gs">
				<div class="gs_logo"><img src="../../build/27.jpg"/></div>
				<p class="gsname">河南小船科技有限公司</p>
				<div class="gs_p1">
					<p>已关注：<span>3000</span></p>
					<p>平台认证：<span style="color: red;">会员</span></p>
				</div>
				<div class="gs_p1">
					<p>入驻资金：<span>3000</span></p>
					<p>活动：<span>3000</span></p>
				</div>
			</div>
			<div class="hdxq2">
				<p class="xqtit2">企业简介</p>
				<p class="xqsm2">徐志摩（1897年1月15日—1931年11月19日），现代诗人、散文家。
					原名章垿，字槱森，留学英国时改名志摩。新月派代表诗人。先后就读于上海沪江大学、天津北洋大学和北京大学。
					1918年赴美留学学习经济，1921年赴英国留学，入剑桥大学当特别生，研究政治经济学。在剑桥两年深受西方教育的熏陶及欧美浪漫主义和唯美派诗人的影响。
					1923年成立新月社。1924年任北京大学教授。1926年任光华大学、大夏大学和南京中央大学（1949年更名为南京大学）教授。1930年辞去了上海和南京的职务，应胡适之邀，再度任北京大学教授，兼北京女子师范大学教授。
					1931年11月19日因飞机失事罹难。代表作品有《再别康桥》《翡冷翠的一夜》等。
				</p>
				<div class="tu2">
					<ul>
						<li><img src="../../build/27.jpg"/></li>
					</ul>
				</div>
				<hr />
			</div>
			
		</div>
		<!--遮罩层-->
		<div class="mask"></div>
		<div class="sharetime">
			<p class="sharetime_p1">分享到</p>
			<ul>
				<li>
					<p><img src="../../build/QQ.png"/></p>QQ好友
				</li>
				<li>
					<p><img src="../../build/QQ space.png"/></p>QQ空间
				</li>
				<li>
					<p><img src="../../build/we chat.png"/></p>微信好友
				</li>
				<li>
					<p><img src="../../build/wechat friends.png"/></p>微信朋友圈
				</li>
			</ul>
			<div class="ljfx">立即分享</div>
		</div>
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
	.EnterpriseShare{
		width: 100%;
	}
	.enterpriseintroduction{
		width: 100%;
	}
	.head6{
		width: 100%;
		height: 18rem;
		background: url(../../build/yml.jpg)no-repeat;
		background-size: 100% 100%;
	}
	.head6>p{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.head6>p:nth-child(2){
		float: right;
	}
	.head6>p:nth-child(2)>img{
		width: 45%;
	    height: 45%;
	    margin-top: 25%;
	}
	.EnterpriseShare .gs{
		width: 86%;
	    height: 12rem;
	    border-radius: 10px;
	    margin: auto;
	    position: absolute;
	    top: 26%;
	    left: 6%;
	    background: white;
	    border: 1px solid #FAFAFA;
	}
	.gs_logo{
	    width: 19%;
	    height: 5rem;
	    border-radius: 50%;
	    position: relative;
	    top: -20%;
	    left: 40%;
	}
	.gs_logo>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.gsname{
		width: 100%;
		height: 2rem;
		text-align: center;
		line-height: 2rem;
		position: relative;
		top: -12%;
		color: #868686;
		font-size: 14px;
	}
	.EnterpriseShare .gs_p1{
		width: 100%;
		height: 2rem;
		color: #868686;
	}
	.EnterpriseShare .gs_p1>p{
		width: 30%;
	}
	.gs_p1>p:first-child{
		text-align: left;
		margin-left: 8%;
		float: left;
	}
	.gs_p1>p:nth-child(2){
		text-align: left;
		margin-right: 5%;
		float: right;
	}
	.hdxq2{
		width: 95%;
		margin: auto;
		margin-top: 28%;
	}
	.xqtit2{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		font-size: 15px;
		margin-top: 2%;
	}
	.tu2{
		width: 98%;
		margin: auto;
	}
	.tu2>ul{
		width: 100%;
	}
	.tu2>ul>li{
		width: 100%;
		height: 15rem;
		margin-top: 2%;
	}
	.tu2>ul>li>img{
		width: 100%;
		height: 100%;
	}
	
	.mask{
		width: 100%;
	    height: 56rem;
	    background: #CCCCCC;
	    opacity: 0.5;
	    position: absolute;
	    top: 0%;
	    z-index: 10;
	}
	.sharetime{
		width: 100%;
		height: 21rem;
		background: white;
		position: fixed;
		z-index: 99;
		bottom: 0;
		border-radius: 10px 10px 0px 0px;
	}
	.sharetime_p1{
		width: 100%;
	    height: 5rem;
	    line-height: 5rem;
	    text-align: center;
	    font-size: 18px;
	}
	.sharetime>ul{
		width: 100%;
		height: 6rem;
	}
	.sharetime>ul>li{
		width: 18%;
		height: 6rem;
		float: left;
		text-align: center;
		line-height: 2rem;
		font-size: 13px;
		margin-left: 5%;
	}
	.sharetime>ul>li>p{
		width: 100%;
		height: 4rem;
		/*border: 1px solid black;*/
	}
	.sharetime>ul>li>p>img{
		width: 58%;
   	 	height: 80%;
    	margin-top: 6%;
	}
	.ljfx{
		width: 80%;
		height: 3rem;
		text-align: center;
		line-height: 3rem;
		margin: auto;
		font-size: 15px;
		background: #FAE64F;
		border-radius: 10px;
		border-radius: 30px;
    	margin-top: 11%;
	}
</style>