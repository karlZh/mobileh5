/*TMODJS:{"version":1,"md5":"7b72de7a6c25194994b81a46df5981a4"}*/
template('personal/tmp_shouhuo_list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,val=$data.val,$index=$data.$index,$escape=$utils.$escape,onlyCountry=$data.onlyCountry,$out='';$each(data,function(val,$index){
$out+=' <li class="mui-table-view-cell address"> <div class="mui-slider-right mui-disabled"> <a class="mui-btn mui-btn-yellow shouhuo_edit" data-address-id="';
$out+=$escape(val.address_id);
$out+='" href="#change_adress">编辑</a> <a class="mui-btn mui-btn-red shouhuo_remove" data-address-id="';
$out+=$escape(val.address_id);
$out+='">删除</a> </div> <div class="mui-slider-handle"> <div class="mui-table"> <div class="mui-table-cell"> <h4 class="mui-ellipsis margin_bottom_10"><span class="shouhuo_name">';
$out+=$escape(val.consignee);
$out+='</span><span>';
$out+=$escape(val.mobile);
$out+='</span> <div class="mui-input-row mui-radio def_radio" ';
if(onlyCountry==1){
$out+='style="display: none"';
}
$out+='> <label>';
if(val.selected==1){
$out+='默认地址';
}else{
$out+='设为默认';
}
$out+='</label><input name="radio1" type="radio" value="';
$out+=$escape(val.address_id);
$out+='" ';
if(val.selected==1){
$out+='checked';
}
$out+='> </div> </h4> <h5>';
$out+=$escape(val.country_cn);
$out+=$escape(val.province_cn);
$out+=$escape(val.address);
$out+='</h5> </div> </div> </div> </li> ';
});
return new String($out);
});