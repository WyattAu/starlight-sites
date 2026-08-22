---
date: 2026-07-23T13:50:43+01:00
title: "Machine Learning Deep Dive - Wyatt's Notes"
description: Comprehensive machine learning guide covering algorithms, neural networks, and practical applications.
---

## Introduction to Machine Learning

- What is ML?
- Types of ML
- ML workflow
- Evaluation metrics

## Supervised Learning

- Linear regression
- Logistic regression
- Decision trees
- Random forests
- SVM

## Unsupervised Learning

- K-means clustering
- Hierarchical clustering
- PCA
- t-SNE

## Neural Networks

- Perceptrons
- Backpropagation
- Activation functions
- Regularization

## Deep Learning

- CNNs
- RNNs
- LSTMs
- Transformers
- GANs

## Practical ML

- Feature engineering
- Hyperparameter tuning
- Model deployment
- MLOps

## See Also

- [Machine Learning](./)
- [About This Site](./about)
- [advanced topics](./advanced-topics)

## Worked Examples

### Example 1: Bias-Variance Trade-off

A model with high bias (underfitting) makes strong assumptions and misses
relevant patterns. A model with high variance (overfitting) captures noise
along with signal. The total error decomposes as:

$$\text{Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}$$

A linear regression on non-linear data has high bias. A decision tree with no
depth limit has high variance. Regularisation (L1/L2) and ensemble methods
(bagging, boosting) navigate this trade-off.

### Example 2: Cross-Validation

K-fold cross-validation splits data into K folds, training on K-1 and testing
on 1, rotating through all folds. This gives a more reliable estimate of
generalisation performance than a single train/test split, especially with
limited data.

## Common Pitfalls

1. **Evaluating on training data**: Always use a held-out test set or
   cross-validation. Training accuracy is not generalisation accuracy.
2. **Ignoring class imbalance**: 99% accuracy on a dataset with 99% negative
   class means the model learned nothing. Use precision, recall, F1, or AUC.
3. **Feature scaling for distance-based methods**: KNN, SVM, and k-means
   require normalised features. Tree-based methods do not.

## Summary

Machine learning encompasses supervised learning (classification, regression),
unsupervised learning (clustering, dimensionality reduction), and reinforcement
learning. Model selection requires understanding the bias-variance trade-off,
regularisation, and proper evaluation via cross-validation. Deep learning
extends classical ML with neural networks (CNNs, RNNs, Transformers) for
unstructured data. Practical ML requires feature engineering, hyperparameter
tuning, and deployment pipelines (MLOps).
