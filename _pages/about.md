---
layout: page
title: About
permalink: /about
comments: false
show_explore: false
show_sitetitle: false
---

<style>
    body.layout-page {
        background: #000;
    }
    .about-page-wrapper {
        position: relative;
        background: linear-gradient(180deg, #0f172a 0%, #000000 100%);
        color: #e2e8f0;
        overflow: hidden;
    }
    #stars, #stars2, #stars3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-size: cover;
        animation: animStar 50s linear infinite;
    }
    #stars { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.svg'); }
    #stars2 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars2.svg'); animation-duration: 100s; }
    #stars3 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.svg'); animation-duration: 150s; }

    @keyframes animStar {
        from { transform: translateY(0px); }
        to { transform: translateY(-2000px); }
    }

    .about-container-celestial {
        position: relative;
        z-index: 1;
        padding: 4rem 0;
    }
    .about-main-content h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 2rem;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
    .about-main-content p {
        font-size: 1.1rem;
        line-height: 1.8;
        text-align: justify;
        color: #94a3b8;
        margin-bottom: 1.5rem;
    }
    .about-main-content strong {
        color: #7dd3fc; /* Light blue for emphasis */
    }

    .sidebar-celestial {
        position: sticky;
        top: 80px;
    }
    .sidebar-celestial h4 {
        font-size: 1.3rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #334155;
        padding-bottom: 0.75rem;
    }
    .connect-buttons .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 0.75rem;
        padding: 0.6rem 0;
        font-weight: 600;
        border-radius: 5px;
        transition: all 0.3s ease;
        border: 1px solid transparent;
    }
    .btn-linkedin { background-color: #0a66c2; color: white; }
    .btn-linkedin:hover { background-color: #004182; }
    .btn-twitter { background-color: #1da1f2; color: white; }
    .btn-twitter:hover { background-color: #0c84d0; }

    .tech-stack-sidebar {
        margin-top: 2.5rem;
    }
    .tech-category-sidebar {
        margin-bottom: 2rem;
    }
    .tech-category-sidebar h5 {
        font-size: 1rem;
        font-weight: 600;
        color: #94a3b8;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .tech-stack-grid-sidebar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }
    .tech-icon-sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.5rem;
        transition: transform 0.2s ease;
    }
    .tech-icon-sidebar:hover {
        transform: scale(1.15);
    }
    .tech-icon-sidebar img {
        height: 35px;
        width: 35px;
        object-fit: contain;
        filter: grayscale(100%) brightness(300%);
    }
    .tech-icon-sidebar:hover img {
        filter: none;
    }
    .tech-icon-sidebar span {
        font-size: 0.8rem;
        color: #94a3b8;
        font-weight: 500;
    }
</style>

<div class="about-page-wrapper">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div class="container about-container-celestial">
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
                <div class="sidebar-celestial">
                    <h4>Connect With Me</h4>
                    <div class="connect-buttons">
                        <a href="https://linkedin.com/in/sanjayks2317" target="_blank" class="btn btn-linkedin"><i class="fab fa-linkedin-in mr-2"></i>LinkedIn</a>
                        <a href="https://twitter.com/Sanj_AI_space" target="_blank" class="btn btn-twitter"><i class="fab fa-twitter mr-2"></i>Twitter</a>
                    </div>

                    <div class="tech-stack-sidebar">
                        <h4>My Tech Stack</h4>
                        <div class="tech-category-sidebar">
                            <h5>Core & ML</h5>
                            <div class="tech-stack-grid-sidebar">
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"><span>Python</span></div>
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow"><span>TensorFlow</span></div>
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch"><span>PyTorch</span></div>
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" alt="Keras"><span>Keras</span></div>
                                <div class="tech-icon-sidebar"><img src="https://www.vectorlogo.zone/logos/huggingface_hf/huggingface_hf-icon.svg" alt="Hugging Face"><span>Hugging Face</span></div>
                                <div class="tech-icon-sidebar"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Caffe_logo.svg" alt="Caffe"><span>Caffe</span></div>
                            </div>
                        </div>
                        <div class="tech-category-sidebar">
                            <h5>Cloud & Deployment</h5>
                            <div class="tech-stack-grid-sidebar">
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure"><span>Azure</span></div>
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP"><span>GCP</span></div>
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg" alt="IBM Cloud"><span>IBM Cloud</span></div>
                                <div class="tech-icon-sidebar"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker"><span>Docker</span></div>
                                <div class="tech-icon-sidebar"><img src="https://www.vectorlogo.zone/logos/google_colab/google_colab-icon.svg" alt="Google Colab"><span>Colab</span></div>
                                <div class="tech-icon-sidebar"><img src="https://developer.nvidia.com/assets/site/img/triton-inference-server/triton-logo-horz-color-blkbg-240x70.png" alt="NVIDIA Triton"><span>Triton</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
