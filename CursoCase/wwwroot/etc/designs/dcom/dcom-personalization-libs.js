// Set timeout variables.
var user_status = localStorage.getItem("loggedIn");
var timoutWarning = 1800000; // Display warning in 30 Mins.

var warningTimer;
var timeoutTimer;

function readCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) ===  ' ') c = c.substring(1);
        if (c.indexOf(name) !== -1) return c.substring(name.length, c.length);
    }
    return "";
}
var keepMeLoginStatus = readCookie("KEEP_ME_LOGIN"); // 582206-Keep me logged implementation: changed localstorage to cookies

if (keepMeLoginStatus === "false") {
    var StartTimers = function() {
        warningTimer = setTimeout("IdleWarning()", timoutWarning);
    }

    // Start timers.
    StartTimers();

    var ResetTimers = function() {
        clearTimeout(warningTimer);
        clearTimeout(timeoutTimer);
        StartTimers();
    }

    // Reset timers on mousemove .
    $(document).mousemove(function(){ResetTimers()});

}
// Show idle timeout warning dialog.
function IdleWarning() {
    logOut();
    $('#sessionOutModal').modal({
        show: true,
        backdrop: 'static'
    });
}
$(".sessionout__login").on('click', function () {
    $("#modal-unsaved-profile,#modal-unsaved-subscription").remove();
    window.location.href = "./registration.html#signin";
})
/*========================================
//  gigya.js 
//  ------------
//  
//  dcom-personalization-libs
//========================================*/

//Configurable Variables
var SOCIAL_API = mydeloitteAPIKey;
var SOCIAL_LOGIN_SCREEN_SET = 'MyDeloitte1B-RegistrationLogin';
var REMOVE_BOOKMARK = null;
var ADD_BOOKMARK = null;
var ADD_TO_MY_BOOKMARK_TITLE = null;
var ADDED_TO_MY_BOOKMARK_TITLE = null;

//Global variables
var SOCIAL_IS_LOGGED = false;
var SOCIAL_PROFILE = null;

// var that will identify if user is logging in via bookmark button
var isUserLoggingViaBM = false;

var flag_bookmarkedAlready;

var isAlertinWindow = false;

var cookieHeight = $(".cookie-container").outerHeight(true);
if ($('.optanon-alert-box-wrapper').length && $('.optanon-alert-box-wrapper').is(':visible')) {
  var OTCookieBannerHeight = $('.optanon-alert-box-wrapper').outerHeight();
  cookieHeight = OTCookieBannerHeight;
}

var fixAlertHeight= function(headerbannerpostMarginTop){
 if(isAlertinWindow){
   $('.headerbannerpost').css('margin-top', headerbannerpostMarginTop);
 }
 else{
   $('.headerbannerpost').css('margin-top', headerbannerpostMarginTop + $('.mydeloitte-alert.alert-show').outerHeight());
   isAlertinWindow = true;
  }
}

//Load Script
var loadGigya = function() {
  var sptForGigya = document.createElement('script');
  sptForGigya.type = 'text/javascript';
  sptForGigya.async = true;
  sptForGigya.src = "https://cdns.gigya.com/js/gigya.js?apiKey=" + SOCIAL_API + "&services=socialize.share,accounts.screenset,socialize.shareCounts,socialize.simpleShare,socialize.reactions";
  sptForGigya.text = '{lang: ' + SOCIAL_LANG + ' }'
  document.getElementsByTagName('head')[0].appendChild(sptForGigya);
};

$(document).ready(function() {
    //Login - Keep me loggedin enable and disabled.
    if(typeof OptanonActiveGroups != 'undefined'){
       if(OptanonActiveGroups.indexOf(3) > -1){	
      //if Cookie function is enabled
      $(".gigya-keep-me-logged-in").removeClass("stay-signin-checkbox__disabled");
      $(".gigya-input-checkbox").removeAttr("disabled");
      $(".myD-cookie-setting-link").attr("hidden", "true");
	}
    }else {
      //if Cookie function is disabled
      $(".gigya-keep-me-logged-in").addClass("stay-signin-checkbox__disabled");
      $(".gigya-input-checkbox").attr("disabled", "disabled");
      $(".myD-cookie-setting-link").removeAttr("hidden");
    };
  

  //Check to see if the Social Media is configured or not
  if (typeof socialmediaKey != "undefined" && socialmediaKey != null) {
    loadGigya();
  }
});

// $(window).bind("load", function() {
//   if (!SOCIAL_IS_LOGGED) {
//     $('#gigya_controls_login').css('margin-right', '0px');
//   } else {
//     isPageAlreadyBookmarked();

//   }
//   // Persistent session fix- calling logout function if session cookie is not available
//   var cookiename = getCookie("userLoggedInIs");
//   localUserStauts = localStorage.getItem("userLoggedInIs");
//   if (localUserStauts == "true" && cookiename != "true") {
//     logOut();
//   }
// });

var handleLogin = function(loginEvent) {
  /*Creating session cookie on sucssesful login*/
  document.cookie = "userLoggedInIs=true; domain=deloitte.com; path=/";
  localStorage.setItem("userLoggedInIs", true);
  // 582206-Keep me logged implementation
  var expireDate = new Date();
  expireDate.setFullYear(expireDate.getFullYear() + 1); // 582206-Keep me logged implementation: setting validity for one year
  var expires = "expires=" + expireDate.toUTCString();
  
  if(typeof OptanonActiveGroups != 'undefined'){   // if functional cookies are accepted
  if(OptanonActiveGroups.indexOf(3) > -1){
  if(loginEvent.remember) {
    document.cookie = "KEEP_ME_LOGIN=true;"+ expires + ";domain=.deloitte.com;path=/";
  } else {
      document.cookie = "KEEP_ME_LOGIN=false;"+ expires + ";domain=.deloitte.com;path=/";
  }
  }
  }
  evalSession();
  if (!isUserLoggingViaBM) {
    var my_account_url='';
    if (loginEvent.newUser) {
      my_account_url = my_account_url + "?newUser=true";
    } 
    window.location.replace(my_account_url);
  }
};


//Once the script is loaded, init zall components
var onGigyaServiceReady = function() {
  if (typeof mydeloitteUserloginenable != null && mydeloitteUserloginenable === "on") {
    //event listener for login
    gigya.accounts.addEventHandlers({
      onLogin: handleLogin,
      onLogout: evalSession
    });
    evalSession();
  }
};

//check if active session exists - EVALSESSION METHOD
var evalSession = function() {
  var evalResponse = function(response) {
    // setting gigya user id in session storage for analytics    
    sessionStorage.setItem("gigyaIdInSession", response.UID);
    var sc_gigyaId = response.UID;

    if (response.errorCode === 0) {
      localStorage.setItem("userLoggedInIs", true);

      document.cookie = "USER_DCOM=" + JSON.stringify(response.UID) + ";domain=.deloitte.com;path=/";

      // console.log("Setting USER_DCOM_NOTIFICATION from evalSession() in personalization/gigya");
      $("#register,#register-mobile, #subnav_register").removeClass("make-visible");
      $("#register, #subnav_register").hide();
      $("#profile_pic_id,#profile_pic_id_mobile,#subnav_profile_pic_id").addClass("make-visible");
      if (typeof response.profile.thumbnailURL !== 'undefined') {
        $("#profile_pic").attr("src", response.profile.thumbnailURL);
        $("#profile_pic_mobile, #subnav_profile_pic").attr("src", response.profile.thumbnailURL);
      } else if (typeof response.profile.photoURL !== 'undefined') {
        $("#profile_pic").attr("src", response.profile.photoURL);
        $("#profile_pic_mobile, #subnav_profile_pic").attr("src", response.profile.photoURL);
        $("#profile_pic_id_mobile").css("border-color", "black");
        $("#profile_pic_id_mobile").css("background-color", "black");
        $("#profile_pic_span").css("background-color", "black");
      } else {
        $("#profile_pic").remove();
        $("#profile_pic_mobile, #subnav_profile_pic").remove();

        if (typeof(document.querySelectorAll('#profile_pic_id span ')[0]) !== 'undefined') {
          document.querySelectorAll('#profile_pic_id span ')[0].innerText = response.profile.firstName[0];
          try {
            document.querySelectorAll('#subnav_profile_pic_id span ')[0].innerText = response.profile.firstName[0];
          } catch (e) {}
        }
        if (typeof(document.querySelectorAll('#profile_pic_id_mobile span ')[0]) !== 'undefined') {
          document.querySelectorAll('#profile_pic_id_mobile span ')[0].innerText = response.profile.firstName[0];
        }
      }

      SOCIAL_IS_LOGGED = true;
      SOCIAL_PROFILE = response;
    //  localStorage.setItem("userloggedin",true);
      isPageAlreadyBookmarked();
     //Setting the loggedIn parameter after successful login.  
      setOtSessionStorage(2 ,"loggedIn", "true");
    } else {
      SOCIAL_IS_LOGGED = false;
    }
  };

  gigya.accounts.getAccountInfo({
    include: "profile,data,emails",
    extraProfileFields: "work,phones",
    callback: evalResponse
  });
};

// remove CSRF token from the profile
var removeCSRFToken = function(eventObj) {

  if (eventObj.form === "gigya-register-form" || eventObj.form === "gigya-profile-form") {
    delete eventObj.formModel.profile[":cq_csrf_token"];
  }
}





function userLoggedIn(response) {
  localStorage.setItem("userloggedin", "false");
  // gigya link account screen
  if (response.currentScreen === 'gigya-link-account-screen') {
    if ($("#Dcom-signin-screenset_child_content div[id='gigya-link-account-screen']").length) {
      $(".myD-reg-signin-wrapper").addClass("link-account-screen");
      $(".form-screen").addClass("reg-flow-active");
    }
  }
}

function bookMarkPage(bookmarkJSONStr) {
  if (!SOCIAL_IS_LOGGED) {
    $('#Dcom-signin-modal').modal('show');
    showLogin();
  }
  if (SOCIAL_IS_LOGGED && bookmarkJSONStr !== undefined && bookmarkJSONStr !== null && bookmarkJSONStr !== "" && SOCIAL_PROFILE.UID) {
    gigya.accounts.getAccountInfo({
      apiKey: SOCIAL_API,
      UID: SOCIAL_PROFILE.UID,
      callback: getUpdatedBookmarks
    });
  }

}

function getUpdatedBookmarks(response) {
  if (typeof(response.errorCode) !== 'undefined' && response.errorCode === 0) {
    var existingBookMarks;
    var isHashValUnique = false;
    if (response.data.myDeloitte.bookmarks != undefined && response.data.myDeloitte.bookmarks) {
      SOCIAL_PROFILE.data.myDeloitte.bookmarks = response.data.myDeloitte.bookmarks
    }
    $(".mydeloitte-alert--success,.mydeloitte-alert--danger,.mydeloitte-alert--warning").hide().removeClass("alert-show");
    if (!SOCIAL_IS_LOGGED) {

      $('#Dcom-signin-modal').modal('show');
      showLogin();
    } else {
      var currentPageJSON ='';
      if (typeof(SOCIAL_PROFILE.data.myDeloitte.bookmarks) !== "undefined") {
        existingBookMarks = SOCIAL_PROFILE.data.myDeloitte.bookmarks;
      }
      if (typeof(existingBookMarks) === "undefined" || existingBookMarks === null) {
	existingBookMarks = [];
        currentPageJSON = JSON.parse(bookmarkJSONStr);
        existingBookMarks.push(currentPageJSON); // add json object
      } else {
        currentPageJSON = JSON.parse(bookmarkJSONStr);

        var alreadyAddedBookmark = false;
        $.each(existingBookMarks, function(index, data) {
          if (data.id === currentPageJSON.id) {
            alreadyAddedBookmark = true;
          }
        });
        if (!alreadyAddedBookmark) {
          existingBookMarks.push(currentPageJSON);
        } else {

          var deletedBookmarksArray = [];
          $.each(existingBookMarks, function(index, data) {
            if (data.id !== currentPageJSON.id) {
              var jsonStr = '{"id": "' + data.id + '", "date": "' + data.date + '"}';
              var json = JSON.parse(jsonStr);
              deletedBookmarksArray.push(json);
            }
          });
          existingBookMarks = deletedBookmarksArray;
        }
      }
      flag_bookmarkedAlready = alreadyAddedBookmark;
      var params = {
        data: {
          myDeloitte: {
            bookmarks: existingBookMarks
          }
        },
        callback: updateResponse
      };
      gigya.accounts.setAccountInfo(params);
    }

  }
}

function updateResponse() {
  gigya.accounts.getAccountInfo({
    include: "profile,data,emails",
    extraProfileFields: "work,phones",
    callback: updateBookmarkIconAndAlert
  });
}

function updateBookmarkIconAndAlert(response) {
  REMOVE_BOOKMARK = removebookmarktitle;
  ADD_BOOKMARK = addbookmarktitle;
  SOCIAL_PROFILE = response;
  ADD_TO_MY_BOOKMARK_TITLE = addtomybookmarkstitle;
  ADDED_TO_MY_BOOKMARK_TITLE = addedtomybookmarkstitle;

  document.cookie = "USER_DCOM=" + JSON.stringify(response.UID) + ";domain=.deloitte.com;path=/";
  // console.log("Setting USER_DCOM_NOTIFICATION from updateBookmarkIconAndAlert() in personalization/gigya");
  // document.cookie = "USER_DCOM_NOTIFICATION=newupdatesavailable;domain=.deloitte.com;path=/";

  var alertHeight = $(".mydeloitte-alert").outerHeight(true);
  var headerbannerpostMarginTop = 0;
  $("#header").css("margin-top", alertHeight);
  if ((matchMedia('(min-width: 1024px)').matches)) {
    $(".main-container.content-page").css("margin-top", alertHeight);
  }
  var cookieHeight = $(".cookie-container").outerHeight(true);
  if ($('.optanon-alert-box-wrapper').length && $('.optanon-alert-box-wrapper').is(':visible')) {
    var OTCookieBannerHeight = $('.optanon-alert-box-wrapper').outerHeight();
    cookieHeight = OTCookieBannerHeight;
  }
  if (!flag_bookmarkedAlready) {
	   if(sc_template === "Deloitte_Insights_Article_And_Multimedia_Template"){
		 $(".bookmark").removeClass("icon-bookmark-o").addClass("icon-bookmark");
	    $(".cmp-action-bar__option--bookmark").attr('data-original-title', ADDED_TO_MY_BOOKMARK_TITLE);
      }else{
		$(".social-share-links .bookmark").removeClass("icon-bookmark-o").addClass("icon-bookmark");
        $(".bookmark-text").text(ADDED_TO_MY_BOOKMARK_TITLE);
	    $("#bookmark-icon a").attr('title', REMOVE_BOOKMARK);
      }
	    
	    //logic for action-bar component
		$(".cmp-action-bar .cmp-action-bar__option--bookmark").addClass("active");
	    
    $(".mydeloitte-alert--success").show().addClass("alert-show");
    // bug-664627 adding dynamic height of cookie container
    $(".mydeloitte-alert--success").css("top", cookieHeight);
      	//for my-deloitte alert-box 
      $('.cmp-subnav .sticky-top,.cmp-sticky-header').css('margin-top', $('.mydeloitte-alert.alert-show').outerHeight());
       // bug-672781 When trying to save New DI Article and Multimedia page, "Bookmark alert" is not displaying on Stage - adding condition for header banner 
       headerbannerpostMarginTop = $('.headerbannerpost').length > 0 ? parseInt($('.headerbannerpost').css('margin-top').replace("px", "")): 0;
      fixAlertHeight(headerbannerpostMarginTop);
  } else {  
      if(sc_template === "Deloitte_Insights_Article_And_Multimedia_Template"){
		 $(".bookmark").removeClass("icon-bookmark").addClass("icon-bookmark-o");
           $(".cmp-action-bar__option--bookmark").attr('data-original-title', ADD_BOOKMARK);
      }else{
		$(".social-share-links .bookmark").removeClass("icon-bookmark").addClass("icon-bookmark-o");
        $(".bookmark-text").text(ADD_TO_MY_BOOKMARK_TITLE);
	    $("#bookmark-icon a").attr('title', ADD_BOOKMARK);
      }
      	//for my-deloitte alert-box 
	    
	    //logic for action-bar component
	    $(".cmp-action-bar .cmp-action-bar__option--bookmark").removeClass("active");
	    
      $(".mydeloitte-alert--danger").show().addClass("alert-show");
      // bug-664627 adding dynamic height of cookie container
      $(".mydeloitte-alert--danger").css("top", cookieHeight);
      $('.cmp-subnav .sticky-top,.cmp-sticky-header').css('margin-top', $('.mydeloitte-alert.alert-show').outerHeight());
      headerbannerpostMarginTop = 0;
      headerbannerpostMarginTop =$('.headerbannerpost').length > 0 ? parseInt($('.headerbannerpost').css('margin-top').replace("px", "")) : 0 ;
      fixAlertHeight(headerbannerpostMarginTop);
  }  
  if ($(".cookie-container").length) {
    $(".mydeloitte-alert").css("top", cookieHeight);
  }
  if ($('.optanon-alert-box-wrapper').length && $('.optanon-alert-box-wrapper').is(':visible')) {
    $(".mydeloitte-alert").css("top", cookieHeight);
  }
  $(".optanon-allow-all.accept-cookies-button,.accept-cookies-button,.accept-cookie-container").on("click", function() {
    if ($(".mydeloitte-alert").is(':visible')) {
      $(".mydeloitte-alert").css('top', '0');
    }
  })
  localStorage.removeItem("userloggedin");
}

function isPageAlreadyBookmarked() {
  var userlogged = localStorage.getItem("userloggedin");

  if (typeof(removebookmarktitle) != "undefined" && removebookmarktitle != null) {
    REMOVE_BOOKMARK = removebookmarktitle;
  } else {
    REMOVE_BOOKMARK = " ";
  }

  if (typeof(addedtomybookmarkstitle) != "undefined" && addedtomybookmarkstitle != null) {
    ADDED_TO_MY_BOOKMARK_TITLE = addedtomybookmarkstitle;
  } else {
    ADDED_TO_MY_BOOKMARK_TITLE = " ";
  }

  if (typeof(addtomybookmarkstitle) != "undefined" && addtomybookmarkstitle != null) {
    ADD_TO_MY_BOOKMARK_TITLE = addtomybookmarkstitle;
  } else {
    ADD_TO_MY_BOOKMARK_TITLE = " ";
  }
  var flag = false;
  if (typeof(SOCIAL_PROFILE) != "undefined" && typeof(SOCIAL_PROFILE.data.myDeloitte.bookmarks) != "undefined") {
    bookmarksOfUser = SOCIAL_PROFILE.data.myDeloitte.bookmarks;
    if (typeof(bookmarkJSONStr) !== "undefined" && bookmarkJSONStr !== "") {
      currentPageJSON = JSON.parse(bookmarkJSONStr);
      $.each(bookmarksOfUser, function(index, data) {
        if (data.id === currentPageJSON.id) {
          flag = true;
        }
      });
    }
  }

  // updating icon and labels if article is bookmarked or not
  if (sc_GatedOverlayEnabled === "true") {
    if (flag) {
      localStorage.removeItem('userloggedin');
      $(".social-share-links .bookmark").removeClass("icon-bookmark-o").addClass("icon-bookmark");
      
      //logic for action-bar component
      $(".cmp-action-bar .cmp-action-bar__option--bookmark").addClass("active");
      
      $(".bookmark-text").text(ADDED_TO_MY_BOOKMARK_TITLE);
      $("#bookmark-icon a").attr('title', ADDED_TO_MY_BOOKMARK_TITLE);
    } else {
      $(".social-share-links .bookmark").removeClass("icon-bookmark").addClass("icon-bookmark-o");
      
      //logic for action-bar component
      $(".cmp-action-bar .cmp-action-bar__option--bookmark").removeClass("active");
      
      $(".bookmark-text").text(ADD_TO_MY_BOOKMARK_TITLE);
    }
  } else {
    if (flag) {
      if (typeof (userlogged) !== "undefined" && userlogged !== null && userlogged !== "") {
        $(".mydeloitte-alert--warning").show().addClass("alert-show");
         // bug-664627 adding dynamic height of cookie container
        $(".mydeloitte-alert--warning").css("top", cookieHeight);
        var alertHeight = $(".mydeloitte-alert").outerHeight(true);
        $("#header").css("margin-top", alertHeight);
        if ((matchMedia('(min-width: 1024px)').matches)) {
          $(".main-container.content-page").css("margin-top", alertHeight);
        }
        if ($(".cookie-container").length) {
          $(".mydeloitte-alert").css("top", cookieHeight);
        }
        if ($('.optanon-alert-box-wrapper').length && $('.optanon-alert-box-wrapper').is(':visible')) {
          $(".mydeloitte-alert").css("top", cookieHeight);
        }
        $(".optanon-allow-all.accept-cookies-button,.accept-cookies-button,.accept-cookie-container").on("click", function() {
          if ($(".mydeloitte-alert").is(':visible')) {
            $(".mydeloitte-alert").css('top', '0');
          }
        })
      }
      localStorage.removeItem("userloggedin");
      $(".social-share-links .bookmark").removeClass("icon-bookmark-o").addClass("icon-bookmark");
      
      //logic for action-bar component
      $(".cmp-action-bar .cmp-action-bar__option--bookmark").addClass("active"); 
      
      $(".bookmark-text").text(ADDED_TO_MY_BOOKMARK_TITLE);
      $("#bookmark-icon a").attr('title', REMOVE_BOOKMARK);
    } else {
      if (typeof(userlogged) !== "undefined" && userlogged !== null && userlogged !== "") {

        var existingBookMarks = [];

        if (typeof(SOCIAL_PROFILE.data.myDeloitte.bookmarks) != "undefined") {
          existingBookMarks = SOCIAL_PROFILE.data.myDeloitte.bookmarks;
        }
        if (typeof(existingBookMarks) === "undefined" || existingBookMarks === null) {
           currentPageJSON = JSON.parse(bookmarkJSONStr);
          existingBookMarks.push(currentPageJSON);
        } else {
           currentPageJSON = JSON.parse(bookmarkJSONStr);

          var alreadyAddedBookmark = false;
          $.each(existingBookMarks, function(index, data) {
            if (data.id === currentPageJSON.id) {
              alreadyAddedBookmark = true;
            }
          });
          if (!alreadyAddedBookmark) {
            existingBookMarks.push(currentPageJSON);
          }
        }
        flag_bookmarkedAlready = alreadyAddedBookmark;
        var params = {
          data: {
            myDeloitte: {
              bookmarks: existingBookMarks
            }
          },
          callback: updateResponse
        };

        gigya.accounts.setAccountInfo(params);
      }
      $(".social-share-links .bookmark").removeClass("icon-bookmark").addClass("icon-bookmark-o");
      
      //logic for action-bar component
      $(".cmp-action-bar .cmp-action-bar__option--bookmark").removeClass("active");
      
      $(".bookmark-text").text(ADD_TO_MY_BOOKMARK_TITLE);
    }
  }
}

var deleteThisCookie = function(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.deloitte.com; path=/';
};

//function to close my-deloitte alert box
function closePopup() {
  $(".mydeloitte-alert--success,.mydeloitte-alert--danger,.mydeloitte-alert--warning").hide().removeClass(
      "alert-show");
  $(".mydeloitte-alert--success,.mydeloitte-alert--danger,.mydeloitte-alert--warning,.mydeloitte-alert").css(
      "top", "");
  $("#header").css("margin-top", "0");
  $(".main-container.content-page").css("margin-top", "0");
   $(".cmp-subnav .sticky-top").css("margin-top","0");
  $(".cmp-sticky-header").css("margin-top","0");

  var cookieHeight = 0;
  if ($('.optanon-alert-box-wrapper').length && $('.optanon-alert-box-wrapper').is(':visible')) {
                  var OTCookieBannerHeight = $('.optanon-alert-box-wrapper').outerHeight();
                  cookieHeight = OTCookieBannerHeight;
      }

  if ($('.cmp-subnav .sticky-top').length && $('.cmp-subnav .sticky-top').is(':visible')) {
        $(".cmp-subnav .sticky-top").css("top",cookieHeight);
              var  subnavHeight = $('.subnav-fixed').outerHeight();
        cookieHeight = cookieHeight + subnavHeight;
        }

  $(".cmp-sticky-header").css("top",cookieHeight);
  var headerbannerpostMarginTop = 0; 
  //headerbannerpostMarginTop  = parseInt($('.headerbannerpost').css('margin-top').replace("px", ""));
  $('.headerbannerpost').css('margin-top', headerbannerpostMarginTop - $('.mydeloitte-alert').outerHeight());
  isAlertinWindow = false;
}

// handling click events of link list 
$(".cmp-linklist__dropdown-link").on('click',function(){
  let id = $(this).attr('href');
  $('html, body').animate({
     scrollTop: $(id).offset().top - (window.innerHeight/2)
  }, 1000);
});
/*========================================
//  helper-functions.js 
//  ------------
//  
//  gigya personalization helper functions
//========================================*/


/* Show login gigya screen*/
function showLogin() {
  var loginParams = {
    screenSet: "MyDeloitte1B-RegistrationLogin",
    startScreen: "gigya-login-screen",
    containerID: "Dcom-signin-screenset",
    onAfterScreenLoad: userLoggedIn,
    customButtons: [{
      "type": "saml",
      "providerName": "Deloitte",
      "idpName": "deloitte",
      "position": "99"
    }],
    onBeforeSubmit: DcomvalidateDeloitteEmail
  };
  gigya.accounts.showScreenSet(loginParams);
};

/* Logout functions */
function logOut() {
  gigya.accounts.logout({
    callback: logOutResponse
  });
};

function logOutResponse(response) {
  if (response.errorCode === 0) {

    if (typeof(USER_IS_LOGGED) != 'undefined') {
      USER_IS_LOGGED = false;
    }
    document.cookie = "USER_LOG_OUT_DCOM=true;domain=.deloitte.com;path=/";
    sessionStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userLoggedInIs");
    sessionStorage.clear();
    window.location.reload();
  } 
}


//fix for bug 948941 - making cookie link clickable
$(window).load(function() {
  try{
    $('#Dcom-signin-modal').on('shown', function() {
        	$("#Dcom-signin-modal").on("click", "a.optanon-show-settings", Optanon.ToggleInfoDisplay);
    });
  }catch(e){}
	
});

function dcomssologin(_input) {
  validateEmailInput(_input);
  var dcomemail = $("#loginID").val().toLowerCase();
  var deloittestring = "@deloitte";
  var retiredDstring = "@deloitteretired";
  if (dcomemail.indexOf(deloittestring) !== -1 && dcomemail.indexOf(retiredDstring) === -1) {
    var deloitte = $("button[title='Deloitte']");
    $("#loginID, #password").val("");
    deloitte.click();
  }
}

function dcomssoreponse(response) {
  if (typeof(response.errorCode) != 'undefined' && response.errorCode === 0) {}
}

function DcomvalidateDeloitteEmail(response) {
  if (response.formData.loginID.indexOf('@deloitte') > -1 && response.formData.loginID.indexOf('@deloitteretired') === -1) {
    var deloitte = $("button[title='Deloitte']");
    $("#loginID, #password").val("");
    deloitte.click();
    return false;
  }
}

/* function for Email special characters validation */
function validateEmailInput(_input) {
  // Regex to check the special characters in Email
  var Regex = /["(),:;<>[\]\{\}~\\]/;
  if ($(_input).hasClass('valid-email-text')) {
    if (Regex.test($(_input).val())) {
      $(_input).siblings(".valid-inputs-Email").show();
    } else {
      $(_input).siblings(".valid-inputs-Email").hide();
    }
  }
}

//function getCookie        
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length);
  }
  return "";
}

/** Setting cookie for pull down menu from dcom to mydeloitte **/
function setCookieForPullDownMenu() {
  
  if (SOCIAL_PROFILE !== null && SOCIAL_PROFILE !== "undefined") {
    document.cookie = "PROFILE_PULL_DOWN=" + JSON.stringify(SOCIAL_PROFILE.UID) + ";domain=.deloitte.com;path=/";
  }
}

//462651: Blog Post Page issue. Code change to add class 
function addClassToSelector(selector, classToBeAdded) {
  $(selector).addClass(classToBeAdded);
}

//462651: Blog Post Page issue. Code change to remove class 
function removeClassFromSelector(selector, classToDelete) {
  $(selector).removeClass(classToDelete);
}


/*======================================
   Bugfixes and other adjustments below
  ======================================
*/


$('#Dcom-signin-modal').on('shown', function() {
  $("#header,.poll,#footer-section,#progress-bar,.cookie-container").addClass("myD-modal-bg");
  $(".optanon-alert-box-wrapper").css("z-index", "auto");
  if ($('#optanon-popup-bg').length) {
    $("html .optanon-alert-box-wrapper").css("z-index", "1");
  }
})
$('#Dcom-signin-modal').on('hidden', function() {
  $("#header,.poll,#footer-section,#progress-bar,.cookie-container").removeClass("myD-modal-bg");
  $(".optanon-alert-box-wrapper").css("z-index", "1100");
})

//462651: Blog Post Page issue. Code change deactivate header when signinmodal shows up
$('#Dcom-signin-modal').on('hidden.bs.modal', function() {
  var selectorsForRemovingClass = ["#header", ".poll", "#footer-section", "#progress-bar", ".cookie-container", ".header-container"];
  var classToDelete = "myD-modal-bg";
  for (var selector = 0; selector < selectorsForRemovingClass.length; selector++) {
    removeClassFromSelector(selectorsForRemovingClass[selector], classToDelete);
  }
  $(".optanon-alert-box-wrapper").css("z-index", "1100");
});


//462651: Blog Post Page issue. Code change activate header when signinmodal is hidden
$('#Dcom-signin-modal').on('shown.bs.modal', function() {
  var selectorsForAddingClass = ["#header", ".poll", "#footer-section", "#progress-bar", ".cookie-container", ".header-container"];
  var classToBeAdded = "myD-modal-bg";
  for (var selector = 0; selector < selectorsForAddingClass.length; selector++) {
    addClassToSelector(selectorsForAddingClass[selector], classToBeAdded);
  }
  $(".optanon-alert-box-wrapper").css("z-index", "auto");
  if ($('#optanon-popup-bg').length) {
    $("html .optanon-alert-box-wrapper").css("z-index", "1");
  }
});