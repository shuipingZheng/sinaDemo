<template>
	<div class="message">
		<div class="search">
			<input type="text" name="" class="search-input" placeholder="搜索">
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'message',
		data () {
			return {
				msg: 'message'
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
	.nav-text{
		padding:.5rem;
		font-size: .9rem;
	}
	.icon{
		padding:.25rem .5rem;
		font-size: 1.4rem;
	}
	
	.home-ul{
		overflow: hidden;
		width: auto;
		position: absolute;
		left: 3.5rem;
		right: 3.5rem;
		text-align: center;
		background: #fff;

		a{
			margin: 0rem .4rem;
			padding: .25rem 0rem;
			display: inline-block;
			color: #939393;
			font-weight: 500;
			font-size: 1rem;

			&.active{
				border-bottom: 3px solid #ff3900;
				color: #353535;
				font-weight: bold;
			}
		}
	}

	.search{
		padding: 0rem .5rem;

		.search-input{
			width: 100%;
			height: 1.5rem;
			background: #fff;
			color: #353535;
			border-radius: .25rem;
			border: none;
			text-indent: 1rem;
			font-size: .4rem;

		}
	}
</style>