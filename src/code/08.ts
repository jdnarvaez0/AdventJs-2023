export const organizeGifts = (gifts: string): string => {
  const matches = gifts.match(/(\d*\w)/g)

  if (matches === null) return ''

  for (const match of matches) {
    let count = Number(match.slice(0, -1))
    const gift = match.at(-1)
    let draft = ''

    const palets = Math.floor(count / 50)
    count -= palets * 50
    const boxes = Math.floor(count / 10)
    count -= boxes * 10

    if (palets > 0) draft += `[${gift}]`.repeat(palets)
    if (boxes > 0) draft += `{${gift}}`.repeat(boxes)
    if (count > 0) draft += `(${gift?.repeat(count)})`

    gifts = gifts.replace(match, draft)
  }

  return gifts
}
