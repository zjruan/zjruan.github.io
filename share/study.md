---
layout: default
title: Study
permalink: /study/
nav_sort: 2
---

<div class="home">

  <h1 class="page-heading">学习模块</h1>

  <ul class="post-list">
    {% for post in site.categories.study %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
  
</div>