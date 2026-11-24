---
layout: about
title: About
permalink: /
subtitle: Physical Agents · Spatial Memory · Robot Navigation

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: |
    <p>Guangzhou, China</p>
    <p>
      <a class="text-nowrap" href="mailto:2252697@tongji.edu.cn"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Email</a>
      <span aria-hidden="true">·</span>
      <a class="text-nowrap" href="https://github.com/BieChenovo"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
    </p>

selected_papers: false
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am a research assistant in the [Physical AI and Robotic Systems Lab (PAIRS Lab)](https://pairslab.github.io/) at [The Hong Kong University of Science and Technology (Guangzhou)](https://www.hkust-gz.edu.cn/), advised by [Prof. Fangqiang Ding](https://fangqiangding.com/). I received my B.Eng. in Automation from [Tongji University](https://www.tongji.edu.cn/) in June 2026.

I study how **physical agents** use what they see and remember to navigate unfamiliar buildings. In my current work, I use simulated multi-object searches to study decisions that are easy to miss in a final success score. A robot might walk past its second target while looking for its first. Will it remember where to return when that target becomes the goal?

## Research interests

**Spatial memory.** A robot that remembers seeing a printer should also remember which room it was in, when it saw it, and from which doorway it was visible. Work such as [ReMEmbR](https://nvidia-ai-iot.github.io/remembr/) connects visual observations with positions and timestamps so a robot can answer questions about its past. I am interested in what happens on the return trip, especially when a fresh observation contradicts the remembered location.

**Vision, language, and action.** A request such as “find somewhere to sit near a window” leaves the destination open. The robot has to recognize a plausible seat, find a way to reach it, and check the view when it arrives. In my experiments with [SuperNav](https://zju3dv.github.io/SuperNav/), I am interested in how feedback from each move should change the next decision, particularly when a promising doorway turns out to be blocked.

**Multi-floor navigation.** Searching another floor costs time, and a staircase may be far from the room where the robot decides to change floors. [ASCENT](https://zeying-gong.github.io/projects/ascent/) represents individual floors and the stairs that connect them. I am exploring how an agent could combine that connectivity with a memory of rooms already visited to decide when the trip upstairs is worth making.
