<template>
<div id="design">
	<div id="left">
		<component :is='currentView' keep-alive :child-color="color"></component>
	</div>
	<div id="right">
		<div id="scoll">
			<div id="svg">
				<div class="svg"  @click='tabToggle("tab01")'>
					<img src="../../static/img/img1.jpg" alt="" />				</div>
				<div class="svg"  @click='tabToggle("tab02")'>
					<img src="../../static/img/img2.jpg" alt="" />				</div>
				<div class="svg"  @click='tabToggle("tab03");'>
					333
				</div>
			</div>
		</div>
	
	<div id="button">
		<button v-bind:style="{'background-color':color.red}"></button>
		<button v-bind:style="{'background-color':color.green}"></button>
		<button v-bind:style="{'background-color':color.pink}"></button>
		<button v-bind:style="{'background-color':color.yellow}"></button>
		<button v-bind:style="{'background-color':color.blue}"></button>
		<button v-bind:style="{'background-color':color.skyblue}"></button>
		<button v-bind:style="{'background-color':color.gray}"></button>
		<button v-bind:style="{'background-color':color.black}"></button>
		<button v-bind:style="{'background-color':color.greenyellow}"></button>
		<button v-bind:style="{'background-color':color.yellowgreen}"></button>
		<button v-bind:style="{'background-color':color.orange}"></button>
		<button v-bind:style="{'background-color':color.purple}"></button>
		<button v-bind:style="{'background-color':color.palegreen}"></button>
		<button v-bind:style="{'background-color':color.aqua}"></button>
		<button v-bind:style="{'background-color':color.aquamarine}"></button>
		<button v-bind:style="{'background-color':color.brown}"></button>
		<button v-bind:style="{'background-color':color.burlywood}"></button>			
		<button v-bind:style="{'background-color':color.cadetblue}"></button>
		<button v-bind:style="{'background-color':color.chartreuse}"></button>
		<button v-bind:style="{'background-color':color.coral}"></button>
		<button v-bind:style="{'background-color':color.cornflowerblue}"></button>
		<button v-bind:style="{'background-color':color.cyan}"></button>
		<button v-bind:style="{'background-color':color.darkgoldenrod}"></button>
		<button v-bind:style="{'background-color':color.firebrick}"></button>
		<button v-bind:style="{'background-color':color.gold}"></button>
		<button></button>			
		<button></button>
	</div>
	</div>
</div>
</template>

<script>
	import tab01 from '@/components/tab01'
	import tab02 from '@/components/tab02'
export default {
  name: 'Design',
  data () {
    return {
    	msg: 'Welcome to Your Vue.js App',
    	currentView: 'tab01',
    	color:{
    	  sss:"red",
	      red:"red",
	      green:"green",
	      pink:"pink",
	      yellow:"yellow",
	      blue:"blue",
	      skyblue:"skyblue",
	      gray:"gray",
	      black:"black",
	      yellowgreen:"yellowgreen",
	      greenyellow:"greenyellow",
	      white:"white",
	      palegoldenrod:'palegoldenrod',
	      orange: 'orange',
		  purple:'purple',
		  palegreen: 'palegreen',
		  aqua: 'aqua',
		  aquamarine:'aquamarine',
		  brown:'brown',
		  burlywood:'burlywood',
		  cadetblue:'cadetblue',
		  chartreuse:'chartreuse',
		  coral:'coral',
		  cornflowerblue:'cornflowerblue',
		  cyan:'cyan',
		  darkgoldenrod: 'darkgoldenrod',
		  firebrick:'firebrick',
		  gold:"gold",
    	}
    	
    }
  },
  methods: {
    tabToggle: function(tabText) {
        this.currentView = tabText
        }
           },
  components: {
    tab01: tab01,
    tab02: tab02
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
	width: 30%;
}
#left{
	display: inline-block;
	float: left;
	width: 300px;
	height: 300px;
}
#right{
	width: 600px;
	float: right;
	height: 400px;
}
#scoll{
	width: 600px;
	height:200px;
	overflow-x: scroll;
	overflow-y: hidden;
}
#svg{
	width: 1000px;
	height: 200px;
}
#button{
	width: 600px;
	height: 200px;
	float:left;
}
.svg{
	width: 200px;
	height: 200px;
	float: left;
}
embed{
	width: 200px;
	height: 200px;
}
button{
	float: left;
	width: 50px;
	height: 50px;
	border:none;
	background-color: white;
}
</style>
