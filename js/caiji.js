﻿var _0x4ca9=["\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x26\x72\x3D","\x72\x61\x6E\x64\x6F\x6D","\x69\x6D\x67","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x2F\x74\x65\x6D\x70\x6C\x61\x74\x65\x2F\x69\x6D\x61\x67\x65\x73\x2F\x6C\x6F\x61\x64\x69\x6E\x67\x2E\x67\x69\x66","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x61\x62\x6F\x72\x74","\u8D85\u65F6\x3A","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x61","\x68\x72\x65\x66","\x23","\u91CD\u67E5","\x6F\x6E\x63\x6C\x69\x63\x6B","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x73\x65\x61\x72\x63\x68","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x28","\x29","\x2D\x31","\x31","\x72\x65\x73\x75\x6C\x74","\x2D\x32","\u8FC7\u8F7D\x2C\u6682\u505C\x32\u5206\u949F","\x2D\x33","\u5DF2\u505C\u7528","\x2D\x34","\u4E0D\u652F\u6301\u57DF\u540D\u540E\u8F8D","\x2D\x37","\x6D\x61\x74\x63\x68","","\x77\x78\x61\x71","\u4ED8\u8D39\x2C\x32\x30\x30\u5143\x2F\u6708\x3A","\x69\x63\x70","\x77\x65\x62\x5F\x68\x69\x73\x74\x6F\x72\x79","\x67\x66\x77","\u5F00\u901A\x56\x49\x50\u8D60\u9001\x3A","\u5F00\u901A","\x2F\x6D\x65\x6D\x62\x65\x72\x2E\x70\x68\x70","\x74\x69\x74\x6C\x65","\u81EA\u52A9\u5145\u503C\uFF0C\u5F00\u901A\u540E\u65E0\u9650\u67E5\u8BE2\u3002","\x74\x61\x72\x67\x65\x74","\x5F\x62\x6C\x61\x6E\x6B","\x47\x45\x54","\x6F\x70\x65\x6E","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65","\x74\x65\x78\x74\x2F\x68\x74\x6D\x6C","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x63\x68\x61\x72\x73\x65\x74","\x75\x74\x66\x2D\x38","\x73\x65\x6E\x64","\x4D\x73\x78\x6D\x6C\x32\x2E\x58\x4D\x4C\x48\x54\x54\x50","\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74\x2E\x58\x4D\x4C\x48\x54\x54\x50","\x26\x69\x64\x3D\x31\x26\x73\x69\x67\x6E\x3D\x73\x69\x67\x6E\x73\x74\x72\x69\x6E\x67\x26\x73\x69\x67\x6E\x74\x79\x70\x65\x3D\x31","\x6A\x73\x6F\x6E\x70","\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x56\x49\x50\u529F\u80FD\x3A","\u5347\u7EA7","\x33\u79D2\u6CE8\u518C\uFF0C\u81EA\u52A9\u5145\u503C\u5347\u7EA7","\x61\x6A\x61\x78"];function getContent(url,callback,domEl,async){if( typeof (async)== _0x4ca9[0]){async= true};url+= _0x4ca9[1]+ parsInt(Math[_0x4ca9[2]]()* 1000);clearChild(domEl);var loadingimg=document[_0x4ca9[4]](_0x4ca9[3]);loadingimg[_0x4ca9[7]](_0x4ca9[5],_0x4ca9[6]);domEl[_0x4ca9[8]](loadingimg);var xmlhttp=GetXmlHttpObject();var mytimeout=60000;var timer;if(mytimeout){timer= setTimeout(function(){xmlhttp[_0x4ca9[9]]();clearChild(domEl);var timeoutRetryText=document[_0x4ca9[11]](_0x4ca9[10]);domEl[_0x4ca9[8]](timeoutRetryText);var timeoutRetry=document[_0x4ca9[4]](_0x4ca9[12]);timeoutRetry[_0x4ca9[7]](_0x4ca9[13],_0x4ca9[14]);var timeoutRetryText2=document[_0x4ca9[11]](_0x4ca9[15]);timeoutRetry[_0x4ca9[16]]= function(){clearChild(domEl);getContent(url,callback,domEl);return false};timeoutRetry[_0x4ca9[8]](timeoutRetryText2);domEl[_0x4ca9[8]](timeoutRetry);getNext()},mytimeout)};xmlhttp[_0x4ca9[17]]= function(){if(xmlhttp[_0x4ca9[18]]== 4){if(timer){clearTimeout(timer)};getNext();if(xmlhttp[_0x4ca9[19]]== 200){var result= new Object;if(xmlhttp[_0x4ca9[21]][_0x4ca9[20]](/^\{[\s\S]+\}$/)>= 0){result= eval(_0x4ca9[22]+ xmlhttp[_0x4ca9[21]]+ _0x4ca9[23])}else {result[_0x4ca9[19]]= _0x4ca9[24]};if(result[_0x4ca9[19]]== _0x4ca9[25]){callback(url,result[_0x4ca9[26]],domEl)}else {if(result[_0x4ca9[19]]== _0x4ca9[24]){otherReasonRetry(url,callback,domEl)}else {if(result[_0x4ca9[19]]== _0x4ca9[27]){clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](_0x4ca9[28]);domEl[_0x4ca9[8]](caijiRetryText)}else {if(result[_0x4ca9[19]]== _0x4ca9[29]){clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](_0x4ca9[30]);domEl[_0x4ca9[8]](caijiRetryText)}else {if(result[_0x4ca9[19]]== _0x4ca9[31]){clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](_0x4ca9[32]);domEl[_0x4ca9[8]](caijiRetryText)}else {if(result[_0x4ca9[19]]== _0x4ca9[33]){var func=callback.toString()[_0x4ca9[34]](/^function\s*([^\s(]+)/)[1];var tips=_0x4ca9[35];if(func== _0x4ca9[36]){tips= _0x4ca9[37]}else {if(func== _0x4ca9[38]|| func== _0x4ca9[39]|| func== _0x4ca9[40]){tips= _0x4ca9[41]}};clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](tips);var spanText=document[_0x4ca9[11]](_0x4ca9[42]);var spanA=document[_0x4ca9[4]](_0x4ca9[12]);spanA[_0x4ca9[7]](_0x4ca9[13],_0x4ca9[43]);spanA[_0x4ca9[7]](_0x4ca9[44],_0x4ca9[45]);spanA[_0x4ca9[7]](_0x4ca9[46],_0x4ca9[47]);spanA[_0x4ca9[8]](spanText);domEl[_0x4ca9[8]](caijiRetryText);domEl[_0x4ca9[8]](spanA)}else {otherReasonRetry(url,callback,domEl)}}}}}}}else {otherReasonRetry(url,callback,domEl)}}};xmlhttp[_0x4ca9[49]](_0x4ca9[48],url,async);xmlhttp[_0x4ca9[52]](_0x4ca9[50],_0x4ca9[51]);xmlhttp[_0x4ca9[52]](_0x4ca9[53],_0x4ca9[54]);xmlhttp[_0x4ca9[55]](null)}function GetXmlHttpObject(){var xmlHttp=null;try{xmlHttp=  new XMLHttpRequest()}catch(e){try{xmlHttp=  new ActiveXObject(_0x4ca9[56])}catch(e){xmlHttp=  new ActiveXObject(_0x4ca9[57])}};return xmlHttp}function getContentCrossdomain(url,callback,domEl,async){if( typeof (async)== _0x4ca9[0]){async= true};clearChild(domEl);var loadingimg=document[_0x4ca9[4]](_0x4ca9[3]);loadingimg[_0x4ca9[7]](_0x4ca9[5],_0x4ca9[6]);domEl[_0x4ca9[8]](loadingimg);url+= _0x4ca9[58];$[_0x4ca9[64]]({url:url,timeout:60000,type:_0x4ca9[48],async:async,dataType:_0x4ca9[59],jsonp:_0x4ca9[60],success:function(result){if(result[_0x4ca9[19]]== _0x4ca9[25]){callback(url,result[_0x4ca9[26]],domEl)}else {if(result[_0x4ca9[19]]== _0x4ca9[24]){otherReasonRetryCrossdomain(url,callback,domEl)}else {if(result[_0x4ca9[19]]== _0x4ca9[27]){clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](_0x4ca9[28]);domEl[_0x4ca9[8]](caijiRetryText)}else {if(result[_0x4ca9[19]]== _0x4ca9[29]){clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](_0x4ca9[30]);domEl[_0x4ca9[8]](caijiRetryText)}else {if(result[_0x4ca9[19]]== _0x4ca9[31]){clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](_0x4ca9[32]);domEl[_0x4ca9[8]](caijiRetryText)}else {if(result[_0x4ca9[19]]== _0x4ca9[33]){clearChild(domEl);var caijiRetryText=document[_0x4ca9[11]](_0x4ca9[61]);var spanText=document[_0x4ca9[11]](_0x4ca9[62]);var spanA=document[_0x4ca9[4]](_0x4ca9[12]);spanA[_0x4ca9[7]](_0x4ca9[13],_0x4ca9[43]);spanA[_0x4ca9[7]](_0x4ca9[44],_0x4ca9[63]);spanA[_0x4ca9[7]](_0x4ca9[46],_0x4ca9[47]);spanA[_0x4ca9[8]](spanText);domEl[_0x4ca9[8]](caijiRetryText);domEl[_0x4ca9[8]](spanA)}else {otherReasonRetryCrossdomain(url,callback,domEl)}}}}}}},complete:function(XMLHttpRequest,status){getNext()}})}