import {
  getEntryStack, getCallerFromArguments,
} from './lib'
import { makeCallback } from './callback'

/**
 * Call this method to get a function that will return an error with a stack
 * trace starting at the line in code when the call was made.
 * @param {boolean} [transparent] Pretend as if the call to the function lead to the error, without exposing any of the internal stack.
 */
export default function erotic(transparent) {
  const { stack } = new Error()
  const caller = getCallerFromArguments(arguments)
  const entryStack = getEntryStack(stack, transparent)

  return makeCallback(caller, entryStack, transparent)
}
