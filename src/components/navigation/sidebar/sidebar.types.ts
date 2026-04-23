import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type SidebarItem = {
  href: string
  label: string
  icon: IconDefinition
  variant?: 'default' | 'logout'
}

export type SidebarGroup = {
  title: string
  items: SidebarItem[]
}