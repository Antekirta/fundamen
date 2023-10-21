import { twMerge } from 'tailwind-merge'
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config.cjs'
const { theme } = resolveConfig(config)

export class TailwindHelper {
  static getConfig () {
    return {
      width: {
        base: theme.width[1]
      }
    }
  }

  static multiplyUnits (base, multiplier, unit = 'rem') {
    return `${Number(String(base).replace(unit, '')) * multiplier}${unit}`
  }

  static merge (classList : string[]) {
    const SPACE = ' '

    return twMerge(classList.join(SPACE))
  }
}
