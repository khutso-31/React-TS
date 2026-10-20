import type { ReactNode } from 'react'

export type IconName =
  | 'search'
  | 'website'
  | 'app'
  | 'layout'
  | 'photo'
  | 'code'
  | 'design'
  | 'project'
  | 'chart'
  | 'person'
  | 'team'
  | 'spark'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'arrow'
  | 'external'

const iconArtwork: Record<IconName, ReactNode> = {
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></>,
  website: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 9h18M6 7h.01M8.5 7h.01M12 15h6M12 12h6M6 12h3v5H6z" /><path d="m17 3 4 4-9 9-4 1 1-4z" /></>,
  app: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  layout: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 8h18M8 8v13M13 12h5M13 16h5M5 5.5h.01M7 5.5h.01" /><path d="m15 10 4 4m0-4-4 4" /></>,
  photo: <><rect x="3" y="5" width="18" height="14" rx="1" /><circle cx="8" cy="10" r="1.5" /><path d="m4 17 5-5 3 3 3-4 5 6M17 3l4 4-9 9-4 1 1-4z" /></>,
  code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-3 16" /><rect x="2.5" y="2.5" width="19" height="19" rx="2" /></>,
  design: <><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5a4 4 0 1 1 6.8-2.8c0 2.1-2.8 2.1-2.8 4.3M12.5 19h.01" /><path d="M12 2v2M4.9 4.9l1.4 1.4M2 12h2M19.1 4.9l-1.4 1.4" /></>,
  project: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 8h18M6 6h.01M8 6h.01m7 12 5-5m-7 3 1 4 4 1 5-5-5-5z" /></>,
  chart: <><path d="M3 20h18M5 17V9h3v8m4 0V4h3v13m4 0v-6h3v6" /><path d="m4 6 5-3 5 3 6-4" /><circle cx="4" cy="6" r="1" /><circle cx="9" cy="3" r="1" /><circle cx="14" cy="6" r="1" /><circle cx="20" cy="2" r="1" /></>,
  person: <><circle cx="12" cy="7" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2z" /></>,
  team: <><circle cx="8" cy="7" r="3" /><circle cx="17" cy="8" r="2.5" /><path d="M2 20v-2a6 6 0 0 1 12 0v2zm14-6a5 5 0 0 1 6 5v1h-5" /><path d="M14 5a3 3 0 0 1 4 2.8" /></>,
  spark: <><path d="m12 2 1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-2.8z" /><path d="m19 14 1 3 3 1-3 1-1 3-1-3-3-1 3-1z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  phone: <><path d="M6 3h3l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" /></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  external: <><path d="M14 4h6v6m-11 3L20 4" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
}

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {iconArtwork[name]}
    </svg>
  )
}
