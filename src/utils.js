// EXAMPLE USAGE:
// const people = bindRatiosToUrls({ baseUrl: process.env.REACT_APP_IMG_URL, dir: 'people', length: 167, ratios: ratios.people})
// console.log(people)


export const buildImageUrls = ({ baseUrl, dir, length }) =>
  [...Array(length)].map((img, index) => `${baseUrl}/${dir}/img${index}.jpg`)

export const bindRatiosToUrls = ({ baseUrl, dir, length, ratios }) => {
  const imageUrls = buildImageUrls({ baseUrl, dir, length })
  return imageUrls.map((imageUrl, index) => {
    return {
      url: imageUrl,
      ratio: ratios[index],
      id: index
    }
  })
}

export const paginate = ({ images, nPerPage = 20 }) => {
  let paginatedImages = []
  while (images.length) {
    paginatedImages.push(images.splice(0, nPerPage))
  }
  return paginatedImages
}
