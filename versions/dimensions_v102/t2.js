!function(){function e(e,t){if(navigator.sendBeacon){var a=navigator.sendBeacon.bind(navigator);try{if(a(e,t))return}catch(e){console.error(e)}}try{var n="XMLHttpRequest"in window?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");n.open("POST",e,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(t)}catch(e){}}function t(t,a,n){console.error(t);var o=[{k:"where",v:a},{k:"error",v:t.name&&t.message?"".concat(t.name,": ").concat(t.message):JSON.stringify(t)}];if(void 0!==n){var i=n;"string"!=typeof t&&(i=JSON.stringify(t)),o.push({k:"extra",v:i})}e("https://t.poki.io/l",JSON.stringify({c:"observer-error",ve:7,d:o}))}window._pokiUserGlobalName=window._pokiUserGlobalName||"user";var a="poki_session";function n(e){return!(!e||!(e&&e.page&&e.landing_page&&e.previous_page)||!e.tab_id||!e.expire||Date.now()>e.expire||e.expire>Date.now()+18e5)}function o(){var e=null;n(window[window._pokiSessionGlobalName])&&(e=window[window._pokiSessionGlobalName]);try{var o=JSON.parse(sessionStorage.getItem(a));n(o)&&(!e||o.depth>e.depth)&&(e=o)}catch(e){try{t(e,"getSession",sessionStorage.getItem(a))}catch(o){t(e,"getSession",o)}}return e}function i(e){try{var n=o();if(!n)return;e(n);var i=JSON.stringify(n);try{sessionStorage.setItem(a,i)}catch(e){}window[window._pokiSessionGlobalName]=n,function(e,t,a){document.cookie="".concat(e,"=").concat(t,"; path=/; samesite=lax; max-age=").concat(Math.min(a||15552e3,15552e3))}(a,i)}catch(e){t(e,"updateSessionProperties")}}window._pokiSessionGlobalName=window._pokiSessionGlobalName||"session";const r={},{documentElement:d,body:l,compatMode:c}=document,s=l&&l.clientWidth&&l.clientHeight;d&&d.clientWidth&&d.clientHeight&&("CSS1Compat"===c||!s)?r.size=d.clientWidth+"x"+d.clientHeight:r.size=l.clientWidth+"x"+l.clientHeight;let p=null,u=!1;function v(e){var t;if(p=0,null!=e&&null!==(t=e.purpose)&&void 0!==t&&t.consents)for(let t=1;t<=10;t++)e.purpose.consents[t]&&(p|=1<<t)}function g(){window.__tcfapi&&!u&&(window.__tcfapi("addEventListener",2,(e,t)=>{!t||"tcloaded"!==e.eventStatus&&"useractioncomplete"!==e.eventStatus||v(e)}),window.__tcfapi("getTCData",2,(e,t)=>{t&&v(e)}),u=!0)}g();const y={action:"a",browser_size:"bs",category:"c",connect:"co",connection_type:"ct",count:"cn",cpus:"cu",data:"d",depth:"de",dns:"dn",dom_complete:"dc",domain:"do",experiment:"ex",first_byte:"fb",flash_version:"f",game_id:"gid",game_version_id:"vid",has_adblock:"ha",hash:"h",id:"id",insert_id:"ii",interaction:"i",is_new:"in",key:"k",label:"l",landing_page:"lp",language:"la",last_byte:"lb",message:"m",name:"n",nav:"n",page:"p",pageview_id:"pvid",path:"pa",previous_page:"pp",protocol:"pr",query_params:"qp",referrer:"r",screen_orientation:"sor",screen_resolution:"sc",scroll_y:"sy",session:"s",site_id:"si",stack:"s",tab_id:"ti",tag_id:"t",tcf_purpose_consents:"tpc",time_on_page:"tp",time_on_previous_page:"tr",time_on_site:"ts",time_spa_load:"sl",timeout:"to",timestamp:"tt",timezone:"tz",transfer_size:"tr",type:"ty",user:"u",user_id:"ui",value:"v",version:"ve"};const k=[];let m=!1;function f(e){if(e.google_allow_ad_personalization_signals=!0,e.google_restricted_data_processing=!1,e.google_conversion_linker=!0,window.google_trackConversion)window.google_trackConversion(e);else if(k.push(e),!m){m=!0;const e=document.createElement("script");e.src="https://www.googleadservices.com/pagead/conversion_async.js",e.addEventListener("load",()=>{for(;k.length>0;)window.google_trackConversion(k.shift())});const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}function w(e,t,a,n){const o={google_conversion_id:e,google_conversion_label:t,google_remarketing_only:!1};void 0!==a&&(o.google_conversion_value=a,o.google_conversion_currency=n||"USD"),f(o)}function h(e,t){const a=new URLSearchParams(t).get(e);return null===a?"":a}function _(){return/(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\smini|avantgo|mobilesafari|docomo)/i.test(navigator.userAgent)}function b(){return/(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)}let I={},S=!1;const D=["AT","BE","BG","CY","CZ","DE","DK","ES","EE","FI","FR","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MT","NL","NO","PL","PT","RO","SK","SI","SE","GB"];function T(e){I=e}function A(){S=!0}function B(){return(void 0===window.pokiBingRemarketing||window.pokiBingRemarketing)&&(window.pokiCountry&&!D.includes(window.pokiCountry)||S||!!I[4])}function C(){return(void 0===window.pokiGoogleRemarketing||window.pokiGoogleRemarketing)&&(window.pokiCountry&&!D.includes(window.pokiCountry)||S)}function E(){window.uetq||(window.uetq=[],function(e,t,a,n,o){var i,r,d;e[o]=e[o]||[],i=function(){var t={ti:"5066235"};t.q=e[o],e[o]=new UET(t),e[o].push("pageLoad")},(r=t.createElement(a)).src="//bat.bing.com/bat.js",r.async=1,r.onload=r.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(i(),r.onload=r.onreadystatechange=null)},(d=t.getElementsByTagName(a)[0]).parentNode.insertBefore(r,d)}(window,document,"script",0,"uetq"))}let G,P;function N(e){const t=o();if(!t)return;G=performance.now(),P&&clearInterval(P);const a=t.gameplayTotalTime||0;a<=9e5&&(P=setTimeout(()=>{if(t.gclid&&C()&&(_()?w(962655633,"1RivCPGb38gBEJHrg8sD"):b()?w(962655633,"nA26CIzb3qQBEJHrg8sD"):w(962655633,"Q-g4CKu_36QBEJHrg8sD")),B()){E();let t="desktop";_()?t="mobile":b()&&(t="tablet");let a=!1;window.api&&window.api.getAdblock&&(a=window.api.getAdblock()),window.uetq.push("event","15-minute-play-time",{event_category:t,event_label:e,event_value:a?1:0})}},9e5-a))}function R(){G&&(i(e=>{e.gameplayTotalTime=(e.gameplayTotalTime||0)+(performance.now()-G)}),G=void 0),P&&clearInterval(P)}function M(e){return Object.keys(e).map(t=>{if("category"===t||"action"===t||"label"===t||"eventNoun"===t||"eventVerb"===t)return!1;let a=e[t];return"object"==typeof a&&(a=JSON.stringify(a)),{key:t,value:a}}).filter(e=>!!e)}function q(e){const{position:t}=e.content.data;switch(t){case"PP":return"preroll";case"PM":return"midroll";case"PR":return"rewarded";default:return"unknown-".concat(t)}}function x(e){return"playground"===e.origin?"platform":"ingame"}function H(e){return e<0?0:e<30?Math.floor(e):e<60?30:e<120?60:e<300?120:e<600?300:e<1200?600:e<1800?1200:1800}window._pokiContextGlobalName=window._pokiContextGlobalName||"context";let L=!1;function J(e,a,n,r="",d=[],l={}){var c,s,p,u,v,g;const y=window[window._pokiContextGlobalName],{session:k,user:m}=y;if("pageview"===a&&!y.site.id)return;const f=Math.max(Date.now()-k.page.start,0),w=function(){try{return!o()}catch(e){return t(e,"isSessionExpired"),!0}}();let h,_=0;("pageview"!==a||k.depth>1)&&(_=Math.max(Date.now()-k.landing_page.start,0)),"pageview"===a&&k.previous_page.start&&(h=k.page.start-k.previous_page.start);let b,I=null===(c=e.content)||void 0===c||null===(s=c.pokifordevs)||void 0===s?void 0:s.game_id,S=null===(p=e.content)||void 0===p||null===(u=p.pokifordevs)||void 0===u?void 0:u.game_version_id;I||({gameID:I}=e),S||(S=e.gameVersion),y.site.id||"pubhost"!==a||"initialized"!==n?"pageview"!==a||L||(L=!0,({referrer:b}=document)):({referrer:b}=document);let D=0;k.expire&&(D=Math.ceil((k.expire-Date.now())/1e3)),w&&"pageview"!==a||(l.interaction&&i((function(e){e.expire=Date.now()+18e5})),window[window._pokiTrackerGlobalName].push({session:{id:k.id,depth:k.depth,count:k.count},user:{id:m.id,is_new:m.is_new},page:{path:k.page.path,type:k.page.type,id:e.storeNoPageID?void 0:k.page.id,pageview_id:k.page.pageview_id},previous_page:{path:k.previous_page.path,type:k.previous_page.type,id:k.previous_page.id,pageview_id:k.previous_page.pageview_id},landing_page:{path:k.landing_page.path,type:k.landing_page.type,id:k.landing_page.id,pageview_id:k.landing_page.pageview_id},category:a,action:n,label:r,data:d,interaction:l.interaction,site_id:y.site.id,tag_id:y.tag,referrer:b,flash_version:y.flashVersion,time_on_site:_,time_spa_load:e.loadTime,time_on_page:f,time_on_previous_page:h,tab_id:k.tab_id,has_adblock:null===(v=window.api)||void 0===v||null===(g=v.getAdblock)||void 0===g?void 0:g.call(v),once_per_pageview:l.once_per_pageview,game_id:I||void 0,game_version_id:S||void 0,experiment:y.experiment,timeout:D}))}function W(e){const a=window[window._pokiContextGlobalName],{event:n}=e,o=e.eventData||e.data||{};try{if("sdk-message"===n)if("pokiTrackingScreenDisplayAdImpression"===o.content.event)J(o,"ad","displayImpression",o.content.data.platformAd?"platform":"ingame",[{key:"opportunityId",value:o.content.data.opportunityId},{key:"adUnitPath",value:o.content.data.adUnitPath},{key:"prebidBid",value:o.content.data.prebidBid},{key:"prebidBidder",value:o.content.data.prebidBidder},{key:"prebidWon",value:o.content.data.prebidWon||o.content.data.preBidWon},{key:"prebidSecondBid",value:o.content.data.prebidSecondBid},{key:"prebidSecondBidder",value:o.content.data.prebidSecondBidder},{key:"dfpIsBackfill",value:o.content.data.dfpIsBackfill},{key:"dfpLineItemId",value:o.content.data.dfpLineItemId},{key:"duringGameplay",value:o.content.data.duringGameplay},{key:"houseAdId",value:o.content.data.houseAdId},{key:"isEmpty",value:o.content.data.isEmpty},{key:"adDomain",value:o.content.data.adDomain},{key:"trigger",value:o.content.data.refreshType},{key:"number",value:o.content.data.refreshNumber},{key:"blocked",value:o.content.data.blocked}]);else if("pokiTrackingScreenDisplayAdRequested"===o.content.event)J(o,"ad","displayRequest",o.content.data.platformAd?"platform":"ingame",[{key:"opportunityId",value:o.content.data.opportunityId},{key:"adUnitPath",value:o.content.data.adUnitPath},{key:"duringGameplay",value:o.content.data.duringGameplay},{key:"trigger",value:o.content.data.refreshType},{key:"number",value:o.content.data.refreshNumber}]);else if("pokiTrackingScreenDisplayAdDestroy"!==o.content.event||o.content.data.platformAd)if("pokiTrackingScreenDisplayAdDestroy"===o.content.event&&o.content.data.platformAd)J(o,"platform","destroyAd","",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("pokiTrackingScreenGameLoadingFinished"===o.content.event)J(o,"game","loadingFinished","",[{key:"time_on_page",value:o.content.data.now},{key:"transferSize",value:o.content.data.transferSize},{key:"trackers",value:o.content.data.trackers},{key:"external_resources",value:o.content.data.external_resources}],{once_per_pageview:!0});else if("pokiTrackingScreenGameplayStart"===o.content.event){var r,d,l;J(o,"game","play","start",M(o.content.data),{interaction:!0}),N(null===(r=a.page)||void 0===r||null===(d=r.content)||void 0===d||null===(l=d.game)||void 0===l?void 0:l.id)}else if("pokiTrackingScreenGameplayStop"===o.content.event)R(),J(o,"game","play","stop",M(o.content.data),{interaction:!0});else if("pokiTrackingAdsStatusError"===o.content.event)J(o,"ad","error","",[{key:"opportunityId",value:o.content.data.opportunityId},{key:"waterfall",value:o.content.data.waterfall}]);else if("pokiTrackingSdkStatusFailed"===o.content.event)J(o,"ad","failed","",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("pokiTrackingAdsStatusBuffering"===o.content.event)J(o,"ad","videoBuffering",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsVideoError"===o.content.event)J(o,"ad","videoError",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"message",value:o.content.data.message},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsVideoLoaderError"===o.content.event)J(o,"ad","videoLoaderError",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsStatusPrebidRequested"===o.content.event)J(o,"ad","videoPrebidRequested",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"blocked",value:o.content.data.blocked}]);else if("pokiTrackingAdsStatusReady"===o.content.event)J(o,"ad","videoReady",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsStatusSkipped"===o.content.event)J(o,"ad","videoSkipped",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"adDomain",value:o.content.data.adDomain}],{interaction:!0});else if("pokiTrackingAdsVideoClicked"===o.content.event)J(o,"ad","videoClicked",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"origin",value:x(o)},{key:"adDomain",value:o.content.data.adDomain}],{interaction:!0});else if("pokiTrackingAdsStatusCompleted"===o.content.event)J(o,"ad","videoCompleted",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"origin",value:x(o)},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsStatusImpression"===o.content.event)J(o,"ad","videoImpression",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"origin",value:x(o)},{key:"prebidBidder",value:o.content.data.prebidBidder},{key:"prebidBid",value:o.content.data.prebidBid},{key:"creativeId",value:o.content.data.creativeId},{key:"adUnitPath",value:o.content.data.adUnitPath},{key:"houseAdId",value:o.content.data.houseAdId},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsVideoPaused"===o.content.event)J(o,"ad","videoPaused",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"origin",value:x(o)},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsStatusRequested"===o.content.event)J(o,"ad","videoRequest",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"origin",value:x(o)}]);else if("pokiTrackingAdsVideoResumed"===o.content.event)J(o,"ad","videoResumed",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"origin",value:x(o)},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingAdsStatusStarted"===o.content.event)J(o,"ad","videoStarted",q(o),[{key:"waterfall",value:o.content.data.waterfall},{key:"opportunityId",value:o.content.data.opportunityId},{key:"origin",value:x(o)},{key:"duration",value:o.content.data.duration},{key:"prebidBidder",value:o.content.data.prebidBidder},{key:"prebidBid",value:o.content.data.prebidBid},{key:"creativeId",value:o.content.data.creativeId},{key:"adUnitPath",value:o.content.data.adUnitPath},{key:"houseAdId",value:o.content.data.houseAdId},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingRewardedWebRequest"===o.content.event)J(o,"ad","rewardedWeb","request",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("pokiTrackingRewardedWebReady"===o.content.event)J(o,"ad","rewardedWeb","ready",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("pokiTrackingRewardedWebImpression"===o.content.event)J(o,"ad","rewardedWeb","impression",[{key:"opportunityId",value:o.content.data.opportunityId},{key:"adUnitPath",value:o.content.data.adUnitPath},{key:"bid",value:o.content.data.bid},{key:"bidder",value:o.content.data.bidder},{key:"prebidBidder",value:o.content.data.prebidBidder},{key:"prebidWon",value:o.content.data.prebidWon||o.content.data.preBidWon},{key:"adDomain",value:o.content.data.adDomain}]);else if("pokiTrackingRewardedWebClosedGranted"===o.content.event)J(o,"ad","rewardedWeb","closedGranted",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("pokiTrackingRewardedWebClosedDeclined"===o.content.event||"pokiTrackingRewardedWebclosedDeclined"===o.content.event)J(o,"ad","rewardedWeb","closedDeclined",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("pokiTrackingRewardedWebEmpty"===o.content.event)J(o,"ad","rewardedWeb","empty",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("pokiTrackingScreenFirstRound"===o.content.event){var c,s,p,u,v,g;if(J(o,"game","play","first",[],{interaction:!0,once_per_pageview:!0}),N(null===(c=a.page)||void 0===c||null===(s=c.content)||void 0===s||null===(p=s.game)||void 0===p?void 0:p.id),"GB"===a.geo)return;const e=null===(u=a.page)||void 0===u||null===(v=u.content)||void 0===v||null===(g=v.game)||void 0===g?void 0:g.id;let t=!1,n="Unknown";if(window.api&&window.api.getAdblock&&(t=window.api.getAdblock(),!0===t?n="Yes":!1===t&&(n="No")),B()){E();let a="desktop";_()?a="mobile":b()&&(a="tablet"),window.uetq.push("event","game-play-first",{event_category:a,event_label:e,event_value:t?1:0}),t||window.uetq.push("event","",{ecomm_prodid:e,ecomm_pagetype:"product"})}if(C()){const e=h("keyword",window.location.search),t=h("matchtype",window.location.search),o=h("device",window.location.search);!function(e,t,a,n){const o={google_conversion_id:e,google_conversion_label:t,google_remarketing_only:!0};a&&(o.google_user_id=a),n&&(o.google_custom_params=n),f(o)}(962655633,"IGSuCMaAmIEBEJHrg8sD",a.user.id,{ID:a.page.id,AdBlocker:n,Keyword:e,Matchtype:t,Device:o}),w(962655633,"KzjDCPH3l6IBEJHrg8sD"),w(962655633,"YAozCMbHmZQDEJHrg8sD"),_()?(w(962655633,"GcnkCL2-mZQDEJHrg8sD"),w(962655633,"yoVJCODb6pMDEJHrg8sD")):b()?(w(962655633,"LpAFCNHG6pMDEJHrg8sD"),w(962655633,"NC5BCKnU6pMDEJHrg8sD")):(w(962655633,"tmXGCPitoJQDEJHrg8sD"),w(962655633,"vjKvCO35q4cDEJHrg8sD"),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?w(962655633,"AT-CCLLI3qQBEJHrg8sD"):w(962655633,"XuGfCNXE3qQBEJHrg8sD"))}}else"pokiTrackingScreenCommercialBreak"===o.content.event?J(o,"game","commercialBreak","",[{key:"opportunityId",value:o.content.data.opportunityId}]):"pokiTrackingScreenRewardedBreak"===o.content.event?J(o,"game","rewardedBreak","",[{key:"opportunityId",value:o.content.data.opportunityId},{key:"category",value:o.content.data.category},{key:"details",value:o.content.data.details},{key:"placement",value:o.content.data.placement},{key:"from",value:o.content.data.from}].filter(e=>void 0!==e.value),{interaction:!0}):"pokiTrackingScreenRoundEnd"===o.content.event?J(o,"game","roundEnd","",M(o.content.data)):"pokiTrackingScreenRoundStart"===o.content.event?J(o,"game","roundStart","",M(o.content.data),{interaction:!0}):"SaveGameMigrator"===o.type&&"error"===o.content.event?J(o,"game","saveGameMigrator","error",[{key:"error",value:o.content.error}]):"SaveGameMigrator"===o.type&&"start"===o.content.event?J(o,"game","saveGameMigrator","start"):"SaveGameMigrator"===o.type&&"timeout"===o.content.event?J(o,"game","saveGameMigrator","timeout"):"pokiTrackingSdkStatusInitialized"===o.content.event&&"game"===o.origin?J(o,"game","sdkInitialized","",[],{once_per_pageview:!0}):"pokiTrackingScreenDisplayAdRequest"!==o.content.event||o.content.data.platformAd?"pokiTrackingScreenDisplayAdRequest"===o.content.event&&o.content.data.platformAd?J(o,"platform","displayAd","",[{key:"opportunityId",value:o.content.data.opportunityId},{key:"size",value:o.content.data.size}]):"pokiTrackingCustom"===o.content.event?J(o,o.content.data.category||o.content.data.eventNoun,o.content.data.action||o.content.data.eventVerb,"",M(o.content.data.eventData||{})):"pokiTrackingScreenPlayerActive"===o.content.event?J(o,"game","playerActive","",[],{interaction:!0}):"pokiTrackingPlaytestShowModal"===o.content.event?J(o,"playtest","showModal","",[{key:"show",value:o.content.data.show}]):"pokiTrackingPlaytestAccepted"===o.content.event?J(o,"playtest","accepted","",[],{interaction:!0}):"pokiTrackingPlaytestRejected"===o.content.event?J(o,"playtest","rejected","",[],{interaction:!0}):"pokiTrackingPlaytestNoCanvas"===o.content.event?J(o,"playtest","noCanvas","",[]):"pokiTrackingPlaytestStarting"===o.content.event?J(o,"playtest","starting","",[]):"pokiTrackingPlaytestConnected"===o.content.event?J(o,"playtest","connected","",[{key:"peer",value:o.content.data.peer}]):"pokiTrackingPlaytestClosed"===o.content.event?J(o,"playtest","closed","",[{key:"reason",value:o.content.data.reason}]):"pokiTrackingPlaytestError"===o.content.event?J(o,"playtest","error","",[{key:"message",value:o.content.data.message}]):"pokiTrackingScreenisAdBlockFunctionCall"===o.content.event&&J(o,"game","isAdBlockedCalled","",[]):J(o,"game","displayAd","",[{key:"opportunityId",value:o.content.data.opportunityId},{key:"size",value:o.content.data.size}]);else J(o,"game","destroyAd","ingame",[{key:"opportunityId",value:o.content.data.opportunityId}]);else if("adslot-renderEnded"===n)J(o,"ad","displayImpression","platform",[{key:"trigger",value:o.refreshType},{key:"adUnitPath",value:o.adUnitPath},{key:"number",value:o.refreshNumber},{key:"opportunityId",value:o.opportunityId},{key:"prebidBid",value:o.prebidBid},{key:"prebidBidder",value:o.prebidBidder},{key:"prebidWon",value:o.prebidWon||o.preBidWon},{key:"prebidSecondBid",value:o.prebidSecondBid},{key:"prebidSecondBidder",value:o.prebidSecondBidder},{key:"dfpIsBackfill",value:o.dfpIsBackfill},{key:"dfpLineItemId",value:o.dfpLineItemId},{key:"houseAdId",value:o.houseAdId},{key:"isEmpty",value:o.isEmpty},{key:"adDomain",value:o.adDomain}]);else if("ads-adblocked"===n)J(o,"ad","adblocked","platform",[{key:"playground",value:o.playground},{key:"sdk",value:o.sdk}]);else if("ads-notFound"===n)J(o,"ad","notFound","platform",[{key:"event",value:o.event},{key:"code",value:o.code},{key:"refreshType",value:o.refreshType}]);else if("ads-debugDisplayAd"===n)J(o,"ad","debugDisplayAd","platform",[{key:"event",value:o.event},{key:"sdkAdsReady",value:o.sdkAdsReady},{key:"consentSettled",value:o.consentSettled},{key:"page",value:o.page},{key:"code",value:o.code},{key:"refreshType",value:o.refreshType}]);else if("ads-render"===n)J(o,"ad","displayRequest","platform",[{key:"trigger",value:o.refreshType},{key:"adUnitPath",value:o.adUnitPath},{key:"number",value:o.refreshNumber},{key:"opportunityId",value:o.opportunityId}]);else if("housead-click"===n)J(o,"ad","houseAdClick","platform",[{key:"houseAdId",value:o.houseAdId}]);else if("consent-full"===n)A(),J(o,"consent","full"),function(e){if("GB"!==e.geo){window._comscore=window._comscore||[],window._comscore.push({c1:"2",c2:"20061681"});var t=document.createElement("script");t.src="https://sb.scorecardresearch.com/cs/20061681/beacon.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}}(a);else if("consent-no"===n)A(),J(o,"consent","no");else if("consent-noniab"===n){const{nonIABConsents:e}=o;T(e),J(o,"consent","noniab","",[{key:"consents",value:JSON.stringify(e)}])}else if("consent-npa"===n)J(o,"consent","npa");else if("consent-unknown"===n)J(o,"consent","unknown");else if("consent-bootError"===n)J(o,"consent","bootError");else if(n.startsWith("rating-"))J(o,"game","rating",n.substr(13).toLowerCase(),[{key:"previous_vote",value:o.previousVote}],{interaction:!0});else if("sdk-details"===n)J(o,"game","sdkDetails","",[{key:"version",value:o.version}],{once_per_pageview:!0});else if("sdk-externalUrl"===n)J(o,"game","externalUrl","",o.data.data.map(e=>({key:"domain",value:e})));else if("react-prehydrate"===n){const e=[{key:"bot.verified",value:window.pokiBotVerified},{key:"bot.score",value:window.pokiBotScore}];void 0!==o.isIPad&&e.push({key:"isIPad",value:o.isIPad});const t=()=>{J(o,"page","reactPrehydrate",a.page.type,e)};try{navigator.cookieDeprecationLabel.getValue().then(t=>{t&&e.push({key:"cookieDeprecationLabel",value:t})}).finally(()=>{t()})}catch(e){t()}}else if("tile-click"===n)o.searchExpanded?J(o,"search","tileClick",a.page.type,[{key:"id",value:o.id},{key:"type",value:o.type},{key:"index",value:o.index},{key:"path",value:o.path},{key:"list",value:o.list},{key:"terms",value:o.terms},{key:"searchSessionId",value:o.searchSessionId},{key:"panelSection",value:o.panelSection}],{interaction:!0}):J(o,"page","tileClick",a.page.type,[{key:"id",value:o.id},{key:"type",value:o.type},{key:"index",value:o.index},{key:"path",value:o.path},{key:"list",value:o.list},{key:"thumbnail",value:o.image}],{interaction:!0});else if("pubHost-initialized"===n){var y,k;J(o,"pubhost","initialized","",[{key:"topOrigin",value:o.topOrigin},{key:"bot.verified",value:null===(y=o.bot)||void 0===y?void 0:y.verified},{key:"bot.score",value:null===(k=o.bot)||void 0===k?void 0:k.score}])}else if("page-pulse"===n){R(),N();const e=Math.floor((Date.now()-a.session.page.start)/1e3),t=function(e){return H(e)}(e),n=function(e){return H(e-30)}(e);if((30===t&&n<30||60===t&&n<60||120===t&&n<120||300===t&&n<300||600===t&&n<600||1200===t&&n<1200||1800===t&&n<1800)&&J(o,"page","timeSpent","".concat(t,"s")),"GB"===a.geo)return;if(e>=300&&e<330){if(B()&&"game"===a.page.type){var m,I,S;E();const e=null===(m=a.page)||void 0===m||null===(I=m.content)||void 0===I||null===(S=I.game)||void 0===S?void 0:S.id;let t=!1;window.api&&window.api.getAdblock&&(t=window.api.getAdblock());let n="desktop";_()?n="mobile":b()&&(n="tablet"),window.uetq.push("event","page_timeSpent-300",{event_category:n,event_label:e,event_value:t?1:0})}"game"===a.page.type&&C()&&(w(962655633,"2IEyCPmFmZQDEJHrg8sD"),_()?w(962655633,"AYEACNah6pMDEJHrg8sD"):b()?w(962655633,"y05mCNeWmZQDEJHrg8sD"):w(962655633,"lsPJCLbOqYEBEJHrg8sD"))}else e>=900&&e<930&&"game"===a.page.type&&C()&&(_()?w(962655633,"t5VrCLXIlMkBEJHrg8sD"):b()?w(962655633,"WUfoCMSC5LkBEJHrg8sD"):w(962655633,"Gh96CL-84MkBEJHrg8sD"))}else if("appStoreButton-click"===n)J(o,"game","appstoreClick",o.store,[],{interaction:!0});else if("home-click"===n)J(o,"home","click",a.page.type,[],{interaction:!0});else if("logo-click"===n)J(o,"logo","click",a.page.type,[],{interaction:!0});else if("fullscreenButton-click"===n)J(o,"fullscreenButton","click","",[{key:"targetState",value:o.targetState}],{interaction:!0});else if("page-pillClick"===n)J(o,"page","pillClick","",[],{interaction:!0});else if("page-pillDrag"===n)J(o,"page","pillDrag","",[{key:"x",value:o.x},{key:"y",value:o.y}],{interaction:!0});else if("page-autoRedirectClick"===n)J(o,"page","autoRedirect","click",[],{interaction:!0});else if("searchPanel-close"===n)J(o,"searchPanel","close",a.page.type,[{key:"searchSessionId",value:o.searchSessionId}],{interaction:!0});else if("searchPanel-open"===n)J(o,"searchPanel","open",a.page.type,[{key:"searchSessionId",value:o.searchSessionId}],{interaction:!0});else if("game-launch"===n)J(o,"game","launch","",[],{interaction:!0});else if("page-view"!==n&&"pageview"!==n||0===o.counter){const{category:t,action:n,options:i}=e;let{label:r}=e;null!=i&&i.pageTypeAsLabel&&(r=a.page.type),J(o,t,n,r,M(o),i)}else J(o,"pageview","","",[],{interaction:!0}),R(),h("gclid",window.location.search)&&i(e=>{e.gclid=!0})}catch(e){t(e,"gtm")}}const U=window;U._pokiTrackerGlobalName=U._pokiTrackerGlobalName||"tracker",U[U._pokiTrackerGlobalName]=U[U._pokiTrackerGlobalName]||[];const z=U[U._pokiTrackerGlobalName];for(z.uniqueEvents={},z.firstPageview=!0,z.installTCFHandler=g,z.push=function(e,a,n,o,i,r){return d=>{if("function"!=typeof d)try{var l,c;if(d.version=7,!d.category)return;if(d.once_per_pageview){const e="".concat(d.category,"-").concat(d.action||"","-").concat(d.label||"");if(a.uniqueEvents[e])return;a.uniqueEvents[e]=!0}if(delete d.once_per_pageview,"pageview"===d.category&&(a.uniqueEvents={},d.query_params=e.location.search.substr(1),d.hash=e.location.hash.substr(1)),void 0!==d.action&&null!==d.action&&(d.action=d.action.toString()),""===d.action&&delete d.action,void 0!==d.label&&null!==d.label&&(d.label=d.label.toString()),""===d.label&&delete d.label,Array.isArray(d.data))for(let e=0;e<d.data.length;e++)void 0!==d.data[e].value&&null!==d.data[e].value&&(d.data[e].value=d.data[e].value.toString());else delete d.data;if(d.cpus=e.navigator.hardwareConcurrency||0,d.domain=e.location.hostname,d.protocol=e.location.protocol.substr(0,e.location.protocol.length-1),d.scroll_y=e.scrollY,d.timezone=(new Date).getTimezoneOffset(),d.timestamp=Date.now(),d.tcf_purpose_consents=r(),e.navigator.connection&&e.navigator.connection.effectiveType&&(d.connection_type=e.navigator.connection.effectiveType),d.user&&(d.user.language=e.navigator.language),d.screen_resolution=e.screen.width+"x"+e.screen.height,d.screen_orientation=null===(l=e.screen)||void 0===l||null===(c=l.orientation)||void 0===c?void 0:c.type,d.browser_size=i.size,"pageview"===d.category&&a.firstPageview&&e.performance&&e.performance.getEntriesByType)try{const t=e.performance.getEntriesByType("navigation");if(t.length>0){const e=t[0];d.nav={connect:Math.round(e.connectEnd-e.connectStart),dns:Math.round(e.domainLookupEnd-e.domainLookupStart),dom_complete:Math.round(e.domComplete),first_byte:Math.round(e.responseStart-e.requestStart),last_byte:Math.round(e.responseEnd-e.requestStart),transfer_size:e.transferSize}}}catch(e){}d.insert_id=o(),d=function e(t){return Object.keys(t).forEach(a=>{if(!y[a])return console.error("unknown field ".concat(a)),void delete t[a];if(Array.isArray(t[a])){if(0===t[a].length)return void delete t[a];for(let n=0;n<t[a].length;n++)t[a][n]=e(t[a][n])}else{if(null===t[a]||void 0===t[a])return void delete t[a];"object"==typeof t[a]&&e(t[a])}const n=y[a];a!==n&&(t[n]=t[a],delete t[a])}),t}(d),n("https://t.poki.io/t",JSON.stringify(d)),"pageview"===d.category&&(a.firstPageview=!1)}catch(e){t(e,"push")}else d()}}(U,z,e,(function(){for(var e=Math.floor(Date.now()/1e3),t="",a=0;a<4;a++)t=String.fromCharCode(255&e)+t,e>>=8;if(window.crypto&&crypto.getRandomValues&&Uint32Array){var n=new Uint32Array(12);crypto.getRandomValues(n);for(var o=0;o<12;o++)t+=String.fromCharCode(255&n[o])}else for(var i=0;i<12;i++)t+=String.fromCharCode(Math.floor(256*Math.random()));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}),r,(function(){return p}));z.length>0;)z.push(z.shift());!function(){for(window.pokiGTM=window.pokiGTM||[],window.pokiGTM.push=W,window.pokiGTM.push({event:"pageview",eventData:{}});window.pokiGTM.length>0;)window.pokiGTM.push(window.pokiGTM.shift())}()}();