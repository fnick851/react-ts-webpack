import * as React from "react"
import "./App.css"

interface Props {
  name: string
}

const App = (props: Props) => {
  const { name } = props
  return <h1>Hello {name}</h1>
}

export default App
