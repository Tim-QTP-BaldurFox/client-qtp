import { useEffect, useState } from "react"

export default function Quiz({ d }) {
  const [options, setOptions] = useState([])

  
  useEffect(() => {
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    let answers = []
    
    answers.push(d.correct_answer)
    d.incorrect_answers.map( a => {
      answers.push(a)
    })
    shuffle(answers)
    setOptions(answers)
  
    return () => {
      //
    }
  }, [])
  
  
  return (
    <>
      <div>
        <p>{ d.question }</p>
        {(options && options.length > 0) && options.map( (el, i) => {
          return (
            <p key={i}>
              <button>
                { el }
              </button>
            </p>
          )
        })}
      </div>
    </>
  )
}