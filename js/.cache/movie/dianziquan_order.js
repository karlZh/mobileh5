/*TMODJS:{"version":5,"md5":"6c5c35c5af6f5a60e60881d1301fd13b"}*/
template('movie/dianziquan_order','<!doctype html> <html> <head> <meta charset="UTF-8"> <title></title> <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" /> <link href="../../css/mui.min.css" rel="stylesheet" /> <link rel="stylesheet" href="../../css/public.css" /> <style type="text/css"> .mui-input-row label{padding:0;} </style> </head> <body> <header class="mui-bar mui-bar-nav"> <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> <h1 class="mui-title">电子券支付</h1> </header> <div id="dzq_order_page" class="mui-content"></div> <script src="../../js/connection.js"></script> <script src="../../js/jquery-1.9.1.min.js"></script> <script src="../../js/jqueryExtend.js"></script> <script src="../../js/template.js"></script> <script src="../../js/mui.min.js"></script> <script type="text/javascript"> var orderid = jQuery.getUrlParam(\'orderid\'); jQuery.ajaxJsonp(web_url+\'/mobile/cinema_order.php?act=payinfoDzq\',{id:orderid},function(result){ if(result.state==\'true\'){ document.getElementById(\'dzq_order_page\').innerHTML=template(\'movie/tmp_dzq_order\',result.data); }else if(result.state==\'false\'){ jQuery.errorJudge(result.data,result.message); } }); mui.init(); mui(\'#dzq_order_page\').on(\'tap\',\'#pay\',function(){ var order_id = jQuery("input[name=order_id]").val(); var password = jQuery("input[name=password]").val(); jQuery.ajaxJsonp(web_url+\'/mobile/cinema_order.php?act=doneDzq\',{order_id:order_id,password:password},function(result){ if(result.state==\'true\'){ mui.alert(result.message,function(){ jQuery.jumpTo("./order/order_dzq.html"); }); }else if(result.state==\'false\'){ jQuery.errorJudge(result.data,result.message); } }); }); </script> </body> </html>');