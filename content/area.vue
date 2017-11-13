<template>
	<div class="schoolarea clear">
                    <div class="lefttitle">高校地区:</div>
                    <div class="rightarea">
                        <items v-for="(v,i) in arealist" v-bind:datas="v" :key="i" :index="i" :catagory="'高校地区'"></items>
                    </div>    
                </div>
</template>
<script>
    import aitems from './items.vue'
	export default{
        props:{
                arealist:{
                    required:true,
                    type:Array
                }
            },
            components:{
                "items":aitems
            }
    }
</script>
<style>

</style>