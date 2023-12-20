import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "../socket";
import { useNavigate } from "react-router-dom";
import { setPlayers } from "../reduxSlice";
import { Link } from "react-router-dom";

export default function WaitingRoom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomCode = useSelector((state) => state.redux.roomCode);
  const players = useSelector((state) => state.redux.players);

  useEffect(() => {
    socket.on("connect", () => {});
    socket.on("new-player", (data) => {
      dispatch(setPlayers(data.players));
    });

    return () => {
      //
    };
  }, []);

  return (
    <>
      <h1>Room code: {roomCode}</h1>
      <p>Players:</p>
      <ul>
        {/* <li></li> here */}
        {players.map((p, i) => {
          return <li key={i}>{p.username}</li>;
        })}
      </ul>

      {/* {JSON.stringify(players)} */}

      {players.length >= 2 ? (
        <Link to={`/room/${roomCode}`}>
          <button>Start Game</button>
        </Link>
      ) : null}
    </>
  );
}
