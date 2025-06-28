---
layout: page
title: About
permalink: /about
comments: false
show_explore: false
show_sitetitle: false
---

<style>
    .about-page-container {
        padding: 0;
    }
    .about-header {
        background: linear-gradient(to right, #008080, #005a5a);
        color: #fff;
        padding: 4rem 2rem;
        text-align: center;
        border-radius: 8px;
        margin-bottom: 3rem;
        box-shadow: 0 8px 16px rgba(0, 128, 128, 0.3);
    }
    .about-header h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 0;
    }
    .about-header p {
        font-size: 1.5rem;
        margin: 0;
        font-weight: 300;
    }
    .section-card {
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-left: 5px solid #008080;
    }
    .section-card h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #005a5a;
        margin-bottom: 1.5rem;
    }
    .item {
        margin-bottom: 1.5rem;
    }
    .item h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #008080;
    }
    .item p {
        margin-bottom: 0.5rem;
        color: #333;
    }
    .item ul {
        padding-left: 20px;
        color: #555;
    }
    .skills-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .skills-list li {
        background: #e6f2f2;
        color: #005a5a;
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: 500;
    }
</style>

<div class="container about-page-container">

    <div class="about-header">
        <h1>Sanjay Kuppusamy Saravanan</h1>
        <p>Deep Learning Engineer</p>
    </div>

    <div class="section-card">
        <h2>Education</h2>
        <div class="item">
            <h3>B.Tech in Computer Science Engineering with spl. in AI and ML</h3>
            <p>Vellore Institute of Technology (2020 - 2024)</p>
            <p><strong>GPA:</strong> 8.88/10</p>
        </div>
        <div class="item">
            <h3>Central Board of Senior Education (CBSE)</h3>
            <p>Maharishi Vidya Mandir (2018 - 2020)</p>
            <p><strong>HSC:</strong> 90.6% | <strong>SSC:</strong> 93.2%</p>
        </div>
    </div>

    <div class="section-card">
        <h2>Experience</h2>
        <div class="item">
            <h3>AI/ML Engineer Intern</h3>
            <p>SlateMate, IIT Madras (June 2025 - Ongoing)</p>
            <ul>
                <li>Conducted research and analysis on state-of-the-art AI/ML algorithms for content classification, focusing on text, image, and video analysis to ensure user safety and platform integrity.</li>
                <li>Contributed to the design of a multi-layered content moderation framework, integrating rules-based logic with dynamic AI-driven filtering.</li>
                <li>Optimized AI models for on-device (edge) deployment, balancing performance, latency, and resource consumption to enable real-time analysis on mobile platforms.</li>
            </ul>
        </div>
        <div class="item">
            <h3>Machine Learning Intern</h3>
            <p>National Institute of Wind Energy, Government of India (October 2024 - March 2025)</p>
            <ul>
                <li>Collaborated with Dr. Julian Antony Quick (contributor to TOPFARM), Technical University of Denmark, on advanced wind energy forecasting initiatives.</li>
                <li>Led the design and evaluation of predictive models for Annual Energy Production (AEP) using meteorological data from regional wind farms.</li>
                <li>Engineered a Temporal Fusion Transformer from scratch with Monte Carlo simulation to predict uncertainty and finally to forecast multi-year AEP; achieved a Mean Squared Error (MSE) of 0.040.</li>
            </ul>
        </div>
    </div>

    <div class="section-card">
        <h2>Publications</h2>
        <div class="item">
            <h3>First Author: Automated Safety Compliance Monitoring in Industrial Environments with Autonomous Rover, (IEEE)</h3>
            <ul>
                <li>Engineered an autonomous edge AI system for industrial safety compliance on NVIDIA Jetson, Triton Server, and DeepStream SDK. Optimized and deployed a YOLO model (97.8% precision, 60 fps) with Azure IoT Hub integration. Conducted comparative analysis of embedded systems (Jetson vs. Raspberry Pi) to propose a low-latency, scalable framework.</li>
            </ul>
        </div>
        <div class="item">
            <h3>Securing Patient Health Records Using Blockchain, (IEEE)</h3>
            <ul>
                <li>Designed a decentralised health record system (Ethereum, IPFS) for patient-centric data ownership and secure, selective record sharing.</li>
            </ul>
        </div>
        <div class="item">
            <h3>Blockchain Enhanced Patient Triage System, (IEEE)</h3>
            <ul>
                <li>Developed a triage platform (React.js, Ethereum, IPFS, NLP) for automated medical entity extraction, ADE detection, and secure data sharing.</li>
            </ul>
        </div>
    </div>

    <div class="section-card">
        <h2>Projects</h2>
        <ul>
            <li>Enhancing Mistral 7b - SFT with Alpaca + PEFT + DPO on HH-RLHF for better Instruction Following capabilities.</li>
            <li>Industrial Presentation on IoT Solution for monitoring employees and preventing forklift reversing accidents (Edge AI), Hannon Systems.</li>
            <li>Intersection Traffic Management System (ITMS) - CV Yolov7</li>
            <li>AI Malware Detection System - Sandboxing with Azure - NLP ML to prevent malware attacks.</li>
            <li>Rhesus macaque trespassing with ultrasonic sound waves and Calcium Carbide Cannon using CV- VIT Seed Fund Project.</li>
        </ul>
    </div>

    <div class="section-card">
        <h2>Skills</h2>
        <ul class="skills-list">
            <li>Python</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Cloud Computing (Azure, IBM, GCP)</li>
            <li>Edge Computing</li>
            <li>Deep Learning</li>
            <li>Reinforcement Learning</li>
            <li>Data Structures and Algorithm Design</li>
            <li>Git</li>
            <li>Linux</li>
            <li>Predictive Modelling</li>
            <li>Computer Vision</li>
            <li>NLP</li>
            <li>LLM</li>
            <li>Web Scraping</li>
            <li>RAG</li>
            <li>Blockchain</li>
            <li>IoT</li>
        </ul>
    </div>

    <div class="section-card">
        <h2>Certifications</h2>
        <div class="item">
            <h3>IBM AI Analyst</h3>
            <p>Apr 2023 - May 2023</p>
        </div>
        <div class="item">
            <h3>Oracle Cloud GenAI Professional</h3>
            <p>May 2024 - Jun 2024</p>
        </div>
        <div class="item">
            <h3>IELTS Academic</h3>
            <p>Grade: 7.5 (Jun 2024)</p>
        </div>
    </div>

</div>
