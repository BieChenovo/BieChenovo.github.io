---
layout: page
title: Autonomous Navigation for Hexapod Robots
description: A real-world perception-to-action stack integrating visual SLAM, path planning, and legged locomotion.
importance: 2
category: research
---

**Tongji University**  
**Role:** Core Developer, Perception & Planning Lead · **Advisor:** Dr. Jia Xu  
**Period:** May 2024 – September 2025

I deployed and calibrated a real-time visual SLAM system based on **ORB-SLAM3** on a physical hexapod robot. The deployment required handling sensor noise, IMU drift, and unmodeled leg-ground contact dynamics that do not appear in simulation.

I co-developed a hierarchical navigation stack whose local planner connects high-level, SLAM-based global pose estimation with low-level legged locomotion control. This integration enabled closed-loop perception-to-action behavior on real hardware.

I also carried out end-to-end hardware-software integration and systematic debugging across the perception, planning, and control pipeline, supporting collision-free indoor navigation and reliable pose tracking.

**Technologies:** C++, Python, ORB-SLAM3, OpenCV, ROS, visual-inertial SLAM
