/*TMODJS:{"version":121,"md5":"f9bbac68a1df9b1ac8da334889a853c2"}*/
template('cake/index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,banner=$data.banner,$index=$data.$index,$escape=$utils.$escape,i=$data.i,cate=$data.cate,attr=$data.attr,good=$data.good,$out='';$out+='<div class="mui-content">  <div id="slider" class="mui-slider" > <div class="mui-slider-group mui-slider-loop"> <div class="mui-slider-item mui-slider-item-duplicate slide-a"> <a href=""> <img src=""> </a> </div> ';
$each(data.banner,function(banner,$index){
$out+=' <div class="mui-slider-item"> <a data-href="';
$out+=$escape(banner.ad_link);
$out+='" class="href_click"> <img src="';
$out+=$escape(banner.ad_code);
$out+='"> </a> </div> ';
});
$out+=' <div class="mui-slider-item mui-slider-item-duplicate slide-c"> <a href=""> <img src=""> </a> </div> </div> <div class="mui-slider-indicator"> ';
$each(data.banner,function(banner,i){
$out+=' <div class="mui-indicator ';
if(i==0){
$out+=' mui-active ';
}
$out+='"></div> ';
});
$out+=' </div> </div>  <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"> <div class="mui-scroll"> ';
$each(data.cate,function(cate,$index){
$out+=' <a class="mui-control-item cake_pinpai_item href_click" data-href="list.html?id=';
$out+=$escape(cate.cid);
$out+='"> <img src="../images/icon/cake/nav-';
$out+=$escape(cate.id);
$out+='.png" alt="" /> <span>';
$out+=$escape(cate.name);
$out+='</span> </a> ';
});
$out+=' </div> </div>  ';
$each(data.goods,function(attr,$index){
$out+=' <div class="floor_item"> <div class="floor_title mui-row"> <h4 class="mui-pull-left"><span class="floor_title_icon"></span><span>';
$out+=$escape(attr.attrName);
$out+='</span></h4> <a data-href="list.html?id=';
$out+=$escape(attr.brandId);
$out+='&filter_attr=';
$out+=$escape(attr.filterId);
$out+='" class="href_click"> <div class="mui-pull-right"><span class="floor_more">更多</span><span class="mui-icon mui-icon-arrowright"></span></div> </a> </div> <div class="mui-row floor_list"> ';
$each(attr.goods,function(good,$index){
$out+=' <div class="mui-col-xs-6 floor_listBox"> <a data-href="details.html?id=';
$out+=$escape(good.goods_id);
$out+='" class="href_click floor_list_a"> <div class="mui-pull-left floor_listLeft"> <div class="floor_list_name mui-ellipsis-2">';
$out+=$escape(good.goods_name);
$out+='</div> <div class="floor_list_price"><em>';
$out+=$escape(good.shop_price);
$out+='</em>点</div> </div> <div class="mui-pull-right"> <img src="';
$out+=$escape(good.goods_thumb);
$out+='" alt=""/> </div> </a> </div> ';
});
$out+=' </div> </div> ';
});
$out+=' </div> <script> var img= jQuery(\'.mui-slider-item:nth-child(2) img\').attr(\'src\'); var img1=jQuery(\'.mui-slider-item:nth-last-child(2) img\').attr(\'src\'); jQuery(\'.slide-c img\').attr(\'src\',img); jQuery(\'.slide-a img\').attr(\'src\',img1); jQuery.hrefClick(); </script>';
return new String($out);
});