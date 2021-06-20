const Square = props => {
  return (
    <button className="border-solid border-2 border-black float-left text-base font-bold h-8 w-8 text-center">
      {props.value}
    </button>
  )
}
export default Square