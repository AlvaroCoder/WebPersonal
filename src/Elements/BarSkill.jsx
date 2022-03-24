import React from 'react'

function BarSkill({values}) {
  const {nombre, img, prctje} = values;
  const styleElem = {
    width : `${prctje}%`
  }
  const idSkills = `skill-${nombre}`
  return  <div key={nombre} id={nombre} className='ctn-bar-skills'>
            <div className='ctn-img-skills'>
              <img id={idSkills} className='img-bar-skill' alt={nombre} src={img}></img>
              <p className='text-bar-skil'>{nombre}</p>
            </div>
            <div className='bar-skill'>
              <div className='bar-prctje' style={styleElem}>
                <p className='text-skill'>{prctje}%</p>
              </div>
            </div>
          </div>
}

export default BarSkill;