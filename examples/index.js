import { froth, getFroth } from "../src"

const FROTH_CONSTANTS = {
  server: "https://res.cloudinary.com/analog-cafe/image/upload/",
  transformations: "c_scale,fl_progressive",
  sizes: {
    i: "40",
    t: "280",
    s: "520",
    m: "1268",
    l: "1800"
  },
  placeholder:
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
}

console.log(
  "froth object from src string",
  froth(
    { src: "image-froth_1681956_9ad677d272a84ebc9360ad6199372f8b" },
    FROTH_CONSTANTS
  )
)
console.log(
  "froth src string from URL",
  getFroth(
    "https://res.cloudinary.com/analog-cafe/image/upload/c_scale,fl_progressive,w_1268/image-froth_1681956_9ad677d272a84ebc9360ad6199372f8b.jpg"
  )
)
