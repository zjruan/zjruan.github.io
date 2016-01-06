---
layout: default
title: Study
permalink: /study/
nav_sort: 2
---

<div class="home">

  <h1 class="page-heading">学习模块</h1>
<div class="card-wrapper">
  <ul id='cardTest' class="post-list">
    {% for post in site.categories.study %}
      <li  class="card left" data-sort = "{{ forloop.index }}">
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
  
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
    .post-link{
        white-space: normal;
        float: left;
        line-height: 35px;
    }
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
        transform:perspective(100px) rotateY(45deg) scale(0.4);
    }
    .card.active {
        transform: skewY(0) scale(1);
    }
    .card.right {
        transform:perspective(100px) rotateY(-45deg) scale(0.4);
    }
</style>