const baseFontSize = 16;
export default function pixelsToRem(pixels = 16) {
  return `${pixels / baseFontSize}rem`;
}
