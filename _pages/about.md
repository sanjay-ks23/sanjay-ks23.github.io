---
layout: page
title: About
permalink: /about
comments: false
show_explore: false
show_sitetitle: false
---

<style>
    .about-container {
        padding: 2rem 0;
    }
    .about-main-content h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #2c5c3f;
        margin-bottom: 1.5rem;
    }
    .about-main-content p {
        font-size: 1.1rem;
        line-height: 1.7;
        text-align: left;
        margin-bottom: 1.25rem;
    }
    .connect-sidebar {
        position: sticky;
        top: 80px;
        padding: 1.5rem;
        background-color: #f7f9f8;
        border-radius: 8px;
        border: 1px solid #eef2f0;
    }
    .connect-sidebar h4 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2c5c3f;
        margin-bottom: 1rem;
    }
    .connect-sidebar .btn {
        display: block;
        width: 100%;
        margin-bottom: 0.75rem;
        padding: 0.6rem 0;
        font-weight: 600;
        border-radius: 5px;
        transition: all 0.3s ease;
    }
    .btn-linkedin { background-color: #0077b5; color: white; }
    .btn-linkedin:hover { background-color: #005582; color: white; }
    .btn-twitter { background-color: #1DA1F2; color: white; }
    .btn-twitter:hover { background-color: #0c85d0; color: white; }

    .tech-stack-section {
        padding: 3rem 0;
        margin-top: 2rem;
        border-top: 1px solid #eef2f0;
    }
    .tech-stack-section h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        color: #2c5c3f;
        margin-bottom: 2.5rem;
    }
    .tech-category {
        margin-bottom: 2.5rem;
    }
    .tech-category h5 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #5a7d6a;
        margin-bottom: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .tech-stack-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 2rem;
        justify-items: center;
    }
    .tech-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.75rem;
        transition: transform 0.2s ease;
    }
    .tech-icon:hover {
        transform: scale(1.1);
    }
    .tech-icon img {
        height: 45px;
        width: 45px;
        object-fit: contain;
    }
    .tech-icon span {
        font-size: 0.85rem;
        color: #5a7d6a;
        font-weight: 500;
    }
</style>

<div class="about-container">
    <div class="row">
        <!-- Main Content -->
        <div class="col-lg-8 about-main-content">
            <h1>Sanjay Kuppusamy Saravanan</h1>
            <p>Hello! I'm a Deep Learning Engineer and a recent Computer Science graduate from the Vellore Institute of Technology, where I specialized in AI and Machine Learning. My journey into the world of technology is driven by a fascination with how complex problems can be solved with elegant, data-driven solutions.</p>
            <p>I thrive on the challenge of designing, building, and deploying systems that are not only powerful but also efficient and scalable. My experience spans from developing robust content moderation frameworks at <strong>SlateMate, IIT Madras</strong>, to engineering sophisticated predictive models for wind energy forecasting with the <strong>National Institute of Wind Energy</strong>. I enjoy working across the full spectrum of a project, from initial concept and research to final deployment and optimization.</p>
            <p>Beyond my core work, I'm deeply interested in the potential of decentralized technologies and have explored this through projects involving blockchain for secure data management. I believe in the power of open-source and collaborative innovation to push the boundaries of what's possible.</p>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
            <div class="connect-sidebar">
                <h4>Connect With Me</h4>
                <a href="https://linkedin.com/in/sanjayks2317" target="_blank" class="btn btn-linkedin"><i class="fab fa-linkedin-in mr-2"></i>LinkedIn</a>
                <a href="https://twitter.com/Sanj_AI_space" target="_blank" class="btn btn-twitter"><i class="fab fa-twitter mr-2"></i>Twitter</a>
            </div>
        </div>
    </div>
</div>

<div class="tech-stack-section">
    <div class="container">
        <h2>My Tech Stack</h2>

        <div class="tech-category">
            <h5>Core & Machine Learning</h5>
            <div class="tech-stack-grid">
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"><span>Python</span></div>
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow"><span>TensorFlow</span></div>
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch"><span>PyTorch</span></div>
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" alt="Keras"><span>Keras</span></div>
                <div class="tech-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Caffe_logo.svg/1200px-Caffe_logo.svg.png" alt="Caffe"><span>Caffe</span></div>
                <div class="tech-icon"><img src="https://www.vectorlogo.zone/logos/huggingface_hf/huggingface_hf-icon.svg" alt="Hugging Face"><span>Hugging Face</span></div>
            </div>
        </div>

        <div class="tech-category">
            <h5>Data & Visualization</h5>
            <div class="tech-stack-grid">
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV"><span>OpenCV</span></div>
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib"><span>Matplotlib</span></div>
                <div class="tech-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel"><span>Excel</span></div>
                <div class="tech-icon"><img src="https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" alt="Kaggle"><span>Kaggle</span></div>
            </div>
        </div>

        <div class="tech-category">
            <h5>Development & Deployment</h5>
            <div class="tech-stack-grid">
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code"><span>VS Code</span></div>
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt="Jupyter"><span>Jupyter</span></div>
                <div class="tech-icon"><img src="https://www.vectorlogo.zone/logos/google_colab/google_colab-icon.svg" alt="Google Colab"><span>Google Colab</span></div>
                <div class="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker"><span>Docker</span></div>
                <div class="tech-icon"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Nvidia_TensorRT_logo.svg/1200px-Nvidia_TensorRT_logo.svg.png" alt="TensorRT"><span>NVIDIA TensorRT</span></div>
            </div>
        </div>
    </div>
</div>
