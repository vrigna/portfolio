import React, { useEffect } from 'react'

export const CompanyFilter = ({ setActiveCompany, activeCompany, setFilterValue }) => {

  useEffect(() => {
    setFilterValue(companiesData[0].values)
  
    return () => {
      
    }
  }, [])
  

  const companiesData = [
    {
      id: 1,
      company: 'Kranio',
      values: [
        {
          role: 'Back end engineer',
          date: 'Oct 2021 - Present',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis quisquam, delectus repellat unde voluptas architecto, dolore, aliquam harum blanditiis iste accusantium vero optio possimus? Odit cupiditate voluptatibus perferendis obcaecati.Natus cupiditate vero eum velit ratione culpa aut officiis suscipit modi exercitationem, reiciendis tenetur aspernatur voluptatibus ut consequuntur consectetur dolorum nobis, repudiandae dolores necessitatibus explicabo! Quas nobis porro enim at!Libero quisquam eveniet eum perspiciatis earum dolore. Tempora facilis minima distinctio enim neque eos beatae et veniam eius qui voluptates sint assumenda rerum natus itaque dignissimos laborum repellendus, voluptas aliquam.'
        },
        {
          role: 'Data Engineer',
          date: 'May 2018 - Sep 2018',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis quisquam, delectus repellat unde voluptas architecto, dolore, aliquam harum blanditiis iste accusantium vero optio possimus? Odit cupiditate voluptatibus perferendis obcaecati.Natus cupiditate vero eum velit ratione culpa aut officiis suscipit modi exercitationem, reiciendis tenetur aspernatur voluptatibus ut consequuntur consectetur dolorum nobis, repudiandae dolores necessitatibus explicabo! Quas nobis porro enim at!Libero quisquam eveniet eum perspiciatis earum dolore. Tempora facilis minima distinctio enim neque eos beatae et veniam eius qui voluptates sint assumenda rerum natus itaque dignissimos laborum repellendus, voluptas aliquam.'
        },
      ]
    },
    {
      id: 2,
      company: 'Safety Club',
      values: [
        {
          role: 'Back end developer',
          date: 'Enero 2021 - Sep 2021',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis quisquam, delectus repellat unde voluptas architecto, dolore, aliquam harum blanditiis iste accusantium vero optio possimus? Odit cupiditate voluptatibus perferendis obcaecati.Natus cupiditate vero eum velit ratione culpa aut officiis suscipit modi exercitationem, reiciendis tenetur aspernatur voluptatibus ut consequuntur consectetur dolorum nobis, repudiandae dolores necessitatibus explicabo! Quas nobis porro enim at!Libero quisquam eveniet eum perspiciatis earum dolore. Tempora facilis minima distinctio enim neque eos beatae et veniam eius qui voluptates sint assumenda rerum natus itaque dignissimos laborum repellendus, voluptas aliquam.'
        },
        {
          role: 'JavaScript programmer',
          date: 'Jul 2020 - Ene 2021',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis quisquam, delectus repellat unde voluptas architecto, dolore, aliquam harum blanditiis iste accusantium vero optio possimus? Odit cupiditate voluptatibus perferendis obcaecati.Natus cupiditate vero eum velit ratione culpa aut officiis suscipit modi exercitationem, reiciendis tenetur aspernatur voluptatibus ut consequuntur consectetur dolorum nobis, repudiandae dolores necessitatibus explicabo! Quas nobis porro enim at!Libero quisquam eveniet eum perspiciatis earum dolore. Tempora facilis minima distinctio enim neque eos beatae et veniam eius qui voluptates sint assumenda rerum natus itaque dignissimos laborum repellendus, voluptas aliquam.'
        },
      ]
    },
    {
      id: 3,
      company: 'TPS',
      values: [
        {
          role: 'University Practice',
          date: 'Oct 2018 - Ene 2019',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis quisquam, delectus repellat unde voluptas architecto, dolore, aliquam harum blanditiis iste accusantium vero optio possimus? Odit cupiditate voluptatibus perferendis obcaecati.Natus cupiditate vero eum velit ratione culpa aut officiis suscipit modi exercitationem, reiciendis tenetur aspernatur voluptatibus ut consequuntur consectetur dolorum nobis, repudiandae dolores necessitatibus explicabo! Quas nobis porro enim at!Libero quisquam eveniet eum perspiciatis earum dolore. Tempora facilis minima distinctio enim neque eos beatae et veniam eius qui voluptates sint assumenda rerum natus itaque dignissimos laborum repellendus, voluptas aliquam.'
        }
      ]
    },
  ]

  return (
    <>
        {
          companiesData.map( c => (
            <button 
              onClick={ () => {
                setActiveCompany(c.id)
                setFilterValue(c.values)
              }}
              className={`p-4 font-semibold text-left w-full ${ activeCompany === c.id ? 'bg-accent' : 'hover:bg-shadow'}`} 
              key={ c.id }>
              { c.company } 
            </button>
          ))
        }
    </>
  )
}
