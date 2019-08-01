<template>
	<!--选择分类-->
	<div class="selectionsort">
		<div class="hea">
			<p @click="showSelect"><i class="iconfont">&#xe646;</i></p>
			<p>分类</p>
		</div>
		<!-- 分类列表 -->
       	<ul class="list">
            <li v-for="(item,index) of info" :key="index" @click="chosetype(item.id,item.activity_type)">
               <img :src="imgUrl+item.activity_pic">
               <p>{{item.activity_type}}</p>
            </li>
       	</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				info:[],
				imgUrl:'',
			}
		},
		props:{
			showSelect:{type:Function},
			subdata:{type:Object},
		},
		methods:{
			chosetype:function(id,type){
				this.subdata.activity_typeid=id;
				this.subdata.activity_typename=type;
				this.showSelect();
			}
		},
		mounted(){
			this.imgUrl=imgJoin;
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
		  				console.log(data)
		  				console.log("获取活动分类成功,length:  "+that.info.length);
		  			},
		  			error:function(err){
						console.log("请求失败");
						console.log(err);
					}
				});
		  		return;
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
	.selectionsort{
		background: white;
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
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
	}
	.list{
        display:flex;
        width:95%;
        flex-wrap: wrap;
        padding-top:2rem;
        margin-left:0.8rem;
    }
    .list img{
        width:4rem;
        height:4rem;
        border-radius: 50%;
    }
    .list li{
        width:25%;
        height:8.5rem;
        text-align: center;
        color:#8E8E8E;
    }
    .list li p{
     	margin-top: 5%;
     	font-size: 1.4rem;
    }
</style>