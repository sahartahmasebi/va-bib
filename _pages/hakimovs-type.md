---
layout: page
permalink: /hakimovs-type
title: Dr. Sherzod Hakimov
description: Publications by categories in reversed chronological order. Generated by jekyll-scholar.
nav: true
nav_type: false
nav_year: false
nav_order: 5  # 1 - group, 2 - group leader, 3 - postdocs, 4 - phds
---

<!-- _pages/hakimovs-type.md -->
<div class="publications">

<h2>Number of publications: {% bibliography_count -f {{ site.scholar.bibliography }} --query @*[author ~= Hakimov] %}</h2>
{% assign groupby = "type, year" %}
{% bibliography -f {{ site.scholar.bibliography }} --query @*[author ~= Hakimov] --group_by {{ groupby }} %}

</div>