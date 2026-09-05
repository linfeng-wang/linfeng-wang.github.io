---
layout: project
title: "Antimicrobial peptide design"
description: "An LSTM generative model that proposes new peptides active against TB"
img: assets/img/amp1.png
img_alt: "Three generated peptide candidates shown as backbone, electrostatic surface and hydrophobicity surface"
img_caption: "Three generated candidates (rows a to c), each in three views: predicted backbone (i), surface coloured by charge (ii, blue positive and red negative), and surface coloured by hydrophobicity (iii, gold hydrophobic and teal hydrophilic)."
importance: 2
category: PhD
publication: "Published in <em>Bioinformatics Advances</em> (2025)"
links:
  - label: "Paper"
    url: "https://doi.org/10.1093/bioadv/vbaf274"
---

Antimicrobial peptides are a promising route around conventional drug
resistance, but the space of possible sequences is vast. This project pairs a
classifier that recognises TB-active peptides with a generator that proposes
new ones.

#### Reading the figure

Each row is one candidate the generator produced, and the three columns are
three ways of looking at the same molecule.

Column i is the predicted backbone. The three candidates fold differently, an
extended coil, a beta hairpin and an alpha helix, which is a first check that
the generator is not collapsing onto a single memorised shape.

Columns ii and iii are where the biology is. Column ii colours the surface by
charge: the candidates are strongly cationic, the blue that dominates each
structure, which is what draws an antimicrobial peptide to the negatively
charged bacterial membrane. Column iii colours the same surface by
hydrophobicity. Read the two together and the property that matters appears:
charge and hydrophobicity segregate onto opposite faces. That amphipathic
arrangement is the mechanistic signature of a membrane-disrupting peptide, and
it is what the structural validation stage was testing for. Producing a
plausible sequence is easy; producing one whose surface is organised this way
is the actual bar.

#### Approach

- Benchmarked several LSTM architectures for classifying TB-active antimicrobial peptides
- Used transfer learning to compensate for the small amount of TB-specific labelled data
- Built a generative pipeline to sample novel candidate sequences

#### Results

- 90% classification accuracy and 0.97 AUC, with transfer learning giving the largest gain under limited data
- 94 novel non-toxic candidate peptides generated, 10 of which met physicochemical and structural criteria
- Motif and structural divergence analysis confirmed the candidates were genuinely novel rather than memorised

Full code is released for reproducibility.
