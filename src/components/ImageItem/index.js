import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {thumbnailUrl} = imageDetails

  const onClickImageId = () => {
    onClickImage(thumbnailUrl)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickImageId}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default ImageItem
