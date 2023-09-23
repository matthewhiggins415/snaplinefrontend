import { TbPhotoSearch } from 'react-icons/tb'

const style = { color: "black", fontSize: "3em" }

export const Camera = () => {
  return (
    <a href="/">
      <p>Snap Line</p>
      <TbPhotoSearch style={style} />
    </a>
  )
}