chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "message received from the extension");

        if (request.message === "Fetch Hotel Data from DOM"){
          const hotelName = document.querySelector(".pp-header__title").innerText;
          const hotelAddress = document.querySelector(".hp_address_subtitle").innerText;
          console.log("content script fetch: ", hotelName, hotelAddress)
          sendResponse({hotelName: hotelName, hotelAddress: hotelAddress})
          return true; // make sendResponse asynchronously
        }
}
  );
