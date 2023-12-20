export default function Home() {
    const navigate = useNavigate()
    return (
        <>
        <Navbar/>
        <div className="container">
      <div className="register-page" >
        <h2 className='judul' style={{color: "white"}}>Quiz Trivia Programming</h2>
        <form>
          <input type="text" className='text' placeholder="Enter your username" required style={{ borderRadius: "4px", color: "white" }} /><br />
          <button type="submit" className='btn btn-outline-primary' style={{margin: '28px', }} onClick={() => navigate('/create')}>New Room</button>
          <button type="submit" className='btn btn-outline-primary' style={{margin: '28px', }} onClick={() => navigate('/join')}>Join Room</button>
        </form>
      </div>
    </div>
        </>
    )
}