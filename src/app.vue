<template>
	<div class="box route">
		<p class="words">
			*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！
		</p>
		<ul class="tab">
			<router-link class="items" :to="{path:'/overall'}" :tag="'li'">综合检索</router-link>
			<router-link class="items" :to="{path:'/college'}" :tag="'li'">高校检索</router-link>
			<router-link class="items" :to="{path:'/major'}" :tag="'li'">专业检索</router-link>
		</ul>
		<router-view></router-view>
    </div>
</template>
<script>
	import VueRouter from 'vue-router';
	export default {
		name:'app',
		data(){
			return {}
		}
	}
</script>
<style scoped>
	.box{
		font-size: 16px;
		min-width: 960px;
		max-width: 96%;
		margin: 0 auto;
	}
	.words{
		font-size: 12px;
		color: #f00;
		line-height: 40px;
	}	
	.tab{
		font-size: 0;
		border-bottom: 1px solid #ccc;
	}
	.tab li{
		display: inline-block;
	} 
	.items{
		display: inline-block;
		font-size: 16px;
		min-width: 70px;
		padding: 0 5px;
		height: 35px;
		color:#333;
		text-align: center;
		line-height: 35px;
		cursor:pointer;
	}
	.items.selected{
	    background: rgba(0, 160, 92, 1);
	    color: #fff;
	}
	.router-link-active,.items:hover{
	    background: rgba(0, 160, 92, 1);
	    color: #fff;
	}   
</style>