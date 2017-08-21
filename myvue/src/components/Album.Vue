<template>
	<div id="app">
		<ul v-for="item in data">
			<li>{{item.ext}}</li>
		</ul>
		<button v-bind:id="id1" @click="data2(i1)">前进</button>
		<button v-bind:id="id2" @click="data2(i2)">后退</button>
	</div>
</template>
<script>
	export default {
		name: "Album",
		data() {
			return {
				images: [],
				id1:"a",
				id2: "b",
				data: "",
				i1:"id1",
				i2:"id2"
			}
		},
		methods: {
			getData: function() {
				this.$http.get('http://192.168.1.116:8080/yqwb_website/photo/getAllPhoto?type=album').then(function(res) {
					console.log(res.data.data[0])
					this.data = res.data.data
					this.id = res.data.data[0].id
				})
			},
			data2:function (id) {
				if(id == "id1"){
					console.log(1)
				}else{
					console.log(2)
				}  
				var url = 'http://192.168.1.116:8080/yqwb_website/photo/getPhototByIdAndType'
				this.$http.get(url , {"type":"album","id":this.id1}).then(function(res) {
					console.log(res)
//					this.data = res.data.data
//					this.id = res.data.data[0].id
				})
			}
		},

		mounted: function() {
			this.$nextTick(function() {
				this.getData();
			})
		}
	}
</script>