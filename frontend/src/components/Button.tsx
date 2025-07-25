import React from 'react'


export default function Button(props: {
  text: string
}){

  const { text } = props

  return(
    <button>
      {text}
    </button>
  )

}