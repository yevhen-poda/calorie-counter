const NOT_NUMBERS = /[^\d]/g
const LEADING_ZERO = /^0+/

export const formatInput = (input) => {
  return input.value.replace(NOT_NUMBERS, '').replace(LEADING_ZERO, '')
}
