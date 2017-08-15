<template>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      childColor:{},
      msg: 'Welcome to Your Vue.js App',
      sss:"green",
    }
    props:["childColor"]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
svg{
	width: 100%;
	height: 100%;
}
</style>
