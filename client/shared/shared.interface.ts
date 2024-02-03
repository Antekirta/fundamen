import type { Component } from 'vue'

export interface ListItemInterface {
    name: string,
    description?: string,
    href?: string,
    icon?: Component,
}
