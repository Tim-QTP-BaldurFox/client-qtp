import Navbar from "./Navbar";

export default function WaitingRoom() {
    return (
        <>
        <Navbar/>
        <div className='container'>
      <div class="waiting-room-page">
        <h2 style={{color: "white"}}>Waiting Room...</h2>
        <div style={{color: "#0ef"}}>Room Code : XYZA</div> <br />
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
              <tr>
                <td>User1</td>
              </tr>
              <tr>
                <td>User2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
        </>
    )
}