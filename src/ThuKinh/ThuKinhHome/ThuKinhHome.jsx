import React, { Component } from 'react'
import ThuKinhHeader from '../ThuKinhHeader/ThuKinhHeader'
import ThuKinhModal from '../ThuKinhModal/ThuKinhModal'

export default class ThuKinhHome extends Component {
  render() {
    return (
        <div className='home'>
            <ThuKinhHeader/>
            <div>
                <ThuKinhModal/>
            </div>
          
        </div>
      
    )
  }
}
