<template>
	<!--积分记录-->
	<div class="Integral_record">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>积分记录</p>
		</div>
		<div class="integral">
			<p class="integral_p1">总积分<span>{{jinfo.jifen_total}}</span></p>
			<router-link to="/top_up" tag="div" class="top_up">
				<p class="top_up_img"><img src="../../img/chongzhi.png"/></p>
				<p>充值</p>
			</router-link>
			<router-link to="/withdrawal_WeChat" tag="div" class="withdrawal">
				<p class="withdrawal_img"><img src="../../img/tixian.png"/></p>
				<p>提现</p>
			</router-link>
		</div>
		<div class="total">
			<p>收入:<span>+{{jinfo.jia}}</span></p>
			<p>支出:<span>{{jinfo.jian}}</span></p>
		</div>
		<ul>
			<!--<li v-for="item in jifeninfo">
				<span class="li_p1">用户：<span>浮生若梦</span></span><br />
				<span class="li_p2">2019-02-03</span>
				<p class="li_p3 c1">购买活动</p>
				<p class="li_p4">积分:<span class="c1">+300</span></p>
				<i class="iconfont">&#xe61f;</i>
			</li>-->
			<li v-for="item in jifeninfo">
				<span class="li_p1 "><span>{{item.content}}</span></span><br />
				<span class="li_p2">{{parseInt(item.time) | datetimeFilte}}</span>
				<p class="li_p4">积分:<span class="c2">{{item.num}}</span></p>
				<i class="iconfont">&#xe61f;</i>
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				jifeninfo:[],
				jinfo:[],
			}
		},
		methods:{
			
		},
		mounted(){
			this.$nextTick(()=>{
				var token = window.localStorage.getItem("token");
				var that = this;
				var page = 1;
				$.ajax({
					type:"post",
					url:join+"user/jifen/",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
						page++;
						that.jinfo=data.info;
						that.jifeninfo=data.info.jifen.data;
						for (var i = 0 ; i < that.jifeninfo.length ; i++) {
							if (that.jifeninfo[i].num>0) {
								that.jifeninfo[i].num = "+" + that.jifeninfo[i].num;
							}
						}
						console.log("积分请求成功,长度为："+that.jifeninfo.length+" 页码变为："+page);
					},
					error:function(err){
						console.log("积分请求失败");
						console.log(err);
					}
				});
				//	积分分页
		  		// 设置一个开关来避免重复请求数据 
		    	let sw = true;               
		    	// 注册scroll事件并监听     
		    	window.addEventListener('scroll',function(){   
		    		//获取屏幕高度
		    		var viewHeight = $(window).height();
		    		var scrollTop = $(window).scrollTop();
		    		var scrollHeight = $(document).height();
		    		
		    		//判断是否滚动到底部
		    		if (viewHeight+scrollTop==scrollHeight) {
		    			if (sw==true) {
		    				//将开关关闭
		    				sw=false;
		    				$.ajax({
		    					type:"post",
		    					url:join+"user/jifen/",
								data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.kak = data.info.jifen.data;
									if (that.kak.length==0) {
										sw=false;
										return;
									}else{
										page++;
										sw = true;
										for (var i = 0 ; i < that.kak.length ; i++) {
											if (that.kak[i].num>0) {
												that.kak[i].num = "+" + that.kak[i].num;
											}
										};
										that.jifeninfo=that.jifeninfo.concat(that.kak);
										console.log("积分分页请求成功，长度为："+that.kak.length+" 总长度为："+that.jifeninfo.length+" 页码变为："+page);
									}
								},
								error:function(err){
									console.log("请求失败");
								},
		    				});
		    			}
		    		}
		    	});
			})
		},
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
	.Focus_on{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 1px solid #F0F0F0;
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
	.hea>p:first-child>i{
		font-size: 1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 1.7rem;
	}
	.integral{
		width: 100%;
		height: 13rem;
		background: url(../../img/jfbg.png)no-repeat;
		background-size: 100% 100%;
		position: relative;
		color: white;
	}
	.integral_p1{
	    width: 20%;
	    height: 4rem;
	    text-align: center;
	    line-height: 2rem;
	    position: absolute;
	    left: 38%;
	    top: 8%;
	    font-size: 1.2rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(255,255,255,1);
	}
	.integral_p1>span{
		font-size: 2.8rem;
	}
	.top_up{
		width: 20%;
	    height: 2rem;
	    text-align: center;
	    position: absolute;
	    top: 65%;
	    left: 20%;
	}
	.top_up>p{
		float: left;
	}
	.top_up>p:nth-child(2){
		font-size: 1.4rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(255,255,255,1);
	}
	.top_up_img{
		width: 1.6rem;
	    height: 1.6rem;
	    margin-right: 10%;
	    margin-top: 1%;
	}
	.top_up_img>img{
		width: 100%;
		height: 100%;
	}
	.withdrawal{
		width: 20%;
	    height: 2rem;
	    text-align: center;
	    position: absolute;
	    top: 65%;
	    left: 62%;
	}
	.withdrawal>p{
		float: left;
	}
	.withdrawal>p:nth-child(2){
		font-size: 1.4rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(255,255,255,1);
	}
	.withdrawal_img{
		width: 1.6rem;
	    height: 1.6rem;
	    margin-right: 10%;
	    margin-top: 1%;
	}
	.withdrawal_img>img{
		width: 100%;
		height: 100%;
	}
	.total{
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
		background: #F0F0F0;
	}
	.total>p:first-child{
		float: left;
		margin-left: 3%;
		color: #FD5656;
	}
	.total>p:first-child>span{
		font-size: 1.9rem;
	}
	.total>p:nth-child(2){
		float: right;
		margin-right: 3%;
		color: #3F5AD9;
	}
	.total>p:nth-child(2)>span{
		font-size: 1.9rem;
	}
	.Integral_record>ul{
		width: 100%;
		background: white;
	}
	.Integral_record>ul>li{
		width: 100%;
		height: 5.4rem;
		border-bottom: 1px solid #F0F0F0;
		position: relative;
	}
	.li_p1{
		width: 27%;
	    height: 2rem;
	    line-height: 3rem;
	    position: absolute;
	    left: 3%;
	    font-size: 1.5rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(255,87,86,1);
	}
	.li_p2{
		margin-left: 3%;
	    position: absolute;
	    top: 60%;
	    font-size: 1.2rem;
	    font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.li_p3{
		width: 20%;
	    height: 4.5rem;
	    text-align: center;
	    line-height: 4.5rem;
	    position: absolute;
	    top: 0%;
	    left: 39%;
	}
	.li_p4{
		width: 25%;
	    height: 2rem;
	    float: right;
	    line-height: 2.2rem;
	    margin-right: 8%;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.Integral_record>ul>li>i{
		position: absolute;
	    right: 3%;
	    top: 32%;
	    font-size: 1.7rem;
	}
	.c2{
		color: #3F5AD9;
	}
	.li_p4>span{
		font-size: 1.7rem;
	}
</style>