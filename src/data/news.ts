export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Company News' | 'Industry' | 'Energy Tips' | 'Government Policy';
  date: string;
  summary: string;
  content: string;
  imageUrl?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'ohm-plus-launches-pilot-program-accra',
    title: 'OHM Plus Launches Pilot Program in Accra: A New Era for Energy Management in Ghana',
    category: 'Company News',
    date: '2025-01-15',
    summary: 'OHM Plus has officially launched its smart energy control pilot program in the Greater Accra region, bringing real-time energy monitoring to 500 households and businesses.',
    content: `Accra, Ghana – OHM Plus Energy Management Limited has officially launched its highly anticipated pilot program in the Greater Accra region, marking a significant milestone in the company's mission to transform energy consumption across Africa. The program will deploy Omhero smart monitoring devices to 500 carefully selected households and businesses over the next three months.

The Omhero device, known globally as Prycam, is a cutting-edge smart energy monitor that provides real-time visibility into electricity consumption, surge protection, and appliance-level insights. Participants in the pilot program will receive the device, professional installation, and full access to the Omhero mobile app at no cost during the trial period.

"We are thrilled to finally bring this technology to Ghanaian homes and businesses," said Kofi Mensah, CEO of OHM Plus. "For years, consumers have been frustrated by estimated billing, unexpected high bills, and the inability to track where their electricity money is actually going. Omhero solves all of these problems by putting real-time data directly into the hands of the user."

Early results from the initial 50 installations have been impressive. Participants have reported an average reduction of 15-20% in their monthly electricity bills simply by identifying energy-hungry appliances and adjusting their usage patterns. One participant discovered that an old refrigerator was consuming nearly 40% of their household's total energy.

"This pilot is just the beginning," added Mensah. "Our goal is to expand nationwide by the end of 2025 and ultimately empower millions of African consumers with the tools they need to take control of their energy future."

The pilot program is being conducted in partnership with local electrical contractors and regulatory bodies to ensure compliance with all safety and quality standards. OHM Plus plans to release a comprehensive report on the program's outcomes in Q2 2025.`,
    imageUrl: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '2',
    slug: 'ghanas-electricity-tariff-review-2025',
    title: 'Ghana\'s Electricity Tariff Review 2025: What the New Rates Mean for Your Wallet',
    category: 'Government Policy',
    date: '2025-01-10',
    summary: 'The Public Utilities Regulatory Commission (PURC) announces quarterly tariff adjustments. Residential users below 300 kWh see relief while commercial rates increase marginally.',
    content: `The Public Utilities Regulatory Commission (PURC) has released its quarterly electricity tariff review for the first quarter of 2025, introducing carefully calibrated adjustments that will impact residential, commercial, and industrial consumers across Ghana.

According to the official statement, residential customers consuming less than 300 kWh per month will benefit from a modest 3% reduction in their energy charges. This category represents approximately 65% of all residential customers and is intended to provide relief to households already managing tight budgets.

However, residential customers consuming more than 300 kWh per month will see a 1.5% increase, while commercial and industrial tariffs have been adjusted upward by 2% to reflect rising generation and distribution costs. The fixed service charge remains unchanged at GH₵ 10.00 for residential customers.

"This is a balanced approach that protects vulnerable consumers while ensuring the financial sustainability of the power sector," said a PURC spokesperson. "We encourage consumers to actively monitor their electricity usage to avoid moving into higher consumption brackets."

The new tariffs take effect immediately and will remain in force until the next quarterly review in April 2025. PURC has also announced plans to introduce time-of-use tariffs later this year, which would charge different rates for electricity consumed during peak versus off-peak hours.

Industry experts recommend that consumers invest in energy monitoring devices like the Omhero smart monitor to track their consumption in real-time and avoid unexpected bill increases. "Understanding your consumption patterns is the first step to managing your electricity costs effectively," said energy economist Dr. Ama Serwaa.`,
    imageUrl: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '3',
    slug: 'smart-meters-transforming-energy-consumption-nigeria',
    title: 'How Smart Meters Are Revolutionizing Energy Consumption Across Nigeria',
    category: 'Industry',
    date: '2025-01-05',
    summary: 'The nationwide transition from estimated billing to smart metering is empowering Nigerian consumers with unprecedented transparency and control over their electricity usage.',
    content: `The era of estimated billing in Nigeria is rapidly coming to an end. Since the Nigerian Electricity Regulatory Commission (NERC) mandated the rollout of smart meters through the Meter Asset Provider (MAP) scheme, millions of consumers have gained access to accurate, real-time data about their electricity consumption.

This transformation is reshaping how Nigerians interact with electricity in five fundamental ways:

First, transparency has become the new normal. Consumers now pay only for what they actually use, eliminating the frustration of inflated estimated bills that have plagued the system for decades.

Second, financial planning has improved dramatically. Prepaid smart meter systems allow consumers to budget their electricity expenses with precision, purchasing power in manageable increments and avoiding end-of-month bill shocks.

Third, dispute resolution has been simplified. When billing discrepancies occur, both consumers and distribution companies now rely on actual consumption data rather than subjective estimates. This has significantly reduced the number of complaints filed with NERC.

Fourth, energy efficiency awareness has grown. By seeing exactly which appliances consume the most power and when, consumers are making informed decisions about their usage habits. Many have replaced inefficient appliances, adjusted their schedules, or installed smart devices like the Omhero monitor to gain even deeper insights.

Fifth, grid stability is improving. Distribution companies can now manage loads more effectively, identify technical losses, and reduce the frequency of grid collapses that have historically plagued the Nigerian power sector.

"The impact of smart metering cannot be overstated," said NERC Chairman Sanusi Garba. "We are witnessing a fundamental shift in how electricity is bought and sold in this country, and consumers are the ultimate beneficiaries."

As the rollout continues, complementary technologies like the Omhero device are providing additional value by offering appliance-level monitoring, surge protection, and predictive maintenance alerts that go beyond basic metering.`,
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '4',
    slug: 'omhero-enterprise-edition-launches',
    title: 'Omhero Enterprise Edition Launches: Bringing Industrial-Grade Energy Intelligence to Businesses',
    category: 'Company News',
    date: '2024-12-28',
    summary: 'OHM Plus introduces the Omhero Professional, a 3-phase energy monitoring solution designed specifically for commercial properties, factories, and large facilities.',
    content: `OHM Plus has officially launched the Omhero Professional, an enterprise-grade energy monitoring solution designed specifically for three-phase commercial and industrial applications. This launch marks a significant expansion of the company's product line beyond the residential market.

The Omhero Professional is engineered to handle the complex energy demands of businesses, factories, data centers, and large commercial facilities. Unlike the residential single-phase unit, the Professional edition monitors all three phases simultaneously, providing comprehensive visibility into power quality, load balancing, and equipment-level consumption.

Key features of the Omhero Professional include advanced power quality analysis that detects harmonics, voltage sags, and power factor issues before they damage sensitive equipment. The system also provides predictive maintenance alerts that notify facility managers when equipment begins operating outside normal parameters, allowing intervention before costly breakdowns occur.

"Our residential customers have seen tremendous value from the Omhero Essential, but businesses have different needs," said Ngozi Okonkwo, Chief Technology Officer at OHM Plus. "The Professional edition was built from the ground up for commercial environments, with features like API integration, multi-user access, and support for much higher current loads."

The Professional edition integrates seamlessly with existing building management systems through a REST API, allowing facility managers to incorporate energy data into their existing workflows. The cloud-based dashboard provides consolidated views of multiple facilities, making it ideal for businesses with distributed operations.

Early adopters include a major manufacturing facility in Tema, Ghana, which reported a 28% reduction in energy costs within three months of installation. A Lagos-based retail chain with 22 locations is currently deploying the system across its entire portfolio.

The Omhero Professional is available immediately for businesses in Nigeria and Ghana, with enterprise pricing customized based on the number of units, installation complexity, and required support level.`,
    imageUrl: 'https://images.pexels.com/photos/380251/pexels-photo-380251.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '5',
    slug: 'lagos-bakery-cuts-energy-costs-40-percent',
    title: 'How One Lagos Bakery Cut Its Electricity Bill by 40% Using Omhero',
    category: 'Industry',
    date: '2024-12-20',
    summary: 'A small business in Ikeja transformed its operations and boosted profitability by leveraging real-time energy data from the Omhero smart monitor.',
    content: `For years, Tasty Treats Bakery in Ikeja, Lagos, struggled with electricity bills that seemed to increase every month regardless of how much they produced. Owner Adebayo Ogunlesi was frustrated by the lack of visibility into where his money was going.

"I would receive my bill and just pay it, assuming there was nothing I could do about it," Ogunlesi recalled. "But when my neighbor installed the Omhero device and started talking about his savings, I decided to try it."

The results were eye-opening. Within the first week of monitoring, Ogunlesi discovered that his two aging cooling units were consuming nearly 60% of the bakery's total electricity. Worse, they were running continuously even when the bakery was closed and the units were empty.

"This was the breakthrough we needed," said Ogunlesi. "I immediately replaced the old units with energy-efficient models and installed timers to ensure they only ran during production hours."

Next, Ogunlesi used the Omhero data to analyze his production schedule. He discovered that baking during evening peak hours was costing significantly more than during off-peak periods. By shifting his production schedule to early morning and night hours, he reduced his energy costs further.

The combination of equipment upgrades, scheduling changes, and ongoing monitoring produced dramatic results. Within two months, Tasty Treats Bakery had reduced its monthly electricity bill by 40%, saving approximately ₦85,000 per month.

"The device paid for itself in less than two months," Ogunlesi said. "Now I have complete visibility into every kilowatt-hour I use. I can identify problems immediately and make data-driven decisions about my business."

Ogunlesi has since installed Omhero devices in his two additional locations and has become an enthusiastic advocate for the technology within the local business community. "Small business owners often think they have no power over their electricity costs," he said. "Omhero proves that wrong."`,
    imageUrl: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '6',
    slug: 'understanding-ecg-bill-guide',
    title: 'Decoding Your ECG Bill: A Complete Guide for Ghanaian Homeowners',
    category: 'Energy Tips',
    date: '2024-12-15',
    summary: 'Confused by the various charges on your Electricity Company of Ghana bill? This comprehensive guide explains every line item and helps you verify your charges.',
    content: `For many Ghanaian homeowners, the monthly Electricity Company of Ghana (ECG) bill remains a mystery. What do all those charges mean? Why does the amount vary from month to month? And how can you verify that you're being charged correctly?

This comprehensive guide explains every line item on a standard ECG residential bill, empowering consumers to understand exactly what they're paying for.

The Fixed Service Charge is a flat monthly fee that covers the cost of maintaining the distribution infrastructure that delivers electricity to your home. For residential customers, this charge is currently GH₵ 10.00, regardless of how much electricity you consume.

The Energy Charge is the portion of your bill that actually pays for the electricity you use. This is calculated by multiplying your total kilowatt-hour (kWh) consumption by the applicable energy rate. Ghana uses a block tariff system, meaning higher consumption tiers pay progressively higher rates per kWh.

The National Electrification Scheme Levy is a statutory charge that funds the ongoing expansion of electricity access to rural and underserved communities. This levy is calculated as a percentage of your total energy charge.

The Public Lighting Levy contributes to the cost of operating street lights in your area. Like the electrification levy, this is calculated as a percentage of your energy charge.

Finally, the VAT (Value Added Tax) of 15% is applied to the total of all the above charges, excluding any penalties or late fees.

To verify that your bill is accurate, homeowners should keep track of their monthly consumption in kilowatt-hours. A sudden unexplained increase could indicate a problem with your appliances, a leak in your wiring, or an error in ECG's metering.

The easiest way to track your consumption accurately is to install a smart energy monitor like the Omhero device. Omhero provides real-time visibility into your electricity usage, sends alerts when consumption spikes unexpectedly, and helps you predict your monthly bill before it arrives.

"Many of the billing disputes we see could be avoided if consumers had better visibility into their actual usage," said a consumer protection advocate. "Smart monitoring technology gives homeowners the evidence they need to question charges that seem incorrect."`,
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '7',
    slug: 'nigerias-power-sector-reform-2025',
    title: 'Nigeria\'s Power Sector Reform: Progress, Challenges, and the Path Forward in 2025',
    category: 'Government Policy',
    date: '2024-12-10',
    summary: 'One year after the privatization of the transmission grid, an in-depth look at what has changed and what still needs improvement in Nigeria\'s electricity sector.',
    content: `It has been just over a year since the Nigerian government completed the privatization of the national transmission grid, marking the final phase of a reform process that began with the Electric Power Sector Reform Act of 2005. As 2025 begins, it's time to assess the progress made and identify the challenges that remain.

On the positive side, transmission capacity has increased by approximately 15% over the past year, thanks to new substations and upgraded lines financed by private investment. Grid collapses, once a monthly occurrence, have been reduced by nearly half, though they remain a concern during peak demand periods.

Distribution companies have also made strides in reducing Aggregate Technical, Commercial, and Collection (ATC&C) losses, which now average 35% compared to 45% before privatization. Much of this improvement has come from the accelerated rollout of smart meters and increased enforcement against illegal connections.

However, significant challenges remain. Generation capacity still lags far behind demand, with peak generation struggling to reach 5,000 MW against estimated demand of 25,000 MW. Gas supply constraints continue to hamper thermal plants, while hydroelectric facilities face seasonal variations in water levels.

"Privatization was never going to be a magic solution," said energy analyst Michael Okonkwo. "It was a necessary first step. The real work of building generation capacity, upgrading distribution networks, and creating a financially sustainable sector will take years."

For individual consumers, the most tangible benefit of the reform has been increased access to smart meters. Over two million meters have been installed under the Meter Asset Provider scheme, dramatically reducing the prevalence of estimated billing.

Technology companies like OHM Plus are playing an increasingly important role in filling the gaps left by traditional utilities. The Omhero smart monitor, for example, provides consumers with real-time energy data and surge protection that complements the basic functionality of utility meters.

"The grid may not be perfect, but consumers no longer have to be passive recipients of whatever power quality the utility provides," said Okonkwo. "Smart monitoring technology gives them the tools to protect their appliances, optimize their usage, and advocate for better service."`,
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '8',
    slug: 'harmattan-energy-savings-tips',
    title: 'Beat the Harmattan Without Breaking the Bank: Essential Energy Savings Tips for the Dry Season',
    category: 'Energy Tips',
    date: '2024-12-05',
    summary: 'The Harmattan season brings unique energy challenges. Learn practical strategies to stay comfortable while keeping your electricity bills under control.',
    content: `The Harmattan season, with its dry, dusty winds and fluctuating temperatures, presents unique challenges for energy management. During the day, the haze can reduce natural light, encouraging longer use of artificial lighting. At night, the cooler temperatures might tempt you to use space heaters that consume significant power.

Here are practical tips to keep your energy bills manageable during this challenging season.

Optimize your air conditioning usage carefully. While you might be tempted to turn off AC entirely during cooler nights, be strategic. Only cool the rooms you are actively using. Set thermostats to 24°C rather than lower temperatures, as every degree below this increases consumption by 6-8%. During particularly cool nights, open windows and use ceiling fans instead of AC.

Seal drafts around windows and doors. The Harmattan wind can find its way through even small gaps, allowing cooled air to escape and forcing your AC to work harder. Weather stripping and door sweeps are inexpensive investments that pay for themselves quickly.

Clean your appliances regularly. The dusty Harmattan air accumulates on refrigerator coils, fan blades, and AC filters, reducing their efficiency significantly. A quick monthly cleaning can improve performance by up to 15%.

Take advantage of natural ventilation during cooler evenings and early mornings. Opening windows strategically can create cross-ventilation that cools your home without any energy consumption.

Be mindful of your lighting usage. With the hazy conditions reducing natural light, you might be turning lights on earlier than usual. Consider installing LED bulbs if you haven't already, as they use up to 80% less energy than incandescents.

The most effective way to manage your energy consumption during Harmattan is to monitor it in real-time. The Omhero device provides instant feedback on how much power you are using, sends alerts when consumption spikes unexpectedly, and helps you identify which appliances are driving up your costs.

"Many homeowners are surprised to discover that a space heater they only use occasionally is actually their biggest expense," said energy efficiency consultant Ama Tetteh. "Real-time monitoring reveals these hidden costs and empowers consumers to make informed decisions about their energy use."`,
    imageUrl: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '9',
    slug: 'omhero-fire-prevention-lagos-factory',
    title: 'Omhero Fire Risk Detection System Prevents Major Industrial Disaster in Lagos',
    category: 'Company News',
    date: '2025-01-20',
    summary: 'Advanced thermal monitoring technology alerted facility managers to dangerous overheating, averting what could have been a catastrophic fire.',
    content: `A manufacturing facility in the Ikeja Industrial Area of Lagos narrowly avoided a potentially devastating electrical fire thanks to the early warning capabilities of the Omhero smart monitoring system.

On January 18th, just after midnight, the Omhero device installed at the facility detected abnormal heat signatures in a main distribution panel. The system immediately sent an urgent alert to the on-duty facility manager's phone, indicating a critical overheating condition in panel 4B.

"We received the alert at 12:47 AM, and by 12:52 AM our maintenance team was at the panel," said facility safety officer Chidi Okonkwo. "The main breaker was already hot to the touch, and we could smell burning insulation. We shut down the panel immediately and discovered a loose connection that had been arcing."

According to fire safety experts, such loose connections generate intense localized heat that can ignite surrounding materials within minutes. By the time traditional smoke detectors would have activated, a full-scale electrical fire would likely have already been underway.

"This would have been catastrophic," Okonkwo added. "The panel served our entire production line. A fire would have shut us down for weeks, destroyed expensive equipment, and potentially endangered our workers. Omhero detected the problem while it was still fixable."

The facility had installed the Omhero Professional edition just three months earlier as part of a broader energy efficiency initiative. The system monitors not only energy consumption but also thermal conditions, voltage quality, and equipment performance.

"Most people think of energy monitors as bill-saving devices, and they certainly do that," said Okonkwo. "But the safety benefits are equally important. We've already recommended Omhero to every other facility in our industrial park."

Since the incident, OHM Plus has reported a surge in inquiries from industrial facilities across Nigeria and Ghana concerned about fire prevention. The company's fire-risk detection feature uses proprietary algorithms to identify thermal anomalies and electrical faults before they become dangerous.`,
    imageUrl: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?w=800&h=500&fit=crop'
  },
  {
    id: '10',
    slug: 'telecom-saves-45-million-fuel-costs',
    title: 'Telecom Giant Saves ₦45 Million Annually with Omhero Fuel Monitoring Solution',
    category: 'Industry',
    date: '2025-01-25',
    summary: 'A leading Nigerian telecom operator deploys Omhero across 50 tower sites, achieving dramatic reductions in fuel consumption, theft detection, and operational costs.',
    content: `A major telecommunications operator in Nigeria has achieved remarkable operational savings by deploying the Omhero remote monitoring solution across 50 of its tower sites in the Lagos and Ogun State regions.

The six-month pilot program, completed in December 2024, demonstrated that comprehensive remote monitoring can dramatically reduce the significant operational expenses associated with maintaining telecom tower infrastructure.

"The results exceeded our expectations," said the operator's Chief Technical Officer, who requested anonymity due to company policy. "We achieved savings far beyond our initial projections and identified problems we didn't even know existed."

The Omhero system provides real-time visibility into three critical areas at each tower site: grid power availability, generator runtime and performance, and battery bank health and charge status.

Within the first month of deployment, the operator detected fuel theft at four sites where reported generator runtime did not match fuel consumption records. "The data was indisputable," said the CTO. "We could see exactly how many hours the generator ran versus how much fuel was being delivered. Within two months, we had terminated the problematic contracts and implemented new security measures."

Beyond theft detection, the system enabled optimization of generator runtimes. By analyzing historical grid availability data, the operator adjusted generator schedules to minimize unnecessary runtime while maintaining 99.9% uptime. Fuel consumption across the 50 sites dropped by 32% overall.

The system also reduced operational costs by minimizing unnecessary site visits. Maintenance teams previously visited each site on a fixed weekly schedule, regardless of actual need. With real-time data showing which sites actually required attention, the operator reduced site visits by 40%.

"Every site visit costs money — fuel for the vehicle, wages for the technicians, and opportunity cost," explained the CTO. "Being able to dispatch teams only when needed has significantly reduced our operational expenditure."

The operator plans to expand the Omhero deployment to an additional 150 sites in 2025. Based on the pilot results, the projected annual savings across the full 200-site network will exceed ₦180 million.

"Our network uptime has actually improved while our costs have dropped," the CTO concluded. "Omhero has delivered exceptional value, and we're excited to expand the relationship."`,
    imageUrl: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=800&h=500&fit=crop'
  }
];