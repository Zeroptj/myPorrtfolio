import { IconType } from 'react-icons'
import { FaRocket } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export interface Experience {
  id: string
  role: string
  company: string
  companyDesc: string
  duration: string
  icon: IconType
  color: string
  logo: string
  achievements: string[]
  technologies?: string[]
}

export const experienceData: Experience[] = [
  {
    id: 'metta',
    role: 'Assistant Fund Manager & Portfolio Engineering',
    company: 'Metta Associates',
    companyDesc: 'Asset Management Bangkok, Thailand',
    duration: '03/2024 - Present',
    icon: SiNextdotjs,
    color: '#000000',
    logo: '/Metta.png',
    achievements: [
      'Portfolio Optimization 2026: Led the 2026 enhancement of the Portfolio Optimization framework, transitioning from **manual 4 Pillars-based allocation to a model-driven, automated system** — restructuring the methodology from a conceptual guideline into a **formalized, systematic framework** for determining client portfolio weights.',
      'CRM Webapp: Developed a **full-stack internal CRM platform** enabling investment teams to monitor per-client portfolio performance, **measure deviation against model portfolios**, and track **total AUM and client count in real time** — built on Next.js, powered by a centralized API layer, and hosted on Firebase.',
      'Migration Market Monitoring Streamlit to Webapp: Led the **migration from Streamlit to a scalable Next.js web application**, redesigning the architecture around a **centralized API** and introducing a **full authentication system** to support secure, multi-user access.',
      'Internal Database Management For CRM & Investment: Architected an **end-to-end internal data platform** for CRM and investment use cases, serving **~1,000 users**. Built a **data lake infrastructure**, designed **ETL pipelines** ingesting data from Bloomberg, Yahoo Finance, and SEC Open Data, and developed a **centralized API** to expose analytics-ready data across teams.',
      'Portfolio Optimization 4 Pillars: Mega project in Q1/2025 using **MPT, Broad-Based Asset Allocation (BBAA), Secular Asset (Economic Regime Switch, Factor-based), and Outcome-Based Investing (Risk modeling)** to create the best portfolio for each client.',
      'Metta Market Update For Advisory: **Developed a web app and slides** for advisors to stay updated with real-time market news, track strategies and key financial metrics, and prepare for client meetings.',
      'Portfolio Tracking: Built tools to monitor differences between client portfolios and optimized portfolios.',
      'Account Management: Managed diverse client portfolios, **optimizing ETF purchase costs and allocations**.',
      'Snap Portfolio Optimization Q3/24: Implemented a multi-asset strategy based on the **4 pillars of Metta Associates.**',
      'THBUSD Currency Hedging: Designed a hedging strategy in Q3 2024 to **protect client portfolios from Baht appreciation after significant depreciation.**'
    ],
    technologies: [
      'Portfolio Optimization',
      'Asset Allocation',
      'Risk Modeling',
      'Currency Hedging',
      'Web App Development',
      'ETL Pipeline',
      'REST API Design',
      'Database Architecture'
    ]
  },
  {
    id: 'merkle',
    role: 'Part-time IC department',
    company: 'Merkle Capital',
    companyDesc: 'Cryptocurrency Asset Management Bangkok, Thailand',
    duration: ' 03/2023 - 03/2024',
    icon: FaRocket,
    color: '#73D25D',
    logo: '/merkle.jpg',
    achievements: [
      'Wrote Article & Analyzed Digital Assets: Producing over 50 articles, including weekly market analysis, 2024 outlook, various financial books, digital asset reports, and in-depth cryptocurrency analysis.',
    ],
    technologies: [
      'Digital Asset Analysis',
      'Cryptocurrency Research',
      'Market Analysis',
      'Content Writing'
    ]
  }
]