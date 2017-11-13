import overall from '../content/overall.vue';
import college from '../content/college.vue';
import major from '../content/major.vue';
var routes=[
	{
		path:'/',
		redirect:'/overall'
	},
	{
		name:'overall',
		path:'/overall',
		component:overall
	},
	{
		name:'college',
		path:'/college',
		component:college
	},
	{
		name:'major',
		path:'/major',
		component:major
	}
]
export default routes;