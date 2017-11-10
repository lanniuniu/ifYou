<html>
<head>
    <title>搜索引擎</title>
    <link rel="stylesheet" href="/public/css/news.css" />
</head>
<body>
<div class="news-view view">
    {% for item in list %}
    <div class="item">
        <a href="{{ item.url }}" target="_blank">{{ item.title }}</a>
    </div>
    {% endfor %}
</div>
<div>
    {{ helper.relativeTime(item.time) }}
</div>
</body>
</html>