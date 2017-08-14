<template id="zuoye">
	<div id="app">
		<div class="header">
			<div class="container">
				<div class="header-top">
					<div class="logo">
						<a href="#">1758 <span>定制专家</span></a>
					</div>
					<div class="top-menu">
						<ul>
							<li>
								<router-link to="/design">设计神器</router-link>
							</li>

							<li>
								<router-link to="/album">企业相册</router-link>
							</li>
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
	import Vue from 'vue';
	import Foot from '@/components/Footer'
	export default {
  		data:function(){
			return{
				msg:"aaa"
			}
		},
	  components:{
			"foot": Foot
		}
		
	}
	
</script>

<style lang="scss" scoped type="text/css">
.footer{
	clear: both;
}
	* {
		padding: 0;
		margin: 0;
	}
	
	body a {
		transition: 0.5s all;
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
	
	.top-menu {
		float: right;
		margin-top: 1.5em;
		margin-right: 10px;
	}
	
	.top-menu ul li {
		display: inline-block;
		margin: 0.5em 1em;
	}
	
	.top-menu ul li a:hover {
		color: #DA6A3C;
	}
	
	.top-menu ul li a {
		font-size: 1.2em;
		text-decoration: none;
		text-transform: capitalize;
		color: #747474;
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
	
	@media (max-width: 320px) {
		.logo a {
			font-size: 2em;
		}
		span.menu img {
			width: 75%;
		}
	}
</style>push
.l-p{float:left;margin-left:10px;line-height:30px;font-size:12px;color:#999;}
.r-p{float:right;margin-right:10px;line-height:30px;font-size:12px;color:#999;}
.m-show{height:30px;}
	.m-top{width:100%;height:280px;margin-bottom:10px;background:#333a44;}
	.jin{font-size:14px;font-weight:100;color:#ccc;line-height:30px;margin-left:10px;}
	.lst{padding:0 20px 20px 20px;font-size:12px;}
	.lst p{border-bottom:1px solid #404751;line-height:28px;}
	.lst p span{display:inline-block;width:25%;color:#999}
	.lst p:nth-of-type(1) span{color:#fff;font-weight:600;border-bottom:2px solid #404751}
	.lst p:last-child{border:0;}
	.m-center{width:100%;height:180px;margin-bottom:10px;display:flex;flex-flow:row nowrap ;}
	.m-l-center{float:left;margin-right:10px;width:49%;height:100%;background:#333a44;position: relative;}
	.pbu{font-weight: 100;font-size:14px;color:#ccc;line-height:30px;margin-left:10px;}
	.circle{float:left;width: 100px;height: 100px;position: relative;margin:20px 0 0 20px;}
 	
 	#canvas_1{z-index: 1 ;display: block;margin: 0;position: absolute;background: #333a44;left: 0;top: 0;}
 	#canvas_2{z-index: 2; background: transparent;transform:rotate(-90deg); display: block;margin: 0;position: absolute;background: #333a44;left: 0;top: 0;}
 	.canshu{float:left; margin-left:100px;margin-top:50px;}
 	.canshu p:nth-of-type(1){color:#209da3;font-size:14px;margin-bottom:5px;font-weight:600;}
 	.canshu p:nth-of-type(2){color:#5f7b7e;font-size:14px;font-weight:600;}
 	.canshu1{float:left; margin-left:100px;margin-top:50px;}
 	.canshu1 p:nth-of-type(1){color:#209da3;font-size:14px;margin-bottom:5px;font-weight:600;}
 	.canshu1 p:nth-of-type(2){color:#5f7b7e;font-size:14px;font-weight:600;}
 	.xiang{position:absolute;bottom:10px;right:5px;}
 	.xiang a{font-size:14px;color:#209da3;}
	.m-c-center{float:left;width:10px;height:100%;background:#333a44;}
	.m-r-center{float:left;width:49%;height:100%;background:#333a44;}
	.gloab{width:500px;height:130px;/*background:#209DA3;*/}
	.gloab1{width:500px;height:130px;}
	.standard-area {
		background:#ccc;
        width: 500px;
        height: 130px;
        margin:10px 0 0 10px;
    }
  
	.m-footer{width:100%;height:80px;margin-bottom:10px;background:#333a44;}
	.order1{float:left;width:49%;height:80px;position: relative;}
	.l-order{width:100%;height:50px;}
	.l-order div:nth-of-type(1){float:left;margin-left:40px;}
	.l-order div:nth-of-type(1) p:nth-of-type(1){color:#e7b20e;font-weight:600;font-size:14px;}
	.l-order div:nth-of-type(1) p:nth-of-type(2){color:#6e7b83;font-weight:600;font-size:14px;}
 	.l-order div:nth-of-type(2){float:left;margin-left:80px;}
 	.l-order div:nth-of-type(2) p:nth-of-type(1){color:#4077a0;font-weight:600;font-size:14px;}
 	.l-order div:nth-of-type(2) p:nth-of-type(2){color:#6e7b83;font-weight:600;font-size:14px;}
	.order2{float:left;width:10px;height:80px;background:#2e353d;}
	.order3{float:right;width:49%;height:80px;position: relative;}
	.r-order{width:100%;height:50px;}
	.r-order div:nth-of-type(1){float:left;margin-left:40px;}
	.r-order div:nth-of-type(1) p:nth-of-type(1){color:#e7b20e;font-weight:600;font-size:14px;}
	.r-order div:nth-of-type(1) p:nth-of-type(2){color:#6e7b83;font-weight:600;font-size:14px;}
 	.r-order div:nth-of-type(2){float:left;margin-left:80px;}
 	.r-order div:nth-of-type(2) p:nth-of-type(1){color:#4077a0;font-weight:600;font-size:14px;}
 	.r-order div:nth-of-type(2) p:nth-of-type(2){color:#6e7b83;font-weight:600;font-size:14px;}
 	
 	
</style>