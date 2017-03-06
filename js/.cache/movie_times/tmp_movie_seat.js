/*TMODJS:{"version":20,"md5":"448e7f57c21996a49a3f06a5f8c98352"}*/
template('movie_times/tmp_movie_seat',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cinema=$data.cinema,featureTimeStr=$data.featureTimeStr,language=$data.language,screenType=$data.screenType,price=$data.price,planId=$data.planId,hallName=$data.hallName,movie=$data.movie,hallNo=$data.hallNo,cinemaId=$data.cinemaId,movieId=$data.movieId,ShowIndex=$data.ShowIndex,extInfo=$data.extInfo,$out='';$out+='<div class="mui-row movie_details1_top bg_white"> <div class="mui-col-xs-9"> <h4 class="mui-ellipsis">';
$out+=$escape(cinema.cinemaName);
$out+='</h4> <p class="mui-ellipsis">';
$out+=$escape(featureTimeStr);
$out+=$escape(language);
$out+=$escape(screenType);
$out+=')</p> </div> <div class="mui-col-xs-3 mui-text-right"> <span class="color_ff781e movie_seat_dianshu">';
$out+=$escape(price);
$out+='点</span> </div> </div> <div class="tips cf margin_0"> <div class=\'row disabled-seat\'> <center>请在下方座位图选择您满意的座位</center> </div> <ul class="seat-intro"> <li><span class="seat active"></span>可选</li> <li><span class="seat select"></span>已选</li> <li><span class="seat disabled"></span>已售</li> <li><span class="seat love"></span>情侣座</li> </ul> </div> <div class="main_a main-small main-big" style="min-height: 200px; max-height:1500px;"> <div class="wrapper"> <div class=\'seatmap\' style="overflow:scroll;"> <center style="height:150px; line-height:150px;">加载中...</center> </div> </div> <div class="container act-phone"> <form id="orderForm" name="orderForm" onsubmit="return false;"> <div class="mui-input-row bg_white"> <label>手机号</label> <input type="text" name="mobile" id="mobile" /> </div> <p class="mui-text-right margin_top_10">（此手机号码用来接收取票密码）</p> <div class=\'mui-row\'> <input type="hidden" name="act" value="order"/> <input type="hidden" name="planId" value="';
$out+=$escape(planId);
$out+='"/> <input type="hidden" name="hallName" value="';
$out+=$escape(hallName);
$out+='"/> <input type="hidden" name="featureTimeStr" value="';
$out+=$escape(featureTimeStr);
$out+='"/> <input type="hidden" name="movieName" value="';
$out+=$escape(movie.movieName);
$out+='"/> <input type="hidden" name="cinemaName" value="';
$out+=$escape(cinema.cinemaName);
$out+='"/> <input type="hidden" name="language" value="';
$out+=$escape(language);
$out+=' / ';
$out+=$escape(screenType);
$out+='"/> <input type="hidden" name="seatsNo" id="seatsNo" value=""/> <input type="hidden" name="seatsName" id="seatsName" value=""/> <input type="hidden" name="seatsCount" id="seatsCount" value=""/> <input type="hidden" name="vipPrice" id="vipPrice" value="';
$out+=$escape(price);
$out+='"/> <input type="hidden" name="seatParam" id="seatParam" value=\'{"hallno":"';
$out+=$escape(hallNo);
$out+='","planid":';
$out+=$escape(planId);
$out+=',"cinemaid":';
$out+=$escape(cinemaId);
$out+=',"movieid":';
$out+=$escape(movie.movieId);
$out+=',}\'/> <input type="hidden" name="movieId" id="mvoieId" value="';
$out+=$escape(movieId);
$out+='"/> <input type="hidden" name="cinemaId" id="cinemaId" value="';
$out+=$escape(cinemaId);
$out+='"/> <input type="hidden" name="showIndex" id="showIndex" value="';
if(ShowIndex){
$out+=$escape(ShowIndex);
}else{
$out+='0';
}
$out+='"/> <input type="hidden" name="extInfo" id="extInfo" value="';
$out+=$escape(extInfo);
$out+='"/> <input class="mui-btn btn_next seat_next" type="submit" value=" &nbsp;下一步 &nbsp; "> </div> </form> </div> </div>';
return new String($out);
});