<template>
	<!--账单记录-->
	<div class="bill_record">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>账单记录</p>
		</div>
		<div class="bill_details">
			<ul>
				<li v-for="item in inf">
					<p class="bill_p1">
						<span>{{item.content}}</span><br /><span>{{parseInt(item.time) | datetimeFilte}}</span>
					</p>
					<p class="bill_p2">金额:<span>￥</span><span>{{item.num}}</span></p>
					<i class="iconfont">&#xe649;</i>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				inf:[],
			}
		},
		mounted(){
			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				var page = 1;
				$.ajax({
					type:"post",
					url:join+"user/bill/",
					dataType:"json",
					data:{token:token,page:page},
					success:function(data){
		  				page++;
		  				that.inf = data.info.data;
		  				console.log(that.inf.length);
		  				for (var i = 0 ; i < that.inf.length ; i++) {
							if (that.inf[i].num>0) {
								that.inf[i].num = "+" + that.inf[i].num;
							}
						}
		  				console.log("账单请求成功，长度为："+that.inf.length+" 页码变为："+page);
		  				console.log(data);
		  			},
		  			error:function(err){
						console.log("请求失败");
					}
				});
				//	账单分页
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
		    					url:join+"user/bill/",
		    					type:"post",
		    					data:{token:token,page:page},
		    					dataType:'json',
		    					success:function(data){
									that.kak = data.info.data;
									if (that.kak.length==0) {
										sw=false;
										return;
									}else{
										page++;
										sw = true;
										that.inf=that.inf.concat(that.kak);
										console.log("账单分页请求成功，长度为："+that.kak.length+" 总长度为："+that.inf.length+" 页码变为："+page);
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
	.bill_record{
		width: 100%;
	}
	.bill_record>div{
		background: white;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 1px solid #F0F0F0;
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
	    font-size:1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.bill_details{
		width: 100%;
	}
	.bill_details>ul{
		width: 100%;
	}
	.bill_details>ul>li{
		width: 100%;
		height: 5.4rem;
		border-bottom: 0.1rem solid #F0F0F0;
		position: relative;
	}
	.bill_p1{
		width: 35%;
	    height: 5.4rem;
	    margin-left: 3%;
	    float: left;
	    line-height: 1.9rem;
	}
	.bill_p1>span:first-child{
		display: inline-block;
	    margin-top: 9%;
	    font-size: 1.5rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.bill_p1>span:nth-child(2){
	    display: inline-block;
	    margin-top: 5%;
	    font-size: 1.2rem;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(102,102,102,1);
	}
	.bill_p2{
		width: 35%;
	    height: 5.4rem;
	    line-height: 5.4rem;
	    float: right;
	    margin-right: 2%;
	    text-align: left;
	}
	.bill_p2>span{
		color: #FF5756;
	}
	.bill_p2>span:nth-child(2){
		font-size: 1.7rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
	}
	.bill_details i{
		position: absolute;
	    right: 2%;
	    top: 38%;
	    font-size: 1.7rem;
	}
</style>