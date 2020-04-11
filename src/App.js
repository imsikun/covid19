import React from 'react'

//neat way of importing the files
import { Cards, Chart, CountryPicker } from './components'

//importing api file
import { fetchData } from './api'

//img file
import coronaImage from './images/covid19.png'

//import styling over here (global)
import styles from './App.module.css'
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })
    console.log(country)
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
