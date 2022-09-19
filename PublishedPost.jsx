import React from 'react'

const PublishedPost = ({value,search}) => {
  return (
    <>
      {
        value.map((data,index) => {
          return (
            <React.Fragment key={index}>  
              <div>
                <h2>Title:{data.title}</h2>
             </div>
             <div>
               <p>Details:{data.details}</p>
             </div>
            </React.Fragment>
          )
        })
      }
    
    </>
  )
}

export default PublishedPost