import './v-clarifier.scss'

export const vClarifier = {
  mounted (el) {
    const clarifier = document
      .createElement('div')
    el.style.position = 'relative'
    clarifier.classList.add('v-clarifier')

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left // x position within the element.
      const y = e.clientY - rect.top // y position within the element.

      clarifier.style.left = `${x - 100}px`
      clarifier.style.top = `${y - 100}px`
    }

    el.addEventListener('mouseover', () => {
      el.appendChild(clarifier)

      el.addEventListener('mousemove', onMouseMove)
    })

    el.addEventListener('mouseout', () => {
      el.removeChild(clarifier)

      el.removeEventListener('mousemove', onMouseMove)
    })
  }
}
