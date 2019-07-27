<template>
	<!--企业简介-->
	<div class="enterpriseintroduction">
		<div class="head6">
			<!--<router-link to="/enterprise" tag="p" @click.native="flushCom"><i class="iconfont">&#xe646;</i></router-link>-->
			<p @click="backpre"><i class="iconfont">&#xe646;</i></p>
			<router-link to="/EnterpriseShare" tag="p"><img src="../../img/fenxiang.png"/></router-link>
		</div>
		<div class="gs">
			<div class="gs_logo"><img :src="data.logo_src"/></div>
			<p class="gsname">{{data.company_name}}</p>
			<div class="gs_p1">
				<p>已关注：<span>{{data.follow_num}}</span></p>
				<p>平台认证：<span style="color: red;">会员</span></p>
			</div>
			<div class="gs_p1">
				<p>入驻资金：<span>{{data.money}}</span></p>
				<p>活动：<span>{{data.activity_num}}</span></p>
			</div>
		</div>
		<div class="msg"></div>
		<div>
			<div class="hdxq2">
				<p class="xqtit2">企业简介</p>
				<p class="xqsm2" v-html="data.details"></p>
				<div class="tu2">
					<!--<ul>
						<li><img src="../../build/27.jpg"/></li>
						<li><img src="../../build/yml.jpg"/></li>
						<li><img src="../../build/zz.jpg"/></li>
					</ul>-->
					<p class="bm2">粉丝</p>
					<div class="bm_ul2" v-show="hasfans">
						<ul>
							<li v-for="(item,index) in fans" :key="index"><img :src="item.userpic"/></li>
							<span style="font-size: 1.4rem;font-family: PingFang-SC-Bold;font-weight: bold;color: rgba(198,112,112,1);">+{{data.follow_num}}</span>
							<li class="ts2">查看<br />更多</li>
						</ul>
					</div>
					<div class="EmptyFans" v-show="!hasfans">
						<p class="EmptyFansAc">———————— &nbsp;空空如也&nbsp;  ————————</p>
					</div>
					<p class="bm2">关系族谱</p>
					<ul>
						<li><img src="../../build/timg.jpg"/></li>
					</ul>
				</div>
				<hr />
				<!--猜你喜欢-->
				<div class="guesslove1">
					<p><router-link to="" tag="span">已发布活动</router-link>
						<router-link  @click.native="refresh" :to="{path:'/moreActivities',query:{uid:data.uid,company_name:data.company_name}}" tag="span" v-show="hasMoreActivity">查看更多 <i class="iconfont">&#xe61f;</i></router-link>
					</p>
					<div class="love2" v-show="hasactivity">
						<ul>
							<router-link to="" tag="li" v-for="(item,index) in activity" :key="index">
								<img :src="item.pic"/>
								<p class="Ph3"><span>{ {{data.company_name}} }</span>{{item.tit}}</p>
								<p class="Ph4">{{parseInt(item.start) | datetimeFilter}} <span>{{item.address}}</span></p>
							</router-link>
						</ul>
					</div>
					<div class="EmptyAcLi" v-show="!hasactivity">
						<p class="EmptyAc">———————— &nbsp;暂未发布活动&nbsp;  ————————</p>
					</div>
				</div>
				<hr />
				<!--推荐企业-->
				<div class="tjqy1">
					<p><router-link to="" tag="span" >推荐企业</router-link>
						<router-link @click.native="refresh" :to="{path:'/moreCompanies',query:{cid:data.id,type_id:data.company_type_id}}" tag="span" v-show="hasMorecompany">查看更多<i class="iconfont">&#xe61f;</i></router-link>
					</p>
					<div class="tj5" v-show="hasTuicompany">
						<ul>
							<li v-for="(item,index) in cai_company" :key="index">
								<router-link tag="div" :to="'/enterpriseintroduction/'+item.id"  @click.native="flushCom">
									<div class="tup5">
										<img :src="item.logo_src"/>
									</div>
									<div class="fus5">
										<p class="q5">{{item.company_name}}</p>
										<p class="w5">{{item.company_address}}</p>
										<p class="r5">已关注：<span>{{item.follow_num}}</span>人</p>
										<p class="t5">入驻资金：<span>￥<span>{{item.money}}</span></span></p>
									</div>
								</router-link>
								<p class="e5" :class="{'hasfollow':item.is_follow=='已关注'}" @click="follow_company(cai_company,item.id,index)">{{item.is_follow}}</p>
							</li>
						</ul>
					</div>
					<div class="EmptyAcLi" v-show="!hasTuicompany">
						<p class="EmptyAc">———————— &nbsp;暂未推荐企业&nbsp;  ————————</p>
					</div>
				</div>
				<!--推荐企业-->
			</div>
		</div>
		
		<footer></footer>
	</div>
</template>

<script>
	export default {
		data(){
		  	return{
		  		data:{},
		  		activity:[],
		  		cai_company:[],
		  		fans:[],
		  		hasfans:false,//是否有粉丝
		  		hasactivity:false,//是否有发布活动
		  		hasMoreActivity:false,//是否有四条以上有活动
		  		hasTuicompany:false,//是否有推荐企业
		  		hasMorecompany:false,//是否有三个以上推荐企业
		  		company_id:'',
		  	}
		},
		methods:{
			refresh(){
				this.$router.go(0); 
			},
			flushCom:function(){
				document.documentElement.scrollTop = 0;
				var backtop=setInterval(()=>{
					document.documentElement.scrollTop = 0
					clearInterval(backtop);
				},100)
			},
			backpre(){
				this.$router.back(-1);
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
		watch: {
      		$route(){
	        	this.company_id = this.$route.params.company_id
	      	},
	      	company_id() {
	      		var token = window.localStorage.getItem("token");
	      		var that = this;
	        	$.ajax({
					type:"post",
					url:join+"company/companyinfo/?company_id="+that.company_id,
					dataType:"json",
					data:{token:token},
					success:function(data){
						console.log("请求成功");
						console.log(data);
						that.data=data.data;
						that.activity=data.activity;
						that.cai_company=data.cai_company;
						that.fans=data.fans;
						for (var i=0;i<that.cai_company.length;i++) {
							if (that.cai_company[i].is_follow==0) {
								that.cai_company[i].is_follow="+关注";
							}else{
								that.cai_company[i].is_follow="已关注";
							}
						}
						for (var x = 0;x<that.activity.length;x++) {
							if (that.activity[x].tit.length>4) {
								that.activity[x].tit=that.activity[x].tit.substring(0,17)+"...";
							}
						}
						//判断粉丝数
						if(that.fans.length==0){
							that.hasfans=false;
						}else{
							that.hasfans=true;
						}
						//判断活动
						if(that.activity.length==0){
							that.hasactivity=false;
							that.hasMoreActivity=false;
						}else if(that.activity.length<=4){
							that.hasactivity=true;
							that.hasMoreActivity=false;
						}else if(that.activity.length>4){
							that.hasactivity=true;
							that.hasMoreActivity=true;
							that.activity=that.activity.splice(0,4);
						}
						//判断推荐企业
						if(that.cai_company.length==0){
							that.hasTuicompany=false;
							that.hasMorecompany=false;
						}else if(that.cai_company.length<=3){
							that.hasTuicompany=true;
							that.hasMorecompany=false;
						}else if(that.cai_company.length>3){
							that.hasTuicompany=true;
							that.hasMorecompany=true;
							that.cai_company=that.cai_company.splice(0,3);
						}
					},
					error:function(err){
						console.log("请求失败");
						console.log(err);
					}
				});
	      	}
		},
		mounted(){
			this.company_id = this.$route.params.company_id;
			var token = window.localStorage.getItem("token");
			var that = this;
			$.ajax({
				type:"post",
				url:join+"company/companyinfo/?company_id="+that.company_id,
				dataType:"json",
				data:{token:token},
				success:function(data){
					console.log("请求成功");
					console.log(data);
					that.data=data.data;
					that.activity=data.activity;
					that.cai_company=data.cai_company;
					that.fans=data.fans;
					for (var i=0;i<that.cai_company.length;i++) {
						if (that.cai_company[i].is_follow==0) {
							that.cai_company[i].is_follow="+关注";
						}else{
							that.cai_company[i].is_follow="已关注";
						}
					}
					for (var x = 0;x<that.activity.length;x++) {
						if (that.activity[x].tit.length>4) {
							that.activity[x].tit=that.activity[x].tit.substring(0,17)+"...";
						}
					}
					//判断粉丝数
					if(that.fans.length==0){
						that.hasfans=false;
					}else{
						that.hasfans=true;
					}
					//判断活动
					if(that.activity.length==0){
						that.hasactivity=false;
						that.hasMoreActivity=false;
					}else if(that.activity.length<=4){
						that.hasactivity=true;
						that.hasMoreActivity=false;
					}else if(that.activity.length>4){
						that.hasactivity=true;
						that.hasMoreActivity=true;
						that.activity=that.activity.splice(0,4);
					}
					//判断推荐企业
					if(that.cai_company.length==0){
						that.hasTuicompany=false;
						that.hasMorecompany=false;
					}else if(that.cai_company.length<=3){
						that.hasTuicompany=true;
						that.hasMorecompany=false;
					}else if(that.cai_company.length>3){
						that.hasTuicompany=true;
						that.hasMorecompany=true;
						that.cai_company=that.cai_company.splice(0,3);
					}
				},
				error:function(err){
					console.log("请求失败");
					console.log(err);
				}
			});
			
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
	.msg{
		width: 100%;
	    height: 11rem;
	    position: absolute;
	    top: 23%;
	    z-index: -1;
	}
	.enterpriseintroduction{
		width: 100%;
	}
	.enterpriseintroduction>div{
		background: white;
	}
	.enterpriseintroduction .head6{
		width: 100%;
		height: 18rem;
		background: url(../../img/bg.png)no-repeat !important;
		background-size: 100% 100% !important;
		border-radius: 0% 0% 30% 30%;
	}
	.enterpriseintroduction .head6>p{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.enterpriseintroduction .head6>p>i{
		font-size: 1.7rem;
	}
	.enterpriseintroduction .head6>p:nth-child(2){
		float: right;
	}
	.enterpriseintroduction .head6>p:nth-child(2)>img{
		width: 1.3rem;
	    height: 1.5rem;
	    margin-top: 27%;
	}
	.enterpriseintroduction .gs{
		width: 86%;
	    height: 12rem;
	    border-radius: 10px;
	    margin: auto;
	    margin-top: -25%;
	    background: white;
		box-shadow: 0px 0px 3px 0px rgba(172,172,172,0.2);
	}
	.enterpriseintroduction .gs_logo{
	    width: 5rem;
	    height: 5rem;
	    border-radius: 50%;
	    position: relative;
	    top: -20%;
	    left: 40%;
	}
	.enterpriseintroduction .gs_logo>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.enterpriseintroduction .gsname{
		width: 100%;
	    height: 2rem;
	    text-align: center;
	    line-height: 2rem;
	    position: relative;
	    top: -12%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(51,51,51,1);
	}
	.enterpriseintroduction .gs_p1{
		width: 100%;
	    height: 2rem;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(102,102,102,1);
	}
	.enterpriseintroduction .gs_p1>p:first-child{
		text-align: left;
		margin-left: 8%;
		float: left;
		font-size: 1.4rem;
	}
	.enterpriseintroduction .gs_p1>p:nth-child(2){
		text-align: left;
		margin-right: 6%;
		float: right;
		width: 27%;
	}
	.enterpriseintroduction .hdxq2{
		width: 95%;
		margin: auto;
		margin-top: 0;
	}
	.enterpriseintroduction .xqtit2{
		width: 100%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    font-size: 1.7rem;
	    font-family: PingFang-SC-Regular;
	    font-weight: bold;
	    color: rgba(51,51,51,1);
	}
	
	.enterpriseintroduction .xqsm2{
		font-family:PingFang-SC-Regular;
		
	}
	.enterpriseintroduction .xqsm2 img{
		width: 100%;
	}
	.enterpriseintroduction .xqsm2 p{
		font-size: 1.5rem;
		color:##666666;
	}
	
	.enterpriseintroduction .tu2{
		width: 98%;
		margin: auto;
	}
	.enterpriseintroduction .tu2>ul{
		width: 100%;
	}
	.enterpriseintroduction .tu2>ul>li{
		width: 100%;
	    margin-top: 2%;
	}
	.enterpriseintroduction .tu2>ul>li>img{
		width: 100%;
		height: 100%;
	}
	.enterpriseintroduction .tu2>.EmptyFans{
		height: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.enterpriseintroduction .tu2>.EmptyFans>.EmptyFansAc{
		font-size: 1rem;
		color: #B0B0B0;
	}
	.enterpriseintroduction .bm2{
		width: 100%;
	    height: 2rem;
	    line-height: 2rem;
	    margin-top: 2%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Bold;
	    font-weight: bold;
	    color: rgba(0,0,0,1);
	}
	.enterpriseintroduction .bm_ul2{
		width: 100%;
		position: relative;
	}
	.enterpriseintroduction .bm_ul2>ul{
		width: 100%;
		height: 2.7rem;
	}
	.enterpriseintroduction .bm_ul2>ul>li{
		width: 2.7rem;
	    height: 2.7rem;
	    border-radius: 50%;
	    float: left;
	}
	.enterpriseintroduction .bm_ul2>ul>li:nth-child(n+2){
		margin-left: -4%;
	}
	.enterpriseintroduction .bm_ul2>ul>li>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.enterpriseintroduction .ts2{
		text-align: center;
	    position: absolute;
	    right: 0%;
	    top: 0%;
	    font-family: PingFang-SC-Bold;
	    background: rgba(0,0,0,1);
	    opacity: 0.3;
	    color: white;
	}
	.enterpriseintroduction hr{
		width: 105%;
	    height: 0.5rem;
	    background: #F0F0F0;
	    margin-top: 2%;
	    position: relative;
	    right: 2.5%;
	}
	/*猜你喜欢*/
	.enterpriseintroduction .guesslove1{
		width: 100%;
		height: 10rem;
	}
	.enterpriseintroduction .guesslove1>p{
		width: 100%;
		height: 4rem;
		line-height: 4rem;	
	}
	.enterpriseintroduction .guesslove1>p>span:first-child{
		margin-left: 3%;
	    font-size: 1.7rem;
	    font-family: PingFang-SC-Bold;
	    font-weight: bold;
	    color: rgba(51,51,51,1);
	}
	.enterpriseintroduction .guesslove1>p>span:last-child{
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
		display: inline-block;
    	float: right;
	}
	/*暂未推荐企业文字*/
	.enterpriseintroduction .guesslove1>.EmptyAcLi{
		height: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.enterpriseintroduction .guesslove1>.EmptyAcLi>.EmptyAc{
		font-size: 1rem;
		color: #B0B0B0;
	}
	.enterpriseintroduction .love2{
		width: 100%;
		margin-top: 2%;
	}
	.enterpriseintroduction .love2>ul{
		width: 100%;
	}
	.enterpriseintroduction .love2>ul>li{
		width: 46%;
	    float: left;
	    padding: 2% 2% 0% 2%;
	    background: white;
	}
	.enterpriseintroduction .love2>ul>li>img{
		width: 100%;
	    height: 8.4rem;
	    border-radius: 0.5rem;
	}
	.enterpriseintroduction .love2>ul>li>p{
		margin-left: 2%;
		text-align: left;
	}
	.enterpriseintroduction .Ph3{
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Bold;
	    color: rgba(51,51,51,1);
	    overflow: hidden;
	}
	.enterpriseintroduction .Ph3>span{
		font-weight: bold;
	    color: #333333;
	    font-family: PingFang-SC-Bold;
	    font-size: 1.4rem;
	}
	.enterpriseintroduction .Ph4{
		font-size: 1.1rem;
	    margin-top: 0.5rem;
	    margin-bottom: 0.5rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	/*推荐企业*/
	.enterpriseintroduction .tjqy1{
		width: 100%;
/*		height: 10rem;*/
	}
	
	.enterpriseintroduction .tjqy1>.EmptyAcLi{
		height: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.enterpriseintroduction .tjqy1>.EmptyAcLi>.EmptyAc{
		font-size: 1rem;
		color: #B0B0B0;
	}
	.enterpriseintroduction .tjqy1>p{
		width: 100%;
		height: 4rem;
		line-height: 4rem;	
	}
	.enterpriseintroduction .tjqy1>p>span:first-child{
		margin-left: 3%;
	    font-size:1.7rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.enterpriseintroduction .tjqy1>p>span:last-child{
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
		display: inline-block;
		float: right;
	}
	.enterpriseintroduction .tj5{
		width: 100%;
	}
	.enterpriseintroduction .tj5>ul{
		width: 100%;
	}
	.enterpriseintroduction .tj5>ul>li{
	    height: 9rem;
	    margin-left: 2%;
	    background-color: #fff;
	    position: relative;
	}
	.enterpriseintroduction .tup5{
		width: 8.75rem;
	    height: 8.3rem;
	    float: left;
    }
	.enterpriseintroduction .tup5>img{
		width: 100%;
		height: 8rem;
		border-radius: 5px;
	}
	.enterpriseintroduction .fus5{
		width: 65%;
	    height: 8.3rem;
	    float: left;
	    position: relative;
	}
	.enterpriseintroduction .q5{
		width: 100%;
	    text-align: left;
	    margin-left: 4%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Bold;
	    font-weight: bold;
	    color: rgba(51,51,51,1);
	}
	.enterpriseintroduction .w5{
		text-align: left;
		font-family:PingFang-SC-Medium;
		font-size: 1.1rem;
		font-weight: Medium;
		margin-top: 2%;
		margin-left: 4%;
		width: 70%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.enterpriseintroduction .r5{
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
	.enterpriseintroduction .t5{
	    margin-top: 0.8em;
	    text-align: left;
	    font-family: PingFang-SC-Medium;
	    margin-left: 4%;
	    color: #333333;
	}
	.enterpriseintroduction .t5>span{
		font-weight: Bold;
	    color: #FF5756;
	    font-family: PingFang-SC-Bold;
	    font-size: 1.1rem;
	}
	.enterpriseintroduction .t5>span>span{
		font-size: 1.7rem;
	    font-weight: Bold;
	    color: #FF5756;
	    font-family: PingFang-SC-Bold;
	}
	.enterpriseintroduction .e5{
		width: 4.2rem;
	    background: rgba(250,231,79,1);
	    border-radius: 5px;
	    height: 2rem;
	    text-align: center;
	    line-height: 2rem;
	    position: absolute;
	    top: 40%;
	    right: 0%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.enterpriseintroduction .e5.hasfollow{
		background:#F0F0F0;
	}
	.enterpriseintroduction footer{
		width: 100%;
		height: 6rem;
		margin-top: 2%;
		background: #F0F0F0;
	}
</style>