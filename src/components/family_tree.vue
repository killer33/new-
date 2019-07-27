<template>
	<!--个人中心-关系族谱-->
	<div class="family_tree">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>关系族谱</p>
		</div>
		<p><span>我的下级</span><span class="n">103</span></p>
		<div class="box">
			<ul>
				<li v-for="(item,index) in info" @click="getid(item.id,index)">
					<div class="parent">
						<div class="log"><img :src="item.userpic"/></div>
						<p class="treeP">{{item.username}}</p>
						<i class="iconfont rig">&#xe649;</i>
					</div>
					<div class="child"  v-for="items in info_child" v-if="item.id == items.pid" >
						<div class="log"><img :src="item.userpic"/></div>
						<p class="treeP">{{item.username}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				info:[],//父级
				info_child:[],//子级
				a:[],
				b:0,
				indexlist:[],
			}
		},
		methods:{
			//子级
			getid:function(item,index){
				var id = item;
				var token = window.localStorage.getItem("token");
				this.b=index;
				var that = this;
				//$(".box>ul>li").children(".parent").children(".rig").css("transform","rotate(0deg)");
				console.log(index,"标识");
				if (this.a[index]!=2) {
					$(".box>ul>li").eq(index).children(".parent").children(".rig").css("transform","rotate(90deg)");
					console.log(this.indexlist[index]>=0,'index')
					if(this.indexlist[index]>=0){
						$(".box>ul>li").eq(index).children(".child").slideDown();
						$(".n").show();
					}else{
						this.indexlist[index]=index;
						console.log(this.indexlist,'liebiao');
						$.ajax({
							type:"post",
							url:join+"user/tree",
							dataType:"json",
							data:{token:token,id:id},
							success:function(data){
				  				console.log(data,1);
				  				if(data.info){
				  					that.info_child=that.info_child.concat(data.info);
				  				}
				  				console.log(that.info_child,2);
				  				$(".box>ul>li").eq(index).children(".child").slideDown();
								$(".n").show();
							},
				  			error:function(err){
				  				//that.a==2
								console.log("请求失败"+err);
							}
						});
					}
				}
				if (this.a[index]!=2) {
					this.a[index]=2;
				}else{
					this.a[index]=1;
				}
				if (this.a[index]==1) {
					$(".box>ul>li").eq(index).children(".parent").children(".rig").css("transform","rotate(0deg)");
					$(".box>ul>li").eq(index).children(".child").hide();
					$(".n").hide();
				//	return;
				}
//				alert(this.a[index]);	
			}
		},
		mounted(){
			//父级
			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/tree",
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				console.log("请求成功"+data.info.length);
		  				console.log(data);
		  				that.info=data.info;
		  			},
		  			error:function(err){
						console.log("请求失败"+err);
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
	.family_tree{
		width: 100%;
	}
	.family_tree>div{
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
	.family_tree>p{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		background: #F0F0F0;
		font-size: 1.4rem;
	}
	.family_tree>p>span:first-child{
		margin-left: 3%;
		margin-left: 3%;
	    font-size: 1.5rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.family_tree>p>span:nth-child(2){
		position: relative;
		left: 72%;
		color: red;
		display: none;
	}
	.box{
		width: 100%;
    	height: 100%;
	}
	ul{
		list-style: none;
	}
	.parent{
	    height: 5rem;
	    border-bottom: 1px solid #f0f0f0;
		line-height: 5rem;
	}
	.child{
		width: 80%;
	    height: 5rem;
	    margin-left: 20%;
	    line-height: 5rem;
	    border-bottom: 1px solid #f0f0f0;
	}
	.log{
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin-top: 0.5rem;
    	margin-left: 1rem;
    	float: left;
	}
	.log img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.treeP{
		float: left;
		height: 5rem;
		line-height: 5rem;
		font-size: 1.5rem;
		margin-left: 2rem;
	}
	.rig{
		font-size: 1.7rem;
	    display: inline-block;
	    float: right;
	    margin-right: 1rem;
	}
</style>