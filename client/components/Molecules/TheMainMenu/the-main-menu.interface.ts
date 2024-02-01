import type { Component } from 'vue'

export interface TheMainMenuSublistItemInterface {
    icon: Component
    href: string
    name: string
    description: string
}

export interface TheCallToActionItemInterface {
    name: string
    href: string
    icon: Component
}
