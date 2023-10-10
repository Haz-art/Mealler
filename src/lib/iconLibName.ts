export function iconLibName(input: string) {
  let libraryName = input[0].toLowerCase()

  for (let x = 1; x < input.length; x++) {
    if (input[x] === input[x].toUpperCase()) {
      break
    }

    libraryName += input[x]
  }

  return libraryName
}
