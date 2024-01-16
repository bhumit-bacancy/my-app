import React, { useImperativeHandle } from 'react'

export default React.forwardRef(function CustomInput({style, ...props}, ref) {
  useImperativeHandle(ref, () => {
    return { alertHi: () => alert(props.value) }
  }, [props.value])

  return (
    <input {...props} style={{
      border: 'none',
      backgroundColor: 'lightpink',
      paddeng: '.25rem',
      ...style,
    }}/>
  )
})
