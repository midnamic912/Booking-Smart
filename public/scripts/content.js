chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");

        if (request.message === "Fetch Hotel Data from DOM"){
          const hotelName = document.querySelector(".pp-header__title");
          const hotelAddress = document.querySelector(".hp_address_subtitle");
          sendResponse({hotelName: hotelName, hotelAddress: hotelAddress})
          return true; // make sendResponse asynchronously
        }
}
  );
