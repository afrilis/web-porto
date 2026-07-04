/**
 * Tech stack grouped by category.
 * `icon` references a key in ICONS (assets/js/data/icons.js).
 * `color` sets the icon's accent color (cohesive palette, not literal brand colors).
 */
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    tools: [
      { name: 'Python', icon: 'python', color: '#4F6EF7' },
      { name: 'SQL', icon: 'sql', color: '#22B8CF' },
      { name: 'R', icon: 'r', color: '#7C5CFC' },
      { name: 'Bash', icon: 'bash', color: '#1D1D1F' },
    ],
  },
  {
    id: 'databases',
    title: 'Database',
    tools: [
      { name: 'PostgreSQL', icon: 'postgresql', color: '#4F6EF7' },
      { name: 'MySQL', icon: 'mysql', color: '#F5A623' },
      { name: 'BigQuery', icon: 'bigquery', color: '#669DF6' },
      { name: 'MongoDB', icon: 'mongodb', color: '#2E9E6C' },
    ],
  },
  {
    id: 'bi',
    title: 'BI Tools',
    tools: [
      { name: 'Tableau', icon: 'tableau', color: '#F5A623' },
      { name: 'Power BI', icon: 'powerbi', color: '#4F6EF7' },
      { name: 'Metabase', icon: 'metabase', color: '#509EE3' },
      { name: 'Looker', icon: 'looker', color: '#4285F4' },
    ],
  },
  {
    id: 'etl',
    title: 'ETL',
    tools: [
      { name: 'Airflow', icon: 'airflow', color: '#22B8CF' },
      { name: 'dbt', icon: 'dbt', color: '#F5A623' },
      { name: 'Spark', icon: 'spark', color: '#F5A623' },
      { name: 'Docker', icon: 'docker', color: '#4F6EF7' },
    ],
  },
];
