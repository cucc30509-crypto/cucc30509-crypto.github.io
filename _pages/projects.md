---
layout: page
title: "Work"
description: "Three independent SEO portfolio studies: a local service audit, a content rewrite, and a CRM content strategy."
permalink: /work/
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ "/assets/css/sorbet.css" | relative_url }}">

<p class="sorbet-eyebrow">The thinking behind the recommendations</p>
<div class="sorbet-intro">A page audit. A focused rewrite. A content plan.</div>
<p>Explore how I approach intent, structure, and useful copy. These are independent speculative studies of public websites, with no client relationship or performance results claimed.</p>
<div class="sorbet-work-grid">
{% assign studies = site.projects | sort: "importance" %}
{% for study in studies %}
<a class="sorbet-work-card tone-{{ study.importance }}" href="{{ study.url | relative_url }}">
  <div class="sorbet-cover sorbet-cover--image"><img class="sorbet-cover-image" src="{{ study.cover_image | relative_url }}" alt="{{ study.cover_alt }}" width="1080" height="700" loading="lazy" decoding="async"></div>
  <div class="sorbet-card-copy"><span class="sorbet-eyebrow">{{ study.project_type }}</span><h3>{{ study.title }}</h3><p>{{ study.description }}</p><span class="sorbet-text-link">Explore the study <span aria-hidden="true">→</span></span></div>
</a>
{% endfor %}
</div>
