---
title: 'Scribe'
pubDate: 2022-07-01
image: "../../images/scribeLogo.jpeg"
alt: "Minimalist Blue Quill"
tags: ["Python", "Django", "MySQL", "AWS", "Vue.js", "GPT-4 API"]
---

## **What is it?**

Originally developed on a team of three as a hackathon project, Scribe streamlines the note-taking process for weekly stand-up meetings. Using Open-AI's open-source speech-to-text Whisper and the GPT-4 API, meeting notes are generated automatically and sent to channels through Slack and Microsoft Teams integrations.


## **How does it work?**

Scribe is built on a Django backend and Vue.js frontend. The backend handles the scribe requests and initates the transcription process with Whisper. After transcription is complete, the GPT-4 API is used to summarize the contents of the meeting transcription. The frontend UI allows users to upload meeting recordings and specify where to send the finalized notes (Microsoft Teams or Slack).

## **How can I use it?**

Unfortunately, Scribe is still a closed source software being developed at the UCF CDL. There could be a potential public release in the future.