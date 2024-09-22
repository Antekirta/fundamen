import { useSlots } from 'vue'

export const useHasSlot = () => {
  function hasSlot (slotName: string): boolean {
    const slots = useSlots()

    return !!slots[slotName]
  }

  return {
    hasSlot
  }
}
