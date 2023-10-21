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
    label: 'Name'
  }
}
