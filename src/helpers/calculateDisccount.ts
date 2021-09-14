const calculateDigits = (num: number): number => {
  return (num.toString().split('.')[0]).toString().length;
}

export const calculateDisccount = (disc: number, total: number): string | number => {
  return disc === 0
    ? total
    : (total - disc * total / 100).toPrecision(calculateDigits(total) + 2)
}