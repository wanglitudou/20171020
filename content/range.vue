<template>
	<div class="schoolrange clear">
        <div class="lefttitle">高校层次:</div>
        <div class="rightarea">
            <items v-for="(v,i) in rangelist" v-bind:datas="v" :key="i" :index="i" :catagory="'高校层次'"></items>
        </div>
    </div>
</template>
<script>
    import ritems from './items.vue'
	export default{
        props:{
            rangelist:{
                required:true,
                type:Array
            }
        },
        components:{
                "items":ritems
            }
    }
</script>
<style>
	
</style>