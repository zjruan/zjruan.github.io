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
    
    // 判断浏览器是否支持pushState属性
    var isPushState = Object.prototype.toString.call(history.pushState) === "[object Function]";
    if (isPushState){  
        var nprogress = require('nprogress.js');
        var template = function(data){
            var html = "",itemHtml = "";            
            itemHtml = data.list.map(function(item){
                return '<li><span class="post-meta">' + item.post_meta + '</span>\
                            <h2>' +
                            '<a class="post-link" href="' + item.post_link + '">' + item.title + '</a>' + 
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
        
        var htmlCatch={};
        
        var ajax = function (url, callback){
                       
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4){
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) { 
                        var jsonStr = xhr.responseText.replace(/(<script>)|(<\/script>)|(,$)/g,"");
                        jsonStr = jsonStr.substring(0,jsonStr.lastIndexOf(',')) + "]}";
                        var html = callback(JSON.parse(jsonStr));
                        document.querySelector('.page-content .wrapper').innerHTML = html;
                    } else {
                        console.log("Request was unsuccessful: " + xhr.status);
                    }
                }
            }
            xhr.open("get", url, true);
            xhr.send(null);
        }

        var pjaxElement = document.querySelector(".pjax-link");
        
        
        pjaxElement.addEventListener("click",function(event){
            var targetElement = event.target ;
            
            if( targetElement.nodeName !== "A" || targetElement.innerText.toLowerCase() === "about" ){
                return ;
            }
            nprogress.start();
            // 阻止默认事件
            event.preventDefault();
            
            // 阻止事件冒泡
            event.stopPropagation();
            
            var hrefVal = targetElement.getAttribute("href").replace(/\//g,"").toLowerCase();
            
            var newHref = "/share/pjaxdata-" + hrefVal;
            
            ajax(newHref, template);
            
            history.pushState("",targetElement.innerText,targetElement.href);  
            nprogress.done();
        },false); 
        
        window.onpopstate = function(){           
            console.log(location.href);
        }
        
        module.exports.init = function () {
            console.log('pjax 生效');
        }        
    }
})