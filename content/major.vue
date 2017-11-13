<template>
	<div class="box1">
		<p><input type="text" placeholder="请输入要搜索的专业名称"><button>检索</button></p>
		<h6>选考科目分析</h6>
		<h5>科目比例:要求所选科目的专业总数/条件范围内专业总数。以专业为例:经济统计学专业历史所占比例为66.7%,意为选考历史,66.7%的经济统计学专业均可报考。</h5>
		<div class="tabs">
			<table class="tab1" v-for="x in 3">
				<thead>
					<tr>
						<th>选考科目</th>
						<th>专业(类)数</th>
						<th>科目比例</th>
					</tr>
				</thead>
				<tbody v-for="(v,i) in colleges">
					<tr>
						<!-- <td>物理</td>
						<td>0</td>
						<td>0.00%</td> -->
						<td>{{v.subject}}</td>
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
		<table class="tab2">
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
				colleges:[]
			}
		},
		created:function(){
			var vm=this;
			this.$http.get('data/collegesearch.json').then(function(res){
				console.log(res.data.result.analysisData);
				vm.colleges=res.data.result.analysisData;
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
		.box1{
			font-size: 16px;
			min-width: 960px;
			max-width: 96%;
			margin: 0 auto;
			box-sizing: border-box;
		}
		.box1 p{
			display: flex;
		}
		.box1 p input{
			width: 400px;
			height: 30px;
			line-height: 30px;
			color: #999;
			font-size: 12px;
			border:3px solid rgba(0, 160, 92, 1);
		}
		.box1 p button{
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
		.box1 h6{
			font-size: 12px;
			height: 50px;
			border-bottom:1px solid #ccc;
			line-height: 50px;
		}
		.box1 h5{
			font-size: 12px;
			color: red;
			height: 50px;
			line-height: 50px;
		}
		.tab1{
			width: 33.3%;
			height: auto;
		}
		.tab1 tr{
			height: 40px;
		}
		.tab1 tr th{
			flex: 1;
			background: rgba(0, 160, 92, 1);
			font-size: 14px;
			color: white;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.tab1 tr th:nth-child(1){
			flex: 1.5;
		}
		.tab1 tr th:nth-child(4){
			flex: 1.5;
		}
		.tab1 tr th:nth-child(7){
			flex: 1.5;
		}
		.tab1 tbody tr td{
			flex: 1;
			font-size: 14px;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.tab1 tbody tr td:nth-child(1){
			flex: 1.5;
		}
		.tab1 tbody tr td:nth-child(4){
			flex: 1.5;
		}
		.tab1 tbody tr td:nth-child(7){
			flex: 1.5;
		}
		.tab2{
			width: 100%;
			height: auto;
			margin-top: 20px;
		}
		.tab2 thead tr{
			height: 40px;
		}
		.tab2 thead tr th{
			flex: 1;
			background: rgba(0, 160, 92, 1);
			font-size: 14px;
			color: white;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.tab2 thead tr th:nth-child(3){
			flex: 4;
		}
		.tab2 thead tr th:nth-child(4){
			flex: 4;
		}
		.tabs{
			display: flex;
		}
</style>