import React from 'react'
import { Link } from 'react-router-dom'

import s from './index.module.less'


export default () => {
  return (
    <div className={s.header}>
      <Link className={s.link} to={'/'}>首页</Link>
      <Link className={s.link} to={'/user'}>用户</Link>
      <Link className={s.link} to={'/profile'}>个人</Link>
      <Link className={s.link} to={'/abc/999'}>二级路由</Link>
    </div>
  )
}