import React, {useState} from "react"
import ('../utils/preload' /* webpackChunkName: "lodash" */ /* webpackPreload: true */)
export default () => {

  let [info, setInfo] = useState({})

  const getInfo = () => {
    import('../consts/index'/* webpackChunkName: "const" */ /* webpackPreload: true */).then(data => {
      console.log(data);
      setInfo(data.userInfo)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <button onClick={getInfo}>获取信息</button>
      <p>{info.name}</p>
      <p>{info.age}</p>
    </div>
  )
}