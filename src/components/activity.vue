<template>
	<!--活动-->
	<div class="activity">
		<div class="heads1">
			<i class="iconfont search1" @click="activity_search">&#xe615;</i>
			<input type="text" name="" id="activity_search" value="" placeholder="搜索您感兴趣的公司"/>
		</div>
		<div class="A_nav">
			<ul >
				<li :class="{'ss':clicked==-1}" @click="all">全部</li>
				<li v-for="(item,index) in info" :key="index" :class="{'ss':clicked==index}" @click="type(item.id,index)">{{item.activity_type}}</li>
			</ul>
		</div>
		<div class="screening">
			<ul>
				<li class="jjs" @click="zonghe">综合</li>
				<li id="renshu" @click="num">人数
					<div class="shang"></div>
					<div class="xia"></div>
				</li>
				<li id="jiage" @click="price">价格
					<div class="shang"></div>
					<div class="xia"></div></li>
				<li id="shijian" @click="time">时间
					<div class="shang"></div>
					<div class="xia"></div>
				</li>
			</ul>
		</div>
		<hr />
		<div class="love1">
			<!--主题内容-->
			<ul v-show="main">
				<router-link to="/activityIntroduction" tag="li" v-for="item in search_result">
					<img :src="item.pic"/>
					<p class="Ph11"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
					<p class="Ph22"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
				</router-link>
			</ul>
			<!--搜索内容-->
			<ul v-show="search">
				<router-link to="/activityIntroduction" tag="li" v-for="item in search_result">
					<img :src="item.pic"/>
					<p class="Ph11"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
					<p class="Ph22"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
				</router-link>
			</ul>
			<!--活动分类id内容-->
			<ul v-show="typeshow">
				<router-link to="/activityIntroduction" tag="li" v-for="item in typedata">
					<img :src="item.pic"/>
					<p class="Ph11"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
					<p class="Ph22"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
				</router-link>
			</ul>
			<!--排序-->
			<ul v-show="sort">
				<router-link to="/activityIntroduction" tag="li" v-for="item in kajiji">
					<img :src="item.pic"/>
					<p class="Ph11"><span>{<span>{{item.faburen}}</span>}</span>{{item.tit}}</p>
					<p class="Ph22"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
				</router-link>
			</ul>
			<div style="clear: both;"></div>
		</div>
		<div class="activity_ms"></div>
		<!--底部-->
		<div class="footer">
			<ul>
				<router-link to="/Home" tag="li">
					<i class="iconfont">&#xe619;</i><br />
					<span>首页</span>
				</router-link>
				<router-link to="" tag="li">
					<i class="iconfont" style="color:#FAE64F">&#xe687;</i><br />
					<span style="color:#FAE64F">活动</span>
				</router-link>
				<router-link to="/Release_1" tag="li" class="release">
					<p><img src="../../build/fabu.png"/></p>
					<span>发布</span>
				</router-link>
				<router-link to="/enterprise" tag="li">
					<i class="iconfont">&#xe6b0;</i><br />
					<span>企业</span>
				</router-link>
				<router-link to="/personal" tag="li">
					<i class="iconfont">&#xe625;</i><br />
					<span>我的</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){ 
	    	return { 
	    		clicked:-1,
	    		main:true,
	    		search:false,
	    		typeshow:false,
	    		sort:false,
	    		search_result : [] , //主体--分页   //搜索结果 分页
	    		info:[],     //活动分类
	    		typedata:[],    //活动分类id内容获取-- 分页
	    		kajiji:[],   //排序
	    		a:1,
	    	}
	    },
	    methods:{
	    	//全部
	    	all:function(){
	    		this.clicked=-1;
	    		this.main=true;
	    		this.search=false;
	    		this.sort=false;
	    		this.typeshow=false;
	    		var that = this;
				var page = 1;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"activity/search?page="+page,//搜索接口
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				that.search_result=data.info.data;
		  				console.log(that.search_result);
		  				for (var i = 0; i<that.search_result.length;i++) {
			  				if(that.search_result[i].faburen){
								if (that.search_result[i].faburen.length>4) {
									that.search_result[i].faburen=that.search_result[i].faburen.substring(0,4)+"...";
								}
								if (that.search_result[i].tit.length>17) {
									that.search_result[i].tit=that.search_result[i].tit.substring(0,17)+"...";
								}
							}
						}
		  				page++;
		  				console.log("获取活动主体内容成功,当前length= " + that.search_result.length  + "当前页码变为：" +page+ "  已做好请求第二页的准备");
					},
		  			error:function(err){
						console.log("请求失败");
						console.log(err);
					}
				});
		  		
		  		//	主体部分分页
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
		    					url:join+"activity/search?page="+page,
		    					type:"post",
		    					data:{token:token,},
		    					dataType:'json',
		    					success:function(data){
		    						that.kak = data.info.data;
		    						if (that.kak.length==0) {
		    							sw=false;
		    							return;
		    						}else{
		    							page++;
		    							that.search_result=that.search_result.concat(that.kak);
		    							for (var i = 0; i<that.search_result.length;i++) {
		    								if(that.kak[i].faburen){
												if (that.search_result[i].faburen.length>4) {
													that.search_result[i].faburen=that.search_result[i].faburen.substring(0,4)+"...";
												}
												if (that.search_result[i].tit.length>17) {
													that.search_result[i].tit=that.search_result[i].tit.substring(0,17)+"...";
												}
											}
										}
		    							sw = true;
		    							console.log("分页请求成功，长度为"+that.kak.length+" 当前总长度  "+that.search_result.length+" 页码变为page="+page);
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
	    	//搜索
	    	activity_search:function(){
	    		this.main=false;
	    		this.typeshow=false;
	    		this.sort=false;
	    		this.search=true;
	    		var that = this;
	    		var page = 1;//页码
	    		var token = window.localStorage.getItem("token");
	    		var tit = $("#activity_search").val();//获取搜索活动主题关键词
	    		$.ajax({
	    			type:"post",
	    			url:join+"activity/search?page="+page,
	    			data:{token:token,tit:tit,},
					dataType:'json',
					success:function(data){
						page++;
						that.search_result = data.info.data;
						for (var i = 0; i<that.search_result.length;i++) {
							if (that.search_result[i].faburen.length>4) {
								that.search_result[i].faburen=that.search_result[i].faburen.substring(0,4)+"...";
							}
							if (that.search_result[i].tit.length>17) {
								that.search_result[i].tit=that.search_result[i].tit.substring(0,17)+"...";
							}
						}
						console.log("搜索成功,当前length= " + that.search_result.length  + "当前页码变为：" +page+ "  已做好请求第二页的准备");
						console.log("搜索内容："+tit);
					},
					error:function(err){
						console.log("请求失败");
					}
	    		});
	    		
//	    		---搜索分页

		    	// 设置一个开关来避免重复请求数据 
		    	let sw = true;               
		    	// 注册scroll事件并监听     
		    	window.addEventListener('scroll',function(){   
		    		//获取屏幕高度
		    		var viewHeight = $(window).height();
//		    		console.log("屏幕高度："+viewHeight);
		    		//滚动过的距离（滚动条到顶部的距离）
		    		var scrollTop = $(window).scrollTop();
//		    		console.log("滚动过的距离："+scrollTop);
		    		//滚动条的总高度
		    		var scrollHeight = $(document).height();
//		    		console.log("滚动条的总高度："+scrollHeight);
		    		
		    		//判断是否滚动到底部
		    		if (viewHeight+scrollTop==scrollHeight) {
		    			if (sw==true) {
		    				//将开关关闭
		    				sw=false;
		    				$.ajax({
		    					url:join+"activity/search?page="+page,
		    					type:"post",
		    					data:{token:token,tit:tit,},
		    					dataType:'json',
		    					success:function(data){
									that.kak = data.info.data;
									if (that.kak.length==0) {
										sw==false;
										return;
									}else{
										page++;
										sw = true;
										that.search_result=that.search_result.concat(that.kak);
										for (var i = 0; i<that.search_result.length;i++) {
											if (that.search_result[i].faburen.length>4) {
												that.search_result[i].faburen=that.search_result[i].faburen.substring(0,4)+"...";
											}
											if (that.search_result[i].tit.length>17) {
												that.search_result[i].tit=that.search_result[i].tit.substring(0,17)+"...";
											}
										}
										console.log("分页请求成功，长度为"+that.kak.length+" 当前总长度  "+that.search_result.length+" 页码变为page="+page);
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
	    	//获取活动分类ID--获取分页数据
	    	type:function(item,index){
	    		this.clicked = index;
	    		this.main=false;
	    		this.search=false;
	    		this.sort=false;
	    		this.typeshow=true;
	    		var token = window.localStorage.getItem("token");
	    		var typeid = item;
	    		var page = 1;
	    		var that = this;
	    		$.ajax({
	    			type:"post",
	    			url:join+"activity/activitytype/?activity_typeid="+typeid+"&page="+page,
	    			dataType:"json",
	    			data:{token:token},
	    			success:function(data){
	    				page++;
	    				that.typedata=data.info.data;
	    				for (var i = 0; i<that.typedata.length;i++) {
							if (that.typedata[i].faburen.length>4) {
								that.typedata[i].faburen=that.typedata[i].faburen.substring(0,4)+"...";
							}
							if (that.typedata[i].tit.length>17) {
								that.typedata[i].tit=that.typedata[i].tit.substring(0,17)+"...";
							}
						}
		  				console.log("根据活动分类ID获取内容成功，长度为："+that.typedata.length+"  当前页码变为"+page);
		  			},
		  			error:function(err){
						console.log("请求失败");
						console.log(err);
					}
	    		});
	    		//	活动分类-分页
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
		    					url:join+"activity/activitytype/?activity_typeid="+typeid+"&page="+page,
		    					type:"post",
		    					data:{token:token},
		    					dataType:'json',
		    					success:function(data){
		    						that.kak = data.info.data;
		    						if (that.kak.length==0) {
		    							sw=false;
		    							return;
		    						}else{
		    							page++;
		    							that.typedata=that.typedata.concat(that.kak);
		    							for (var i = 0; i<that.typedata.length;i++) {
											if (that.typedata[i].faburen.length>4) {
												that.typedata[i].faburen=that.typedata[i].faburen.substring(0,4)+"...";
											}
											if (that.typedata[i].tit.length>17) {
												that.typedata[i].tit=that.typedata[i].tit.substring(0,17)+"...";
											}
										}
		    							console.log("根据活动分类ID获取内容分页成功，长度为："+that.kak.length+ "当前页码变为："+page+ "从长度为："+that.typedata.length);
		    							sw = true;
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
	    	//人数排序
	    	num:function(){
	    		this.main=false;
	    		this.search=false;
	    		this.sort=true;
	    		this.typeshow=false;
	    		var that =this;
	    		$(".shang").css("border-bottom","5px solid #999999");
				$(".xia").css("border-top","5px solid #999999");
	    		var token = window.localStorage.getItem("token");
	    		//人数降序
	    		if(this.a==1){
	    			var sort="renshudesc";//人数降序
	    			$("#renshu>.shang").css("border-bottom","5px solid #999999");
					$("#renshu>.xia").css("border-top","5px solid #FAE74F");
					var page = 1;
					$.ajax({
						type:"post",
						url:join+"activity/sort/?page="+page,
						dataType:"json",
						data:{token:token,sort:sort},
						success:function(data){
							page++;
							that.kajiji=data.info.data;
							for (var i = 0; i<that.kajiji.length;i++) {
								if (that.kajiji[i].faburen.length>4) {
									that.kajiji[i].faburen=that.kajiji[i].faburen.substring(0,4)+"...";
								}
								if (that.kajiji[i].tit.length>17) {
									that.kajiji[i].tit=that.kajiji[i].tit.substring(0,17)+"...";
								}
							}
			  				console.log("人数降序请求成功，长度："+that.kajiji.length+" 当前页码变为："+page);
			  			},
			  			error:function(err){
							console.log("人数降序请求失败");
							console.log(err);
						}
					});
					//	人数降序分页
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
			    					url:join+"activity/sort/?page="+page,
			    					type:"post",
			    					dataType:"json",
									data:{token:token,sort:sort},
									success:function(data){
										that.kak=data.info.data;
										if (that.kak.length==0) {
											sw=false;
											return;
										}else{
											page++;
											for (var i = 0; i<that.kak.length;i++) {
												if (that.kak[i].faburen.length>4) {
													that.kak[i].faburen=that.kak[i].faburen.substring(0,4)+"...";
												}
												if (that.kak[i].tit.length>17) {
													that.kak[i].tit=that.kak[i].tit.substring(0,17)+"...";
												}
											}
											that.kajiji=that.kajiji.concat(that.kak);
											console.log("人数降序分页请求成功，长度为："+that.kak.length+" 总长度为："+that.kajiji.length+" 页码变为："+page);
											sw=true;
										}
									},
						  			error:function(err){
										console.log("请求失败");
										console.log(err);
									}
			    				});
			    			}
			    			return page;
			    		}
			    	});
					this.a=2;
					return;
	    		}
	    		//人数升序
	    		if (this.a==2) {
	    			var page=1;
	    			var sort1="renshuasc";//人数升序
	    			$("#renshu>.shang").css("border-bottom","5px solid #FAE74F");
					$("#renshu>.xia").css("border-top","5px solid #999999");
					$.ajax({
						type:"post",
						url:join+"activity/sort/?page="+page,
						dataType:"json",
						data:{token:token,sort:sort1},
						success:function(data){
							page++;
							that.kajiji=data.info.data;
							console.log(that.kajiji);
							for (var i = 0; i<that.kajiji.length;i++) {
								if (that.kajiji[i].faburen.length>4) {
									that.kajiji[i].faburen=that.kajiji[i].faburen.substring(0,4)+"...";
								}
								if (that.kajiji[i].tit.length>17) {
									that.kajiji[i].tit=that.kajiji[i].tit.substring(0,17)+"...";
								}
							}
			  				console.log("人数升序请求成功,长度为："+that.kajiji.length+" 页码变为："+page);
			  			},
						error:function(err){
							console.log("人数升序请求失败");
							console.log(err);
						}
					});
					//	人数升序分页
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
			    					url:join+"activity/sort/?page="+page,
			    					type:"post",
			    					dataType:"json",
									data:{token:token,sort:sort1},
									success:function(data){
										that.kak=data.info.data;
										if (that.kak.length==0) {
											sw=false;
											return;
										}else{
											page++;
											for (var i = 0; i<that.kak.length;i++) {
												if (that.kak[i].faburen.length>4) {
													that.kak[i].faburen=that.kak[i].faburen.substring(0,4)+"...";
												}
												if (that.kak[i].tit.length>17) {
													that.kak[i].tit=that.kak[i].tit.substring(0,17)+"...";
												}
											}
											that.kajiji=that.kajiji.concat(that.kak);
											console.log("人数升序分页请求成功，长度为："+that.kak.length+" 总长度为："+that.kajiji.length+" 页码变为："+page);
											sw=true;
										}
									},
						  			error:function(err){
										console.log("请求失败");
										console.log(err);
									}
			    				});
			    			}
			    			return page;
			    		}
			    	});
					this.a=1;
					return;
	    		}
	    	},
	    	//综合排序
	    	zonghe:function(){
	    		this.main=false;
	    		this.search=false;
	    		this.sort=true;
	    		this.typeshow=false;
	    		var token = window.localStorage.getItem("token");
	    		var that = this;
	    		$(".shang").css("border-bottom","5px solid #999999");
				$(".xia").css("border-top","5px solid #999999");
				var page = 1;
				var sort = "zonghe";
				$.ajax({
					type:"post",
					url:join+"activity/sort/?page="+page,
					dataType:"json",
					data:{token:token,sort:sort},
					success:function(data){
						page++;
						that.kajiji=data.info.data;
						for (var i = 0; i<that.kajiji.length;i++) {
							if (that.kajiji[i].faburen.length>4) {
								that.kajiji[i].faburen=that.kajiji[i].faburen.substring(0,4)+"...";
							}
							if (that.kajiji[i].tit.length>17) {
								that.kajiji[i].tit=that.kajiji[i].tit.substring(0,17)+"...";
							}
						}
						console.log("综合排序请求成功，长度为："+that.kajiji.length+" 页码变为："+page);
					},
					error:function(err){
						console.log("综合排序请求失败");
						console.log(err);
					}
				});
				//	人数升序分页
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
		    					url:join+"activity/sort/?page="+page,
		    					type:"post",
		    					dataType:"json",
								data:{token:token,sort:sort},
								success:function(data){
									that.kak=data.info.data;
									if (that.kak.length==0) {
										sw=false;
										return;
									}else{
										page++;
										for (var i = 0; i<that.kak.length;i++) {
											if (that.kak[i].faburen.length>4) {
												that.kak[i].faburen=that.kak[i].faburen.substring(0,4)+"...";
											}
											if (that.kak[i].tit.length>17) {
												that.kak[i].tit=that.kak[i].tit.substring(0,17)+"...";
											}
										}
										that.kajiji=that.kajiji.concat(that.kak);
										console.log("综合排序分页请求成功，长度为："+that.kak.length+" 总长度为："+that.kajiji.length+" 页码变为："+page);
										sw=true;
									}
								},
					  			error:function(err){
									console.log("请求失败");
									console.log(err);
								}
		    				});
		    			}
		    			return page;
		    		}
		    	});
	    	},
	    	//价格排序
	    	price:function(){
	    		this.main=false;
	    		this.search=false;
	    		this.sort=true;
	    		this.typeshow=false;
	    		var that =this;
	    		var token=window.localStorage.getItem("token");
	    		$(".shang").css("border-bottom","5px solid #999999");
				$(".xia").css("border-top","5px solid #999999");
				//价格降序
				if (this.a==1) {
					var page = 1;
					var sort="pricedesc";
					$("#jiage>.shang").css("border-bottom","5px solid #999999");
					$("#jiage>.xia").css("border-top","5px solid #FAE74F");
					$.ajax({
						type:"post",
						url:join+"activity/sort/?page="+page,
						dataType:"json",
						data:{sort:sort,token:token},
						success:function(data){
							page++;
							that.kajiji=data.info.data;
							for (var i = 0; i<that.kajiji.length;i++) {
								if (that.kajiji[i].faburen.length>4) {
									that.kajiji[i].faburen=that.kajiji[i].faburen.substring(0,4)+"...";
								}
								if (that.kajiji[i].tit.length>17) {
									that.kajiji[i].tit=that.kajiji[i].tit.substring(0,17)+"...";
								}
							}
							console.log("价格降序请求成功，长度为："+that.kajiji.length+" 页码为："+page);
						},
						error:function(err){
							console.log("价格降序请求失败");
						}
					});
					//	价格降序分页
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
			    					url:join+"activity/sort/?page="+page,
			    					type:"post",
			    					dataType:"json",
									data:{token:token,sort:sort},
									success:function(data){
										that.kak=data.info.data;
										if (that.kak.length==0) {
											sw=false;
											return;
										}else{
											page++;
											for (var i = 0; i<that.kak.length;i++) {
												if (that.kak[i].faburen.length>4) {
													that.kak[i].faburen=that.kak[i].faburen.substring(0,4)+"...";
												}
												if (that.kak[i].tit.length>17) {
													that.kak[i].tit=that.kak[i].tit.substring(0,17)+"...";
												}
											}
											that.kajiji=that.kajiji.concat(that.kak);
											console.log("价格降序分页请求成功，长度为："+that.kak.length+" 总长度为："+that.kajiji.length+" 页码变为："+page);
											sw=true;
										}
									},
						  			error:function(err){
										console.log("请求失败");
										console.log(err);
									}
				    			});
			    			}
			    			
			    		}
			    	});
					this.a=2;
					return;
				}
				//价格升序
				if (this.a==2) {
					var sort="priceasc";
					var page = 1;
					$("#jiage>.shang").css("border-bottom","5px solid #FAE74F");
					$("#jiage>.xia").css("border-top","5px solid #999999");
					$.ajax({
						type:"post",
						url:join+"activity/sort/?page="+page,
						dataType:"json",
						data:{sort:sort,token:token},
						success:function(data){
							that.kajiji=data.info.data;
							for (var i = 0; i<that.kajiji.length;i++) {
								if (that.kajiji[i].faburen.length>4) {
									that.kajiji[i].faburen=that.kajiji[i].faburen.substring(0,4)+"...";
								}
								if (that.kajiji[i].tit.length>17) {
									that.kajiji[i].tit=that.kajiji[i].tit.substring(0,17)+"...";
								}
							}
							page++;
							console.log("价格升序请求成功,长度为："+that.kajiji.length+" 页码变为："+page);
						},
						error:function(err){
							console.log("价格降序请求失败");
						}
					});
					//	价格升序分页
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
			    					url:join+"activity/sort/?page="+page,
			    					type:"post",
			    					dataType:"json",
									data:{token:token,sort:sort},
									success:function(data){
										that.kak=data.info.data;
										if (that.kak.length==0) {
											sw=false;
											return;
										}else{
											page++;
											for (var i = 0; i<that.kak.length;i++) {
												if (that.kak[i].faburen.length>4) {
													that.kak[i].faburen=that.kak[i].faburen.substring(0,4)+"...";
												}
												if (that.kak[i].tit.length>17) {
													that.kak[i].tit=that.kak[i].tit.substring(0,17)+"...";
												}
											}
											that.kajiji=that.kajiji.concat(that.kak);
											console.log("价格升序分页请求成功，长度为："+that.kak.length+" 总长度为："+that.kajiji.length+" 页码变为："+page);
											sw=true;
										}
									},
						  			error:function(err){
										console.log("请求失败");
										console.log(err);
									}
			    				});
			    			}
			    			return page;
			    		}
			    	});
					this.a=1;
					return;
				}
	    	},
	    	//时间排序
	    	time:function(){
	    		this.main=false;
	    		this.search=false;
	    		this.sort=true;
	    		this.typeshow=false;
	    		var that =this;
	    		var token=window.localStorage.getItem("token");
	    		$(".shang").css("border-bottom","5px solid #999999");
				$(".xia").css("border-top","5px solid #999999");
				//时间降序
				if(this.a==1){
					var sort="timedesc";
					$("#shijian>.shang").css("border-bottom","5px solid #999999");
					$("#shijian>.xia").css("border-top","5px solid #FAE74F");
					var page=1;
					$.ajax({
						type:"post",
						url:join+"activity/sort/?page="+page,
						dataType:"json",
						data:{sort:sort,token:token},
						success:function(data){
							that.kajiji=data.info.data;
							for (var i = 0; i<that.kajiji.length;i++) {
								if (that.kajiji[i].faburen.length>4) {
									that.kajiji[i].faburen=that.kajiji[i].faburen.substring(0,4)+"...";
								}
								if (that.kajiji[i].tit.length>17) {
									that.kajiji[i].tit=that.kajiji[i].tit.substring(0,17)+"...";
								}
							}
							page++;
							console.log("时间降序请求成功，长度为："+that.kajiji.length+" 页码变为:"+page);
						},
						error:function(err){
							console.log("时间降序请求失败");
						}
					});
					//	时间降序分页
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
			    					url:join+"activity/sort/?page="+page,
			    					type:"post",
			    					dataType:"json",
									data:{token:token,sort:sort},
									success:function(data){
										that.kak=data.info.data;
										if (that.kak.length==0) {
											sw=false;
											return;
										}else{
											page++;
											for (var i = 0; i<that.kak.length;i++) {
												if (that.kak[i].faburen.length>4) {
													that.kak[i].faburen=that.kak[i].faburen.substring(0,4)+"...";
												}
												if (that.kak[i].tit.length>17) {
													that.kak[i].tit=that.kak[i].tit.substring(0,17)+"...";
												}
											}
											that.kajiji=that.kajiji.concat(that.kak);
											console.log("时间降序分页请求成功，长度为："+that.kak.length+" 总长度为："+that.kajiji.length+" 页码变为："+page);
											sw=true;
										}
									},
						  			error:function(err){
										console.log("请求失败");
										console.log(err);
									}
			    				});
			    			}
			    		}
			    	});
					this.a=2;
					return;
				}
				//时间升序
				if (this.a==2) {
					var sort = "timeasc";
					$("#shijian>.shang").css("border-bottom","5px solid #FAE74F");
					$("#shijian>.xia").css("border-top","5px solid #999999");
					var page=1;
					$.ajax({
						type:"post",
						url:join+"activity/sort/?page="+page,
						dataType:"json",
						data:{sort:sort,token:token},
						success:function(data){
							that.kajiji=data.info.data;
							for (var i = 0; i<that.kajiji.length;i++) {
								if (that.kajiji[i].faburen.length>4) {
									that.kajiji[i].faburen=that.kajiji[i].faburen.substring(0,4)+"...";
								}
								if (that.kajiji[i].tit.length>17) {
									that.kajiji[i].tit=that.kajiji[i].tit.substring(0,17)+"...";
								}
							}
							page++;
							console.log("时间升序请求成功,长度为："+that.kajiji.length+" 页码变为："+page);
						},
						error:function(err){
							console.log("时间升序请求失败");
						}
					});
					//	时间升序分页
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
			    					url:join+"activity/sort/?page="+page,
			    					type:"post",
			    					dataType:"json",
									data:{token:token,sort:sort},
									success:function(data){
										that.kak=data.info.data;
										if (that.kak.length==0) {
											sw=false;
											return;
										}else{
											page++;
											for (var i = 0; i<that.kak.length;i++) {

												if (that.kak[i].faburen.length>4) {
													that.kak[i].faburen=that.kak[i].faburen.substring(0,4)+"...";
												}
												if (that.kak[i].tit.length>17) {
													that.kak[i].tit=that.kak[i].tit.substring(0,17)+"...";
												}
											}
											that.kajiji=that.kajiji.concat(that.kak);
											console.log("时间升序分页请求成功，长度为："+that.kak.length+" 总长度为："+that.kajiji.length+" 页码变为："+page);
											sw=true;
										}
									},
						  			error:function(err){
										console.log("请求失败");
										console.log(err);
									}
			    				});
			    			}
			    			return page;
			    		}
			    	});
					this.a=1;
					return;
				}
	    	}
	    },
	    mounted(){
	    	var token = window.localStorage.getItem("token");
	    	if(!token){
	    		window.location.href="#/login";
	    	}
	    	//获取活动分类
			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"activity/type",
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				that.info=data.info;
		  				console.log("获取活动分类成功,length:  "+that.info.length);
		  			},
		  			error:function(err){
						console.log("请求失败");
						console.log(err);
					}
				});
		  		return;
			})
			//获取主体内容---调用搜索的接口，tit
			this.$nextTick(()=>{
				//首页跳转传递参数
				if(this.$route.query.index+1){
					this.type(this.$route.query.id,this.$route.query.index)
				}else{
					//自动调用全部分类获取内容
					this.all();
				}
			})
	    }
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
	.activity_ms{
		width: 100%;
	    height: 65rem;
	    position: fixed;
	    top: 0rem;
	    z-index: -1;	
	}
	.activity{
		width: 100%;
	}
	.activity>div{
		background: white;
	}
	.heads1{
		width: 100%;
		height: 3.7rem;
	}
	.heads1 i{
		font-size: 1.5rem;
	}
	.heads1>input{
		width: 17rem;
	    height: 2rem;
	    margin: auto;
	    background:rgba(238,238,238,1);
		opacity:0.5;
		border-radius:1.2rem;
	    padding: 0% 13%;
	    margin-top: 1rem;
	    margin-left: 2.8rem;
	}
	.search1{
		position: absolute;
	   	left: 4.2rem;
	    top: 1.4rem;
	    z-index: 88;
	}
	.A_nav{
		width: 100%;
		height: 3.7rem;
		overflow: scroll;
	}
	::-webkit-scrollbar {
	  display: none;
	}
	.A_nav>ul{
		width: 180%;
		height: 3.7rem;
		overflow: scroll;
	}
	.A_nav>ul>li{
		padding: 0px 10px;
	    height: 3.5rem;
	    margin-left: 1rem;
	    text-align: center;
	    line-height: 3.5rem;
	    list-style: none;
	    float: left;
	    font-size: 1.4rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.ss{
		border-bottom: 0.2rem solid #FAE64F;
		color: #FAE64F !important;
	}
	.jjs{
		color: #FAE64F;
	}
	hr{
		width: 100%;
		height: 0.5rem;
		background: #EDEDED;
	}
	.screening{
		width: 100%;
		height: 3.25rem;
		margin-top: 0.1rem;
	}
	.screening>ul{
		width: 100%;
	}
	.screening>ul>li{
		float: left;
		width: 20%;
		height: 3.25rem;
		font-size: 1.4rem;
		line-height: 3.25rem;
		text-align: center;
		position: relative;
	}
	.screening>ul>li:nth-child(n+2){
		margin-left: 6%;
	}
	.shang{
		width: 0;
		height: 0;
		border-left: 0.4rem solid transparent;
	    border-right: 0.4rem solid transparent;
	    border-bottom: 0.5rem solid #999999;
	    position: absolute;
	    right: 13%;
	    top: 35%;
	}
	.xia{
		width: 0;
		height: 0;
		border-left: 0.4rem solid transparent;
	    border-right: 0.4rem solid transparent;
	    border-top: 0.5rem solid #999999;
	    position: absolute;
	    right: 13%;
	    top: 55%;
	}
	.love1{
		width: 100%;
		margin-top: 2%;
		padding-bottom: 5.5rem;
	}
	.love1>ul{
		width: 100%;
	}
	.love1>ul>li{
		width: 46%;
	    float: left;
/*	    padding: 2% 2% 0% 2%;*/
		margin-left: 3%;  
	    background: white;
	}
	.love1>ul>li>img{
		width: 100%;
	    height: 8.4rem;
	    border-radius: 0.5rem;
	}
	.love1>ul>li>p{
		margin-left: 2%;
		text-align: left;
	}
	.Ph11{
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Bold;
	    color: rgba(51,51,51,1);
	    overflow: hidden;
	}
	.Ph11>span{
		font-weight: bold;
	    color: #333333;
	    font-family: PingFang-SC-Bold;
	    font-size: 1.4rem;
	}
	.Ph22{
		font-size: 1.1rem;
	    margin-top: 0.5rem;
	    margin-bottom: 0.5rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	.col{
		color: #FAE64F;
	}
	.col_s1{
		margin-left: 44%!important;
	}
	.Ph22>span:last-child{
		display: inline-block;
	    float: right;
	    margin-right: 3%;
	}
	/*底部*/
	.footer{
		width: 100%;
		height: 4.2rem;
		position: fixed;
		bottom: 0%;
		z-index: 999;
		background: white;
		border-top: 0.1rem solid #F0F0F0;
	}
	.footer>ul{
		width: 100%;
		height: 4.2rem;
	}
	.footer>ul>li{
		width: 15%;
	    height: 4.2rem;
	    float: left;
	    text-align: center;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(51,51,51,1);
	    margin-left: 4%;
	}
	.footer>ul>li>i{
		display: inline-block;
		font-size: 2rem;
		margin-top: 10%;
	}
	.release{
		position: relative;
		bottom: 45%;
	}
	.release>p{
		width: 3.5rem;
	    height: 3.5rem;
	    background: #FAE64F;
	    border-radius: 50%;
	    text-align: center;
	    line-height: 2.5rem;
	    margin-left: 13%;
	}
	.release>p>img{
		width: 100%;
		height: 100%;
	}
	.release>span{
		position: absolute;
	    bottom: -30%;
	    right: 28%;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(51,51,51,1);
	}
</style>