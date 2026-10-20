import type { IconName } from '../components/Icon'

export type Service = {
  title: string
  description: string
  icon: IconName
  detail: string
}

export const services: Service[] = [
  {
    title: 'Website Design',
    description: 'We can design for you a website and we can upload them.',
    icon: 'website',
    detail: 'Distinctive, responsive websites shaped around your brand and the people you want to reach.',
  },
  {
    title: 'Mobile & Desktop App',
    description: 'We can create for you mobile and desktop app.',
    icon: 'app',
    detail: 'Clear, connected app experiences that feel right on every screen.',
  },
  {
    title: 'UI & UX Design',
    description: 'We can create for you mobile and desktop app.',
    icon: 'layout',
    detail: 'Thoughtful user journeys, useful interfaces, and polished design systems.',
  },
  {
    title: 'Editing Photo',
    description: 'We can design for you a website and we can upload them.',
    icon: 'photo',
    detail: 'Careful retouching and image treatments that bring your visuals together.',
  },
  {
    title: 'Brand Identity',
    description: 'Build a bold, memorable identity for your next big idea.',
    icon: 'design',
    detail: 'Original graphic assets that keep your communication cohesive and memorable.',
  },
  {
    title: 'Creative Development',
    description: 'Beautiful digital experiences, thoughtfully brought to life.',
    icon: 'code',
    detail: 'Production-minded front-end builds that carry a design from concept to launch.',
  },
]
