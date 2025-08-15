import { useState } from "react"

function LikeButton({initialCount=0}) {
    const [likesCount,setCount]=useState(initialCount)

  return (
    <button onClick={()=>setCount(likesCount+1)}>{likesCount} Likes</button>
  )
}
export default LikeButton
