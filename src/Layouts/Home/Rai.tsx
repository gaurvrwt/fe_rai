import React from 'react'
import { useAuthContext } from '../../utils/userContext'

type Props = {}

const Rai = (props: Props) => {
 const {token} = useAuthContext();
console.log("in rai:",token);

  return (
    <div className='text-3xl text-green-500 bg-red-600'>Rai</div>
  )
}

export default Rai