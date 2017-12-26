<template>
	<div class="attention">
		<div class="attention-content">

			<div class="content-box">
				<div class="sina-title">
					<div class="sina-title-img">
						<img src="static/images/sina-img.png">
					</div>
					<div class="sina-title-content">
						<h1>KobeBryant</h1>
						<p><span class="sina-title-content-time">7小时前</span>来自<span class="sina-title-content-address">蜗壳</span></p>
					</div>
				</div>
				<div class="sina-text">
					<a href="#">#活动名字#</a>
					正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
					<a href="#">#原创视频#*******视频链接</a>
				</div>
				<div class="sina-object">
					<img src="static/images/sina-pic.png" class="sina-object-img">
				</div>
				<div class="sina-features">
					<ul class="sina-features-ul">
						<li><i class="iconfont icon-zhuanfa"></i><span>119</span></li>
						<li><i class="iconfont icon-41"></i><span>663</span></li>
						<li><i class="iconfont icon-zan"></i><span>884</span></li>
					</ul>
				</div>
			</div>

			<div class="content-box">
				<div class="sina-title">
					<div class="sina-title-img">
						<img src="static/images/sina-img.png">
					</div>
					<div class="sina-title-content">
						<h1>KobeBryant</h1>
						<p><span class="sina-title-content-time">7小时前</span>来自<span class="sina-title-content-address">蜗壳</span></p>
					</div>
				</div>
				<div class="sina-text">
					<a href="#">#活动名字#</a>
					正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
					<a href="#">#原创视频#*******视频链接</a>
				</div>
				<div class="sina-object">
					<img src="static/images/sina-pic.png" class="sina-object-img">
				</div>
				<div class="sina-features">
					<ul class="sina-features-ul">
						<li><i class="iconfont icon-zhuanfa"></i><span>119</span></li>
						<li><i class="iconfont icon-41"></i><span>663</span></li>
						<li><i class="iconfont icon-zan"></i><span>884</span></li>
					</ul>
				</div>
			</div>

			<div class="content-box">
				<div class="sina-title">
					<div class="sina-title-img">
						<img src="static/images/sina-img.png">
					</div>
					<div class="sina-title-content">
						<h1>KobeBryant</h1>
						<p><span class="sina-title-content-time">7小时前</span>来自<span class="sina-title-content-address">蜗壳</span></p>
					</div>
				</div>
				<div class="sina-text">
					<a href="#">#活动名字#</a>
					正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
					<a href="#">#原创视频#*******视频链接</a>
				</div>
				<div class="sina-object">
					<img src="static/images/sina-pic.png" class="sina-object-img">
				</div>
				<div class="sina-features">
					<ul class="sina-features-ul">
						<li><i class="iconfont icon-zhuanfa"></i><span>119</span></li>
						<li><i class="iconfont icon-41"></i><span>663</span></li>
						<li><i class="iconfont icon-zan"></i><span>884</span></li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return {
				msg: 'attention'
			}
		}
	}
</script>

<style lang="scss">
	.attention-content{

	}

	.content-box{
		padding: .4rem;
		margin-bottom: .5rem;
		background: #ffffff;

		.sina-title{
			width: 100%;
			height: auto;
			overflow: hidden;

			.sina-title-img{
				float: left;
				width: 2.5rem;
				height: 2.5rem;
				margin-right: .4rem;

				img{
					width: 2.5rem;
					height: 2.5rem;
					border-radius: 50%;
				}

			}

			.sina-title-content{
				float: left;
				text-align: left;

				h1{
					color: #f46200;
					font-size: .8rem;
					margin-top: .2rem;
				}

				p{
					font-size: .5rem;
					color: #828282;
					margin-top: .2rem;

					span{

						&.sina-title-content-time{
							margin-right: .4rem;

						}

						&.sina-title-content-address{
							margin-left: .4rem;
							
						}
						
					}
				}
			}


		}


		.sina-text{
			font-size: .7rem;
			text-align: left;
			margin: .4rem 0;

			a{
				color: #507daf;
			}
		}

		.sina-object{

			.sina-object-img{
				width:: 100%;
				height: auto;
			}
		}

		.sina-features{

			ul{
				overflow: hidden;
				padding-top: .4rem;
				margin-top: .4rem;
				border-top: .05rem solid #e6e6e6; 

				li{

					float: left;
					width: 33.3333%;
					color: #929292;
					font-size: .6rem;

					i{
						font-size: .7rem;
						vertical-align: middle;
						margin-right: .2rem;
					}
				}
			}
		}

	}
	
</style>