import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Box } from '@mui/material';
import InternshipCard from './InternshipCard';

const experiences = [
  {
    title: 'UI/UX Design Internship',
    company: 'The Virtual CTO',
    date: 'May 2025 - July 2025',
    description: 'Created user-friendly websites based on project requirements. I conducted user research, built personas, and designed responsive wireframes. Refined layouts for intuitive navigation and visual appeal, incorporating features like dashboards and event management to enhance the user experience.'
  },
  {
    title: 'Full Stack Developer Internship',
    company: 'SemanticMap',
    date: 'November 2025 - Present',
    description: 'Collaborating on the development and maintenance of a modern web application that leverages AI to streamline qualitative market research workflows, from data ingestion to insight delivery.'
  },
 
];

function Experience() {
  return (
    <section className="experience" id="experience" style={{ fontFamily: 'Noto Serif' }}>
      <h2 style={{ color: 'var(--text)', textAlign: 'center', fontSize: '30px', marginBottom: '30px' }}>Experience</h2>
      
      {/* Internship Card */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <InternshipCard />
      </Box>
    </section>
  );
}

export default Experience;
