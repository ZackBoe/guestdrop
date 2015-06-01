chrome.webRequest.onHeadersReceived.addListener(function(details){
  for(var o in details.responseHeaders){

    // Massdrop responded with a Location header
    if(details.responseHeaders[o]["name"] === "Location"){

      // And it isn't pointing to what we asked for
      if(details.responseHeaders[o]["value"] != details.url){

        // Add guest_open to the url and update the tab
        var fixedUrl = details.url+'?mode=guest_open';
        chrome.tabs.update(details.tabId, {url: fixedUrl});
      }
    }
  }

},
{urls: ["*://*.massdrop.com/buy/*"]},["responseHeaders"]);