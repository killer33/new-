<template>
	<!--个人中心-推荐活动-->
	<div class="re_activity">
		<div class="re_activity_head">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>推荐活动</p>
		</div>
		<div class="re_chose">
			<p class="re_chose_col" @click="Irecommend">我推荐的</p>
			<p style="pointer-events: none;">|</p>
			<p @click="recommend_me">推荐我的</p>
		</div>
		<hr />
		<div class="huo" v-show="wtjd">
			<router-link to="" tag="li" v-for="item in Idata">
				<img :src="item.pic"/>
				<p class="h1"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
				<p class="h2"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
			</router-link>
		</div>
		<div class="gzgr" v-show="tjwd">
			<li v-for="item in medata">
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
				wtjd:true,//我推荐的
				tjwd:false,//推荐我的
				Idata:[],//我推
				medata:[],//推我
			}
		},
		methods:{
			//我推荐的
			Irecommend:function(){
				this.wtjd=true;
				this.tjwd=false;
				var page = 1;
				var token = window.localStorage.getItem("token");
				var that = this;
				$.ajax({
					type:"post",
					url:join+"user/recommendActivity?sign=wotui&page="+page,
					dataType:"json",
					data:{token:token},
					success:function(data){
						page++;
						that.Idata=data.info.data;
						for (var i = 0; i<that.Idata.length;i++) {
							if (that.Idata[i].faburen.length>4) {
								that.Idata[i].faburen=that.Idata[i].faburen.substring(0,4)+"...";
							}
							if (that.Idata[i].tit.length>17) {
								that.Idata[i].tit=that.Idata[i].tit.substring(0,17)+"...";
							}
						}
						console.log("我推荐的请求成功");
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//	我推荐的分页
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
		    					url:join+"user/myactivity",
		    					type:"post",
		    					data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.fys = data.info.data;
									if (that.fys.length==0) {
										sw=false;
										return;
									}else{
										for (var i = 0; i<that.fys.length;i++) {
											if (that.fys[i].faburen.length>4) {
												that.fys[i].faburen=that.fys[i].faburen.substring(0,4)+"...";
											}
											if (that.fys[i].tit.length>17) {
												that.fys[i].tit=that.fys[i].tit.substring(0,17)+"...";
											}
										}
										that.Idata=that.Idata.concat(that.fys);
										page++;
										sw = true;
										console.log("我推荐的分页请求成功，长度为："+that.fys.length+" 总长度为："+that.Idata.length+" 页码变为："+page);
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
			//推荐我的
			recommend_me:function(){
				this.wtjd=false;
				this.tjwd=true;
				var page = 1;
				var token = window.localStorage.getItem("token");
				var that = this;
				$.ajax({
					type:"post",
					url:join+"user/recommendActivity?sign=tuiwo&page="+page,
					dataType:"json",
					data:{token:token},
					success:function(data){
						page++;
						that.medata=data.info.data;
						console.log("推荐我的请求成功");
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//	我推荐的分页
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
		    					url:join+"user/myactivity",
		    					type:"post",
		    					data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.fys = data.info.data;
									if (that.fys.length==0) {
										sw=false;
										return;
									}else{
										that.medata=that.medata.concat(that.fys);
										page++;
										sw = true;
										console.log("我推荐的分页请求成功，长度为："+that.fys.length+" 总长度为："+that.medata.length+" 页码变为："+page);
									}
								},
								error:function(err){
									console.log("请求失败");
								},
		    				});
		    			}
		    		}
		    	});
			}
		},
		mounted(){
			this.Irecommend();
		}
	}
	$(function(){
		$(".re_chose>p").click(function(){
			$(this).addClass("re_chose_col").siblings().removeClass("re_chose_col");
		})
	})
</script>

<style>
	.re_activity_head{
		width: 100%;
		height: 4.5rem;
		line-height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: white;
	}
	.re_activity_head>p:first-child{
		float: left;
		margin-left: 0.8rem;
	}
	.re_activity_head>p:first-child>i{
		font-size: 1.7rem;
	}
	.re_activity_head>p:last-child{
		font-size: 1.7rem;
		float: left;
		margin-left: 11rem;
	}
	.re_chose{
		width: 100%;
		height: 3.2rem;
		background: white;
	}
	.re_chose>p{
		width: 26%;
	    height: 2.1rem;
	    line-height: 1rem;
	    text-align: center;
	    float: left;
	    font-size: 1.4rem;
	    margin-left: 2%;
	    margin-top: 1rem;
	}
	.re_chose>p:nth-child(2){
		color: #A1A1A1;
	}
	.re_chose_col{
		color: #FAE64F;
		border-bottom: 0.1rem solid #FAE64F;
	}
	hr{
		width: 100%;
		height: 0.5rem;
		background: #F0F0F0;
	}
	
	.huo{
		width: 100%;
		background: white;
	}
	.huo>li{
		width: 46%;
	    float: left;
	   	padding: 2% 2% 0% 2%;
	    background: white;
	}
	.huo>li>img{
		width: 100%;
	    height: 8.4rem;
	    border-radius: 0.5rem;
	}
	.huo>li>p{
		margin-left: 2%;
		text-align: left;
	}
	.h1{
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Bold;
	    color: rgba(51,51,51,1);
	    overflow: hidden;
	    padding: 2% 0%;
	}
	.h1>span{
		font-weight: bold;
	    color: #333333;
	    font-family: PingFang-SC-Bold;
	    font-size: 1.4rem;
	}
	.h2{
		font-size: 1.1rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	    padding: 2% 0%;
	}
	.h2>span:last-child{
		display: inline-block;
	    float: right;
	    margin-right: 3%;
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