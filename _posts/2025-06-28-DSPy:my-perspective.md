---
layout: post
title:  "DSPy: A revolution in prompt engineering"
author: Sanjay
categories: [ AI Agents]
image: "assets/images/dspy.jpg"
---
This blog is predominantly my undersatnding of the Build and Optimize Agentic Apps with DSPy and MLflow course from DeepLearning AI. 
The  course has been seperated into four main categories:
   ### Introduction to DSPy.
   ### DSPy Programming-Signatures and MOdules.
   ### Debug YOur DSPy Agent with MLflow Tracing.
   ### And finally, Opttimizing Agents with DSPy Optimizer.
This course talks about building AI programs with DSPy. 
# Introduction

## So what exactly is DSPy?

    DSPy is a GenAI authoring framework, that simplifies the develpopment of GenAI applications.
    As of now the use cases are as follows:
          1) RAG systems
          2) Chain of thought prompting
          3) Structuring the response ouput generated( like JSON)
          4) LLM pipelines for agnets or tools

### So what does this all these mean you ask? 
    To answer that we need to go back a few years, 20222 to be precise, to understand the problem that led the creation of DSPy. If you can recall it was around this time we all got introduced to CHAT-GPT and other Gen-AI models, for me personally it was a revelation as I was in my college and suddenly I could compelete my assignments wihtout the help of anybody, we wont talk about the repercussions of doing so. Now along with these models came the development of **compound AI systems**. These are systems that has multiple modules and each of these modules handles a subtask which in turn makes LLM calls. Dont worry I know you found it hard to understand the last sentence, I did too, so we will take it slowly. 
![Compound Systems](assets/images/compound%20systems.png) 
Consider the image above, there are two examples of Compund systems, but you think there isnt much to it right, but when you look closer in both these systems, you can see that there are mulitple robot faces in the RAG - QA system and the code generator systems has multiple agents in it. This is basiclay what a compound system is. To further simplify it, In our daily LLM usage, we use them for mulitple purposes, me personally, I use claude for coding, perplexity for research purpose, gemini for usage in my mobile phone and so on, why not think of a system that does all of this together and attains benchmark results (haven't been done yet, stop searching for the perfect system) and all these models use multiple tools and resources in order to help with the process/prompt execution , like for example, TTS in gemini, web searching for which we need internet access and the list goes on. 
So the brief explanation is, **compound AI systems** are systems that tackle AI tasks by combining multiple interacting components. These components can include multiple calls to models, retrievers or external tools. Retrieval augmented generation (RAG) applications, for example, are compound AI systems, as they combine (at least) a model and a data retrieval system. Compound AI systems leverage the strengths of various AI models, tools and pipelines to enhance performance, versatility and re-usability compared to solely using individual models as defined by the [Berkeley AI Research (BAIR) blog](https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/).

**I have mentioned about a certain problem that led to the creation of DSPy, what exaclty is this problem?**
Can you recall all the times you might have asked a question to the LLM and the response is not what you desired or it wasn't even factually correct. BUt you have a slight suspicion that maybe the question I asked was not clear enough so you tend to engineer a prompt that might result in a better response. This is basically what prompt engineering is, giving a better prompt helps us get better results.

But the process of prompt engineering is complicated:
Because what essentially the user does is a trial and error men=thods with a few string tweaks but end up not knowing what actually causes the change in the response and what changes could help us reach a desired result.
We end up trying a embarrasing amount of times to prefect this result, for example, I wanted to generate a avatar for my blog with the help of chat gpt using my normal passport image, I know the process is resource heavy and takes some time, but it generated me a avatar wihtout my eyes and to correct it I asked the model to add eye to my face and it ended up adding just my left eye and this kept going on. Now consider the same for a string prompt, you might have to modify thousands of characters or even words in some cases to reach a desired response and switiching over to a newer model would make us repeat the entire process.

**So prompt engineering is both sensitive/brittle and time consuming**

The other problem comes from the framework itself, framework help simplify complex tasks by providing abstraction and easier calls to build AI agents. 
But where is the problem in this you ask, have you ever had the privilege to integrate tensorflow with GPU, if you havent you should give it a try. It was a humbling experience and even today I switched over to pytorch just because I never have to do the process again. But this comes with its own downfalls, we have to learn the syntax, design patterns and custom APIs and this switching over becomes a even more of a mess once you are too deep.

To solve both these problems DSPy was introduced.

Now let us go into the specifics of DSPy, What is it? 
DSPy was a lightweight and a flexible framework that simplifies the interaction with LMs (Language models). It provides automatic program optimization, this includes prompt optimzation and LM weghts finetuning with the help of a DSPy optimizer. It also provides help with productization support like streaming, async (we will go deeper into these later) and also provides building blocks but doesnt restrict what the user is building and finnaly simplies the migration process both from or to DSPy.

How is it special and how does it work seamlessly?
There are three main features:
1) The framework works on LM-agnostic programming instead of LM-biased prompting. Just to get an idea about what this is a brief explanation, instead of doing prompt engineering, the DSPy framework interacts with our LLM by defining input fields and output fields. In DSPy context you can choose how an endpoint has a well engineering RESTful API. But different from traditional APIs, as both input and output are defined in the client side.( Note to reader: I know this has completely flown across your head, dont worry I will explain it in the second module.)
2) Seamless productization through both native DSPy features as mentioned before like streaming, cache and also through MLFlow integration. To keep it simple for now, MLFlow is an ML and AI Ops tool that streamlines end-to-end development of AI aplications. Example: It helps debug AI programs by MLFlow tracing, and then comes tracking and then finally the deployment features to deploy the application.
3) Automatic program optimization, like weight finetuning.
Each of this will be discussed seperately and in detail in th eupcoming modules respectively.


