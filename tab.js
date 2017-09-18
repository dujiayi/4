// JavaScript Document
//window.onload=function(){
	var oA=document.getElementById('neijing');
	var oB=document.getElementById('waijing');
	var oC=document.getElementById('zhuti');
	var oDress=document.getElementById('dress');
	var oDress2=document.getElementById('dress2');
	var oDress3=document.getElementById('dress3');
	
	oA.onclick=function(){
		 oDress.className='dress';
		 oDress2.className='dress2';
		 oDress3.className='dress3';
		};
	oB.onclick=function(){
		 oDress.className='dress2';
		 oDress2.className='dress';
		 oDress3.className='dress3';
		};	
	oC.onclick=function(){
		 oDress.className='dress3';
		 oDress2.className='dress2';
		 oDress3.className='dress';
		};	
	
	//}