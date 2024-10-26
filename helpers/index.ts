export function isHexString(value: string): value is `0x${string}` {
  return value.startsWith("0x");
}
