import * as React from "react"

interface Props {
  name: string
}

const App = (props: Props) => {
  const { name } = props
  return (
    <div className="bg-gray-500">
      <h1 className="text-noahred">Hello {name}</h1>
    </div>
  )
}

export default App
