---
layout: about_new
title: About
permalink: /about
---

<header>
  <h2 class="h2 article-title">About Me</h2>
</header>

<section class="about-text">
  <p>
    I am a passionate and results-driven Deep Learning Engineer with a strong foundation in developing and deploying AI/ML models. My experience spans from conducting research on state-of-the-art algorithms to engineering robust solutions for real-world challenges, including content moderation, wind energy forecasting, and industrial safety systems.
  </p>
  <p>
    My goal is to leverage my skills in machine learning, computer vision, and data analysis to build innovative and impactful AI-powered applications. I am a firm believer in continuous learning and am always exploring new techniques and technologies to push the boundaries of what's possible.
  </p>
</section>

<!--
  - service (What I'm Doing)
-->

<section class="service">

  <h3 class="h3 service-title">What I'm Doing</h3>

  <ul class="service-list">

    <li class="service-item">
      <div class="service-icon-box">
        <img src="{{ site.baseurl }}/assets/images/icon-dev.svg" alt="Web development icon" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">AI/ML Engineering</h4>
        <p class="service-item-text">
          Building and optimizing state-of-the-art models for various applications.
        </p>
      </div>
    </li>

    <li class="service-item">
      <div class="service-icon-box">
        <img src="{{ site.baseurl }}/assets/images/icon-design.svg" alt="design icon" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">Edge Deployment</h4>
        <p class="service-item-text">
          Optimizing models for on-device deployment, balancing performance and resource consumption.
        </p>
      </div>
    </li>

    <li class="service-item">
      <div class="service-icon-box">
        <img src="{{ site.baseurl }}/assets/images/icon-app.svg" alt="mobile app icon" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">IoT & Computer Vision</h4>
        <p class="service-item-text">
          Developing intelligent systems for safety, monitoring, and automation.
        </p>
      </div>
    </li>

    <li class="service-item">
      <div class="service-icon-box">
        <img src="{{ site.baseurl }}/assets/images/icon-photo.svg" alt="camera icon" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">Research & Publication</h4>
        <p class="service-item-text">
          Contributing to the field with publications in IEEE on novel applications of technology.
        </p>
      </div>
    </li>

  </ul>

</section>

<!--
  - #RESUME content that will be dynamically moved by JS
-->

<div id="resume-content-source" style="display: none;">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 class="h3">Experience</h3>
      </div>
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">AI/ML Engineer Intern at SlateMate, IIT Madras</h4>
          <span>[Date]</span>
          <p class="timeline-text">
            Conducted research on state-of-the-art AI/ML algorithms for content classification and contributed to a multi-layered content moderation framework. Optimized AI models for on-device (edge) deployment, balancing performance, latency, and resource consumption to enable real-time analysis on mobile platforms.
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">Machine Learning Intern at National Institute of Wind Energy</h4>
          <span>[Date]</span>
          <p class="timeline-text">
            Collaborated on advanced wind energy forecasting initiatives and engineered a Temporal Fusion Transformer for multi-year AEP prediction, achieving a Mean Squared Error (MSE) of 0.040.
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
        <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 classh3>Projects</h3>
        </div>
        <ol class="timeline-list">
            <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Enhanced Mistral 7b</h4>
                <p class="timeline-text">Enhanced Mistral 7b with SFT, Alpaca, PEFT, and DPO for improved instruction following.</p>
            </li>
            <li class="timeline-item">
                <h4 class="h4 timeline-item-title">IoT Forklift Safety Solution</h4>
                <p class="timeline-text">Developed an IoT solution for monitoring employees and preventing forklift accidents.</p>
            </li>
            <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Intersection Traffic Management System (ITMS)</h4>
                <p class="timeline-text">Created an ITMS using CV and Yolov7.</p>
            </li>
             <li class="timeline-item">
                <h4 class="h4 timeline-item-title">AI Malware Detection System</h4>
                <p class="timeline-text">Built an AI Malware Detection System with sandboxing and NLP to prevent malware attacks.</p>
            </li>
        </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">My Skills</h3>
      <p class="timeline-text">My Tech stack is listed below</p>
    </section>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const resumeContent = document.getElementById('resume-content-source');
    const resumePage = document.querySelector('.resume[data-page="resume"]');
    if (resumeContent && resumePage) {
        resumePage.innerHTML = resumeContent.innerHTML;
        resumeContent.remove();
    }
});
</script>
