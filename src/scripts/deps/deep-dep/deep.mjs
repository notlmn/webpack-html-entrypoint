export function copy(src, dst) {
  console.log('Copying from', src, 'to', dst);
}

export function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}
