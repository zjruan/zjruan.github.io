---
permalink: /share/pjaxdata-collecting
---
<script>
    {
        "title": "收藏模块",
        "list": [{% for post in site.categories.collecting %}{
                "post_meta" : "{{ post.date | date: "%b %-d, %Y" }}",
                "post_link" : "{{ post.url | prepend: site.baseurl }}",
                "title" : "{{ post.title }}"
            },{% endfor %}]
    }
</script>
