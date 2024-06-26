var request = new XMLHttpRequest()
var appUrl = 'https://cafechat.app/assets/'
var srcPost = '?&v=' + (new Date()).getTime()
if (!window.cafechatAppLoaded) {
  request.open('GET', appUrl + 'index.html' + srcPost, true)
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var tag
      var resp = request.responseText
      var ch = document.createElement('div')
      ch.setAttribute('id', 'apppopupmax')
      document.body.appendChild(ch)
      var srcs = resp.match(/src="(.*?)"|href="(.*?)"/g)
      var cssFound = ''
      for (let i = 0; i < srcs.length; i++) {
        var src = srcs[i].replace(/src=|href=/, '').replace(/"/g, '')
        var isJs = /.js/.test(src)
        if (src[0] === '/') src = appUrl + src
        if (!src) continue
        if (isJs) {
          tag = document.createElement('script')
          tag.src = src + srcPost
          document.getElementsByTagName('head')[0].appendChild(tag)
        }
      }
      if (cssFound) {
        cssFound = appUrl + cssFound
        tag = document.createElement('link')
        tag.href = cssFound + srcPost
        tag.rel = 'stylesheet'
        document.getElementsByTagName('head')[0].appendChild(tag)
      }
    }
  }
  request.send()
  window.cafechatAppLoaded = true
}
