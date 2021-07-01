const Square = props => {
  if (props.isDisplay) {
    return (
      <button onClick={props.onClick} className="border-solid border-2 border-black float-left text-base font-bold h-8 w-8 text-center">
        {props.value}
      </button>
    )
  }
  return (
    <button onClick={props.onClick} className="border-solid border-2 border-black float-left text-base font-bold h-8 w-8 text-center">
    </button>
  )
  
}
export default Square