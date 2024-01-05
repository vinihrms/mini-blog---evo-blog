//css
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h2> Sobre o Blog <span> EV0 </span> </h2>
        <p> Esse projeto consiste em um Blog feito com React no front-end e Firebase no back-end</p>
        <Link to='/posts/create' className='btn'> Criar post </Link>
    </div>
  )
}

export default About