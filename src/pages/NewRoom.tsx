import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Link } from 'react-router-dom'

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
  return(
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="ILustração Perguntas e Respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk"/>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
              </Button>
          </form>
          <p>Quer entrar em uma sala já existente? <Link to="/">Clique Aqui</Link></p>
        </div>
      </main>
    </div>
  )
}