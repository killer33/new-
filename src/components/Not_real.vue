<template>
	<!--发布-实名认证-->
  <div class="Not_real">
  	<div class="h">
  		<img src="../../build/27.jpg"/>
        <i class="iconfont">&#xe646;</i>
        <p class="white">发布活动</p>
    </div>
    <div class="margleft">
	    <p class="theme">
	       <span class="headline">活动主题</span>
	       <input type="text" placeholder="请输入活动标题" class="textline">
	       <span><span class="num2">0</span>/20</span>
	    </p>
	   <!-- 文字输入区 -->
	   	<div class="content">
			<textarea name="" id="textarea"  placeholder="请描述您的活动"></textarea>
		    <p>
		       	<span class="num">0</span>
		       	<span class="first">/300</span>
		    </p>
	    </div>
		<div class="uploadx1">
			<li class="upup">
				<img id="ypic" src="../../build/upup.png" />
				<img id="xpic" src="" />
				<input type="" name="file" id="file" value="" accept="image/*" multiple />
			</li>
		</div>
	</div>
	<div class="fb">
		<ul>
			<router-link to="" tag="li">
				<p>活动费用</p><input type="text" name="" id="" value="" placeholder="请填写具体费用信息"/>
			</router-link>
			<router-link to="" tag="li">
				<p>活动开始时间</p><p>请选择</p><i class="iconfont">&#xe61f;</i>
			</router-link>
			<router-link to="" tag="li">
				<p>活动结束时间</p><p>8月20-16:00</p><i class="iconfont">&#xe61f;</i>
			</router-link>
			<router-link to="" tag="li">
				<p>活动地址</p><p>河南省郑州市</p><i class="iconfont">&#xe61f;</i>
			</router-link>
			<router-link to="" tag="li">
				<p>详细地址</p><input type="text" name="" id="" value="" placeholder="请填写活动具体地址"/>
			</router-link>
			<router-link to="" tag="li">
				<p>活动方式</p>
				<div class="Outer_ring"><p class="check"></p></div><span class="online">线上</span>
				<div class="Outer_ring1"><p class="check1"></p></div><span class="offline">线下</span>
			</router-link>
		</ul>
	</div>
	<div class="mask_cou"></div>
	<!--出示优惠券-->
	<div class="Show_coupon1">
		<div class="log_pic"><img src="../../build/27.jpg"/></div>
		<p class="Show_coupon1_p1">您还未实名认证</p>
		<p class="Show_coupon1_p2">请前往个人中心进行实名认证</p>
		<router-link to="" tag="p" class="href">立即认证</router-link>
		<router-link to="/certification" tag="div" class="close1"><img src="../../build/close.png"/></router-link >
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
	.Not_real{
		width: 100%;
		position: relative;
	}
    /*  头部 */
    .h{
    	width:100%;
		height:15rem;
		position: relative;
    }
	.white{
		color: white;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		position: absolute;
		top: 2%;
		font-size: 16px;
		opacity: 0.7;
	}
	.h img{
        width:100%;
        height: 100%;
        position: relative;
        z-index: -99;
	}
    .h>i{
    	position: absolute;
    	top: 5%;
    	left: 2%;
    	font-size: 18px;
    	color: white;
    	opacity: 0.7;
    }
    .margleft{
      width: 94%;
      margin: auto;
    }
    .theme{
      height:3.5rem;
      line-height: 3.5rem;
      border-bottom: 1px solid #F0F0F0;
    }
    .headline{
	 	padding-right:2rem;
	  	color:#656565;
	  	font-weight: bold;
	  	font-size: 15px;
	}
	.num{
	  color:#B9B9B9;
	  font-size: 14px;
	}
	.theme>input{
		width: 65%;
	    height: 3.2rem;
	}
	.content{
	  	width:100%;
	  	position: relative;
	  	margin-top: 2%;
	}
	textarea{
	    height: 9rem;
	    width: 100%;
	    border: none;
	    font-size: 14px;
	}
	.first{
	  color:#B9B9B9;
	}
	.Not_real .content p{
	    position: absolute;
	    right: 1%;
	    bottom: -14%;
	    font-size: 15px;
	}
	
	.uploadx1{
		width: 100%;
		height: 7rem;
		margin-top: 1%;
	}
	.upup {
		width: 6rem;
	    height: 6rem;
	    border: 1px dashed #999999;
	    position: relative;
	    border-radius: 5px;
	    float: left;
	}
	.upup>img {
		position: relative;
	    width: 100%;
	    height: 100%
	}
	#file {
		position: absolute;
	    top: 0%;
	    left: 0%;
	    width: 6rem;
	    height: 6rem;
	    opacity: 0; 
	}
	#ypic{
		width: 30%;
	    height: 35%;
	    margin-left: 37%;
	    margin-top: 27%;
	}
	#xpic{
		display: none;
	}
	.fb{
		width: 97%;
	}
	.fb>ul{
		width: 100%;
	}
	.fb>ul>li{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
		margin-left: 3%;
		position: relative;
	}
	.fb>ul>li:first-child{
		border-top: 1px solid #F0F0F0;
	}
	.fb>ul>li>p:first-child{
		float: left;
		font-size: 16px;
	}
	.fb>ul>li>p:nth-child(2){
		float: right;
		text-align: right;
		margin-right: 13%;
		color: #9A9A9A;
	}
	.fb>ul>li i{
		position: absolute;
		right: 2%;
		color: #9A9A9A;
		font-size: 20px;
	}
	.fb>ul>li>input{
		display: block;
	    float: left;
	    height: 3.5rem;
	    margin-left: 9%;
	}
	.registration_button{
		width: 3.5rem;
	    height: 1.7rem;
	    background: #F0F0F0;
	    position: absolute;
	    top: 27%;
	    right: 4%;
	    border-radius: 15px;
	}
	.open{
		width: 1.5rem;
	    height: 1.5rem;
	    border-radius: 50%;
	    background: #999999;
	    margin-left: 5%;
	    margin-top: 2%;
	}
	.Outer_ring{
		width: 1.1rem;
	    height: 1.1rem;
	    border-radius: 50%;
	    border: 1px solid #FAE64E;
	    position: absolute;
	    top: 34%;
	    left: 25%;
	}
	.check{
		width: 0.7rem;
	    height: 0.7rem;
	    background: #FAE64E;
	    border-radius: 50%;
	    margin: auto;
	    margin-top: 17%;
	}
	.online{
		position: absolute;
		top: 4%;
		left: 32%;
		font-size: 13px;
	}
	.Outer_ring1{
		width: 1.1rem;
	    height: 1.1rem;
	    border-radius: 50%;
	    border: 1px solid #D8D8D8;
	    position: absolute;
	    top: 34%;
	    left: 43%;
	}
	.check1{
		width: 0.7rem;
	    height: 0.7rem;
	    border-radius: 50%;
	    margin: auto;
	    margin-top: 17%;
	}
	.offline{
		position: absolute;
		top: 4%;
		left: 51%;
		color: #D8D8D8;
		font-size: 13px;
	}
	
	
	/*出示优惠券*/
	.mask_cou{
		width: 100%;
	    height: 56rem;
	    background: #A8A8A8;
	    position: fixed;
	    top: 0;
	    z-index: 22;
	    opacity: 0.2;
	}
	.Show_coupon1{
	    width: 60%;
	    height: 20rem;
	    background: white;
	    position: fixed;
	    top: 25%;
	    left: 20%;
	    z-index: 88;
    	border-radius: 5px;
	}
	.close1{
		width: 3rem;
	    height: 3rem;
	    border-radius: 50%;
	    position: absolute;
	    bottom: -18%;
	    left: 42%;
	}
	.close1>img{
		width: 100%;
		height: 100%;
	}
	.log_pic{
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		margin-left: 36%;
    	margin-top: 8%;
	}
	.log_pic>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.Show_coupon1_p1{
		font-size: 16px;
	    font-weight: bold;
	    width: 100%;
	    text-align: center;
	    margin-top: 6%;
	}
	.Show_coupon1_p2{
		font-size: 13px;
	    width: 100%;
	    text-align: center;
	    margin-top: 3%;
	}
	.href{
		width: 65%;
	    margin: auto;
	    height: 3rem;
	    border-radius: 30px;
	    text-align: center;
	    line-height: 3rem;
	    font-size: 16px;
	    background: #FAE64F;
	    margin-top: 11%;	
	}
 </style>
 
          