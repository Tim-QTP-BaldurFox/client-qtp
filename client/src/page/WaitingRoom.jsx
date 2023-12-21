import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPlayers } from "../reduxSlice"
import { useNavigate } from "react-router-dom"
import socket from "../socket"
import '../css/bagian-bintang.css'

export default function WaitingRoom() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const roomCode = useSelector(state => state.redux.roomCode)
  const players = useSelector(state => state.redux.players)

  useEffect(() => {
    socket.on("connect", () => {})
    socket.on("new-player", (data) => {
      if (data.roomCode == roomCode) {
        dispatch(setPlayers(data.players))
      }
    })
  
    return () => {
      socket.off("connect", () => {})
    }
  }, [])
  

    return (
        <>
        
        {/* <Navbar/> */}
        <div className='container'>
      <div className="waiting-room-page">
        <h2 style={{color: "white"}}>Waiting Room...</h2>
        <div style={{color: "#0ef"}}>Room Code : {roomCode ?? 'XYZA'}</div> <br />
        {/* <button className="btn btn-outline-secondary" disabled>-- Start Game --</button> */}
        <button className="">-- Start Game --</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Player List</th>
              </tr>
            </thead>
            <tbody>
              
              { (players?.length > 0) && players.map( (el, i) => {
                return <tr key={i}>
                  <td>{ el.username }</td>
                </tr>
              })}
              
            </tbody>
          </table>
        </div>
      </div>
      </div>
        </>
    )
}