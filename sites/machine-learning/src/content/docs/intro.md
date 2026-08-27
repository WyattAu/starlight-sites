---

date: 2026-07-23T21:57:32+01:00
title: "Machine Learning - Wyatt's Notes"
description: "Study notes for Machine Learning with worked examples, practice problems, and key concepts for exam preparation."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "Intro", "url": "https://machine-learning.wyattau.com/intro"}]
}
</script>

## Introduction to Machine Learning

Machine learning is a subfield of artificial intelligence that enables systems to learn from data and improve their performance without explicit programming. This site covers the mathematical foundations, algorithms, and practical considerations of modern ML.

## Core Concepts

### What Is Machine Learning?

Machine learning algorithms identify patterns in data and use those patterns to make predictions or decisions. The three main paradigms are:

- **Supervised learning:** Training on labeled data (input-output pairs) to learn a mapping function $f: X \rightarrow Y$
- **Unsupervised learning:** Finding structure in unlabeled data (clustering, dimensionality reduction)
- **Reinforcement learning:** Learning through trial and error by maximizing cumulative reward

### The Learning Problem

Given a dataset $\mathcal{D} = \{(x_i, y_i)\}_{i=1}^{n}$ where $x_i \in \mathbb{R}^d$ are features and $y_i$ are labels, find a function $h: \mathbb{R}^d \rightarrow \mathcal{Y}$ that generalizes to unseen data.

The fundamental trade-off is between:

- **Bias:** error from overly simplistic assumptions (underfitting)
- **Variance:** error from sensitivity to training data fluctuations (overfitting)

$$\text{Expected Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}$$

### Model Evaluation

**Training set / validation set / test set split:** Never evaluate on training data. Use validation for hyperparameter tuning, test set only for final reporting.

**Cross-validation:** k-fold CV partitions data into k subsets, training on k-1 and validating on the remaining fold. Reduces variance of performance estimates.

**Metrics:**

- Classification: accuracy, precision, recall, F1-score, AUC-ROC
- Regression: MSE, MAE, $R^2$

## Supervised Learning Algorithms

### Linear Regression

Fits $h(x) = w^T x + b$ by minimizing mean squared error:

$$\mathcal{L}(w) = \frac{1}{n} \sum_{i=1}^{n} (y_i - w^T x_i - b)^2$$

Closed-form solution (normal equation): $w = (X^T X)^{-1} X^T y$

**When to use:** Linear relationships, interpretable models, baseline comparisons.

### Logistic Regression

For binary classification, models $P(y=1|x) = \sigma(w^T x + b)$ where $\sigma(z) = \frac{1}{1+e^{-z}}$.

Minimizes binary cross-entropy:

$$\mathcal{L}(w) = -\frac{1}{n}\sum_{i=1}^{n} [y_i \log h(x_i) + (1-y_i)\log(1-h(x_i))]$$

### Decision Trees

Partitions feature space through recursive binary splits. Each internal node tests a feature, each leaf predicts a class (classification) or value (regression).

**Advantages:** Interpretable, handles mixed data types, no feature scaling needed.
**Disadvantages:** Prone to overfitting, unstable (small data changes alter tree structure).

### Support Vector Machines

Finds the maximum-margin hyperplane separating classes. For linearly separable data:

$$\min_{w,b} \frac{1}{2}\|w\|^2 \quad \text{subject to} \quad y_i(w^T x_i + b) \geq 1$$

The kernel trick extends SVMs to non-linear boundaries: $K(x_i, x_j) = \phi(x_i)^T \phi(x_j)$

Common kernels: polynomial, RBF (Gaussian), sigmoid.

### Ensemble Methods

**Random Forest:** Bagging with decision trees. Trains multiple trees on bootstrap samples, aggregates predictions. Reduces variance.

**Gradient Boosting:** Sequentially trains weak learners, each correcting the previous ensemble's errors. XGBoost, LightGBM, and CatBoost are popular implementations.

## Unsupervised Learning

### K-Means Clustering

Partitions data into k clusters by iteratively:

1. Assigning each point to the nearest centroid
2. Recomputing centroids as cluster means

Converges to a local minimum. Sensitivity to initialization addressed by k-means++.

### Principal Component Analysis (PCA)

Finds orthogonal directions of maximum variance. Projects data onto the top $k$ eigenvectors of the covariance matrix $\Sigma = \frac{1}{n}X^TX$.

**Use cases:** Dimensionality reduction, visualization, noise reduction.

### Gaussian Mixture Models (GMM)

Soft clustering using $k$ Gaussian distributions. Each point has a probability of belonging to each cluster. Estimated via Expectation-Maximization (EM).

## Neural Networks

### Perceptron and Multi-Layer Networks

A single neuron computes $y = \sigma(w^T x + b)$. Multi-layer networks (MLPs) stack layers of neurons with non-linear activations to learn complex mappings.

**Common activations:** ReLU, sigmoid, tanh, softmax (output layer for classification).

### Training: Backpropagation

Computes gradients of the loss with respect to all parameters using the chain rule. Gradients flow backward from output to input layers.

**Optimization:** Stochastic Gradient Descent (SGD) with momentum, Adam, AdaGrad, RMSprop.

$$w_{t+1} = w_t - \eta \nabla_w \mathcal{L}(w_t)$$

### Convolutional Neural Networks (CNNs)

Specialized for grid-structured data (images). Convolutional layers apply learnable filters, pooling layers reduce spatial dimensions.

Key architectures: LeNet, AlexNet, VGG, ResNet, EfficientNet.

### Recurrent Neural Networks (RNNs)

Process sequential data by maintaining hidden states. LSTMs and GRUs address the vanishing gradient problem through gating mechanisms.

### Transformers

Use self-attention to process sequences in parallel. The attention mechanism computes weighted sums of all positions:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

Transformers underpin modern language models (BERT, GPT, T5).

## Practical Considerations

### Feature Engineering

- Normalize/standardize features (z-score, min-max scaling)
- Handle missing values (imputation, removal)
- Encode categorical variables (one-hot, label encoding)
- Feature selection: filter methods, wrapper methods, embedded methods

### Dealing with Imbalanced Data

- Resampling: oversample minority class, undersample majority class
- Synthetic data: SMOTE (Synthetic Minority Over-sampling Technique)
- Cost-sensitive learning: assign higher misclassification cost to minority class
- Evaluation: use precision-recall AUC instead of accuracy

### Hyperparameter Tuning

- Grid search: exhaustive search over parameter grid
- Random search: sample parameters from distributions
- Bayesian optimization: model the objective function and choose next evaluation points
- Early stopping: halt training when validation performance plateaus

## Common Pitfalls

1. **Data leakage:** Using information from the test set during training or feature engineering
2. **Overfitting:** Model memorizes training data but fails on new data. Mitigate with regularization, dropout, early stopping, more data
3. **Ignoring class imbalance:** A model predicting majority class can achieve high accuracy but be useless
4. **Not preprocessing data:** Neural networks and SVMs are sensitive to feature scales
5. **Wrong evaluation metric:** Accuracy is misleading for imbalanced datasets
6. **P-hacking:** Trying many models and reporting the best without accounting for multiple comparisons

## Intuition

**Machine learning finds patterns in data to make predictions:** Instead of programming explicit rules, ML algorithms learn patterns from data. The quality of predictions depends on the quality of data, the appropriateness of the model, and the evaluation methodology.

**Why it matters:** ML powers recommendation systems, medical diagnosis, autonomous vehicles, and natural language processing. Understanding ML is essential for modern data science.

**The key insight:** The bias-variance trade-off is the central challenge — simple models underfit (high bias), complex models overfit (high variance), and the best model balances both.

## Summary

Machine learning spans a rich landscape of algorithms and techniques. The field requires understanding both the mathematical foundations (linear algebra, probability, optimization) and practical engineering (data preprocessing, evaluation, deployment). The accompanying pages cover advanced topics including attention mechanisms, generative models, reinforcement learning, and transfer learning.

## Worked Examples

### Example 1: Gradient Descent for Linear Regression

**Problem:** Given a dataset of house sizes (x) and prices (y), perform one step of gradient descent to update the weights of a linear model y = wx + b.

```python
## Dataset: (size in m^2, price in $1000s)
X = [1.0, 2.0, 3.0, 4.0, 5.0]
Y = [2.0, 4.0, 5.0, 4.0, 5.0]

# Initial parameters
w = 0.5
b = 1.0
learning_rate = 0.01
n = len(X)

# Forward pass: compute predictions
predictions = [w * x + b for x in X]

# Compute loss (Mean Squared Error)
errors = [pred - y for pred, y in zip(predictions, Y)]
mse = sum(e**2 for e in errors) / n
print(f"Initial MSE: {mse:.4f}")

# Compute gradients
dw = (2/n) * sum(e * x for e, x in zip(errors, X))
db = (2/n) * sum(errors)

# Update parameters
w_new = w - learning_rate * dw
b_new = b - learning_rate * db

print(f"Updated w: {w_new:.4f}, b: {b_new:.4f}")

# Verify new loss
new_predictions = [w_new * x + b_new for x in X]
new_mse = sum((p - y)**2 for p, y in zip(new_predictions, Y)) / n
print(f"New MSE: {new_mse:.4f}")
```

**Solution:** Initial MSE is approximately 1.64. After one gradient descent step, w decreases toward a value that better fits the data, and b adjusts to reduce bias. The new MSE should be lower than the initial, confirming the update moved in the correct direction.

**Explanation:** Gradient descent computes the partial derivatives of the loss function with respect to each parameter. The gradients point in the direction of steepest ascent, so subtracting them (scaled by the learning rate) moves the parameters toward the minimum. The learning rate controls step size -- too large causes divergence, too small causes slow convergence.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "Intro", "url": "https://machine-learning.wyattau.com/intro"}]
}
</script>

### Example 2: K-Means Clustering by Hand

**Problem:** Cluster the following 2D points into k=2 clusters using one iteration of K-means.

```python
import numpy as np

# Points
points = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

# Initial centroids (chosen randomly)
centroids = np.array([[1, 2], [8, 8]])

# Step 1: Assign each point to nearest centroid
def assign_clusters(points, centroids):
    distances = np.linalg.norm(points[:, np.newaxis] - centroids, axis=2)
    return np.argmin(distances, axis=1)

labels = assign_clusters(points, centroids)
print(f"Cluster assignments: {labels}")

# Step 2: Recompute centroids as mean of assigned points
new_centroids = np.array([
    points[labels == i].mean(axis=0) for i in range(len(centroids))
])
print(f"New centroids: {new_centroids}")
```

**Solution:**

- Cluster 0 (nearest to [1,2]): points [1,2], [1.5,1.8], [1,0.6] -> centroid becomes [1.17, 1.47]
- Cluster 1 (nearest to [8,8]): points [5,8], [8,8], [9,11] -> centroid becomes [7.33, 9.0]

**Explanation:** K-means alternates between two steps: (1) assign each point to the nearest centroid using Euclidean distance, and (2) recompute centroids as the mean of all points assigned to that cluster. After convergence, the algorithm minimises within-cluster sum of squares.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "Intro", "url": "https://machine-learning.wyattau.com/intro"}]
}
</script>

### Example 3: Precision, Recall, and F1 Score

**Problem:** A binary classifier produces the following predictions on 10 samples. Compute accuracy, precision, recall, and F1 score.

```python
# Ground truth and predictions
y_true = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
y_pred = [1, 1, 1, 0, 0, 1, 0, 0, 0, 0]

# Compute confusion matrix components
tp = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 1)
fp = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 1)
tn = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 0)
fn = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 0)

print(f"TP={tp}, FP={fp}, TN={tn}, FN={fn}")

accuracy = (tp + tn) / (tp + fp + tn + fn)
precision = tp / (tp + fp) if (tp + fp) > 0 else 0
recall = tp / (tp + fn) if (tp + fn) > 0 else 0
f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0

print(f"Accuracy:  {accuracy:.2f}")
print(f"Precision: {precision:.2f}")
print(f"Recall:    {recall:.2f}")
print(f"F1 Score:  {f1:.2f}")
```

**Solution:**

- TP=3, FP=1, TN=4, FN=2
- Accuracy = 7/10 = 0.70
- Precision = 3/4 = 0.75
- Recall = 3/5 = 0.60
- F1 = 2 *0.75* 0.60 / (0.75 + 0.60) = 0.67

**Explanation:** Accuracy measures overall correctness but is misleading for imbalanced datasets. Precision measures how many predicted positives are actually positive. Recall measures how many actual positives are detected. F1 is the harmonic mean of precision and recall, balancing both concerns. For imbalanced datasets, F1 is more informative than accuracy.

## Cross-References

- **[Site Home](../../):** Main landing page for machine-learning notes.
- **[Practice](../../practice-*):** Practice problems for revision.
