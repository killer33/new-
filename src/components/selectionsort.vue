<template>
	<!--选择分类-->
	<div class="selectionsort">
		<div class="hea">
			<p @click="showSelect"><i class="iconfont">&#xe646;</i></p>
			<p>分类</p>
		</div>
		<!-- 分类列表 -->
       	<ul class="list">
            <li>
               <img src="../../build/27.jpg">
               <p>IT</p>
            </li>
            <li>
              <img src="../../build/27.jpg">
               <p>金融</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>文艺</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>户外</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>活动</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>健身</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>培训</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>促销</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>聚会</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>公益</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>演出</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>会议</p>
            </li>
            <li>
               <img src="../../build/27.jpg">
               <p>亲子</p>
            </li>
       	</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props:{
			showSelect:{type:Function}
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
        width:29.2rem;
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
        width:7.3rem;
        height:8.5rem;
        text-align: center;
        color:#8E8E8E;
    }
    .list li p{
     	margin-top: 5%;
     	font-size: 1.4rem;
    }
</style>