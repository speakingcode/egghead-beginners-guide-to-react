import React from 'react'

export const Greeting = () => {
  const [name1, setName1]  = React.useState('')
  const handleChange1 = event => setName1(event.target.value)

  const [name2, setName2]  = React.useState('')
  const handleChange2 = event => setName2(event.target.value)
  
  return (
    <>
      <div>
        <form>
          <label htmlFor="name1">Name: </label>
          <input id="name1" onChange={handleChange1} />
        </form>
        {name1 ? <strong>Hello {name1}</strong> : 'Please type your name'}
      </div>

      <div>
        <form>
          <label htmlFor="name2">Name: </label>
          <input id="name2" onChange={handleChange2} />
        </form>
        {name2 ? <strong>Hello {name2}</strong> : 'Please type your name'}
      </div>
    </>
  )
}
