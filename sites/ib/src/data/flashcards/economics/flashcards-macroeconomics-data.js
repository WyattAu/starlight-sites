export const flashcard1 = [
  {
    id: 'ib-macro-1',
    front: 'Define GDP and distinguish between nominal and real GDP.',
    back: 'GDP (Gross Domestic Product) is the total monetary value of all final goods and services produced within a country in a given period. Nominal GDP is measured at current market prices (not adjusted for inflation). Real GDP is adjusted for inflation by using constant base-year prices, allowing meaningful comparisons of output over time. Real GDP per capita divides real GDP by population to measure average living standards.',
    tags: ['gdp-measurement'],
    difficulty: 'easy',
  },
  {
    id: 'ib-macro-2',
    front: 'What are the three methods of measuring GDP, and why should they give the same result?',
    back: 'The three methods are: (1) the output (production) approach, summing the value added at each stage of production across all industries; (2) the income approach, summing all factor incomes earned in production (wages, rent, interest, profit); (3) the expenditure approach, summing all spending on final goods and services: AD = C + I + G + (X - M). They should give the same result because every pound spent on output becomes income for someone, and every pound of income is spent on output. In practice, statistical discrepancies arise due to measurement issues and the informal economy.',
    tags: ['gdp-measurement'],
    difficulty: 'medium',
  },
  {
    id: 'ib-macro-3',
    front: 'State the components of Aggregate Demand and explain the factors that influence each.',
    back: 'AD = C + I + G + (X - M). C (consumption): influenced by disposable income, interest rates, wealth, consumer confidence, and taxation. I (investment): influenced by interest rates, business confidence, expected returns, technology, and corporate taxation. G (government spending): determined by fiscal policy objectives and political priorities. X - M (net exports): influenced by the exchange rate, relative inflation rates, income levels, trade policies, and the quality/price competitiveness of domestic goods.',
    tags: ['aggregate-demand'],
    difficulty: 'easy',
  },
  {
    id: 'ib-macro-4',
    front:
      'Explain the difference between short-run aggregate supply (SRAS) and long-run aggregate supply (LRAS).',
    back: "SRAS shows the total output firms are willing and able to produce at different price levels in the short run, when at least one factor of production is fixed (e.g. wages are sticky). It slopes upward because higher prices increase profitability when costs are fixed. LRAS represents the economy's potential output (full-employment level) when all factors are variable and all markets have cleared. It is vertical at the full-employment level of real GDP. LRAS shifts when the economy's productive capacity changes (e.g. technology, labour force, capital stock, education).",
    tags: ['aggregate-supply'],
    difficulty: 'medium',
  },
  {
    id: 'ib-macro-5',
    front: 'Define the multiplier effect and state the formula for the spending multiplier.',
    back: 'The multiplier effect describes how an initial change in spending (injection) leads to a larger final change in national income. When the government spends extra, this becomes income for firms and workers, who then spend a proportion (determined by MPC) of that income, which becomes income for others, and so on. The spending multiplier k = 1 / (1 - MPC) = 1 / MPS, where MPC is the marginal propensity to consume and MPS is the marginal propensity to save. A higher MPC means a larger multiplier. The process converges because leakage through savings, taxation, and imports reduces the chain of spending.',
    tags: ['multiplier'],
    difficulty: 'medium',
  },
]

export const flashcard2 = [
  {
    id: 'ib-macro-6',
    front: 'Evaluate expansionary fiscal policy as a tool for managing aggregate demand.',
    back: 'Expansionary fiscal policy involves increasing government spending (G) and/or reducing taxes (T) to boost AD. Advantages (Keynesian view): effective during deep recessions, especially when monetary policy is constrained (zero lower bound); directly targets components of AD; can be targeted at specific sectors or regions. Disadvantages: time lags (recognition, decision, implementation lags); crowding out (higher government borrowing may raise interest rates, reducing private investment); may fuel inflation if the economy is near full capacity; increases the budget deficit and national debt; Ricardian equivalence suggests consumers may save tax cuts in anticipation of future tax rises.',
    tags: ['fiscal-policy'],
    difficulty: 'medium',
  },
  {
    id: 'ib-macro-7',
    front: 'Describe how the central bank uses monetary policy to control inflation.',
    back: 'The central bank (e.g. Bank of England MPC) sets the base interest rate to influence the price of borrowing. To control inflation above target: raise interest rates. Transmission mechanism: higher rates increase borrowing costs, reducing consumption (C) and investment (I); higher returns on savings discourage spending; exchange rate appreciation (due to capital inflows) reduces net exports (X - M). All these reduce AD, easing inflationary pressure. To stimulate the economy below target: cut rates for the opposite effect. The full transmission takes 12-18 months. Credibility of the central bank and inflation expectations also affect outcomes.',
    tags: ['monetary-policy'],
    difficulty: 'medium',
  },
  {
    id: 'ib-macro-8',
    front: 'Compare demand-pull inflation and cost-push inflation.',
    back: "Demand-pull inflation occurs when AD increases faster than the economy's productive capacity, pulling prices upward. Causes include increased consumer spending, government stimulus, export growth, or monetary expansion. Shown as AD shifting right along the SRAS curve, causing higher prices and higher output. Cost-push inflation occurs when production costs rise, pushing prices upward even without increased demand. Causes include rising wages, commodity price increases, exchange rate depreciation, or supply shocks. Shown as SRAS shifting left, causing higher prices but lower output (stagflation). Demand-pull is generally associated with economic growth; cost-push creates the policy dilemma of inflation alongside unemployment.",
    tags: ['inflation'],
    difficulty: 'medium',
  },
  {
    id: 'ib-macro-9',
    front: 'Distinguish between the types of unemployment and explain their causes.',
    back: "Frictional: temporary unemployment during job transitions (people moving between jobs). Structural: mismatch between workers' skills/location and available jobs (caused by deindustrialisation, technological change, or globalisation). Cyclical (demand-deficient): caused by insufficient aggregate demand during recessions (negative output gap). Seasonal: predictable unemployment linked to seasonal demand patterns (e.g. agriculture, tourism). Disguised: workers employed below their skill level or in part-time work when they want full-time. Real-wage: unemployment caused by wages being above the market-clearing level due to trade union power or minimum wage legislation.",
    tags: ['unemployment'],
    difficulty: 'easy',
  },
  {
    id: 'ib-macro-10',
    front: 'Explain the Phillips curve relationship and its policy implications.',
    back: 'The Phillips curve (1958) shows an inverse relationship between the rate of unemployment and the rate of wage inflation in the short run. When unemployment is low, firms bid up wages to attract workers, causing inflation. When unemployment is high, wage growth slows. Policy implication: governments face a trade-off between unemployment and inflation -- they can reduce unemployment at the cost of higher inflation, and vice versa. The long-run Phillips curve (Friedman, Phelps) is vertical at the natural rate of unemployment (NAIRU), suggesting no long-run trade-off. Inflation expectations shift the short-run curve; attempting to maintain unemployment below NAIRU leads to accelerating inflation.',
    tags: ['phillips-curve'],
    difficulty: 'hard',
  },
]

export const flashcard3 = [
  {
    id: 'ib-macro-11',
    front: 'Define balance of payments and describe the structure of the current account.',
    back: 'The balance of payments is a record of all economic transactions between residents of a country and the rest of the world over a given period. It must balance (double-entry bookkeeping). The current account records: (1) trade in goods (visible trade balance); (2) trade in services (invisible trade balance); (3) primary income (investment income, wages earned abroad); (4) secondary income (transfer payments, e.g. remittances, foreign aid). A current account deficit means the country imports more than it exports. financed by a surplus on the capital/financial account (borrowing or selling assets).',
    tags: ['balance-of-payments'],
    difficulty: 'easy',
  },
  {
    id: 'ib-macro-12',
    front: 'Explain the Marshall-Lerner condition and the J-curve effect.',
    back: 'The Marshall-Lerner condition states that a currency devaluation/depreciation will improve the current account balance only if the sum of the price elasticities of demand for exports and imports is greater than 1 (|PEDx + PEDm| > 1). If elastic, the quantity effect (more exports sold, fewer imports bought) outweighs the price effect (exports cheaper, imports more expensive). The J-curve effect describes how the current account initially worsens after devaluation (because import prices rise immediately while export volumes take time to adjust) before eventually improving once the Marshall-Lerner condition takes effect. The curve traces a J-shape over time.',
    tags: ['exchange-rates'],
    difficulty: 'hard',
  },
  {
    id: 'ib-macro-13',
    front: 'Compare fixed exchange rate regimes with floating exchange rate regimes.',
    back: 'Floating: the exchange rate is determined by market forces of supply and demand for the currency. Advantages: automatic adjustment of the current account (depreciation improves competitiveness); monetary policy independence; no need for large foreign exchange reserves. Disadvantages: exchange rate volatility creates uncertainty for trade and investment; speculative attacks possible. Fixed: the government/central bank pegs the currency to another currency or basket. Advantages: reduces uncertainty for trade and investment; disciplines fiscal policy; controls imported inflation. Disadvantages: requires large foreign exchange reserves; loss of monetary policy independence; vulnerable to speculative attacks if the peg is unsustainable.',
    tags: ['exchange-rates'],
    difficulty: 'medium',
  },
  {
    id: 'ib-macro-14',
    front: 'Define economic growth and distinguish between extensive and intensive growth.',
    back: 'Economic growth is an increase in the real output (real GDP) of an economy over time. Extensive growth: an increase in real GDP achieved by increasing the quantity of factors of production (more labour, more capital, more land/resources). It does not require improvements in productivity. Intensive growth: an increase in real GDP achieved by improving the quality or productivity of existing factors of production (better technology, improved skills/education, more efficient resource allocation). Intensive growth is sustainable in the long run as it is not constrained by finite resources. Supply-side policies aim to promote intensive growth by shifting LRAS to the right.',
    tags: ['economic-growth'],
    difficulty: 'medium',
  },
  {
    id: 'ib-macro-15',
    front: 'Describe the phases of a business cycle and explain the role of automatic stabilisers.',
    back: 'The business cycle has four phases: (1) Expansion (recovery): rising real GDP, falling unemployment, increasing consumer and business confidence, rising inflation. (2) Peak: maximum output, full employment, potential inflationary pressure. (3) Contraction (recession): declining real GDP (two consecutive quarters of negative growth), rising unemployment, falling confidence, deflationary risk. (4) Trough: lowest point, highest unemployment, before recovery begins. Automatic stabilisers are fiscal mechanisms that automatically counteract the cycle without explicit policy action. During expansion: rising incomes push taxpayers into higher brackets and increase welfare spending, dampening AD. During contraction: falling incomes reduce tax revenue and increase welfare payments, cushioning the fall in AD. Examples include progressive income tax and unemployment benefits.',
    tags: ['business-cycles'],
    difficulty: 'medium',
  },
]
