---
layout: page
title: About
permalink: /share/
nav_sort: 4
---

这是我在默认皮肤的基础之上，自定义的一个皮肤

You can find the source code for the Jekyll new theme at:
{% include icon-github.html username="jglovier" %} /
[jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for github at
{% include icon-github.html username="zjruan" %}

<div class="card-wrapper">
    <div id='cardTest'>
        <div class="card left" data-sort = "1">1</div>
        <div class="card left" data-sort = "2">2</div>
        <div class="card active" data-sort = "3">3</div>
        <div class="card right" data-sort = "4">4</div>
        <div class="card right" data-sort = "5">5</div>
        <div class="card right" data-sort = "6">6</div>
        <div class="card right" data-sort = "7">7</div>
        <div class="card right" data-sort = "8">8</div>
        <div class="card right" data-sort = "9">9</div>
    </div>
</div>
<script>
    var cardParent = document.querySelector("#cardTest");
    
    var cards = document.querySelectorAll(".card");
    
    var offset = 0;
    
    cardParent.addEventListener("click",function(event){
        var targetEle = event.target;
        if (targetEle.classList.contains("card") && !targetEle.classList.contains("active")){
            var activeEle = document.querySelector(".card.active");
            if (targetEle.classList.contains("left"))  targetEle.classList.remove("left");
            if (targetEle.classList.contains("right"))  targetEle.classList.remove("right");
            targetEle.classList.add("active");
            activeEle.classList.remove("active");
            
           
            
            var targetSort = parseInt(targetEle.attributes["data-sort"].value);
            var activeSort = parseInt(activeEle.attributes["data-sort"].value);
            
            var differ = targetSort - activeSort;
            var resultClass = differ > 0 ? "left" : "right";
            var startEle = differ > 0 ? activeSort : targetSort;
            var start = differ > 0 ? differ : -differ;            
            var children = cardParent.children;
            
            for(var i = start; i > 1; i--){
                var element = children[(startEle-1) + i - 1];
                if (element.classList.contains("left"))  element.classList.remove("left");
                if (element.classList.contains("right"))  element.classList.remove("right");
                element.classList.add(resultClass);
            }
            
            var relativePosition = differ * 186;
            activeEle.classList.add(resultClass);
            
            offset += (- relativePosition) ;            
            cardParent.style.transform = "translateX(" + offset + "px)";            
        }
    })
</script>
<style>
    .card-wrapper {
        overflow-x: hidden;
    }
    #cardTest {
        transition: 1s ease-in-out;
        white-space: nowrap;
        -webkit-user-select: none;
    }
    .card {
        display: inline-block;
        width: 160px;
        margin: 10px;
        height: 280px;
        box-shadow: 0 0 1px;
        border: 1px solid black;
        transition: 1s ease-in-out;        
    }
    .card {
        text-align: center;
        line-height: 80px;
    }
    
    .card.left {
        transform:perspective(100px) rotateY(45deg) scale(0.5);
    }
    .card.active {
        transform: skewY(0) scale(1);
    }
    .card.right {
        transform:perspective(100px) rotateY(-45deg) scale(0.5);
    }
</style>