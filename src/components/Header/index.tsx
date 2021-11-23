import React from 'react';
import Broccoli from '../../assets/broccoli.png'
import { PageHeader } from 'antd';
interface HeaderType {
  title: string
}
const Header:React.FC<HeaderType> = ({title}) => {
  return (
    <PageHeader className="flex items-center pl-5 text-left h-1/6">
      <div className="flex pl-10">
        <img src={Broccoli} alt="Broccoli" className="w-8 h-8"/>
        <span className="ml-3 text-4xl text-center text-white text-shadow-lg">{title}</span>
      </div>
    </PageHeader>
  )
}

export default Header
