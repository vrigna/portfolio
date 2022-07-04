import React, { useState } from 'react'
import { CompanyFilter } from './CompanyFilter'

export const IndexExperience = () => {

  const [activeCompany, setActiveCompany] = useState(1)
  const [filterValue, setFilterValue] = useState([])

  return (
    <>
      <section className='m-auto h-screen flex w-3/5 flex-col'>
        <h2 className='text-5xl font-semibold text-center pb-5'>Where I've worked</h2>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-3">
            <CompanyFilter setActiveCompany={ setActiveCompany } activeCompany={ activeCompany } setFilterValue={ setFilterValue }/>
          </div>
          <div className="col-span-7">
            {
              filterValue.map( f => (
                <div className="mb-5">
                  <h3 className='font-semibold text-xl'>{f.role}</h3>
                  <span>{f.date}</span>
                  <p>{f.text}</p>
                </div>
              ) )
            }
          </div>
        </div>
      </section>
    </>
  )
}
