import React from "react"
import { url } from '../utils'
export default () => {
  return (
    <div>
        Home

    {
      url.map((item, index) => {
        return (
          <p key={index}>{item}</p>
        )
      })
    }
    </div>
    
  )
}