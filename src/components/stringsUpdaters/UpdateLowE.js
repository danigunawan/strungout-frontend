import React from 'react'
import { connect } from 'react-redux'
import { updateBrokenString } from '../../actions/myStringPacks.js'

const UpdateLowE = ({ updateBrokenString, myStringPacks }) => {

const handleSubmit = event => {
  event.preventDefault()
  let currentStringCount = myStringPacks[0].attributes.low_e_string_counter
    const updateStringInfo = {
      ...myStringPacks[0].attributes,
      low_e_string_counter: currentStringCount +=1
    }
  updateBrokenString(updateStringInfo)
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="submit" value="Low E"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    myStringPacks: state.myStringPacks
  }
}


export default connect(mapStateToProps, { updateBrokenString })(UpdateLowE)
