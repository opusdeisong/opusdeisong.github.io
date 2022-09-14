---
title: Fixing Giscus
categories: [Fixing_Blog]
tags: [TIL]
---

# Why I messed up with my Giscus

Before I explain the methods that I tried to fix giscus, I will first explain why it failed. GitHub has a so-called grass planting system that colors green when committing. I thought when I upload a content this would affect my github. But my existing GitHub blog repository was a forked repository, so even if I updated my blog, the grass was not planted. So, I tried to proceed through the process of doing Git Clone first, but both Windows and Git failed from some reason I didn't understand. So I made a completely new repository and move the information I have made before. In this process, giscus system began to fail. 

---

# Attempt 1

<img src="https://user-images.githubusercontent.com/105193807/188149007-2da402aa-95ae-4282-b236-c7771767f274.png" alt="Giscus" style="zoom: 50%;" />

 First, I tried to get the information to put inside my config file. But at first   I had hard time why my repository doesn't get applied in giscus. Soon I realized since I moved my repository my account didn't had giscus installed. So I first installed giscus and got the information from the site and updated my config file. 

<img src="https://user-images.githubusercontent.com/105193807/188157181-8eaf788d-12c9-4bd1-a55d-4e55cfeabeae.png" alt="Giscus" style="zoom: 50%;" />

Finally my giscus was fixed. It was easier than I thought. Tomorrow I'll be trying to fix my about page.