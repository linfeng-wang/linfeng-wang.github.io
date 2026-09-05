---
layout: page
title: TB treatment outcome prediction
description: Staged risk prediction from clinical records, built for messy real-world data
img: assets/img/xgb1.png
importance: 4
category: PhD
---

Preprint on *Research Square* (2025) &middot;
[Preprint](https://doi.org/10.21203/rs.3.rs-7558046/v1)

Clinicians do not get all the information about a patient at once. This
framework predicts tuberculosis treatment outcomes in stages, so a useful
estimate is available at each point in care rather than only at the end.

#### Approach

- Multi-stage gradient boosted decision tree (XGBoost) models, one per clinical checkpoint
- Combines genomic features, patient metadata and radiological information
- Built on TB Portals data, and designed to degrade gracefully when fields are missing

#### Results

- Strong predictive performance, strongest at the early-stage checkpoints where a prediction is most actionable
- Feature-level analysis surfaces which inputs drive each prediction, supporting clinical decision-making
- Intended for resource-constrained settings, where the cheapest available features still give a usable signal
