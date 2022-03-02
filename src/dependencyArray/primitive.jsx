import { useEffect, useState } from 'react'

export default function Primitive({ count, fixed }) {
  const [content, setContent] = useState()

  useEffect(() => {
    console.log(`Primitive: I am here...`)
    setContent(`Count: ${count}`)
  }, [count])

  useEffect(() => {
    console.log(`Primitive (fixed): I am here...`)
  }, [fixed])

  return <p>Primitive: {content}</p>
}
