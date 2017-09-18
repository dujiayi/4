//window.onload=function(){
    var oDiv=document.getElementById('tempWrap');
    var obd=document.getElementById('bd');

    var oLi1=obd.getElementsByTagName('li');

    var obd2=document.getElementById('bd2');
    var oLi2=obd2.getElementsByTagName('li');



    var tm=null;
    var ti=null;

    var oLi1Width=oLi1[0].offsetWidth;

    var dex=0;

    obd.style.width=oLi1Width*oLi1.length+'px';

    for(var i=0;i<oLi2.length;i++){
        oLi2[i].dex=i;

        oLi2[i].onmouseover=function(){
            show(this.dex)

        }
    }

    oDiv.onmouseover=function(){
        clearInterval(ti);
    }
    oDiv.onmouseout=function(){
        ti=setInterval(function(){
        dex++;
        if(dex==oLi2.length){dex=0};
        show(dex);
    },4000)
    }

    clearInterval(ti);

    ti=setInterval(function(){
        dex++;
        if(dex==oLi2.length){dex=0};
        show(dex);
    },4000)


    function show(j){
        for(var i=0;i<oLi2.length;i++){
                oLi2[i].className="";
            }
            oLi2[j].className="on";

            clearInterval(tm)

            tm=setInterval(function(){
            var iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
                iSpeed=(-obd.offsetLeft-oLi1Width*j)/3;
                obd.style.left=obd.offsetLeft+iSpeed+'px';

            },20)
    }
//}