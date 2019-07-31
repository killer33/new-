<template>
	<!--企业-->
	<div class="enterprise">
		<div class="heads1">
			<i class="iconfont search1">&#xe615;</i>
			<form action="" method="">
				<input type="text" name="" id="" value="" placeholder="搜索您感兴趣的公司" @click="enterprise_search" class="search_input"/>
			</form>
		</div>
		<div class="nav" ref="fenleinav">
			<ul>
				<li :class="{'ss':clicked==-1}" @click="all">全部</li>
				<li v-for="(item,index) in info" :key="index" :class="{'ss':clicked==index}" @click="type(item.id,index)">{{item.company_type}}</li>
			</ul>
		</div>
		<hr />
		<div class="tj4">
			<!--企业搜索-->
			<ul v-show="flag1">
					<li v-for="(item,index) in search_ru" :key="index">
						<router-link tag="div" :to="'/enterpriseintroduction/'+item.id">
							<div class="tup4">
								<img :src="imgUrl+item.logo_src"/>
							</div>
							<div class="fus4">
								<p class="q4">{{item.company_name}}</p>
								<p class="w4">{{item.company_address}}</p>
								<p class="r4">已关注：<span>{{item.follow_num}}</span>人</p>
								<p class="t4">入驻资金：<span>￥<span>{{item.money}}</span></span></p>
								
								<i><img src="../../build/vip.png"/></i>
							</div>

						</router-link>
						<p class="e4" :class="{'hasfollow':item.is_follow=='已关注'}" @click="follow_company(search_ru,item.id,index)">{{item.is_follow}} </p>
					</li>
				<li class="EmptyAcLi" v-show="showEmpty">
					<p class="EmptyAc">——————— 暂无企业 ———————</p>
				</li>
			</ul>
			<!--企业分类-->
			<ul v-show="flag2">
				<li v-for="(item,index) in typedatas" :key="index">
					<router-link tag="div" :to="'/enterpriseintroduction/'+item.id">
						<div class="tup4">
							<img :src="imgUrl+item.logo_src"/>
						</div>
						<div class="fus4">
							<p class="q4">{{item.company_name}}</p>
							<p class="w4">{{item.company_address}}</p>
							<p class="r4">已关注：<span>{{item.follow_num}}</span>人</p>
							<p class="t4">入驻资金：<span>￥<span>{{item.money}}</span></span></p>			
							<i><img src="../../build/vip.png"/></i>
						</div>
					</router-link>
					<p class="e4" :class="{'hasfollow':item.is_follow=='已关注'}" @click="follow_company(typedatas,item.id,index)">{{item.is_follow}} </p>
				</li>
				<li class="EmptyAcLi" v-show="showEmpty">
					<p class="EmptyAc">———————暂无企业———————</p>
				</li>
			</ul>
		</div>
		<div class="search_mask" @click="hideSearch"></div>
		<!--底部-->
		<div class="footer">
			<ul>
				<router-link to="/Home" tag="li">
					<i class="iconfont">&#xe619;</i><br />
					<span>首页</span>
				</router-link>
				<router-link to="/activity" tag="li">
					<i class="iconfont">&#xe687;</i><br />
					<span>活动</span>
				</router-link>
				<router-link to="/Release_1" tag="li" class="release">
					<p><img src="../../build/fabu.png"/></p>
					<span>发布</span>
				</router-link>
				<router-link to="" tag="li">
					<i class="iconfont" style="color:#FAE64F">&#xe6b0;</i><br />
					<span style="color:#FAE64F">企业</span>
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
	export default{
		data(){
			return{
				clicked:-1,
				flag:true,//主体
				flag1:false,//企业搜索
				flag2:false,//企业分类
				a:1,
				info:[],//获取企业分类
				search_ru:[],//搜索结果
				typedatas:[],//企业分类
				imgUrl:'',//图片域名地址
				showEmpty:false //展示空
			}
		},
		methods:{
			//企业搜索
			enterprise_search:function(){
				if(this.a==1){
					$(".search_mask").show();
					$(".search1").addClass("search2");
					$(".search_input").addClass("search_input1");
					$(".search_input").val("");
					this.a=2;
					return;
				}
				if (this.a==2) {
					$(".search_mask").hide();
					$(".search1").removeClass("search2");
					$(".search_input").removeClass("search_input1");
					var that = this;
					var page=1;
					var company_name = $(".search_input").val();
					var token = window.localStorage.getItem("token");
					$.ajax({
						type:"post",
						url:join+"company/search/?page="+page,
						dataType:"json",
						data:{company_name:company_name,token:token},
						success:function(data){
							console.log("企业搜索请求成功")
							console.log(data);
							that.search_ru=data.info.data;
							if(that.search_ru.length==0){
								that.showEmpty=true;
							}else{
								that.showEmpty=false;
							}
							for (var i=0;i<that.search_ru.length;i++) {
								if (that.search_ru[i].is_follow==0) {
									that.search_ru[i].is_follow="+关注";
								}else{
									that.search_ru[i].is_follow="已关注";
								}
							}
							page++;
							that.flag=false;
							that.flag2=false;
							that.flag1=true;
						},
						error:function(err){
							console.log(err);
						}
					});
					//	企业搜索-分页
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
			    					url:join+"company/search/?page="+page,
			    					type:"post",
			    					data:{company_name:company_name,token:token},
			    					dataType:'json',
			    					success:function(data){
										console.log("企业搜索-分页请求成功");
										that.kak = data.info.data;

//										console.log(that.search_ru.length);
										for (var i=0;i<that.kak.length;i++) {
											if (that.kak[i].is_follow==0) {
												that.kak[i].is_follow="+关注";
											}else{
												that.kak[i].is_follow="已关注";
											}
										}
										that.search_ru=that.search_ru.concat(that.kak);
										page++;
	//									sw = true;
									},
									error:function(err){
										console.log("请求失败");
									},
			    				});
			    			}
			    			
			    		}
			    	});
					this.a=1;
					return;
				}
			},
			//点击遮罩层退出
			hideSearch(){
				$(".search_mask").hide();
				$(".search1").removeClass("search2");
				$(".search_input").removeClass("search_input1");
			},
			//企业分类
			type:function(item,index){
	    		this.clicked = index;
	    		var company_type_id = item;
	    		var page = 1;
	    		var token = window.localStorage.getItem("token");
	    		var that = this;
	    		$.ajax({
					type:"post",
					url:join+"company/companytype/?company_type_id="+company_type_id+"&page="+page,
					dataType:"json",
					data:{token:token},
					success:function(data){
						console.log("企业分类请求成功&id="+company_type_id);
						console.log(data);
						that.typedatas=data.data.data;
						if(that.typedatas.length==0){
							that.showEmpty=true;
						}else{
							that.showEmpty=false;
						}
						for (var i=0;i<that.typedatas.length;i++) {
							if (that.typedatas[i].is_follow==0) {
								that.typedatas[i].is_follow="+关注";
							}else{
								that.typedatas[i].is_follow="已关注";
							}
						}
						page++;
						that.flag=false;
						that.flag2=true;
						that.flag1=false;
					},
					error:function(err){
						console.log("请求失败"+err);
					}
				});
				//	企业分类点击获取-分页
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
		    					url:join+"company/companytype/?company_type_id="+company_type_id+"&page="+page,
		    					type:"post",
		    					data:{token:token},
		    					dataType:'json',
		    					success:function(data){
//									console.log("企业分类分页请求成功");
									that.kak = data.data.data;

//									console.log(that.typedatas);
									for (var i=0;i<that.kak.length;i++) {
										if (that.kak[i].is_follow==0) {
											that.kak[i].is_follow="+关注";
										}else{
											that.kak[i].is_follow="已关注";
										}
									}
									that.typedatas=that.typedatas.concat(that.kak);
									page++;
//									sw = true;
								},
								error:function(err){
									console.log("请求失败");
								},
		    				});
		    			}
		    			
		    		}
		    	});
			},
			//全部
			all:function(){
				this.clicked=-1;
				var that = this;
				var page=1;
				var company_name = "";
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"company/search/?page="+page,
					dataType:"json",
					data:{company_name:company_name,token:token},
					success:function(data){
//						console.log("全部")
						that.search_ru=data.info.data;
						console.log(that.search_ru);
						if(that.search_ru.length==0){
							that.showEmpty=true;
						}else{
							that.showEmpty=false;
						}
						for (var i=0;i<that.search_ru.length;i++){
							if (that.search_ru[i].is_follow==0) {
								
								that.search_ru[i].is_follow="+关注";
							}else{
								that.search_ru[i].is_follow="已关注";
							}
						}
						page++;
						that.flag=false;
						that.flag2=false;
						that.flag1=true;
					},
					error:function(err){
						console.log(err);
					}
				});
				//	企业搜索-分页
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
		    					url:join+"company/search/?page="+page,
		    					type:"post",
		    					data:{company_name:company_name,token:token},
		    					dataType:'json',
		    					success:function(data){
									console.log("请求成功");
									that.kak = data.info.data;

									for (var i=0;i<that.kak .length;i++) {
										console.log(that.kak [i].is_follow);
										if (that.kak [i].is_follow==0) {
											that.kak [i].is_follow="+关注";
										}else{
											that.kak [i].is_follow="已关注";
										}
									}
//									console.log(that.search_ru);
									that.search_ru=that.search_ru.concat(that.kak);
									console.log(that.search_ru);
									page++;
//									sw = true;
								},
								error:function(err){
									console.log("请求失败");
								},
		    				});
		    			}
		    			
		    		}
		    	});
			},
			//关注企业
			follow_company(type,id,index){
				console.log(type[index].is_follow);
				if(type[index].is_follow=="+关注"){
					type[index].is_follow="已关注";
					type[index].follow_num+=1;
					var token = window.localStorage.getItem("token");
					var that=this;
					$.ajax({
						type:"post",
						url:join+"company/toFollow",
						dataType:"json",
						data:{token:token,uid:type[index].uid},
						success:function(data){
//			  				console.log("请求成功");
//			  				console.log(data);
			  				that.$message.success("关注成功！");
			  			},
			  			error:function(err){
							console.log("请求失败"+err);
						}
					});
				}else{
					 this.$message.warning("已经关注过了哦！");
				}
			}
		},
		mounted(){
				
				var token = window.localStorage.getItem("token");
		    	if(!token){
		    		window.location.href="#/login";
		    	}
				//图片域名地址
				this.imgUrl=imgJoin;

				//获取企业分类
				this.$nextTick(()=>{
					var that = this;
					var token = window.localStorage.getItem("token");
					$.ajax({
						type:"post",
						url:join+"company/gettype",
						dataType:"json",
						data:{token:token},
						success:function(data){
//			  				console.log("请求成功");
//			  				console.log(data);
			  				that.info=data.info;
			  			},
			  			error:function(err){
							console.log("请求失败"+err);
						}
					});
				})
				//首页跳转传递参数
				if(this.$route.query.index+1){
					this.type(this.$route.query.id,this.$route.query.index);
					
					if(this.$route.query.index>4){
						this.$refs.fenleinav.scrollTo(-100, dom.scrollTop);
					}
				}else{
					//自动调用全部分类获取内容
					this.all();
				}
				
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
	.search_mask{
		width: 100%;
	    height: 52rem;
	    background: rgba(0,0,0,1);
	    opacity: 0.3;
	    position: fixed;
	    top: 4rem;
	    z-index: 999;
	    display: none;
	}
	.enterprise{
		width: 100%;
	}
	.heads1{
		width: 100%;
		height: 3.7rem;
		background: white;
	}
	.heads1 i{
		font-size: 1.6rem;
	}
	.search_input{
		width: 55%;
	    height: 2rem;
	    line-height: 2rem;
	    margin: auto;
	    padding: 0% 13%;
	    margin-top: 4%;
	    margin-left: 9%;
	    font-size:1.2rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
		background:rgba(238,238,238,1);
		opacity:0.5;
		border-radius:1.2rem;
	}
	.search1{
		position: absolute;
	    left: 4.2rem;
	    top: 1.7rem;
	}
	.search_input1{
		padding: 0% 20% 0% 5%;
	}
	.search2{
		position: absolute;
	    left: 80%;
	}
	.nav{
		width: 100%;
	    height: 3.7rem;
	    overflow: scroll;
	    background: white;
	}
	::-webkit-scrollbar {
	  	display: none;
	}
	.nav>ul{
		width: 157%;
		height: 3.7rem;
	}
	.nav>ul>li{
		padding: 0% 2%;
	    height: 3.5rem;
	    text-align: center;
	    line-height: 3.7rem;
	    list-style: none;
	    float: left;
	    font-size:1.4rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.ss{
		border-bottom: 3px solid #FAE64F;
		color: #FAE64F !important;
	}
	hr{
		width: 100%;
		height: 5px;
		background: #F0F0F0;
	}
	.tj4{
		width: 100%;
	}
	.tj4>ul{
		width: 100%;
	    position: absolute;
	    background: white;
	    margin-bottom: 5.5rem;
	}
	.tj4>ul>li{
	    height: 8.3rem;
	    margin-left: 3%;
	    margin-top: 3%;
	    margin-bottom: 3%;
	    position: relative;
	}
	/*暂无企业*/
	.tj4>ul>li.EmptyAcLi{
		height: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tj4>ul>li.EmptyAcLi>p.EmptyAc{
		font-size: 1.5rem;
		color: #B0B0B0;
	}
	.tup4{
		width: 8.75rem;
	    height: 8.3rem;
	    float: left;
    }
	.tup4>img{
		width: 100%;
		height: 8.3rem;
		border-radius: 0.5rem;
	}
	.fus4{
		width: 65%;
	    height: 8.3rem;
	    float: left;
	    position: relative;
	}
	.q4{
		width: 100%;
	    text-align: left;
	    margin-left: 4%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Bold;
	    font-weight: bold;
	    color: rgba(51,51,51,1);
	}
	.w4{
		width: 70%;
		text-align: left;
		font-family:PingFang-SC-Medium;
		font-size: 1.1rem;
		font-weight: Medium;
		margin-top: 2%;
		margin-left: 4%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.r4{
		width: 40%;
	    height: 1.2rem;
	    text-align: left;
	    margin-top: 2%;
	    margin-left: 4%;
	    font-size:1.2rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(250,231,79,1);
	}
	.t4{
	    margin-top: 7%;
	    text-align: left;
	    font-family: PingFang-SC-Medium;
	    margin-left: 4%;
	    color: #333333;
	}
	.t4>span{
		font-weight: Bold;
	    color: #FF5756;
	    font-family: PingFang-SC-Bold;
	    font-size: 1.1rem;
	}
	.t4>span>span{
		font-size: 1.7rem;
	    font-weight: Bold;
	    color: #FF5756;
	    font-family: PingFang-SC-Bold;
	}
	/*关注按钮*/
	.e4{
		width: 4.2rem;
	    background: rgba(250,231,79,1);
	    border-radius: 0.5rem;
	    height: 2rem;
	    text-align: center;
	    line-height: 2rem;
	    position: absolute;
	    top: 40%;
	    right: 5%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.e4.hasfollow{
		background:#F0F0F0;
	}
	.fus4>i{
		width: 3.5rem;
	    height: 2.5rem;
	    position: absolute;
	    top: 0%;
	    left: -8rem;
	}
	.fus4>i>img{
		width: 100%;
		height: 100%;
	}
	/*底部*/
	.footer{
		width: 100%;
		height: 4.2rem;
		position: fixed;
		bottom: 0%;
		z-index: 888;
		background: white;
		border-top: 1px solid #F0F0F0;
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