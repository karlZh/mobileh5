/*TMODJS:{"version":17,"md5":"7bb6015e89a7aeb68f710a20ea3d9ed5"}*/
template('movie_times/tmp_dzq_order',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,TicketName=$data.TicketName,TicketYXQ=$data.TicketYXQ,sjprice=$data.sjprice,number=$data.number,mobile=$data.mobile,user_name=$data.user_name,order_id=$data.order_id,$out='';$out+='<ul class="mui-table-view"> <li class="mui-table-view-cell"><h4 class="mui-pull-left">类型</h4><p class="mui-pull-right">';
$out+=$escape(TicketName);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">有效期</h4><p class="mui-pull-right">';
$out+=$escape(TicketYXQ);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">单价</h4><p class="mui-pull-right">';
$out+=$escape(sjprice);
$out+='点</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">数量</h4><p class="mui-pull-right">';
$out+=$escape(number);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">手机</h4><p class="mui-pull-right">';
$out+=$escape(mobile);
$out+='</p></li> </ul> <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"><h4 class="mui-pull-left" id="source">聚优卡号</h4><p class="mui-pull-right">';
$out+=$escape(user_name);
$out+='</p></li> <li class="mui-table-view-cell"> <div class="mui-input-row"> <label class="mui-pull-left"><h4>请输入密码</h4></label> <input name="password" type="password" class="mui-pull-right dianziquan_mima" /> <input type="hidden" name="order_id" value="';
$out+=$escape(order_id);
$out+='" /> </div> </li> </ul> <button id="pay" type="button" class="btn_next">确认支付</button> <script> /*根据判断华影还是聚优从而改变相应的显示*/ if(localStorage.source=="true"){ $("#source").text("华影卡号") } </script>';
return new String($out);
});