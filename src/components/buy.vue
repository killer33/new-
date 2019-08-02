<template>
	<!--购买-->
	<div class="buy">
		<div class="head4" >
			<p @click="backpre"><i class="iconfont">&#xe646;</i></p>
		</div>
		<div class="node">
			<p class="tit">{{activity_data.tit}}</p>
			<p class="price">￥<span>{{activity_data.price}}</span>/人</p>
			<p class="p1">
				<i class="iconfont">&#xe783;</i><span>{{activity_data.click_num | activity_Num}}</span>
			</p>
			<p class="p1">
				<i class="iconfont">&#xe60b;</i><span>{{activity_data.share_num | activity_Num}}</span>
			</p>
			<p class="p2">
				<i class="iconfont">&#xe6cd;</i>
				<span>{{parseInt(activity_data.start) | activity_datetime}}</span>
				<span>-</span>
				<span>{{parseInt(activity_data.end)| activity_datetime}}</span>
			</p>
			<p class="p2">
				<i class="iconfont">&#xe7c8;</i><span>{{activity_data.address}}</span><br /><span class="aderss">{{activity_data.address_info}}</span>
			</p>
			<p class="sqrs">已申请<span>{{activity_data.order_num}}</span>人</p>
			<div class="bz">
				<p><img src="../../build/pg.png"/><span>交易保障</span></p>
			</div>
			<div class="bz1">
				<p><img src="../../build/pg.png"/><span>支持退款</span></p>
			</div>
			<div class="bz2">
				<p><img src="../../build/pg.png"/><span>已认证</span></p>
			</div>
			<div class="bz2"></div>
		</div>
		<div class="tj2">
			<ul>
				<li>
					<router-link tag="div" :to="'/enterpriseintroduction/'+uc.id"  @click.native="flushCom">
						<div class="tup2">
							<img :src="imgUrl+uc.logo_src"/>
						</div>
						<div class="fus2">
							<p class="q2">{{uc.company_name}}</p>
							<p class="w2">{{uc.company_address}}</p>
							<p class="r2">已关注：<span>{{uc.follow_num}}</span>人</p>
							<p class="t2">入驻资金：<span>￥<span>{{uc.money}}</span></span></p>	
						</div>
					</router-link>
					<p class="e2" :class="{'hasfollow':activity_data.is_follow=='已关注'}" @click="follow_company()">{{activity_data.is_follow}}</p>
				</li>
			</ul>
		</div>
		<div class="hdxq">
			<p class="xqtit">活动详情</p>
			<p class="xqsm">{{activity_data.details}}</p>
			<div class="tu">
				<ul>
					<li v-for="(item,index) of activity_data.img" :key="index"><img :src="item "/></li>
				</ul>
				<p class="bm">已{{hasbuyact+activity_data.order_num}}人,剩余{{activity_data.num-activity_data.order_num}}人</p>
				<div class="bm_ul" v-if="hasfans">
					<ul>
						<li v-for="(item,index) in activity_data.order_list" :key="index"><img :src="imgUrl+item.userpic"/></li>
						<span style="font-size: 1.4rem;font-family: PingFang-SC-Bold;font-weight: bold;color: rgba(198,112,112,1);">+{{activity_data.order_num}}</span>
						<li class="ts2" @click="showSelect">查看<br />更多</li>
					</ul>
				</div>
				<div class="EmptyFans" v-else>
					<p class="EmptyFansAc">———————— &nbsp;还没有人报名&nbsp;  ————————</p>
				</div>
			</div>
		</div>
		<div class="ljbm" v-if="pinStart==-2">
			<p class='baoming wei'>人数已满{{hasbuyact}}结束</p>
		</div>
		<div class="ljbm" v-if="pinStart==-1">
			
		</div>
		<div class="ljbm" v-if="pinStart==0">
			<p class='baoming wei'>{{hasbuyact}}将在{{parseInt(activity_data.hd_start_time) | activity_datetime}}开始</p>
		</div>
		<div class="ljbm" v-else-if="pinStart==1">
			<p class="count" v-show="showRemaining">距离{{hasbuyact}}结束还剩 <span>{{Remaining}}</span></p>
			<P class='baoming' @click="toOrder">{{buyact}}</P>
		</div>
		<div class="ljbm" v-else-if="pinStart==2">
			<p class='baoming wei'>{{hasbuyact}}已经结束</p>
		</div>
		<!--查看分类-->
		<van-popup class='regUp' v-model="showSel" position="right" :close-on-click-overlay="true" :overlay="true">
		  <moreReg :showSelect="showSelect" :activityId="activity_id"></moreReg>
		</van-popup>
	</div>
</template>

<script>
	import {Popup} from 'vant'
	//查看更多
	import moreReg from './moreReg'
	export default {
		components:{
			moreReg:moreReg,
	  	},
		data(){
			return{
				imgUrl:'',
				activity_data:{},
				activity_id:'',
				//是否有人报名
				hasfans:false,
				uc:{},
				hasbuyact:'',//已经购买文字
				buyact:'',//购买按钮文字
				pinStart:-1,//拼团秒杀活动开始
				Remaining:'',//拼团秒杀活动剩余时间
				showRemaining:true,//显示倒计时
				showSel:false,//查看更多弹窗
			}
		},
		methods:{
			//去支付
			toOrder(){
				var token = window.localStorage.getItem("token");
				var that = this;
				$.ajax({
						type:"post",
						url:join+"activity/add_order",
						dataType:"json",
						data:{token:token,activity_id:that.activity_id},
						success:function(data){
//			  				console.log("请求成功");
			  				console.log(data);
			  				that.$router.push({path:'/order',query:{order_id:data.data}});
			  			},
			  			error:function(err){
							console.log("请求失败"+err);
						}
				});
			},
			//查看更多
			showSelect(){
				if(this.showSel==false){
					this.showSel=true;
				}else{
					this.showSel=false;
				}
			},
			backpre(){
				this.$router.back(-1);
			},
			//秒杀拼团活动开始之前
			beforeBegin(){
				var that=this;
				var before=setInterval(()=>{
					var thisTime=new Date().getTime();
					if(thisTime>=that.activity_data.hd_start_time){
						clearInterval(before);
						that.pinStart=1;
						that.hasBegin();
						return;
					}
				},1000)
			},
			//秒杀拼团活动开始之后
			hasBegin(overtime){
				var that=this;
				var after=setInterval(()=>{
					var thisTime=new Date().getTime();
				    //相差的总秒数
				    var totalSeconds = parseInt((overtime - thisTime) / 1000);
				    //天数
				    var d = Math.floor(totalSeconds / (60 * 60 * 24));
				    //取模（余数）
				    var modulo = totalSeconds % (60 * 60 * 24);
				    //小时数
				    var h = Math.floor(modulo / (60 * 60));
				    modulo = modulo % (60 * 60);
				    //分钟
				    var m = Math.floor(modulo / 60);
				    //秒
				    var s = modulo % 60;
				    that.Remaining=`${d}天 ${h}:${m}:${s}`;
				    if(d<=0&&h<=0&&m<=0&&s<=0){
				    	clearInterval(after);
				    	that.pinStart=2;
						return;
				    }
				},1000)
			},
			flushCom:function(){
				document.documentElement.scrollTop = 0;
				var backtop=setInterval(()=>{
					document.documentElement.scrollTop = 0
					clearInterval(backtop);
				},100)
			},
			follow_company(){
				if(this.activity_data.is_follow=="+关注"){
					this.activity_data.is_follow="已关注";
					this.uc.follow_num+=1;
					var token = window.localStorage.getItem("token");
					var that=this;
					$.ajax({
						type:"post",
						url:join+"company/toFollow",
						dataType:"json",
						data:{token:token,uid:that.uc.uid},
						success:function(data){
							console.log(that.uc.id);
//			  				console.log("请求成功");
			  				console.log(data);
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
			this.activity_id= this.$route.query.id;
			var token = window.localStorage.getItem("token");
			var that = this;
			this.$nextTick(()=>{
				$.ajax({
					type:"post",
					url:join+"activity/activity_info",
					dataType:"json",
					data:{
						token:token,
						activity_id:that.activity_id
					},
					success:function(data){
						console.log(data);
						that.activity_data=data.data;
						that.uc=data.data.u_c
						//是否有已报名
						if(data.data.order_list.length==0){
							that.hasfans=false;
						}else{
							that.hasfans=true;
						}
						//是否已关注
						if (that.activity_data.is_follow==0) {
//								console.log(that.activity_data.is_follow);
								that.activity_data.is_follow="+关注";
							}else{
								that.activity_data.is_follow="已关注";
						}
						if(that.activity_data.order_num>=that.activity_data.num){
							that.pinStart=-2;
						}
						//判断活动类型
						if(data.data.style==0){
							//普通
//							that.showRemaining=false;
							that.hasbuyact='报名',
							that.buyact='立即报名'
							var thistime=new Date().getTime();
							if(thistime<data.data.start){
								if(that.activity_data.order_num>=that.activity_data.num){
									that.pinStart=-2;
								}else{
									that.pinStart=1;
									if(that.activity_data.over_start==0){
										var overtime=that.activity_data.start-(1000*30*60);
										that.hasBegin(overtime);
									}else if(that.activity_data.over_start==1){
										var overtime=that.activity_data.end;
										that.hasBegin(overtime);
									}
								}	
							}else if(thistime>=data.data.start){
								that.pinStart=2;
							}
						}else if(data.data.style==1){
							//秒杀
							that.hasbuyact='秒杀'
							that.buyact='立即秒杀'
							var thistime=new Date().getTime();
//							console.log(thistime);
							if(thistime<data.data.hd_start_time){
								//还未开始
								that.pinStart=0;
								that.beforeBegin();
							}else if(thistime>=data.data.hd_start_time && thistime<data.data.hd_end_time){
								//已经开始							
								if(that.activity_data.order_num>=that.activity_data.num){
									that.pinStart=-2;
								}else{
									that.pinStart=1;
									that.hasBegin(that.activity_data.hd_end_time);
								}	
							}else{
								//已经结束
								that.pinStart=2;
							}	
						}else if(data.data.style==2){
							//拼团
							that.hasbuyact='拼团'
							that.buyact='立即拼团';
							var thistime=new Date().getTime();
//							console.log(thistime);
							if(thistime<data.data.hd_start_time){
								//还未开始
								that.pinStart=0;
								that.beforeBegin();
							}else if(thistime>=data.data.hd_start_time && thistime<data.data.hd_end_time){
								//已经开始							
								if(that.activity_data.order_num>=that.activity_data.num){
									that.pinStart=-2;
								}else{
									that.pinStart=1;
									that.hasBegin(that.activity_data.hd_end_time);
								}	
							}else{
								//已经结束
								that.pinStart=2;
							}	
						}
						
					},
					error:function(err){
						console.log("请求失败");
						console.log(err);
					}
				})
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
	.buy{
		width: 100%;
		background: #fff;
	}
	.head4{
		width: 100%;
		height: 18rem;
		background: url(../../build/yml.jpg)no-repeat;
		background-size: 100% 100%;
	}
	.head4>p{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	
	.node{
		width: 95%;
		height: 15rem;
		margin: auto;
		margin-top: 1%;
	}
	.tit{
		width: 50%;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 15px;
		font-weight: bold;
		float: left;
	}
	.price{
		width: 50%;
		height: 2.5rem;
		line-height: 2.5rem;
		float: right;
		text-align: right;
		color: red;
		font-size: 15px;
		font-weight: bold;
	}
	.p1{
		width: 17%;
		height: 2rem;
		line-height: 2rem;
		float: left;
	}
	.p1>span{
		position: relative;
	    left: 7%;
	    bottom: 5%;
	}
	.p2{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		float: left;
		font-size: 14px;
	}
	.p2>i{
		font-size: 18px;
	}
	.p2>span{
		margin-left: 1%;
	}
	.aderss{
		margin-left: 6%!important;
	    font-size: 10px;
	    color: #C9C9C9;
	}
	.sqrs{
		width: 100%;
		height: 2rem;
		float: left;
		margin-top: 9%;
	}
	.bz{
		width: 17%;
		height: 2rem;
		float: left;
		position: relative;
		line-height: 2rem;
	}
	.bz>p{
		width: 10px;
		height: 10px;		
	}
	.bz>p>img{
		width: 100%;
		height: 100%;
	}
	.bz>p>span{
		position: absolute; 
	    left: 18%;
	}
	.bz1{
		width: 17%;
		height: 2rem;
		float: left;
		position: relative;
		margin-left: 3%;
		line-height: 2rem;
	}
	.bz1>p{
		width: 10px;
		height: 10px;		
	}
	.bz1>p>img{
		width: 100%;
		height: 100%;
	}
	.bz1>p>span{
		position: absolute; 

	    left: 18%;
	}
	.bz2{
		width: 17%;
		height: 2rem;
		float: left;
		position: relative;
		margin-left: 3%;
		line-height: 2rem;
	}
	.bz2>p{
		width: 10px;
		height: 10px;		
	}
	.bz2>p>img{
		width: 100%;
		height: 100%;
	}
	.bz2>p>span{
		position: absolute; 
	    left: 18%;
	}
	.tj2{
		width: 100%;
		margin-top: 2%;
	}
	.tj2>ul{
		width: 100%;
	}
	.tj2>ul>li{
	    height: 8rem;
	    margin-left: 3%;
	    position: relative;
	}
	.tj2>ul>li:nth-child(n+2){
		margin-top: 2%;
	}
	.tup2{
		width: 35%;
	    height: 8rem;
	    float: left;
    }
	.tup2>img{
		width: 100%;
		height: 8rem;
		border-radius: 5px;
	}
	.fus2{
		width: 59%;
	    height: 8rem;
	    float: left;
	    position: relative;
	}
	.q2{
		width: 100%;
		text-align: left;
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 4%;
	}
	.w2{
		text-align: left;
		margin-top: 2%;
		margin-left: 4%;
	}
	.r2{
		width: 40%;
	    height: 1.2rem;
	    text-align: left;
	    margin-top: 2%;
	    margin-left: 4%;
	    color: #FAE64F;
	}
	.t2{
		margin-top: 2%;
	    margin-top: 7%;
	    text-align: left;
	    margin-left: 4%;
	}
	.t2>span{
		color: red;
		font-weight: bold;
	}
	.t2>span>span{
		font-size: 17px;
	}
	.e2{
		width: 4.2rem;
	    background: rgba(250,231,79,1);
	    border-radius: 5px;
	    height: 2rem;
	    text-align: center;
	    line-height: 2rem;
	    position: absolute;
	    top: 40%;
	    right: 3%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.e2.hasfollow{
		background:#F0F0F0;
	}
	.hdxq{
		width: 95%;
		margin: auto;
	}
	.xqtit{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		font-size: 15px;
		margin-top: 2%;
	}
	.tu{
		width: 98%;
		margin: auto;
	}
	.tu>ul{
		width: 100%;
	}
	.tu>ul>li{
		width: 100%;
		height: 15rem;
		margin-top: 2%;
	}
	.tu>ul>li>img{
		width: 100%;
		height: 100%;
	}
	.bm{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		font-size: 13px;
		font-weight: bold;
		margin-top: 2%;
	}
	.bm_ul{
		width: 100%;
		position: relative;
	}
	.bm_ul>ul{
		width: 100%;
		height: 3rem;
	}
	.bm_ul>ul>li{
		width: 3rem;
	    height: 3rem;
	    border-radius: 50%;
	    float: left;
	}
	.bm_ul>ul>li:nth-child(n+2){
		margin-left: -4%;
	}
	.bm_ul>ul>li>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.ts2{
		text-align: center;
	    position: absolute;
	    right: 0%;
	    top: 0%;
	    font-family: PingFang-SC-Bold;
	    background: rgba(0,0,0,1);
	    opacity: 0.3;
	    color: white;
	}
	.ljbm{
		width: 100%;
		height: 12rem;
		background: #FAFAFA;
		margin-top: 2%;
	}
	.ljbm .count{
		color: #666666;
		font-size: 1.5rem;
		font-weight: 500;
		text-align: center;
		position: relative;
		top:40%;
	}
	.ljbm .count span{
		color: #FAE74F;
	}
	.ljbm>p.baoming{
		width: 80%;
	    height: 3.5rem;
	    border-radius: 2rem;
	    background: #FAE64E;
	    font-size: 1.5rem;
	    text-align: center;
	    line-height: 3.5rem;
	    margin: auto;
	    position: relative;
	    top: 50%;
	}
	/*还未开始报名*/
	.ljbm>p.baoming.wei{
		background-color:#999;
		color: #fff;
	}
	.buy .EmptyFans{
		height: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.buy .EmptyFans>.EmptyFansAc{
		font-size: 1rem;
		color: #B0B0B0;
	}
	/*弹出层*/
	.regUp{
		width: 100%;
		height: 100%;
		background: #F0F0F0;
	}
</style>