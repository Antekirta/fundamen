import type {
  TheCallToActionItemInterface,
  TheMainMenuSublistItemInterface
} from '@/components/Molecules/TheMainMenu/the-main-menu.interface'

export interface TheMainMenuItemPropsInterface {
    title: string,
    href: string,
    items?: TheMainMenuSublistItemInterface[],
    callsToAction?: TheCallToActionItemInterface[],
    isLarge?: boolean
}
