---
layout: page
title: "Work"
description: "Remote support portfolio samples covering web research, spreadsheet organization, lead tracking, email support, content work, and on-page SEO."
permalink: /work/
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ "/assets/css/sorbet.css" | relative_url }}">

<p class="sorbet-eyebrow">Portfolio / process over promises</p>
<div class="sorbet-intro">Clear inputs. Organized work. Useful handoffs.</div>
<p class="sorbet-lead">These samples show how I structure recurring remote-support tasks. They demonstrate process and output quality rather than invented client outcomes.</p>

<section class="sorbet-section">
  <div class="sorbet-heading-row">
    <div>
      <p class="sorbet-eyebrow">Remote support samples / 01—04</p>
      <h2>Research, data, communication, and content.</h2>
    </div>
    <p class="sorbet-section-note">Designed as realistic workflow demonstrations for virtual assistance, operations support, and content roles.</p>
  </div>
  <div class="sorbet-work-grid sorbet-work-grid--support">
    {% assign support_studies = site.projects | where: "portfolio_group", "support" | sort: "importance" %}
    {% for study in support_studies %}
    <a class="sorbet-work-card" href="{{ study.url | relative_url }}">
      <div class="sorbet-cover sorbet-cover--image"><img class="sorbet-cover-image" src="{{ study.cover_image | relative_url }}" alt="{{ study.cover_alt }}" width="1080" height="700" loading="lazy" decoding="async"></div>
      <div class="sorbet-card-copy"><span class="sorbet-eyebrow">{{ study.project_type }}</span><h3>{{ study.title }}</h3><p>{{ study.description }}</p><span class="sorbet-text-link">View sample <span aria-hidden="true">→</span></span></div>
    </a>
    {% endfor %}
  </div>
</section>

<section class="sorbet-section sorbet-section--border-top">
  <div class="sorbet-heading-row">
    <div>
      <p class="sorbet-eyebrow">SEO &amp; content studies / 05—07</p>
      <h2>Content optimization with an evidence boundary.</h2>
    </div>
    <p class="sorbet-section-note">Speculative analyses of public websites. No affiliation, proprietary analytics, rankings, traffic, or revenue results are claimed.</p>
  </div>
  <div class="sorbet-work-grid">
    {% assign seo_studies = site.projects | where: "portfolio_group", "seo" | sort: "importance" %}
    {% for study in seo_studies %}
    <a class="sorbet-work-card" href="{{ study.url | relative_url }}">
      <div class="sorbet-cover sorbet-cover--image"><img class="sorbet-cover-image" src="{{ study.cover_image | relative_url }}" alt="{{ study.cover_alt }}" width="1080" height="700" loading="lazy" decoding="async"></div>
      <div class="sorbet-card-copy"><span class="sorbet-eyebrow">{{ study.project_type }}</span><h3>{{ study.title }}</h3><p>{{ study.description }}</p><span class="sorbet-text-link">Explore the study <span aria-hidden="true">→</span></span></div>
    </a>
    {% endfor %}
  </div>
</section>
