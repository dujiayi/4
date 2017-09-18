// JavaScript Document
//window.onload=function(){

        var oSlid=document.getElementById('box');//获取box
        var oUl1=document.getElementById('ul1');
        var oa=document.getElementById('a');
        var oImg=oUl1.getElementsByTagName('img');
        var oUl2=document.getElementById('ul2');
        var oPages=oUl2.getElementsByTagName('li');//页码下标

        var index=0;//当前图片编号

            function sOff() {
            oImg[index].className="";   //图片淡出
            oPages[index].className="";
            }

          function sOn() {
            oImg[index].className="active"; //图片淡入
            oPages[index].className="active";
          }

          function cSlide() { //切换图片的函数
            sOff();
            index++; //自增1
            if(index>=5) index=0;
            sOn();
          }

          //每2s调用changeSlide函数进行图片轮播
          var son=setInterval(cSlide,2000);

          oSlid.onmouseover=function () {
            clearInterval(son); //当鼠标移入时清除轮播事件
          }
          oSlid.onmouseout=function () {
            son=setInterval(cSlide,2000); //当鼠标移出时重新开始轮播事件
          }

          for(var i=0; i<oPages.length; i++) { //定义鼠标移入和移出页码事件
            oPages[i].index=i;
            oPages[i].onmouseover=function(){
            sOff();
            index=this.index;//得到鼠标停留的页码对应的cur
            sOn();
            };
          };
       // }