---
title: 'BasketBrain'
pubDate: 2024-01-01
repoLink: 'https://github.com/evangoldsmith/nba-regression/'
liveLink: 'https://twitter.com/BasketBrainBot'
image: "../../images/basketbrain.svg"
alt: "Half brain half basketball"
tags: ["Python", "Google Cloud"]
---

## **What is it?**

BasketBrain is a logistic regression model built to predict the outcome of NBA matchups based on season statistics. While the project started as an exploration into sports data analytics and machine learning, I've also developed a Twitter bot to showcase the models performance. Every morning, a tweet is automatically posted for a pick and confidence level for each days games. 


## **How does it work?**

BasketBrain is trained on data collected from a custom webscraper. By grabbing statistics from ()[TeamRankings.com] and ()[BasketBallReference.com], the scraper can create historical training datasets as well as grab current matchups and statistics. Using the SciKitLearn Python libary, a logistic regression model can be created, analyzed, and have it's model weights saved. The file containing the model is uploaded to Google Cloud to be used by the serverless function running the prediction and sending the tweet each morning.

## **How can I use it?**

The full BasketBrain project with steps for running it locally is located on the Github repository. Information on the webscraper usage aswell as GCP setup are also included in the README.md. 