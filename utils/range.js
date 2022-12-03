/**
 * @description generates a numeric range of integers counting from one
 * @param {number} size
 */
export default function range(size = 0) {
  return Array.from({ length: size }).map((_, i) => i + 1);
}
