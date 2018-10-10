const TOGGLE_ANALITICS = 'TOGGLE_ANALITICS'

export const toggleAnalitics = () => ({type: TOGGLE_ANALITICS})

export default function reducer(toggle = true, action) {
  switch (action.type) {
    case TOGGLE_ANALITICS:
      return !toggle
    default:
      return toggle
  }
}
