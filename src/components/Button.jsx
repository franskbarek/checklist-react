import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Button({bg, name, link}) {
  const navigate = useNavigate()

    return (
        <button onClick={() => navigate(link)} className='border' style={{
            padding: 10,
            background: bg,
            
        }}>
            {name}
        </button>
    )
}
