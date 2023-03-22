import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { NextPageWithLayout } from '../page'

export const Searches: NextPageWithLayout = () => {
  return (
    <div>Searches</div>
  )
}

Searches.getLayout = (page) =>{
  return <Layout>{page}</Layout>
}

export default Searches;