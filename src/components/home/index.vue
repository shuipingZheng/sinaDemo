<template>
	<div class="home">
		<div class="home-nav">
			<a href="#" class="iconfont icon-xiangji icon pull-left"></a>
			<a href="#" class="iconfont icon-saoyisaoerweimasaomasaomiao icon pull-right"></a>
			<div class="home-ul">
				<router-link to="/home/attention" class="active">关注</router-link>
				<router-link to="/home/popular">热门</router-link>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name: 'home',
		data () {
			return {
				msg: 'home'
			}
		}
	}

</script>

<style lang="scss" scoped>
	.home-nav{
		position: fixed;
		top: 0rem;
		left: 0rem;
		height: 2rem;
		width: 100%;
		box-shadow: .05rem .05rem .25rem #ccc;
		background: #fff;

		a{
			color: #323232;
		}
	}
	.icon{
		padding:.25rem .5rem;
		font-size: 1.4rem;
	}
	
	.home-ul{
		overflow: hidden;
		width: auto;
		position: absolute;
		left: 2rem;
		right: 2rem;
		text-align: center;
		background: #fff;

		a{
			margin: 0rem .4rem;
			padding: .25rem 0rem;
			display: inline-block;
			font-weight: 500;
			font-size: 1rem;

			&.active{
				border-bottom: 3px solid #ff3900;
				color: #353535;
				font-weight: bold;
			}
		}
	}
</style>