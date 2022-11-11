pageLoadFramework.registerPostLoadEvent(function () {
  var ccStr = "xyz";
  if (
    typeof dmdDataLayer.dmd != "undefined" &&
    typeof dmdDataLayer.dmd.registry_country_code != "undefined" &&
    dmdDataLayer.dmd.registry_country_code != ""
  ) {
    ccStr = dmdDataLayer.dmd.registry_country_code;
  }

  var servletUrl =
    window.location.pathname.substring(
      0,
      window.location.pathname.lastIndexOf(".html")
    ) + ".deloitte-fetchloc";
  var selector = "." + ccStr.toLowerCase();
  var extension = ".json";

  $.ajax({
    type: "GET",
    async: "false",
    url: servletUrl + selector + extension,
    success: function (response) {
      
      var json = response;
      if (typeof json.compTitle === "undefined") {
        json = $.parseJSON(response);
      }
      populateDynamicData(json);
      populateMostViewed(json);
      globalSiteSelectorEvents();
    },
    error: function () {},
    complete: function () {},
  });
});

// global site selector code - moved from improved site selector
$(document).ready(function () {
  var modalContainerGlobal = $(document.createElement("div"))
    .addClass("modal-backdrop-global")
    .addClass("fade")
    .addClass("in")
    .addClass("visibility-hidden");
  $("div.global-site-selector > div.site-selector").append(
    modalContainerGlobal
  );

  // site-selector shift-tab focusout US-24279
  $("input#internalSearchInput").on("keydown", function (e) {
    if (e.shiftKey && e.keyCode === 9) {
      closeGlobalSiteSelector();
    }
  });

  modalBackDropClickHandler();

  $(".welcome-desc a").focus(closeGlobalSiteSelector);

  initListComponent();
});

function initListComponent() {
  try {
    // init list
    var options = {
      valueNames: ["site-locale", "site-trans", "site-abbr"],
    };
    var globalSiteList = new List("site-options-global", options);
    globalSiteList.search();
  } catch (e) {
  }
}

function globalSiteSelectorEvents() {
  /* Function to trigger on foucs to input*/
  $(".global-site-selector > div.site-selector input").on("focus", function (
    e
  ) {
    e.preventDefault();
    if (
      matchMedia("(max-width: 767px)").matches &&
      matchMedia("(min-width: 260px)").matches
    ) {
      $("#header").css("position", "fixed");
      $("html, body").stop().animate(
        {
          scrollTop: 50,
        },
        500,
        "swing"
      );
    }
    openGlobalSiteSelector();
  });

  // close button
  $(".global-site-selector .global-site-selector-close a").click(function () {
    $(".global-site-selector").animate(
      {
        height: "toggle",
      },
      700,
      "linear"
    );
    // to put focus on featured option
    $(
      ".featured-trending-container .toggle-links .gotoslide1 .featured"
    ).focus();
  });

  $("#site-selector-global ul.channel-site li a:last").on(
    "focusout",
    closeGlobalSiteSelector
  );

  // close on escape
  $("#site-options-global, #site-selector-global").on("keydown", function (e) {
    if (e.keyCode === 27) {
      closeGlobalSiteSelector();
    }
  });
}

function modalBackDropClickHandler() {
  /*Function to trigger on clicking global siteselector modal-backdrop */
  $(".modal-backdrop-global ").click(function () {
    $(".global-site-selector > div.site-selector input.gsc-input").val("");
    if (
      $(
        ".global-site-selector > div.site-selector #site-selector-global"
      ).hasClass("open")
    ) {
      $(".global-site-selector > div.site-selector #site-selector-global")
        .slideUp(200)
        .removeClass("open");
      $(".global-site-selector > div.site-selector .site-info-global").addClass(
        "visibility-hidden"
      );
      $(".modal-backdrop-global").addClass("visibility-hidden");
      $("div.global-site-selector > div.site-selector")
        .find("#site-options-global")
        .css("z-index", "");
    }
  });
}

function openGlobalSiteSelector() {
  $("div.global-site-selector > div.site-selector")
    .find("#site-options-global")
    .css("z-index", "1999");
  $(".global-site-selector > div.site-selector #site-selector-global")
    .removeClass("visibility-hidden")
    .css("overflow-y", "scroll");
  $(".global-site-selector > div.site-selector .site-info-global").removeClass(
    "visibility-hidden"
  );
  $(".modal-backdrop-global").removeClass("visibility-hidden");
  $(".global-site-selector > div.site-selector #site-selector-global")
    .show()
    .addClass("open");
}

function closeGlobalSiteSelector() {
  $(".siteselector").removeClass("site-autodrop");
  $(".modal-backdrop-global").addClass("visibility-hidden");
  $("#site-selector-global").slideUp().removeClass("open");
  $(".global-site-selector > div.site-selector .site-info-global").addClass(
    "visibility-hidden"
  );
  $("#site-options-global input.gsc-input").val("");
}

function isValue(value) {
  if (typeof value != "undefined" && value !== "") {
    return true;
  }
  return false;
}

function populateDynamicData(json) {
  var dynamicdata = $("#dynamicdata");

  if (isValue(json.compTitle)) {
    $(dynamicdata).append("<h4>" + json.compTitle + "</h4>");
  }

  if (isValue(json.description)) {
    if (isValue(json.fallbackmsg)) {
      $(dynamicdata).append("<p>" + json.fallbackmsg + "</p>");
    }
  } else {
    $(dynamicdata).append("<p>" + json.description + "</p>");
  }
}

function populateMostViewed(json) {
  var mostviewedsection = $("#mostviewedsection");
  $(mostviewedsection).append("<h5>Most popular sites</h5>");

  if (isValue(json.dynamicSitePath) && isValue(json.dynamicSiteLocale)) {
    $(mostviewedsection).append(
      "<ul><li><a href='" +
        json.dynamicSitePath +
        "'>" +
        json.dynamicSiteLocale +
        "</a></li></ul>"
    );
  }

  if (isValue(json.staticPath1) || isValue(json.staticTitle1)) {
    $(mostviewedsection).append(
      "<ul><li><a href='" +
        json.staticPath1 +
        "'>" +
        json.staticTitle1 +
        "</a></li></ul>"
    );
  }
  if (isValue(json.staticPath2) || isValue(json.staticTitle2)) {
    $(mostviewedsection).append(
      "<ul><li><a href='" +
        json.staticPath2 +
        "'>" +
        json.staticTitle2 +
        "</a></li></ul>"
    );
  }
}

$(document).ready(function(){

    if (isEditMode !== 'true' && isDesignMode !== 'true') {
    $( "#featured-more" ).hide();
    $("#author-seemore-note").hide();
    }

    var $touchArea = $('.vjs-poster'),
        touchStarted = false; // detect if a touch event is started

    $touchArea.on('touchend mouseup touchcancel',function (e){
        e.preventDefault();
        // here we can consider finished the touch event
        touchStarted = false;

        var redirectUrl = $(".showcase-frame a.promo-focus").attr("href");
         window.location = redirectUrl;
    });

    $(window).resize(function () {
     if (matchMedia('(min-width: 768px)').matches) { 
              $(function() {
                var featuredHeightNew;
				featuredHeightNew=(($('#row1').height() + $('#row2').height() + $('#row3').height()) - $('#home-trending h3').height())/5;
				if (featuredHeightNew > 0) {
                    $(".trending-item a").css("height", featuredHeightNew);
                };
                if (matchMedia('(max-width: 1024px)').matches) {
                // In case height of trending is more than featured fixed layout area
                  if($(".table-frame-col-30.trending").height() > $(".table-frame-col-70.featured").height()) {
                        var trendingHeight= $(".table-frame-col-30.trending").height();
                        $(".table-frame-col-70.featured").css("height", trendingHeight);
                  }
                }
              });
          }
    });

    /* add no-showcase when no component dropped on banner area */
    if($('.extended-background').find("div.showcase-basic").length === 0 && $('.extended-background').find("div.showcase-video").length === 0 && $('.extended-background').find('div.globalsiteselector').length === 0) {
        $(".extended-background").addClass("no-showcase");
    }
});

$(window).bind("load", function() {
    setTimeout(function(){
   /* setting up height for each trending promo in trending section */
   if (matchMedia('(min-width: 768px)').matches) { 
      $(function() {
        var featuredHeight;
		featuredHeight=($('#row1').height() + $('#row2').height() + $('#row3').height() - $('#home-trending h3').height())/5;
		if (featuredHeight > 0) {
            $(".trending-item a").css("height", featuredHeight);
        }
        if (matchMedia('(max-width: 1024px)').matches) {
        // In case height of trending is more than featured fixed layout area
          if($(".table-frame-col-30.trending").height() > $(".table-frame-col-70.featured").height()) {
                var trendingHeight= $(".table-frame-col-30.trending").height();
                $(".table-frame-col-70.featured").css("height", trendingHeight);
          }
        }
      });
   }
    else {
        $(".autowidthcolumnctrl").each(function(){
            if($(this).children().length === 0)
            $(this).css("margin","0px");
        });
    }
    }, 1000);
    
   /* Making entire <li> tag clickable */
    $(".trending-item").click(function(){
        window.location = $(this).find('a').attr('href');
        return false;
    });

});

(function($) {
    
    
    $.fn.mobileTabs = function(){
                    
                
                
                var $main = $(this);
                var $tabs = $main.find(".tab");
                var total = $tabs.length;
                var $swipeArea = $('#home-page-mobile-tabs');
                
                
                if($tabs.length >= 3){
                    $main.css('height','60px')
                        .css('margin-bottom','20px');
                    $main.find('ul').taboverflow(); 
                    $tabs.css('width','auto');
                }
                
                function showTabItems(){
                    $.each( $tabs, function(){
                        var $class = $(this).data("tab");
                        $("." + $class).show().removeAttr("style");
                    });
                }
                
                function hideTabItems(){
                    //hide all items that arent w/ first tab
                    $.each( $tabs, function(){
                        var $class='';
                        if($(this).hasClass('active')){
                            $class = $(this).data("tab");
                            $("." + $class).show();
                        }else{
                            $class = $(this).data("tab");
                            $("." + $class).hide();
                        }
                    });
                }
                
                //hide all other tab items
                var hideOthers = function(activeId){
                    $.each($tabs,function(id){
                        if(id===activeId)return;//if active we dont do anything.
                        var $class = $(this).data("tab");
                        $("." + $class).hide();
                    })
                }
                
                //setup tab listeners
                var tabListener = function(){
                    var $id = $(this).index();
                    var blocks = $(this).data("tab");
                    // remove old active state
                    $main.find('.tab.active').removeClass("active");
                    // add new active state
                    $(this).addClass('active');
                    hideOthers($id);
                    $('.' + blocks).show();
                }
               
                
                var tabSwipeLeft = function(){
                    var $active = $main.find(".tab.active");
                    var $next = $active.prev();
                    
                    if($active.index() === 0)
                        $next = $tabs.eq(total-1);                 
                    
                    $next.trigger('click'); 
                }
                
                var tabSwipeRight = function(){
                    var $active = $main.find(".tab.active");
                    var $next = $active.next();
                    
                    if($active.index() === total-1)
                        $next = $tabs.eq(0);
                    
                    $next.trigger('click');  
                }
                
                
                
                // TODO:MAKE SURE THIS DOESNT FIRE UNLESS IN MOBILE                
                if($(window).width()<767){
                    $tabs.first().addClass('active');
                    hideTabItems();
                    $tabs.on("click touch",tabListener);
                    $swipeArea.hammer().on("swiperight", tabSwipeLeft);
                    $swipeArea.hammer().on("swipeleft", tabSwipeRight);
                }
                
                $(window).resize(function () {
                    if($(window).width()<767){
                        hideTabItems();
                        $tabs.on("click touch",tabListener);
                        $swipeArea.hammer().on("swiperight", tabSwipeLeft);
                        $swipeArea.hammer().on("swipeleft", tabSwipeRight);
                        
                    }else{
                        showTabItems();
                        $swipeArea.hammer().off();
                    }
                    
                });
                
            };
            
            $(document).ready(function(){                               
                var $tabSet = $("#home-page-mobile-tabs");
                $tabSet.mobileTabs();
            });
    
    
})(jQuery);

var promodatacqids_fixedlayout = '';
var promodatacqids_showmore = '';

var homepage_globalFeaturedComponentArray = [];
var homepage_globalStandardComponentArray = [];
var homepage_careersComponentArray = [];
var homepage_eventComponentArray = [];
var homepage_solutionsComponentArray = [];

var featuredPromoIdString = '';
var trendingPromoIdString = '';

function registerCuratedPromos(hashValue, type) {
    if(featuredPromoIdString === ""){
        featuredPromoIdString = hashValue;
    }else{
        featuredPromoIdString += "," + hashValue;
    }
}

function registerPromos(divID, promoType) {
    if(promoType === 'featured') {
        homepage_globalFeaturedComponentArray.push(divID);
    } else if(promoType === 'standard') {
        homepage_globalStandardComponentArray.push(divID);
    } else if(promoType === 'career') {
        homepage_careersComponentArray.push(divID);
    } else if(promoType === 'events') {
        homepage_eventComponentArray.push(divID);
    } else if(promoType === 'solutions') {
        homepage_solutionsComponentArray.push(divID);
    }
}

function findMaxLengthArray(){
    var featuredArrayLength = homepage_globalFeaturedComponentArray.length;
    var standardArrayLength = homepage_globalStandardComponentArray.length; 
    var resultsCount = 7;//Because trending has 7 promos by default.
    
    if(resultsCount < (featuredArrayLength + standardArrayLength)){
        resultsCount = featuredArrayLength + standardArrayLength;
    }
    return resultsCount;
}

function findMaxLengthArray_ContentPromos(){
    var careersArrayLength = homepage_careersComponentArray.length; 
    var eventArrayLength = homepage_eventComponentArray.length;
    var solutionsArrayLength = homepage_solutionsComponentArray.length; 

    var resultsCount1 = 0;
    resultsCount1 = careersArrayLength + eventArrayLength + solutionsArrayLength;
    return resultsCount1;
}

var ccdhomeEvents= function(){

    var mainDeferred = $.Deferred();
    var ccdhome1 = $.Deferred(); 
    var ccdhome2 = $.Deferred(); 
    
    var resultCountContentPromos = findMaxLengthArray_ContentPromos() + 1;
    var homePageExclusionListArray = homePageExclusionList.split(" ");
    var contentPromosExclusionListArray = contentPromosExclusionList.split(" ");
    var exclusionListArray = homePageExclusionListArray.concat(contentPromosExclusionListArray);

    var resultsCount = findMaxLengthArray();
    
    if (!typeof(tntFlag) == 'undefined') {homePageJsonURL += tntFlag; homePageContentPromosJsonURL += tntFlag;}                     

                                $.ajax({
                                    "url": window.search_engine+"/template",
                                    "method": "POST",
                                    "timeout": 0,
                                    "headers": {
                                        "Authorization": "ApiKey "+window.search_key,
                                        "Content-Type": "application/json"
                                    },
                                    "data": JSON.stringify(
                                        {
                                            "id": "dcom-homepage-trending-search-template",
                                            "params": {
                                                "page-id": homePageExclusionList,
                                                "page-type": "dcom-legacy-articles",
                                                "count" : resultsCount,
                                                "site": sc_country,
                                                "lang": sc_language
                                            }
                                        }
                                    ),
                                    dataType: 'json',
                                    success: function(result){
                                        var trendingFeaturedArray = result.hits.hits;
                                        populateTrendingJSONData(trendingFeaturedArray);      
                                        ccdhome1.resolve();
                                    },
                                    error: function (error) {
                                        console.log(error);
                                
                                    }
                                });
                                
                            ccdhome1.done(function(){ 
                                $.ajax({
                                    "url": window.search_engine+"/template",
                                    "method": "POST",
                                    "timeout": 0,
                                    "headers": {
                                        "Authorization": "ApiKey "+window.search_key,
                                        "Content-Type": "application/json"
                                    },
                                    "data": JSON.stringify(
                                        {
                                            "id": "dcom-homepage-dynamic-promos-search-template",
                                            "params": {
                                                "size-content-promos": resultCountContentPromos,
                                                "size-featured-standard-promos": resultsCount,
                                                "page-id": exclusionListArray ,
                                                "site": sc_country,
                                                "lang": sc_language
                                            }
                                        }
                                    ),
                                    success: function (result) {
                                        var resultSetsArray = result.aggregations.content_promos.buckets;
                                        var resultsFeaturedArray = result.aggregations.featured_standard_promos.buckets;
                                        populateContentPromosJSONData(resultSetsArray);
                                        populateFeaturedJSONData(resultsFeaturedArray);
                                        ccdhome2.resolve();
                                    },
                                    error: function (error) {
                                        console.log(error);
                                    }
                                });
                            });

                        ccdhome2.done(function(){      
                                mainDeferred.resolve(); 
                        });

               //For recalculating the window size after populating the divs dynamically from CCD
                $(window).resize();

return mainDeferred;
};



function populateTrendingJSONData(trendingObj) {
    var flagCount = 0;
    var countTrendingItems = 1;
    var countTrendingItemsPopulate = 1;
    $.each(trendingObj, function(itemsIndex, dataObjArray){
        dataObjArray = dataObjArray._source;
        var urlVal = dataObjArray['url'];
        var target ="_self";
        if(undefined !== urlVal){
            urlVal = checkExternalLink(urlVal);
            if((urlVal.indexOf("http://") >=0 ) || (urlVal.indexOf("https://") >=0)) {
                target ="_blank";
            }
        }
        
        var heading1Val = dataObjArray['headline-1'];
        var heading2Val = dataObjArray['headline-2'];

        if(undefined===heading1Val){
            heading1Val='';
        }
        if(undefined===heading2Val){
            heading2Val='';
        }

        if(!(heading1Val === '' && heading2Val === '') && countTrendingItems < 6){ 
            
            if(trendingPromoIdString === ''){
                trendingPromoIdString = dataObjArray['page-id'];
            } else{
                trendingPromoIdString += "," + dataObjArray['page-id'];   
            } 

            if (matchMedia('(min-width: 1025px)').matches) {
                if(heading1Val !== '' && heading1Val.length > 120){
                    heading1Val = heading1Val.substring(0, 120)+"...";
                }
                if(heading2Val !== '' && heading2Val.length > 120){
                    heading2Val = heading2Val.substring(0, 120)+"...";
                }
            }
            else {
                if(heading1Val !== '' && heading1Val.length > 60){
                    heading1Val = heading1Val.substring(0, 60)+"...";
                }
                if(heading2Val !== '' && heading2Val.length > 60){
                    heading2Val = heading2Val.substring(0, 60)+"...";
                }
            }


            if(countTrendingItemsPopulate <= 5 && ((heading1Val !== '' && heading2Val !== '') || (heading1Val === '' && heading2Val !== '')  || (heading1Val !== '' && heading2Val === ''))){

                    $("#home-trending ol").append("<li class=\'trending-item\' data-promoname=\'\' data-promocategory=\'dynamic\' data-promotype=\'standard\' data-promocontenttype=\'article\' id=\'trending-promo"+countTrendingItems+"\'><a href=\'link\' id=\'trending"+countTrendingItems+"\' class=\'\' target=\'_self\' ><h4></h4><h5></h5></a></li>");          
                    $("#home-trending ol li#trending-promo"+(countTrendingItems)).attr('data-cq-id',dataObjArray['page-id']).attr('data-promoname',heading1Val);
                    $("#home-trending ol li a#trending"+(countTrendingItems)).attr('href', urlVal).attr('target',target);
                    $("#home-trending ol li a#trending"+(countTrendingItems)+" h4").html(heading1Val);
                    $("#home-trending ol li a#trending"+(countTrendingItems)+" h5").html(heading2Val);
                    //$(".trending#div"+(itemsIndex+1)+" .article-image img").attr('alt', imageVal).attr('src', imageVal);

                    countTrendingItemsPopulate++;

            }              

            countTrendingItems++;
        }
            
            if(flagCount < 6){
                var promoIds_trending = trendingPromoIdString;
            }            
        
        flagCount++;
    });
	$('h5').each(function(index, item) {
    if($.trim($(item).text()) === "") {
        $(item).slideUp(); 
		$(item).remove();
    }
	});
//	 Added for promo ids  
	//dataLayer.page.attributes.promoIds = dataLayer.page.attributes.promoIds +"," + trendingPromoIdString;
}

function removeTags(txt){
    var rex = /(<([^>]+)>)/ig;
    var textVal = txt.replace(rex , "");
    return textVal;
}

function  populateFeaturedJSONData(featuedObj) {

    var featuredPromosCount = 0;
    var standardPromosCount = 0;
    $.each(featuedObj, function(itemsIndex, arrayObjects){
        var featured_standard_type = arrayObjects.key;
        arrayObjects=arrayObjects.by_top_hit.hits.hits;
        $.each(arrayObjects, function(itemsIndex, dataObjArray){
            dataObjArray = dataObjArray._source;
            var urlVal = dataObjArray['url'];
            var target ="_self";
            if(undefined !== urlVal){
                urlVal = checkExternalLink(urlVal);
                if((urlVal.indexOf("http://") >=0 ) || (urlVal.indexOf("https://") >=0)) {
                    target ="_blank";
                }
            }
            var heading1Val = dataObjArray['headline-1'];
            var heading2Val = dataObjArray['headline-2'];
            var contentTypeVal = dataObjArray['content-type'];
            var imageVal = dataObjArray['thumbnail'];
            var descriptionVal = dataObjArray['description'];
            if(undefined !== descriptionVal){
                descriptionVal = removeTags(descriptionVal); 
            } 
            if(dataObjArray['description'] == undefined){
                descriptionVal = heading2Val;
            }
            if(featured_standard_type === '1' && featuredPromosCount < homepage_globalFeaturedComponentArray.length){// value 1 means featured type
                if(homepage_globalFeaturedComponentArray.length > 0 && (featuredPromosCount < homepage_globalFeaturedComponentArray.length)) {       
                    
                    $('div#home-featured').find(".featuredpromo div").map(function() { 
                        if(this.id === homepage_globalFeaturedComponentArray[featuredPromosCount]){ 
                            promodatacqids_fixedlayout = promodatacqids_fixedlayout + "," + dataObjArray['page-id'];
                        }
                    });
                    $('div#featured-more').find(".featuredpromo div").map(function() { 
                        if(this.id === homepage_globalFeaturedComponentArray[featuredPromosCount]){
                            promodatacqids_showmore =  promodatacqids_showmore + "," + dataObjArray['page-id'];
                        }
                    });
                    $("#"+homepage_globalFeaturedComponentArray[featuredPromosCount]+" a").attr('href', urlVal).attr('target',target).attr('data-cq-id',dataObjArray['page-id']).attr('data-promoname',heading1Val);                               
                    $("#"+homepage_globalFeaturedComponentArray[featuredPromosCount]+" .dynamic-image img").attr('data-orgsrc', imageVal);
                    $("#"+homepage_globalFeaturedComponentArray[featuredPromosCount]+" .article-text .promo-label").html(contentTypeVal);
                    $("#"+homepage_globalFeaturedComponentArray[featuredPromosCount]+" .article-text h2").html(heading1Val);
                    $("#"+homepage_globalFeaturedComponentArray[featuredPromosCount]+" .article-text h3").html(heading2Val);
                    $("#"+homepage_globalFeaturedComponentArray[featuredPromosCount]+" .article-text .description").html(descriptionVal);
    
                    featuredPromosCount++;
    
                    if(featuredPromoIdString === '')
                        featuredPromoIdString = dataObjArray['page-id'];
                    else
                        featuredPromoIdString += "," + dataObjArray['page-id']; 
                }
    
            }
            else if(featured_standard_type !== '1' || featuredPromosCount > homepage_globalFeaturedComponentArray.length){
                if(homepage_globalStandardComponentArray.length > 0 && (standardPromosCount < homepage_globalStandardComponentArray.length)) {
    
                    // Adds the dynamic 
                    $('div#home-featured').find(".standardpromo div").map(function() { 
                        if(this.id === homepage_globalStandardComponentArray[standardPromosCount]){ 
                            promodatacqids_fixedlayout =  promodatacqids_fixedlayout + "," + dataObjArray['page-id'];
                        }
                    });
                    $('div#featured-more').find(".standardpromo div").map(function() { 
                        if(this.id === homepage_globalStandardComponentArray[standardPromosCount]){ 
                            promodatacqids_showmore =  promodatacqids_showmore + "," + dataObjArray['page-id'];
                        }
                    });
    
                    $("#"+homepage_globalStandardComponentArray[standardPromosCount]+" a").attr('href', urlVal).attr('target',target).attr('data-cq-id',dataObjArray['page-id']).attr('data-promoname',heading1Val);
                    $("#"+homepage_globalStandardComponentArray[standardPromosCount]+" .promo-label").html(contentTypeVal);
                    $("#"+homepage_globalStandardComponentArray[standardPromosCount]+" .tertiary-headline").html(heading1Val);
                    $("#"+homepage_globalStandardComponentArray[standardPromosCount]+" .page-description-for-promo").html(descriptionVal);
                    
                    standardPromosCount++;
    
                    if(featuredPromoIdString === '')
                        featuredPromoIdString = dataObjArray['page-id'];
                    else
                        featuredPromoIdString += "," + dataObjArray['page-id']; 
                }
            } 
        });
    });
    
    for(var i=0; i < homepage_globalFeaturedComponentArray.length; i++){
        if($("#"+homepage_globalFeaturedComponentArray[i]+" .promo-label").html() === '' && wcmMode === 'DISABLED'){
            $("#"+homepage_globalFeaturedComponentArray[i]).hide();
        }else if($("#"+homepage_globalFeaturedComponentArray[i]+" .promo-label").html() === '' && wcmMode !== 'DISABLED'){
                                $("#"+homepage_globalFeaturedComponentArray[i]+" .promo-label").html(emptyPromoMessage);
                }
    }
    for(var i=0; i < homepage_globalStandardComponentArray.length; i++){
        if($("#"+homepage_globalStandardComponentArray[i]+" .promo-label").html() === '' && wcmMode === 'DISABLED'){
            $("#"+homepage_globalStandardComponentArray[i]).hide();
        }else if($("#"+homepage_globalStandardComponentArray[i]+" .promo-label").html() === '' && wcmMode !== 'DISABLED'){
                                $("#"+homepage_globalStandardComponentArray[i]+" .promo-label").html(emptyPromoMessage);
                }
    }
    $(document).trigger('promosLoaded');
}

function  populateContentPromosJSONData(resultSetsArray) {
    
    var featuredPromosCount = 0;
    var standardPromosCount = 0;
    
    $.each(resultSetsArray, function(arrayIndex, arrayObjects){
        if(arrayObjects.key === 'legacy-careers' && homepage_careersComponentArray.length > 0 ) { 
                dataObjArray=arrayObjects.by_top_hit.hits.hits;
                $.each(dataObjArray, function(arrayIndex, careersObjArray){
                    careersObjArray=careersObjArray._source;
                    var urlVal = careersObjArray['url'];
                    var target ="_self";
                    if(undefined !== urlVal){
                        urlVal = checkExternalLink(urlVal);
                        if((urlVal.indexOf("http://") >=0 ) || (urlVal.indexOf("https://") >=0)) {
                            target ="_blank";
                        }
                    }
                   
                    var heading1Val = careersObjArray['headline-1'];
                    var descriptionVal = careersObjArray['description'];
                    var contentTypeVal = careersObjArray['content-type'];               
                    
                    $('div#home-featured').find(".careerspromo div").map(function() { 
                        if(this.id === homepage_careersComponentArray[arrayIndex]){ 
                            promodatacqids_fixedlayout = promodatacqids_fixedlayout + "," + careersObjArray['page-id'];
                        }
                    });
                    $('div#featured-more').find(".careerspromo div").map(function() { 
                        if(this.id === homepage_careersComponentArray[arrayIndex]){
                            promodatacqids_showmore =  promodatacqids_showmore + "," + careersObjArray['page-id'];
                        }
                    });
                    
                    if(homepage_careersComponentArray.length > arrayIndex){
                        $("#"+homepage_careersComponentArray[arrayIndex]+" a").attr('href', urlVal).attr('target',target).attr('data-cq-id',careersObjArray['page-id']).attr('data-promoname',heading1Val);
                        $("#"+homepage_careersComponentArray[arrayIndex]+" .promo-label").html(contentTypeVal);
                        $("#"+homepage_careersComponentArray[arrayIndex]+" .tertiary-headline").html(heading1Val);
                        $("#"+homepage_careersComponentArray[arrayIndex]+" .page-description-for-promo").html(descriptionVal);                     
                        
                        promoIds_next_steps += "," + careersObjArray['page-id'];
                    }
                });
                hideEmptyPromosContentPage(homepage_careersComponentArray, dataObjArray);
        }
        else if(arrayObjects.key === 'legacy-events' && homepage_eventComponentArray.length > 0) { 
                dataObjArray=arrayObjects.by_top_hit.hits.hits;
                $.each(dataObjArray, function(arrayIndex, eventsObjArray){
                    eventsObjArray=eventsObjArray._source;
                    var urlVal = eventsObjArray['url'];
                    var target ="_self";
                    if(undefined !== urlVal){
                        urlVal = checkExternalLink(urlVal);
                        if((urlVal.indexOf("http://") >=0 ) || (urlVal.indexOf("https://") >=0)) {
                        target ="_blank";
                        }
                    }
                    
                    var heading1Val = eventsObjArray['headline-1'];
                    var descriptionVal = eventsObjArray['description'];
                    var contentTypeVal = eventsObjArray['content-type'];
                    
                    $('div#home-featured').find(".eventpromo div").map(function() { 
                        if(this.id === homepage_eventComponentArray[arrayIndex]){ 
                            promodatacqids_fixedlayout = promodatacqids_fixedlayout + "," + eventsObjArray['page-id'];
                        }
                    });
                    $('div#featured-more').find(".eventpromo div").map(function() { 
                        if(this.id === homepage_eventComponentArray[arrayIndex]){
                            promodatacqids_showmore =  promodatacqids_showmore + "," + eventsObjArray['page-id'];
                        }
                    });
                    
                    if(homepage_eventComponentArray.length > arrayIndex){
                        $("#"+homepage_eventComponentArray[arrayIndex]+" a").attr('href', urlVal).attr('target',target).attr('data-cq-id',eventsObjArray['page-id']).attr('data-promoname',heading1Val);
                        $("#"+homepage_eventComponentArray[arrayIndex]+" .promo-label").html(contentTypeVal);
                        $("#"+homepage_eventComponentArray[arrayIndex]+" .tertiary-headline").html(heading1Val);
                        $("#"+homepage_eventComponentArray[arrayIndex]+" .page-description-for-promo").html(descriptionVal);

                        promoIds_next_steps += "," + eventsObjArray['page-id'];
                    }                    
                });

                hideEmptyPromosContentPage(homepage_eventComponentArray, dataObjArray);
        }
        else if(arrayObjects.key === 'legacy-solutions' && homepage_solutionsComponentArray.length > 0) { 
                dataObjArray=arrayObjects.by_top_hit.hits.hits;
                $.each(dataObjArray, function(arrayIndex, solutionsObjArray){
                    solutionsObjArray=solutionsObjArray._source;
                    var urlVal = solutionsObjArray['url'];
                    var target ="_self";
                    if(undefined !== urlVal){
                        urlVal = checkExternalLink(urlVal);
                        if((urlVal.indexOf("http://") >=0 ) || (urlVal.indexOf("https://") >=0)) {
                        target ="_blank";
                        }
                    }
                    
                    var heading1Val = CQ.shared.XSS.getXSSValue(solutionsObjArray['headline-1']);
                    var descriptionVal = solutionsObjArray['description'];
                    var contentTypeVal = CQ.shared.XSS.getXSSValue(solutionsObjArray['content-type']);

                    $('div#home-featured').find(".solutionspromo div").map(function() { 
                        if(this.id === homepage_solutionsComponentArray[arrayIndex]){ 
                            promodatacqids_fixedlayout = promodatacqids_fixedlayout + "," + solutionsObjArray['page-id'];
                        }
                    });
                    $('div#featured-more').find(".solutionspromo div").map(function() { 
                        if(this.id === homepage_solutionsComponentArray[arrayIndex]){
                            promodatacqids_showmore =  promodatacqids_showmore + "," + solutionsObjArray['page-id'];
                        }
                    });
                    
                    if(homepage_solutionsComponentArray.length > arrayIndex){
                        $("#"+homepage_solutionsComponentArray[arrayIndex]+" a").attr('href', urlVal).attr('target',target).attr('data-cq-id',solutionsObjArray['page-id']).attr('data-promoname',heading1Val);
                        $("#"+homepage_solutionsComponentArray[arrayIndex]+" .promo-label").html(contentTypeVal);
                        $("#"+homepage_solutionsComponentArray[arrayIndex]+" .tertiary-headline").html(heading1Val);
                        $("#"+homepage_solutionsComponentArray[arrayIndex]+" .page-description-for-promo").html(descriptionVal);
                        
                        promoIds_next_steps += "," + solutionsObjArray['page-id'];
                    }                   
                });

                hideEmptyPromosContentPage(homepage_solutionsComponentArray, dataObjArray);
        }        
    });
    $(document).trigger('promosLoaded');
}

    function hideEmptyPromosContentPage(promosArray, dataArray){
        if(promosArray.length > dataArray.length){
            for(var i=dataArray.length; i<promosArray.length; i++) {
                if(wcmMode === 'DISABLED') {
                    $("#"+promosArray[i]).hide();
                }
                else {
                    $("#" + promosArray[i] + " .employee-promo").append("<p class=\'promo-label\'></p>");
                    $("#"+promosArray[i]+" .promo-label").html(emptyPromoMessage);
                }
            }
        }
    }

pageLoadFramework.registerOnLoadEvent(ccdhomeEvents);





