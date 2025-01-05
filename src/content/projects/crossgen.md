---
title: 'CrossGen'
repoLink: 'https://github.com/evangoldsmith/crossgen'
liveLink: 'https://evan.gold'
image: "../../images/crossgen.svg"
alt: "Portfolio site Logo"
tags: ["Python", "React", "Javascript", "Flask"]
---

## **What is it?**

Crossgen is a distinct crossword generator built with wave function collapse. Wave function collapse is a concept first originated to describe superpositions in quantum mechanics. It explains the process in which a quantum system is "observed" by the external world and collapses into a single measurable state. This idea has been used as an algorithm for procedural generation of complex images, audio, text, and other forms of media. In this project, I use a custom version of this algorithm written in python to automatically generate unique crosswords.
![Screenshot of CrossGen](https://github.com/evangoldsmith/crossgen/blob/main/img/sc.jpg?raw=true)
## **How does it work?**
A board of a random shape (picked from engine/shapes.txt) is instatiated with each cell starting with max "entropy" of 26 (for each potential letter in the alphabet). The board then goes through a series of "collapsing" where a random cell with minimum entropy is observed and collapsed to a random letter of it's potential options. The board is then checked to update the potential characters for each cell.

If a configuration of letters is reached where a cell has 0 potential characters left to choose from, the engine will backtrack and reset the the cells vertical/horizontal to it. Once every cell is filled with a letter that completes a board of valid words, the collapsing stops and the resulting puzzle is printed to the console.

## **How can I use it?**

Instructions for running locally are availible through the github link. You can either setup the react web app to run over the browser, or you can interact with the engine through the CLI.