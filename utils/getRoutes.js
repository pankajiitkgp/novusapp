import imageDataList from '../static/projects/imageData.json'
export default ()=>{
  const imageList = imageDataList.imagesList
  return imageList.map(v => `/projects/${v.client.toLowerCase().split(' ').join('-')}/${v.id}`)
}