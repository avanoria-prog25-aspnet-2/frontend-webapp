'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { SidebarItem } from './sidebar.types'
import styles from './Sidebar.module.css'

type SidebarMenuItemProps = {
  item: SidebarItem
}

export default function SidebarMenuItem({ item }: SidebarMenuItemProps) {
  const pathname = usePathname()

  const isActive =
    item.variant !== 'logout' &&
    (pathname === item.href || pathname.startsWith(`${item.href}/`))

  const className = [
    styles.menuItemLink,
    isActive ? styles.active : '',
    item.variant === 'logout' ? styles.logoutItem : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li>
      <Link
        href={item.href}
        className={className}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className={styles.menuItemIcon} aria-hidden="true">
          <FontAwesomeIcon icon={item.icon} />
        </span>
        <span>{item.label}</span>
      </Link>
    </li>
  )
}