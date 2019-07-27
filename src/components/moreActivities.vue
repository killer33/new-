<template>
	<!--更多活动-->
	<div class="moreActivities">
		<div class="head3">
			<p  @click="$router.back(-1)"><i class="iconfont">&#xe646;</i></p>
			<p>活动</p>
		</div>
		<div class="love1">
			<ul>
				<router-link to="" tag="li" v-for="(item,index) in activitydata" :key="index">
					<img :src="imgUrl+item.pic"/>
					<p class="Ph11">{<span>{{company_name}}</span>} {{item.tit}}</p>
					<p class="Ph22"><span>{{parseInt(item.start) | datetimeFilter}}</span> 开始  <span>{{item.address}}</span></p>
				</router-link>
			</ul>
			<div style="clear:both"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				activitydata:[],
				kak:[],
				imgUrl:"",
				company_name:''
			}
		},
		methods:{
			
		},
		mounted(){
			this.imgUrl=imgJoin;
			this.company_name=this.$route.query.company_name;
			this.$nextTick(()=>{
	    		var that = this;
				var page = 1;
				var token = window.localStorage.getItem("token");
				var uid=that.$route.query.uid;
				$.ajax({
					type:"post",
					url:join+"company/show_more_activity",//搜索接口
					dataType:"json",
					data:{
						token:token,
						uid:uid,
						page:page
					},
					success:function(data){
		  				that.activitydata=data.data.data;
		  				console.log(that.activitydata);
//		  				for (var i = 0; i<that.search_result.length;i++) {
//			  				if(that.search_result[i].faburen){
//								if (that.search_result[i].faburen.length>4) {
//									that.search_result[i].faburen=that.search_result[i].faburen.substring(0,4)+"...";
//								}
//								if (that.search_result[i].tit.length>17) {
//									that.search_result[i].tit=that.search_result[i].tit.substring(0,17)+"...";
//								}
//							}
//						}
		  				page++;
//		  				console.log("获取活动主体内容成功,当前length= " + that.search_result.length  + "当前页码变为：" +page+ "  已做好请求第二页的准备");
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
		    					url:join+"company/show_more_activity",
		    					type:"post",
		    					data:{
									token:token,
									uid:uid,
									page:page
								},
		    					dataType:'json',
		    					success:function(data){

		    						that.kak = data.data.data;
		    						console.log(that.kak);
		    						if (that.kak.length==0) {
		    							sw=false;
		    							return;
		    						}else{
		    							page++;
		    							that.activitydata=that.activitydata.concat(that.kak);
//		    							for (var i = 0; i<that.search_result.length;i++) {
//		    								if(that.kak[i].faburen){
//												if (that.search_result[i].faburen.length>4) {
//													that.search_result[i].faburen=that.search_result[i].faburen.substring(0,4)+"...";
//												}
//												if (that.search_result[i].tit.length>17) {
//													that.search_result[i].tit=that.search_result[i].tit.substring(0,17)+"...";
//												}
//											}
//										}
		    							sw = true;
//		    							console.log("分页请求成功，长度为"+that.kak.length+" 当前总长度  "+that.search_result.length+" 页码变为page="+page);
		    						}
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
	.moreActivities{
		width: 100%;
		background: #fff;
	}
	.head3{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.head3>p{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.head3>p:nth-child(2){
		margin-left: 35%;
		font-size: 15px;
	}
	.moreActivities .love1{
		width: 100%;
		margin-top: 2%;
		padding-bottom: 2.5rem;
	}
	.moreActivities .love1>ul{
		width: 100%;
		background: ;
	}
	.moreActivities .love1>ul>li{
		width: 45%;
	    height: 13rem;	
	    float: left;
	    margin-left: 3%;  
	    padding: 0;
	}
	.moreActivities .love1>ul>li:nth-child(n+3){
		 margin-top: 3%;
	}
	.love1>ul>li>img{
		width: 100%;
	    height: 8rem;
	    margin-left: 0%;
	    border-radius: 5px;
	}
	.love1>ul>li>p{
		margin-left: 2%;
		margin-top: 2%;
		text-align: left;
	}
	.Ph11{
		font-size: 1.5rem;
		margin-left: 4% !important;
		height: 2rem;
	}
	.Ph11>span{
		font-weight: bold;
		display: inline-block;
		height: 1.5rem;
		width: 40%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.Ph22{
		color: #A1A1A1;
	}
	.col{
		color: #FAE64F;
	}
	.col_s{
		margin-left: 57%!important;
	}
	.Ph22>span:last-child{
		margin-left: 20%;
	}
</style>