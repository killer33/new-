<template>
	<!--首页-->
	<div class="Home">
		<div class="heads">
			<i class="iconfont search">&#xe615;</i>
			<input type="text" name="" id="" value="" placeholder="搜索您感兴趣的公司"/>
			<i class="iconfont mess">&#xe628;</i>
		</div>
	    <!--vant组件轮播图-->
	   	<van-swipe :autoplay="3000" indicator-color="#FAE64F" class="swiper">
		  <van-swipe-item v-for="(item, index) in banner" :key="index">
		    <img :src="imgUrl+item.banner" class="swiperImg"/>
		    <a :href="item.url"></a>
		  </van-swipe-item>
		</van-swipe>
		<button @click="ceshi()"></button>
		<p class="options">
			<span :class="{'dds':current==0}" class="xxs" @click="qiye">企业</span> 
			<span>/</span>
			<span :class="{'dds':current==1}" class="xxs" @click="huodong">活动</span>
		</p>
		<van-swipe indicator-color="#FAE64F"  :loop="false" class="swiper swiper2" @change="onChange" ref="hotlunb">
		  <van-swipe-item >
		    <div class="fl">
				<ul>
					<li v-for="(item,index) in enterclassc" :key="index">
						<div>
							<img :src="item.company_type_pic"/>
						</div>
						<p>{{item.company_type}}</p>
						<router-link :to="{path:'/enterprise',query:{index:index,id:item.id}}" tag="a"></router-link>
					</li>
				</ul>
			</div>
		  </van-swipe-item>
		  <van-swipe-item >
		    <div class="fl">
				<ul>
					<li v-for="(item,index) in activityclassc" :key="index">
						<div>
							<img :src="item.activity_pic"/>
						</div>
						<p>{{item.activity_type}}</p>
						<router-link :to="{path:'/activity',query:{index:index,id:item.id}}" tag="a"></router-link>
					</li>
				</ul>
			</div>
		  </van-swipe-item>
		</van-swipe>
		<hr />
		<!--猜你喜欢-->
		<div class="guesslove">
			<p><router-link to="" tag="span">猜你喜欢</router-link>
				<router-link  @click.native="refresh" to="/homeMoreActivities" tag="span" v-show="hasMoreActivity">查看更多 <i class="iconfont">&#xe61f;</i></router-link>
			</p>
			<div class="love" v-show="hasactivity">
				<ul>
					<router-link to="/buy" tag="li" v-for="(item,index) in gussActivity" :key="index">
						<img :src="imgUrl+item.pic"/>
						<p class="Ph1"><span>{豌豆思维}</span>{{item.tit}}</p>
						<p class="Ph2">{{parseInt(item.start) | datetimeFilte}}<span>{{item.address}}</span></p>
					</router-link>
				</ul>
			</div>
			<div class="EmptyAcLi" v-show="!hasactivity">
				<p class="EmptyAc">———————— &nbsp;空空如也！&nbsp;  ————————</p>
			</div>
		</div>
		<hr />
		<!--推荐企业-->
		<div class="tjqy">
				<p><router-link to="" tag="span" >推荐企业</router-link>
					<router-link  @click.native="refresh" to="/homeMoreCompanies" tag="span" v-show="hasMorecompany">查看更多<i class="iconfont">&#xe61f;</i></router-link>
				</p>
			<div class="tj" v-show="hasTuicompany">
				<ul>
					<li v-for="(item,index) in Reccompany" :key="index">
						<router-link tag="div" :to="'/enterpriseintroduction/'+item.id"   @click.native="flushCom">
							<div class="tup">
								<img :src="imgUrl+item.logo_src"/>
							</div>
							<div class="fus">
								<p class="q">{{item.company_name}}</p>
								<p class="w">{{item.company_address}}</p>
								<p class="r">已关注：<span>{{item.follow_num}}</span>人</p>
								<p class="t">入驻资金：<span>￥<span>{{item.money}}</span></span></p>								
							</div>
						</router-link>
						<p v-show="hasfollow" class="e" :class="{'hasfollow':item.is_follow=='已关注'}" @click="follow_company(Reccompany,index)">{{item.is_follow}}</p>
					</li>
				</ul>
			</div>
			<div class="EmptyAcLi" v-show="!hasTuicompany">
				<p class="EmptyAc">———————— &nbsp;空空如也！&nbsp;  ————————</p>
			</div>
		</div>
		<!--推荐企业-->
		<hr />
		<!--底部-->
		<div class="footer">
			<ul>
				<router-link to="/Home" tag="li">
					<i class="iconfont" style="color:#FAE64F">&#xe619;</i><br />
					<span style="color:#FAE64F">首页</span>
				</router-link>
				<router-link to="/activity" tag="li">
					<i class="iconfont">&#xe687;</i><br />
					<span>活动</span>
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
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		data(){
			return{
				banner: [],
			    current:0,
			    enterclassc:[],
			    activityclassc:[],
			    imgUrl:'',
			    gussActivity:[],//猜你喜欢
			    Reccompany:[],//推荐企业
			    hasfollow:false,//是否出现关注
				hasactivity:false,//是否有猜你喜欢活动
		  		hasMoreActivity:false,//是否有四条以上有活动
			    hasTuicompany:false,//是否有推荐企业
			    hasMorecompany:false,//是否有更多推荐企业
			    
			}
		},
		methods:{
			flushCom:function(){
				this.$router.go(0); 
			},
			onChange(index){
	        	this.current=index;
	        },
	        qiye(){
	       		this.current=0;
	       		this.$refs.hotlunb.swipeTo(0);
	        },
	        huodong(){
	       		this.current=1;
	       		this.$refs.hotlunb.swipeTo(1);
	        },
	        refresh(){
	        	this.$router.go(0);
	        },
	       	flushCom(){
				document.documentElement.scrollTop = 0;
				var backtop=setInterval(()=>{
					document.documentElement.scrollTop = 0
					clearInterval(backtop);
				},100)
			},
	        follow_company(type,index){
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
			  				that.$message.warning("关注成功！");
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
		  	var mySwiper = new Swiper('.swiper-container', {});
		  	this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/invitation",
					dataType:"json",
					data:{token:token},
					success:function(data){
//						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				
				$.ajax({
					type:"post",
					url:join+"index/banner",
					dataType:"json",
					data:{},
					success:function(data){
//						console.log(data);
//						for(var i=0;i<data.data.length;i++){
//							that.images.push(imgJoin+data.data[i].banner);
//						}
						that.banner=data.data;
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				$.ajax({
					type:"post",
					url:join+"index/get_company_type",
					dataType:"json",
					data:{},
					success:function(data){
//						console.log(data);
						that.enterclassc=data.data;
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				$.ajax({
					type:"post",
					url:join+"index/get_activity_type",
					dataType:"json",
					data:{},
					success:function(data){
//						console.log(data);
						that.activityclassc=data.data;
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//猜你喜欢
				$.ajax({
					type:"post",
					url:join+"index/love_activity",
					dataType:"json",
					data:{},
					success:function(data){
						console.log(data);
						that.gussActivity=data.data;
						//判断活动
						if(that.gussActivity.length==0){
							that.hasactivity=false;
							that.hasMoreActivity=false;
						}else if(that.gussActivity.length<=4){
							that.hasactivity=true;
							that.hasMoreActivity=false;
						}else if(that.gussActivity.length>4){
							that.hasactivity=true;
							that.hasMoreActivity=true;
							that.gussActivity=that.gussActivity.splice(0,4);
						}
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				//推荐企业
				$.ajax({
					type:"post",
					url:join+"index/love_company",
					dataType:"json",
					data:{},
					success:function(data){
//						console.log(data);
						that.Reccompany=data.data;
						if(data.uid){
							that.hasfollow=true;
						}else{
							that.hasfollow=false;
						}
						
						for (var i=0;i<that.Reccompany.length;i++){
							if (that.Reccompany[i].is_follow==0) {								
								that.Reccompany[i].is_follow="+关注";
							}else{
								that.Reccompany[i].is_follow="已关注";
							}
						}
						//判断推荐企业
						if(that.Reccompany.length==0){
							that.hasTuicompany=false;
							that.hasMorecompany=false;
						}else if(that.Reccompany.length<=3){
							that.hasTuicompany=true;
							that.hasMorecompany=false;
						}else if(that.Reccompany.length>3){
							that.hasTuicompany=true;
							that.hasMorecompany=true;
							that.Reccompany=that.Reccompany.splice(0,3);
						}
					},
					error:function(err){
						console.log("请求失败");
					}
				});
			})
		  	
		}
	}	
</script>

<style scoped="scoped">
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
	.Home{
		width: 100%;
		background: white;
	}
	.heads{
		width: 100%;
		height: 3rem;
	}
	.heads i:first-child{
		font-size: 1.7rem;
	}
	.heads>input{
		width: 55%;
	    height: 2rem;
	    border: 0.1rem solid #eee;
	    margin: auto;
	    border-radius: 2.5rem;
	    padding: 0% 13%;
	    margin-top: 2%;
	    margin-left: 5%;
	}
	.search{
		position: absolute;
	    left: 10%;
	    top: 2%;
	}
	.mess{
		position: relative;
	    right: -2%;
	    top: 13%;
	    font-size: 2.4rem;
	}
	/*vant轮播图*/
	.swiper{
		width: 90%;
		height: 17rem;
		margin:0 auto;
		margin-top: 2%;
	    margin-bottom: 2%;
	    border-radius:0.5rem;
	} 
	.swiper .van-swipe-item>a{
		position: absolute;
		top: 0;
		display: block;
		height: 100%;
		width: 100%;
	}
	.swiper2{
		height: 15rem;
	}
	.swiperImg{
		width: 100%;
		height: 100%;
	}
	.options{
		margin-left: 5%;
	}
	.options span{
		font-size: 1.7rem;
	}
	.options>.xxs{
		font-size: 1.4rem;
		color: #000000; 
	}
	.options>.xxs.dds{
		font-size: 1.7rem !important;
		color: #FAE64E;
		border-bottom: 0.2rem solid #FAE64E;
	}
	.fl{
		width: 100%;
		height: 15rem;
		margin-top: 3%;
		position: relative;
		/*border: 1px solid red;*/
	}
	.fl>ul{
		width: 100%;
	}
	.fl>ul>li{
		float: left;
		width: 25%;
		height: 6rem;
		margin-bottom: 2%;
		position: relative;
		/*border: 1px solid red;*/
	}
	.fl>ul>li>div{
		width: 3.3rem;
	    margin: auto;
	    height: 3.3rem;
	    border-radius: 50%;
	}
	.fl>ul>li>div>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		/*border: 1px solid red;*/
	}
	.fl>ul>li>p{
		width: 100%;
	    height: 2rem;
	    line-height: 2rem;
	    text-align: center;
	    margin-top: 10%;
	    font-size: 1.5rem;
	}
	.fl>ul>li>a{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
	}
	hr{
		width: 100%;
		height: 0.3rem;
		background: #F8F8F8;
	}
	/*猜你喜欢*/
	.Home .guesslove{
		width: 100%;
/*		height: 31rem;*/
	}
	.Home .guesslove>p{
		width: 100%;
		height: 3rem;
		line-height: 3rem;	
	}
	.Home .guesslove>p>span:first-child{
		margin-left: 3%;
	    font-size: 1.6rem;
	    font-weight: bold;
	}
	.Home .guesslove>p>span:last-child{
		margin-left: 60%;
	}
	.love{
		width: 100%;
	}
	.love>ul{
		width: 100%;
	}
	.love>ul>li{
		width: 45%;
	    height: 15rem;	
	    float: left;
	    margin-left: 3%;  
	}
	.love>ul>li:nth-child(n+3){
		 margin-top: 3%;
	}
	.love>ul>li>img{
		width: 100%;
	    height: 8rem;
	    margin-left: 0%;
	    border-radius: 0.5rem;
	}
	.love>ul>li>p{

		margin-left: 2%;
		margin-top: 2%;
		text-align: left;
		overflow: hidden;
	}
	.Ph1{
		
		height: 2.7rem;
		font-size: 1.3rem;
		margin-left: 4% !important;
	}
	.Ph1>span{
		font-weight: bold;
/*		display: inline-block;*/
		width: 40%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.Ph2{
		color: #A1A1A1;
	}
	.Ph2>span{
		margin-left: 10%;
	}
	/*推荐企业*/
	.tjqy{
		width: 100%;
		margin-bottom: 7rem;
	}
	.tjqy>p{
		width: 100%;
		height: 3rem;
		line-height: 3rem;	
	}
	.tjqy>p>span:first-child{
		margin-left: 3%;
	    font-size: 1.6rem;
	    font-weight: bold;
	}
	.tjqy>p>span:last-child{
		margin-left: 60%;
	}
	.tj{
		width: 100%;
	}
	.tj>ul{
		width: 100%;
	}
	.tj>ul>li{
	    height: 8rem;
	    margin-left: 3%;
	    position: relative;
	}
	.tj>ul>li:nth-child(n+2){
		margin-top: 2%;
	}
	.tup{
		width: 35%;
	    height: 8rem;
	    float: left;
    }
	.tup>img{
		width: 100%;
		height: 8rem;
		border-radius: 0.5rem;
	}
	.fus{
		width: 59%;
	    height: 8rem;
	    float: left;
	    position: relative;
	}
	.q{
		width: 100%;
		text-align: left;
		font-size: 1.5rem;
		font-family: "微软雅黑";
		margin-left: 4%;
	}
	.w{
		text-align: left;
		margin-top: 2%;
		margin-left: 4%;
	}
	.r{
		width: 40%;
	    height: 1.2rem;
	    text-align: left;
	    margin-top: 2%;
	    margin-left: 4%;
	    color: #FAE64F;
	}
	.t{
		margin-top: 2%;
	    margin-top: 7%;
	    text-align: left;
	    margin-left: 4%;
	}
	.t>span{
		color: red;
		font-weight: bold;
	}
	.t>span>span{
		font-size: 1.7rem;
	}
	/*关注按钮*/
	.e{
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
	.e.hasfollow{
		background:#F0F0F0;
	}
	/*暂无推荐企业文字*/
	.EmptyAcLi{
		height: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.EmptyAcLi>.EmptyAc{
		font-size: 1rem;
		color: #B0B0B0;
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