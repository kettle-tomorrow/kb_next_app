import Title from "./Title"
import Description from "./Description"

const MainHeader = (props) => {
  return (
    <div className='m-10'>
      <Title title={props.title} />
      <Description />
    </div>
  )
}

export default MainHeader