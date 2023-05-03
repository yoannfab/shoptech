import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To ShopTech',
  description: 'The greatest electronics devices for the best prices',
  keywords: 'electronics, buy electronics, apple, iphone, ipad',
}

export default Meta
