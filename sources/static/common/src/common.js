/**
* 模块名：公共模块
* 描述：　所有页面都加载
*/
define(function(require,exports,module){
    // 图片放大缩小
    function ImgResize(event){
      event=event || window.event;
      var target=event.target;
      if (target.nodeName==='IMG') {
        if(target.classList.contains('big-img')){
         target.classList.remove('big-img');
       }else{
         target.classList.add('big-img')
        }
      }
    }
    
    document.addEventListener('click',ImgResize);
    
    // 导航栏Pjax
    var _navPjax = require('./myblogs-pjax.js');
    _navPjax.init();
    
    //装饰条
    var Decorate = require('decorate.js');
    var de= new Decorate(document.querySelector('.decorate'));
    de.render();
})