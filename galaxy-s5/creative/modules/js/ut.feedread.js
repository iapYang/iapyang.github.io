var FeedRead={_triggerEvent:function(e,t){var a=this.elem||document.body;$(a).trigger("feedread-"+e,[t])},init:function(e,t){var a=this,n="twitter"==e.source?this.defaults.twitter:"instagram"==e.source?this.defaults.instagram:this.defaults.generic;return a._ishdpi=window.devicePixelRatio>1,a.options=$.extend({},n,e),a.elem=t,a.options.containerID=t.id,a._build(t,a.options,function(){a._triggerEvent("loaded",t)}),a},defaults:{generic:{module:"data",source:"generic",count:10,minLabelLength:0,beforeLabel:'<span class="ut-feed-node-label">',afterLabel:": </span>"},twitter:{module:"data",source:"generic",count:10,minLabelLength:-1,beforeLabel:'<span class="ut-feed-node-label">',afterLabel:": </span>",clickableTimestamps:!0,avatars:!0,tweetActions:!0},instagram:{module:"data",source:"generic",count:10,minLabelLength:-1,beforeLabel:'<span class="ut-feed-node-label">',afterLabel:": </span>",clickable:!0,captions:!0,stats:!0,imageSize:"low_resolution"}},_build:function(e,t,a){var n=this;n._loadFeedFile(t,function(i){n._classifyContainer(t,e,function(){n._loopItems(i,t,function(i){n._constructMarkup(i,t,function(i){n._bindEvents(i,t,function(i){n._writeMarkup(i,e,function(){(t.scrollButtons||n._detectAndroid(navigator.userAgent)&&parseInt(n.os.version,10)<3&&t.scrollButtons!==!1)&&n._writeScrollButtons(i,t),n._triggerEvent("done"),a()})})})})})})},_loadFeedFile:function(e,t){var a=this,n=window.location;if("file:"==n.protocol)throw new Error("The UT Feed Reading module requires a hosted development environment in order to make same-domain AJAX requests - localhost should suffice.");var i=e.data?e.data:n.host.indexOf("undertone.")>0?"../data/"+e.containerID+".json":"data/"+a.options.containerID+".json",r=setTimeout(function(){a._triggerEvent("error","timeout")},4e3);$.getJSON(i,function(e){clearTimeout(r),t(e)})},_loopItems:function(e,t,a){var n={},i=0;$.each(e,function(e,a){return i++,n[e]=a,i+1<=t.count}),a(n)},_buildNodeLabel:function(e,t){var a,n=t||this.options||this.defaults;if(""===e||e.length<n.minLabelLength||-1==n.minLabelLength)a="";else{var i=n.beforeLabel||this.defaults.generic.beforeLabel,r=n.afterLabel||this.defaults.generic.afterLabel;a=i+e+r}return a},_makeEl:function(e,t,a){var n=document.createElement(e);return t&&(n.className=t),a&&(n.innerHTML=a),n},_assembleInstagram:function(e,t){var a=this,n=a._makeEl("div","ig-gram"),i=a._makeEl("div","ig-header"),r=a._makeEl("img","ig-avatar"),o=a._makeEl("span","ig-username",e.username),s=a._timeSince(1e3*e.created_at),d=a._makeEl("span","ig-timestamp",s),c=a._makeEl("div","ig-content"),l=a._makeEl("img","ig-image"),u=a._makeEl("div","ig-footer"),p=a._makeEl("div","ig-caption",e.content),m=t||this.options||this.defaults.instagram,f=function(){l.src=e.images[m.imageSize].url,l.setAttribute("data-ig-thumb",e.images.thumbnail.url),l.setAttribute("data-ig-low",e.images.low_resolution.url),l.setAttribute("data-ig-standard",e.images.standard_resolution.url)},h=function(){r.id="ig_avatar_"+e.id,o.id="ig_username_"+e.id,r.setAttribute("data-uthref","http://instagram.com/"+e.username),o.setAttribute("data-uthref","http://instagram.com/"+e.username)},v=function(){var t=a._makeEl("div","ig-likes"),n=a._makeEl("div","ig-comments"),i=a._makeEl("div","ig-stats"),r="function"==typeof m.commentHook?m.commentHook(e.comments):'<span class="ig-comments-icon"></span> <span class="ig-stat-num">'+e.comments+"</span>";$(n).append($(r));var o="function"==typeof m.likeHook?m.likeHook(e.likes):'<span class="ig-stat-num">'+e.likes+"</span>";$(t).append($(o)),i.appendChild(t),i.appendChild(n),u.appendChild(i)},_=function(){d.setAttribute("data-timestamp",e.created_at),i.appendChild(r),i.appendChild(o),i.appendChild(d)},w=function(){n.appendChild(i),n.appendChild(c),n.appendChild(u)};return r.src=e.avatar,m.clickable&&h(),f(),c.appendChild(l),_(),m.stats&&v(),e.content&&m.captions&&u.appendChild(p),w(),n},_getInstagrams:function(e,t){var a=this,n=a._makeEl("div","ig-wrapper"),i=t||a.defaults.instagram;for(var r in e){var o,s=e[r];o="function"==typeof i.instagramHook?i.instagramHook(s,i):a._assembleInstagram(s,i),n.appendChild(o)}return n},_makeTweetActionIcon:function(e,t){var a,n=this._makeEl("div","tw-icon tw-icon-"+t);return"fav"==t?a="http://twitter.com/intent/favorite?tweet_id="+e:"retweet"==t?a="http://twitter.com/intent/retweet?tweet_id="+e:"reply"==t&&(a="http://twitter.com/intent/tweet?in_reply_to="+e),n.id="tweet_"+t+"_"+e,n.setAttribute("data-uthref",a),n},_getTweets:function(e,t){var a=this,n=document.createElement("div"),i=t||a.defaults.twitter;e.length<i.count&&(i.count=e.length),n.className="tweets-wrapper";for(var r=0;r<i.count;r++){var o=e[r],s=!a._isEmpty(o.retweeted_status);s&&(o=o.retweeted_status);var d=a._makeEl("div",s?"tw-tweet retweet":"tw-tweet"),c=a._makeEl("div","tw-permalink",o.created_at?a._timeSince(1e3*o.created_at.toString()):"nope"),l=a._makeEl("div","tw-header"),u=$('<div class="tw-profile" data-uthref="http://twitter.com/'+o.username+'"></div>')[0],p=a._makeEl("span","tw-full-name",o.name),m=a._makeEl("span","tw-nickname","@"+o.username),f=a._makeEl("div","tw-content",o.content);if(p.setAttribute("data-uthref","http://twitter.com/"+o.username),p.setAttribute("id","tweet_"+o.id+"_fullname_"+o.username),m.setAttribute("data-uthref","http://twitter.com/"+o.username),m.setAttribute("id","tweet_"+o.id+"_nickname_"+o.username),s&&f.appendChild($('<div class="tw-retweet-credit"><span class="tw-icon tw-icon-retweet"></span>Retweeted by <span class="tw-account-link" data-uthref="http://twitter.com/'+e[r].username+'">'+e[r].name+"</div>")[0]),i.avatars){a._ishdpi&&(o.avatar=o.avatar?o.avatar.replace("normal.","bigger."):"");var h=$('<img id="tweet_'+o.id+"_avatar_"+o.username+'" class="tw-avatar" src="'+o.avatar+'" data-uthref="http://twitter.com/'+o.username+'">');u.appendChild(h[0])}if(u.appendChild(p),u.appendChild(m),i.clickableTimestamps){var v="http://twitter.com/"+o.username+"/statuses/"+o.id;c.setAttribute("data-uthref",v)}if(l.appendChild(u),d.appendChild(c),d.appendChild(l),d.appendChild(f),i.tweetActions){var _=a._makeEl("div","tw-footer"),w=a._makeTweetActionIcon(e[r].id,"reply"),g=a._makeTweetActionIcon(e[r].id,"retweet"),b=a._makeTweetActionIcon(e[r].id,"fav"),k=$('<span class="tw-action tw-reply"></span>').append(w),E=$('<span class="tw-action tw-retweet"></span>').append(g),C=$('<span class="tw-action tw-fav"></span>').append(b);$(_).append(k),$(_).append(E),$(_).append(C),$(d).append(_)}$(n).append(d)}return n},_timeSince:function(e){var t=new Date,a=Math.floor((t-e)/1e3);this.months||(this.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);var n=Math.floor(a/3600);if(n>=24){var i=new Date(e);return i.getDate()+" "+this.months[i.getMonth()]}return n>=1?n+"hr":(n=Math.floor(a/60),n>=1?n+"min":Math.floor(a)+"s")},_hasOwnProp:Object.prototype.hasOwnProperty,_isEmpty:function(e){var t=this;if(null===e)return!0;if(e.length&&e.length>0)return!1;if(0===e.length)return!0;for(var a in e)if(t._hasOwnProp.call(e,a))return!1;return!0},_getObjectProps:function(e,t,a){var n=this,i=document.createElement("div"),r=a||n.options;i.className=t||"ut-feed-item";for(var o in e){var s=document.createElement("div"),d=o.replace(":","");if("object"!=typeof e[o]){var c=n._buildNodeLabel(o.replace(":",""),r),l="function"==typeof r[d+"Hook"]?r[d+"Hook"](e[o]):e[o];s.innerHTML=c+l,s.className="ut-feed-node "+o.replace(":","")}else{var u=d||"",p=n._buildNodeLabel(u,r);p&&s.appendChild($(p)[0]),s.className="ut-feed-item "+u,s.appendChild(n._getObjectProps(e[o],"ut-feed-item-inner",r))}i.appendChild(s)}return i},_constructMarkup:function(e,t,a){var n=this,i=document.createElement("div"),r=t||n.options;if(i.className="ut-feed-wrapper","twitter"==r.source)i.appendChild(n._getTweets(e,r));else if("instagram"==r.source)i.appendChild(n._getInstagrams(e,r));else if(r.all)i.appendChild(r.all(e));else if(r.each){var o=0;for(var s in e){var d=r.each(e[s],o++);"string"==typeof d?d=$(d)[0]:"object"==typeof d&&(d=d[0]),i.appendChild(d)}}else i.appendChild(n._getObjectProps(e,"ut-feed-inner",r));a($(i))},_bindEvents:function(e,t,a){$(e).find(".tw-icon-retweet").each(function(){$(this).on("click",function(){var e=this;setTimeout(function(){$(e).addClass("clicked").attr("data-uthref","")},100)})}),$(e).find(".tw-icon-fav").each(function(){$(this).on("click",function(){var e=this;setTimeout(function(){$(e).addClass("clicked").attr("data-uthref","")},100)})}),a(e,t,a)},_writeMarkup:function(e,t,a){$(t).append($(e)),a()},_writeScrollButtons:function(e,t){var a,n=this,i=n._makeEl("div","ut-feed-controls"),r=t.customUpButton||this._makeEl("div","ut-feed-control ut-feed-up"),o=t.customDownButton||this._makeEl("div","ut-feed-control ut-feed-down");$(r).on("touchstart mousedown",function(e){e.preventDefault(),a||(a=setInterval(function(){n.elem.scrollTop=n.elem.scrollTop-1},1)),$(r).on("touchend touchcancel",function(){clearInterval(a),a=null}),$(r).on("mouseup",function(){clearInterval(a),a=null})}),$(o).on("touchstart mousedown",function(){a||(a=setInterval(function(){n.elem.scrollTop=n.elem.scrollTop+1},1)),$(o).on("touchend touchcancel",function(){clearInterval(a),a=null}),$(o).on("mouseup",function(){clearInterval(a),a=null})}),i.appendChild(r),i.appendChild(o),$(this.elem).append($(i))},_classifyContainer:function(e,t,a){t.className+=" ut-feed-wrapper-"+e.source,$(t).one("scroll",function(){undertone.creative.trackEvent("scroll","feedread")}),a()},_detectAndroid:function(e){var t={},a=e.match(/(Android);?\s+([\d.]+)?/);return a?(t.android=!0,t.version=a[2]):t.android=!1,this.os=t,t}};"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),$.fn.feedread=function(e){return this.each(function(){var t=Object.create(FeedRead),a=e||{};t.init(a,this);var n=$(this),i=n.data("feedread");i||n.data("feedread",t)})},$.fn.twitter_feed=function(e){return this.each(function(){var t=Object.create(FeedRead),a=e||{};a.source="twitter",t.init(a,this);var n=$(this),i=n.data("twitter_feed");i||n.data("twitter_feed",t)})},$.fn.instagram_feed=function(e){return this.each(function(){var t=Object.create(FeedRead),a=e||{};a.source="instagram",t.init(a,this);var n=$(this),i=n.data("instagram_feed");i||n.data("instagram_feed",t)})};