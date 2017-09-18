// JavaScript Document
//window.onload=function(){

        var slids=document.getElementById('box2');//获取box1
        var oUl5=document.getElementById('ul5');
        var img=oUl5.getElementsByTagName('img');
        var oUl6=document.getElementById('ul6');
        var page=oUl6.getElementsByTagName('li');//页码下标

        var current=0;//当前图片编号

            function slideOff() {
            img[current].className="";   //图片淡出
            page[current].className="";
            }

          function slideOn() {
            img[current].className="hover"; //图片淡入
            page[current].className="hover";
          }

          function changeSlide() { //切换图片的函数
            slideOff();
            current++; //自增1
            if(current>=3) current=0;
            slideOn();
          }

          //每2s调用changeSlide函数进行图片轮播
          var slideon=setInterval(changeSlide,2000);

          slids.onmouseover=function () {
            clearInterval(slideon); //当鼠标移入时清除轮播事件
          }
          slids.onmouseout=function () {
            slideon=setInterval(changeSlide,2000); //当鼠标移出时重新开始轮播事件
          }

          for(var i=0; i<page.length; i++) { //定义鼠标移入和移出页码事件
            page[i].index=i;
            page[i].onmouseover=function(){
            slideOff();
            current=this.index;//得到鼠标停留的页码对应的current
            slideOn();
            };
          };
        //}