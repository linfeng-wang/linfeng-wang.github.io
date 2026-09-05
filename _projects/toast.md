---
layout: project
title: TOAST amplicon designer
description: Turning genome-scale mutation data into an optimised TB sequencing panel
img: assets/img/toast1.png
img_alt: Circos plot of the M. tuberculosis genome with drug-resistance genes and the designed amplicon panel
img_caption: The designed panel (pale blue blocks, inner ring) tiled against the drug-resistance genes of the <em>M. tuberculosis</em> genome (coloured outer ring). Dark ticks inside each gene band mark resistance-associated mutation positions.
importance: 1
category: PhD
publication: Published in <em>BMC Genomics</em> (2025)
links:
  - label: "Paper"
    url: "https://doi.org/10.1186/s12864-025-12247-9"
  - label: "Web app"
    url: "https://genomics.lshtm.ac.uk/webtoast/#/"
  - label: "Python package"
    url: "https://pypi.org/project/toast-amplicon/"
---

TOAST designs targeted amplicon panels for detecting drug resistance in
*Mycobacterium tuberculosis*. Sequencing whole genomes is often too costly for
routine diagnostics, so the practical question is which small set of regions to
amplify. TOAST answers that from the data.

#### Reading the figure

The outer ring is the *M. tuberculosis* genome, with the genes that carry
resistance mutations labelled around it: *gyrA* and *gyrB* for
fluoroquinolones, *rpoB* for rifampicin, *katG* and *inhA* for isoniazid,
*pncA* for pyrazinamide, the *embA*/*embB*/*embC* cluster for ethambutol,
*rrs* and *rpsL* for aminoglycosides, and so on. The dark ticks inside each
coloured band are individual resistance-associated positions drawn from the
mutation-frequency data.

The pale blue blocks on the inner ring are the amplicons TOAST selected, and
the design problem is visible in the gap between the two rings. Mutations are
not spread evenly: they cluster tightly in some genes and scatter across
others. So a good panel is not one amplicon per gene. It is a set of windows
placed to capture as many high-frequency positions as possible per unit of
sequencing, which is why genes like *embB* and *ethA* take several amplicons
while others are covered by one.

#### Approach

- Ranks candidate regions using mutation-frequency data drawn from over 50,000 TB genomes
- Optimises primer selection so each amplicon carries as much resistance information as possible
- Accepts custom inputs, so panels can be retargeted to other organisms or resistance profiles

#### Results

- A final 33-amplicon panel covering over 97% of key resistance markers
- Validated experimentally using Nanopore sequencing

#### Availability

Command-line tool, installable Python package, and an interactive web app.
