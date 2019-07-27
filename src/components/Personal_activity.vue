<template>
	<!--个人中心-活动-->
	<div class="Personal_activity">
		<div class="Personal_activity_head">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>活动</p>
		</div>
		<div class="chose">
			<p class="chose_col" @click="worelease">我发布</p>
			<p style="pointer-events: none;">|</p>
			<p @click="woparticipate">我参与</p>
		</div>
		<hr />
		<div class="huo" v-show="fabu">
			<router-link to="" tag="li" v-for="item in releasedata">
				<img :src="item.pic"/>
				<p class="h1"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
				<p class="h2"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
			</router-link>
			<router-link to="" tag="li" v-for="item in releasedata">
				<img :src="item.pic"/>
				<p class="h1"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
				<p class="h2"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
			</router-link>
		</div>
		<div class="huo" v-show="canyu">
			<router-link to="" tag="li" v-for="item in participatedata">
				<img :src="item.pic"/>
				<p class="h1"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
				<p class="h2"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				fabu:true,
				canyu:false,
				releasedata:[],//我发布
				participatedata:[],//我参与
			}
		},
		methods:{
			//我发布
			worelease:function(){
				this.fabu=true;
				this.canyu=false;
				var page = 1;
				var token = window.localStorage.getItem("token");
				var that = this;
				$.ajax({
					type:"post",
					url:join+"user/myactivity",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
						that.releasedata=data.info.data;
						page++;
						console.log("我发布的活动请求成功,长度为："+that.releasedata.length);
						for (var i = 0; i<that.releasedata.length;i++) {
							if (that.releasedata[i].faburen.length>4) {
								that.releasedata[i].faburen=that.releasedata[i].faburen.substring(0,4)+"...";
							}
							if (that.releasedata[i].tit.length>17) {
								that.releasedata[i].tit=that.releasedata[i].tit.substring(0,17)+"...";
							}
						}
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//	我发布活动分页
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
										that.releasedata=that.releasedata.concat(that.fys);
										page++;
										for (var i = 0; i<that.releasedata.length;i++) {
											if (that.releasedata[i].faburen.length>4) {
												that.releasedata[i].faburen=that.releasedata[i].faburen.substring(0,4)+"...";
											}
											if (that.releasedata[i].tit.length>17) {
												that.releasedata[i].tit=that.releasedata[i].tit.substring(0,17)+"...";
											}
										}
										sw = true;
										console.log("我发布活动分页请求成功，长度为："+that.fys.length+" 总长度为："+that.releasedata.length+" 页码变为："+page);
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
			//我参与
			woparticipate:function(){
				this.fabu=false;
				this.canyu=true;
				var token = window.localStorage.getItem("token");
				var page = 1;
				var that = this;
				$.ajax({
					type:"post",
					url:join+"user/joinactivity?page="+page,
					dataType:"json",
					data:{token:token},
					success:function(data){
						page++;
						that.participatedata=data.info.data;
						console.log("我发布的活动请求成功,长度为："+that.participatedata.length);
						for (var i = 0; i<that.participatedata.length;i++) {
							if (that.participatedata[i].faburen.length>4) {
								that.participatedata[i].faburen=that.participatedata[i].faburen.substring(0,4)+"...";
							}
							if (that.participatedata[i].tit.length>17) {
								that.participatedata[i].tit=that.participatedata[i].tit.substring(0,17)+"...";
							}
						}
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//	我参与活动分页
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
		    					url:join+"user/joinactivity?page="+page,
		    					type:"post",
		    					data:{token:token},
		    					dataType:'json',
		    					success:function(data){
									that.fys = data.info.data;
									if (that.fys.length==0) {
										sw=false;
										return;
									}else{
										that.participatedata=that.participatedata.concat(that.fys);
										page++;
										for (var i = 0; i<that.participatedata.length;i++) {
											if (that.participatedata[i].faburen.length>4) {
												that.participatedata[i].faburen=that.participatedata[i].faburen.substring(0,4)+"...";
											}
											if (that.participatedata[i].tit.length>17) {
												that.participatedata[i].tit=that.participatedata[i].tit.substring(0,17)+"...";
											}
										}
										sw = true;
										console.log("我参与的活动分页请求成功，长度为："+that.fys.length+" 总长度为："+that.participatedata.length+" 页码变为："+page);
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
			this.worelease();
		},


	}
	$(function(){
		$(".chose>p").click(function(){
			$(this).addClass("chose_col").siblings().removeClass("chose_col");
		})
	})
</script>

<style>
	.Personal_activity_head{
		width: 100%;
		height: 4.5rem;
		line-height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: white;
	}
	.Personal_activity_head>p:first-child{
		float: left;
		margin-left: 0.8rem;
	}
	.Personal_activity_head>p:first-child>i{
		font-size: 1.7rem;
	}
	.Personal_activity_head>p:last-child{
		font-size: 1.7rem;
		float: left;
		margin-left: 12rem;
	}
	.chose{
		width: 100%;
		height: 3.2rem;
		background: white;
	}
	.chose>p{
		width: 26%;
	    height: 2.1rem;
	    line-height: 1rem;
	    text-align: center;
	    float: left;
	    font-size: 1.4rem;
	    margin-left: 2%;
	    margin-top: 1rem;
	}
	.chose>p:nth-child(2){
		color: #A1A1A1;
	}
	.chose_col{
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
	}
	.h1>span{
		font-weight: bold;
	    color: #333333;
	    font-family: PingFang-SC-Bold;
	    font-size: 1.4rem;
	}
	.h2{
		font-size: 1.1rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	.h2>span:last-child{
		display: inline-block;
	    float: right;
	    margin-right: 3%;
	}
</style>