import Title from "./Title"
import Description from "./Description"

const MainHeader = (props) => {
  return (
    <>
      <Title title={props.title} />
      <Description />
    </>
  )
}

export default MainHeader