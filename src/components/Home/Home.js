import './Home.css';

export default function Home({ authed }) {
  return (
    <div className="homepage">
      <h1>
        Welcome to the homepage!
      </h1>
      {
        authed ? (
          <h2 id="success">
            You have successfully authed in your account!
          </h2>
        ) : (
          <h2 id="warning">
            You are not authed! Please log in to the system
          </h2>
        )
      }
    </div>
    
  )
}