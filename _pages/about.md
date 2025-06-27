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
        color: #2c3e50; /* A deep, professional blue-gray */
        margin-bottom: 2rem;
    }
    .about-main-content p {
        font-size: 1.1rem;
        line-height: 1.8;
        text-align: justify;
        color: #34495e; /* A softer, readable gray */
        margin-bottom: 1.5rem;
    }
    .about-main-content strong {
        color: #2c5c3f; /* Using the site's established green for emphasis */
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
    .connect-buttons .btn {
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

    .tech-stack-sidebar {
        margin-top: 3rem;
    }
    .tech-category-sidebar {
        margin-bottom: 2rem;
    }
    .tech-category-sidebar h5 {
        font-size: 1rem;
        font-weight: 600;
        color: #34495e;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .tech-stack-grid-sidebar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem 1.5rem;
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
        height: 40px;
        width: 40px;
        object-fit: contain;
    }
    .tech-icon-sidebar span {
        font-size: 0.8rem;
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
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/python" alt="Python"><span>Python</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/tensorflow" alt="TensorFlow"><span>TensorFlow</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/pytorch" alt="PyTorch"><span>PyTorch</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/keras" alt="Keras"><span>Keras</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/huggingface" alt="Hugging Face"><span>Hugging Face</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/caffe" alt="Caffe"><span>Caffe</span></div>
                        </div>
                    </div>
                    <div class="tech-category-sidebar">
                        <h5>Cloud & Deployment</h5>
                        <div class="tech-stack-grid-sidebar">
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/azure" alt="Azure"><span>Azure</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/gcp" alt="GCP"><span>GCP</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/ibmcloud" alt="IBM Cloud"><span>IBM Cloud</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/docker" alt="Docker"><span>Docker</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/googlecolab" alt="Google Colab"><span>Colab</span></div>
                            <div class="tech-icon-sidebar"><img src="https://techicons.dev/icons/nvidia" alt="NVIDIA"><span>NVIDIA</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
