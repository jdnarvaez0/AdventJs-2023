export const firtsRepeatedId = (giftIds: number[]): number => {
  const ids = new Set()
  const repeated: number[] = []
  for (let i = 0; i < giftIds.length; i++) {
    if (ids.has(giftIds[i])) {
      return giftIds[i]
    } else {
      ids.add(giftIds[i])
    }
  }
  return repeated[0] ?? -1
}
