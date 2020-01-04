window.browser = (function() {
  return window.msBrowser || window.browser || window.chrome
})()

//Wire up event event handlers
document.addEventListener('DOMContentLoaded', function(event) {
  //   browser.runtime.onMessage.addListener(function(
  //     request,
  //     sender,
  //     sendResponse
  //   ) {
  //     console.log(
  //       'popup.js received message',
  //       sender.tab
  //         ? 'from a content script:' + sender.tab.url
  //         : 'from the extension',
  //       request
  //     )
  //   })

  //   browser.runtime.sendMessage({ message: 'wants_url' })
  chrome.runtime.sendMessage({ greeting: 'GetURL' }, function(response) {
    if (!response) {
      console.error('failed')
      return
    }
    tabURL = response.navURL
    document.getElementById('results').innerHTML = tabURL
  })
})
