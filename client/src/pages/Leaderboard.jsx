import React from "react"
import '../css/Index.css';
import { Link } from "react-router-dom"
export default function LeaderBoard() {
  return (
    <>
    <div className="container">
      <h3 className="judul">Finish</h3>
      {/* <table className=" table table-bordered border-light">
        <thead>
          <tr>
            <th style="width: 10%;">No</th>
            <th style="width: 45%;">Username</th>
            <th style="width: 45%;">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>User1</td>
            <td>85</td>
          </tr>
          <tr>
            <td>2</td>
            <td>User2</td>
            <td>75</td>
          </tr>
          <tr>
            <td>3</td>
            <td>User3</td>
            <td>90</td>
          </tr>
        </tbody>
      </table> */}
    </div>
     <Link to='/' role="button" className="btn btn-light">Back to Game</Link>
     </>
  )
}