export const decode = (message: string): string => {
  const regex = /\(([^()]+)\)/g

  while (regex.test(message)) {
    message = message.replace(regex, (_, match) =>
      match.split('').reverse().join('')
    )
  }

  return message
}
