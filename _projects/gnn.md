---
layout: page
title: GNN for positive selection
description: Reading evolutionary signal off phylogenetic trees with graph attention
img: assets/img/gnn1.png
importance: 3
category: PhD
---

Published in *BMC Bioinformatics* (2026) &middot;
[Paper](https://doi.org/10.1186/s12859-026-06583-0)

Mutations under positive selection are the ones most likely to matter clinically,
but distinguishing them from neutral variation is hard. Standard methods treat
mutations independently and discard the evolutionary structure that connects
them. This model reads that structure directly.

#### Approach

- A graph attention network (GAT) that combines phylogenetic tree topology with SNP presence
- Attention lets the model weight topologically informative parts of the tree, which also makes its decisions inspectable
- Trained and evaluated on *Mycobacterium tuberculosis* phylogenies

#### Results

- 88% accuracy in identifying positively selected mutations
- Flagged high-confidence adaptive mutations that the WHO catalogue currently lists as uncertain
- Points toward novel resistance markers usable for long-term genomic surveillance
