import type { Component } from 'vue'

export interface ListItemInterface {
    name: string,
    description?: string,
    href?: string,
    icon?: Component,
}

export interface FormItemInterface {
    text: string,
    value: string | boolean,
    name: string,
    description?: string
}

export interface DropdownItemInterface extends FormItemInterface{
    icon?: Component
}
