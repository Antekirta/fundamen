import TheInput from '../components/TheInput.vue'

export default {
  title: 'Example/Input',
  component: TheInput,
  tags: ['autodocs'],
  args: {
    label: 'Name'
  },
  decorators: [
    () => ({
      template: '<div style="width: 280px;"><story /></div>'
    })
  ]
}

export const Primary = {
  args: {
    helpText: 'Beasts were standing by the door.',
    cornerHint: 'Optional'
  }
}

export const Inline = {
  args: {
    inline: true,
    helpText: 'Beasts were standing by the door.'
  }
}

export const Required = {
  args: {
    required: true
  }
}

export const WithErrors = {
  args: {
    errors: [
      'They were shot.',
      'And they died.'
    ]
  }
}

export const LabelOverlapping = {
  args: {
    labelType: 'overlapping'
  }
}

export const LabelInset = {
  args: {
    labelType: 'inset'
  }
}

export const WithAddon = {
  args: {
    addon: 'http://'
  }
}

export const PrependIcon = {
  args: {
    prependIcon: 'envelope'
  }
}

export const AppendIcon = {
  args: {
    appendIcon: 'envelope'
  }
}

export const BorderBottom = {
  args: {
    borderType: 'bottom'
  }
}

export const Pill = {
  args: {
    pill: true
  }
}

export const StyledFromOutside = {
  args: {
    borderType: 'bottom',
    inputExtraClasses: 'bg-slate-200'
  }
}
