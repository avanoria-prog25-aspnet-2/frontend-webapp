import SidebarMenuItem from './SidebarMenuItem'
import { studentSidebarGroups } from './sidebar.data'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={`card styles.sidebar `}>
      <nav className={styles.card} aria-label="Sidebar navigation">
        {studentSidebarGroups.map((group) => (
          <ul key={group.title} className={styles.menu}>
            <li className={styles.menuTitle}>{group.title}</li>
            {group.items.map((item) => (
              <SidebarMenuItem key={`${group.title}-${item.href}-${item.label}`} item={item} />
            ))}
          </ul>
        ))}
      </nav>
    </aside>
  )
}