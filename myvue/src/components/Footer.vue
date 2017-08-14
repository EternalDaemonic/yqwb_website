<template>
	<div class="footer">
		<div class="container">
				<div class="col-md-6 col-xs-6">
          <span class="footer1">版权所有@1758定制专家</span><br>
          <span class="footer2">联系方式:021-60546066</span>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				author: "微信公众号 jinkey-love",
				articles: [],
			}
		}
	}
</script>

<style lang="scss">
	.footer{
    font-family: "宋体";
    background-color: gray;
    font-size: 1em;
	}
  .container{
    margin: 0;
    padding: 0;
  }

	ul{
		list-style: none;
	}
</style>
