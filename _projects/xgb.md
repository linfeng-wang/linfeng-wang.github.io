---
layout: page
title: Treatment outcome prediction for Clinical Records
description:  A multi-stage machine learning framework for stepwise prediction of tuberculosis treatment outcomes - Integrating gradient boosted decision trees and feature-level analysis for clinical decision support
img: assets/img/xgb1.png
importance: 2
category: work
---

<!-- [Publication](https://www.biorxiv.org/content/10.1101/2025.01.13.632698v1.abstract) -->

Built a multi-stage machine learning model using XGBoost to predict tuberculosis treatment outcomes across different clinical checkpoints.

Integrated genomic features, patient metadata, and radiological information to support decision-making in resource-constrained healthcare settings.

Designed the framework to be robust to missing data and scalable across diverse clinical environments using TB Portals data.

Demonstrated strong predictive performance, particularly in early-stage outcome assessment, enabling prioritization and risk stratification in TB management.

<br>


<div style="display: flex; justify-content: center; gap: 2em; margin-top: 2em; text-align: center; flex-wrap: nowrap;">

  <div>
    <img src="/assets/img/xgb1.png" alt="TOAST Image 1" style="width: 800px; margin: 1em; border-radius: 4px;">
    <p style="color: #ccc; font-size: 0.95rem; margin-top: -0.5em;">Predictive accuracy across the different models</p>
  </div>

</div>

  Model 1 uses only demographic features (demographics and socioeconomic data). 
  Model 2 adds microbiological features (drug resistance and health levels), improving sensitivity and accuracy. 
  Model 3 adds in X-ray based features (lung localisation and severity scores), further enhancing performance. 
  Model 4 incorporates demographic, microbiological and treatment feature levels, including Treatment data (regimen and adherence), achieving the highest metrics. This stepwise progression highlights how additional diagnostic and treatment data improve predictive accuracy.
