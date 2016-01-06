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
    seajs.use("/sources/static/common/src/cardList.js"); 
</script>

