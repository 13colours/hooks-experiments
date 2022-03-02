import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'

export default function Arrays({ words, persons, fixed }) {
  const [content, setContent] = useState()

  useEffect(() => {
    console.log(`Arrays (fixed): I am here...`)
  }, [fixed])

  useEffect(() => {
    console.log(`Arrays (fixed - length): I am here...`)
  }, [fixed?.length])

  useEffect(() => {
    console.log(`Arrays (fixed - element): I am here...`)
  }, [fixed?.[0]])

  const fixedElement = fixed?.[0]

  useEffect(() => {
    console.log(`Arrays (fixed - element - exracted): I am here...`)
  }, [fixedElement])

  useEffect(() => {
    console.log(`Arrays (string): I am here...`)
    setContent(`Words: ${words.join(`, `)}`)
  }, [words])

  const word = words[0]

  useEffect(() => {
    console.log(`Arrays (string - first element): I am here...`)
  }, [word])

  useEffect(() => {
    console.log(`Arrays (object): I am here...`)
    persons.length &&
      setContent(`Persons: ${persons[0].firstName} ${persons[0].lastName}`)
  }, [persons])

  useEffect(() => {
    console.log(`Arrays (first object's element): I am here...`)
  }, [persons?.[0]?.firstName])

  const person = persons?.[0]?.firstName

  useEffect(() => {
    console.log(`Arrays (first object's extracted element): I am here...`)
  }, [person])

  return (
    <div className='section'>
      <p>Arrays: {content}</p>
      <div>
        <button onClick={() => setContent(faker.lorem.word())}>
          Re-render arrays component
        </button>
      </div>
    </div>
  )
}
