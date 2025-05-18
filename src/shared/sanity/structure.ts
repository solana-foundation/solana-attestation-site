import { CogIcon, HomeIcon, ListIcon } from '@sanity/icons'
import { StructureResolver } from 'sanity/structure'
import structureConfig from './structure.json'

type IconName = 'HomeIcon' | 'ListIcon' | 'CogIcon'

interface BaseItem {
  type: string
}

interface DividerItem extends BaseItem {
  type: 'divider'
}

interface DocumentTypeListItem extends BaseItem {
  type: 'documentTypeListItem'
  schemaType: string
  title: string
  icon: IconName
}

interface EditorChild {
  type: 'editor'
  title: string
  schemaType: string
  documentId: string
}

interface ListItem extends BaseItem {
  type: 'listItem'
  schemaType: string
  title: string
  icon: IconName
  child: EditorChild
}

type StructureItem = DividerItem | DocumentTypeListItem | ListItem

interface StructureConfig {
  id: string
  title: string
  items: StructureItem[]
}

const iconMap: Record<IconName, typeof HomeIcon> = {
  HomeIcon,
  ListIcon,
  CogIcon,
}

export const structure: StructureResolver = S => {
  const items = (structureConfig as StructureConfig).items.map(item => {
    if (item.type === 'divider') {
      return S.divider()
    }

    if (item.type === 'documentTypeListItem') {
      return S.documentTypeListItem(item.schemaType)
        .title(item.title)
        .icon(iconMap[item.icon])
    }

    if (item.type === 'listItem') {
      return S.listItem()
        .schemaType(item.schemaType)
        .title(item.title)
        .icon(iconMap[item.icon])
        .child(
          S.editor()
            .title(item.child.title)
            .schemaType(item.child.schemaType)
            .documentId(item.child.documentId)
        )
    }

    return null
  }).filter((item): item is NonNullable<typeof item> => item !== null)

  return S.list()
    .id(structureConfig.id)
    .title(structureConfig.title)
    .items(items)
}
// .initialValueTemplates([{ schemaType: 'home', id: 'home', templateId: 'home-initial', title: 'Home', type: 'initialValueTemplateItem' }])
