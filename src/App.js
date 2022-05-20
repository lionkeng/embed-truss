import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Running in an iframe</p>
      </header>
      <div className="container">
        <iframe
          className="responsive-iframe"
          title="MHA"
          src="https://myhome.rc.anewgo.com/client/demo"
        />
      </div>
    </div>
  )
}

export default App
