---
layout: page
title: Context-Aware DRL for Mapless Navigation
description: Graph-based temporal memory and intrinsic curiosity for navigation under partial observability and sparse rewards.
importance: 1
category: research
---

**Undergraduate thesis, Tongji University**  
**Role:** Independent Researcher · **Advisor:** Prof. Chao Huang  
**Period:** December 2025 – June 2026

This project builds on the graph attention encoder-decoder and pointer-network framework introduced at CoRL 2023 for viewpoint-graph navigation. I investigated two practical limitations of the original approach: partial observability in unknown environments and inefficient learning under sparse rewards.

I introduced **GraphLSTM** to capture temporal dependencies across graph states, allowing the agent to retain episodic information and make more consistent long-horizon decisions. I also extended **Soft Actor-Critic (SAC)** with an **Intrinsic Curiosity Module (ICM)**, using forward-dynamics prediction error as an intrinsic reward to encourage exploration.

I evaluated the approach through ablation studies in Maze, Corridor, Office, and Dynamic environments using ROS and Gazebo. The full **GAT + LSTM + ICM** model achieved an average success rate of **0.84** and SPL of **0.66**, outperforming the CoRL 2023 baseline and every single-module variant.

**Technologies:** Python, PyTorch, reinforcement learning, graph neural networks, ROS, Gazebo
