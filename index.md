---
layout: front_page
---

# Engineering skills for systems that matter

This preview presents the Arbyte Engineering Academy curriculum: practical paths from embedded fundamentals to Linux, RTOS, vehicle software, and intelligent edge systems.

<div class="diagram-frame diagram-frame--hero" role="img" aria-label="Arbyte learning pathway"><div class="mermaid">
flowchart TD
	A[Embedded Systems Fundamentals] --> B[Modern C/C++]
	B --> C[Linux for Embedded Engineers]
	C --> D[Zephyr RTOS Essentials]
	D --> E[Automotive Software Basics]
	C --> F[Raspberry Pi Edge AI]
	F --> G[Introduction to AI for Engineers]
</div></div>

## Explore the preview catalogue
<span id="courses"></span>

<div class="course-grid">
{% for collection in site.collections %}
	{% for course in collection.docs %}
		{% if course.training %}
			<article class="course-card">
				<p class="course-card__meta">{{ course.level }} · {{ course.duration }}</p>
				<h3><a href="{{ course.url | relative_url }}">{{ course.title }}</a></h3>
				<p>{{ course.summary }}</p>
				<a class="course-card__link" href="{{ course.url | relative_url }}">View preview <span aria-hidden="true">→</span></a>
			</article>
		{% endif %}
	{% endfor %}
{% endfor %}
</div>

## Preview purpose

Each course page highlights its objective, duration, prerequisites, modules, and capstone. The full curriculum is maintained in the primary training repository, while this site provides a lightweight review surface for the programme structure.


