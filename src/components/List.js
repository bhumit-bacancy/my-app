import React, { useDeferredValue, useEffect, useMemo, useState } from "react";

export default function List({ input }) {
  const LIST_SIZE = 20000
  const differedInput = useDeferredValue(input)
  const list = useMemo(() => {
    const l =[]
    for (let i=0; i<LIST_SIZE; i++) {
      l.push(<div key={i}>{differedInput}</div>)
    }
    return l
  }, [differedInput])

  useEffect(() => {
    console.log(`Input: ${input}\n Differed: ${differedInput}`)
  }, [input, differedInput])

  return list
}

