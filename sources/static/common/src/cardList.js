    /**
* 模块名：公共模块
* 描述：　所有页面都加载
*/
define(function(require,exports,module){
    // 获取卡的容器
    var cardParent = document.querySelector("#cardTest");    
    // 偏移量 ，用于整体移动元素位置
    var offset = 0;
    
    cardParent.addEventListener("click",function(event){
        var targetEle = event.target;
        
        // 判断点击元素是不是card，以及是不是当前激活元素
        if (targetEle.classList.contains("card") && !targetEle.classList.contains("active")){
            
            //获取点击元素时的激活card（old）
            var activeEle = document.querySelector(".card.active");            
            
            // 移除目标元素身上的left或right类，并添加激活类active
            if (targetEle.classList.contains("left"))  targetEle.classList.remove("left");
            if (targetEle.classList.contains("right"))  targetEle.classList.remove("right");          
            targetEle.classList.add("active");
            
            // 如果当前页面没有激活类，则运行到这返回
            if(!activeEle){ return; }
            
            var targetSort = parseInt(targetEle.attributes["data-sort"].value);
            var activeSort = parseInt(activeEle.attributes["data-sort"].value);            
            var differ = targetSort - activeSort;
            var resultClass = differ > 0 ? "left" : "right";
            var startEle = differ > 0 ? activeSort : targetSort;
            var start = differ > 0 ? differ : -differ;            
            var children = cardParent.children;
            var relativePosition = differ * 186;
            offset += (- relativePosition) ;  
            
            // 移除激活类（old）身上的的class
            activeEle.classList.remove("active");
            // 添加辅类
            activeEle.classList.add(resultClass);
            
            // 为新老元素之间元素 修改辅类            
            for(var i = start; i > 1; i--){
                var element = children[(startEle-1) + i - 1];
                if (element.classList.contains("left"))  element.classList.remove("left");
                if (element.classList.contains("right"))  element.classList.remove("right");
                element.classList.add(resultClass);
            }
            
            // 移动整体元素                      
            cardParent.style.transform = "translateX(" + offset + "px)";            
        }
    })
})
    
