---
layout: page
title: GNN for positive selection detection
description:  Decoding Positive Selection in Mycobacterium tuberculosis with Phylogeny-Guided Graph Attention Models
img: assets/img/gnn1.png
importance: 2
category: work
---

<!-- [Publication](https://www.biorxiv.org/content/10.1101/2025.01.13.632698v1.abstract) -->

Developed a graph attention network (GAT) model that integrates phylogenetic tree structure and SNP presence to detect positively selected mutations in Mycobacterium tuberculosis.

Leveraged attention-based deep learning to focus on topologically informative regions within evolutionary graphs, enhancing interpretability and biological relevance.

Achieved strong performance, and identified high-confidence adaptive mutations previously classified as uncertain by WHO.

Demonstrated the model’s capability to uncover novel resistance markers and support long-term genomic surveillance in TB.


<br>


<div style="display: flex; justify-content: center; gap: 2em; margin-top: 2em; text-align: center; flex-wrap: nowrap;">

  <div>
    <img src="/assets/img/gnn1.png" alt="TOAST Image 1" style="width: 320px; margin: 1em; border-radius: 4px;">
    <p style="color: #ccc; font-size: 0.95rem; margin-top: -0.5em;">Phylogeny-informed graph construction and node feature propagation using attention-based graph neural networks</p>
  </div>

  <div>
    <img src="/assets/img/gnn2.png" alt="TOAST Image 2" style="width: 320px; margin: 1em; border-radius: 4px;">
    <p style="color: #ccc; font-size: 0.95rem; margin-top: -0.5em;">edge-level attention weights in the first GAT layer for mutation network plot corresponding to the rpob-p.Ser450Leu mutation (red: mutation present, grey: mutation absent). High attention (yellow/green)</p>
  </div>

</div>
