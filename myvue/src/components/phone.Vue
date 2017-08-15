<template>
<div id="design" class="container-fluid">
	<div id="left">
		<component :is='currentView' keep-alive :child-color="childColor"></component>
	</div>
	<div id="right" class="col-lg-7 col-md-7">
		<div id="scoll" class="col-lg-11 col-md-11">
			<div id="svg">
				<div class="svg"  @click='tabToggle("tab01")'>
					<img src="../../static/img/img/未标题-2-01.png" alt="" />				</div>
				<div class="svg"  @click='tabToggle("tab02")'>
					<img src="../../static/img/img/小黄人2.png" alt="" />				</div>
				<div class="svg"  @click='tabToggle("tab03");'>
					<img src="../../static/img/img/小黄人1-03.png"/>
				</div>
				<div class="svg"  @click='tabToggle("tab04");'>
					<img src="../../static/img/img/小黄人1-04.png"/>
				</div>
				<div class="svg"  @click='tabToggle("tab05");'>
					<img src="../../static/img/img/小黄人1-05.png"/>
				</div>
				<div class="svg"  @click='tabToggle("tab06");'>
					<img src="../../static/img/img/小黄人1-06.png"/>
				</div>
				<div class="svg"  @click='tabToggle("tab07");'>
					<img src="../../static/img/img/小黄人1-07.png"/>
				</div>
				<div class="svg"  @click='tabToggle("tab08");'>
					<img src="../../static/img/img/小黄人1-08.png"/>
				</div>
			</div>
		</div>
		<div id="button" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<button @click="change(color.red)" v-bind:style="{'background-color':color.red}"></button>
		<button @click="change(color.green)" v-bind:style="{'background-color':color.green}"></button>
		<button @click="change(color.pink)" v-bind:style="{'background-color':color.pink}"></button>
		<button @click="change(color.yellow)" v-bind:style="{'background-color':color.yellow}"></button>
		<button @click="change(color.blue)" v-bind:style="{'background-color':color.blue}"></button>
		<button @click="change(color.skyblue)" v-bind:style="{'background-color':color.skyblue}"></button>
		<button @click="change(color.gray)" v-bind:style="{'background-color':color.gray}"></button>
		<button @click="change(color.black)" v-bind:style="{'background-color':color.black}"></button>
		<button @click="change(color.greenyellow)" v-bind:style="{'background-color':color.greenyellow}"></button>
		<button @click="change(color.yellowgreen)" v-bind:style="{'background-color':color.yellowgreen}"></button>
		<button @click="change(color.orange)" v-bind:style="{'background-color':color.orange}"></button>
		<button @click="change(color.purple)" v-bind:style="{'background-color':color.purple}"></button>
		<button @click="change(color.palegreen)" v-bind:style="{'background-color':color.palegreen}"></button>
		<button @click="change(color.aqua)" v-bind:style="{'background-color':color.aqua}"></button>
		<button @click="change(color.aquamarine)" v-bind:style="{'background-color':color.aquamarine}"></button>
		<button @click="change(color.brown)" v-bind:style="{'background-color':color.brown}"></button>
		<button @click="change(color.burlywood)" v-bind:style="{'background-color':color.burlywood}"></button>			
		<button @click="change(color.cadetblue)" v-bind:style="{'background-color':color.cadetblue}"></button>
		<button @click="change(color.chartreuse)" v-bind:style="{'background-color':color.chartreuse}"></button>
		<button @click="change(color.coral)" v-bind:style="{'background-color':color.coral}"></button>
		<button @click="change(color.cornflowerblue)" v-bind:style="{'background-color':color.cornflowerblue}"></button>
		<button @click="change(color.cyan)" v-bind:style="{'background-color':color.cyan}"></button>
		<button @click="change(color.darkgoldenrod)" v-bind:style="{'background-color':color.darkgoldenrod}"></button>
		<button @click="change(color.firebrick)" v-bind:style="{'background-color':color.firebrick}"></button>
		<button @click="change(color.gold)" v-bind:style="{'background-color':color.gold}"></button>
		<button></button>			
		<button></button>
	</div>
	</div>
</div>
</template>

<script>
	import tab01 from '@/components/tab01'
	import tab02 from '@/components/tab02'
	import tab03 from '@/components/tab03'
	import tab04 from '@/components/tab04'
	import tab05 from '@/components/tab05'
	import tab06 from '@/components/tab06'
	import tab07 from '@/components/tab07'
	import tab08 from '@/components/tab08'
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
    	},
    	childColor:""
    }
  },
  methods: {
    	tabToggle: function(tabText) {
        	this.currentView = tabText
       		},
		change: function (color){
			this.childColor=color
			console.log(this.childColor)
		} 
	},
  components: {
    tab01: tab01,
    tab02: tab02,
    tab03: tab03,
    tab04: tab04,
    tab05: tab05,
    tab06: tab06,
    tab07: tab07,
    tab08: tab08,
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#left{
	display: inline-block;
	float: left;
	display:inline;
	width: 300px;
}
#right{
	float: right;
	margin-right: 30px;
}
#scoll{
	height:200px;
	overflow-x: scroll;
	overflow-y: hidden;
}
#svg{
	width: 1000px;
	height: 200px;
}
#button{
	height: 200px;
	float:left;
}
#svg img:first-child{
	float: left;
	margin-top: 30px;
}
img{
	width: 100px;
}
embed{
	width: 200px;
	height: 200px;
}
button{
	float: left;
	width:50px;
	height:50px;
	border:none;
	background-color: white;
}

@media all screen and (min-width:320px) and (max-width: 640px) {
	#left{
		width: 200px;
	}
	#right{
		width: 300px;
		height: 300px;
	}
	#scoll{
		float: right;
		width: 120px;
		height: 1000px;
		overflow-y: scroll;
	}
	#button{
		float: right;
		width: 20px;
		height: 200px;
		overflow-y: scroll;
	}
}
</style>
