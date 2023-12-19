export const maxDistance = (movements: string): number => {
  let distance = 0

  const rigth = movements.match(/>/g)?.length ?? 0
  const left = movements.match(/</g)?.length ?? 0
  console.log(rigth)
  console.log(left)

  distance += rigth
  distance -= left

  const extra = movements.length - (rigth + left)

  return Math.abs(distance) + extra
}
