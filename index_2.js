// JavaScript Document

       //window.onload=function(){

        var slid=document.getElementById('box1');//获取box1
        var oUl3=document.getElementById('ul3');
        var imgs=oUl3.getElementsByTagName('img');
        var oUl4=document.getElementById('ul4');
        var pages=oUl4.getElementsByTagName('li');//页码下标

         var current2=0;//当前图片编号

            function slideOff2() {
            imgs[current2].className="";   //图片淡出
            pages[current2].className="";
            }

          function slideOn2() {
            imgs[current2].className="active3"; //图片淡入
            pages[current2].className="active2";
          }

          function changeSlide2() { //切换图片的函数
            slideOff2();
            current2++; //自增1
            if(current2>=3) current2=0;
            slideOn2();
          }

          //每2s调用changeSlide函数进行图片轮播
          var slideon2=setInterval(changeSlide2,2000);

          slid.onmouseover=function () {
            clearInterval(slideon2); //当鼠标移入时清除轮播事件
          }
          slid.onmouseout=function () {
            slideon2=setInterval(changeSlide2,2000); //当鼠标移出时重新开始轮播事件
          }

          for(var i=0; i<pages.length; i++) { //定义鼠标移入和移出页码事件
            pages[i].index=i;
            pages[i].onmouseover=function(){
            slideOff2();
            current2=this.index;//得到鼠标停留的页码对应的current
            slideOn2();
            };
          };
        //}
