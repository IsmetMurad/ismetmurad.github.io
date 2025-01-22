import React from 'react'
import '../components/spinner.css'
import { ClipLoader } from 'react-spinners';
type Props = {
    isLoading?: boolean;
}

const Spinner = ({isLoading = true}: Props) => {
  return (
    <>
    <div id='loading-spinner'>
        <ClipLoader
            color='#00d8ff'
            loading = {isLoading}
            size={50}
            aria-label='Loading Spinner'
            data-testid='loader' />


      
    </div>
    
    </>
  )
}

export default Spinner