---
layout: post
title:  "An intuitive understanding of Gradient Descent and its successors"
author: sanjay
categories: [ Machine Learning ]
image: assets/images/posts/Gradient descent.png
---
# An intuitive understanding of Gradient Descent and its successors


In my previous post, I discussed loss functions in detail. and in this blog, we are going to go really indepth about Gradient Descent one of the ways to minimise these loss function and also look into their successors in greater detail.

Let us start with the basics and my opinion on Machine Learning,

## Understanding Machine Learning with an analogy?
During my undergrad one of my professors has the best possible analogy for Machine Learning, even though I didnt quite understand it back then, after working in the field for a while I can say that it is quite accurate. 

Take a box which has an irregular shape and can take up any shape it is being fitted into. Now think of the box under extreme force to make it fit into the shape, by fitting it we try to make the fit as perfect as possible while taking multiple things into consideration. Now how this correlates to Machine Learning is that the box is the model, the shape is the data and the force applied is the training process. The model tries to fit into the data by adjusting its edges and corners (parameters and weights) to make the best possible fit.

Now where does Gradient Descent come into picture here? This is a really interesting concept. Now when the box is being fit into the shape, there will be a lot of difference intially betwen the box and the shape, think of this difference as the loss, the more the difference the more the loss. Now to reduce this loss we need to push the box in the right direction, this is where Gradient Descent comes into picture. Gradient Descent is the force that pushes the box in the right direction to reduce the loss. 

