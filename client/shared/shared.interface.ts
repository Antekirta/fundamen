import type { Component } from 'vue'

export interface ListItemInterface {
    name: string,
    description?: string,
    href?: string,
    icon?: Component,
}

export interface SelectOptionInterface {
    text: string,
    value: string
}

export interface RadioGroupOptionInterface {
    text: string,
    value: string
}

export interface FormItemInterface<T=string> {
    text: string,
    value: T,
    name: string,
    description?: string
}

export interface DropdownItemInterface extends FormItemInterface{
    icon?: Component
}

export interface InputInterface extends FormItemInterface<string>{
    placeholder?: string
}
