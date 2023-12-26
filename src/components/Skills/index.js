import './index.css'


const skillsIcons = [
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png",
    id: 1,
  },
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png",
    id: 2,
  },
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png",
    id: 3,
  },
  {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTckS-0NPzDxWfqMgLfD_cyCZQmudUOkESiGU4DQ-Ng&s',
      id:4
  },
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png",
    id: 5,
  },
  {
      img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png',
      id:6,
  },
  {
      img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png',
      id:7,
  },
  {
      img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png',
      id:8,
  }
];


const Skills = () => (

    <div id="skills" className='skills-container'>
  
    
    <div className="skills">
              <h1>Tech Skills</h1>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id} >
                      <img src={icon.img} alt="skill-icon"  />
                    </li>
                  ))}
                </ul>
              </div>
            
       </div>
    </div>
    )


export default Skills