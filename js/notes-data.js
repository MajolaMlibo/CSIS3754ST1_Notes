/**
 * notes-data.js
 * All Data Science notes content.
 * Each note has: id, title, category, icon, difficulty, tags, excerpt, content (HTML string)
 */

const CATEGORIES = [
  { id: "all",           label: "All Notes",      icon: "📚", cssClass: "" },
  { id: "statistics",    label: "Statistics",     icon: "📊", cssClass: "cat-statistics" },
  { id: "ml",            label: "Machine Learning", icon: "🤖", cssClass: "cat-ml" },
  { id: "python",        label: "Python & Libs",  icon: "🐍", cssClass: "cat-python" },
  { id: "preprocessing", label: "Preprocessing",  icon: "🔧", cssClass: "cat-preprocessing" },
  { id: "evaluation",    label: "Evaluation",     icon: "📏", cssClass: "cat-evaluation" },
  { id: "deeplearning",  label: "Deep Learning",  icon: "🧠", cssClass: "cat-deeplearning" },
  { id: "visualization", label: "Visualization",  icon: "📈", cssClass: "cat-visualization" },
  { id: "bigdata",       label: "Big Data & SQL",  icon: "🗄️", cssClass: "cat-bigdata" },
];

const NOTES = [

  /* ============================================================
     STATISTICS
     ============================================================ */
  {
    id: "stats-descriptive",
    title: "Descriptive Statistics Cheat Sheet",
    category: "statistics",
    icon: "📊",
    difficulty: "beginner",
    tags: ["mean", "median", "mode", "variance", "std-dev", "IQR", "skewness", "kurtosis"],
    excerpt: "Central tendency, spread, and shape of distributions. Formulas and quick reference for all key descriptive statistics.",
    content: `
<h2>Central Tendency</h2>
<table>
  <tr><th>Measure</th><th>Formula</th><th>Use When</th></tr>
  <tr><td><strong>Mean</strong></td><td class="formula">x̄ = Σxᵢ / n</td><td>No extreme outliers; continuous data</td></tr>
  <tr><td><strong>Median</strong></td><td>Middle value (sorted)</td><td>Skewed data; ordinal data</td></tr>
  <tr><td><strong>Mode</strong></td><td>Most frequent value</td><td>Categorical data</td></tr>
</table>

<h2>Spread / Variability</h2>
<table>
  <tr><th>Measure</th><th>Formula</th><th>Note</th></tr>
  <tr><td><strong>Range</strong></td><td class="formula">max − min</td><td>Sensitive to outliers</td></tr>
  <tr><td><strong>Variance</strong></td><td class="formula">σ² = Σ(xᵢ − x̄)² / n</td><td>Population; use (n−1) for sample</td></tr>
  <tr><td><strong>Std Dev</strong></td><td class="formula">σ = √σ²</td><td>Same units as data</td></tr>
  <tr><td><strong>IQR</strong></td><td class="formula">Q3 − Q1</td><td>Robust to outliers</td></tr>
  <tr><td><strong>CV</strong></td><td class="formula">(σ / x̄) × 100%</td><td>Compare variability across scales</td></tr>
</table>

<h2>Shape</h2>
<ul>
  <li><strong>Skewness:</strong> Asymmetry. Positive = right tail; Negative = left tail.</li>
  <li><strong>Kurtosis:</strong> Tail heaviness. Normal = 3 (excess = 0). >3 = leptokurtic; <3 = platykurtic.</li>
</ul>

<h2>Five-Number Summary</h2>
<code>Min | Q1 | Median | Q3 | Max</code>
<p>Used for box plots. Outlier fence: <code>Q1 − 1.5·IQR</code> and <code>Q3 + 1.5·IQR</code>.</p>

<div class="tip"><span class="tip-icon">💡</span><p><strong>Exam tip:</strong> When data is skewed, prefer Median + IQR over Mean + Std Dev.</p></div>
`
  },

  {
    id: "stats-probability",
    title: "Probability & Distributions",
    category: "statistics",
    icon: "🎲",
    difficulty: "intermediate",
    tags: ["probability", "normal-distribution", "binomial", "Poisson", "CLT", "z-score", "PDF", "CDF"],
    excerpt: "Key probability rules, common distributions, Central Limit Theorem, and z-score calculations.",
    content: `
<h2>Probability Rules</h2>
<ul>
  <li><strong>Addition rule:</strong> <code>P(A∪B) = P(A) + P(B) − P(A∩B)</code></li>
  <li><strong>Multiplication rule:</strong> <code>P(A∩B) = P(A) · P(B|A)</code></li>
  <li><strong>Complement:</strong> <code>P(Aᶜ) = 1 − P(A)</code></li>
  <li><strong>Bayes' theorem:</strong> <code>P(A|B) = P(B|A) · P(A) / P(B)</code></li>
</ul>

<h2>Key Distributions</h2>
<table>
  <tr><th>Distribution</th><th>Parameters</th><th>Use Case</th><th>Mean / Variance</th></tr>
  <tr><td><strong>Normal</strong></td><td>μ, σ²</td><td>Continuous symmetric data</td><td>μ / σ²</td></tr>
  <tr><td><strong>Binomial</strong></td><td>n, p</td><td>Discrete successes in n trials</td><td>np / np(1-p)</td></tr>
  <tr><td><strong>Poisson</strong></td><td>λ</td><td>Count events per interval</td><td>λ / λ</td></tr>
  <tr><td><strong>Exponential</strong></td><td>λ</td><td>Time between events</td><td>1/λ / 1/λ²</td></tr>
  <tr><td><strong>Uniform</strong></td><td>a, b</td><td>Equal probability interval</td><td>(a+b)/2 / (b-a)²/12</td></tr>
</table>

<h2>Standard Normal (Z-Score)</h2>
<span class="formula">z = (x − μ) / σ</span>
<ul>
  <li><strong>68-95-99.7 rule:</strong> 1σ=68%, 2σ=95%, 3σ=99.7%</li>
  <li>Z-table gives <strong>P(Z ≤ z)</strong> (area to the left)</li>
</ul>

<h2>Central Limit Theorem (CLT)</h2>
<p>The sampling distribution of the sample mean approaches <strong>Normal</strong> as n→∞, regardless of population distribution.</p>
<span class="formula">x̄ ~ N(μ, σ²/n)  when n ≥ 30</span>

<div class="tip"><span class="tip-icon">💡</span><p>CLT is why so many statistical methods assume normality even on non-normal populations.</p></div>
`
  },

  {
    id: "stats-hypothesis",
    title: "Hypothesis Testing",
    category: "statistics",
    icon: "🔬",
    difficulty: "intermediate",
    tags: ["hypothesis-testing", "p-value", "t-test", "chi-square", "ANOVA", "confidence-interval", "type-I-error", "type-II-error"],
    excerpt: "Step-by-step hypothesis testing framework, common tests, p-values, and error types.",
    content: `
<h2>The 5-Step Framework</h2>
<ol>
  <li>State <strong>H₀</strong> (null) and <strong>H₁</strong> (alternative)</li>
  <li>Choose significance level <strong>α</strong> (typically 0.05)</li>
  <li>Select the appropriate test and compute <strong>test statistic</strong></li>
  <li>Calculate <strong>p-value</strong> (or critical value)</li>
  <li>Decision: <strong>reject H₀ if p-value &lt; α</strong></li>
</ol>

<h2>Error Types</h2>
<table>
  <tr><th></th><th>H₀ True</th><th>H₀ False</th></tr>
  <tr><td><strong>Reject H₀</strong></td><td>Type I error (α)</td><td>✅ Correct (Power = 1−β)</td></tr>
  <tr><td><strong>Fail to reject</strong></td><td>✅ Correct</td><td>Type II error (β)</td></tr>
</table>

<h2>Common Tests</h2>
<table>
  <tr><th>Test</th><th>Use Case</th><th>Statistic</th></tr>
  <tr><td><strong>One-sample t-test</strong></td><td>Compare sample mean to known μ</td><td>t = (x̄ − μ)/(s/√n)</td></tr>
  <tr><td><strong>Two-sample t-test</strong></td><td>Compare two group means</td><td>t = (x̄₁ − x̄₂)/SE</td></tr>
  <tr><td><strong>Paired t-test</strong></td><td>Before/after, same subjects</td><td>t = d̄/(sᵈ/√n)</td></tr>
  <tr><td><strong>Chi-square (χ²)</strong></td><td>Categorical independence</td><td>χ² = Σ(O−E)²/E</td></tr>
  <tr><td><strong>One-way ANOVA</strong></td><td>Compare ≥3 group means</td><td>F = MS_between/MS_within</td></tr>
  <tr><td><strong>Z-test</strong></td><td>Large n, known σ</td><td>z = (x̄ − μ)/(σ/√n)</td></tr>
</table>

<h2>Confidence Interval</h2>
<span class="formula">CI = x̄ ± z*(σ/√n)   or   x̄ ± t*(s/√n)</span>
<p>A 95% CI means: if we repeated the experiment 100 times, ~95 of the intervals would contain the true parameter.</p>

<div class="warning"><span class="tip-icon">⚠️</span><p>A p-value is NOT the probability that H₀ is true. It's P(data | H₀ is true).</p></div>
`
  },

  {
    id: "stats-correlation",
    title: "Correlation & Regression",
    category: "statistics",
    icon: "📉",
    difficulty: "intermediate",
    tags: ["correlation", "regression", "Pearson", "Spearman", "R-squared", "linear-regression", "OLS"],
    excerpt: "Pearson & Spearman correlation, simple and multiple linear regression, coefficient interpretation.",
    content: `
<h2>Pearson Correlation (r)</h2>
<span class="formula">r = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / (n·sₓ·sᵧ)</span>
<ul>
  <li>Range: <code>−1 to +1</code></li>
  <li>|r| ≥ 0.7 = strong; 0.4–0.7 = moderate; &lt;0.4 = weak</li>
  <li>Assumes <strong>linear</strong> relationship, continuous, normal data</li>
</ul>

<h2>Spearman Correlation (ρ)</h2>
<span class="formula">ρ = 1 − (6·Σdᵢ²)/(n(n²−1))</span>
<p>Rank-based; use when data is ordinal or non-linear monotonic relationship.</p>

<h2>Simple Linear Regression</h2>
<span class="formula">ŷ = β₀ + β₁·x</span>
<ul>
  <li><strong>β₁</strong> = slope = Cov(x,y)/Var(x)</li>
  <li><strong>β₀</strong> = intercept = ȳ − β₁·x̄</li>
  <li><strong>OLS</strong> minimizes sum of squared residuals: SSE = Σ(yᵢ − ŷᵢ)²</li>
</ul>

<h2>R² (Coefficient of Determination)</h2>
<span class="formula">R² = 1 − SSE/SST  =  SS_reg/SS_tot</span>
<ul>
  <li>Range: 0 to 1. Higher = better fit.</li>
  <li><strong>Adjusted R²</strong> penalizes for extra predictors: use when comparing models.</li>
</ul>

<h2>Assumptions of OLS</h2>
<ol>
  <li>Linearity</li>
  <li>Independence of errors</li>
  <li>Homoscedasticity (constant variance)</li>
  <li>Normality of residuals</li>
  <li>No multicollinearity (multiple regression)</li>
</ol>

<div class="tip"><span class="tip-icon">💡</span><p><strong>Correlation ≠ Causation.</strong> Always check residual plots before trusting a regression model.</p></div>
`
  },

  /* ============================================================
     MACHINE LEARNING
     ============================================================ */
  {
    id: "ml-overview",
    title: "ML Algorithm Cheat Sheet",
    category: "ml",
    icon: "🤖",
    difficulty: "beginner",
    tags: ["supervised", "unsupervised", "classification", "regression", "clustering", "algorithms"],
    excerpt: "Quick-reference table of major ML algorithms with use cases, pros, and cons.",
    content: `
<h2>Supervised Learning</h2>
<table>
  <tr><th>Algorithm</th><th>Type</th><th>Pros</th><th>Cons</th></tr>
  <tr><td><strong>Linear Regression</strong></td><td>Regression</td><td>Interpretable, fast</td><td>Assumes linearity</td></tr>
  <tr><td><strong>Logistic Regression</strong></td><td>Classification</td><td>Probabilistic, fast</td><td>Linear boundary</td></tr>
  <tr><td><strong>Decision Tree</strong></td><td>Both</td><td>Interpretable, no scaling</td><td>Overfits easily</td></tr>
  <tr><td><strong>Random Forest</strong></td><td>Both</td><td>Robust, handles high-dim</td><td>Less interpretable</td></tr>
  <tr><td><strong>Gradient Boosting (XGB)</strong></td><td>Both</td><td>High accuracy</td><td>Many hyperparameters</td></tr>
  <tr><td><strong>SVM</strong></td><td>Both</td><td>Effective in high dims</td><td>Slow on large data</td></tr>
  <tr><td><strong>KNN</strong></td><td>Both</td><td>Simple, no training</td><td>Slow prediction, needs scaling</td></tr>
  <tr><td><strong>Naive Bayes</strong></td><td>Classification</td><td>Fast, good for text</td><td>Feature independence assumption</td></tr>
</table>

<h2>Unsupervised Learning</h2>
<table>
  <tr><th>Algorithm</th><th>Type</th><th>Key Idea</th></tr>
  <tr><td><strong>K-Means</strong></td><td>Clustering</td><td>Minimize within-cluster variance</td></tr>
  <tr><td><strong>DBSCAN</strong></td><td>Clustering</td><td>Density-based; finds arbitrary shapes</td></tr>
  <tr><td><strong>PCA</strong></td><td>Dimensionality Reduction</td><td>Projects onto max-variance directions</td></tr>
  <tr><td><strong>t-SNE</strong></td><td>Visualisation</td><td>Non-linear 2D/3D projection</td></tr>
  <tr><td><strong>Apriori</strong></td><td>Association Rules</td><td>Market basket analysis</td></tr>
</table>

<h2>Choosing an Algorithm</h2>
<ul>
  <li><strong>Small data, interpretability needed</strong> → Logistic Regression, Decision Tree</li>
  <li><strong>Large data, accuracy priority</strong> → Gradient Boosting, Random Forest</li>
  <li><strong>Text/NLP</strong> → Naive Bayes, logistic regression + TF-IDF</li>
  <li><strong>No labels</strong> → K-Means, DBSCAN, PCA</li>
</ul>
`
  },

  {
    id: "ml-linear-regression",
    title: "Linear Regression — Deep Dive",
    category: "ml",
    icon: "📈",
    difficulty: "beginner",
    tags: ["linear-regression", "OLS", "gradient-descent", "regularisation", "Ridge", "Lasso"],
    excerpt: "From OLS to regularised regression (Ridge, Lasso, ElasticNet). Key formulas and sklearn code.",
    content: `
<h2>Cost Function (MSE)</h2>
<span class="formula">J(β) = (1/2n) · Σ(ŷᵢ − yᵢ)²</span>

<h2>Gradient Descent Update Rule</h2>
<span class="formula">β := β − α · (∂J/∂β)</span>
<p>α = learning rate. Too high → diverges. Too low → slow convergence.</p>

<h2>Regularisation</h2>
<table>
  <tr><th>Method</th><th>Penalty</th><th>Effect</th></tr>
  <tr><td><strong>Ridge (L2)</strong></td><td>λ·Σβᵢ²</td><td>Shrinks coefficients; keeps all features</td></tr>
  <tr><td><strong>Lasso (L1)</strong></td><td>λ·Σ|βᵢ|</td><td>Can zero out coefficients (feature selection)</td></tr>
  <tr><td><strong>ElasticNet</strong></td><td>α·L1 + (1-α)·L2</td><td>Mix of Ridge and Lasso</td></tr>
</table>

<h2>sklearn Quick Code</h2>
<pre><code>from sklearn.linear_model import LinearRegression, Ridge, Lasso

# Ordinary
model = LinearRegression()
model.fit(X_train, y_train)
print(model.coef_, model.intercept_)

# Ridge
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Lasso
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)
</code></pre>

<div class="tip"><span class="tip-icon">💡</span><p>Always <strong>scale features</strong> before regularisation (Ridge/Lasso penalise large coefficients, which depend on scale).</p></div>
`
  },

  {
    id: "ml-classification",
    title: "Classification — Key Concepts",
    category: "ml",
    icon: "🏷️",
    difficulty: "intermediate",
    tags: ["classification", "logistic-regression", "SVM", "decision-tree", "random-forest", "XGBoost", "probability", "threshold"],
    excerpt: "Logistic regression, decision boundaries, ensemble methods, and probability calibration.",
    content: `
<h2>Logistic Regression</h2>
<span class="formula">P(y=1) = σ(β₀ + β₁x₁ + … + βₙxₙ)</span>
<span class="formula">σ(z) = 1 / (1 + e⁻ᶻ)  (Sigmoid)</span>
<p>Loss function: <strong>Cross-Entropy (Log Loss)</strong></p>
<span class="formula">L = −[y·log(p) + (1−y)·log(1−p)]</span>

<h2>Decision Tree Splitting</h2>
<ul>
  <li><strong>Gini Impurity:</strong> <code>1 − Σpᵢ²</code></li>
  <li><strong>Information Gain:</strong> entropy reduction at split</li>
  <li><strong>Entropy:</strong> <code>−Σpᵢ·log₂(pᵢ)</code></li>
</ul>

<h2>Ensemble Methods</h2>
<table>
  <tr><th>Method</th><th>Strategy</th><th>Key Param</th></tr>
  <tr><td><strong>Bagging</strong></td><td>Train on random subsets (bootstrap), average</td><td>n_estimators</td></tr>
  <tr><td><strong>Random Forest</strong></td><td>Bagging + random feature subsets</td><td>max_features, n_estimators</td></tr>
  <tr><td><strong>Boosting</strong></td><td>Sequential; each model fixes previous errors</td><td>learning_rate, n_estimators</td></tr>
  <tr><td><strong>XGBoost</strong></td><td>Gradient boosting + regularisation</td><td>max_depth, subsample</td></tr>
  <tr><td><strong>Stacking</strong></td><td>Meta-learner on base-model predictions</td><td>meta_classifier</td></tr>
</table>

<h2>Threshold Tuning</h2>
<p>Default threshold = 0.5. Adjusting trades off <strong>precision vs recall</strong>.</p>
<ul>
  <li>Lower threshold → more positives predicted → ↑recall, ↓precision</li>
  <li>Higher threshold → fewer positives → ↑precision, ↓recall</li>
</ul>

<pre><code>from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
clf.fit(X_train, y_train)
probas = clf.predict_proba(X_test)[:, 1]
preds = (probas > 0.4).astype(int)  # custom threshold
</code></pre>
`
  },

  {
    id: "ml-clustering",
    title: "Clustering Algorithms",
    category: "ml",
    icon: "🔵",
    difficulty: "intermediate",
    tags: ["clustering", "k-means", "DBSCAN", "hierarchical", "elbow-method", "silhouette"],
    excerpt: "K-Means, DBSCAN, and hierarchical clustering with how to choose k and evaluate cluster quality.",
    content: `
<h2>K-Means</h2>
<ol>
  <li>Choose k, randomly initialise k centroids</li>
  <li>Assign each point to nearest centroid</li>
  <li>Recompute centroids as cluster means</li>
  <li>Repeat 2–3 until convergence</li>
</ol>
<p><strong>Objective:</strong> Minimize Within-Cluster Sum of Squares (WCSS)</p>
<span class="formula">WCSS = Σₖ Σ_{x∈Cₖ} ||x − μₖ||²</span>

<h2>Choosing k: Elbow Method</h2>
<pre><code>from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

wcss = []
for k in range(1, 11):
    km = KMeans(n_clusters=k, random_state=42)
    km.fit(X)
    wcss.append(km.inertia_)

plt.plot(range(1, 11), wcss, 'bo-')
plt.xlabel('k')
plt.ylabel('WCSS')
plt.title('Elbow Method')
plt.show()
</code></pre>

<h2>Silhouette Score</h2>
<span class="formula">s = (b − a) / max(a, b)</span>
<p>a = mean intra-cluster distance; b = mean nearest-cluster distance. Range: −1 to 1 (higher = better).</p>

<h2>DBSCAN</h2>
<ul>
  <li><strong>ε</strong>: neighbourhood radius</li>
  <li><strong>min_samples</strong>: min points to form a core point</li>
  <li>Automatically detects outliers (noise points)</li>
  <li>Finds <strong>arbitrary shapes</strong> (K-Means only finds spherical clusters)</li>
</ul>

<pre><code>from sklearn.cluster import DBSCAN
db = DBSCAN(eps=0.5, min_samples=5)
labels = db.fit_predict(X)
# labels == -1 → noise
</code></pre>

<div class="tip"><span class="tip-icon">💡</span><p>Always <strong>scale data</strong> before clustering (distance-based algorithms are sensitive to scale).</p></div>
`
  },

  {
    id: "ml-dimensionality",
    title: "Dimensionality Reduction (PCA & t-SNE)",
    category: "ml",
    icon: "🔻",
    difficulty: "intermediate",
    tags: ["PCA", "t-SNE", "UMAP", "dimensionality-reduction", "eigenvalues", "explained-variance"],
    excerpt: "PCA step-by-step, explained variance ratio, and when to use t-SNE vs PCA.",
    content: `
<h2>PCA — Steps</h2>
<ol>
  <li>Standardise features (zero mean, unit variance)</li>
  <li>Compute <strong>covariance matrix</strong> Σ</li>
  <li>Compute <strong>eigenvalues and eigenvectors</strong> of Σ</li>
  <li>Sort eigenvectors by eigenvalue (descending)</li>
  <li>Project data onto top-k eigenvectors (principal components)</li>
</ol>

<h2>Explained Variance Ratio</h2>
<pre><code>from sklearn.decomposition import PCA

pca = PCA()
pca.fit(X_scaled)

# Scree plot
import matplotlib.pyplot as plt
plt.plot(pca.explained_variance_ratio_.cumsum())
plt.xlabel('Number of Components')
plt.ylabel('Cumulative Explained Variance')
plt.axhline(0.95, color='r', linestyle='--', label='95%')
plt.legend()
</code></pre>
<p>Choose k components that explain <strong>≥ 95%</strong> of variance (rule of thumb).</p>

<h2>PCA vs t-SNE vs UMAP</h2>
<table>
  <tr><th>Method</th><th>Type</th><th>Best For</th><th>Reproducible?</th></tr>
  <tr><td><strong>PCA</strong></td><td>Linear</td><td>Preprocessing, noise reduction</td><td>Yes</td></tr>
  <tr><td><strong>t-SNE</strong></td><td>Non-linear</td><td>Visualisation (2D/3D)</td><td>No (set random_state)</td></tr>
  <tr><td><strong>UMAP</strong></td><td>Non-linear</td><td>Faster, preserves global structure better than t-SNE</td><td>Yes (with seed)</td></tr>
</table>

<div class="warning"><span class="tip-icon">⚠️</span><p>t-SNE distances between clusters are <strong>not</strong> meaningful. Only use for visualisation.</p></div>
`
  },

  /* ============================================================
     PYTHON & LIBRARIES
     ============================================================ */
  {
    id: "py-numpy",
    title: "NumPy Cheat Sheet",
    category: "python",
    icon: "🔢",
    difficulty: "beginner",
    tags: ["numpy", "arrays", "broadcasting", "indexing", "linear-algebra", "random"],
    excerpt: "Array creation, slicing, broadcasting, linear algebra, and random number generation with NumPy.",
    content: `
<h2>Array Creation</h2>
<pre><code>import numpy as np

a = np.array([1, 2, 3])
b = np.zeros((3, 4))
c = np.ones((2, 3))
d = np.eye(3)                 # identity
e = np.arange(0, 10, 2)      # [0,2,4,6,8]
f = np.linspace(0, 1, 5)     # 5 equally spaced in [0,1]
g = np.random.rand(3, 3)     # uniform [0,1)
h = np.random.randn(3, 3)    # standard normal
</code></pre>

<h2>Array Properties</h2>
<pre><code>a.shape     # dimensions tuple
a.ndim      # number of dimensions
a.dtype     # data type
a.size      # total elements
a.reshape(2, 3)
a.flatten()
a.T         # transpose
</code></pre>

<h2>Indexing & Slicing</h2>
<pre><code>a[0]           # first element
a[-1]          # last element
a[1:4]         # slice [1,2,3]
a[::2]         # every 2nd element
A[1, :]        # 2D: row 1
A[:, 2]        # 2D: column 2
A[A > 0]       # boolean indexing
</code></pre>

<h2>Math & Aggregations</h2>
<pre><code>np.sum(a)
np.mean(a)
np.std(a)
np.min(a), np.max(a)
np.argmin(a), np.argmax(a)
np.dot(A, B)        # matrix multiply (or A @ B)
np.linalg.inv(A)    # inverse
np.linalg.eig(A)    # eigenvalues & eigenvectors
</code></pre>

<h2>Broadcasting</h2>
<p>Operations between arrays with different shapes — NumPy expands dimensions automatically.</p>
<pre><code>A = np.ones((3, 3))
b = np.array([1, 2, 3])
A + b   # adds b to each row of A
</code></pre>
`
  },

  {
    id: "py-pandas",
    title: "Pandas Cheat Sheet",
    category: "python",
    icon: "🐼",
    difficulty: "beginner",
    tags: ["pandas", "DataFrame", "Series", "groupby", "merge", "pivot", "datetime", "missing-values"],
    excerpt: "DataFrame creation, selection, grouping, merging, and handling missing data with Pandas.",
    content: `
<h2>Creating DataFrames</h2>
<pre><code>import pandas as pd

df = pd.read_csv('data.csv')
df = pd.DataFrame({'A': [1,2,3], 'B': ['x','y','z']})
df.head()         # first 5 rows
df.info()         # dtypes & null counts
df.describe()     # summary statistics
</code></pre>

<h2>Selection</h2>
<pre><code>df['col']              # Series
df[['col1','col2']]    # DataFrame
df.loc[0]              # row by label
df.iloc[0]             # row by position
df.loc[0, 'col']       # cell
df[df['A'] > 2]        # boolean filter
df.query('A > 2')      # query string
</code></pre>

<h2>Missing Data</h2>
<pre><code>df.isnull().sum()              # count NaN per column
df.dropna()                    # drop rows with any NaN
df.fillna(0)                   # fill with 0
df.fillna(df.mean())           # fill with column mean
df['col'].interpolate()        # interpolation
</code></pre>

<h2>GroupBy & Aggregation</h2>
<pre><code>df.groupby('category')['value'].mean()
df.groupby('cat').agg({'val': ['mean','sum','count']})
df.pivot_table(values='val', index='row', columns='col', aggfunc='mean')
</code></pre>

<h2>Merge & Concat</h2>
<pre><code>pd.merge(df1, df2, on='key', how='inner')   # left/right/outer/inner
pd.concat([df1, df2], axis=0)               # stack rows
pd.concat([df1, df2], axis=1)               # side by side
</code></pre>

<h2>Apply & Map</h2>
<pre><code>df['col'].apply(lambda x: x * 2)
df.apply(np.mean, axis=0)       # column-wise mean
df['cat'].map({'a': 1, 'b': 2}) # encode categories
</code></pre>
`
  },

  {
    id: "py-sklearn",
    title: "Scikit-learn Pipeline & Workflow",
    category: "python",
    icon: "⚙️",
    difficulty: "intermediate",
    tags: ["scikit-learn", "sklearn", "pipeline", "cross-validation", "GridSearchCV", "train-test-split", "preprocessing"],
    excerpt: "The standard sklearn workflow: split, preprocess, fit, evaluate. Pipelines and hyperparameter tuning.",
    content: `
<h2>Standard Workflow</h2>
<pre><code>from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# 1. Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)

# 2. Preprocess
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s  = scaler.transform(X_test)       # only transform!

# 3. Train
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train_s, y_train)

# 4. Evaluate
y_pred = clf.predict(X_test_s)
print(classification_report(y_test, y_pred))
</code></pre>

<h2>Pipeline (avoid data leakage)</h2>
<pre><code>from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer

pipe = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(n_estimators=100))
])
pipe.fit(X_train, y_train)
pipe.predict(X_test)
</code></pre>

<h2>Cross-Validation</h2>
<pre><code>from sklearn.model_selection import cross_val_score, StratifiedKFold

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(pipe, X, y, cv=cv, scoring='f1_macro')
print(f"CV F1: {scores.mean():.3f} ± {scores.std():.3f}")
</code></pre>

<h2>GridSearchCV (Hyperparameter Tuning)</h2>
<pre><code>from sklearn.model_selection import GridSearchCV

param_grid = {
    'clf__n_estimators': [50, 100, 200],
    'clf__max_depth': [None, 5, 10]
}
gs = GridSearchCV(pipe, param_grid, cv=5, scoring='f1_macro', n_jobs=-1)
gs.fit(X_train, y_train)
print(gs.best_params_, gs.best_score_)
</code></pre>
`
  },

  {
    id: "py-matplotlib",
    title: "Matplotlib & Seaborn Quick Reference",
    category: "python",
    icon: "🎨",
    difficulty: "beginner",
    tags: ["matplotlib", "seaborn", "visualization", "plots", "histogram", "scatter", "heatmap", "boxplot"],
    excerpt: "Common plot types with code snippets for matplotlib and seaborn.",
    content: `
<h2>Basic Matplotlib</h2>
<pre><code>import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(x, y, label='line', color='steelblue', lw=2)
ax.scatter(x, y, c='red', s=50, alpha=0.7)
ax.set_xlabel('X'); ax.set_ylabel('Y')
ax.set_title('Title')
ax.legend()
plt.tight_layout()
plt.show()
</code></pre>

<h2>Common Plot Types</h2>
<pre><code>plt.hist(data, bins=30, edgecolor='k')      # histogram
plt.boxplot(data)                            # box plot
plt.bar(categories, values)                 # bar chart
plt.pie(sizes, labels=labels, autopct='%1.1f%%')  # pie chart
plt.errorbar(x, y, yerr=errors)            # with error bars
</code></pre>

<h2>Seaborn (statistical plots)</h2>
<pre><code>import seaborn as sns

sns.set_theme(style='darkgrid')

# Distribution
sns.histplot(data=df, x='col', hue='group', kde=True)
sns.boxplot(data=df, x='group', y='value')
sns.violinplot(data=df, x='group', y='value')

# Relationships
sns.scatterplot(data=df, x='x', y='y', hue='group', size='size')
sns.lineplot(data=df, x='x', y='y')
sns.regplot(x='x', y='y', data=df)  # with regression line

# Categorical
sns.barplot(data=df, x='cat', y='val', estimator=np.mean, ci=95)
sns.countplot(data=df, x='cat')

# Matrix
sns.heatmap(corr_matrix, annot=True, fmt='.2f', cmap='coolwarm')
sns.pairplot(df, hue='target')
</code></pre>
`
  },

  /* ============================================================
     PREPROCESSING
     ============================================================ */
  {
    id: "pre-feature-engineering",
    title: "Feature Engineering & Encoding",
    category: "preprocessing",
    icon: "🔧",
    difficulty: "intermediate",
    tags: ["feature-engineering", "encoding", "one-hot", "label-encoding", "feature-selection", "outliers"],
    excerpt: "Handling categorical variables, feature creation, encoding strategies, and outlier treatment.",
    content: `
<h2>Encoding Categorical Variables</h2>
<table>
  <tr><th>Method</th><th>When to Use</th><th>Sklearn</th></tr>
  <tr><td><strong>Label Encoding</strong></td><td>Ordinal categories (Low/Med/High)</td><td>LabelEncoder</td></tr>
  <tr><td><strong>One-Hot Encoding</strong></td><td>Nominal categories (no order); &lt; 15 categories</td><td>OneHotEncoder / pd.get_dummies</td></tr>
  <tr><td><strong>Ordinal Encoding</strong></td><td>Ordinal with defined order</td><td>OrdinalEncoder</td></tr>
  <tr><td><strong>Target Encoding</strong></td><td>High-cardinality categoricals</td><td>category_encoders</td></tr>
</table>

<pre><code>import pandas as pd
from sklearn.preprocessing import OneHotEncoder, LabelEncoder

# Pandas one-hot
df_encoded = pd.get_dummies(df, columns=['city'], drop_first=True)

# sklearn OHE
ohe = OneHotEncoder(handle_unknown='ignore', sparse_output=False)
ohe.fit_transform(df[['city']])
</code></pre>

<h2>Handling Outliers</h2>
<table>
  <tr><th>Method</th><th>Approach</th></tr>
  <tr><td><strong>IQR Method</strong></td><td>Remove/clip values outside Q1−1.5·IQR and Q3+1.5·IQR</td></tr>
  <tr><td><strong>Z-score</strong></td><td>Remove points where |z| > 3</td></tr>
  <tr><td><strong>Winsorisation</strong></td><td>Cap at e.g. 5th and 95th percentile</td></tr>
  <tr><td><strong>Robust scaling</strong></td><td>Use RobustScaler (uses IQR)</td></tr>
</table>

<h2>Feature Creation</h2>
<ul>
  <li><strong>Interaction terms:</strong> <code>df['A_x_B'] = df['A'] * df['B']</code></li>
  <li><strong>Polynomial features:</strong> <code>PolynomialFeatures(degree=2)</code></li>
  <li><strong>Log transform:</strong> for right-skewed continuous features</li>
  <li><strong>Binning:</strong> <code>pd.cut(df['age'], bins=[0,18,35,60,100])</code></li>
  <li><strong>Date parts:</strong> <code>df['month'] = df['date'].dt.month</code></li>
</ul>

<h2>Feature Selection</h2>
<pre><code>from sklearn.feature_selection import SelectKBest, f_classif, RFE

# Filter
selector = SelectKBest(f_classif, k=10)
X_new = selector.fit_transform(X, y)

# Wrapper (RFE)
from sklearn.linear_model import LogisticRegression
rfe = RFE(LogisticRegression(), n_features_to_select=10)
X_rfe = rfe.fit_transform(X, y)

# Feature importance (trees)
importances = clf.feature_importances_
</code></pre>
`
  },

  {
    id: "pre-scaling",
    title: "Data Scaling & Normalisation",
    category: "preprocessing",
    icon: "⚖️",
    difficulty: "beginner",
    tags: ["scaling", "normalisation", "StandardScaler", "MinMaxScaler", "RobustScaler", "normalizer"],
    excerpt: "When and how to scale data. Comparison of StandardScaler, MinMaxScaler, RobustScaler, and Normalizer.",
    content: `
<h2>Why Scale?</h2>
<p>Algorithms that use distances (KNN, SVM, K-Means) or gradients (linear/logistic regression, neural nets) are sensitive to feature scale.</p>
<p><strong>Tree-based models</strong> (Random Forest, XGBoost) do NOT need scaling.</p>

<h2>Scaling Methods</h2>
<table>
  <tr><th>Scaler</th><th>Formula</th><th>Output Range</th><th>Use When</th></tr>
  <tr><td><strong>StandardScaler</strong></td><td>(x − μ) / σ</td><td>~[-3, 3]</td><td>Default choice; Gaussian assumptions</td></tr>
  <tr><td><strong>MinMaxScaler</strong></td><td>(x − min)/(max − min)</td><td>[0, 1]</td><td>Neural networks; bounded output needed</td></tr>
  <tr><td><strong>RobustScaler</strong></td><td>(x − median)/IQR</td><td>Varies</td><td>Data with many outliers</td></tr>
  <tr><td><strong>Normalizer</strong></td><td>x / ||x||</td><td>||x||=1 per sample</td><td>Text/NLP features (TF-IDF)</td></tr>
  <tr><td><strong>MaxAbsScaler</strong></td><td>x / max(|x|)</td><td>[-1, 1]</td><td>Sparse data</td></tr>
</table>

<h2>Code</h2>
<pre><code>from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)  # fit on train
X_test_s  = scaler.transform(X_test)        # transform only on test!
</code></pre>

<div class="warning"><span class="tip-icon">⚠️</span><p>NEVER fit the scaler on test data — that's data leakage! Always <code>fit_transform</code> on train, <code>transform</code> on test.</p></div>
`
  },

  /* ============================================================
     MODEL EVALUATION
     ============================================================ */
  {
    id: "eval-classification-metrics",
    title: "Classification Metrics",
    category: "evaluation",
    icon: "📏",
    difficulty: "beginner",
    tags: ["accuracy", "precision", "recall", "F1-score", "ROC", "AUC", "confusion-matrix", "log-loss"],
    excerpt: "Accuracy, precision, recall, F1, ROC-AUC — formulas, when to use each, and confusion matrix.",
    content: `
<h2>Confusion Matrix</h2>
<table>
  <tr><th></th><th>Predicted Positive</th><th>Predicted Negative</th></tr>
  <tr><td><strong>Actual Positive</strong></td><td>TP (True Positive)</td><td>FN (False Negative)</td></tr>
  <tr><td><strong>Actual Negative</strong></td><td>FP (False Positive)</td><td>TN (True Negative)</td></tr>
</table>

<h2>Key Metrics</h2>
<table>
  <tr><th>Metric</th><th>Formula</th><th>Use When</th></tr>
  <tr><td><strong>Accuracy</strong></td><td>(TP+TN)/(TP+TN+FP+FN)</td><td>Balanced classes</td></tr>
  <tr><td><strong>Precision</strong></td><td>TP/(TP+FP)</td><td>Cost of false positives is high (spam)</td></tr>
  <tr><td><strong>Recall</strong></td><td>TP/(TP+FN)</td><td>Cost of false negatives is high (cancer)</td></tr>
  <tr><td><strong>F1</strong></td><td>2·(P·R)/(P+R)</td><td>Imbalanced classes; balance P and R</td></tr>
  <tr><td><strong>ROC-AUC</strong></td><td>Area under ROC curve</td><td>Ranking quality; threshold-independent</td></tr>
  <tr><td><strong>Log Loss</strong></td><td>−(1/n)Σ[y·log(p)+(1−y)·log(1−p)]</td><td>Probabilistic predictions</td></tr>
</table>

<h2>Sklearn Code</h2>
<pre><code>from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, confusion_matrix, classification_report,
    ConfusionMatrixDisplay
)

print(classification_report(y_test, y_pred))
print("AUC:", roc_auc_score(y_test, probas))

cm = confusion_matrix(y_test, y_pred)
ConfusionMatrixDisplay(cm).plot()
</code></pre>

<h2>Imbalanced Classes</h2>
<ul>
  <li>Use <strong>F1, ROC-AUC, or PR-AUC</strong> instead of accuracy</li>
  <li>Resample: <strong>oversample minority</strong> (SMOTE) or undersample majority</li>
  <li>Use <strong>class_weight='balanced'</strong> in sklearn models</li>
</ul>
`
  },

  {
    id: "eval-regression-metrics",
    title: "Regression Metrics",
    category: "evaluation",
    icon: "📐",
    difficulty: "beginner",
    tags: ["MAE", "MSE", "RMSE", "R-squared", "MAPE", "regression-evaluation"],
    excerpt: "MAE, MSE, RMSE, R², MAPE — when to use which and sklearn code.",
    content: `
<h2>Metrics Summary</h2>
<table>
  <tr><th>Metric</th><th>Formula</th><th>Units</th><th>Notes</th></tr>
  <tr><td><strong>MAE</strong></td><td>(1/n)·Σ|yᵢ−ŷᵢ|</td><td>Same as y</td><td>Robust to outliers</td></tr>
  <tr><td><strong>MSE</strong></td><td>(1/n)·Σ(yᵢ−ŷᵢ)²</td><td>y²</td><td>Penalises large errors more</td></tr>
  <tr><td><strong>RMSE</strong></td><td>√MSE</td><td>Same as y</td><td>Most common; same scale as y</td></tr>
  <tr><td><strong>R²</strong></td><td>1 − SSE/SST</td><td>Dimensionless</td><td>0–1; higher is better</td></tr>
  <tr><td><strong>MAPE</strong></td><td>(1/n)·Σ|yᵢ−ŷᵢ|/|yᵢ|·100%</td><td>%</td><td>Intuitive but breaks at y≈0</td></tr>
</table>

<h2>Code</h2>
<pre><code>from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

mae  = mean_absolute_error(y_test, y_pred)
mse  = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2   = r2_score(y_test, y_pred)

print(f"MAE:  {mae:.3f}")
print(f"RMSE: {rmse:.3f}")
print(f"R²:   {r2:.3f}")
</code></pre>

<h2>Overfitting vs Underfitting</h2>
<table>
  <tr><th>Situation</th><th>Train Error</th><th>Test Error</th><th>Fix</th></tr>
  <tr><td>Overfitting</td><td>Low</td><td>High</td><td>Regularisation, more data, simpler model</td></tr>
  <tr><td>Underfitting</td><td>High</td><td>High</td><td>More features, complex model, less regularisation</td></tr>
  <tr><td>Good fit</td><td>Low</td><td>Low</td><td>—</td></tr>
</table>
`
  },

  {
    id: "eval-bias-variance",
    title: "Bias–Variance Trade-off",
    category: "evaluation",
    icon: "⚖️",
    difficulty: "intermediate",
    tags: ["bias", "variance", "overfitting", "underfitting", "regularisation", "bias-variance-tradeoff", "learning-curves"],
    excerpt: "Understanding the bias-variance decomposition, its impact on model selection, and learning curves.",
    content: `
<h2>Bias-Variance Decomposition</h2>
<span class="formula">E[(y − ŷ)²] = Bias² + Variance + Irreducible Error</span>
<ul>
  <li><strong>Bias</strong>: Error from wrong assumptions (underfitting). High bias = model too simple.</li>
  <li><strong>Variance</strong>: Sensitivity to training data fluctuations (overfitting). High variance = model too complex.</li>
  <li><strong>Irreducible error</strong>: Noise in data — cannot be reduced.</li>
</ul>

<h2>The Trade-off</h2>
<table>
  <tr><th>Model Complexity</th><th>Bias</th><th>Variance</th><th>Problem</th></tr>
  <tr><td>Too simple</td><td>High</td><td>Low</td><td>Underfitting</td></tr>
  <tr><td>Just right</td><td>Low</td><td>Low</td><td>Good generalisation</td></tr>
  <tr><td>Too complex</td><td>Low</td><td>High</td><td>Overfitting</td></tr>
</table>

<h2>Diagnosing with Learning Curves</h2>
<pre><code>from sklearn.model_selection import learning_curve
import matplotlib.pyplot as plt

train_sizes, train_scores, val_scores = learning_curve(
    model, X, y, cv=5, scoring='neg_mean_squared_error',
    train_sizes=np.linspace(0.1, 1.0, 10))

plt.plot(train_sizes, -train_scores.mean(axis=1), label='Train')
plt.plot(train_sizes, -val_scores.mean(axis=1), label='Validation')
plt.legend()
</code></pre>

<h2>Remedies</h2>
<ul>
  <li><strong>High bias:</strong> more features, polynomial features, less regularisation, more complex model</li>
  <li><strong>High variance:</strong> more training data, regularisation (L1/L2), feature selection, ensemble methods (bagging)</li>
</ul>
`
  },

  /* ============================================================
     DEEP LEARNING
     ============================================================ */
  {
    id: "dl-neural-networks",
    title: "Neural Networks — Fundamentals",
    category: "deeplearning",
    icon: "🧠",
    difficulty: "intermediate",
    tags: ["neural-networks", "activation-functions", "backpropagation", "gradient-descent", "weights", "layers"],
    excerpt: "Architecture, activation functions, forward pass, backpropagation, and common optimisers.",
    content: `
<h2>Architecture</h2>
<p>A neural network consists of <strong>layers</strong> of nodes:</p>
<ul>
  <li><strong>Input layer</strong>: one node per feature</li>
  <li><strong>Hidden layer(s)</strong>: learned representations</li>
  <li><strong>Output layer</strong>: one node (regression) or n nodes (multi-class)</li>
</ul>
<span class="formula">z = W·x + b</span>
<span class="formula">a = σ(z)</span>

<h2>Activation Functions</h2>
<table>
  <tr><th>Function</th><th>Formula</th><th>Range</th><th>Use</th></tr>
  <tr><td><strong>Sigmoid</strong></td><td>1/(1+e⁻ˣ)</td><td>(0, 1)</td><td>Binary output</td></tr>
  <tr><td><strong>Tanh</strong></td><td>(eˣ−e⁻ˣ)/(eˣ+e⁻ˣ)</td><td>(-1, 1)</td><td>Hidden layers (zero-centred)</td></tr>
  <tr><td><strong>ReLU</strong></td><td>max(0, x)</td><td>[0, ∞)</td><td>Default hidden layer activation</td></tr>
  <tr><td><strong>Leaky ReLU</strong></td><td>max(0.01x, x)</td><td>(-∞, ∞)</td><td>Fixes dying ReLU</td></tr>
  <tr><td><strong>Softmax</strong></td><td>eˣⁱ/Σeˣʲ</td><td>(0,1), sum=1</td><td>Multi-class output</td></tr>
</table>

<h2>Loss Functions</h2>
<table>
  <tr><th>Task</th><th>Loss</th><th>Keras Name</th></tr>
  <tr><td>Binary classification</td><td>Binary Cross-Entropy</td><td>binary_crossentropy</td></tr>
  <tr><td>Multi-class</td><td>Categorical Cross-Entropy</td><td>categorical_crossentropy</td></tr>
  <tr><td>Regression</td><td>MSE</td><td>mean_squared_error</td></tr>
</table>

<h2>Optimisers</h2>
<table>
  <tr><th>Optimiser</th><th>Key Feature</th></tr>
  <tr><td><strong>SGD</strong></td><td>Simple; noisy; good generalisation with momentum</td></tr>
  <tr><td><strong>Adam</strong></td><td>Adaptive learning rates; default for most tasks</td></tr>
  <tr><td><strong>RMSProp</strong></td><td>Good for RNNs</td></tr>
</table>

<h2>Keras Quick Model</h2>
<pre><code>from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(n_features,)),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')  # binary
])

model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

history = model.fit(X_train, y_train,
                    validation_split=0.2,
                    epochs=50, batch_size=32)
</code></pre>
`
  },

  {
    id: "dl-regularization",
    title: "DL Regularisation Techniques",
    category: "deeplearning",
    icon: "🛡️",
    difficulty: "intermediate",
    tags: ["dropout", "batch-normalisation", "early-stopping", "regularisation", "overfitting", "L2", "weight-decay"],
    excerpt: "Dropout, batch normalisation, early stopping, and L2 weight decay to prevent overfitting in neural networks.",
    content: `
<h2>Dropout</h2>
<p>Randomly sets a fraction of nodes to 0 during each forward pass. Prevents co-adaptation.</p>
<pre><code>keras.layers.Dropout(rate=0.3)  # drop 30% of neurons
# Only active during training; automatically disabled at inference
</code></pre>
<div class="tip"><span class="tip-icon">💡</span><p>Common rates: 0.2–0.5 for hidden layers; 0.5 for heavily overfitting models.</p></div>

<h2>Batch Normalisation</h2>
<p>Normalises layer inputs to have zero mean and unit variance. Speeds training and acts as regulariser.</p>
<pre><code>model = keras.Sequential([
    keras.layers.Dense(128),
    keras.layers.BatchNormalization(),
    keras.layers.Activation('relu'),
    ...
])
</code></pre>

<h2>Early Stopping</h2>
<pre><code>early_stop = keras.callbacks.EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True
)
model.fit(X_train, y_train, callbacks=[early_stop], epochs=200)
</code></pre>

<h2>L1/L2 Weight Regularisation</h2>
<pre><code>from tensorflow.keras import regularizers

keras.layers.Dense(64, activation='relu',
                   kernel_regularizer=regularizers.l2(0.01))
</code></pre>

<h2>Regularisation Comparison</h2>
<table>
  <tr><th>Technique</th><th>Effect</th><th>Typical use</th></tr>
  <tr><td>Dropout</td><td>Ensemble-like, reduces co-adaptation</td><td>Dense & convolutional layers</td></tr>
  <tr><td>Batch Norm</td><td>Stabilises training, slight regularisation</td><td>Deep networks</td></tr>
  <tr><td>Early Stopping</td><td>Stops at best validation performance</td><td>Always; computationally free</td></tr>
  <tr><td>L2 / Weight Decay</td><td>Penalises large weights</td><td>When explicit control needed</td></tr>
</table>
`
  },

  /* ============================================================
     VISUALISATION
     ============================================================ */
  {
    id: "viz-choosing",
    title: "Choosing the Right Chart",
    category: "visualization",
    icon: "📈",
    difficulty: "beginner",
    tags: ["visualization", "charts", "histogram", "scatter", "bar-chart", "heatmap", "boxplot", "time-series"],
    excerpt: "A decision guide for choosing the right visualisation based on data type and relationship.",
    content: `
<h2>Choosing by Purpose</h2>
<table>
  <tr><th>Goal</th><th>Chart</th><th>Notes</th></tr>
  <tr><td>Distribution of 1 continuous var</td><td>Histogram, KDE, Violin</td><td>Use KDE for smoother estimate</td></tr>
  <tr><td>Compare groups</td><td>Box plot, Bar chart, Violin</td><td>Box plot shows 5-number summary</td></tr>
  <tr><td>Relationship (2 continuous)</td><td>Scatter plot, Hex bin</td><td>Add regression line with regplot</td></tr>
  <tr><td>Trend over time</td><td>Line chart</td><td>Use area chart for cumulative</td></tr>
  <tr><td>Part-of-whole</td><td>Pie, Stacked bar, Treemap</td><td>Avoid pie for >5 categories</td></tr>
  <tr><td>Correlation matrix</td><td>Heatmap</td><td>sns.heatmap(df.corr(), annot=True)</td></tr>
  <tr><td>High-dimensional data</td><td>Pair plot, t-SNE/UMAP plot, Parallel coords</td><td></td></tr>
  <tr><td>Feature importance</td><td>Horizontal bar chart</td><td>Sort by importance</td></tr>
</table>

<h2>Visual Hierarchy Principles</h2>
<ul>
  <li>Use <strong>position</strong> as primary encoding (most accurate perceptually)</li>
  <li>Use <strong>colour</strong> for categorical distinction or sequential intensity</li>
  <li>Avoid 3D charts (distorts perception)</li>
  <li>Always label axes with units</li>
  <li>Use accessible colour palettes (colour-blind safe: viridis, cividis)</li>
</ul>

<h2>EDA Checklist</h2>
<pre><code>import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df.describe()                          # summary stats
df.isnull().sum().plot(kind='bar')     # missing data
df.hist(figsize=(12,8))               # distributions
sns.heatmap(df.corr(), annot=True)    # correlations
sns.pairplot(df, hue='target')        # pair-wise
</code></pre>
`
  },

  /* ============================================================
     BIG DATA & SQL
     ============================================================ */
  {
    id: "sql-cheatsheet",
    title: "SQL for Data Science",
    category: "bigdata",
    icon: "🗄️",
    difficulty: "beginner",
    tags: ["SQL", "SELECT", "JOIN", "GROUP-BY", "window-functions", "subquery", "CTE", "aggregate"],
    excerpt: "Essential SQL commands for data science: SELECT, JOINs, GROUP BY, window functions, and CTEs.",
    content: `
<h2>SELECT Basics</h2>
<pre><code>SELECT col1, col2, COUNT(*) AS cnt
FROM table
WHERE condition
GROUP BY col1, col2
HAVING COUNT(*) > 5
ORDER BY cnt DESC
LIMIT 10;
</code></pre>

<h2>JOINs</h2>
<table>
  <tr><th>JOIN Type</th><th>Returns</th></tr>
  <tr><td><strong>INNER JOIN</strong></td><td>Matching rows in both tables</td></tr>
  <tr><td><strong>LEFT JOIN</strong></td><td>All from left + matching from right (NULL if no match)</td></tr>
  <tr><td><strong>RIGHT JOIN</strong></td><td>All from right + matching from left</td></tr>
  <tr><td><strong>FULL OUTER JOIN</strong></td><td>All rows from both tables</td></tr>
  <tr><td><strong>CROSS JOIN</strong></td><td>Cartesian product</td></tr>
</table>
<pre><code>SELECT a.id, b.name
FROM orders a
LEFT JOIN customers b ON a.customer_id = b.id;
</code></pre>

<h2>Aggregate Functions</h2>
<pre><code>COUNT(*), COUNT(DISTINCT col)
SUM(col), AVG(col)
MIN(col), MAX(col)
STDDEV(col), VARIANCE(col)
</code></pre>

<h2>Window Functions</h2>
<pre><code>-- Running total
SUM(amount) OVER (PARTITION BY user_id ORDER BY date)

-- Rank within group
RANK() OVER (PARTITION BY category ORDER BY score DESC)

-- Lag / Lead
LAG(value, 1)  OVER (ORDER BY date)
LEAD(value, 1) OVER (ORDER BY date)
</code></pre>

<h2>CTE (Common Table Expression)</h2>
<pre><code>WITH monthly_sales AS (
    SELECT DATE_TRUNC('month', sale_date) AS month,
           SUM(amount) AS total
    FROM sales
    GROUP BY 1
)
SELECT month, total,
       total - LAG(total) OVER (ORDER BY month) AS mom_change
FROM monthly_sales;
</code></pre>

<h2>Subquery vs JOIN vs CTE</h2>
<ul>
  <li><strong>Subquery</strong>: simple one-time use</li>
  <li><strong>JOIN</strong>: combining tables</li>
  <li><strong>CTE</strong>: readable, reusable; preferred for complex queries</li>
</ul>
`
  },

  {
    id: "bigdata-concepts",
    title: "Big Data & Spark Basics",
    category: "bigdata",
    icon: "⚡",
    difficulty: "advanced",
    tags: ["Spark", "Hadoop", "MapReduce", "big-data", "PySpark", "distributed-computing", "partitioning"],
    excerpt: "Core concepts of distributed data processing: Hadoop, Spark, RDDs, DataFrames, and PySpark cheat sheet.",
    content: `
<h2>Big Data Concepts</h2>
<table>
  <tr><th>Concept</th><th>Description</th></tr>
  <tr><td><strong>3 Vs</strong></td><td>Volume, Velocity, Variety</td></tr>
  <tr><td><strong>HDFS</strong></td><td>Hadoop Distributed File System – stores blocks across cluster</td></tr>
  <tr><td><strong>MapReduce</strong></td><td>Map (split & process) → Shuffle → Reduce (aggregate)</td></tr>
  <tr><td><strong>Spark</strong></td><td>In-memory distributed computation; 100× faster than MapReduce</td></tr>
</table>

<h2>Spark Key Concepts</h2>
<ul>
  <li><strong>RDD</strong>: Resilient Distributed Dataset – low-level API; fault-tolerant</li>
  <li><strong>DataFrame</strong>: Higher-level API; like pandas but distributed</li>
  <li><strong>Lazy evaluation</strong>: Transformations are only executed when an <em>action</em> is called</li>
  <li><strong>Transformations</strong>: <code>map, filter, groupBy</code> — return new RDD/DF</li>
  <li><strong>Actions</strong>: <code>collect, count, show, write</code> — trigger execution</li>
</ul>

<h2>PySpark Cheat Sheet</h2>
<pre><code>from pyspark.sql import SparkSession
spark = SparkSession.builder.appName('ds').getOrCreate()

# Read data
df = spark.read.csv('data.csv', header=True, inferSchema=True)

# Basic operations
df.printSchema()
df.show(5)
df.describe().show()
df.select('col1', 'col2').filter(df.col1 > 0)
df.groupBy('category').agg({'value': 'mean'}).show()
df.orderBy('score', ascending=False).limit(10).show()

# SQL
df.createOrReplaceTempView('mytable')
spark.sql('SELECT * FROM mytable WHERE col1 > 0').show()
</code></pre>

<div class="tip"><span class="tip-icon">💡</span><p>Spark partitioning: use <code>.repartition(n)</code> to increase parallelism; <code>.coalesce(n)</code> to reduce (no shuffle).</p></div>
`
  },

  /* ============================================================
     ADDITIONAL CHEAT SHEETS
     ============================================================ */
  {
    id: "ds-workflow",
    title: "Data Science Project Workflow",
    category: "ml",
    icon: "🗺️",
    difficulty: "beginner",
    tags: ["workflow", "CRISP-DM", "EDA", "project-management", "process", "pipeline"],
    excerpt: "End-to-end data science project workflow based on CRISP-DM methodology.",
    content: `
<h2>CRISP-DM Framework</h2>
<ol>
  <li><strong>Business Understanding</strong> — Define the problem and success criteria</li>
  <li><strong>Data Understanding</strong> — Collect, describe, and explore data</li>
  <li><strong>Data Preparation</strong> — Clean, transform, engineer features</li>
  <li><strong>Modelling</strong> — Select, build, and optimise models</li>
  <li><strong>Evaluation</strong> — Assess model against business goals</li>
  <li><strong>Deployment</strong> — Deploy, monitor, maintain</li>
</ol>

<h2>EDA Checklist</h2>
<ul>
  <li>☐ Check shape, dtypes, head/tail</li>
  <li>☐ Missing value analysis (<code>df.isnull().sum()</code>)</li>
  <li>☐ Duplicate rows (<code>df.duplicated().sum()</code>)</li>
  <li>☐ Descriptive statistics (<code>df.describe()</code>)</li>
  <li>☐ Distribution of target variable</li>
  <li>☐ Correlation matrix (heatmap)</li>
  <li>☐ Outlier detection (box plots, IQR)</li>
  <li>☐ Categorical feature distributions (bar charts)</li>
  <li>☐ Temporal trends (if time-series)</li>
</ul>

<h2>Feature Engineering Checklist</h2>
<ul>
  <li>☐ Handle missing values (impute or drop)</li>
  <li>☐ Encode categoricals</li>
  <li>☐ Scale numeric features</li>
  <li>☐ Create interaction features</li>
  <li>☐ Handle outliers</li>
  <li>☐ Split train/val/test (before any fitting!)</li>
</ul>

<h2>Model Selection Guidelines</h2>
<table>
  <tr><th>Dataset Size</th><th>Feature Count</th><th>Recommendation</th></tr>
  <tr><td>&lt; 1K rows</td><td>Any</td><td>Simple models + cross-validation</td></tr>
  <tr><td>1K–100K</td><td>Low–Med</td><td>Gradient Boosting, Random Forest</td></tr>
  <tr><td>100K–1M</td><td>High</td><td>XGBoost, LightGBM, SVM</td></tr>
  <tr><td>&gt; 1M</td><td>Any</td><td>Deep Learning or Spark MLlib</td></tr>
</table>
`
  },

  {
    id: "stats-time-series",
    title: "Time Series Analysis",
    category: "statistics",
    icon: "⏱️",
    difficulty: "advanced",
    tags: ["time-series", "ARIMA", "stationarity", "autocorrelation", "seasonality", "trend", "forecasting"],
    excerpt: "Stationarity, decomposition, ACF/PACF, ARIMA, and seasonal models.",
    content: `
<h2>Components of Time Series</h2>
<ul>
  <li><strong>Trend</strong>: Long-term increase/decrease</li>
  <li><strong>Seasonality</strong>: Regular periodic patterns</li>
  <li><strong>Cyclicality</strong>: Long-term oscillations (irregular)</li>
  <li><strong>Residual / Noise</strong>: Random variation</li>
</ul>

<h2>Stationarity</h2>
<p>A stationary series has <strong>constant mean, variance, and autocorrelation</strong> over time.</p>
<ul>
  <li>Test: <strong>Augmented Dickey-Fuller (ADF)</strong> — p &lt; 0.05 → stationary</li>
  <li>Fix: <strong>Differencing</strong> (<code>d</code> in ARIMA)</li>
  <li>Fix: <strong>Log transform</strong> for heteroscedasticity</li>
</ul>

<pre><code>from statsmodels.tsa.stattools import adfuller

result = adfuller(series)
print(f"ADF Statistic: {result[0]:.4f}")
print(f"p-value: {result[1]:.4f}")
# p < 0.05 → reject H₀ → series is stationary
</code></pre>

<h2>ACF & PACF</h2>
<ul>
  <li><strong>ACF</strong> (Autocorrelation Function): correlation of series with its lags → helps choose <strong>q</strong> (MA order)</li>
  <li><strong>PACF</strong> (Partial ACF): direct lag correlation → helps choose <strong>p</strong> (AR order)</li>
</ul>

<h2>ARIMA(p, d, q)</h2>
<ul>
  <li><strong>p</strong>: AR order (how many past values)</li>
  <li><strong>d</strong>: differencing degree (to achieve stationarity)</li>
  <li><strong>q</strong>: MA order (how many past errors)</li>
</ul>

<pre><code>from statsmodels.tsa.arima.model import ARIMA

model = ARIMA(series, order=(p, d, q))
result = model.fit()
forecast = result.forecast(steps=12)
</code></pre>

<h2>Seasonal ARIMA (SARIMA)</h2>
<span class="formula">SARIMA(p,d,q)(P,D,Q)[s]</span>
<p>s = seasonal period (e.g., 12 for monthly, 4 for quarterly)</p>
`
  },
];

// Count tags across all notes
function buildTagCounts() {
  const counts = {};
  NOTES.forEach(note => {
    note.tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
}

// Count notes per category
function buildCategoryCounts() {
  const counts = { all: NOTES.length };
  NOTES.forEach(note => {
    counts[note.category] = (counts[note.category] || 0) + 1;
  });
  return counts;
}
