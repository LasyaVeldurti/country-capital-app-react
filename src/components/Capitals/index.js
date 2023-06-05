import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const CountryCapitals = props => {
  const {countryDetails} = props
  const {capitalDisplayText, id} = countryDetails
  return <option value={id}>{capitalDisplayText}</option>
}

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onChangeSelectOption = event => {
    console.log(event.target.value)

    const index = countryAndCapitalsList
      .map(object => object.id)
      .indexOf(event.target.value)

    this.setState({country: countryAndCapitalsList[index].country})
  }

  render() {
    const {country} = this.state

    return (
      <div className="bg-container">
        <div className="city-container">
          <h1>Countries And Capitals</h1>
          <div className="dropdown-container">
            <div>
              <select
                className="option-value"
                onChange={this.onChangeSelectOption}
              >
                {countryAndCapitalsList.map(eachCity => (
                  <CountryCapitals
                    countryDetails={eachCity}
                    key={eachCity.id}
                  />
                ))}
              </select>
            </div>
            <p className="text">is capital of which country</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
