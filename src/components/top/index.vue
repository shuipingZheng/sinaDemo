<template>
	<div class="top">
		<div class="home-nav" v-if=" fatherComponent == 'home' ">
			<a href="javascript:void(0)" @click="camera()" class="iconfont icon-xiangji icon pull-left"></a>
			<a href="#" class="iconfont icon-saoyisaoerweimasaomasaomiao icon pull-right"></a>
			<div class="home-ul">
				<router-link to="/home/attention" class="active">关注</router-link>
				<router-link to="/home/popular">热门</router-link>
			</div>
		</div>

		<div class="home-nav" v-if=" fatherComponent == 'message' ">
			<a href="#" class="nav-text pull-left">发现群</a>
			<a href="#" class="iconfont icon-message1179263easyiconnet icon pull-right"></a>
			<div class="home-ul">
				<router-link to="" class="active">通知</router-link>
				<router-link to="">聊天</router-link>
			</div>
		</div>


		<div class="home-nav" v-if=" fatherComponent == 'mine' ">
			<a href="#" class="nav-text pull-left">添加好友</a>
			<a href="#" class="nav-text pull-right">设置</a>
			<div class="home-ul">
				<span>我</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'top',
		data () {
			return {
				msg: ''
			}
		},
		props:['fatherComponent'],
		mounted (){
	        this.$nextTick(function(){
	        	// 扩展API加载完毕后调用onPlusReady回调函数 
				document.addEventListener( "plusready", onPlusReady, false );
				// 扩展API加载完毕，现在可以正常调用扩展API 
				function onPlusReady() {
					console.log("plusready");
				}
	        })
	    },
		methods: {
			camera (){
				var cmr = plus.camera.getCamera();
				var res = cmr.supportedVideoResolutions[1];
				var fmt = cmr.supportedVideoFormats[1];
				console.log("Resolution: "+res+", Format: "+fmt);
				cmr.startVideoCapture( function( path ){
						alert( "Capture video success: " + path );  
					},
					function( error ) {
						alert( "Capture video failed: " + error.message );
					},
					{resolution:res,format:fmt}
				);
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
		font-size: .8rem;
		font-weight: 500;
	}
	.icon{
		padding:.4rem .5rem;
		font-size: 1.2rem;
	}
	
	.home-ul{
		overflow: hidden;
		width: 100%;
		position: absolute;
		text-align: center;
		background: #fff;
		z-index: -1;
		height: 2rem;

		span{
			line-height: 2rem;
			font-weight: 500;
		}

		a{
			margin: .2rem .4rem;
			padding: .25rem 0rem;
			display: inline-block;
			font-weight: 500;
			font-size: .8rem;

			&.active{
				border-bottom: 3px solid #ff3900;
				color: #353535;
				font-weight: bold;
			}
		}
	}
</style>