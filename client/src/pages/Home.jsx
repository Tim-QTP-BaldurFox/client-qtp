import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setPlayers, setQuizSet, setRoomCode, setUsername } from "../reduxSlice"
import socket from "../socket"
import { useEffect, useState } from "react"
import '../css/bagian-bintang.css'
export default function Home() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const username = useSelector(state => state.redux.username)
    const roomCode = useSelector(state => state.redux.roomCode)
    const [usernameInput, setUsernameInput] = useState('')
    const [joinRoomInput, setJoinRoomInput] = useState('')

    function usernameInputOnChange(e) {
      e.preventDefault()

      console.log(e.target.value, '<-- e.target.value');
      setUsernameInput(e.target.value)
    }

    function handleNewRoom() {
      socket.emit("new-room", usernameInput, async (response) => {
        const u = await dispatch(setUsername(usernameInput))
        const r = await dispatch(setRoomCode(response.roomCode))
        const q = await dispatch(setQuizSet(response.quizSet))
        const s = await dispatch(setPlayers(response.players))
        if (u && r && q && s) {
          setTimeout(() => {
            navigate(`/room/${response.roomCode}/waiting`)
            
          }, 1000);

        }
      })
    }

    function handleJoinRoom() {
      const sendData = {
        username: usernameInput,
        roomCode: joinRoomInput}
      socket.emit("join-room", sendData, async (response) => {
        console.log("join-room", usernameInput, joinRoomInput);
        if (response.code != 404) {
          const u = await dispatch(setUsername(usernameInput))
          const r = await dispatch(setRoomCode(response.roomCode))
          const q = await dispatch(setQuizSet(response.quizSet))
          const s = await dispatch(setPlayers(response.players))
          if (u && r && q && s) {
            setTimeout(() => {
              navigate(`/room/${response.roomCode}/waiting`)
              
            }, 1000);
          }
        }
      })
    }

    useEffect(() => {
      socket.on("connect", () => {})
    
      return () => {
        socket.off("connect", () => {})
      }
    }, [])
    
    
    return (
        <>
        {/* <Navbar/> */}
        <div className="container">
      <div className="register-page" >
        <h2 className='judul' style={{color: "white"}}>Quiz Trivia Programming</h2>
          <input type="text" className='text' placeholder="Enter your username" value={usernameInput} onChange={usernameInputOnChange} required style={{ borderRadius: "4px", color: "white" }} /><br />
          <button className='' style={{margin: '28px', }} onClick={handleNewRoom}>New Room</button>
          <div>
            <span style={{color: "white"}}>
              or
            </span>
          </div>
          
          <div>
            <input 
              type="text" 
              name="joinRoomInput" 
              id="joinRoomInput"
              value={joinRoomInput} 
              onChange={(e) => {e.preventDefault(); setJoinRoomInput(e.target.value)}}
            />
          </div>
          <button className='' style={{margin: '28px', }} onClick={handleJoinRoom}>Join Room</button>
      </div>
    </div>
        </>
    )
}