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
        padding: 3rem 0;
    }
    .about-main-content h1 {
        font-size: 2.8rem;
        font-weight: 700;
        color: #005a5a;
        margin-bottom: 0.5rem;
    }
    .about-main-content .designation {
        font-size: 1.5rem;
        font-weight: 300;
        color: #008080;
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
    }
    .about-sidebar h4 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #005a5a;
        margin-bottom: 1.5rem;
    }
    .contact-buttons .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 0.75rem;
        padding: 0.7rem 0;
        font-weight: 600;
        border-radius: 5px;
        transition: all 0.3s ease;
        border: 1px solid transparent;
        box-shadow: 0 2px 4px rgba(0, 128, 128, 0.2);
    }
    .btn-linkedin { background: linear-gradient(to right, #008080, #005a5a); color: white; }
    .btn-linkedin:hover { box-shadow: 0 4px 8px rgba(0, 128, 128, 0.4); }
    .btn-twitter { background: linear-gradient(to right, #008080, #005a5a); color: white; }
    .btn-twitter:hover { box-shadow: 0 4px 8px rgba(0, 128, 128, 0.4); }
    .btn-github { background: linear-gradient(to right, #008080, #005a5a); color: white; }
    .btn-github:hover { box-shadow: 0 4px 8px rgba(0, 128, 128, 0.4); }

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

<div class="container about-page-container">
    <div class="row">
        <!-- Main Content -->
        <div class="col-lg-7 about-main-content">
            <h1>Sanjay Kuppusamy Saravanan</h1>
            <p class="designation">Deep Learning Engineer</p>

            <h2 class="section-title">Experience</h2>
            <ul>
                <li><strong>AI/ML Engineer Intern at SlateMate, IIT Madras:</strong> Conducted research on state-of-the-art AI/ML algorithms for content classification and contributed to a multi-layered content moderation framework.</li>
                <li><strong>Machine Learning Intern at National Institute of Wind Energy:</strong> Collaborated on advanced wind energy forecasting initiatives and engineered a Temporal Fusion Transformer for multi-year AEP prediction.</li>
            </ul>

            <h2 class="section-title">Projects</h2>
            <ul>
                <li>Enhanced Mistral 7b with SFT, Alpaca, PEFT, and DPO for improved instruction following.</li>
                <li>Developed an IoT solution for monitoring employees and preventing forklift accidents.</li>
                <li>Created an Intersection Traffic Management System (ITMS) using CV and Yolov7.</li>
            </ul>

            <h2 class="section-title">Miscellaneous</h2>
            <p>First author of three IEEE publications on topics including autonomous safety compliance, blockchain-based health records, and patient triage systems. Certified IBM AI Analyst and Oracle Cloud GenAI Professional.</p>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4 offset-lg-1">
            <div class="about-sidebar">
                <h4>Contact Me</h4>
                <div class="contact-buttons">
                    <a href="https://linkedin.com/in/sanjayks2317" target="_blank" class="btn btn-linkedin"><i class="fab fa-linkedin-in mr-2"></i>LinkedIn</a>
                    <a href="https://twitter.com/Sanj_AI_space" target="_blank" class="btn btn-twitter"><i class="fab fa-twitter mr-2"></i>Twitter</a>
                    <a href="https://github.com/sanjay-ks23" target="_blank" class="btn btn-github"><i class="fab fa-github mr-2"></i>GitHub</a>
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
                            <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/Hugging-Face.svg" alt="Hugging Face"><span>HF Logo</span></div>
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
</div>
