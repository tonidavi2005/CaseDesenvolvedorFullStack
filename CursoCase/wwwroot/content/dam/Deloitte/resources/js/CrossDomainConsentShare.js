/** v8.3.1 CrossDomainConsentShare
 *   ConsentShare cookie expiry set to 1 month
 *  Edits to: 
 *   setConsentShareCookie to handle landingPath parameter breaking the getCookie function. 
 *   Reset optboxexpirty date of share cookie when OptanonAlertBoxClosed value corrupted.
 **/

/**
 * 1. Check for OneTrustConsentShare
 *     IF OneTrustConsentShare & Country/Lang match
 *         Set the consent cookie based on the shared values
 *     IF NOT
 *         Load as normal
 *
 * 2. On consent set
 *     WRITE OneTrustConsentShare cookie
 *
 **/

/**
 * Function to get a cookie value by its name
 *
 * Input:
 *	- Name of the cookie
 * Returns:
 * 	- Value of the cookie as string
 *
 */
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

/**
 * Function to set  a cookie value and expiry
 *
 * Input:
 *	- Name for the cookie
 *	- Value for the cookie
 *	- [OPTIONAL] Number of days in the future the cookie should expires
 *  - [OPTIONAL] Domain/subdomain to set the path to
 *  - [OPTIONAL] Path to set the cookie to
 * Returns:
 * 	- N/A
 *
 */
function setCookie(cname, cvalue, exdays, domain, path) {
  // Default to 365 if no expiry provided
  if (exdays === null) {exdays = 365;}
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = ";expires=" + d.toUTCString();
  // Default to location host if no domain value provided
  if ((domain === null) && (getDeloitteSite() == "DCOM")) {
    domain = ";domain=." + window.location.host;
  } else if ((domain === null) && (getDeloitteSite() == "MYDELOITTE")) {
    domain = ";domain=;";
    // domain = ";domain=" + window.location.host;
  } else {
    domain = ";domain=" + domain;
  }
  // Default to / path if no value provided
  if (path === null) {
    path = ";path=/;"
  } else {
    path = ";path=" + path;
  }

  document.cookie = cname + "=" + cvalue + expires + path + domain;
}

/**
 * Function to delete a cookie value
 *
 * Input:
 *	- Name for the cookie
 *	- Value for the cookie
 *	- [OPTIONAL] Number of days in the future the cookie should expires
 *  - [OPTIONAL] Domain/subdomain to set the path to
 *  - [OPTIONAL] Path to set the cookie to
 * Returns:
 * 	- N/A
 *
 */
function deleteCookie(cname, domain, path) {
  setCookie(cname, null, 0, domain, path);
  //setCookie(cname, null, '01 Jan 1970 00:00:00 UTC', domain, path);
}

/**
 * Function to check if on DCOM or MyDeloitte
 *
 * Input:
 *	- N/A
 * Returns:
 * 	- String "DCOM", "MYDELOITTE", or null
 *
 */
function getDeloitteSite() {
  var deloitteSite = null;
  if (
    window.location.host.split(".")[0] == "www2" ||
    window.location.host.split(".")[0] == "www2stage" ||
    window.location.host.split(".")[0] == "www2qa" ||
    window.location.host.split(".")[0] == "www2iqa"
  ) {
    deloitteSite = "DCOM";
  } else if (
    window.location.host.split(".")[0] == "my" ||
    window.location.host.split(".")[0] == "mystage" ||
    window.location.host.split(".")[0] == "myqa" ||
    window.location.host.split(".")[0] == "myiqa"
  ) {
    deloitteSite = "MYDELOITTE";
  }
  return deloitteSite;
}

/**
 * Function to return the country code and language code as a 2 value array
 *
 * Input
 *	- N/A
 * Returns:
 * [country, language]
 */
function getCountryLang() {
  var countryCode = "us";
  var langCode = "en";
  // If we're on www2.deloitte - pull from the path such as /us/en
  // if (window.location.host.split('.')[0] == 'www2' || 'www2stage' || 'www2qa') {
  if (getDeloitteSite() == "DCOM") {
    countryCode = window.location.pathname.split("/")[1];
    langCode = window.location.pathname.split("/")[2].split(".")[0];
    // If we're on my.deloitte - pull from the myD_siteSelector cookie
  } else if (getDeloitteSite() == "MYDELOITTE") {
      if(getCookie("myD_siteSelector")){
        var myD_siteSelector = getCookie("myD_siteSelector");
        if(myD_siteSelector.split("-")[0] === "insights"){
          countryCode = myD_siteSelector.split("-")[1];
          langCode = myD_siteSelector.split("-")[2];
        }
        else{
          countryCode = myD_siteSelector.split("-")[0];
          langCode = myD_siteSelector.split("-")[1];
        }
      }else{
          countryCode='';
      }
   
  }
  return [countryCode, langCode];
}

/**
 * Function to set a cookie with the values of the OptanonConsent & OptanonAlertBoxClosed cookies
 *
 * Input:
 *	- N/A
 * Returns:
 * 	- N/A
 *
 */
window.setConsentShareCookie = function() {
    if(getCountryLang()[0] !== ''){
        var optboxclosed = Optanon.IsAlertBoxClosed();
        var optboxexpiry = "null";
        var consentShareExpiry = 1;
      
      var country = getCountryLang()[0].toString().toUpperCase();
       
      if (optboxclosed) {
          optboxexpiry = getCookie("OptanonAlertBoxClosed");
//bsa 08-Jul-2022:If the OptanonAlertBoxClosed cookie contains a landing path or gigya cookie content, the cookie was parsed incorrectly by getcookie(), reset optboxexpiry date/time.
 if ((optboxexpiry !== null) && ((optboxexpiry.includes("landingPath=h") === true) || optboxexpiry.includes("gigya") === true)) {
       
   //reset optboxexpiry to current date as "YYYY-MM-DDTHH:MM:SS.mmmZ";
   var current = new Date();
   optboxexpiry =      current.getFullYear() + "-" + ("00" + (current.getMonth() + 1)).slice(-2)
                 + "-" + ("00" + current.getDate()).slice(-2) + "T" 
                + ("00" + current.getHours()).slice(-2) + ":" 
               + ("00" + current.getMinutes()).slice(-2) 
                + ":" + ("00" + current.getSeconds()).slice(-2) + ".000z";
   //return;
      }
          
          var optBoxDate = new Date(optboxexpiry);
          // optBoxDate.setFullYear(optBoxDate.getFullYear() + 1); //Add 1 year
          // optBoxDate.setMonth(optBoxDate.getMonth() + 6); // add 6 months
          optBoxDate.setMonth(optBoxDate.getMonth() + 1); // add 1 month
          var currentTime = new Date();
          var consentShareExpiry = (optBoxDate - currentTime)/(1000*60*60*24);
          consentShareExpiry = Math.round(consentShareExpiry);
        }
        var country = getCountryLang()[0].toString().toUpperCase();
        var consentSharePayload = "optboxclosed=" + optboxclosed + "&" + "optboxexpiry=" + optboxexpiry + "&" + getCookie("OptanonConsent");
      
        setCookie("OneTrustConsentShare_" + country, consentSharePayload, consentShareExpiry, ".deloitte.com", "/");
    }
 
};

// Run this on load before the OT tag
window.checkConsentShareCookie = function() {
    if(getCountryLang()[0] !== ''){
  var country = getCountryLang()[0].toString().toUpperCase();
  var consentShareCookie = getCookie("OneTrustConsentShare_"+country);
  var optBoxCookie = getCookie("OptanonAlertBoxClosed");
  var currentSite = getDeloitteSite();

  // if consentsharecookie is null, but alertboxclosed does, delete optanon cookies
  if((consentShareCookie === null) && (optBoxCookie !== null) && (currentSite == 'MYDELOITTE')) {
    //function deleteCookie(cname, domain, path) {
    deleteCookie('OptanonConsent', null, null);
    deleteCookie('OptanonAlertBoxClosed', null, null);
  }

  if ((consentShareCookie !== null) && (consentShareCookie.includes("optboxclosed=true") === true)) {
  // if ((consentShareCookie !== null) && (consentShareCookie.includes("optboxclosed=true") === true) && (optBoxCookie === null)) {
    // Consent share cookie exists, includes optboxclosed being true, and OptanonAlertBoxClosed doesn't exist on current page
    var otCookiePath = "/";
    if (currentSite == "DCOM") {
      otCookiePath = "/" + getCountryLang()[0] + "/";
    }
    // setCookie("OptanonConsent", consentShareCookie.substring(consentShareCookie.indexOf('&')+2), 365, null, otCookiePath);
    var optconsentpayload = consentShareCookie.split("&");
    optconsentpayload.shift();
    optconsentpayload.shift();
    optconsentpayload = optconsentpayload.join("&");
    setCookie("OptanonConsent", optconsentpayload, 365, null, otCookiePath);
    if (optBoxCookie === null) {
      // var timeDate = new Date().toISOString();
      var timeDate = consentShareCookie.split("&")[1].split("=")[1];
      //TODO: value of expiry
      setCookie("OptanonAlertBoxClosed", timeDate, 365, null, otCookiePath);
    }
  }
}
}

window.OneTrust = {
  geolocationResponse: {
    countryCode: getCountryLang()[0].toString().toUpperCase(),
  },
};

// calling before OT tag
checkConsentShareCookie();