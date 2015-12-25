/**
* 模块名：Pjax模块
* 描述：　用于我的博客的pjax玩具
*/
define(function(require,exports,module){
    // <script type="text/html">
    //    <div class="home">
    //     <h1 class="page-heading">前端模块</h1>
    //     <ul class="post-list">        
    //        <li>
    //             <span class="post-meta">Oct 16, 2015</span>
    //             <h2>
    //                 <a class="post-link" href="/frontend/circle-progress">环形进度条的实现</a>
    //             </h2>
    //        </li>        
    //     </ul>
    //     </div>
    // </script>
    module.exports.init = function () {
        console.log('kaishi');
    }
    
    var template = function(data){
        var html = "",itemHtml = "";            
        itemHtml = data.list.map(function(item){
            return '<li><span class="post-meta">' + item.post_meta + '</span>\
                        <h2>' +
                        '<a class="post-link" href="' + item.post_link + '">环形进度条的实现</a>' + 
                        '</h2>\
                   </li>'; 
        }).join("");
        
        html = '<div class="home">' +
            '<h1 class="page-heading">' + data.title + '</h1>' +
            '<ul class="post-list">' + 
                itemHtml +
            '</ul>' +
          '</div>' ;
        return html;            
    }
    
    var ajax = function (url ,callback){
        var XHR = new XMLHttpRequest();
    }
    
    var isPushState = Object.prototype.toString.call(history.pushState) === "[object Function]"
    if (isPushState){
        var pjaxElement = document.querySelector(".pjax-link");
        pjaxElement.addEventListener("click",function(event){
            var targetElement = event.target ;
            
            if(targetElement.innerText.toLowerCase() === "about" ){
                return ;
            }
            
            var hrefVal = targetElement.getAttribute("href").replace("/","").toLowerCase();
            
            var newHref = "/share/pjaxdata-" + hrefVal;
            
            // 阻止默认事件
            event.preventDefault();
            
            // 阻止事件冒泡
            event.stopPropagation();
            
            
        },false);
        
    }  
})