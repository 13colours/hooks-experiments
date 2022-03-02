import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import Primitive from './primitive'
import Arrays from './arrays'
import Objects from './objects'

export default function DependencyArray() {
  const [content, setContent] = useState(faker.animal.lion())
  const [count, setCount] = useState(0)
  const [words, setWords] = useState([])
  const [persons, setPersons] = useState([])
  const [file, setFile] = useState({})
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    console.log(`DependencyArray (no deps): I am here...`)
  })

  useEffect(() => {
    console.log(`DependencyArray (empty deps): I am here...`)
  }, [])

  const fixedPrimitive = `I am a fixed primitive`
  const fixedArray = [`element 1`, `element 2`]
  const fixedObject = {
    key1: 'value1',
    key2: 'value2',
    key3: {
      key4: { key6: 'value6' },
      key5: [`el51`, `el52`],
    },
  }

  return (
    <div>
      <h2>Dependency Array</h2>
      <p>
        Don't forget to open your <em>devtools</em>
      </p>

      <div className='manual-render'>
        <p>{content}</p>
        <button onClick={() => setContent(faker.animal.lion())}>
          Random animal
        </button>
      </div>

      <div>
        <Primitive count={count} fixed={fixedPrimitive} />
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>

      <div>
        <Arrays words={words} persons={persons} fixed={fixedArray} />
        <button onClick={() => setWords(faker.lorem.words().split(` `))}>
          Random words
        </button>
        <button
          onClick={() =>
            setPersons([
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
              },
            ])
          }
        >
          Random person
        </button>
      </div>

      <div>
        <Objects file={file} transaction={transaction} fixed={fixedObject} />
        <button
          onClick={() =>
            setFile({
              fileName: faker.system.fileName(),
              fileType: faker.system.fileType(),
            })
          }
        >
          Random file
        </button>
        <button
          onClick={() => setTransaction(faker.helpers.createTransaction())}
        >
          Random transaction
        </button>
      </div>
    </div>
  )
}
