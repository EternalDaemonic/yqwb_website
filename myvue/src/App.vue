<template>
  <div id="app">
  	<div class="header">
				<div class="container">
					<div class="header-top">
						<div class="logo">
							<a href="index.html">1758 <span>定制专家</span></a>
						</div>
						<div class="top-menu">
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
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped type="text/css">
  *{
    padding: 0;
    margin: 0;
  }
	body a{
 		 transition:0.5s all;
}
  .header {
    background-color: #f8f8f8;
    padding: 1em 0;
  }
  .logo {
    float: left;
  }
  .logo a {
    display: block;
    font-size: 4em;
    text-decoration: none;
    color: #DA6A3C;
    font-weight: 600;
  }
  .logo span {
    color: #222;
  }
  .top-menu{
    float:right;
    margin-top:1.5em;
    margin-right: 10px;
  }
  .top-menu ul li{
    display:inline-block;
    margin:0.5em 1em;
  }
  .top-menu ul li a:hover {
    color: #DA6A3C;
  }
  .top-menu ul li a {
    font-size: 1.2em;
    text-decoration: none;
    text-transform: capitalize;
    color:#747474;
  }
  @media (max-width: 991px) {
    .header {
      padding: 0.5em 0;
    }
    .logo a {
      font-size: 3em;
    }
  }
  @media (max-width: 640px) {
    .logo a {
      font-size: 2.5em;
    }
    .top-menu {
      margin-top: 1em;
    }
  }
  @media (max-width: 480px) {
    .logo a {
      font-size: 2.4em;
    }

    .top-menu {
      margin-top: 0.7em;
    }
  }

  @media (max-width: 320px){
    .logo a {
      font-size: 2em;
    }
    span.menu img {
      width: 75%;
    }}
</style>push

