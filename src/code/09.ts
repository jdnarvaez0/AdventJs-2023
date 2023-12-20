export const adjustLights = (lights: string[]): number => {
  function checkLights(lights: string[]): number {
    let cambios = 0

    for (let i = 1; i < lights.length; i++) {
      if (lights[i] === lights[i - 1]) {
        cambios++
        lights[i] = lights[i] === '🟢' ? '🔴' : '🟢'
      }
    }

    return cambios
  }

  return Math.min(checkLights([...lights]), checkLights([...lights.reverse()]))
}
