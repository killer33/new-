<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		
  	}
  },
  methods:{
		ret:function(){
			var that = this;
			if(that.ret=1){
				console.log("ret为1");
				return;
			}
			if(that.ret==-1){
				console.log("登录过期，请重新登录！");
				window.location.href="#/login";
				return;
			}
			if (that.ret==2) {
				console.log("存在错误！");
				return;
			}
		}
	}
}
//调用方法
//this.$parent.ret();
</script>

<style>
body{
	background: #F0F0F0;
}
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
