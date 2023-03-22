import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { NextPageWithLayout } from '../page'

export const Brands: NextPageWithLayout = () => {
  return (
    <div>brands</div>
  )
}

Brands.getLayout = (page) =>{
  return <Layout>{page}</Layout>
}

export default Brands;