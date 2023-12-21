import { useState, useEffect } from 'react'
import socket from '../socket';
import { Navigate, redirect, useNavigate } from "react-router-dom";
import '../css/Index.css';

function Quiz() {
  const [isConnected, setIsConnected] = useState(false)
  const [countPlayer, setCountPlayer] = useState(0);
  const [username, setUsername] = useState("");
  const [waitingRoom , setWaitingRoom ] = useState([]);
  const [allQuestion, setAllQuestion] = useState([]);
  const [question, setQuestion] = useState(null);
  let [index, setIndex] = useState(0);
  const [isFinish, setFinish] = useState(false);
  let [answer, setAnswer] = useState(null);
  let [wrongAnswer, setWrongAnswer] = useState(null);
  let [rightAnswer, setRightAnswer] = useState(null);
  let [score, setScore] = useState(0);
  let allQuestion1 =  []
  const navigate = useNavigate();
  useEffect(() =>{
    socket.on("connect", () =>{
      setIsConnected(true);
      setFinish(false);
      socket.emit("join_quiz", countPlayer);
      socket.emit("quiz_page");
    });
    socket.emit("question");
    socket.emit("rightAnswer");
    socket.emit("score");
    // socket.emit("join_quiz", "ganang");
    
    socket.on("count_player", (count) =>{
      console.log(count, '<-- count player')
    })
    
    socket.on("countIndex", (index) =>{
      setIndex(index);
    })

    socket.on("isFinish", (data) =>{
      setFinish(data);
    })
    socket.on("getQuiz", (data) =>{
      allQuestion1 = data.results;
      setAllQuestion(data.results);
      console.log(allQuestion1, '<--');
      console.log(data.results, "<--- get quiz");
    })
    socket.on("client_is_join", (data) =>{
      setCountPlayer(data);
      console.log(data, "<-- client is join")
    })
   
    socket.on("receive_username", (data) =>{
      setWaitingRoom((prevState) => [...prevState, data])
    });
    socket.on("getQuestion", (data)=>{
      console.log(data, '<--- getQuestion on client');
      setQuestion(data);
    })
    socket.on("getIndex", (data)=>{
      console.log(data, '<-- getIndex client');
      setIndex(data);
    })
    socket.on('getScore', (data)=>{
      console.log(data, '<-- get score');
      setScore(data);
    })
  }, [index]);

  useEffect(() =>{
    setIndex(0);
    socket.emit("countIndex", (index));
    console.log(index, '<-- di count index', isFinish);
    if(isFinish){
      navigate('/leaderboard')
    }
  }, [isFinish])
  // console.log(allQuestion, '<fas');
  function handlerBtn(e){
    console.log(e.target.value, '<<--- indexnya');
    // socket.emit("join_quiz", "ganang");
    // setIndex(+e.target.value++);
    socket.emit("countIndex", (index+1));
    // socket.emit("countIndex", index);
    // socket.emit("question", index);
    
  }

  function handleAnswer(e){
    socket.emit("answer", e.target.value);
    socket.emit("countIndex", (index+1));
    console.log(isFinish, 'isFinish');
    
  }

  return (
    <>
         <div className="container">
      <div className="quiz-page">
        <h2 className='judul'>Quiz Trivia Programming</h2>
          <div id="quiz" className="mt-4">
            <p>{question?.question}</p>
            <div className="d-flex justify-content-center mt-5 gap-3">
              <button name="answer" onClick={handleAnswer} style={{color: "blue", outline: "blue", background: "whiteSmoke", borderRadius: "10px", border: "azure", marginRight:'3px'}} value="True">True</button>
              <button name="answer" onClick={handleAnswer} style={{color: "blue", outline: "blue", background: "whiteSmoke", borderRadius: "10px", border: "azure"}} value="False">False</button>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Quiz