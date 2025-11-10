export default function myImageLoader({ src, width, quality }) {
  return `https://longrodsilver.github.io/Hupscale${src}?w=${width}&q=${quality || 75}`
}
