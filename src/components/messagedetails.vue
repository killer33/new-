<template>
	<!--消息通知-详情-->
	<div class="messagedetails">
		<div class="hea">
			<router-link to="/messagecation" tag="p" @click.native="flushCom"><i class="iconfont">&#xe646;</i></router-link>
			<p>详情</p>
		</div>
		<div class="content">
      <p class="big">今天是个好日子佳佳按揭骄傲说多点击缓缓吧</p>
      <p class="time">
          <span>03/22 13：00</span>
          <span class="inform">系统通知</span>
      </p>
           <p class="explain">
 哈是否会我例还给发就不能昂可能奥斯卡可能暗示可大哥时间段内是的那个人就。代收款弥感觉怎么办规范化今年
再见吧你大哥在哪不干活重量级干部，是你复EJS发的发《JBfJ》设计费这块地方推荐深刻的机会替你没给你的的
手机壳改变的。
     </p>
     <img src="../../build/27.jpg">
      <p class="explain">
 哈是否会我例还给发就不能昂可能奥斯卡可能暗示可大哥时间段内是的那个人就。代收款弥感觉怎么办规范化今年
再见吧你大哥在哪不干活重量级干部，是你复EJS发的发《JBfJ》设计费这块地方推荐深刻的机会替你没给你的的
手机壳改变的。
     </p>
  </div>
	</div>
</template>

<script>
	export default {
		methods:{
			flushCom:function(){
				this.$router.go(0); 
			}
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
	.messagedetails{
		width: 100%;
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
	    font-size: 1.7rem;
	}
	.content{
        width: 91%;
	    font-size: 1.6rem;
	    margin: auto;
	    margin-top: 4%;
    }
    .big{
        width: 28rem;
        height: 4rem; 
        font-size: 1.8rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
    }
    .time{
        width: 100%;
        height: 3rem;  
        line-height: 3rem;
        font-size: 1rem;  
    }
    .time span{
        color:#B8B8B8;
    }
    .inform{
        margin-left:4rem;
        color:#FA8159 !important;
    }
    .explain{
        width: 100%;
   		font-size: 1.34rem;
	    line-height: 2.5rem;
	    color: #848484;
    }
    img{
        width: 100%;
	    height: 16rem;
	    margin-top: 1%;
	    margin-bottom: 1%;
    }
</style>