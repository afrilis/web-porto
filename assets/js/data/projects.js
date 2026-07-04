/**
 * Featured projects — professional English descriptions
 */
const projects = [
  {
    id: 'etl-pipeline',
    title: 'Automated ETL Pipeline',
    icon: 'etl',
    color: '#22B8CF',
    description:
      'End-to-end pipeline extracting data from REST APIs, transforming with Pandas, and loading into PostgreSQL — orchestrated via Apache Airflow with automated data quality checks.',
    tags: ['Python', 'Airflow', 'PostgreSQL'],
    github: 'https://github.com/yourusername/etl-pipeline',
    demo: null,
  },
  {
    id: 'sales-dashboard',
    title: 'Interactive Sales Dashboard',
    icon: 'dashboard',
    color: '#4F6EF7',
    description:
      'Dynamic sales analytics dashboard with KPI cards and interactive filters. Powered by optimized SQL queries against a cloud data warehouse with daily refresh cycles.',
    tags: ['Tableau', 'SQL', 'dbt'],
    github: 'https://github.com/yourusername/sales-dashboard',
    demo: 'https://public.tableau.com/your-dashboard',
  },
  {
    id: 'web-scraping',
    title: 'Data Scraping & Analysis',
    icon: 'scraping',
    color: '#7C5CFC',
    description:
      'Web scraping pipeline for e-commerce data with cleaning, enrichment, and sentiment analysis. Results exported to Parquet and visualized in Jupyter notebooks.',
    tags: ['Python', 'Pandas', 'BeautifulSoup'],
    github: 'https://github.com/yourusername/web-scraping-analysis',
    demo: null,
  },
];