import Square from "./Square"

const Board = () => {
  return (
    <div>
      <div className="table">
        <Square value='1' />
        <Square value='2' />
        <Square value='3' />
        <Square value='4' />
        <Square value='5' />
      </div>
      <div className="table">
        <Square value='6' />
        <Square value='7' />
        <Square value='8' />
        <Square value='9' />
        <Square value='10' />
      </div>
      <div className="table">
        <Square value='11' />
        <Square value='12' />
        <Square value='13' />
        <Square value='14' />
        <Square value='15' />
      </div>
      <div className="table">
        <Square value='16' />
        <Square value='17' />
        <Square value='18' />
        <Square value='19' />
        <Square value='20' />
      </div>
      <div className="table">
        <Square value='21' />
        <Square value='22' />
        <Square value='23' />
        <Square value='24' />
        <Square value='25' />
      </div>
    </div>
  )
}
export default Board