---
permalink: /share/pjaxdata-study
---
<script>
    pjaxData({
        title:"学习模块",
        list:[
        {% for post in site.categories.study %}
            {
                post_meta : "{{ post.date | date: "%b %-d, %Y" }}",
                post_link : "{{ post.url | prepend: site.baseurl }}",
                title : "{{ post.title }}"
            },{% endfor %}
        ]
    })
</script>
