---
title: 'COSTAL'
pubDate: 2025-05-11
repoLink: ''
liveLink: 'https://www.youtube.com/embed/-OMdY_fUUDs?si=kaLByPUnUT37Lo-J&amp;controls=0'
image: "../../images/costal.svg"
alt: "COSTAL Logo"
tags: ["Django", "React", "Tailwind CSS", "AWS", "Terraform", "Docker", "PostgreSQL"]
---

## **What is it?**

COSTAL, is an adaptive learning platform that integrates into learning management systems like Canvas or Moodle. It provides a feature rich assesement for instructors, and dynamic learning experiences for each student. COSTAL is designed to work with open educational resources, providing affordable access for students. It was created as a UCF senior design project with no sponsor, and went on to win **1st place** among all Computer Science teams.


## **How does it work?**

COSTAL is a large application with many different pieces working together under the hood to provide a seamless user experience. The professor creates an ungraded "prequiz" for students, which measures their foundational knowledge on specific topics. Through a combination of [reinforcment learning](https://en.wikipedia.org/wiki/Reinforcement_learning) and [bayesian knowledge tracing](https://en.wikipedia.org/wiki/Bayesian_knowledge_tracing), a model is created to determine the optimal learning path for a students estimated knowledge state. An LLM question generation service is provided to help professors fill up their assesements with content. It uses the professor's previously generated questions as context, allowing the user the cater the style of the generated questions to their liking. The application was built with Django and React, and uses the LTI standard to authenticate into learning management systems.

## **How can I use it?**

The linked Github repo contains instructions on how to run locally, as well as a production start process. Terraform scripts are included so that the necessary AWS infrastructure can be setup with ease.