import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

export default function Objects({ file, transaction, fixed }) {
  const [content, setContent] = useState()
  const [content2, setContent2] = useState()

  useEffect(() => {
    console.log(`Objects (fixed): I am here...`)
  }, [fixed])

  useEffect(() => {
    console.log(`Objects (fixed - key): I am here...`)
  }, [fixed?.key1])

  useEffect(() => {
    console.log(`Objects (fixed - nested key - array value): I am here...`)
  }, [fixed?.key3?.keys])

  const key3 = fixed?.key3

  useEffect(() => {
    console.log(`Objects (fixed - nested object extracted): I am here...`)
  }, [key3])

  useEffect(() => {
    console.log(`Objects (1 level): I am here...`)
    Object.keys(file).length &&
      setContent(`My file is ${file.fileName} of type ${file.fileType}`)
  }, [file])

  useEffect(() => {
    console.log(`Objects (1 level - key): I am here...`)
    file?.fileName && setContent2(`My file is ${file.fileName}`)
  }, [file?.fileName])

  useEffect(() => {
    console.log(`Objects (nested): I am here...`)
    transaction &&
      setContent(`My transaction details are ${JSON.stringify(transaction)}`)
  }, [transaction])

  useEffect(() => {
    console.log(`Objects (nested - key): I am here...`)
    transaction?.amount &&
      setContent2(`My transaction amount is ${transaction.amount}`)
  }, [transaction?.amount])

  return (
    <div className='section'>
      <p>Objects: {content}</p>
      <p>Objects: {content2}</p>
      <div>
        <button
          onClick={() => {
            setContent(faker.lorem.word())
            setContent2(faker.lorem.word())
          }}
        >
          Re-render object component
        </button>
      </div>
    </div>
  )
}
