!function($){function e(){$(this).keyup(function(e){13==e.which&&$(this).trigger("click")})}if($(".et_slide_in_menu_container").length){$(".et_search_outer").hide(),$(".et_slide_in_menu_container .et-search-field").attr("id","divi-s").before('<label class="screen-reader-text" for="divi-s">Search for:</label>');var t=$("span.mobile_menu_bar.et_pb_header_toggle.et_toggle_slide_menu");t.replaceWith(function(){return $("<a/>",{class:"mobile_menu_bar et_pb_header_toggle et_toggle_slide_menu",html:'<i class="screen-reader-text">Open Menu</i>',href:"#"})});var t=$("span.mobile_menu_bar.et_pb_header_toggle.et_toggle_fullscreen_menu");t.replaceWith(function(){return $("<a/>",{class:"mobile_menu_bar et_pb_header_toggle et_toggle_fullscreen_menu",html:'<i class="screen-reader-text">Open Menu</i>',href:"#"})}),$(".et_slide_in_menu_container .mobile_menu_bar").append('<i class="screen-reader-text">Close Menu</i>').attr("tabindex","0"),$(".et_pb_header_toggle").keyup(function(){($("body").hasClass("et_pb_slide_menu_active")||$("body").hasClass("et_pb_fullscreen_menu_active"))&&($(".et_slide_in_menu_container .et_toggle_fullscreen_menu").keyup(function(e){13==e.which&&($(this).trigger("click"),$(".et_pb_header_toggle").focus())}),$(".et_slide_in_menu_container .et-search-form").length?$(".et_slide_in_menu_container .et-search-field").focus():$("body").hasClass("et_pb_slide_menu_active")?($(".et_first_mobile_item a").focus(),$(".et_slide_in_menu_container").focus()):$(".et_slide_in_menu_container .mobile_menu_bar").focus())}),$(".logo_container a").focusin(function(){($("body").hasClass("et_pb_slide_menu_active")||$("body").hasClass("et_pb_fullscreen_menu_active"))&&($(".et_pb_header_toggle").click(),$("#et-main-area").focus())}),$(".skip-to-content").focusin(function(){($("body").hasClass("et_pb_slide_menu_active")||$("body").hasClass("et_pb_fullscreen_menu_active"))&&$(".et_pb_header_toggle").click().focus()}),$(document).keyup(function(e){($("body").hasClass("et_pb_slide_menu_active")||$("body").hasClass("et_pb_fullscreen_menu_active"))&&27==e.which&&$(".et_pb_header_toggle").click().focus()})}else $("#et_top_search").length?($(".et_search_outer .et-search-field").attr("id","divi-s").before('<label class="screen-reader-text" for="divi-s">Search for:</label>'),$("#et_top_search").attr("tabindex","0"),$("#et_search_icon").append('<i class="screen-reader-text">Open Search</i>'),$(".et_close_search_field").append('<i class="screen-reader-text">Close Search</i>').attr("tabindex","0"),$("#et_top_search").focus(e),$(".et_close_search_field").focus(e)):$(".et_search_outer").hide(),$(".menu-item-has-children").focusin(function(){$(this).addClass("d508_focused_menu")}),$(".menu-item-has-children").focusout(function(){$(this).removeClass("d508_focused_menu")});$("meta[name=viewport]").attr("content","width=device-width, initial-scale=1.0"),$("body").prepend('<a href="#et-main-area" class="d508_skip_to">Skip to Content</a> <a href="#et-top-navigation" class="d508_skip_to">Skip to Navigation</a>'),$("#et-top-navigation, #et-main-area").attr("tabindex","-1"),$(".d508_skip_to").click(function(){skip_id=$(this).attr("href"),$(skip_id).focus()}),$(".et_pb_toggle_title").length&&($(".et_pb_toggle_title").attr("tabindex","0"),$(".et_pb_toggle_title").focus(function(){$(this).keyup(function(e){13==e.which&&($(this).trigger("click"),$(this).next(".et_pb_toggle_content").attr("tabindex",-1).focus())})})),$(".et_pb_tabs").length&&$(".et_pb_tabs_controls a").focus(function(){$(this).keyup(function(e){if(13==e.which){var t=$(this).parent().attr("class").split(" ")[0];setTimeout(function(){$(".et_pb_all_tabs ."+t).attr("tabindex",-1).focus()},800)}})})}(jQuery);