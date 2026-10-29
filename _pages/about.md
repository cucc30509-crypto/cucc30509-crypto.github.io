---
layout: default
title: "Home"
description: "Sorbet — on-page SEO audits and content optimization. Clear, practical recommendations for your next webpage."
permalink: /
nav: false
nav_order: 1
---

<link rel="stylesheet" href="{{ "/assets/css/sorbet.css" | relative_url }}">

<div class="sorbet-home">
<section class="sorbet-hero">
<p class="sorbet-eyebrow">Sorbet / Independent SEO freelancer</p>
<h1>SEO work that is clear, practical, and ready to implement.</h1>
<div class="sorbet-hero-bottom"><p><strong>On-Page SEO &amp; Content Optimization</strong><br>I analyze existing webpages, identify on-page SEO and content opportunities, and turn the findings into publish-ready recommendations.</p><div class="sorbet-actions"><a class="sorbet-button" href="{{ '/work/' | relative_url }}">View Work <span aria-hidden="true">→</span></a><a href="{{ '/services/' | relative_url }}">Services</a><a href="{{ '/contact/' | relative_url }}">Contact</a></div></div>
</section>
<section class="sorbet-section"><div class="sorbet-section-heading"><p class="sorbet-eyebrow">Selected work / 01—03</p><h2>From a page problem<br>to a practical next step.</h2></div>
<p>Three independent portfolio studies. Speculative recommendations, not commissioned client work or measured results.</p>
<div class="sorbet-work-grid">
{% assign studies = site.projects | sort: "importance" %}
{% for study in studies %}
<a class="sorbet-work-card tone-{{ study.importance }}" href="{{ study.url | relative_url }}">
  <div class="sorbet-cover"><span class="sorbet-number">0{{ study.importance }}</span><span class="sorbet-cover-label">{{ study.cover_label }}</span></div>
  <div class="sorbet-card-copy"><span class="sorbet-eyebrow">{{ study.project_type }}</span><h3>{{ study.title }}</h3><p>{{ study.description }}</p><span class="sorbet-text-link">Explore the study <span aria-hidden="true">→</span></span></div>
</a>
{% endfor %}
</div>
</section>
<section class="sorbet-close"><p class="sorbet-eyebrow">A focused place to begin</p><h2>One page. A clearer direction.</h2><p>Introductory offer: $20 USD for one existing webpage up to approximately 1,500 words.</p><a class="sorbet-button" href="{{ '/contact/' | relative_url }}">Start with one webpage <span aria-hidden="true">→</span></a></section>
</div>
