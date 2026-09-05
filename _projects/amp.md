---
layout: page
title: Antimicrobial peptide design
description: An LSTM generative model that proposes new peptides active against TB
img: assets/img/amp1.png
importance: 2
category: PhD
---

Published in *Bioinformatics Advances* (2025) &middot;
[Paper](https://doi.org/10.1093/bioadv/vbaf274)

Antimicrobial peptides are a promising route around conventional drug
resistance, but the search space of possible sequences is vast. This project
pairs a classifier that recognises TB-active peptides with a generator that
proposes new ones.

#### Approach

- Benchmarked several LSTM architectures for classifying TB-active antimicrobial peptides
- Used transfer learning to compensate for the small amount of TB-specific labelled data
- Built a generative pipeline to sample novel candidate sequences

#### Results

- 90% classification accuracy and 0.97 AUC, with transfer learning giving the largest gain under limited data
- 94 novel non-toxic candidate peptides generated, 10 of which met physicochemical and structural criteria
- Motif and structural divergence analysis confirmed the candidates were genuinely novel rather than memorised

Full code is released for reproducibility.
