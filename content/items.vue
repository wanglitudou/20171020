<template>
	<span class="items" @click="toggle" :class="{selected:datas.selected}">{{datas.value}}</span>
</template>
<script>
	export default{
		props:['index','catagory','datas'],
        methods:{
            toggle:function(){
               // bus.$emit(this.catagory,{
               //      index:this.index,
               //      selected:!this.datas.selected
               //  })
               if(this.catagory=='高校层次'){
	               	this.$store.commit('resetrange',{
	               		index:this.index,
	               		selected:!this.datas.selected
	               });
	               	return;
               }
              if(this.catagory=='高校地区'){
              	 this.$store.commit('resetarea',{
	               		index:this.index,
	               		selected:!this.datas.selected
	               });
              } 
              
            }
        }
	}
</script>
<style>
	
</style>