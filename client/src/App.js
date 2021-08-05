import React from 'react'

function App() {
  return (
    <div>
      <df-messenger
        id='messenger'
        intent=''
        autoFocus
        chat-title='CatBot'
        agent-id={process.env.REACT_APP_AGENT_ID}
        language-code='pl'
        expand={true}
      ></df-messenger>
    </div>
  )
}

export default App
