import type { ProjectProps } from '../components/Project'
import resumeSwipingAppImg from '../assets/project-resumeswipingapp.png'

export interface ProjectItem extends ProjectProps {
  readonly id: string
}

export const projects: readonly ProjectItem[] = [
  {
    id: 'resume-swiping-app',
    name: 'Resume Swiping App',
    url: 'https://github.com/pingu543/ResumeSwipingApp',
    image: resumeSwipingAppImg,
    description:
      'A rapid-fire resume evaluation platform featuring binary options peer reviews, NOC occupational categorization, and passive engagement telemetry including view duration and scroll depth analytics.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'Bootstrap'],
  },
] as const

export default projects
