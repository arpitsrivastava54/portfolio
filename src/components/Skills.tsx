import React from 'react'


const skillsData = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        color: "orange"
      },
      {
        name: "CSS",
        color: "cyan"
      },
      {
        name: "JavaScript",
        color: "yellow"
      },
      {
        name: "Typescript",
        color: "lightblue"
      },
      {
        name: "React.js",
        color: "cyan"
      },
      {
        name: "Tailwind",
        color: "violet"
      },
      {
        name: "Ant Design",
        color: "lightgreen"
      },
      {
        name: "Sass",
        color: "pink"
      },
      {
        name: "Redux",
        color: "lightgreen"
      },
    ]
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        color: "lightgreen"
      },
      {
        name: "Express.js",
        color: "yellow"
      },
      {
        name: "PHP",
        color: "cyan"
      },
      {
        name: "MongoDB",
        color: "lightgreen"
      },
      {
        name: "SQL",
        color: "orange"
      },
    ]
  },

  {
    title: "Other Languages",
    skills: [
      {
        name: "C",
        color: "lightblue"
      },
      {
        name: "C++",
        color: "violet"
      },
      {
        name: "Java",
        color: "orange"
      },
      {
        name: "Python",
        color: "yellowgreen"
      },

    ]
  },
  {
    title: "Others",
    skills: [
      {
        name: "Rest API",
        color: "lightgreen"
      },
      {
        name: "Netlify",
        color: "lightblue"
      },
      {
        name: "Render",
        color: "orange"
      },
      {
        name: "Vite",
        color: "cyan"
      },
      {
        name: "Wordpress",
        color: "yellow"
      },
      {
        name: "Postman",
        color: "violet"
      },

    ]
  },

]
const Skills = () => {
  return (
    <div className='my-10'>
      <h2 className='text-2xl my-10 text-zinc-200'>What I Know</h2>
      <div className='flex w-full justify-evenly '>
        {skillsData.map((item) => (
          <div key={item.title} className={`bg-secondry min-h-[200px]  cursor-pointer p-5 rounded-2xl hover:shadow-zinc-500 hover:shadow-lg duration-300 hover:scale-105 ${item.title == "Frontend" ? "w-[30%]" : "w-[22%]"}`}>
            <h2 className='text-xl mb-4 text-primary text-center'>{item.title}</h2>
            <div className='flex flex-wrap gap-3 justify-evenly'>
              {
                item.skills.map((item) => (
                  <button key={item.name} style={{ borderColor: item.color, color: item.color }} className={`border text-sm border-blue-500 text-blue-500 p-2 w-max rounded`}>
                    {item.name}
                  </button>
                )
                )}
            </div>
          </div>
        ))}
      </div >
    </div>
  )
}

export default Skills
