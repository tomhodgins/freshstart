/* FreshStart Toronto */

onload = onresize = function(){

  /* Mobile header padding */
  document.body.style.paddingTop = document.querySelector('header').scrollHeight-2+'px'
}

onload = function(){
  /* Responsive Video Plugin */
  var video = document.getElementsByTagName('iframe');
  for (var i in video){
    var youtube = video[i].src?video[i].src.indexOf('youtube') > -1:false,
        vimeo = video[i].src?video[i].src.indexOf('vimeo') > -1:false;
    if (youtube || vimeo){
      var wrapper = document.createElement('div'),
          height = video[i].clientHeight,
          width = video[i].clientWidth,
          ratio = height/width*100;
      wrapper.setAttribute('data-video','')
      wrapper.style.paddingTop = ratio+'%'
      wrapper.appendChild(video[i].cloneNode(true))
      video[i].parentNode.insertBefore(wrapper,video[i].nextSibling)
      video[i].parentNode.removeChild(video[i])
    }
  }
}