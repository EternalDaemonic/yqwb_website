<template>
  <div id="app">
  	<div class="header">
				<div class="container">
					<div class="header-top">
						<div class="logo">
							<a href="index.html">1758 <span>定制专家</span></a>
						</div>
						<div class="top-menu">
							<span class="menu"><img src="images/nav.png" alt=""/> </span>
							<ul>
								<li><router-link to="/design">设计神器</router-link></li>
								<li><router-link to="/album">企业相册</router-link></li>
							</ul>
						</div>
						<div class="clerfix"></div>
					</div>
				</div>
			</div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '@/components/Footer'

export default {
  name: 'app',
  data(){
  	return {
  		msg:""
  	}
  },
  components: {
    'foot': Foot
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
