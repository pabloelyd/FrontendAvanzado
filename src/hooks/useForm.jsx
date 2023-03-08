// reglas para crear un hook de react
import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults)
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (event) => {
    // Evitar que se recargue la página y se rompa el SPA
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
