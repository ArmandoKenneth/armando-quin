import { FC, useState } from "react"
import { useQuery, useIsFetching } from 'react-query'

import { SampleButton } from './Button'


interface IMainPage {
  logo: string
}

const OnClickHandler = () => {
  alert('Making sure events are working with styled-components')
  // const { isLoading, error, data } = useQuery('sampleDataFetching', async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const parsed = await res.json()
  //   debugger
  //   setSampleData(parsed)
  // })
}


const MainPage: FC<IMainPage> = ({ logo }) => {
  const [sampleData, setSampleData] = useState([])

  const { isLoading, error, data } = useQuery('sampleDataFetching', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const parsed = await res.json()
    setSampleData(parsed)
  })

  const isFetching = useIsFetching()

  let content = (
    <SampleButton color="#33afff" onClick={OnClickHandler}>
      Testing styled-components
    </SampleButton>
  )
  if (isFetching) {
    content = <p>Loading...</p>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {content}
      </header>
    </div>
  )
}

export default MainPage