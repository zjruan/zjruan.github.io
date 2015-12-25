---
permalink: /share/pjaxdata-frontend
---
<script>
    {
        "title": "前端模块",
        "list": [ {% for post in site.categories.frontend %}{
                "post_meta" : "{{ post.date | date: "%b %-d, %Y" }}",
                "post_link" : "{{ post.url | prepend: site.baseurl }}",
                "title" : "{{ post.title }}"
            },{% endfor %}]
    }
</script>
