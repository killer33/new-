<template>
	<!--购买后详情-->
	<div class="buyafter">
		<div class="head5">
			<router-link to="/Home" tag="p"><i class="iconfont">&#xe646;</i></router-link>
		</div>
		<div class="node1">
			<p class="tit1">服装配饰茶话会</p>
			<p class="price1">￥<span>3000</span>/人</p>
			<p class="p11">
				<i class="iconfont">&#xe783;</i><span>1.2W</span>
			</p>
			<p class="p11">
				<i class="iconfont">&#xe60b;</i><span>1.2W</span>
			</p>
			<p class="p22">
				<i class="iconfont">&#xe6cd;</i><span>2019.05.04</span><span>-</span><span></span>2019.05.04</sapn>
			</p>
			<p class="p22">
				<i class="iconfont">&#xe7c8;</i><span>奥体中心</span><br /><span class="aderss">河南省郑州市金水区十里河路</span>
			</p>
			<p class="sqrs1">已申请<span>276</span>人</p>
			<div class="bz1">
				<p><img src="../../build/pg.png"/><span>交易保障</span></p>
			</div>
			<div class="bz11">
				<p><img src="../../build/pg.png"/><span>支持退款</span></p>
			</div>
			<div class="bz22">
				<p><img src="../../build/pg.png"/><span>已认证</span></p>
			</div>
			<div class="bz22"></div>
		</div>
		<div class="tj22">
			<ul>
				<router-link to="" tag="li">
					<div class="tup22">
						<img src="../../build/zz.jpg"/>
					</div>
					<div class="fus22">
						<p class="q22">美丽服装有限公司</p>
						<p class="w22">河南省  郑州市  中原区</p>
						<p class="r22">已关注：<span>300</span>人</p>
						<p class="t22">入驻资金：<span>￥<span>3000</span></span></p>
						<p class="e22">+关注</p>
					</div>
				</router-link>
			</ul>
		</div>
		<div class="hdxq1">
			<p class="xqtit1">活动详情</p>
			<p class="xqsm1">徐志摩（1897年1月15日—1931年11月19日），现代诗人、散文家。
				原名章垿，字槱森，留学英国时改名志摩。新月派代表诗人。先后就读于上海沪江大学、天津北洋大学和北京大学。
				1918年赴美留学学习经济，1921年赴英国留学，入剑桥大学当特别生，研究政治经济学。在剑桥两年深受西方教育的熏陶及欧美浪漫主义和唯美派诗人的影响。
				1923年成立新月社。1924年任北京大学教授。1926年任光华大学、大夏大学和南京中央大学（1949年更名为南京大学）教授。1930年辞去了上海和南京的职务，应胡适之邀，再度任北京大学教授，兼北京女子师范大学教授。
				1931年11月19日因飞机失事罹难。代表作品有《再别康桥》《翡冷翠的一夜》等。
			</p>
			<div class="tu1">
				<ul>
					<li><img src="../../build/27.jpg"/></li>
					<li><img src="../../build/yml.jpg"/></li>
					<li><img src="../../build/zz.jpg"/></li>
				</ul>
				<p class="bm1">已报名</p>
				<div class="bm_ul1">
					<ul>
						<li><img src="../../build/bz1.jpg"/></li>
						<li><img src="../../build/bz2.jpg"/></li>
						<li><img src="../../build/bz1.jpg"/></li>
						<li><img src="../../build/bz2.jpg"/></li>
						<li><img src="../../build/bz1.jpg"/></li>
						<li><img src="../../build/bz2.jpg"/></li>
						<li><img src="../../build/bz1.jpg"/></li>
						<li><img src="../../build/bz2.jpg"/></li>
						<li><img src="../../build/bz2.jpg"/></li>
						<li><img src="../../build/bz2.jpg"/></li>
						<span style="color: #CA7878;">+67</span>
						<li class="ts1">查看<br />更多</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="ljbm1">
			<p>已报名</p>
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
	.buyafter{
		width: 100%;
	}
	.head5{
		width: 100%;
		height: 18rem;
		background: url(../../build/yml.jpg)no-repeat;
		background-size: 100% 100%;
	}
	.head5>p{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	
	.node1{
		width: 95%;
		height: 15rem;
		margin: auto;
		margin-top: 1%;
	}
	.tit1{
		width: 50%;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 15px;
		font-weight: bold;
		float: left;
	}
	.price1{
		width: 50%;
		height: 2.5rem;
		line-height: 2.5rem;
		float: right;
		text-align: right;
		color: red;
		font-size: 15px;
		font-weight: bold;
	}
	.p11{
		width: 17%;
		height: 2rem;
		line-height: 2rem;
		float: left;
	}
	.p11>span{
		position: relative;
	    left: 7%;
	    bottom: 5%;
	}
	.p22{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		float: left;
		font-size: 14px;
	}
	.p22>i{
		font-size: 18px;
	}
	.p22>span{
		margin-left: 1%;
	}
	.aderss1{
		margin-left: 6%!important;
	    font-size: 10px;
	    color: #C9C9C9;
	}
	.sqrs1{
		width: 100%;
		height: 2rem;
		float: left;
		margin-top: 9%;
	}
	.bz1{
		width: 17%;
		height: 2rem;
		float: left;
		position: relative;
		line-height: 2rem;
	}
	.bz1>p{
		width: 10px;
		height: 10px;		
	}
	.bz1>p>img{
		width: 100%;
		height: 100%;
	}
	.bz1>p>span{
		position: absolute; 
	    left: 18%;
	}
	.bz11{
		width: 17%;
		height: 2rem;
		float: left;
		position: relative;
		margin-left: 3%;
		line-height: 2rem;
	}
	.bz11>p{
		width: 10px;
		height: 10px;		
	}
	.bz11>p>img{
		width: 100%;
		height: 100%;
	}
	.bz11>p>span{
		position: absolute; 

	    left: 18%;
	}
	.bz22{
		width: 17%;
		height: 2rem;
		float: left;
		position: relative;
		margin-left: 3%;
		line-height: 2rem;
	}
	.bz22>p{
		width: 10px;
		height: 10px;		
	}
	.bz22>p>img{
		width: 100%;
		height: 100%;
	}
	.bz22>p>span{
		position: absolute; 
	    left: 18%;
	}
	.tj22{
		width: 100%;
		margin-top: 2%;
	}
	.tj22>ul{
		width: 100%;
	}
	.tj22>ul>li{
	    height: 8rem;
	    margin-left: 3%;
	}
	.tj22>ul>li:nth-child(n+2){
		margin-top: 2%;
	}
	.tup22{
		width: 35%;
	    height: 8rem;
	    float: left;
    }
	.tup22>img{
		width: 100%;
		height: 8rem;
		border-radius: 5px;
	}
	.fus22{
		width: 59%;
	    height: 8rem;
	    float: left;
	    position: relative;
	}
	.q22{
		width: 100%;
		text-align: left;
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 4%;
	}
	.w22{
		text-align: left;
		margin-top: 2%;
		margin-left: 4%;
	}
	.r22{
		width: 40%;
	    height: 1.2rem;
	    text-align: left;
	    margin-top: 2%;
	    margin-left: 4%;
	    color: #FAE64F;
	}
	.t22{
		margin-top: 2%;
	    margin-top: 7%;
	    text-align: left;
	    margin-left: 4%;
	}
	.t22>span{
		color: red;
		font-weight: bold;
	}
	.t22>span>span{
		font-size: 17px;
	}
	.e22{
		width: 22%;
	    height: 2rem;
	    text-align: center;
	    line-height: 2rem;
	    background: #FAE64F;
	    position: absolute;
	    top: 40%;
	    right: 0%;
	    border-radius: 5px;
	}
	.hdxq1{
		width: 95%;
		margin: auto;
	}
	.xqtit1{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		font-size: 15px;
		margin-top: 2%;
	}
	.tu1{
		width: 98%;
		margin: auto;
	}
	.tu1>ul{
		width: 100%;
	}
	.tu1>ul>li{
		width: 100%;
		height: 15rem;
		margin-top: 2%;
	}
	.tu1>ul>li>img{
		width: 100%;
		height: 100%;
	}
	.bm1{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		font-size: 13px;
		font-weight: bold;
		margin-top: 2%;
	}
	.bm_ul1{
		width: 100%;
		position: relative;
	}
	.bm_ul1>ul{
		width: 100%;
		height: 3rem;
	}
	.bm_ul1>ul>li{
		width: 10.5%;
	    height: 3rem;
	    border-radius: 50%;
	    float: left;
	}
	.bm_ul1>ul>li:nth-child(n+2){
		margin-left: -5%;
	}
	.bm_ul1>ul>li>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.ts1{
		background: #C9C9C9;
		text-align: center;
		position: absolute;
		right: 0%;
		top: 0%;
		color: white;
	}
	.ljbm1{
		width: 100%;
		height: 12rem;
		background: #FAFAFA;
		margin-top: 2%;
	}
	.ljbm1>p{
		width: 80%;
	    height: 3.5rem;
	    border-radius: 20px;
	    background: #E6E6E6;
	    font-size: 15px;
	    text-align: center;
	    line-height: 3.5rem;
	    margin: auto;
	    position: relative;
	    top: 50%;
	}
</style>