export const findNaughtyStep = (original: string, modified: string): string => {
  if (original === modified) return ''

  const maxLength = Math.max(original.length, modified.length)

  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      return modified.length > original.length ? modified[i] : original[i]
    }
  }

  return ''
}
