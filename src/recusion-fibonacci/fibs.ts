export function fibs (iteration: number): number[] {
  if (iteration <= 0) {
    return []
  }

  let increment = 0
  let result = [1]
  for (let index = 1; index < iteration; index++) {
    result = [...result, (result[index - 1] + increment)]
    increment = result[index - 1]
  }
  return result
}

export function fibsRec (iteration: number, sequenceArray?: number[]): number[] {
  if (iteration <= 0) {
    return []
  }

  if (iteration <= 1) {
    return [0]
  }

  if (sequenceArray === null || sequenceArray === undefined) {
    sequenceArray = [0, 1]
  }

  const currentIteration = sequenceArray.length

  // Base case
  if (currentIteration === iteration) {
    return sequenceArray
  }

  // Recursive case
  return fibsRec(iteration, [...sequenceArray, (sequenceArray[currentIteration - 1] + sequenceArray[currentIteration - 2])])
}

console.log(fibs(8))
console.log(fibsRec(8))
