---
layout: page
title: About
permalink: /about
comments: false
show_explore: false
show_sitetitle: false
---

<style>
    .hero-section {
        padding: 4rem 0;
        text-align: center;
        background-color: #f8f9fa;
    }
    .hero-section h1 {
        font-size: 3.5rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 1rem;
    }
    .hero-section .lead {
        font-size: 1.25rem;
        color: #5a7d6a;
        margin-bottom: 2rem;
    }
    .hero-section .btn-primary {
        background-color: #2c5c3f;
        border-color: #2c5c3f;
        padding: 0.75rem 1.5rem;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .about-me-section {
        position: relative;
        padding: 6rem 0;
        background: url('{{ site.baseurl }}/assets/images/jumbotron.jpg') no-repeat center center;
        background-size: cover;
        color: white;
    }
    .about-me-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .about-text-box {
        position: relative;
        background: rgba(44, 62, 80, 0.85);
        padding: 2.5rem;
        border-radius: 8px;
    }
    .about-text-box h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }
    .about-text-box p {
        font-size: 1.1rem;
        line-height: 1.8;
        text-align: justify;
    }

    .ask-me-section {
        padding: 4rem 0;
    }
    .ask-me-section h2 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 2rem;
    }
    .form-control {
        margin-bottom: 1rem;
    }

    .follow-me-section {
        padding: 3rem 0;
        background-color: #f8f9fa;
        text-align: center;
    }
    .follow-me-section h4 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1.5rem;
    }
    .social-icons a {
        font-size: 2rem;
        color: #2c5c3f;
        margin: 0 1rem;
        transition: color 0.3s ease;
    }
    .social-icons a:hover {
        color: #5a7d6a;
    }
</style>

<div class="hero-section">
    <div class="container">
        <h1>Hi! I'm Sanjay Saravanan</h1>
        <p class="lead">A Deep Learning Engineer crafting intelligent solutions for complex challenges.</p>
        <a href="#about-me" class="btn btn-primary">My Story</a>
    </div>
</div>

<div id="about-me" class="about-me-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="about-text-box">
                    <h2>About Me</h2>
                    <p>Hello! I'm a recent Computer Science graduate from the Vellore Institute of Technology, where I specialized in AI and Machine Learning. My journey into the world of technology is driven by a fascination with how complex problems can be solved with elegant, data-driven solutions.</p>
                    <p>I thrive on the challenge of designing, building, and deploying systems that are not only powerful but also efficient and scalable. My experience spans from developing robust content moderation frameworks at <strong>SlateMate, IIT Madras</strong>, to engineering sophisticated predictive models for wind energy forecasting with the <strong>National Institute of Wind Energy</strong>. I enjoy working across the full spectrum of a project, from initial concept and research to final deployment and optimization.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container tech-stack-section" style="padding: 4rem 0;">
    <h2 style="text-align: center; font-size: 2.5rem; font-weight: 700; color: #2c3e50; margin-bottom: 3rem;">My Tech Stack</h2>
    <div class="tech-category" style="margin-bottom: 2.5rem;">
        <h5 style="font-size: 1.2rem; font-weight: 600; color: #5a7d6a; margin-bottom: 1.5rem; text-align: center; text-transform: uppercase; letter-spacing: 1px;">Core & Machine Learning</h5>
        <div class="tech-stack-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 2rem; justify-items: center;">
            <div class="tech-icon"><img src="{{ site.baseurl }}/assets/svg/Python.svg" alt="Python" style="height: 45px; width: 45px; object-fit: contain;"><span>Python</span></div>
            <div class="tech-icon"><img src="{{ site.baseurl }}/assets/svg/TensorFlow.svg" alt="TensorFlow" style="height: 45px; width: 45px; object-fit: contain;"><span>TensorFlow</span></div>
            <div class="tech-icon"><img src="{{ site.baseurl }}/assets/svg/PyTorch.svg" alt="PyTorch" style="height: 45px; width: 45px; object-fit: contain;"><span>PyTorch</span></div>
            <div class="tech-icon"><img src="{{ site.baseurl }}/assets/svg/Keras.svg" alt="Keras" style="height: 45px; width: 45px; object-fit: contain;"><span>Keras</span></div>
            <div class="tech-icon"><img src="{{ site.baseurl }}/assets/svg/Caffe.svg" alt="Caffe" style="height: 45px; width: 45px; object-fit: contain;"><span>Caffe</span></div>
            <div class="tech-icon"><img src="{{ site.baseurl }}/assets/svg/Hugging-Face.svg" alt="Hugging Face" style="height: 45px; width: 45px; object-fit: contain;"><span>Hugging Face</span></div>
        </div>
    </div>
</div>

<div class="ask-me-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <h2>Ask Me Anything</h2>
                <form action="https://formspree.io/f/your_form_id" method="POST">
                    <div class="form-group">
                        <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="_replyto" class="form-control" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea name="message" class="form-control" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="follow-me-section">
    <div class="container">
        <h4>Join me on social media</h4>
        <div class="social-icons">
            <a href="https://twitter.com/Sanj_AI_space" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://linkedin.com/in/sanjayks2317" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>
</div>
