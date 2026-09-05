---
layout: page
title: Detecting mixed TB infections
description: Using Gaussian mixture models to find multiple strains in one patient
img: assets/img/gmm1.png
importance: 6
category: PhD
---

Published in *Scientific Reports* (2023) &middot;
[Paper](https://www.nature.com/articles/s41598-023-44341-x)

A patient can carry more than one strain of tuberculosis at once. Mixed
infections distort resistance calls and complicate treatment, but they are easy
to miss in standard sequencing pipelines.

#### Approach

- A Python pipeline using Gaussian mixture models to detect mixed infections from whole-genome sequencing data
- Modelled expected allele-frequency distributions across more than 5,000 public isolates
- Benchmarked detection thresholds against those distributions

#### Findings

- Mixed infections are significantly associated with genotypic drug resistance
- That association points to both greater transmission complexity and a diagnostic blind spot
- The method is designed to slot into existing TBProfiler workflows for strain-level resistance resolution
