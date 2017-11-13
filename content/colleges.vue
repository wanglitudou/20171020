<template>
	<div class="boxs1">
		<h6>选考科目分析</h6>
		<h5>科目比例:要求所选科目的专业总数/条件范围内专业总数。以专业为例:经济统计学专业历史所占比例为66.7%,意为选考历史,66.7%的经济统计学专业均可报考。</h5>
		<div class="tabss">
			<table class="tabs1" v-for="x in 2">
				<thead>
					<tr>
						<th>选考科目</th>
						<th>高校数</th>
						<th>专业(类)数</th>
						<th>科目比例</th>
					</tr>
				</thead>
				<tbody v-for="(v,i) in majors">
					<tr>
						<!-- <td>物理</td>
						<td>0</td>
						<td>0.00%</td> -->
						<td>{{v.subject}}</td>
						<td>{{v.collegesCount}}</td>
						<td>{{v.majorCount}}</td>
						<td>{{v.rate}}</td>
					</tr>
				</tbody>
			</table>
		<!--<table class="tab1">-->
			<!--<thead>-->
				<!--<tr>-->
					<!--<th>选考科目</th>-->
					<!--<th>专业(类)数</th>-->
					<!--<th>科目比例</th>-->
				<!--</tr>-->
			<!--</thead>-->
			<!--<tbody>-->
				<!--<tr>-->
					<!--<td>物理</td>-->
					<!--<td>0</td>-->
					<!--<td>0.00%</td>-->
				<!--</tr>-->
			<!--</tbody>-->
		<!--</table>-->
		<!--<table class="tab1">-->
			<!--<thead>-->
				<!--<tr>-->
					<!--<th>选考科目</th>-->
					<!--<th>专业(类)数</th>-->
					<!--<th>科目比例</th>-->
				<!--</tr>-->
			<!--</thead>-->
			<!--<tbody>-->
				<!--<tr>-->
					<!--<td>物理</td>-->
					<!--<td>0</td>-->
					<!--<td>0.00%</td>-->
				<!--</tr>-->
			<!--</tbody>-->
		<!--</table>-->
		</div>
		<table class="tabs2">
			<thead>
				<tr>
					<th>高校地区</th>
					<th>高校名称</th>
					<th>专业(类)</th>
					<th>类中所含专业</th>
					<th>选考科目范围</th>
				</tr>
			</thead>
		</table>
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				majors:[]
			}
		},
		created:function(){
			var vm=this;
			this.$http.get('data/majorsearch.json').then(function(res){
				console.log(res.data.result.analysisData);
				vm.majors=res.data.result.analysisData;
			})
   		}	
     }
</script>
<style>
		table{
			border-collapse: collapse; 
		}
		table tbody tr td{
			border: 1px solid #ccc;
		}
		.boxs1{
			font-size: 16px;
			min-width: 960px;
			max-width: 96%;
			box-sizing: border-box;
			clear:both;
		}
		.boxs1 p{
			display: flex;
		}
		.boxs1 p input{
			width: 400px;
			height: 30px;
			line-height: 30px;
			color: #999;
			font-size: 12px;
			border:3px solid rgba(0, 160, 92, 1);
		}
		.boxs1 p button{
			outline: none;
			border: none;
			width: 80px;
			line-height: 38px;
			background: rgba(0, 160, 92, 1);
			color:white;
			font-size: 14px;
			height:38px;
			text-align: center;
		}
		.boxs1 h6{
			font-size: 12px;
			height: 50px;
			border-bottom:1px solid #ccc;
			line-height: 50px;
		}
		.boxs1 h5{
			font-size: 12px;
			color: red;
			height: 50px;
			line-height: 50px;
		}
		.tabss{
			display: flex;
		}
		.tabs1{
			width: 50%;
			height: auto;
		}
		.tabs1 tr{
			height: 40px;
		}
		.tabs1 tr th{
			flex: 2;
			background: rgba(0, 160, 92, 1);
			font-size: 14px;
			color: white;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.tabs1 tbody tr td{
			flex: 2;
			font-size: 14px;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.tabs2{
			width: 100%;
			height: auto;
			margin-top: 20px;
		}
		.tabs2 thead tr{
			height: 40px;
			display: flex;
		}
		.tabs2 thead tr th{
			flex: 1;
			background: rgba(0, 160, 92, 1);
			font-size: 14px;
			color: white;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		
</style>