# Overfitted Thoughts - A Customized Mediumish Jekyll Theme

This is the repository for my personal blog, "Overfitted Thoughts." It is built on the [Jekyll](https://jekyllrb.com/) static site generator and uses a heavily customized version of the beautiful [Mediumish](https://github.com/wowthemesnet/mediumish-jekyll-theme) theme.

This README provides an overview of the theme's features, the extensive customizations made, and a step-by-step guide for anyone looking to use this template for their own personal blog.

**[View Live Demo](https://sanjay-ks23.github.io/)**

---

## Summary of Customizations

The original Mediumish theme provided a fantastic foundation, but numerous changes were made to create a more modern, personalized, and streamlined experience.

Here is a summary of the key modifications:

*   **Complete Color Overhaul:** The entire color palette was replaced with a unified teal-based scheme. The primary colors are `#008080` and a darker `#005a5a` for gradients and hover effects, creating a consistent and modern aesthetic.
*   **Modern UI/UX Enhancements:**
    *   **Gradients & Shadows:** Subtle gradients have been added to buttons and other UI elements. Box shadows on interactive elements have been enhanced to create a sense of depth.
    *   **Cleaner Navigation:** The search bar in the navigation has been restyled to a clean, minimalist underlined look, removing the default border.
*   **Redesigned "Explore Topics" Section:** This section on the homepage was rebuilt with a two-column layout, featuring a prominent gradient background and a clean white separator for a more engaging user experience.
*   **Revamped "About" Page:** The "About" page was transformed from a simple text page into a professional, resume-style profile. The layout is now left-aligned, and the content is structured to highlight key information, while the "Contact Me" and "Tech Stack" sections are preserved.
*   **Streamlined Blog Post Layout:** The individual blog post pages have been redesigned for a cleaner, more focused reading experience.
    *   The main site title is hidden, making the post title the primary focus.
    *   The author's avatar and name are now prominently displayed directly beneath the title.
    *   Unnecessary elements like sidebars, share buttons, follow buttons, ratings, and tags have been removed.
    *   The previous/next post navigation has been removed for a less cluttered footer.

---

## How to Use This Theme

This guide provides instructions for setting up this theme for your own personal blog, even if you have no prior technical experience.

### Step 1: Fork and Rename the Repository

1.  **Fork this repository:** Click the "Fork" button in the top-right corner of this page. This will create a copy of this repository in your own GitHub account.
2.  **Rename your forked repository:**
    *   Go to the main page of your newly forked repository.
    *   Click on the "Settings" tab.
    *   Under "Repository name," rename the repository to `your-username.github.io`, replacing `your-username` with your actual GitHub username.
    *   Click "Rename."

Your personal blog will now be live at `https://your-username.github.io`.

### Step 2: Configure the Site

The most important file for configuring your site is `_config.yml`. This file contains all the main settings for your blog. Open this file and edit the following fields:

```yaml
# Site
name: "Your Blog's Name"
title: "Your Blog's Title"
description: "A short description of your blog."
logo: 'assets/images/your-logo.png'
favicon: 'assets/images/your-favicon.ico'
url: "https://your-username.github.io"

# Authors
authors:
  sanjay: # You can change "sanjay" to your own name or a nickname
    name: Your Name
    display_name: Your Display Name
    avatar: 'assets/images/your-avatar.png'
    email: your.email@example.com
    twitter: https://twitter.com/your-twitter-handle
    description: "A short bio about yourself."
```

*   **`name`, `title`, `description`**: Update these with your blog's information.
*   **`logo`, `favicon`, `avatar`**: Replace the images in the `assets/images/` directory with your own and update the paths here.
*   **`url`**: This is very important. Make sure this is the correct URL for your GitHub Pages site.
*   **`authors`**: Update the author information with your own details. You can change `sanjay` to any identifier you like.

### Step 3: Update the "About" Page

The "About" page is located at `_pages/about.md`. You can edit this file to add your own content. The page is designed to be a professional profile, but you can customize it to your liking by editing the HTML and Markdown in this file.

### Step 4: Add Your Own Blog Posts

All blog posts are located in the `_posts` directory. To add a new post, create a new file in this directory with the following format:

`YYYY-MM-DD-your-post-title.md`

For example: `2025-06-28-my-first-post.md`

At the top of each post file, you will need to include the following "front matter":

```yaml
---
layout: post
title:  "Your Post Title"
author: sanjay # This should match the author identifier in _config.yml
categories: [ General, Tech ] # Add any categories you like
image: assets/images/your-post-image.jpg
---
```

You can then write your blog post content below the front matter using Markdown.

### Step 5: Replace Images

All images for the site are located in the `assets/images/` directory. You can replace the existing images with your own to personalize the site.

---

## Local Development (Optional)

If you want to preview your changes locally before pushing them to GitHub, you can run the site on your own computer. This requires you to have [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Jekyll](https://jekyllrb.com/docs/installation/) installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-username.github.io.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-username.github.io
    ```
3.  **Install the dependencies:**
    ```bash
    bundle install
    ```
4.  **Run the Jekyll server:**
    ```bash
    bundle exec jekyll serve
    ```

The site will be available at `http://localhost:4000`.

---

## License

This theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

This project is a heavily customized version of the [Mediumish Jekyll Theme](https://github.com/wowthemesnet/mediumish-jekyll-theme) by [WowThemes.net](https://www.wowthemes.net).
