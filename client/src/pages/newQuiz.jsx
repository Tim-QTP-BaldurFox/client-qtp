import React from "react"
import '../style.css'

export default function Quiz() {
  return (
    <div className="container">
      <div className="quiz-page">
        <h2 className='judul'>Quiz Trivia Programming</h2>
        <form>
          <div id="quiz" className="mt-4">
            <p>JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web
              interaktif.</p>
            <div className="d-flex justify-content-center mt-5 gap-3">
              <button type="submit" className='btn btn-outline-info  btn-lg'>True</button>
              <button type="submit" className='btn btn-outline-info  btn-lg'>False</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}