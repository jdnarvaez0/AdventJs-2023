export const findNaughtyStep = (original: string, modified: string): string => {
  if (original === modified) return ''

  const originalArray = original.split('')
  const modifiedArray = modified.split('')

  const maxLength = Math.max(originalArray.length, modifiedArray.length)

  for (let i = 0; i < maxLength; i++) {
    if (originalArray[i] !== modifiedArray[i]) {
      return modifiedArray.length > originalArray.length
        ? modifiedArray[i]
        : originalArray[i]
    }
  }

  return ''
}
