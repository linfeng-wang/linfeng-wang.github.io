---
layout: page
permalink: /publications/
title: Publications
description: Academic publications
years: [2023]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

<!-- </div>
<h5><a href='https://academic.oup.com/bioinformaticsadvances/article/3/1/vbad040/7084765'>TB-ML—a framework for comparing machine learning approaches to predict drug resistance of Mycobacterium tuberculosis</a></h5>
<b>Author:</b> Julian Libiseller-Egger, Linfeng Wang, Wouter Deelder, Susana Campino, Taane G Clark, Jody E Phelan
<br>
<b>Publication:</b> Bioinformatics Advances, Volume 3, Issue 1, 2023, vbad040,
<br>
<b>Published:</b> 23 March 2023 -->
