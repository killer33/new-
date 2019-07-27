<template>
  	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../build/yml.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../build/bz1.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../build/mazda.jpg" alt="">
            </div>
        </div>
    </div>
</template>


<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data(){
    return{
    	
    }
  },
	mounted() {
	  
	     var mySwiper = new Swiper('.swiper-container', {})
	}
}
</script>
<style scoped>
 .swiper-container {
    width: 30rem;
    height: 20rem;
}
img{
  width:27rem;
  height:18rem;
}
div.swiper-wrapper{
  text-align: center;
}
div.swiper-wrapper{

  width:25rem;
}
</style>
