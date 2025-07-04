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
    .about-main-content {
        padding: 3rem 2rem;
    }
    .about-main-content h1 {
        font-family: 'Righteous', cursive;
        font-size: 3.5rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 0.5rem;
    }
    .about-main-content .designation {
        font-size: 1.5rem;
        font-weight: 300;
        color: #fff;
        margin-bottom: 2rem;
    }
    .about-main-content .section-title {
        font-size: 1.8rem;
        font-weight: 600;
        color: #005a5a;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    .about-main-content ul {
        list-style: none;
        padding-left: 0;
    }
    .about-main-content ul li {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #333;
        margin-bottom: 1rem;
        position: relative;
        padding-left: 25px;
        text-align: justify;
    }
    .about-main-content ul li:before {
        content: '•';
        color: #008080;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        position: absolute;
        left: 0;
    }

    .about-sidebar {
        position: sticky;
        top: 80px;
        padding: 3rem 2rem;
    }
    .about-sidebar h4 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #005a5a;
        margin-bottom: 1.5rem;
    }
    .contact-links a {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        color: #333;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    .contact-links a:hover {
        color: #008080;
        transform: translateX(5px);
    }
    .contact-links a i {
        color: #008080;
        margin-right: 10px;
        width: 20px;
        text-align: center;
    }

    .tech-stack-sidebar {
        margin-top: 3rem;
    }
    .tech-category-sidebar {
        margin-bottom: 2.5rem;
    }
    .tech-category-sidebar h5 {
        font-size: 1rem;
        font-weight: 600;
        color: #005a5a;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .tech-stack-grid-sidebar {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.75rem 1rem;
    }
    .tech-icon-sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.6rem;
        transition: transform 0.2s ease;
    }
    .tech-icon-sidebar:hover {
        transform: scale(1.1);
    }
    .tech-icon-sidebar img {
        height: 35px;
        width: 35px;
        object-fit: contain;
    }
    .tech-icon-sidebar span {
        font-size: 0.75rem;
        color: #7f8c8d;
        font-weight: 500;
    }
</style>

<div class="row">
    <!-- Main Content -->
    <div class="col-lg-7 about-main-content">
        <h1>Sanjay Kuppusamy Saravanan</h1>
        <p class="designation">Deep Learning Engineer</p>

        <h2 class="section-title">Experience</h2>
        <ul>
            <li><strong>AI/ML Engineer Intern at SlateMate, IIT Madras:</strong> Conducted research on state-of-the-art AI/ML algorithms for content classification and contributed to a multi-layered content moderation framework. Optimized AI models for on-device (edge) deployment, balancing performance, latency, and resource consumption to enable real-time analysis on mobile platforms.</li>
            <li><strong>Machine Learning Intern at National Institute of Wind Energy:</strong> Collaborated on advanced wind energy forecasting initiatives and engineered a Temporal Fusion Transformer for multi-year AEP prediction, achieving a Mean Squared Error (MSE) of 0.040.</li>
        </ul>

        <h2 class="section-title">Projects</h2>
        <ul>
            <li>Enhanced Mistral 7b with SFT, Alpaca, PEFT, and DPO for improved instruction following.</li>
            <li>Developed an IoT solution for monitoring employees and preventing forklift accidents.</li>
            <li>Created an Intersection Traffic Management System (ITMS) using CV and Yolov7.</li>
            <li>Built an AI Malware Detection System with sandboxing and NLP to prevent malware attacks.</li>
        </ul>

        <h2 class="section-title">Publications & Certifications</h2>
        <ul>
            <li>First author of an IEEE publication on autonomous safety compliance in industrial environments.</li>
            <li>Authored IEEE papers on securing patient health records with blockchain and a blockchain-enhanced patient triage system.</li>
            <li>Certified as an IBM AI Analyst and Oracle Cloud GenAI Professional.</li>
        </ul>
    </div>

    <!-- Sidebar -->
    <div class="col-lg-4 offset-lg-1">
        <div class="about-sidebar">
            <h4>Contact Me</h4>
            <div class="contact-links">
                <a href="https://linkedin.com/in/sanjayks2317" target="_blank"><i class="fab fa-linkedin-in"></i>LinkedIn</a>
                <a href="https://twitter.com/Sanj_AI_space" target="_blank"><i class="fab fa-twitter"></i>Twitter</a>
                <a href="https://github.com/sanjay-ks23" target="_blank"><i class="fab fa-github"></i>GitHub</a>
            </div>

            <div class="tech-stack-sidebar">
                <h4>My Tech Stack</h4>
                <div class="tech-category-sidebar">
                    <h5>Core ML & Data</h5>
                    <div class="tech-stack-grid-sidebar">
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Python.svg" alt="Python"><span>Python</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/PyTorch.svg" alt="PyTorch"><span>PyTorch</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/TensorFlow.svg" alt="TensorFlow"><span>TensorFlow</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Keras.svg" alt="Keras"><span>Keras</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/hf logo.svg" alt="Hugging Face"><span>Hugging Face</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/OpenCV.svg" alt="OpenCV"><span>OpenCV</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Pandas.svg" alt="Pandas"><span>Pandas</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/NumPy.svg" alt="NumPy"><span>NumPy</span></div>
                    </div>
                </div>
                <div class="tech-category-sidebar">
                    <h5>Development & Tools</h5>
                    <div class="tech-stack-grid-sidebar">
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Git.svg" alt="Git"><span>Git</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/GitHub.svg" alt="GitHub"><span>GitHub</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Jupyter.svg" alt="Jupyter"><span>Jupyter</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Visual-Studio-Code-(VS-Code).svg" alt="VS Code"><span>VS Code</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Vim.svg" alt="Vim"><span>Vim</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Streamlit.svg" alt="Streamlit"><span>Streamlit</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Kaggle.svg" alt="Kaggle"><span>Kaggle</span></div>
                        <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Ubuntu.svg" alt="Ubuntu"><span>Ubuntu</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
