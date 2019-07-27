<template>
	<!--优惠券-->
	<div class="coupons">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>优惠券</p>
		</div>
		<div class="state">
			<ul>
				<li class="cc" @click="Unused_coupon">未使用</li>
				<li @click="Coupon_used">已使用</li>
				<li @click="couponover">已过期</li>
			</ul>
		</div>
		<div class="vouchers_one">
			<ul v-show="flag" class="notuse">
				<li v-for="item in wsyinfo" @click="showcode(item.id)">
					<div class="Voucher_amount">
						<p>￥<span>{{item.price}}</span></p>
						<p>{{item.coupon}}</p>
					</div>
					<div class="name_address">
						<p>{{item.company.company_name}}</p>
						<p>{{item.company.company_address}}</p>
					</div>
					<p>截止时间: <span>{{parseInt(item.use_time) | datetimeFilte}}</span></p>
				</li>
			</ul>
			<ul v-show="flag1" class="notuse1">
				<li v-for="item in ysyinfo">
					<div class="Voucher_amount">
						<p>￥<span>{{item.price}}</span></p>
						<p>{{item.coupon}}</p>
					</div>
					<div class="name_address">
						<p>{{item.company.company_name}}</p>
						<p>{{item.company.company_address}}</p>
					</div>
					<p>截止时间: <span>{{parseInt(item.use_time) | datetimeFilte}}</span><span>已使用</span></p>
				</li>
			</ul>
			<ul v-show="flag2" class="overdue">
				<li v-for="item in info">
					<div class="Voucher_amount">
						<p>￥<span>{{item.price}}</span></p>
						<p>{{item.coupon}}</p>
					</div>
					<div class="name_address">
						<p>{{item.company.company_name}}</p>
						<p>{{item.company.company_address}}</p>
					</div>
					<p>截止时间: <span>{{parseInt(item.use_time) | datetimeFilter}}</span></p>
				</li>
			</ul>
		</div>
		<div class="mask_cou"></div>
		<!--出示优惠券-->
		<div class="Show_coupon">
			<div class="show_main">
				<p>消费时请出示该二维码</p>
				<div class="Qr_code"><img :src="scode.info"/></div>
			</div>
			<div class="close"><img src="../../build/close.png"/></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:true,
				flag1:false,
				flag2:false,
				info:[],//已过期
				wsyinfo:[],//未使用
				ysyinfo:[],//已使用
				scode:[],//二维码
			}
		},
		methods:{
			//未使用的优惠券
			Unused_coupon:function(){
				this.flag1=false;
				this.flag2=false;
				this.flag = true;
				var that = this;
				var page = 1;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/couponno",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
						that.wsyinfo=data.info.data;
						page++;
						console.log("未使用优惠券请求成功，长度为："+that.wsyinfo.length+" 页码变为："+page);
					},
					error:function(err){
						console.log("未使用优惠券请求失败");
					}
				});
				//	未使用优惠券分页
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
		    					url:join+"user/couponno",
								data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.kak = data.info.data;
									if (that.kak.length==0) {
										sw=false;
										return;
									}else{
										page++;
										sw = true;
										that.wsyinfo=that.wsyinfo.concat(that.kak);
										console.log("未使用优惠券分页请求成功，长度为："+that.kak.length+" 总长度为："+that.wsyinfo.length+" 页码变为："+page);
									}
								},
								error:function(err){
									console.log("请求失败");
								},
		    				});
		    			}
		    		}
		    	});
			},
			//已使用优惠券
			Coupon_used:function(){
				this.flag=false;
				this.flag2=false;
				this.flag1 = true;
				var that = this;
				var page = 1;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/couponuse",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
						that.ysyinfo = data.info.data;
						page++;
						console.log("已使用优惠券请求成功,长度为："+that.ysyinfo.length+" 页码变为："+page);
					},
					error:function(err){
						console.log("已使用优惠券请求失败");
					}
				});
				//	已使用优惠券分页
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
		    					url:join+"user/couponuse",
								data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.kak = data.info.data;
									if (that.kak.length==0) {
										sw=false;
										return;
									}else{
										page++;
										sw = true;
										that.ysyinfo=that.ysyinfo.concat(that.kak);
										console.log("已使用优惠券分页请求成功，长度为："+that.kak.length+" 总长度为："+that.ysyinfo.length+" 页码变为："+page);
									}
								},
								error:function(err){
									console.log("请求失败");
								},
		    				});
		    			}
		    		}
		    	});
			},
			//过期优惠券
			couponover:function(){
				this.flag=false;
				this.flag1 = false;
				this.flag2 = true;
				var that = this;
				var page = 1;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/couponover",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
						that.info = data.info;
						page++;
						console.log("过期优惠券请求成功,长度为："+that.info.length+" 页码变为："+page);
					},
					error:function(err){
						console.log("过期优惠券请求失败");
					}
				});
				//	已使用优惠券分页
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
		    					url:join+"user/couponover",
								data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.kak = data.info.data;
									if (that.kak.length==0) {
										sw=false;
										return;
									}else{
										page++;
										sw = true;
										that.info=that.info.concat(that.kak);
										console.log("已使用优惠券分页请求成功，长度为："+that.kak.length+" 总长度为："+that.info.length+" 页码变为："+page);
									}
								},
								error:function(err){
									console.log("请求失败");
								},
		    				});
		    			}
		    		}
		    	});
			},
			//展示二维码
			showcode:function(item){
				$(".mask_cou").show();
				$(".Show_coupon").show();
				var that = this;
				var token = window.localStorage.getItem("token");
				var coupon_id = item;
				$.ajax({
					type:"post",
					url:join+"user/showcode",
					dataType:"json",
					data:{token:token,coupon_id:coupon_id},
					success:function(data){
						console.log("优惠券二维码请求成功");
						console.log(data);
						that.scode = data; 
					},
					error:function(err){
						console.log("优惠券二维码请求失败");
						console.log(err);
					}
				});
			}
			
		},
		mounted(){
	    	//进入页面即加载未使用优惠券
			this.$nextTick(()=>{
				this.Unused_coupon();
			})
	    }
		
	}
	$(function(){
		$(".state>ul>li").click(function(){
			$(this).addClass("cc").siblings().removeClass("cc");
		})
		//关闭优惠券
		$(".close").click(function(){
			$(".mask_cou").hide();
			$(".Show_coupon").hide();
		})
		
	})
</script>

<style>
	.coupons{
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
	.hea>p:first-child>i{
		 font-size:1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size:1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.state{
		width: 100%;
		height: 3.7rem;
		background: white;
	}
	.state>ul{
		width: 100%;
	}
	.state>ul>li{
		width: 15%;
		height: 3.7rem;
		text-align: center;
		line-height: 3.7rem;
		font-size: 1.5rem;
		float: left;
		margin-left: 13%;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.cc{
		border-bottom: 0.1rem solid #FAE64F;
		color: #FAE64F !important;
	}
	.vouchers_one{
		width: 100%;
		background: #F0F0F0;
	}
	.vouchers_one>ul{
		width: 100%;
		position: relative;
    	top: 1.5%;
    	float: left;
	}
	.vouchers_one>ul>li{
		width: 88%;
		height: 8rem;
		margin: auto;
		margin-top: 2%;
		border-radius: 0.5rem;
	}
	.notuse>li:first-child{
		background: url(../../img/hongse.png)no-repeat;
		background-size: 100% 100%;
	}
	.notuse>li:nth-child(n+2){
		background: url(../../img/lanse.png)no-repeat;
		background-size: 100% 100%;
	}
	.notuse1>li:first-child{
		background: url(../../img/hongse.png)no-repeat;
		background-size: 100% 100%;
		
	}
	.notuse1>li:nth-child(n+2){
		background: url(../../img/lanse.png)no-repeat;
		background-size: 100% 100%;
	}
	.Voucher_amount{
		width: 30%;
		height: 8rem;
		float: left;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
	}
	.Voucher_amount>p:first-child{
		font-size:15px;
		margin-top: 1rem;
	}
	.Voucher_amount>p:first-child>span{
		font-size:3.4rem;
	}
	.Voucher_amount>p:nth-child(2){
		font-size:1.4rem;
		margin-top: 0.5rem;
	}
	.name_address{
		float: left;
		margin-left:5%;
		width: 65%;
		height: 5rem;
	}
	.name_address>p:first-child{
		margin-top: 1rem;
	    font-size: 1.5rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.name_address>p:nth-child(2){
		margin-top: 3%;
	}
	.vouchers_one>ul>li>p{
		width: 60%;
	    height: 3rem;
	    border-bottom: 1px solid #F0F0F0;
	    float: left;
	    line-height: 3.4rem;
	    margin-left: 5%;
	    font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.vouchers_one>ul>li>p>span:nth-child(2){
		color: red;
		margin-left: 3%;
	}
	.overdue{
		color: #999999;
	}
	.overdue>li{
		background: url(../../img/guoqi.png)no-repeat;
		background-size: 100% 100%;
	}
	.overdue>li:nth-child(n+2) {
    	margin-top: 2%;
    }
	/*出示优惠券*/
	.mask_cou{
		width: 100%;
	    height: 68rem;
	    background: #A8A8A8;
	    position: fixed;
	    top: 0;
	    z-index: 22;
	    opacity: 0.2;
	    display: none;
	}
	.Show_coupon{
	    width: 26rem;
	    height: 29.6rem;
	    background: url(../../img/youhui.png)no-repeat;
	    background-size: 100% 100%;
	    position: fixed;
	    top: 14.2rem;
	    left: 2.4rem;
	    z-index: 88;
	    border-radius: 0.5rem;
	    display: none;
	}
	
	.show_main{
	    width: 75%;
	    height: 21rem;
	    margin: auto;
	    border-radius: 0.5rem;
	    margin-top: 20%;
	}
	.show_main>p{
		width: 100%;
	    height: 6.5rem;
	    text-align: center;
	    line-height: 6.5rem;
	    font-size:1.5rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.Qr_code{
		width: 10.75rem;
	    height: 10.75rem;
	    /*border: 1px dashed black;*/
	    margin-left: 21%;
	    margin-top: 9%;
	}
	.Qr_code>img{
		width: 100%;
		height: 100%;
	}
	.close{
		width: 3rem;
	    height: 3rem;
	    border-radius: 50%;
	    position: absolute;
	    bottom: -18%;
	    left: 42%;
	}
	.close>img{
		width: 100%;
		height: 100%;
	}
</style>