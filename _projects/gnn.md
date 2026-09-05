---
layout: project
title: "GNN for positive selection"
description: "Reading evolutionary signal off phylogenetic trees with graph attention"
img: assets/img/gnn1.png
img_alt: "Phylogenetic tree, pairwise distance matrix, and the resulting weighted graph with attention update equations"
img_caption: "From phylogeny to graph. (a) A tree of eight isolates, with those carrying the mutation of interest in red. (b) The pairwise distance matrix derived from that tree. (c) The weighted graph built from those distances, and the attention update the model applies to it."
importance: 3
category: PhD
publication: "Published in <em>BMC Bioinformatics</em> (2026)"
links:
  - label: "Paper"
    url: "https://doi.org/10.1186/s12859-026-06583-0"
---

Mutations under positive selection are the ones most likely to matter
clinically, but telling them apart from neutral variation is hard. Standard
methods treat mutations independently and throw away the evolutionary structure
that connects them. This model reads that structure directly.

#### Reading the figure

Panel **a** is a phylogeny of eight isolates. Three of them, B, D and G, carry
the mutation being tested, marked in red. The whole question sits in that
pattern: is the mutation appearing repeatedly because it is useful, or does it
just sit in one branch of the family tree because it was inherited once?

Panel **b** converts the tree into numbers. Each cell is the distance between
two isolates along the tree, so it records how closely related each pair is
without needing the tree drawing itself.

Panel **c** turns those distances into a weighted graph and runs graph
attention over it. Each node's representation is updated as a weighted sum over
its neighbours, and the attention weight decides how much each neighbour
counts. That is what lets the model use the shape of the tree rather than just
the list of mutations. A mutation that keeps surfacing between distantly
related isolates is evidence of independent, recurrent emergence, which is the
signature of positive selection. The same mutation confined to one tight clade
is more likely a single inherited event. The attention weights are also what
makes the model inspectable: you can see which comparisons drove a given call
rather than taking the score on trust.

#### Approach

- A graph attention network (GAT) combining phylogenetic tree topology with SNP presence
- Attention weights the topologically informative parts of the tree, which also makes decisions inspectable
- Trained and evaluated on *Mycobacterium tuberculosis* phylogenies

#### Results

- 88% accuracy in identifying positively selected mutations
- Flagged high-confidence adaptive mutations that the WHO catalogue currently lists as uncertain
- Points toward novel resistance markers usable for long-term genomic surveillance
