import React from 'react'
import {BeatLoader} from 'react-spinners'
const Loader = (props) => {

  const loading = props.loading

  return (
    <>
         <div className='loader-backdrop'>
          <div className='loader-container'>
            <BeatLoader loading={loading} color="#b11f0e" />
          </div>
        </div>
    </>
  )
}

export default Loader