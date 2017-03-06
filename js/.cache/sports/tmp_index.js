/*TMODJS:{"version":75,"md5":"ebfe5ddf6330e31706f5cc0de0c20924"}*/
template('sports/tmp_index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,area_list=$data.area_list,area=$data.area,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' <div class="mui-table-view margin_top_20 sports_area_btn"> <div class="mui-table-view-cell mui-text-center"> <span>区域</span><span class="mui-icon mui-icon-arrowdown"></span> </div> </div>  <div class="sports_area mui-row mui-text-center" style="display: none;"> ';
$each(area_list,function(area,$index){
$out+=' <div class="mui-col-xs-3 sports_area_item" data-dongwang-id="';
$out+=$escape(area.dongwang_id);
$out+='">';
$out+=$escape(area.region_name);
$out+='</div> ';
});
$out+=' </div> ';
return new String($out);
});