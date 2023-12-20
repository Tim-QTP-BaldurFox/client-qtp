import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "./socket";
import { setQuizSet, setRoomCode, setUsername, setPlayers } from "./reduxSlice";
import Quiz from "./components/Quiz";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const roomCode = useSelector((state) => state.redux.roomCode);
  const username = useSelector((state) => state.redux.username);
  const quizSet = useSelector((state) => state.redux.quizSet);
  const players = useSelector((state) => state.redux.players);

  const [usernameInput, setUsernameInput] = useState("");

  const navigate = useNavigate();

  function handleNewRoom() {
    socket.emit("new-room", usernameInput, (response) => {
      // console.log(response, '<-- response');
      dispatch(setUsername(usernameInput));
      dispatch(setRoomCode(response.roomCode));
      dispatch(setQuizSet(response.quizSet));
      dispatch(setPlayers(response.players));
      navigate(`/room/${roomCode}/waiting`);
    });
  }

  function handleJoinRoom(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (!formJson.roomCodeInput) return null;
    const arg = {
      username: usernameInput,
      roomCode: formJson.roomCodeInput,
    };
    socket.emit("join-room", arg, (response) => {
      if (response.code == 404) {
        //
      } else {
        dispatch(setRoomCode(response.roomCode));
        dispatch(setQuizSet(response.quizSet));
        dispatch(setPlayers(response.players));
        navigate(`/room/${roomCode}/waiting`);
      }
    });
  }

  function handleUsernameInput(e) {
    e.preventDefault();
    setUsernameInput(e.target.value);
  }

  function handleAnswer(answer) {
    socket.emit("client-answer", answer, (response) => {
      // TODO
    });
  }

  useEffect(() => {
    socket.on("connect", () => {});

    // socket.on("new-player", (data) => {
    //   dispatch(setPlayers(data.players))
    // })

    return () => {
      //
    };
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <div>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={usernameInput}
          onChange={handleUsernameInput}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "3rem" }}>
        <div>
          <button onClick={handleNewRoom}>New Room</button>
        </div>

        <div style={{ marginLeft: "3rem" }}>
          <p> or </p>
        </div>

        <div style={{ marginLeft: "3rem" }}>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              name="roomCodeInput"
              id="roomCodeInput"
              placeholder="room code"
            />
            <button type="submit" style={{ marginLeft: "1rem" }}>
              Join Room
            </button>
          </form>
        </div>
      </div>

      <div>
        <Outlet />
        {/* <p>{ roomCode && `Room code: ${roomCode}` }</p>
        <ul>
          { quizSet && quizSet.results.map( (q, i) => {
            console.log(i)
            // return <li key={i}>{ q.question }</li>
            return <Quiz key={i} d={q} />
          }) }
        </ul> */}
      </div>
    </>
  );
}

export default App;
