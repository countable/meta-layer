console.log('content.js')

window.browser = (function() {
  return window.msBrowser || window.browser || window.chrome
})()

console.log('content.js sending url')
browser.runtime.sendMessage({ greeting: 'SawURL', url: window.location + '' })

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('content.js received message', request)
})
