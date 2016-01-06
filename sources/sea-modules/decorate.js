/**
* 模块名：装饰模块
* 描述：　所有页面都加载
*/
define(function(require,exports,module){ 
    function Decorate(wrapper) {
        if(typeof wrapper === 'undefined' || wrapper === null ){
            var body = document.querySelector('body');
            wrapper =  document.createElement('div');
            //body.insertBefore(wrapper,body.childNodes[0]); 
            body.appendChild(wrapper); 
            wrapper.style.cssText = 'position: fixed; bottom: 0;overflow: hidden;height:4px;width:100%;background:lightblue';
        }
        this.WRAPPER = wrapper;
        this.WRAPPERWIDTH = this.WRAPPER.offsetWidth;
    }
    
    module.exports = Decorate;
     
    Decorate.prototype._ElementPool =  {
        elementPool:[],
        freePool:[],
        setEle: function(ele){            
            var index = this.elementPool.push(ele) -1;
            this.freePool.push(index);
            return index;
        },
        getEle: function(wrapper){
            var eleIndex = 0;
            // 没用空闲元素，新建元素
            if(this.freePool.length <= 0){
                var ele = createEle(wrapper);
                this.setEle(ele);
            }
            
            // 获取空闲元素索引，并从空闲池中移除
            eleIndex = this.freePool.pop();                
            
            // 返回该元素
            console.log(eleIndex);
            return this.elementPool[eleIndex];
        },
        // 释放元素
        freeEle: function(ele){
            var eleIndex = this.elementPool.indexOf(ele);
            this.freePool.push(eleIndex);            
        }
        
    } 
     
    Decorate.prototype.render = function(){
        var that = this;
        for(var i = 0, len=3; i< len; i++){
            var ele = that._ElementPool.getEle(that.WRAPPER);
            ele.style.display = "block";
            displayEle(ele,that.WRAPPERWIDTH);
        }
    };
    
    function createEle(wrapper){
        var ele = document.createElement('div');
        var cssText = "display:none;position:absolute;height:100%;opacity:0.5;"
        ele.style.cssText = cssText;
        wrapper.appendChild(ele);
        return ele;
    }

    function displayEle(ele,wrapperWidth){
        setTimeout(function(){
            var length =Math.round(130 + 570 * Math.random());
            var color = "rgb("+ Math.round(255 * Math.random()) + "," 
                    + Math.round(255 * Math.random()) + ","
                    + Math.round(255 * Math.random()) +  ")";
            var speed = Math.round(5 + 30 * Math.random());
            var direction = Math.round(Math.random());
            
            ele.style.width = length + "px";
            ele.style.background = color;
            // ele.style.animation = (direction > 0 ? "Left2Right ": "Right2Left ") + speed + "s linear 1";
            move(ele,speed,direction,wrapperWidth,length);
            setTimeout(arguments.callee, speed * 1000);
        },10)
    }
    
    function move(ele,speed,direction,wrapperWidth,eleWidth) {       
        var stepTime = speed * 1000 /(wrapperWidth + eleWidth)
        var start = - eleWidth;
        var location = start;
        
        var directionStr = direction > 0 ? "left":"right";
        var cancalDirection = direction > 0 ? "right":"left";
        ele.style[cancalDirection] = "auto";
        
        requestAnimationFrame(function(){     
            if(location > wrapperWidth){
                return ; 
            }
            location += stepTime/10;
            
            ele.style[directionStr] = location + "px";

            requestAnimationFrame(arguments.callee);
        })
    }
    
    // function ColorBlockFactory () {
    //     var length =Math.round(30 + 570 * Math.random());
    //     var opacity = 0.5;
    //     var color = "rgb("+ Math.round(255 * Math.random()) + "," 
    //             + Math.round(255 * Math.random()) + ","
    //             + Math.round(255 * Math.random()) +  ")";
    //     var speed = Math.round(5 + 30 * Math.random());
    //     var direction = Math.round(Math.random());
    //     var lifeLength = this.WRAPPERWIDTH + length;
        
    //     return new ColorBlock(this.WRAPPER,length,opacity,color,speed,direction,lifeLength);        
    // }
    
    // function ColorBlock(wrapper,length,opacity,color,speed,derection,lifeLength) {
    //     for (var i = 1, len = arguments.length; i < len; i++){
    //         if(typeof arguments[i] === "undefined"){
    //             console.error("生成装饰条时出错，参数不完整！");
    //             return ;
    //         }
    //     }
        
    //     this.Length = length;
    //     this.Opacity = opacity;
    //     this.Color = color;
    //     this.Speed = speed;
    //     this.Direction = derection; 
    //     this.LifeLength = lifeLength;
    //     this.Wrapper = wrapper;
    //     this.Element = (function (wrapper,that) {
    //         var ele = document.createElement('div');
    //         var cssText = "position:absolute;height:100%;" +
    //                 "opacity:" + that.Opacity + ";" +
    //                 "background:" + that.Color + ";" +
    //                 "width:" + that.Length + "px;" +
    //                 "animation: " + (that.Direction > 0 ? "Left2Right ": "Right2Left ") + that.Speed + "s linear 1";
    //         ele.style.cssText = cssText;
    //         wrapper.appendChild(ele);
    //         console.log(that);
    //         return ele;
    //     })(this.Wrapper,this);        
    // }
})