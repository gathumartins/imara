import React from 'react'

function page({params}:any) {

  // console.log(params)
  return (
    <div>Program ID: {params.programId}</div>
  )
}

export default page