import type { ColumnInterface, ItemInterface } from '../TheDataTable.vue'

export const useDataTableItems = <T>(rows: T[], columns: ColumnInterface[]) => {
  const computedItems : ComputedRef<ItemInterface[]> = computed(() => {
    return rows.map((row) => {
      return columns.reduce<ItemInterface>((acc, column) => {
        acc[column.id] = {
          value: String(row[column.id as keyof typeof row])
        }

        return acc
      }, {} as ItemInterface)
    })
  })

  return {
    computedItems
  }
}
