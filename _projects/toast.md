---
layout: page
title: TOAST amplicon designer
description: Turning genome-scale mutation data into an optimised TB sequencing panel
img: assets/img/toast1.png
importance: 1
category: PhD
---

Published in *BMC Genomics* (2025) &middot;
[Paper](https://doi.org/10.1186/s12864-025-12247-9) &middot;
[Web app](https://genomics.lshtm.ac.uk/webtoast/#/) &middot;
[Python package](https://pypi.org/project/toast-amplicon/)

TOAST designs targeted amplicon panels for detecting drug resistance in
*Mycobacterium tuberculosis*. Sequencing whole genomes is often too costly for
routine diagnostics, so the practical question is which small set of regions to
amplify. TOAST answers that from the data.

#### Approach

- Ranks candidate regions using mutation-frequency data drawn from over 50,000 TB genomes
- Optimises primer selection so each amplicon carries as much resistance information as possible
- Accepts custom inputs, so panels can be retargeted to other organisms or resistance profiles

#### Results

- A final 33-amplicon panel covering over 97% of key resistance markers
- Validated experimentally using Nanopore sequencing

#### Availability

Command-line tool, installable Python package, and an interactive web app.
