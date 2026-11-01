---
layout: default
title: "Home"
description: "Sorbet — remote virtual assistance, web research, data organization, lead research, content support, and practical on-page SEO."
permalink: /
nav: false
nav_order: 1
---

<link rel="stylesheet" href="{{ "/assets/css/sorbet.css" | relative_url }}">

<div class="sorbet-home">
<section class="sorbet-hero sorbet-hero--dark">
  <div class="sorbet-hero-grid">
    <div>
      <p class="sorbet-eyebrow sorbet-eyebrow--light">Sorbet / Remote operations &amp; content support</p>
      <h1>Reliable support for the work that keeps a business moving.</h1>
      <p class="sorbet-hero-lead">Virtual assistance, web research, spreadsheet organization, lead research, email and content support — handled carefully, documented clearly, and ready for review.</p>
      <div class="sorbet-actions">
        <a class="sorbet-button sorbet-button--light" href="{{ '/work/' | relative_url }}">View work samples <span aria-hidden="true">→</span></a>
        <a class="sorbet-hero-link" href="{{ '/services/' | relative_url }}">Capabilities</a>
        <a class="sorbet-hero-link" href="{{ '/contact/' | relative_url }}">Contact</a>
      </div>
    </div>
    <aside class="sorbet-availability" aria-label="Availability">
      <span class="sorbet-status-dot" aria-hidden="true"></span>
      <p><strong>Open to ongoing remote work</strong><br>Part-time, long-term, or project-based support.</p>
      <div class="sorbet-skill-chips" aria-label="Focus areas">
        <span>Research</span><span>Data</span><span>Content</span><span>Outreach</span>
      </div>
    </aside>
  </div>
</section>

<section class="sorbet-section">
  <div class="sorbet-section-heading sorbet-heading-row">
    <div>
      <p class="sorbet-eyebrow">What I can take off your plate</p>
      <h2>Practical support, organized around the work.</h2>
    </div>
    <p class="sorbet-section-note">Best suited to written, asynchronous workflows with clear instructions, recurring tasks, and measurable handoffs.</p>
  </div>

  <div class="sorbet-capability-grid">
    <article class="sorbet-capability-card">
      <span class="sorbet-card-number">01</span>
      <h3>Virtual Assistance</h3>
      <p>Recurring admin tasks, document organization, task tracking, written updates, and structured support.</p>
      <span class="sorbet-tagline">Keep the routine work moving.</span>
    </article>
    <article class="sorbet-capability-card">
      <span class="sorbet-card-number">02</span>
      <h3>Research &amp; Data</h3>
      <p>Web research, spreadsheet organization, data cleanup, deduplication, source checking, and concise summaries.</p>
      <span class="sorbet-tagline">Turn scattered information into usable data.</span>
    </article>
    <article class="sorbet-capability-card">
      <span class="sorbet-card-number">03</span>
      <h3>Lead &amp; Outreach Support</h3>
      <p>Prospect research, qualification notes, personalized message drafting, tracking, and follow-up organization.</p>
      <span class="sorbet-tagline">Make outreach more focused and traceable.</span>
    </article>
    <article class="sorbet-capability-card">
      <span class="sorbet-card-number">04</span>
      <h3>Content &amp; SEO</h3>
      <p>Content research, rewriting, proofreading, basic on-page SEO, metadata, headings, and content optimization.</p>
      <span class="sorbet-tagline">Make information clearer and easier to use.</span>
    </article>
  </div>
</section>

<section class="sorbet-section sorbet-section--tinted">
  <div class="sorbet-section-heading sorbet-heading-row">
    <div>
      <p class="sorbet-eyebrow">Remote support portfolio / 01—04</p>
      <h2>Work samples built around real workflows.</h2>
    </div>
    <p class="sorbet-section-note">These are independent portfolio samples that demonstrate process and output quality. They are not presented as commissioned client results.</p>
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

<section class="sorbet-section">
  <div class="sorbet-section-heading sorbet-heading-row">
    <div>
      <p class="sorbet-eyebrow">SEO &amp; content studies</p>
      <h2>A second layer of content-focused work.</h2>
    </div>
    <p class="sorbet-section-note">Independent speculative studies with no traffic, ranking, conversion, or client relationship claims.</p>
  </div>
  <div class="sorbet-mini-grid">
    {% assign seo_studies = site.projects | where: "portfolio_group", "seo" | sort: "importance" %}
    {% for study in seo_studies %}
    <a class="sorbet-mini-card" href="{{ study.url | relative_url }}">
      <span class="sorbet-eyebrow">{{ study.project_type }}</span>
      <h3>{{ study.title }}</h3>
      <p>{{ study.description }}</p>
      <span class="sorbet-text-link">Explore <span aria-hidden="true">→</span></span>
    </a>
    {% endfor %}
  </div>
</section>

<section class="sorbet-close sorbet-close--dark">
  <div>
    <p class="sorbet-eyebrow sorbet-eyebrow--light">Available for remote support</p>
    <h2>Need consistent help behind the scenes?</h2>
    <p>Send the role, recurring tasks, tools, and expected hours. I can quickly confirm whether the workflow is a good fit.</p>
  </div>
  <a class="sorbet-button sorbet-button--light" href="{{ '/contact/' | relative_url }}">Contact Sorbet <span aria-hidden="true">→</span></a>
</section>
</div>
