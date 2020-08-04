import React from 'react'
import './styles.css'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
  return(
    <article className='teacher-item'>
          <header>
            <img src='https://avatars2.githubusercontent.com/u/60554414?s=460&u=68f6818e9aac0af03d42464305f6f7e45631c227&v=4' alt='Marcello M. Almieda' />
            <div>
              <strong>Marcello M. Almieda</strong>
              <span>Python</span>
            </div>
          </header>
          <p>
            Acho que Sei Algumas Coisas
            <br /><br/>
            Aprendir Algumas coisa na net e acredito que você conseguirá aprender também, 
            caso não use o CTRL +C e CTRL +V que é Sucesso!
          </p>
          <footer>
            <p>
              Preço/Hora
              <strong>R$ 60,00</strong>
            </p>
            <button>
              <img src={WhatsappIcon} alt='Zap'/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}
export default TeacherItem