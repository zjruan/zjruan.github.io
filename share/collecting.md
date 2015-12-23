---
layout: default
title: Collecting
permalink: /collecting/
nav_sort: 3
---

<div class="home">

  <h1 class="page-heading">收藏模块</h1>

  <ul class="post-list">
    {% for post in site.categories.collecting %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
  
</div>