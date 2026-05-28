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
    title: 'OHM Plus Launches Pilot Program in Accra',
    category: 'Company News',
    date: '2025-01-15',
    summary: 'We are thrilled to announce the launch of our smart energy control pilot program in the Greater Accra region, bringing unprecedented energy insights to households.',
    content: 'OHM Plus has officially launched its pilot program in Accra, Ghana. The program aims to distribute our state-of-the-art Omhero devices to 500 households and businesses. Participants will experience real-time energy tracking, surge protection, and actionable insights to reduce their monthly electricity bills.\n\n"This pilot is a significant step towards our mission of empowering Africa with intelligent energy control," said the CEO of OHM Plus. Early participants have already reported an average of 15% savings on their energy costs within the first month.\n\nWe look forward to expanding the program nationwide by the end of the year.',
  },
  {
    id: '2',
    slug: 'ghanas-electricity-tariff-review-2025',
    title: 'Ghana\'s Electricity Tariff Review 2025: What You Need to Know',
    category: 'Government Policy',
    date: '2025-01-10',
    summary: 'The Public Utilities Regulatory Commission (PURC) has announced its quarterly tariff review. Here is how it impacts residential and commercial users.',
    content: 'The recent tariff review by PURC has introduced marginal adjustments to the electricity rates in Ghana. While residential users consuming below 300 kWh will see a slight decrease in their bills, commercial entities might experience a 2% hike.\n\nUnderstanding your consumption bracket is now more critical than ever. Tools like the Omhero device help consumers track their usage in real-time, ensuring they stay within lower tariff bands and avoid unexpected surges in their monthly bills.\n\nExperts advise homeowners to invest in energy-efficient appliances and monitor their usage actively.',
  },
  {
    id: '3',
    slug: '5-ways-smart-meters-changing-energy-consumption-nigeria',
    title: '5 Ways Smart Meters Are Changing Energy Consumption in Nigeria',
    category: 'Industry',
    date: '2025-01-05',
    summary: 'The transition from estimated billing to smart metering is transforming how Nigerians consume and manage electricity.',
    content: 'The era of estimated billing in Nigeria is gradually coming to an end. Smart meters, like the Omhero device, are revolutionizing the energy landscape in five key ways:\n\n1. Transparency: Consumers only pay for what they use.\n2. Budgeting: Prepaid systems allow for better financial planning.\n3. Dispute Resolution: Real-time data provides evidence against inaccurate billing.\n4. Energy Efficiency: Awareness of high-consuming appliances encourages better habits.\n5. Grid Stability: Utilities can manage loads more effectively, reducing the frequency of grid collapses.\n\nAs deployment increases, the benefits will multiply across the nation.',
  },
  {
    id: '4',
    slug: 'omhero-device-now-available-commercial-properties',
    title: 'Omhero Device Now Available for Commercial Properties',
    category: 'Company News',
    date: '2024-12-28',
    summary: 'After a successful residential launch, the Omhero enterprise edition is now available for businesses and factories.',
    content: 'We are excited to announce that the Omhero device is now optimized for commercial properties. Our new 3-phase solution can handle the complex energy demands of businesses, factories, and large commercial centers.\n\nThe commercial edition includes advanced features like power factor monitoring, predictive maintenance alerts for heavy machinery, and multi-branch dashboard aggregation. Businesses can now identify inefficiencies across their entire operations from a single pane of glass.',
  },
  {
    id: '5',
    slug: 'how-one-lagos-sme-reduced-electricity-bill-40-percent',
    title: 'How One Lagos SME Reduced Their Electricity Bill by 40%',
    category: 'Industry',
    date: '2024-12-20',
    summary: 'A case study on a local bakery in Ikeja that optimized its operations using real-time energy data.',
    content: 'A local bakery in Ikeja, Lagos, was struggling with exorbitant energy bills that threatened its profitability. By installing the Omhero device, the management discovered that their old cooling units were consuming power continuously, even when empty.\n\nArmed with this data, they upgraded their equipment and adjusted their baking schedules to avoid peak tariff periods. The result? A staggering 40% reduction in their monthly electricity expenses.\n\n"The device paid for itself in less than two months," the owner shared. "We now run a much leaner and more profitable operation."',
  },
  {
    id: '6',
    slug: 'understanding-your-ecg-bill-guide-ghanaian-homeowners',
    title: 'Understanding Your ECG Bill: A Guide for Ghanaian Homeowners',
    category: 'Energy Tips',
    date: '2024-12-15',
    summary: 'Confused by the various charges on your electricity bill? We break down the key components of an ECG bill.',
    content: 'An ECG bill contains several components that determine the final amount you pay. The main parts include the fixed service charge, the energy charge (based on your kWh consumption), and various levies such as the street lighting levy and statutory taxes.\n\nTo manage your bill effectively, it\'s crucial to understand your consumption tier. Using tools like our Bill Calculator or installing an Omhero device can help you predict your monthly charges and identify areas where you can cut back.',
  },
  {
    id: '7',
    slug: 'nigerias-power-sector-reform-2025-progress-report',
    title: 'Nigeria\'s Power Sector Reform: 2025 Progress Report',
    category: 'Industry',
    date: '2024-12-10',
    summary: 'An overview of the recent strides made in Nigeria\'s power sector privatization and infrastructure upgrades.',
    content: 'Nigeria\'s power sector has seen significant developments over the past year. With increased investments in transmission infrastructure and the decentralization of state power grids, the focus is shifting towards reliability and access.\n\nHowever, challenges remain, particularly in the distribution network. Innovative solutions from private tech companies are playing a pivotal role in bridging the gap, providing consumers with the tools they need to protect their appliances and manage costs amidst fluctuating supply.',
  },
  {
    id: '8',
    slug: 'energy-efficiency-tips-harmattan-season',
    title: 'Energy Efficiency Tips for the Harmattan Season',
    category: 'Energy Tips',
    date: '2024-12-05',
    summary: 'As the Harmattan sets in, here are practical ways to stay comfortable without letting your energy bills skyrocket.',
    content: 'The Harmattan season brings dry, dusty winds and varying temperatures. Here are some tips to keep your energy bills in check during this period:\n\n- Optimize AC Usage: Only cool the rooms you are using and set thermostats to an optimal 24°C.\n- Seal Drafts: Prevent cool air from escaping by sealing gaps around windows and doors.\n- Dust Appliances: Dust accumulation on fridge coils and fan blades reduces efficiency. Clean them regularly.\n- Maximize Natural Ventilation: During cooler nights, turn off the AC and open windows to let fresh air in.\n\nSmall behavioral changes can lead to significant savings over the season.',
  }
];