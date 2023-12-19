export const cyberReindeer = (road: string, time: number): string[] => {
  const roadArray: string[] = [road]
  let a: number = 0
  let b: string = '.'

  for (let i: number = 1; i < time; i++) {
    if (i === 5) road = road.replace(/\|/g, '*')

    const newRoad: string = road.replace(/S[\.\*]/, `${b}S`)

    if (newRoad !== road) {
      a++
      b = road[a]
    }

    road = newRoad
    roadArray.push(road)
  }

  return roadArray
}
