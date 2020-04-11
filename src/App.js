import React from 'react'

//neat way of importing the files
import { Cards, Chart, CountryPicker } from './components'

//importing api file
import { fetchData } from './api'

//import styling over here (global)
import styles from './App.module.css'
class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }
  render() {
    const { data } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App
