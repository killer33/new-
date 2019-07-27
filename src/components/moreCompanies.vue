<template>
	<!--更多企业-->
	<div class="moreCompanies">
		<div class="head2">
			<p  @click="$router.back(-1)" ><i class="iconfont">&#xe646;</i></p>
			<p>企业</p>
		</div>
		<div class="tj1">
			<ul>
				<li v-for="(item,index) in typedatas" :key="index">
					<router-link tag="div" :to="'/enterpriseintroduction/'+item.id"  @click.native="flushCom">
						<div class="tup1">
							<img :src="imgUrl+item.logo_src"/>
						</div>
						<div class="fus1">
							<p class="q1">{{item.company_name}}</p>
							<p class="w1">{{item.company_address}}</p>
							<p class="r1">已关注：<span>{{item.follow_num}}</span>人</p>
							<p class="t1">入驻资金：<span>￥<span>{{item.money}}</span></span></p>
						</div>
					</router-link>
					<p class="e1" :class="{'hasfollow':item.is_follow=='已关注'}" @click="follow_company(typedatas,item.id,index)">{{item.is_follow}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				typedatas:[],
				imgUrl:''
			}
		},
		methods:{
			flushCom:function(){
				document.documentElement.scrollTop = 0;
				var backtop=setInterval(()=>{
					document.documentElement.scrollTop = 0
					clearInterval(backtop);
				},100)
			},
			follow_company(type,id,index){
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
			this.imgUrl=imgJoin;
			this.$nextTick(()=>{
				var company_type_id = this.$route.query.type_id;
				var id=this.$route.query.cid;
				console.log(company_type_id,id);
	    		var page = 1;
	    		var token = window.localStorage.getItem("token");
	    		var that = this;
	    		$.ajax({
					type:"post",
//					url:join+"company/show_more_company/?="+company_type_id+"&page="+page,
					url:join+"company/show_more_company",
					dataType:"json",
					data:{token:token,
						company_type_id:company_type_id,
						id:id,
						page:page
					},
					success:function(data){
						console.log("企业分类请求成功&id="+company_type_id);
						console.log(data.data.data);
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
								url:join+"company/show_more_company",
		    					type:"post",
		    					data:{token:token,
									company_type_id:company_type_id,
									id:id,
									page:page
								},
		    					dataType:'json',
		    					success:function(data){
//									console.log("企业分类分页请求成功");
									that.kak = data.data.data;

									console.log(that.kak);
									for (var i=0;i<that.kak.length;i++) {
										if (that.kak[i].is_follow==0) {
											that.kak[i].is_follow="+关注";
										}else{
											that.kak[i].is_follow="已关注";
										}
									}
									that.typedatas=that.typedatas.concat(that.kak);
									console.log(that.typedatas);
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
	.moreCompanies{
		width: 100%;
		background-color:#fff ;
		padding-bottom: 1rem;
	}
	.head2{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.head2>p{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.head2>p:nth-child(2){
		margin-left: 35%;
		font-size: 15px;
	}
	.tj1{
		width: 100%;
		margin-top: 2%;
	}
	.tj1>ul{
		width: 100%;
	}
	.tj1>ul>li{
	    height: 8rem;
	    margin-left: 3%;
	    position:relative;
	}
	.tj1>ul>li:nth-child(n+2){
		margin-top: 2%;
	}
	.tup1{
		width: 35%;
	    height: 8rem;
	    float: left;
    }
	.tup1>img{
		width: 100%;
		height: 8rem;
		border-radius: 5px;
	}
	.fus1{
		width: 59%;
	    height: 8rem;
	    float: left;
	    position: relative;
	}
	.q1{
		width: 100%;
		text-align: left;
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 4%;
	}
	.w1{
		text-align: left;
		margin-top: 2%;
		margin-left: 4%;
		width: 70%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
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
		margin-top: 2%;
	    margin-top: 7%;
	    text-align: left;
	    margin-left: 4%;
	}
	.t1>span{
		color: red;
		font-weight: bold;
	}
	.t1>span>span{
		font-size: 17px;
	}
	.e1{
		width: 4.2rem;
	    background: rgba(250,231,79,1);
	    border-radius: 5px;
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
	.e1.hasfollow{
		background:#F0F0F0;
	}
</style>