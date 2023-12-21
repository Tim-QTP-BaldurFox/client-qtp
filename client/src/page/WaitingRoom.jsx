import { useSelector } from "react-redux"

export default function WaitingRoom() {

  const roomCode = useSelector(state => state.redux.roomCode)
  const players = useSelector(state => state.redux.players)
  
  return (
    <>
        <Navbar/>
        <div className='container'>
      <div class="waiting-room-page">
        <h2 style={{color: "white"}}>Waiting Room...</h2>
        <div style={{color: "#0ef"}}>Room Code : { roomCode ?? 'XYZA'}</div> <br />
        {/* <button className="btn btn-outline-secondary" disabled>-- Start Game --</button> */}
        <button className="btn btn-outline-success">-- Start Game --</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Player List</th>
              </tr>
            </thead>
            <tbody>
              
              { players && players?.map( (el, i) => {
                return (
                  <tr key={ i }>
                    <td>{ el }</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  )
}