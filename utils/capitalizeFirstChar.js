export default function capitalizeFirstChar(str = "") {
  const firstLetter = str.charAt(0).toUpperCase();
  const remainingWord = str.slice(1);
  return `${firstLetter}${remainingWord}`;
}
