chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "Fetch Hotel Data from DOM") {
    const hotelName = document.querySelector(".pp-header__title").innerText;
    const hotelAddress = document.querySelector(
      ".hp_address_subtitle"
    ).innerText;
    sendResponse({ hotelName: hotelName, hotelAddress: hotelAddress });
  }
});
