/*TMODJS:{"version":84,"md5":"08f6c1db2d6fe5a667fb6875864b2137"}*/
template('flow/map',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,yunfei=$data.yunfei,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<style> #supplier-showmap{position:absolute;height:100%;width:100%;} </style> <div class="mui-content"> <div class="mui-table-view" style="margin-top: 0;"> <li class="mui-table-view-cell"> ';
$each(data.yunfei,function(yunfei,$index){
$out+=' <span class="mui-pull-right">运费<span>';
$out+=$escape(yunfei.yunfei);
$out+='</span>点</span> <span class="mui-pull-right fanwei_block" style="background:';
$out+=$escape(yunfei.color);
$out+='"></span> ';
});
$out+=' </li> </div> <div id="supplier-showmap" style="height:100%; width:100%;"> </div> </div> <script> /*动态导入js*/ insertJs([\'../js/baidumap.js\']); baidumap.setOptions({ isYunfei:true, isSetYunfei:false, showMapId:\'supplier-showmap\', currentCity:\'';
$out+=$escape(data.cityname);
$out+='\' }); baidumap.showMap(';
$out+=$escape(data.id);
$out+='); </script>';
return new String($out);
});