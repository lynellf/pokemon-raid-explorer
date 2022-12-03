import range from "utils/range";
export default function chunkArr(arr = [], size = 10) {
  const clone = [...arr];
  // arr len of 20
  // 20 / 10 = 2 (two chunks)

  // arr len of 5
  // 5 / 10 = 0.5 (1 chunk)
  const totalChunks = range(Math.round(arr.length / size));

  // I didn't want to use any control flow statements
  // so elected to use a array mutating method (splice)
  // continue to chop the original array into chunks
  //which exist in the output array
  return totalChunks.map(() => clone.splice(0, size));
}
