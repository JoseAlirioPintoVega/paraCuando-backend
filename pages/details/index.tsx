import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { NextPageWithLayout } from '../page'

export const Details: NextPageWithLayout = () => {
  return (
    <div>details</div>
  )
}

Details.getLayout = ( page) =>{
  return <Layout>{page}</Layout>
}

export default Details;