<template>
	<!--个人中心-我的推荐-->
	<div class="recommended">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>我的推荐</p>
		</div>
		<div class="xx">
			<p class="xx_ss" @click="recommended_qi">企业</p>
			<p style="pointer-events: none;">|</p>
			<p @click="recommended_ge">个人</p>
		</div>
		<hr />
		<div class="tj1" v-show="flag">
			<ul>
				<router-link to="" tag="li" v-for="item in qi_infodata">
					<div class="tup6">
						<img :src="item.logo_src"/>
					</div>
					<div class="fuss">
						<p class="q1">{{item.company_name}}</p>
						<p class="w1">{{item.company_address}}</p>
						<p class="r1">已关注：<span>{{item.follow_num}}</span>人</p>
						<p class="t1">入驻资金：<span>￥<span>{{item.money}}</span></span></p>
					</div>
				</router-link>
			</ul>
		</div>
		<div v-show="flag1" class="gzgr">
			<li v-for="item in ge_infodata">
				<div><img :src="item.userpic"/></div>
				<p class="gzgr_p1">{{item.username}}</p>
				<p class="gzgr_p2">{{item.diqu}}</p>
			</li>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:true,
				flag1:false,
				qi_infodata:[],//我的推荐-企业
				ge_infodata:[],//我的推荐-个人
			}
		},
		methods:{
//			我的推荐-企业
			recommended_qi(){
				this.flag1=false;
				this.flag = true;
				var token = window.localStorage.getItem("token");
				var page =1;
				var that=this;
				$.ajax({
					type:"post",
					url:join+"user/recommend?sign=qi",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
						page++;
						that.qi_infodata=data.info.data;
						console.log("我的推荐-企业请求成功");
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//	我的推荐-企业分页
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
		    					url:join+"user/recommend?sign=qi",
		    					type:"post",
		    					data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.fys = data.info.data;
									if (that.fys.length==0) {
										sw=false;
										return;
									}else{
										that.qi_infodata=that.qi_infodata.concat(that.fys);
										page++;
										sw = true;
										console.log("我的推荐-企业分页请求成功，长度为："+that.fys.length+" 总长度为："+that.qi_infodata.length+" 页码变为："+page);
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
//			我的推荐-个人
			recommended_ge(){
				this.flag=false;
				this.flag1 = true;
				var token = window.localStorage.getItem("token");
				var page =1;
				var that=this;
				$.ajax({
					type:"post",
					url:join+"user/recommend?sign=ge",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
						page++;
						that.ge_infodata=data.info.data;
						console.log("我的推荐-个人请求成功");
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//	我的推荐-个人分页
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
		    					url:join+"user/recommend?sign=qi",
		    					type:"post",
		    					data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.fys = data.info.data;
									if (that.fys.length==0) {
										sw=false;
										return;
									}else{
										that.ge_infodata=that.ge_infodata.concat(that.fys);
										page++;
										sw = true;
										console.log("我的推荐-个人分页请求成功，长度为："+that.fys.length+" 总长度为："+that.ge_infodata.length+" 页码变为："+page);
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
		},
		mounted(){
			this.recommended_qi();
		},
	}
	$(function(){
		$(".xx>p").click(function(){
			$(this).addClass("xx_ss").siblings().removeClass("xx_ss");
		})
	})
</script>

<style>
	.fans{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		background: white;
		border-bottom: 0.1rem solid #F0F0F0;
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
	.xx{
		width: 100%;
		height: 3rem;
		background: white;
	}
	hr{
		width: 100%;
		height: 0.5rem;
		background: #F0F0F0;
	}
	.xx>p{
		width: 26%;
	    height: 2rem;
	    line-height: 1rem;
	    text-align: center;
	    float: left;
	    font-size: 1.4rem;
	    margin-left: 4%;
	    margin-top: 1rem;
	}
	.xx>p:nth-child(2){
		color: #A1A1A1;
	}
	.xx_ss{
		color: #FAE64F;
		border-bottom: 0.1rem solid #FAE64F;
	}
	.tj1{
		width: 100%;
		background: white;
	}
	.tj1>ul{
		width: 100%;
	}
	.tj1>ul>li{
	    height: 8rem;
	    margin-left: 3%;
	    padding: 2% 0%;
	}
	.tup6{
		width: 30%;
	    height: 8rem;
	    float: left;
    }
	.tup6>img{
		width: 100%;
		height: 8rem;
		border-radius: 0.5rem;
	}
	.fuss{
		width: 65%;
	    height: 8rem;
	    float: left;
	    position: relative;
	}
	.q1{
		width: 100%;
		text-align: left;
		font-size: 1.5rem;
		font-family: "微软雅黑";
		margin-left: 4%;
	}
	.w1{
		text-align: left;
		margin-top: 2%;
		margin-left: 4%;
	}
	.r1{
		width: 40%;
	    height: 1.2rem;
	    text-align: left;
	    margin-top: 2%;
	    margin-left: 4%;
	    color: #FAE64F;
	}
	.t1{
	    margin-top: 5%;
	    text-align: left;
	    margin-left: 4%;
	}
	.t1>span{
		color: red;
		font-weight: bold;
	}
	.t1>span>span{
		font-size: 1.7rem;
	}
	.gzgr{
		width: 100%;
		background: white;
	}
	.gzgr>li{
		width: 100%;
		height: 7rem;
		border-bottom: 0.1rem dashed #F0F0F0;
		position: relative;
	}
	.gzgr>li>div{
		width: 4.5rem;
	    height: 4.5rem;
	    border-radius: 50%;
	    margin-left: 4%;
	    position: absolute;
	    top: 17%;
	    float: left;
	}
	.gzgr>li>div>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;	
	}
	.gzgr_p1{
		width: 30%;
	    height: 2rem;
	    float: left;
	    position: absolute;
	    left: 22%;
	    top: 24%;
	    font-size: 1.7rem;
	    font-weight: bold;
	}
	.gzgr_p2{
		width: 30%;
	    height: 2rem;
	    float: left;
	    position: absolute;
	    left: 22%;
	    top: 57%;
	    font-size: 1.4rem;
	}
</style>