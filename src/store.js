import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);
let store=new Vuex.Store({
	state:{
		schoolrangeobj:[],
	    schoolareaobj:[]
	},
	mutations:{
		updaterange:function(state,list){
			state.schoolrangeobj=list;
		},
		updatearea:function(state,list){
			state.schoolareaobj=list;
		},
		resetrange:function(state,sitem){
			let arr;
			arr=state.schoolrangeobj.map(function(v,i){
				if(sitem.index==i){
					v.selected=sitem.selected;
				}else{
					v.selected=false
				}
				return v;
			});
			let selectedall=true;
			arr.forEach(function(v,i){
				if(v.selected){
					selectedall=false;
				}
			})
			if(selectedall){
				arr[0].selected=true;
			}
			state.schoolrangeobj=arr;
		},
		resetarea:function(state,sitem){
			state.schoolareaobj[0].selected=false;
			if(sitem.index==0){
				state.schoolareaobj.map(function(v,i){
					v.selected=(i==0);
					return v;
				})
				return;
			}
			state.schoolareaobj.map(function(v,i){
				if(i==sitem.index){
					v.selected=sitem.selected;
				}
				return v;
			})
			let selectedalls=true;
			state.schoolareaobj.forEach(function(v,i){
				if(v.selected){
					selectedalls=false;
				}
			})
			if(selectedalls){
				state.schoolareaobj[0].selected=true;
			}
			
		},
		clearrange:function(state){
			state.schoolrangeobj.forEach(function(v,i){
				v.selected=(i==0);
			})
		},
		cleararea:function(state){
			state.schoolareaobj.forEach(function(v,i){
				v.selected=(i==0);
			})
		}
	},
	getters:{
		selectedrange:function(state){
			let str='';
			state.schoolrangeobj.forEach(function(v,i){
				if(v.selected){
					str+=v.value;
				}
			})
			return str;
		},
		selectedarea:function(state){
			let arr=[];
			state.schoolareaobj.forEach(function(v,i){
				if(v.selected){
					arr.push(v.value);
				}
			})
			return arr.join(',');
		}
	}
})
export default store;