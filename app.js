/* ═══════════════ CONFIG ═══════════════ */
const CONFIG = {
  geminiKey: '',
  geminiModel: 'gemini-2.5-flash',
  storageKey: 'fhs_ib_prompt_history',
  maxHistory: 50
};

/* ═══════════════ SUBJECT DATABASE ═══════════════ */
const DATA = {
MYP: [
  { icon:'🌍', name:'Individuals & Societies', sub:'History, Geography, Economics',
    topics:[
      { label:'Population growth & resource scarcity', concept:'Sustainability', related:'Scarcity, Interdependence, Resilience', lp:'Thinkers, Caring, Balanced', atl:'Thinking, Research',
        scene:'A tropical island with forests, farms, ocean, mountain springs. Animated villagers smile or worry. Trees shrink when deforested. Water turns red when scarce. Fish disappear when stocks collapse.',
        sliders:['Birth rate policy (0=Family planning → 4=Very high)','Farming intensity (0=Organic → 4=Industrial)','Conservation budget (0=None → 4=Maximum)','Forest clearing (0=Protected → 4=Heavy logging)','Fish harvesting (0=Sustainable → 4=Unlimited)'],
        resources:['Food supply (80)','Fresh water (85)','Forest cover (90)','Fish stocks (85)','Community wellbeing (75)'],
        explain:'Students govern a small island over 5 decades. Every decision has second-order consequences — deforesting for farmland reduces water quality.',
        real:'Easter Island collapse, Aral Sea crisis, Atlantic Cod collapse 1992' },
      { label:'Urbanisation & city planning', concept:'Change', related:'Development, Globalisation, Perspective', lp:'Thinkers, Balanced, Principled', atl:'Thinking, Communication',
        scene:'An animated city skyline growing with population. Green parks visible or buried in concrete. Traffic colours roads green to red. Pollution hangs over skyline.',
        sliders:['Public transport (0=None → 4=Metro)','Green space (0=0% → 4=30%)','Housing density (0=Sprawl → 4=High-density)','Industrial zoning (0=None → 4=Heavy)','Migration policy (0=Closed → 4=Open)'],
        resources:['Air quality (80)','Housing affordability (65)','Employment (70)','Green space (60)','Citizen wellbeing (75)'],
        explain:'Students make 5 decades of city planning decisions. Packing housing solves affordability but kills green space.',
        real:'Singapore green city, Jakarta flooding, Copenhagen cycling revolution' },
      { label:'Migration: push & pull factors', concept:'Global interactions', related:'Perspective, Power, Movement', lp:'Open-minded, Caring', atl:'Thinking, Communication',
        scene:'A world map with animated migration arrows. Refugee camp icons glow when conditions worsen. Economic indicators float above zones.',
        sliders:['Source instability (0=Peaceful → 4=War)','Destination openness (0=Closed → 4=Welcoming)','Economic gap (0=Equal → 4=Extreme)','Remittances (0=None → 4=Full)','Integration programmes (0=None → 4=Full)'],
        resources:['Migrant wellbeing (70)','Source stability (60)','Social cohesion (75)','Productivity (65)','Cultural integration (60)'],
        explain:'Students explore push/pull factors by managing migration flows across 5 decades.',
        real:'Syrian refugee crisis, Venezuelan diaspora, Bangladesh climate migration' },
      { label:'Economic inequality & development', concept:'Development', related:'Equity, Power, Globalisation', lp:'Caring, Principled', atl:'Thinking, Research',
        scene:'A country split into wealthy and poor districts. Gini coefficient meter in center. School and hospital icons appear or disappear.',
        sliders:['Education spending (0=Cuts → 4=Universal)','Healthcare (0=Private → 4=Universal)','Taxation (0=Flat → 4=Progressive)','Trade openness (0=Protectionist → 4=Free)','Infrastructure (0=None → 4=Full)'],
        resources:['GDP per capita (55)','Gini coefficient (45)','Literacy (70)','Life expectancy (65)','Social mobility (40)'],
        explain:'Students design economic policy for a developing nation, discovering GDP growth alone does not equal development.',
        real:'Nordic model, South Korea miracle, Bolivia inequality reduction' }
    ]},
  { icon:'🔬', name:'Sciences', sub:'Biology, Chemistry, Physics',
    topics:[
      { label:'Ecosystem interdependence & food webs', concept:'Systems', related:'Interdependence, Balance, Change', lp:'Inquirers, Caring', atl:'Thinking, Research',
        scene:'A forest ecosystem — animated trees, river, sun, soil. Animals appear/disappear. Food web arrows glow. Sky changes blue to hazy brown.',
        sliders:['Predator population (0=Extinct → 4=Over)','Prey population (0=Extinct → 4=Over)','Pollution (0=None → 4=Severe)','Human development (0=Protected → 4=Deforestation)'],
        resources:['Biodiversity (80)','Plant cover (85)','Water quality (90)','Soil health (75)','Air quality (85)'],
        explain:'Students manage a forest ecosystem. Removing predators causes prey explosion and vegetation collapse — like Yellowstone wolves.',
        real:'Yellowstone wolves 1995, Great Barrier Reef bleaching, Amazon tipping point' },
      { label:'Immune system response to infection', concept:'Systems', related:'Function, Homeostasis, Interaction', lp:'Knowledgeable, Inquirers', atl:'Thinking, Self-management',
        scene:'Cross-section of human body — bloodstream as flowing red river. White blood cell warriors patrol. Pathogen blobs invade. Fever gauge on right.',
        sliders:['Immune speed (0=Dormant → 4=Hyperactive)','Antibiotic dose (0=None → 4=Maximum)','Fever level (0=None → 4=High)','Vaccination (0=None → 4=Herd immunity)'],
        resources:['White blood cells (85)','Pathogen load (10)','Organ health (80)','Energy reserves (75)','Antibody count (20)'],
        explain:'Pathogen load INCREASES each round — suppress it without triggering cytokine storm or antibiotic resistance.',
        real:'COVID-19 cytokine storm, WHO antibiotic resistance, 1918 flu' },
      { label:'Acid rain & chemical weathering', concept:'Change', related:'Consequences, Evidence, Environment', lp:'Thinkers, Principled', atl:'Research, Thinking',
        scene:'Industrial city on one side, forest and lake on the other. Smokestacks emit clouds. Rain gauge shows pH. Lake fish decrease. Statues erode.',
        sliders:['Factory emissions (0=Zero → 4=Maximum)','Scrubber tech (0=None → 4=Best)','Limestone buffer (0=None → 4=Full)','Regulation (0=None → 4=Strict)'],
        resources:['Lake pH (7.0)','Fish population (80)','Forest health (85)','Air quality (75)','Industrial output (70)'],
        explain:'Students balance industrial production against acid rain. Lake pH below 5.6 kills fish.',
        real:'Scandinavian acid rain 1970s, Clean Air Act USA, China pollution' }
    ]},
  { icon:'📐', name:'Mathematics', sub:'Number, Algebra, Statistics',
    topics:[
      { label:'Probability & risk — insurance decisions', concept:'Logic', related:'Quantity, Representation, Patterns', lp:'Thinkers, Inquirers', atl:'Thinking, Research',
        scene:'A city of houses, cars and people. Risk meters float. Insurance dashboard in corner. Disaster icons appear. Money flows as coins.',
        sliders:['Risk tolerance (0=Conservative → 4=High)','Premium pricing (0=Low → 4=High)','Investment pool (0=None → 4=Maximum)','Disaster frequency (0=Calm → 4=Crisis)'],
        resources:['Company solvency (75)','Policyholders satisfied (80)','Claims paid (70)','Profit margin (60)','Public trust (70)'],
        explain:'Students run an insurance company using real probability and expected value concepts.',
        real:"Lloyd's of London, Hurricane Katrina insurance collapse, COVID claims" },
      { label:'Linear vs exponential growth', concept:'Form', related:'Patterns, Quantity, Change', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'A planet from space — population counter orbits. Graphs show linear vs exponential curves. Carrying capacity line glows.',
        sliders:['Growth rate r (0=0.5% → 4=4.5%)','Resource consumption (0=Minimal → 4=Maximum)','Technology (0=None → 4=Breakthrough)','Policy (0=None → 4=Strict)'],
        resources:['Population billions (1.0)','Food (90)','Energy (85)','Water (80)','Carrying capacity (100)'],
        explain:'Students discover how small changes in growth rate produce exponentially different outcomes.',
        real:'UN Population Prospects, Malthus theory, India vs China policies' },
      { label:'Statistics — who does data represent?', concept:'Logic', related:'Representation, Patterns, Perspective', lp:'Thinkers, Principled', atl:'Thinking, Research',
        scene:'A survey studio with bar charts and pie charts that morph. Demographic groups glow when included or excluded. Bias indicators pulse.',
        sliders:['Sample size (0=5 → 4=10,000)','Sampling method (0=Convenience → 4=Stratified)','Question bias (0=Leading → 4=Neutral)','Data representation (0=Mean only → 4=Full stats)'],
        resources:['Statistical validity (40)','Minority representation (30)','Confidence level (50)','Margin of error (40)','Public trust (55)'],
        explain:'Students discover how the same population produces different conclusions depending on sampling and question design.',
        real:'Brexit polling failures, US 2016 polling, COVID vaccine trial diversity' }
    ]},
  { icon:'📖', name:'Language & Literature', sub:'English, Text Analysis, Media',
    topics:[
      { label:'Persuasion & rhetoric', concept:'Communication', related:'Power, Perspective, Representation', lp:'Communicators, Thinkers', atl:'Communication, Thinking',
        scene:'A media studio where presenter broadcasts. Audience reaction meter. Fact-check flags appear. Social media share counts spike or fall.',
        sliders:['Emotional appeal (0=None → 4=Manipulative)','Evidence quality (0=Fabricated → 4=Peer-reviewed)','Speaker credibility (0=Unknown → 4=High)','Repetition (0=Neutral → 4=Propaganda)'],
        resources:['Audience persuaded (50)','Critical thinking (60)','Factual accuracy (70)','Media reach (40)','Long-term trust (65)'],
        explain:"Students experiment with Aristotle's rhetorical triangle. High emotional appeal + low accuracy persuades short-term but damages trust.",
        real:'Brexit campaign, Climate denial messaging, COVID misinformation' },
      { label:'Narrative voice & reader interpretation', concept:'Perspective', related:'Representation, Communication, Identity', lp:'Thinkers, Open-minded, Communicators', atl:'Thinking, Communication',
        scene:'An animated storybook that changes character perspective. Same story events retold from different vantage points. Reader comprehension lightbulbs appear. Sympathy meters show which character the reader sides with.',
        sliders:['Narrative POV (0=Omniscient → 4=Unreliable 1st person)','Protagonist likability (0=Villain → 4=Hero)','Information withheld (0=None → 4=Full dramatic irony)','Cultural context (0=Ignored → 4=Central)'],
        resources:['Reader empathy (60)','Narrative tension (50)','Thematic depth (55)','Ambiguity level (30)','Cultural understanding (45)'],
        explain:'Students discover how the same events feel radically different depending on narrative voice and withheld information. Connects directly to MYP Language & Literature analysis of author choices.',
        real:"Atticus Finch vs Tom Robinson in To Kill a Mockingbird, Gone Girl unreliable narrator, We Need to Talk About Kevin" },
      { label:'Media bias & news framing', concept:'Representation', related:'Power, Communication, Perspective', lp:'Thinkers, Open-minded', atl:'Research, Thinking',
        scene:'A newsroom split left and right. Same event reported differently. Word choice highlights glow. Public opinion meter responds.',
        sliders:['Political framing (0=Far left → 4=Far right)','Emotional language (0=Neutral → 4=Charged)','Source diversity (0=Single → 4=Multiple)','Visual imagery (0=Sympathetic → 4=Threatening)'],
        resources:['Public outrage (30)','Factual reporting (70)','Story reach (50)','Community division (40)','Media literacy (55)'],
        explain:'Students see how the same event is framed differently by different outlets, measuring effect on public opinion.',
        real:'BBC vs Fox News, Guardian vs Daily Mail, Al Jazeera vs CNN' }
    ]},
  { icon:'🗣️', name:'Language Acquisition', sub:'Hindi, French, Spanish',
    topics:[
      { label:'Language immersion & acquisition', concept:'Communication', related:'Context, Identity, Connection', lp:'Communicators, Risk-takers', atl:'Communication, Self-management',
        scene:'A language-learning town where newcomer arrives. Signs change languages. Conversation bubbles appear. Mistake penalty tokens float.',
        sliders:['Immersion intensity (0=None → 4=Full)','Vocabulary input (0=None → 4=500/week)','Speaking practice (0=None → 4=Daily)','Error correction (0=Never → 4=Immediate)','Cultural engagement (0=Avoided → 4=Deep)'],
        resources:['Fluency (10)','Vocabulary (15)','Pronunciation (20)','Cultural competence (15)','Confidence (25)'],
        explain:"Students discover immersion alone isn't enough — vocabulary input, speaking practice, and cultural engagement all contribute.",
        real:"Krashen's input hypothesis, Canadian French immersion, Duolingo research" },
      { label:'Register & formality — social rules of language', concept:'Communication', related:'Perspective, Identity, Context', lp:'Communicators, Principled, Open-minded', atl:'Communication, Social skills',
        scene:'A series of animated social situations — job interview, family dinner, text message exchange, formal letter. A character moves between them and speech bubbles change formality. Reactions show success or awkwardness.',
        sliders:['Formality level (0=Very casual slang → 4=Highly formal)','Vocabulary choice (0=Simple everyday → 4=Academic/technical)','Cultural sensitivity (0=Ignored → 4=Fully considered)','Non-verbal cues (0=Mismatched → 4=Perfectly aligned)'],
        resources:['Communication success (60)','Social acceptance (55)','Professional impression (40)','Authenticity (70)','Misunderstanding rate (30)'],
        explain:'Students discover that being linguistically "correct" is insufficient — register, cultural context, and formality are equally important. Connects to Language B Internal Assessment oral.',
        real:'Hindi aap vs tum vs tu context, Code-switching in South African English, Japanese honorifics, Hinglish phenomenon' }
    ]},
  { icon:'🎨', name:'Arts', sub:'Visual Arts, Performing Arts',
    topics:[
      { label:'Audience response & creative decisions', concept:'Creativity', related:'Expression, Communication', lp:'Risk-takers, Communicators', atl:'Thinking, Communication',
        scene:'A theatre stage from the wings. Audience silhouettes react. Critic stars float. Box office counter updates.',
        sliders:['Artistic risk (0=Conventional → 4=Experimental)','Budget (0=Shoestring → 4=Lavish)','Marketing (0=None → 4=International)','Community engagement (0=None → 4=Co-creation)','Ticket pricing (0=Free → 4=Premium)'],
        resources:['Critical acclaim (60)','Attendance (70)','Community impact (65)','Financial sustainability (55)','Artistic integrity (80)'],
        explain:'Students explore the tension between artistic risk and commercial sustainability.',
        real:'Globe Theatre, Banksy commerciality, Hamilton economics' }
    ]},
  { icon:'💻', name:'Design & Technology', sub:'Product Design, Digital',
    topics:[
      { label:'Sustainable product design', concept:'Sustainability', related:'Innovation, Systems', lp:'Thinkers, Principled', atl:'Thinking, Self-management',
        scene:'Factory-to-consumer pipeline. Raw material sources glow. Consumer satisfaction faces appear. Landfill grows or shrinks.',
        sliders:['Material sourcing (0=Cheapest → 4=Sustainable)','Manufacturing energy (0=Coal → 4=Renewable)','Product lifespan (0=Obsolescence → 4=30-year)','Repairability (0=Sealed → 4=Modular)','End-of-life (0=Landfill → 4=Circular)'],
        resources:['Carbon footprint (40)','Satisfaction (70)','Profit margin (65)','Material waste (50)','Sustainability score (60)'],
        explain:"Students design a product's full lifecycle, discovering the trade-off between profit and sustainability.",
        real:'Apple obsolescence, Fairphone modular, EU Right to Repair 2021' }
    ]},
  { icon:'🏃', name:'PHE', sub:'Health, Sport, Wellbeing',
    topics:[
      { label:'Training load & athlete performance', concept:'Balance', related:'Function, Development, Wellbeing', lp:'Balanced, Reflective', atl:'Self-management, Thinking',
        scene:'Athlete body cross-section with muscle groups, heart, brain. Training intensity as heat. Sleep as stars. Injury risk meter.',
        sliders:['Training intensity (0=Rest → 4=Overtraining)','Sleep hours (0=4h → 4=9h)','Nutrition (0=Poor → 4=Optimised)','Mental recovery (0=Ignored → 4=Daily)','Competition frequency (0=Rarely → 4=Weekly)'],
        resources:['Performance (70)','Injury risk (20)','Mental wellbeing (75)','Endurance (65)','Recovery rate (70)'],
        explain:'Students manage an athlete over 5 seasons, learning why overtraining causes decline — periodisation science.',
        real:'Olympic periodisation, Simone Biles Tokyo 2020, Messi fitness science' }
    ]},
  { icon:'🌐', name:'Interdisciplinary', sub:'Integrated Humanities & Sciences',
    topics:[
      { label:'Human impact on the environment', concept:'Sustainability', related:'Systems, Change, Consequences', lp:'Caring, Thinkers', atl:'Research, Thinking',
        scene:'River delta from above. Upstream industry, midstream farms, downstream villages. River changes blue to brown.',
        sliders:['Industrial pollution (0=Zero → 4=Maximum)','Agricultural chemicals (0=Organic → 4=Heavy)','Wetland protection (0=None → 4=Full)','Community monitoring (0=None → 4=Citizen science)','Government enforcement (0=None → 4=Strict)'],
        resources:['River quality (80)','Fish population (75)','Mangrove coverage (70)','Farming productivity (65)','Community health (75)'],
        explain:'Students examine a river delta from science and social science perspectives simultaneously.',
        real:'Ganges pollution, Mekong dam controversy, Rhine clean-up' },
      { label:'Trade routes & cultural exchange', concept:'Global interactions', related:'Change, Causality, Perspective', lp:'Open-minded, Knowledgeable', atl:'Research, Thinking',
        scene:'Ancient world map with animated trade ships and caravans. Goods flow between civilisations. Cultural fusion icons appear.',
        sliders:['Trade volume (0=None → 4=Maximum)','Cultural openness (0=Isolationist → 4=Full)','Disease control (0=None → 4=Quarantine)','Military protection (0=None → 4=Armed)','Technology transfer (0=Blocked → 4=Shared)'],
        resources:['Economic wealth (60)','Cultural diversity (50)','Disease risk (30)','Political stability (65)','Tech advancement (45)'],
        explain:'Students discover trade routes spread ideas, religions, diseases, and technologies simultaneously.',
        real:'Silk Road, Columbian Exchange, Indian Ocean trade' }
    ]}
],

DP: [
  { icon:'📊', name:'Business Management', sub:'SL & HL',
    topics:[
      { label:'Marketing mix optimisation', concept:'Strategy', related:'Markets, Consumer behaviour', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'Retail HQ — store fronts with footfall, social media dashboard, product shelf with price tag, factory. Competitor moves in.',
        sliders:['Price point (0=Below cost → 4=Premium)','Promotion spend (0=None → 4=Mass media)','Product innovation (0=Unchanged → 4=Redesign)','Distribution (0=One outlet → 4=Omnichannel)','Target segment (0=Mass → 4=Niche)'],
        resources:['Market share (25)','Brand awareness (50)','Customer loyalty (45)','Profit margin (30)','Sales volume (60)'],
        explain:'Students run 5 quarters of marketing decisions. Cutting price grows volume but kills margins.',
        real:'Apple pricing, Coca-Cola vs Pepsi, Dollar Shave Club disruption' },
      { label:'Break-even analysis & production', concept:'Efficiency', related:'Finance, Decision-making', lp:'Thinkers, Balanced', atl:'Thinking, Research',
        scene:'Factory floor with production line. Each unit adds revenue coin and cost chip. Break-even line glows on graph.',
        sliders:['Units produced (0=100 → 4=10,000)','Selling price (0=Below cost → 4=Premium)','Variable cost (0=Optimised → 4=Inefficient)','Fixed cost (0=Minimal → 4=Heavy)','Automation (0=None → 4=Full)'],
        resources:['Revenue (variable)','Total cost (variable)','Profit/Loss (breakeven)','Margin of safety (0)','Break-even units (variable)'],
        explain:'Students manipulate break-even in real time, discovering how automation shifts fixed vs variable costs.',
        real:'Tesla Gigafactory, Restaurant margin economics, Airline fixed cost crisis' },
      { label:'Motivation theories & culture', concept:'Human resource management', related:'Culture, Leadership', lp:'Caring, Balanced', atl:'Thinking, Social skills',
        scene:'Animated office — worker happiness icons float. Productivity counter ticks. Staff turnover as characters leave. Manager style changes.',
        sliders:['Pay & incentives (0=Below market → 4=High)','Autonomy (0=Micromanagement → 4=Full)','Career development (0=None → 4=Training)','Working conditions (0=Poor → 4=Best)','Management style (0=Autocratic → 4=Laissez-faire)'],
        resources:['Productivity (65)','Satisfaction (60)','Retention (70)','Innovation (45)','Culture score (55)'],
        explain:"Students apply Maslow's hierarchy, Herzberg's two-factor, and McGregor's Theory X/Y.",
        real:"Google culture, Amazon conditions, Patagonia benefits, Zappos experiment" },
      { label:'International expansion — market entry strategies', concept:'Growth', related:'Globalisation, Risk, Culture', lp:'Thinkers, Open-minded, Knowledgeable', atl:'Thinking, Research',
        scene:'A world map where a home company expands arrows into new countries. Entry mode icons appear (franchise, joint venture, wholly owned). Cultural distance meter glows. Local competitor brands react. Currency ticker runs.',
        sliders:['Entry mode (0=Exporting → 4=Wholly owned subsidiary)','Local adaptation (0=Standardised → 4=Fully localised)','Investment commitment (0=Minimal → 4=Full)','Local partnership (0=None → 4=Joint venture)','Market research quality (0=None → 4=Comprehensive)'],
        resources:['Market penetration (10)','Cultural fit (50)','Profit repatriated (35)','Brand recognition local (20)','Political risk (40)'],
        explain:"Students discover why McDonald's India removed beef, why Walmart failed in Germany, and why Starbucks succeeded in China. Applies Hofstede's cultural dimensions to real entry strategy decisions.",
        real:"McDonald's India localisation, Walmart Germany failure, Starbucks China adaptation, Tata Motors Jaguar acquisition" }
    ]},
  { icon:'📈', name:'Economics', sub:'SL & HL',
    topics:[
      { label:'Government fiscal policy', concept:'Equilibrium', related:'Markets, Intervention, Trade-offs', lp:'Thinkers, Balanced', atl:'Thinking, Research',
        scene:'Cartoon economy — factories, workers, tax coins fly to government, spending flows back as schools. GDP counter. Inflation thermometer.',
        sliders:['Government spending (0=Austerity → 4=Stimulus)','Tax rate (0=0% → 4=60%)','Interest rate (0=0% → 4=15%)','Tariffs (0=Free trade → 4=Protectionism)','Minimum wage (0=None → 4=Very high)'],
        resources:['GDP growth (2.0)','Unemployment (6)','Inflation (2)','Gini equality (0.45)','Government debt (40)'],
        explain:'Students navigate a national economy, discovering macro trade-offs — cutting taxes raises growth but increases debt.',
        real:'2008 Financial Crisis, Volcker shock USA, Venezuela hyperinflation' },
      { label:'Price elasticity & welfare effects', concept:'Intervention', related:'Markets, Elasticity, Welfare', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'Animated supply-demand diagram — curves shift visually. Consumer surplus in blue, producer in gold. Welfare triangles form.',
        sliders:['Price ceiling/floor (0=Below equilibrium → 4=Above)','Subsidy amount (0=None → 4=Heavy)','Tax per unit (0=None → 4=Heavy)','Demand elasticity (0=Inelastic → 4=Elastic)','Market structure (0=Monopoly → 4=Perfect competition)'],
        resources:['Consumer surplus (70)','Producer surplus (65)','Budget impact (50)','Deadweight loss (0)','Market efficiency (80)'],
        explain:'Students observe welfare effects of intervention. Price ceilings create shortages; taxes generate deadweight loss.',
        real:'Rent control NYC, EU subsidies, UK sugar tax, Uber surge pricing' },
      { label:'Exchange rates & international trade', concept:'Interdependence', related:'Globalisation, Trade', lp:'Thinkers, Balanced', atl:'Thinking, Research',
        scene:'Currency exchange desk with flags. Export/import containers flow across ocean. Trade balance meter. Currency values change flag sizes.',
        sliders:['Exchange rate (0=Weak → 4=Strong)','Export competitiveness (0=High cost → 4=Low cost)','Import tariffs (0=Free → 4=Protection)','FDI (0=None → 4=Maximum)','Inflation differential (0=Lower → 4=Higher)'],
        resources:['Trade balance (balanced)','Export volume (65)','Import costs (55)','Current account (0)','Foreign reserves (60)'],
        explain:'Students discover how strong currency hurts exports but cheapens imports — the core exchange rate trade-off.',
        real:'Brexit pound collapse, Japanese yen 2022, Chinese yuan managed float' }
    ]},
  { icon:'🧮', name:'Mathematics AA', sub:'SL & HL — Analysis & Approaches',
    topics:[
      { label:'Calculus optimisation', concept:'Function', related:'Change, Patterns, Modelling', lp:'Thinkers, Inquirers', atl:'Thinking, Research',
        scene:'3D surface landscape — hills are maxima, valleys minima. Gradient arrow shows derivative direction. Optimisation target bounces when found.',
        sliders:['Function complexity (0=Linear → 4=Degree 6)','Domain restriction (0=All reals → 4=Constrained)','Application context (0=Abstract → 4=Revenue model)','Method (0=Estimate → 4=Exact derivative)'],
        resources:['Distance from maximum (variable)','Derivative at point (variable)','Accuracy of optimum (50)','Critical points (1)','Understanding (40)'],
        explain:'Students hunt for maxima and minima — first/second derivative tests, graphical inspection, numerical methods.',
        real:'Revenue maximisation, Least material packaging, Drug dosage pharmacokinetics' },
      { label:'Probability distributions', concept:'Patterns', related:'Quantity, Representation, Models', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'Factory quality control — products measured. Histogram builds. Normal curve overlays. Standard deviation arrows. Z-score calculator.',
        sliders:['Sample size n (0=10 → 4=500)','Population mean μ (0=50 → 4=80)','Standard deviation σ (0=1 → 4=20)','Distribution shape (0=Normal → 4=Skewed)','Confidence level (0=50% → 4=99%)'],
        resources:['Confidence interval width (variable)','P-value (variable)','Type I error risk (5%)','Type II error risk (20%)','Representativeness (60)'],
        explain:'Students discover how sample size affects confidence interval width and why large σ makes predictions less reliable.',
        real:'COVID vaccine trials, Polling margin of error, Medical screening false positives' },
      { label:'Differential equations — Lotka-Volterra predator-prey', concept:'Change', related:'Function, Patterns, Modelling', lp:'Inquirers, Thinkers', atl:'Thinking, Research',
        scene:'Rabbits and foxes in a meadow — the Lotka-Volterra model visualised. Rabbit and fox populations oscillate as animated numbers. A phase portrait draws itself on a side panel.',
        sliders:['Rabbit birth rate α (0=0.2 → 4=1.5)','Fox predation rate β (0=0.01 → 4=0.1)','Fox death rate γ (0=0.1 → 4=0.8)','Fox efficiency δ (0=0.01 → 4=0.1)','Initial rabbit population (0=10 → 4=200)'],
        resources:['Rabbit population (variable)','Fox population (variable)','System stability (variable)','Oscillation period (variable)','Extinction risk (low)'],
        explain:'Students model the Lotka-Volterra predator-prey system, seeing how parameters control oscillation, stability, and extinction risk. HL students connect to Euler\'s method for numerical solutions.',
        real:'Lynx-snowshoe hare 90-year cycles, Yellowstone wolf-elk dynamics, Fisheries quota setting, Epidemiological SIR model' }
    ]},
  { icon:'📉', name:'Mathematics AI', sub:'SL & HL — Applications & Interpretation',
    topics:[
      { label:'Statistical modelling — regression', concept:'Models', related:'Patterns, Quantity, Representation', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'Scatter plot populating in real time. Regression line shifts. Residual dots glow red. Prediction interval bands. R² counter.',
        sliders:['Correlation strength (0=None → 4=Perfect)','Sample size (0=5 → 4=100)','Outlier presence (0=None → 4=Extreme)','Model type (0=Linear → 4=Polynomial)','Extrapolation (0=Within data → 4=Far beyond)'],
        resources:['R² value (variable)','Residual sum (variable)','Prediction accuracy (variable)','Overfitting risk (20)','Reliability score (65)'],
        explain:'Students discover when correlation is meaningful, why outliers distort regression, and why extrapolation is dangerous.',
        real:'Housing price prediction, COVID vaccination regression, Sports analytics' },
      { label:'Network theory & optimisation — shortest paths', concept:'Systems', related:'Patterns, Logic, Models', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'An animated city map with nodes (delivery stops) and edges (roads). A delivery vehicle moves along routes. Critical path chart builds in Gantt-style. Bottleneck nodes glow red when causing delay.',
        sliders:['Number of delivery nodes (0=4 → 4=20)','Traffic congestion (0=Free-flowing → 4=Gridlock)','Algorithm used (0=Random → 4=Dijkstra optimal)','Activity float (0=None → 4=High buffer)','Critical path activities (0=All parallel → 4=All sequential)'],
        resources:['Shortest route km (variable)','Total delivery time (variable)','Critical path duration (variable)','Float available (variable)','Optimisation efficiency (40)'],
        explain:"Students navigate Dijkstra's algorithm and critical path analysis. Discovers why shortest distance isn't always fastest and why critical path activities cannot be delayed. AI HL topic.",
        real:'Google Maps routing, Amazon last-mile delivery, Construction project critical path, Emergency services routing' },
      { label:'Financial mathematics — compound interest', concept:'Quantity', related:'Patterns, Models, Change', lp:'Thinkers, Balanced', atl:'Thinking, Research',
        scene:'Personal finance dashboard — house purchase meter, savings jar, debt pile, investment portfolio. Compound interest animation.',
        sliders:['Interest rate (0=1% → 4=18%)','Compounding frequency (0=Annual → 4=Daily)','Time horizon years (0=1 → 4=30)','Monthly repayment (0=Minimum → 4=Maximum)','Inflation rate (0=0% → 4=8%)'],
        resources:['Future value (variable)','Loan balance (variable)','Real value after inflation (variable)','Total interest paid (variable)','Net worth (50)'],
        explain:'Students experience compound interest firsthand — small rate differences create enormous differences over 30 years.',
        real:'Student loan trap, Warren Buffett investing, Mortgage amortisation' }
    ]},
  { icon:'💻', name:'Computer Science', sub:'SL & HL',
    topics:[
      { label:'Algorithm efficiency — Big O', concept:'Efficiency', related:'Logic, Systems, Processing', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'Array of numbered boxes being sorted. Comparison flashes. Operations counter ticks. Graph of n vs operations plots in real time.',
        sliders:['Array size n (0=10 → 4=10,000)','Algorithm (0=Bubble O(n²) → 4=Merge O(n log n))','Pre-sortedness (0=Sorted → 4=Reverse)','Memory constraint (0=Unlimited → 4=O(1))','Problem type (0=Searching → 4=Sorting)'],
        resources:['Operations count (variable)','Time complexity (variable)','Space used (variable)','Worst-case (variable)','Correctness (100)'],
        explain:'Students see Big O made concrete — bubble sort on 10,000 items catastrophically worse than merge sort.',
        real:'Google search indexing, DNA sequence alignment, GPS shortest path' },
      { label:'Cybersecurity & encryption — keeping data safe', concept:'Privacy and security', related:'Systems, Ethics, Communication', lp:'Principled, Thinkers', atl:'Thinking, Research',
        scene:'A network diagram with client, server, and interceptor nodes. Data packets travel as animated blobs. Encryption lock icons appear when protocols activate. Attack arrows show interception attempts. Security rating badge updates.',
        sliders:['Encryption strength (0=Plaintext → 4=AES-256)','Password complexity (0=123456 → 4=Cryptographically random)','Authentication layers (0=None → 4=Multi-factor)','Software update frequency (0=Never → 4=Automatic)','User training (0=None → 4=Regular)'],
        resources:['Data breach risk (70)','System performance (80)','User friction (20)','Recovery time if breached (variable)','Compliance score (40)'],
        explain:"Students discover security is always a trade-off with usability — maximum encryption reduces breach risk but increases friction. Human factors often matter more than technical measures. Core DP CS Option D material.",
        real:'Equifax 2017 breach 147M records, WannaCry ransomware NHS shutdown, Signal vs WhatsApp encryption, GDPR compliance' },
      { label:'AI & machine learning ethics', concept:'Ethics in computing', related:'Bias, Decision-making', lp:'Principled, Caring', atl:'Thinking, Research',
        scene:'AI decision engine as a black box. Data flows in, decisions out. Bias meter measures fairness. Accuracy vs fairness graph updates.',
        sliders:['Training data diversity (0=Homogeneous → 4=Representative)','Model transparency (0=Black box → 4=Explainable)','Accuracy optimisation (0=Fairness first → 4=Accuracy only)','Human oversight (0=None → 4=Human in loop)','Consent (0=None → 4=Informed)'],
        resources:['Accuracy (80)','Fairness (45)','Public trust (50)','Transparency (30)','Harm prevention (40)'],
        explain:'Students discover the accuracy-fairness trade-off: optimising accuracy often increases bias against minorities.',
        real:'Amazon hiring bias, COMPAS racial bias, Facial recognition misidentification' }
    ]},
  { icon:'⚗️', name:'Chemistry', sub:'SL & HL',
    topics:[
      { label:"Chemical equilibrium — Haber Process", concept:'Equilibrium', related:'Energetics, Kinetics', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'Haber Process plant — N₂ and H₂ molecules flow in, NH₃ out. Pressure/temperature dials. Yield counter. Cost meter.',
        sliders:['Temperature °C (0=200 → 4=600)','Pressure atm (0=50 → 4=300)','Catalyst quality (0=None → 4=Promoted iron)','Reactant ratio (0=1:1 → 4=1:3 stoich)'],
        resources:['NH₃ yield (variable)','Reaction rate (medium)','Energy cost (50)','Equipment stress (30)','Efficiency (65)'],
        explain:'Students optimise the Haber Process — why real conditions (450°C, 200 atm) are a compromise, not the thermodynamic optimum.',
        real:'Haber-Bosch feeds 50% of world, Fritz Haber controversy, Green ammonia' },
      { label:'Electrochemistry & galvanic cell optimisation', concept:'Reactivity', related:'Energetics, Redox, Electrochemistry', lp:'Knowledgeable, Thinkers', atl:'Thinking, Research',
        scene:'Laboratory bench with two beaker half-cells connected by a salt bridge. Electrode surfaces show deposits forming or dissolving. Voltmeter display updates in real time. Electron flow animates through the external circuit wire.',
        sliders:['Electrolyte concentration mol/dm³ (0=0.01 → 4=1.0)','Temperature K (0=273 → 4=373)','Electrode surface area cm² (0=Minimal → 4=Maximum)','Salt bridge concentration (0=Dilute → 4=Saturated)'],
        resources:['E°cell voltage (variable)','Current output mA (60)','Electrode mass change g (0)','Cell longevity hours (80)','Efficiency % (70)'],
        explain:'Students optimise a Zn/Cu galvanic cell, applying Nernst equation principles to see how concentration and temperature affect Ecell. Each round includes an examiner-style 2–4 mark question.',
        real:'Lithium-ion battery development, Hydrogen fuel cells, NASA spacecraft power, EV battery chemistry, Redox flow batteries' },
      { label:'Acid-base chemistry & buffers', concept:'Equilibrium', related:'Acids and bases, pH', lp:'Inquirers, Thinkers', atl:'Thinking, Research',
        scene:'Laboratory titration — burette dripping. pH indicator changes colour. pH curve draws itself. Equivalence point flashes. Buffer zone highlighted.',
        sliders:['Acid concentration (0=0.01 → 4=1.0)','Base added cm³ (0=0 → 4=50)','Buffer salt (0=None → 4=Saturated)','Weak vs strong acid (0=Strong → 4=Weak)'],
        resources:['pH value (7.0)','Buffer capacity (0)','Distance from equivalence (25)','Endpoint accuracy (70)','Indicator colour (neutral)'],
        explain:'Students perform virtual titration and observe pH curve — weak acid + conjugate base creates a buffer zone.',
        real:'Blood pH buffering (7.35-7.45), Ocean acidification, Antacid chemistry' }
    ]},
  { icon:'🧬', name:'Biology', sub:'SL & HL',
    topics:[
      { label:'Population genetics & Hardy-Weinberg', concept:'Evolution', related:'Genetics, Natural selection', lp:'Inquirers, Thinkers', atl:'Thinking, Research',
        scene:'Gene pool as a pond — allele frequency bubbles float in colours. Selection arrows push alleles. Gene flow arrows. Drift shown as random swirls.',
        sliders:['Selection pressure (0=None → 4=Extreme)','Population size (0=10 → 4=10,000)','Mutation rate (0=None → 4=High)','Gene flow (0=Isolated → 4=Open)','Genetic bottleneck (0=None → 4=Severe)'],
        resources:['Dominant allele freq p (0.7)','Recessive allele freq q (0.3)','Heterozygote advantage (50)','Population fitness (70)','Evolutionary change (low)'],
        explain:'Students manipulate Hardy-Weinberg variables to see when equilibrium breaks down.',
        real:'Sickle cell heterozygote advantage, Cheetah bottleneck, Industrial melanism' },
      { label:'Thermoregulation & homeostasis under stress', concept:'Homeostasis', related:'Feedback, Regulation, Systems', lp:'Knowledgeable, Thinkers', atl:'Thinking, Self-management',
        scene:'A human body silhouette with core temperature shown as a heat map. Sweat drops appear in heat. Shivering animation in cold. Hypothalamus node highlighted as controller. Blood vessel dilation/constriction visible at skin.',
        sliders:['Environmental temperature °C (0=−20 → 4=+50)','Exercise intensity (0=Complete rest → 4=Maximum)','Hydration level (0=Dehydrated → 4=Optimal)','Acclimatisation time (0=None → 4=6 weeks)'],
        resources:['Core body temperature °C (37.0)','Sweat rate ml/hr (0)','Blood flow to skin % (30)','Heat stroke risk (0)','Hypothermia risk (0)'],
        explain:'Students maintain core temperature within the survivable range across 5 environmental challenges. Going above 40°C or below 35°C triggers physiological crisis. Models emergency medicine and extreme sports physiology.',
        real:'2003 European heatwave 15,000 deaths, Everest altitude hypoxia, Marathon runner heat collapse, Antarctic expedition physiology' },
      { label:'Photosynthesis & respiration — energy flow', concept:'Energy transfer', related:'Function, Systems', lp:'Inquirers, Knowledgeable', atl:'Thinking, Research',
        scene:'Leaf cell cross-section — chloroplasts glowing. Light rays hit thylakoid. ATP as coins. Calvin cycle rotating. Mitochondria below.',
        sliders:['Light intensity (0=Dark → 4=Full sun)','CO₂ concentration (0=0% → 4=0.4%)','Temperature °C (0=0 → 4=45)','Chlorophyll (0=None → 4=Maximum)'],
        resources:['Photosynthesis rate (variable)','Respiration rate (variable)','Net gas exchange (variable)','ATP production (variable)','Compensation point (no)'],
        explain:'Students discover limiting factors of photosynthesis and find the compensation point where photosynthesis equals respiration.',
        real:'C3 vs C4 plants, LED greenhouse farming, Algae biofuel, Global dimming' }
    ]},
  { icon:'⚡', name:'Physics', sub:'SL & HL',
    topics:[
      { label:'Projectile motion & launch optimisation', concept:'Motion', related:'Forces, Energy, Vectors', lp:'Thinkers, Knowledgeable', atl:'Thinking, Research',
        scene:'Side-view trajectory range — launch ramp, target zones. Arc traces in real time. Vector arrows show components. Range displayed.',
        sliders:['Launch angle θ° (0=0° → 4=90°)','Initial speed u (0=5 → 4=50 m/s)','Air resistance (0=Vacuum → 4=High drag)','Launch height (0=Ground → 4=20m)'],
        resources:['Horizontal range (variable)','Max height (variable)','Time of flight (variable)','Target zone hit (variable)','Energy efficiency (70)'],
        explain:'Students find the optimal launch angle (45° in vacuum, less with drag) through experimental rounds.',
        real:'Mars Perseverance landing, Golf ball aerodynamics, Javelin biomechanics' },
      { label:'Electromagnetic induction & power', concept:'Fields', related:'Induction, Energy, AC/DC', lp:'Thinkers, Inquirers', atl:'Thinking, Research',
        scene:'Power station — rotating coil in magnetic field. EMF waveform on oscilloscope. Transmission lines to city. Energy loss as heat glow.',
        sliders:['Rotation speed rpm (0=10 → 4=3000)','Coil turns N (0=10 → 4=500)','Field strength T (0=0.1 → 4=2.0)','Transformer ratio (0=1:1 → 4=1:100)'],
        resources:['Peak EMF volts (variable)','Frequency Hz (variable)','Power output kW (variable)','Transmission loss (35)','Grid efficiency (65)'],
        explain:"Students design power generation applying Faraday's law — revealing why high-voltage transmission minimises loss.",
        real:'National Grid 400kV, Hoover Dam generators, Wind turbine scaling, MRI fields' }
    ]},
  { icon:'🌱', name:'Environmental Systems', sub:'ESS',
    topics:[
      { label:'Carbon cycle & climate feedback', concept:'Systems and models', related:'Flows, Feedback, Climate', lp:'Caring, Thinkers', atl:'Thinking, Research',
        scene:'Earth cross-section — atmosphere CO₂ rising. Ocean absorbs carbon. Forests as sinks. Arctic ice grows/shrinks. Temperature counter.',
        sliders:['Fossil fuel burning (0=Zero → 4=Maximum)','Deforestation (0=Reforestation → 4=Heavy)','Renewable adoption (0=None → 4=100%)','Carbon capture (0=None → 4=Full)','Methane emissions (0=Controlled → 4=Permafrost collapse)'],
        resources:['CO₂ ppm (280)','Temperature anomaly (0)','Ocean pH (8.1)','Ice extent (100)','Ecosystem stability (80)'],
        explain:'Students manage the carbon cycle, experiencing how feedback loops accelerate warming non-linearly. Tipping points trigger at thresholds.',
        real:'IPCC 1.5°C scenarios, Amazon dieback, Arctic permafrost methane, Paris Agreement' },
      { label:'Biodiversity & ecosystem services', concept:'Biodiversity', related:'Systems, Value, Sustainability', lp:'Caring, Principled', atl:'Research, Thinking',
        scene:'Tropical rainforest canopy viewed from above. Species diversity shown as coloured spots. Pollinator routes animate between flowers. Water cycle arrows show rainfall → infiltration → river flow. Local community village at the edge.',
        sliders:['Habitat fragmentation (0=Continuous forest → 4=Highly fragmented)','Invasive species control (0=None → 4=Active)','Sustainable harvesting (0=Clear-cutting → 4=Selective)','Protected area network (0=No reserves → 4=30% protected)','Community involvement (0=Excluded → 4=Community-led)'],
        resources:['Species richness (80)','Pollination services (75)','Water regulation (70)','Carbon sequestration (85)','Community livelihoods (60)'],
        explain:'Students discover biodiversity loss is not just ethical — ecosystem services have direct economic value. Losing pollinators collapses food production; losing forest reduces rainfall.',
        real:'Costa Rica payments for ecosystem services, Bee colony collapse disorder, Great Barrier Reef tourism value, European rewilding projects' }
    ]},
  { icon:'🌐', name:'Global Politics', sub:'Power, Rights, Development',
    topics:[
      { label:'International aid & development', concept:'Sovereignty and interdependence', related:'Development, Power, Human rights', lp:'Caring, Principled', atl:'Thinking, Research',
        scene:'World map with aid flows as arrows. HDI scores glow. Corruption clouds hover. Schools/hospitals appear or disappear.',
        sliders:['Aid volume (0=Zero → 4=Maximum)','Aid conditionality (0=Unconditional → 4=Strict)','Local ownership (0=Donor-led → 4=Community-led)','Corruption control (0=None → 4=Strict)','Aid type (0=Emergency → 4=Capacity building)'],
        resources:['HDI improvement (0)','Dependency index (30)','Local capacity (50)','Corruption (60)','Community trust (60)'],
        explain:'Students design aid programmes, discovering why large volumes often underperform when they create dependency.',
        real:'Sachs vs Easterly debate, Marshall Plan, GiveDirectly cash transfers, Belt and Road' },
      { label:'Nuclear deterrence & global security dilemmas', concept:'Peace and conflict', related:'Power, Security, Sovereignty', lp:'Principled, Thinkers, Balanced', atl:'Thinking, Research',
        scene:'Cold-war style global map with nuclear-capable state icons. Tension meter in center shows escalation risk. Diplomatic channel lines glow when active. Arms control treaty icons appear when agreements are signed.',
        sliders:['Nuclear arsenal size (0=Unilateral disarmament → 4=Maximum build-up)','Diplomatic engagement (0=None → 4=Full multilateral)','Missile defence systems (0=None → 4=Comprehensive)','Arms control treaties (0=All violated → 4=Fully compliant)','Economic interdependence (0=None → 4=Deep trade ties)'],
        resources:['Global security index (60)','Escalation risk (30)','Diplomatic trust (50)','Economic stability (65)','Deterrence credibility (70)'],
        explain:'Students experience the security dilemma firsthand — building up weapons for security triggers the adversary to do the same, ultimately making everyone less safe. Models Cold War arms race and current nuclear multipolarity.',
        real:'Cold War MAD doctrine, Cuban Missile Crisis 1962, NPT non-proliferation, North Korea deterrence, India-Pakistan nuclear posture' }
    ]},
  { icon:'📝', name:'English A', sub:'Lang & Lit / Literature SL & HL',
    topics:[
      { label:"Author's choices — constructing meaning", concept:'Perspective', related:'Representation, Communication', lp:'Thinkers, Open-minded', atl:'Thinking, Communication',
        scene:'Animated manuscript — words shift as choices change. Narrative voice as spotlight. Time structure reorders. Imagery as colour saturation.',
        sliders:['Narrative POV (0=Omniscient → 4=Unreliable 1st)','Chronology (0=Linear → 4=Fragmented)','Imagery density (0=Plain → 4=Figurative)','Tone (0=Detached → 4=Engaged)','Dialogue proportion (0=None → 4=Entirely)'],
        resources:['Reader engagement (55)','Thematic clarity (65)','Interpretive openness (40)','Character depth (60)','Stylistic memorability (45)'],
        explain:'Students make author choices observing how they shift reader experience. Unreliable narrator creates ambiguity but risks confusion.',
        real:"Ishiguro's Remains of the Day, Morrison's Beloved, Camus' The Stranger" },
      { label:'Language & power — who controls the narrative?', concept:'Power', related:'Identity, Representation, Communication', lp:'Principled, Open-minded, Thinkers', atl:'Thinking, Communication, Research',
        scene:'A city square where different groups hold signs with different words for the same concept. A dominant narrative spotlight shines on some voices, leaving others in shadow. Dictionary icons show word choices shifting. Protest vs propaganda tension meter.',
        sliders:['Institutional power of speaker (0=Marginalised → 4=State/media authority)','Euphemism level (0=Neutral → 4=Heavy political framing)','Media platform access (0=None → 4=Mass reach)','Counter-narrative visibility (0=Suppressed → 4=Amplified)','Historical context (0=Erased → 4=Fully contextualised)'],
        resources:['Dominant narrative strength (70)','Marginalised voice visibility (25)','Public awareness (50)','Historical accuracy (55)','Linguistic fairness (40)'],
        explain:"Students discover how language itself is a site of power — who gets to name things, which words are chosen, whose stories are amplified. Connects to DP English A's focus on language, identity, and representation.",
        real:"Orwell's Politics and the English Language, Colonial renaming (Mumbai vs Bombay), LGBTQ+ language evolution, Indigenous language reclamation" },
      { label:'Intertextuality — how texts speak to each other', concept:'Transformation', related:'Perspective, Culture, Communication', lp:'Knowledgeable, Thinkers, Open-minded', atl:'Research, Thinking, Communication',
        scene:'A literary web — books float as connected nodes. Quotation arrows glow between texts. Allusion threads connect across time periods and cultures. A transformation meter shows how much each text changes its source.',
        sliders:['Degree of borrowing (0=Original → 4=Pastiche/parody)','Time gap between texts (0=Same era → 4=Centuries apart)','Cultural distance (0=Same culture → 4=Cross-cultural)','Transformation type (0=Direct quotation → 4=Complete subversion)','Student familiarity with source (0=Unknown → 4=Deeply known)'],
        resources:['Intertextual richness (variable)','Transformation creativity (variable)','Reader recognition (50)','Critical depth enabled (45)','Cultural dialogue achieved (40)'],
        explain:'Students experience how intertextual connections work by adjusting degree and nature of borrowing. Reveals why parody requires deep familiarity with the original. Connects to DP English A HL textual transformation.',
        real:"Jean Rhys's Wide Sargasso Sea responding to Jane Eyre, Adichie's Purple Hibiscus as Things Fall Apart echo, Rosencrantz and Guildenstern Are Dead" }
    ]},
  { icon:'🙏', name:'Hindi A/B', sub:'Language Acquisition & Literature',
    topics:[
      { label:'Hindi acquisition — immersion, input & identity', concept:'Communication', related:'Context, Identity, Culture', lp:'Communicators, Open-minded, Risk-takers', atl:'Communication, Self-management',
        scene:'An animated Hindi-language town (शहर) where a learner walks through markets, schools, and homes. Devanagari script appears on signs. Speech bubbles show comprehension increasing. A mother-tongue interference cloud hovers and shrinks with immersion.',
        sliders:['Immersion depth (0=No Hindi → 4=Full immersion)','Listening input quality (0=Simplified → 4=Authentic native speed)','Reading practice (0=None → 4=Daily newspaper)','Speaking output (0=Silent → 4=Daily conversation)','Script fluency (0=Roman transliteration → 4=Full Devanagari)'],
        resources:['Speaking fluency (10)','Reading comprehension (15)','Listening accuracy (20)','Cultural competence (25)','Confidence level (30)'],
        explain:"Students experience how Hindi acquisition works through the relationship between input (listening/reading) and output (speaking/writing). Connects Krashen's input hypothesis to Hindi specifically — including the Devanagari script barrier.",
        real:"Mumbai's multilingual code-switching, Bollywood as language learning tool, Hindi Belt vs South India politics, Sanskrit influence on Hindi, Hinglish as global phenomenon" },
      { label:'Hindi साहित्य — text, context & society', concept:'Perspective', related:'Identity, Culture, Representation', lp:'Open-minded, Knowledgeable, Thinkers', atl:'Thinking, Communication, Research',
        scene:'An animated literary timeline of Hindi literature — from Kabir and Mirabai through Premchand to modern digital poetry. Author portraits glow as eras are selected. Social conditions of each era appear as background illustrations.',
        sliders:['Time period (0=Bhakti era 15th century → 4=Digital age 21st century)','Socio-political context (0=Colonial suppression → 4=Post-independence democracy)','Author positionality (0=Upper caste → 4=Dalit/marginalised voice)','Genre (0=Classical poetry → 4=Contemporary prose/digital)','Censorship level (0=Open expression → 4=Heavy restriction)'],
        resources:['Social commentary depth (60)','Literary innovation (55)','Representation of marginalised (40)','Reader accessibility (65)','Cultural preservation (70)'],
        explain:"Students explore how Hindi literary texts reflect and challenge social conditions of their time — from Bhakti devotion challenging caste hierarchy to Premchand's rural realism to contemporary Dalit literature. Core DP Hindi A Literature framework.",
        real:"Premchand's Godan agrarian crisis, Kabir's caste-challenging dohas, Mahadevi Varma's feminist poetry, Omprakash Valmiki's Joothan Dalit autobiography" }
    ]},
  { icon:'🧠', name:'Psychology', sub:'SL & HL',
    topics:[
      { label:'Memory models & cognitive load', concept:'Cognitive processes', related:'Memory, Learning, Attention', lp:'Thinkers, Inquirers', atl:'Thinking, Self-management',
        scene:'Brain cross-section — sensory store as flickering lights, STM as spinning workspace with 7 slots, LTM as vast filing cabinet.',
        sliders:['Chunking strategy (0=None → 4=Expert)','Rehearsal (0=Zero → 4=Spaced repetition)','Emotional significance (0=None → 4=High)','Distraction (0=Silent → 4=High noise)','Sleep quality (0=None → 4=8 hours)'],
        resources:['STM retention (70)','LTM consolidation (40)','Recall accuracy (55)','Cognitive load (50)','Retrieval ease (60)'],
        explain:'Students encode information through Multi-Store and Working Memory models across 5 learning scenarios.',
        real:'Ebbinghaus forgetting curve, HM patient amnesia, Loftus false memory, Spaced repetition apps' }
    ]}
]
};

/* ═══════════════ FRAMEWORKS ═══════════════ */
const FRAMEWORKS = [
  { id:'rtf', name:'RTF', full:'Role, Task, Format', desc:'Structures prompts by defining a clear role, task, and output format',
    tpl:'**RTF Framework:**\n- Define a clear role for the AI\n- State the task explicitly\n- Specify the desired output format\n' },
  { id:'spark', name:'SPARK', full:'Simplicity, Purpose, Adaptability, Relevance, Knowledge', desc:'Creates clear, purposeful prompts that adapt to student needs',
    tpl:'**SPARK Framework:**\n- Keep explanations simple and clear\n- Define educational purpose explicitly\n- Make content adaptable to different learning styles\n- Ensure relevance to students\' lives\n- Build on existing knowledge\n' },
  { id:'create', name:'CREATE', full:'Creativity, Engagement, Technology', desc:'Emphasizes creative thinking and engaging technology use',
    tpl:'**CREATE Framework:**\n- Incorporate creative thinking exercises\n- Design engaging activities\n- Suggest appropriate technology integration\n' },
  { id:'grade', name:'GRADE', full:'Goals, Relevance, Audience, Differentiation, Engagement', desc:'Focuses on goals, audience, and differentiated instruction',
    tpl:'**GRADE Framework:**\n- State clear learning goals\n- Ensure curriculum relevance\n- Consider target audience needs\n- Include differentiation strategies\n- Design engaging experiences\n' },
  { id:'persona', name:'Persona', full:'Persona Prompting', desc:'Assigns a specific role or persona for contextual responses',
    tpl:'**Persona Prompting:**\n- Adopt the role of an experienced educator\n- Respond with pedagogical knowledge and empathy\n' },
  { id:'cot', name:'Chain of Thought', full:'Chain of Thought (CoT)', desc:'Step-by-step reasoning and explanation of thought process',
    tpl:'**Chain of Thought:**\n- Break down complex concepts step-by-step\n- Show reasoning process clearly\n- Guide through logical progression\n' },
  { id:'tot', name:'Tree of Thought', full:'Tree of Thought (ToT)', desc:'Explores multiple reasoning paths and evaluates approaches',
    tpl:'**Tree of Thought:**\n- Consider multiple teaching approaches\n- Evaluate methods for effectiveness\n- Present alternative pathways\n' },
  { id:'react', name:'ReAct', full:'Reasoning + Acting', desc:'Combines reasoning with action planning for implementation',
    tpl:'**ReAct:**\n- Combine theoretical explanation with practical application\n- Include actionable implementation steps\n- Connect reasoning to real-world actions\n' },
  { id:'consistency', name:'Self-Consistency', full:'Self-Consistency', desc:'Generates consistent and verified responses across all sections',
    tpl:'**Self-Consistency:**\n- Ensure all parts align cohesively\n- Verify information accuracy\n- Maintain consistent messaging\n' }
];

/* ═══════════════ STATE ═══════════════ */
let state = {
  prog: 'MYP', subj: null, topic: null,
  style: 'Bright, playful, cartoonish. Rounded characters, bold colours, friendly Google Font headings. Animated and fun.',
  history: [],
  historyOpen: false,
  selectedFrameworks: new Set()
};

/* ═══════════════ INIT ═══════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadHistoryFromStorage();
  renderSubjects();
  renderFrameworks();
  initChips();
});

/* ═══════════════ TAB SWITCHING ═══════════════ */
function switchTab(id) {
  document.querySelectorAll('.tab-panel').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('border-brand-600','text-brand-700');
    el.classList.add('border-transparent','text-ink-muted');
  });
  document.getElementById('tab-' + id).classList.remove('hidden');
  const btn = document.getElementById('tab-btn-' + id);
  btn.classList.add('border-brand-600','text-brand-700');
  btn.classList.remove('border-transparent','text-ink-muted');
}

/* ═══════════════ PROGRAMME TOGGLE ═══════════════ */
function setProg(p) {
  state.prog = p; state.subj = null; state.topic = null;
  const myp = document.getElementById('prog-myp');
  const dp = document.getElementById('prog-dp');
  if (p === 'MYP') {
    myp.className = 'tr px-5 py-2 rounded-full text-sm font-bold border-2 border-myp bg-myp-light text-myp-dark';
    dp.className = 'tr px-5 py-2 rounded-full text-sm font-bold border-2 border-surface-200 bg-white text-ink-muted hover:border-dp';
  } else {
    dp.className = 'tr px-5 py-2 rounded-full text-sm font-bold border-2 border-dp bg-dp-light text-dp-dark';
    myp.className = 'tr px-5 py-2 rounded-full text-sm font-bold border-2 border-surface-200 bg-white text-ink-muted hover:border-myp';
  }
  // Update grade options based on programme
  const gradeEl = document.getElementById('f-grade');
  if (p === 'MYP') {
    gradeEl.innerHTML = '<option>6</option><option>7</option><option>8</option><option selected>9</option><option>10</option>';
  } else {
    gradeEl.innerHTML = '<option selected>11</option><option>12</option>';
  }
  // Re-apply chip colours for the new programme
  document.querySelectorAll('.chip-on').forEach(setChipOn);
  hide('topic-section'); hide('custom-section'); hide('sim-output');
  renderSubjects();
}

/* ═══════════════ RENDER SUBJECTS ═══════════════ */
function renderSubjects() {
  const grid = document.getElementById('subj-grid');
  const subjects = DATA[state.prog];
  grid.innerHTML = subjects.map((s, i) =>
    `<button onclick="selectSubj(${i})" id="sc-${i}" class="tr p-3 rounded-xl border-2 border-surface-200 bg-white hover:border-brand-400 hover:shadow-md text-left">
      <div class="text-xl mb-1">${s.icon}</div>
      <div class="text-xs font-bold text-ink leading-tight">${s.name}</div>
      <div class="text-[10px] text-ink-faint mt-0.5">${s.sub}</div>
    </button>`
  ).join('');
}

function selectSubj(i) {
  state.subj = i; state.topic = null;
  document.querySelectorAll('#subj-grid button').forEach(el => {
    el.className = 'tr p-3 rounded-xl border-2 border-surface-200 bg-white hover:border-brand-400 hover:shadow-md text-left';
  });
  const btn = document.getElementById('sc-' + i);
  const selClass = state.prog === 'MYP'
    ? 'tr p-3 rounded-xl border-2 border-myp bg-myp-light text-left shadow-md'
    : 'tr p-3 rounded-xl border-2 border-dp bg-dp-light text-left shadow-md';
  btn.className = selClass;

  const topics = DATA[state.prog][i].topics;
  const sel = document.getElementById('topic-select');
  sel.innerHTML = '<option value="">— choose a topic —</option>';
  topics.forEach((t, ti) => {
    const opt = document.createElement('option');
    opt.value = ti; opt.textContent = t.label; sel.appendChild(opt);
  });
  document.getElementById('topic-explain').classList.add('hidden');
  show('topic-section'); hide('custom-section'); hide('sim-output');
  smoothTo('topic-section');
}

/* ═══════════════ TOPIC ═══════════════ */
function onTopicChange() {
  const val = document.getElementById('topic-select').value;
  if (!val) { document.getElementById('topic-explain').classList.add('hidden'); hide('custom-section'); return; }
  state.topic = parseInt(val);
  const t = DATA[state.prog][state.subj].topics[state.topic];
  const box = document.getElementById('topic-explain');
  const borderColor = state.prog === 'MYP' ? 'border-myp' : 'border-dp';
  const bgColor = state.prog === 'MYP' ? 'bg-myp-light' : 'bg-dp-light';
  box.className = `mt-3 p-4 rounded-xl border-l-4 text-sm leading-relaxed ${borderColor} ${bgColor}`;
  box.innerHTML =
    `<strong class="block mb-1">What this simulation does:</strong>${t.explain}
     <div class="mt-2 flex flex-wrap gap-2 text-xs">
       <span class="px-2 py-0.5 rounded bg-white/60 font-semibold">Key: ${t.concept}</span>
       <span class="px-2 py-0.5 rounded bg-white/60">Related: ${t.related}</span>
       <span class="px-2 py-0.5 rounded bg-white/60">ATL: ${t.atl}</span>
       <span class="px-2 py-0.5 rounded bg-white/60">LP: ${t.lp}</span>
     </div>`;
  box.classList.remove('hidden');
  show('custom-section');
  smoothTo('custom-section');
}

/* ═══════════════ CHIPS ═══════════════ */
function initChips() {
  // Style chips — single select
  document.querySelectorAll('.chip-style').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip-style').forEach(c => {
        c.className = 'chip-style tr text-xs font-semibold px-3 py-1.5 rounded-full border border-surface-200 bg-white text-ink-muted';
      });
      chip.className = 'chip-style chip-on tr text-xs font-semibold px-3 py-1.5 rounded-full border';
      setChipOn(chip);
      state.style = chip.dataset.val;
    });
  });
  // Toggle chips — multi select
  document.querySelectorAll('.chip-toggle').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('chip-on');
      if (chip.classList.contains('chip-on')) {
        setChipOn(chip);
      } else {
        chip.className = 'chip-toggle tr text-xs font-semibold px-3 py-1.5 rounded-full border border-surface-200 bg-white text-ink-muted';
      }
    });
  });
  // Set initial on states
  document.querySelectorAll('.chip-on').forEach(setChipOn);
}

function setChipOn(chip) {
  const isMYP = state.prog === 'MYP';
  chip.classList.remove('border-surface-200','bg-white','text-ink-muted');
  if (isMYP) {
    chip.classList.add('border-myp','bg-myp-light','text-myp-dark');
  } else {
    chip.classList.add('border-dp','bg-dp-light','text-dp-dark');
  }
}

function getChipVals(parentId) {
  return Array.from(document.querySelectorAll(`#${parentId} .chip-on`)).map(c => c.dataset.val);
}

/* ═══════════════ BUILD SIMULATION PROMPT ═══════════════ */
function buildPrompt() {
  if (state.subj === null || state.topic === null) { toast('Please select a subject and topic first.','warn'); return; }
  const prog = state.prog;
  const subj = DATA[prog][state.subj];
  const t = subj.topics[state.topic];
  const grade = document.getElementById('f-grade').value;
  const rounds = document.getElementById('f-rounds').value;
  const ctx = document.getElementById('f-context').value.trim();
  const scaffolds = getChipVals('scaffold-chips');
  const features = getChipVals('feature-chips');

  const scaffStr = scaffolds.length ? scaffolds.map(s => '• ' + s).join('\n') : '• Include guiding questions and predict-before-reveal.';
  const featStr = features.length ? features.map(f => '• ' + f).join('\n') : '• Animated SVG scene, resource bars, trend chart.';
  const ctxStr = ctx ? '\n\nADDITIONAL CONTEXT FROM TEACHER:\n' + ctx : '';

  const prompt =
`You are an IB ${prog} ${subj.name} teacher creating an interactive classroom simulation for Grade ${grade} students.

// ──────────────────────────────────────────────────────────
// SVG CLASSROOM SIMULATION — COMPLETE SPECIFICATION
// ──────────────────────────────────────────────────────────

SIMULATION TOPIC: ${t.label}

CURRICULUM FRAMEWORK: IB ${prog} ${subj.name}

KEY CONCEPT: ${t.concept}

RELATED CONCEPT(S): ${t.related}

IB LEARNER PROFILE: ${t.lp}

ATL SKILLS: ${t.atl}

LEARNING GOALS — students should be able to:
• Adjust variables and observe cause-and-effect in real time
• Make and test predictions before each round reveals results
• Identify which variables have the most significant impact
• Connect outcomes to real-world examples and IB key concepts

SETTING / VISUAL SCENE:
${t.scene}

STUDENT-CONTROLLED VARIABLES (sliders, 0–4, labelled extremes):
${t.sliders.map((s, i) => (i + 1) + '. ' + s).join('\n')}

TRACKED RESOURCES (animated bars, 0–100):
${t.resources.join(', ')}

SIMULATION STRUCTURE:
${rounds} rounds. Each round: set sliders → lock prediction → Advance → see outcome with cause-effect chain → IB reflection.

PREDICTION MECHANIC:
Students MUST select a prediction BEFORE Advance activates. 4 options:
🌱 Thriving | ⚖️ Stable | ⚠️ Stressed | 🔴 Crisis

RANDOM EVENTS (2–3 mid-simulation):
Include unexpected events that reward resilient decisions and punish over-optimisation.

REAL-WORLD CONNECTIONS:
${t.real}

IB REFLECTION QUESTIONS:
1. What does "${t.concept.toLowerCase()}" mean in this context?
2. Which decision had the most unexpected consequence?
3. How would someone from a different background approach this differently?
4. What would you change if you ran it again?
5. How does this connect to a current global issue?
6. Which LP attribute did your decisions reflect: ${t.lp}?

VISUAL STYLE:
${state.style}

SCAFFOLDING:
${scaffStr}

DELIVER AS — single self-contained HTML file:
${featStr}
• Phase timeline showing all ${rounds} rounds
• Prediction widget — Advance DISABLED until prediction selected
• Resource bars: green (>60) → amber (30–60) → red (<30)
• Canvas line chart tracking all resources across rounds
• Reset button, toast notifications, responsive layout
• Works offline except Google Fonts${ctxStr}

// ──────────────────────────────────────────────────────────
// AFTER GENERATING — ASK THE TEACHER:
// ──────────────────────────────────────────────────────────

After generating, ask:
"✅ Your ${t.label} simulation for ${prog} Grade ${grade} is ready!
Would you like:
A) 📚 Simplified version  B) 🎓 HL Extension  C) 🎨 Retheme
D) 👩‍🏫 Teacher Panel  E) 📝 Student Worksheet  F) 🌐 Bilingual mode
Reply with letter(s) or 'none' to use as-is."`;

  document.getElementById('sim-out-body').textContent = prompt;
  document.getElementById('sim-out-subtitle').textContent = `${prog} · ${subj.name} · ${t.label}`;
  const badge = document.getElementById('sim-out-badge');
  badge.textContent = prog;
  badge.className = prog === 'MYP'
    ? 'text-xs font-bold px-3 py-1 rounded-full bg-myp-light text-myp-dark'
    : 'text-xs font-bold px-3 py-1 rounded-full bg-dp-light text-dp-dark';
  show('sim-output');
  smoothTo('sim-output');
}

/* ═══════════════ FRAMEWORKS GRID ═══════════════ */
function renderFrameworks() {
  const grid = document.getElementById('fw-grid');
  grid.innerHTML = FRAMEWORKS.map(fw =>
    `<button onclick="toggleFw('${fw.id}')" id="fw-${fw.id}" class="tr p-3 rounded-xl border-2 border-surface-200 bg-white hover:border-brand-400 text-left">
      <div class="text-sm font-bold text-ink">${fw.name}</div>
      <div class="text-[11px] text-ink-faint mt-0.5 leading-relaxed">${fw.desc}</div>
    </button>`
  ).join('');
}

function toggleFw(id) {
  const el = document.getElementById('fw-' + id);
  if (state.selectedFrameworks.has(id)) {
    state.selectedFrameworks.delete(id);
    el.className = 'tr p-3 rounded-xl border-2 border-surface-200 bg-white hover:border-brand-400 text-left';
  } else {
    state.selectedFrameworks.add(id);
    el.className = 'tr p-3 rounded-xl border-2 border-brand-500 bg-brand-50 text-left';
  }
}

/* ═══════════════ ENHANCE WITH GEMINI ═══════════════ */
async function enhanceWithAI() {
  const input = document.getElementById('enhance-input').value.trim();
  if (!input) { toast('Please enter a prompt to enhance.','warn'); return; }
  if (state.selectedFrameworks.size === 0) { toast('Please select at least one framework.','warn'); return; }

  const btn = document.getElementById('enhance-btn');
  const loader = document.getElementById('enhance-loader');
  btn.disabled = true; btn.textContent = 'Enhancing...';
  loader.classList.remove('hidden');
  document.getElementById('enhance-output').classList.add('hidden');

  const selected = FRAMEWORKS.filter(fw => state.selectedFrameworks.has(fw.id));
  const progCtx = document.getElementById('enh-prog').value;
  const gradeCtx = document.getElementById('enh-grade').value;
  const toneCtx = document.getElementById('enh-tone').value;

  let metaPrompt = `You are an expert IB educational prompt engineer. Your task is to rewrite the user's teaching prompt using the frameworks below.\n\nCRITICAL INSTRUCTION: Output ONLY the rewritten prompt itself. Do not include any explanation, preamble, commentary, intro sentence, or closing note. No "Here is your enhanced prompt:", no "Certainly!", nothing — just the raw improved prompt text, ready to paste directly into an AI chat.\n\nFrameworks to apply:\n`;
  selected.forEach(fw => { metaPrompt += fw.tpl + '\n'; });
  if (progCtx) metaPrompt += `Context: IB ${progCtx} programme.\n`;
  if (gradeCtx) metaPrompt += `Grade level: ${gradeCtx}\n`;
  metaPrompt += `Tone: ${toneCtx}\n\n`;
  metaPrompt += `Original prompt to enhance:\n${input}\n\nNow output ONLY the enhanced prompt — no preamble, no explanation, no sign-off.`;

  try {
    const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.geminiModel}:generateContent?key=${CONFIG.geminiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: metaPrompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 4096 }
      })
    });
    if (!resp.ok) throw new Error(`API Error: ${resp.status}`);
    const data = await resp.json();
    if (!data.candidates?.[0]?.content) throw new Error('Invalid API response');
    const result = data.candidates[0].content.parts[0].text;
    document.getElementById('enhance-out-body').textContent = result;
    document.getElementById('enhance-output').classList.remove('hidden');
    smoothTo('enhance-output');
  } catch (err) {
    toast('Error: ' + err.message, 'error');
  } finally {
    btn.disabled = false; btn.textContent = '✨ Enhance with AI';
    loader.classList.add('hidden');
  }
}

/* ═══════════════ HISTORY ═══════════════ */
function loadHistoryFromStorage() {
  try {
    state.history = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]');
  } catch { state.history = []; }
  renderHistoryList();
}

function saveToHistory(source) {
  let prompt = '', label = '';
  if (source === 'sim') {
    prompt = document.getElementById('sim-out-body')?.textContent || '';
    label = document.getElementById('sim-out-subtitle')?.textContent || 'Simulation';
  } else {
    prompt = document.getElementById('enhance-out-body')?.textContent || document.getElementById('enhance-input')?.value || '';
    label = 'Enhanced Prompt';
  }
  if (!prompt) { toast('Nothing to save yet.','warn'); return; }
  state.history.unshift({
    id: Date.now(),
    source,
    label,
    preview: prompt.substring(0, 80) + '...',
    prompt,
    time: new Date().toLocaleString()
  });
  if (state.history.length > CONFIG.maxHistory) state.history.pop();
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.history));
  renderHistoryList();
  toast('Saved to history');
}

function deleteHistoryItem(id) {
  state.history = state.history.filter(h => h.id !== id);
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.history));
  renderHistoryList();
}

function clearHistory() {
  if (!confirm('Clear all history?')) return;
  state.history = [];
  localStorage.removeItem(CONFIG.storageKey);
  renderHistoryList();
}

function renderHistoryList() {
  const list = document.getElementById('history-list');
  if (!state.history.length) {
    list.innerHTML = '<p class="text-center text-sm text-ink-faint py-8">No saved prompts yet.</p>';
    return;
  }
  list.innerHTML = state.history.map(h =>
    `<div class="p-3 rounded-xl border border-surface-200 bg-surface-50 hover:bg-white tr">
      <div class="flex items-center justify-between mb-1">
        <span class="text-[10px] font-bold uppercase tracking-wider ${h.source === 'sim' ? 'text-brand-600' : 'text-accent-600'}">${h.source === 'sim' ? 'Simulation' : 'Enhanced'}</span>
        <button onclick="deleteHistoryItem(${h.id})" class="text-red-400 hover:text-red-600 text-xs">✕</button>
      </div>
      <div class="text-xs font-semibold text-ink truncate">${h.label}</div>
      <div class="text-[10px] text-ink-faint mt-0.5">${h.time}</div>
      <button onclick="loadFromHistory(${h.id})" class="mt-2 text-[10px] font-bold text-brand-600 hover:underline">Load →</button>
    </div>`
  ).join('');
}

function loadFromHistory(id) {
  const h = state.history.find(x => x.id === id);
  if (!h) return;
  if (h.source === 'sim') {
    switchTab('sim');
    document.getElementById('sim-out-body').textContent = h.prompt;
    document.getElementById('sim-out-subtitle').textContent = h.label;
    show('sim-output');
  } else {
    switchTab('enhance');
    document.getElementById('enhance-out-body').textContent = h.prompt;
    document.getElementById('enhance-output').classList.remove('hidden');
  }
  toggleHistory();
}

function toggleHistory() {
  state.historyOpen = !state.historyOpen;
  const drawer = document.getElementById('history-drawer');
  const overlay = document.getElementById('history-overlay');
  if (state.historyOpen) {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  }
}

/* ═══════════════ ACTIONS ═══════════════ */
function copyText(elId) {
  const text = document.getElementById(elId).textContent;
  navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard!')).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('Copied!'); } catch { toast('Failed to copy','error'); }
    document.body.removeChild(ta);
  });
}

function copyMaster() {
  const el = document.getElementById('master-prompt-text');
  copyText_raw(el.textContent);
}

function copyText_raw(text) {
  navigator.clipboard.writeText(text).then(() => toast('Copied!')).catch(() => toast('Failed','error'));
}

function openInClaude() {
  const p = document.getElementById('sim-out-body').textContent;
  if (!p) return;
  window.open('https://claude.ai/new?q=' + encodeURIComponent(p.substring(0, 2000)), '_blank');
}

function openInChatGPT() {
  const p = document.getElementById('sim-out-body').textContent;
  console.log(p);

  if (!p) return;

  // Encode the prompt for URL usage
  const encodedPrompt = encodeURIComponent(p);

  // Open ChatGPT with the prompt prefilled
  const url = `https://chat.openai.com/?prompt=${encodedPrompt}`;
  window.open(url, '_blank');
}

function openInGemini() {
  const el = document.getElementById('sim-out-body');
  if (!el) return;

  const p = el.textContent.trim();
  if (!p) return;

  // Copy to clipboard
  navigator.clipboard.writeText(p).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = p;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });

  // Open Gemini with query
  const url = "https://gemini.google.com/guided-learning?query=" +
              encodeURIComponent(p.slice(0, 2000));

  window.open(url, "_blank");
}

function downloadPrompt() {
  const p = document.getElementById('sim-out-body').textContent;
  if (!p) return;
  const blob = new Blob([p], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'simulation-prompt.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ═══════════════ HELPERS ═══════════════ */
function show(id) { document.getElementById(id).classList.remove('hidden'); }
function hide(id) { document.getElementById(id).classList.add('hidden'); }
function smoothTo(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' }); }

function toast(msg, type = 'ok') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  const colors = { ok: 'bg-green-600', warn: 'bg-amber-500', error: 'bg-red-500' };
  el.className = `toast-in px-4 py-2.5 rounded-lg ${colors[type] || colors.ok} text-white text-sm font-semibold shadow-lg`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => { el.classList.remove('toast-in'); el.classList.add('toast-out'); }, 2500);
  setTimeout(() => el.remove(), 2800);
}
