import type { SidebarGroup } from './sidebar.types'
import {
  faTableCellsLarge,
  faGraduationCap,
  faCalendarDays,
  faVideo,
  faUser,
  faUsers,
  faGear,
  faCircleQuestion,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

export const studentSidebarGroups: SidebarGroup[] = [
  {
    title: 'Menu',
    items: [
      { href: '/dashboard', label: 'Dashboard', icon: faTableCellsLarge },
      { href: '/courses', label: 'Courses', icon: faGraduationCap },
      { href: '/calendar', label: 'Calendar', icon: faCalendarDays },
      { href: '/live-class', label: 'Live Class', icon: faVideo },
    ],
  },
  {
    title: 'General',
    items: [
      { href: '/profile', label: 'Profile', icon: faUser },
      { href: '/team', label: 'Team', icon: faUsers },
      { href: '/settings', label: 'Settings', icon: faGear },
      { href: '/help-center', label: 'Help Center', icon: faCircleQuestion },
      {
        href: '/logout',
        label: 'Log Out',
        icon: faArrowRightFromBracket,
        variant: 'logout',
      },
    ],
  },
]