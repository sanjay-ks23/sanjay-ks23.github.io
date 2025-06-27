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
        color: #2c3e50;
        margin-bottom: 2rem;
    }
    .about-main-content p {
        font-size: 1.1rem;
        line-height: 1.8;
        text-align: justify;
        color: #34495e;
        margin-bottom: 1.5rem;
    }
    .about-main-content strong {
        color: #2c5c3f;
        font-weight: 600;
    }

    .about-sidebar {
        position: sticky;
        top: 80px;
    }
    .about-sidebar h4 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #2c3e50;
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
    }
    .btn-linkedin { background-color: #0077b5; color: white; }
    .btn-linkedin:hover { background-color: #005582; }
    .btn-twitter { background-color: #1DA1F2; color: white; }
    .btn-twitter:hover { background-color: #0c85d0; }
    .btn-github { background-color: #333; color: white; }
    .btn-github:hover { background-color: #1a1a1a; }

    .tech-stack-sidebar {
        margin-top: 3rem;
    }
    .tech-category-sidebar {
        margin-bottom: 2.5rem;
    }
    .tech-category-sidebar h5 {
        font-size: 1rem;
        font-weight: 600;
        color: #34495e;
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
            <p>Hello! I'm a Deep Learning Engineer and a recent Computer Science graduate from the <strong>Vellore Institute of Technology</strong>, where I specialized in AI and Machine Learning. My journey into the world of technology is driven by a fascination with how complex problems can be solved with elegant, data-driven solutions.</p>
            <p>I thrive on the challenge of designing, building, and deploying systems that are not only powerful but also efficient and scalable. My experience spans from developing robust content moderation frameworks at <strong>SlateMate, IIT Madras</strong>, to engineering sophisticated predictive models for wind energy forecasting with the <strong>National Institute of Wind Energy</strong>. I enjoy working across the full spectrum of a project, from initial concept and research to final deployment and optimization.</p>
            <p>Beyond my core work, I'm deeply interested in the potential of decentralized technologies and have explored this through projects involving blockchain for secure data management. I believe in the power of open-source and collaborative innovation to push the boundaries of what's possible.</p>
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
                            <div class="tech-icon-sidebar"><img src="{{ site.baseurl }}/assets/svg/hf-logo.svg" alt="Hugging Face"><span>HF Logo</span></div>
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
