console.log('background.js')

window.browser = (function() {
  return window.msBrowser || window.browser || window.chrome
})()

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.greeting === 'GetURL') {
    var tabURL = 'Not set yet'
    browser.tabs.query({ active: true }, function(tabs) {
      if (tabs.length === 0) {
        sendResponse({})
        return
      }
      tabURL = tabs[0].url
      console.log('sending response')
      sendResponse({ navURL: tabURL })
      browser.tabs.sendMessage(tabs[0].id, {
        navURL: tabURL
      })
    })
    return true
  } else if (request.greeting === 'SawURL') {
    browser.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] })
    browser.browserAction.setBadgeText({ text: '1' })
  }
})
