import React from 'react'

export function Icon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={props.alt} {...props} />
}
