---
layout: post
date: 2023-03-23
inline: false
title: TB-ML—a framework for comparing machine learning approaches to predict drug resistance of Mycobacterium tuberculosis

related_posts: false
---

Contributed in the below publication: https://doi.org/10.1093/bioadv/vbad040


<b>Motivation:</b> Machine learning (ML) has shown impressive performance in predicting antimicrobial resistance (AMR)from sequence data, including for Mycobacterium tuberculosis, the causative agent of tuberculosis. However,current ML development and publication practices make it difficult for researchers and clinicians to use, test or reproduce published models.

<b>Results:</b> We packaged a number of published and unpublished ML models for predicting AMR of M.tuberculosis into Docker containers. Similarly, the pipelines required for pre-processing genomic data into the formats required by the models were also packaged into separate containers. By following a minimal container I/O standard, weensured as much interoperability as possible. We also created a command-line application, TB-ML, which can beused to easily combine pre-processing and prediction containers into complete pipelines ready for predicting resistance from novel, raw data with a single command. As long as there is adherence to this minimal standard for the container interface, containers produced by researchers holding new models can likewise be included in these pipelines, making benchmark comparisons of different models simple and facilitating faster uptake in the clinic.

<b>Availability and implementation:</b> TB-ML contains a simple Docker API written in Python and is available at https://github.com/jodyphelan/tb-ml. Example Docker containers for resistance prediction and corresponding data pre-processing as well as a tutorial on how to create new containers for TB-ML are available at https://tb-ml.github.io/tb-ml-containers/.
