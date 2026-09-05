---
layout: project
title: Detecting mixed TB infections
description: Using Gaussian mixture models to find multiple strains in one patient
img: assets/img/gmm1.png
img_alt: World map showing estimated mixed-infection rate by country
img_caption: Estimated mixed-infection rate by country across the public isolates analysed. The scale runs from 0 to roughly 0.05; grey marks countries with no data.
importance: 6
category: PhD
publication: Published in <em>Scientific Reports</em> (2023)
links:
  - label: "Paper"
    url: "https://www.nature.com/articles/s41598-023-44341-x"
---

A patient can carry more than one strain of tuberculosis at once. Mixed
infections distort resistance calls and complicate treatment, but they are easy
to miss in a standard sequencing pipeline, which tends to report a single
consensus genome per sample.

#### Reading the figure

Running the detector across more than 5,000 public genomes gives a
mixed-infection rate per country, mapped here.

Two things are worth noting about the scale. It tops out around 0.05, so even
the highest national rates are a small minority of cases, but that minority is
large enough to matter when the consequence is a wrong resistance profile.
Colombia is the clear outlier in yellow, with Russia, Brazil and parts of South
Asia and sub-Saharan Africa sitting in the middle of the range.

The grey areas deserve as much attention as the coloured ones. They are
countries with no public genomes available, and they include much of the region
where TB burden is highest. The map therefore shows where mixed infection has
been *measured*, which is not the same as where it occurs, and the gaps are a
statement about sequencing coverage rather than about the disease.

#### Approach

- A Python pipeline using Gaussian mixture models to detect mixed infections from whole-genome sequencing data
- Modelled expected allele-frequency distributions across more than 5,000 public isolates
- Benchmarked detection thresholds against those distributions

#### Findings

- Mixed infections are significantly associated with genotypic drug resistance
- That association points to both greater transmission complexity and a diagnostic blind spot
- The method is designed to slot into existing TBProfiler workflows for strain-level resistance resolution
