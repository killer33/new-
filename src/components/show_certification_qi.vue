<template>
	<!--展示企业认证信息-->
	<div class="show_certification_qi">
		<div class="show_certification_head">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>企业认证信息</p>
		</div>
		<div class="show_qi">
			<div><p>法人姓名：</p><p>{{realdata.realname}}</p></div>
			<div><p>法人电话：</p><p>{{realdata.phone}}</p></div>
			<div><p>身份证号：</p><p>{{realdata.idcard}}</p></div>
			<div><p>企业类型：</p><p>{{realdata.company_type_id}}</p></div>
			<div><p>企业名称：</p><p>{{realdata.company_name}}</p></div>
			<div><p>企业邮箱：</p><p>{{realdata.email}}</p></div>
			<div><p>企业固话：</p><p>{{realdata.telephone}}</p></div>
			<div><p>企业地址：</p><p class="add">{{realdata.company_address}}</p></div>
			<div><p>企业唯一注册号：</p><p>{{realdata.company_idcard}}</p></div>
			<div><p>缴纳保证金金额：</p><p>{{realdata.money}}</p></div>
		</div>
		<div class="showtu">
			<ul>
				<li>
					<div><img :src="imgUrl+realdata.logo_src"/></div>
					<p>企业logo</p>
				</li>
				<li>
					<img :src="imgUrl+realdata.front_pic"/>
					<p>法人身份证正面</p>
				</li>
				<li>
					<img :src="imgUrl+realdata.behind_pic"/>
					<p>法人身份证反面</p>
				</li>
				<li>
					<img :src="imgUrl+realdata.hand_pic"/>
					<p>法人手持身份证</p>
				</li>
				<li>
					<img :src="imgUrl+realdata.company_pic"/>
					<p>营业执照</p>
				</li>
			</ul>
		</div>
		<div class="bjwb">
			<quill-editor 
		        v-model="content" 
		        ref="myQuillEditor" 
		        :options="editorOption" 
		        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
		        @change="onEditorChange($event)">
		    </quill-editor>
		</div>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
    export default{
        data(){
            return {
                content:null,
                editorOption:{},
                realdata:{},
                imgUrl:''
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
        	this.imgUrl=imgJoin;
        	this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/show_company_type",
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				console.log(data);
		  				that.realdata=data.data;
		  			},
		  			error:function(err){
						console.log("请求失败");
					}
				});
			})
        }
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
	.show_qi{
		width: 100%;
		background: white;
		margin-top: 0.3rem;
	}
	.show_qi>div{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		font-size: 1.5rem;
	}
	.show_qi>div>p{
		float: left;
	}
	.show_qi>div>p:first-child{
		width: 35%;
    	margin-left: 1.3rem;
	}
	.showtu{
		width: 100%;
		background: white;
	}
	.showtu>ul{
		padding: 3% 0%;
	}
	.showtu>ul>li{
		width: 60%;
	    margin: auto;
	    height: 12rem;
	    overflow: hidden;
	    margin-top: 0.5rem;
	    border-radius: 0.5rem;
	}
	.showtu>ul>li>div{
		width: 9.5rem;
		height: 9.5rem;
		border-radius: 50%;
		overflow: hidden;
		margin: auto;
	}
	.showtu>ul>li>div>img{
		width: 100%;
		height: 100%;
	}
	.showtu>ul>li>img{
		width: 100%;
		height: 80%;
	}
	.showtu>ul>li>p{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		font-size: 1.5rem;
	}
	.bjwb{
		background: white;
		margin-bottom: 2rem;
	}
</style>