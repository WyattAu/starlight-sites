---
title: "Machine Learning Glossary — Key Terms and Definitions"
description: "Study notes for Machine Learning Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## ML Fundamentals

**Machine Learning (ML)**: A field of artificial intelligence where systems learn patterns from data to make decisions or predictions without being explicitly programmed.

**Artificial Intelligence (AI)**: The broader field of creating intelligent systems that can perform tasks requiring human-like reasoning and decision-making.

**Deep Learning**: A subset of machine learning using neural networks with many layers to learn hierarchical representations from data.

**Supervised Learning**: Learning from labeled training data, where the algorithm learns to map inputs to known outputs.

**Unsupervised Learning**: Learning from unlabeled data, discovering hidden patterns or groupings without predefined outputs.

**Semi-Supervised Learning**: Combining a small amount of labeled data with a large amount of unlabeled data for training.

**Reinforcement Learning**: Learning through trial and error with rewards or penalties, training an agent to take actions in an environment.

**Self-Supervised Learning**: A type of unsupervised learning where the data provides its own supervision (e.g., predicting masked words).

**Transfer Learning**: Applying knowledge learned from one task or domain to a different but related task.

**Feature**: An individual measurable property or characteristic of data used as input to a model.

**Label**: The output or target value that the model is trying to predict in supervised learning.

**Training Data**: The dataset used to teach the model patterns and relationships.

**Validation Data**: A separate dataset used to tune model hyperparameters and prevent overfitting.

**Test Data**: A held-out dataset used to evaluate the final model's performance on unseen data.

**Model**: A mathematical representation learned from training data that captures patterns and can make predictions.

**Algorithm**: A step-by-step procedure or formula for solving a problem or learning from data.

**Hyperparameter**: A configuration setting external to the model that is set before training (e.g., learning rate, number of layers).

**Parameter**: A model variable learned during training (e.g., weights and biases in a neural network).

**Epoch**: One complete pass through the entire training dataset during model training.

**Batch**: A subset of training examples used in one iteration of model training.

**Learning Rate**: A hyperparameter controlling the step size during gradient descent optimization.

## Supervised Learning Algorithms

**Linear Regression**: A regression algorithm modeling the relationship between input features and a continuous output using a linear function.

```python
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
```

**Logistic Regression**: A classification algorithm predicting the probability of a binary outcome using the sigmoid function.

```python
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(X_train, y_train)
```

**Decision Tree**: A tree-like model making decisions based on feature values, splitting data recursively.

**Random Forest**: An ensemble method combining multiple decision trees for improved accuracy and reduced overfitting.

```python
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
```

**Support Vector Machine (SVM)**: A classification algorithm finding the optimal hyperplane that maximizes the margin between classes.

**k-Nearest Neighbors (k-NN)**: A classification/regression algorithm that classifies based on the majority class of the k closest training examples.

**Naive Bayes**: A probabilistic classifier based on Bayes' theorem with the assumption of feature independence.

**Gradient Boosting**: An ensemble method sequentially building trees, where each tree corrects errors of the previous one.

```python
from sklearn.ensemble import GradientBoostingClassifier
model = GradientBoostingClassifier(n_estimators=100)
model.fit(X_train, y_train)
```

**XGBoost / LightGBM / CatBoost**: Optimized implementations of gradient boosting with improved performance and features.

**Neural Network**: A model composed of layers of interconnected nodes (neurons) that learn hierarchical representations.

## Unsupervised Learning Algorithms

**K-Means Clustering**: Partitions data into k clusters by minimizing the distance between points and their cluster centroids.

```python
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3)
labels = kmeans.fit_predict(X)
```

**Hierarchical Clustering**: Creates a tree of clusters by recursively merging or splitting groups based on distance.

**DBSCAN**: A density-based clustering algorithm that groups closely packed points and marks outliers.

**Principal Component Analysis (PCA)**: A dimensionality reduction technique projecting data onto orthogonal axes of maximum variance.

```python
from sklearn.decomposition import PCA
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)
```

**t-SNE**: A nonlinear dimensionality reduction technique for visualizing high-dimensional data in 2D or 3D.

**Autoencoder**: A neural network that learns to compress data into a latent representation and reconstruct it.

**Anomaly Detection**: Identifying unusual patterns or outliers that deviate from expected behavior.

**Association Rule Learning**: Discovering interesting relationships between variables in large datasets (e.g., market basket analysis).

## Neural Networks

**Artificial Neural Network (ANN)**: A computing system inspired by biological neural networks, consisting of layers of interconnected nodes.

**Neuron (Node)**: A processing unit in a neural network that computes a weighted sum of inputs and applies an activation function.

**Layer**: A collection of neurons operating at the same level in a network (input, hidden, output layers).

**Input Layer**: The first layer receiving raw data features.

**Hidden Layer**: Layers between input and output that learn intermediate representations.

**Output Layer**: The final layer producing the model's prediction.

**Activation Function**: A nonlinear function applied to neuron outputs to introduce nonlinearity (ReLU, sigmoid, tanh).

```python
import tensorflow as tf
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])
```

**Weight**: A parameter adjusted during training that determines the strength of connections between neurons.

**Bias**: An additional parameter added to neuron outputs to shift the activation function.

**Feedforward Network**: A network where connections only flow from input to output (no cycles).

**Recurrent Neural Network (RNN)**: A network with cyclic connections, processing sequential data by maintaining hidden state.

**Long Short-Term Memory (LSTM)**: An RNN variant with gating mechanisms to learn long-range dependencies.

**Gated Recurrent Unit (GRU)**: A simplified LSTM variant with fewer parameters, often equally effective.

**Convolutional Neural Network (CNN)**: A network using convolutional layers to process grid-like data (images, audio).

```python
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(28,28,1)),
    tf.keras.layers.MaxPooling2D((2,2)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(10, activation='softmax')
])
```

**Convolutional Layer**: A layer applying filters to input data to detect local patterns.

**Pooling Layer**: A layer reducing spatial dimensions by downsampling (max pooling, average pooling).

**Fully Connected Layer**: A layer where each neuron connects to every neuron in the previous layer.

**Transformer**: A neural network architecture using self-attention mechanisms, dominant in NLP.

```python
from transformers import AutoModel
model = AutoModel.from_pretrained("bert-base-uncased")
```

**Self-Attention**: A mechanism allowing each position in a sequence to attend to all other positions.

**Multi-Head Attention**: Running multiple attention mechanisms in parallel to capture different types of relationships.

**Positional Encoding**: Adding position information to sequence elements in transformers.

**Embedding Layer**: A layer mapping discrete values (words, categories) to dense vector representations.

## Training and Optimization

**Loss Function**: A function measuring how far the model's predictions are from the true values, guiding optimization.

**Mean Squared Error (MSE)**: Average of squared differences between predicted and actual values, common for regression.

**Cross-Entropy Loss**: A loss function measuring the difference between predicted probability distributions, common for classification.

**Gradient Descent**: An optimization algorithm iteratively adjusting parameters in the direction of steepest descent.

**Stochastic Gradient Descent (SGD)**: A variant of gradient descent using random subsets of data for each update.

**Adam Optimizer**: An adaptive learning rate optimizer combining momentum and RMSProp.

```python
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
```

**Backpropagation**: The algorithm computing gradients of the loss with respect to each parameter using the chain rule.

**Gradient Clipping**: Limiting gradient magnitude during training to prevent exploding gradients.

**Batch Normalization**: A technique normalizing layer inputs to stabilize and accelerate training.

**Dropout**: A regularization technique randomly deactivating neurons during training to prevent overfitting.

```python
model.add(tf.keras.layers.Dropout(0.5))
```

**Learning Rate Scheduling**: Adjusting the learning rate during training (e.g., step decay, cosine annealing).

**Early Stopping**: Halting training when validation performance stops improving to prevent overfitting.

**Weight Initialization**: Methods for setting initial parameter values (Xavier, He initialization).

**Momentum**: An optimization technique accelerating convergence by accumulating past gradients.

**Mini-Batch Training**: Training on small batches of data, balancing between full-batch and stochastic approaches.

## Evaluation Metrics

**Accuracy**: The proportion of correct predictions out of total predictions, suitable for balanced datasets.

**Precision**: The proportion of true positive predictions out of all positive predictions made.

**Recall (Sensitivity)**: The proportion of true positive predictions out of all actual positive cases.

**F1 Score**: The harmonic mean of precision and recall, balancing both metrics.

**Confusion Matrix**: A table showing true vs. predicted classifications (TP, TN, FP, FN).

**ROC Curve**: A plot of true positive rate vs. false positive rate across classification thresholds.

**AUC (Area Under the ROC Curve)**: A scalar metric summarizing classifier performance across all thresholds.

**Mean Absolute Error (MAE)**: Average of absolute differences between predicted and actual values.

**Root Mean Squared Error (RMSE)**: Square root of the average squared differences between predicted and actual values.

**R-Squared (R2)**: The proportion of variance in the dependent variable explained by the model.

**Log Loss**: A metric measuring the performance of a classifier that outputs probabilities.

**Top-k Accuracy**: Accuracy considering a prediction correct if the true label is among the top k predictions.

## Regularization

**Regularization**: Techniques that prevent overfitting by adding constraints or penalties to the model.

**L1 Regularization (Lasso)**: Adds the absolute value of weights to the loss function, encouraging sparsity.

**L2 Regularization (Ridge)**: Adds the squared magnitude of weights to the loss function, preventing large weights.

**Elastic Net**: Combines L1 and L2 regularization for balanced feature selection and weight shrinkage.

**Data Augmentation**: Artificially increasing training data diversity through transformations (rotation, flipping, cropping).

**Early Stopping**: Monitoring validation performance and stopping training when it begins to degrade.

**Dropout**: Randomly deactivating a fraction of neurons during each training step to prevent co-adaptation.

## ML Infrastructure and Tools

**Scikit-learn**: A Python library providing simple and efficient tools for classical machine learning.

```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
```

**TensorFlow**: An open-source deep learning framework developed by Google.

**PyTorch**: An open-source deep learning framework developed by Meta, known for its dynamic computation graph.

```python
import torch
model = torch.nn.Linear(10, 1)
```

**Keras**: A high-level neural network API running on top of TensorFlow.

**MLflow**: An open-source platform for managing the ML lifecycle, including experimentation, deployment, and model registry.

**Feature Store**: A centralized repository for storing, managing, and serving features for ML models.

**MLOps**: Practices combining machine learning, DevOps, and data engineering for reliable ML system deployment.

**Pipeline**: A sequence of data processing steps that can be chained together for reproducibility.

```python
from sklearn.pipeline import Pipeline
pipe = Pipeline([('scaler', StandardScaler()), ('model', LogisticRegression())])
pipe.fit(X_train, y_train)
```

**Cross-Validation**: A technique splitting data into k folds, training on k-1 folds and validating on the remaining fold.

```python
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)
```

**Hyperparameter Tuning**: The process of finding optimal hyperparameter values, using grid search, random search, or Bayesian optimization.

**Model Serving**: Deploying trained models to make predictions in production environments.

**Batch Inference**: Generating predictions on a collection of inputs offline rather than in real-time.

**Online Inference**: Generating predictions in real-time for individual inputs as they arrive.

## NLP and Computer Vision

**Natural Language Processing (NLP)**: A field of AI focused on enabling computers to understand, interpret, and generate human language.

**Tokenization**: Splitting text into smaller units (tokens) such as words, subwords, or characters.

**Word Embedding**: A dense vector representation of a word capturing its semantic meaning (Word2Vec, GloVe, FastText).

**BERT**: A bidirectional transformer pre-trained on language understanding tasks, widely used for NLP fine-tuning.

**GPT (Generative Pre-trained Transformer)**: An autoregressive language model generating text by predicting the next token.

**Object Detection**: Identifying and localizing objects within images, outputting bounding boxes and class labels.

**Semantic Segmentation**: Assigning a class label to every pixel in an image for dense scene understanding.

**Image Classification**: Assigning a single label to an entire image based on its content.

**Generative Adversarial Network (GAN)**: Two neural networks (generator and discriminator) trained adversarially to generate realistic data.

**Diffusion Model**: A generative model learning to denoise data progressively, producing high-quality samples.

## Related Terms

- See [Programming Glossary](glossary) for general programming concepts
- See [Python Glossary](glossary) for Python ML libraries
- See [Computer Science Glossary](glossary) for CS fundamentals
- See [Mathematics Glossary](glossary) for statistical foundations
- See [Databases Glossary](glossary) for data storage concepts
