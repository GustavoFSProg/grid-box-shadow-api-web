import { Link } from "react-router-dom"



function Profile() {
  const ID = localStorage.getItem('Id')

  return (
    <div style={{ display: 'flex', width: '100vw', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Link to="/"><h3>
        Home
      </h3>
      </Link>
      <h2>profile</h2>
      <h3>{ID}</h3>
    </div>
  )
}

export default Profile