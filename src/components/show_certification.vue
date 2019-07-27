<template>
	<!--展示个人认证信息-->
	<div class="show_certification">
		<div class="show_certification_head">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>个人认证信息</p>
		</div>
		<div class="showinfo">
			<div><p>姓名：</p><p>{{info.realname}}</p></div>
			<div><p>身份证号：</p><p>{{info.idcard}}</p></div>
			<ul>
				<li><img :src="info.front_pic"/></li>
				<li><img :src="info.hand_pic"/></li>
				<li><img :src="info.behind_pic"/></li>
			</ul>
		</div>
		<p></p>
		<!--<div class="bjtext1">
			<quill-editor 
		        v-model="content" 
		        ref="myQuillEditor" 
		        :options="editorOption" 
		        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
		        @change="onEditorChange($event)">
		    </quill-editor>
		</div>-->
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
    export default{
        data(){
            return {
                content:null,
                editorOption:{},
                info:[],
            }
        },
        methods:{
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }
        },
        mounted(){
			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/isren",
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				console.log(data);
		  				that.info=data.info;
		  			},
		  			error:function(err){
						console.log("请求失败");
					}
				});
			})
		},
    }
</script>

<style>
	.show_certification_head{
		width: 100%;
		height: 4.5rem;
		background: white;
		border-bottom: 1px solid #F0F0F0;
	}
	.show_certification_head>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.show_certification_head>p:first-child{
		width: 10%;
	}
	.show_certification_head>p:first-child>i{
		font-size: 1.7rem;
	}
	.show_certification_head>p:nth-child(2){
		width: 30%;
	    margin-left: 25%;
	    font-size: 1.7rem;
	    font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.showinfo{
		width: 100%;
		margin-top: 0.3rem;
		background: white;
	}
	.showinfo div{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		font-size: 1.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
	}
	.showinfo div p:first-child{
		width: 25%;
		text-align: right;
		float: left;
	}
	.showinfo div p:last-child{
		width: 65%;
		text-align: left;
		float: left;
		margin-left: 5%;
	}
	.showinfo>ul{
		width: 100%;
	}
	.showinfo>ul>li{
		width: 70%;
	    margin: auto;
	    height: 12rem;
	    border: 0.1rem dashed #F0F0F0;
	    margin-top: 1.5rem;
	}
	.showinfo>ul>li>img{
		width: 100%;
		height: 100%;
	}
	.show_certification>p{
		width: 100%;
		height: 3rem;
		background: white;
	}
	.bjtext1{
		background: white;
		margin-bottom: 4rem;
	}
</style>