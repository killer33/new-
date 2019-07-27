<template>
	<!--消息通知-->
	<div class="messagecation">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>消息通知</p>
		</div>
		<hr />
		<!-- 消息信息 -->
		<ul class="messages">
		    <li v-for="item in info" @click="qudian(item.id)">
		    	<p class="xred" v-if="item.state==1" style="background-color: #FFFFFF;"></p>
		    	<p class="xred" v-else style="background-color: #C44050;"></p>
		        <div >
		            <p class="imgp"><img :src="item.type"/></p>
		            <span>{{item.types}}</span>
		        </div>
		        <p class="textt">{{item.content}}</p>
		        <p class="time">{{parseInt(item.time) | datetime}}</p>
		    </li>
		</ul>
	</div>
</template>

<script>
	import img1 from '../../build/xtxx.png'
	import img2 from '../../build/hdxx.png'
	export default{
		data(){
			return{
				info:[],
			}
		},
		methods:{
			qudian:function(item){
				var token = window.localStorage.getItem("token");
				var id = item;
				$.ajax({
					type:"post",
					url:join+"user/qudian",
					dataType:"json",
					data:{token:token,id:id},
					success:function(data){
						console.log("成功");
						window.location.href="#/messagedetails";
					},
					error:function(err){
						console.log("失败");
						window.location.href="#/messagedetails";
					}
				});
			}
		},
		mounted(){
			this.$nextTick(()=>{
				var that = this;
				var page = 1;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/information?page="+page,
					dataType:"json",
					data:{token:token},
					success:function(data){
						page++;
		  				that.info=data.info.data;
		  				console.log(data);
		  				console.log("请求成功，长度为："+that.info.length+" 页码变为："+page);
		  				for (var i = 0;i<that.info.length;i++) {
		  					if (that.info[i].type==0) {
								that.info[i].types="系统消息";
								that.info[i].type = img1;
							}else{
								that.info[i].types="活动消息";
								that.info[i].type = img2;
							}
							
		  				}
		  			},
		  			error:function(err){
						console.log("请求失败");
					}
				});
				//	分页
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
		    					url:join+"user/information?page="+page,
		    					type:"post",
		    					data:{token:token,},
		    					dataType:'json',
		    					success:function(data){
									that.fys = data.info.data;
									if (that.fys.length==0) {
										sw=false;
										return;
									}else{
										that.info=that.info.concat(that.fys);
										page++;
										sw = true;
										for (var i = 0;i<that.info.length;i++) {
						  					if (that.info[i].type==0) {
												that.info[i].types="系统消息";
												that.info[i].type = img1;
											}else{
												that.info[i].types="活动消息";
												that.info[i].type = img2;
											}
						  				}
										console.log("分页请求成功，长度为："+that.fys.length+" 总长度为："+that.info.length+" 页码变为："+page);
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
		},
	}
</script>

<style scoped>
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
	.messagecation{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: white;
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
	.hea>p:first-child>i{
		font-size: 1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 1.7rem;
	    font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	hr{
		width: 100%;
		height: 1rem;
		background: #F0F0F0;
	}
	.messages{
		width: 100%;
		height: 100%;
		background: #F0F0F0;
		padding-bottom: 3%;
	}
	.messages>li{
		width: 94%;
		margin: auto;
		background: white;
		border-radius: 0.5rem;
		position: relative;
	}
	.xred{
		width: 0.5rem;
	    height: 0.5rem;
	    border-radius: 50%;
	    position: absolute;
	    right: 1rem;
	    top: 1rem;
	}
	.messages>li:nth-child(n+2){
		margin-top: 3%;
	}
	.messages>li>div{
		width: 100%;
		height: 4rem;
		line-height: 4rem;
	}
    .messages>li>div>p{
    	width: 2rem;
    	height: 2rem;
    	float: left;
    	margin-left: 4%;
   		margin-top: 2%;
    } 
    .messages>li>div>p>img{
    	width: 100%;
    	height: 100%;
    } 
    .messages>li>div>span{
    	display: block;
    	float: left;
    	margin-left: 3%;
    	font-size:1.4rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
    } 
    .textt{
    	width: 92%;
	    margin: auto;
	    margin-bottom: 3%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(102,102,102,1);
    }
    .time{
    	width: 92%;
	    height: 2rem;
	    margin: auto;
	    margin-top: 2%;
	    font-size:1rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
    }
</style>