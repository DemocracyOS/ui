import React from 'react'
import { Router } from 'react-router'
import { Link } from 'react-router-dom'
import createMemoryHistory from 'history/createMemoryHistory'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
// import { withNotes } from '@storybook/addon-notes'
import '../src/index.css'
import {
  NavBarTitle,
  UserBar,
  LinkBar,
  HeroTitle,
  HeroSubtitle,
  Button,
  HeroImg,
  HeroLeftColumn,
  Hero,
  TitleH2,
  SubtitleH3,
  Section,
  Navbar,
  Footer,
  FooterBar,
  SocialIcon,
  SocialBar,
  P,
  FooterTextWrapper,
  Grid,
  FooterLogo,
  About,
  AboutImg,
  AboutText,
  AboutH2,
  AboutP,
  AboutLink,
  ParticipateItem,
  ParticipateTextbox,
  ParticipateP,
  Participate,
  ParticipateTitle,
  ParticipateContainer,
  Separator,
  ArrowRight
} from '../src/index.js'

addDecorator((story, context) => withInfo('common info')(story)(context))
addDecorator((story) => <Router history={history}>{story()}</Router>)

const history = createMemoryHistory()

history.push = action('history.push')
history.replace = action('history.replace')
history.go = action('history.go')
history.goBack = action('history.goBack')
history.goForward = action('history.goForward')

const styles = {
  display: 'flex',
  'flex-wrap': 'wrap',
  'justify-content': 'center'
}
const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
)

storiesOf('layouts/section', module)
  .add('Section', () => (
    <div>
      <Section>
        <TitleH2>Odd section</TitleH2>
        <SubtitleH3>I'm an odd section</SubtitleH3>
      </Section>
      <Section>
        <TitleH2>Even section</TitleH2>
        <SubtitleH3>I'm an even section</SubtitleH3>
      </Section>
    </div>
  ))

storiesOf('layouts/navbar', module)
  .add('Navbar', () => (
    <Navbar>
      <NavBarTitle>
        <Link to='/'><a>co<span>legis</span></a></Link>
      </NavBarTitle>
      <LinkBar>
        <Link to='/'><a>Proyectos</a></Link>
        <Link to='/'><a>Cómo participar</a></Link>
        <Link to='/'><a>La Propuesta</a></Link>
      </LinkBar>
      <UserBar>
        <Button>Iniciar sesión</Button>
        <Button primary>Registrarse</Button>
      </UserBar>
    </Navbar>
  ))

storiesOf('layouts/hero', module)
  .add('Hero', () => (
    <Hero>
      <HeroLeftColumn>
        <HeroTitle>La ciudadanía y sus representantes conectados para co-crear mejores leyes</HeroTitle>
        <HeroSubtitle>¡Participá haciendo comentarios y sugerencias en los propuestas de ley! Los/as diputados/as tendrán en cuenta tus aportes</HeroSubtitle>
      </HeroLeftColumn>
      <HeroImg />
    </Hero>
  ))

const project = {
  img: 'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg',
  title: 'Acceso a la educacion pública',
  tagTitle: 'libertad de expresión',
  author: {
    avatarImg: 'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg',
    name: 'Alvarez Rodriguez, María C',
    party: 'Frente para la Victoria - PJ'
  },
  commentaries: 33,
  limitDate: '22/10/1990'
}

const projects = Array(6).fill(project)

storiesOf('layouts/grid', module)
  .add('Grid', () => (
    <Grid projects={projects} />
  ))

storiesOf('layouts/footer', module)
  .add('Footer', () => (
    <Footer>
      <FooterBar>
        <NavBarTitle footer>
          <Link to='/'><FooterLogo img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} /></Link>
        </NavBarTitle>
        <SocialBar>
          <SocialIcon
            img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'}
            link={'/'} />
          <SocialIcon img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'}
            link={'/'} />
        </SocialBar>
        <Link to='/'><a>Proyectos</a></Link>
        <Link to='/'><a>La Propuesta</a></Link>
        <Link to='/'><a>Preguntas Frecuentes</a></Link>
        <Link to='/'><a>Términos y condiciones</a></Link>
      </FooterBar>
      <FooterTextWrapper>
        <P>Honorable Cámara de diputados de la Nación Argentina | Congreso de la Nación Argentina | Av. Rivadavia 1864 | Ciudad Autónoma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100</P>
        <P>La información contenida en este sitio es de dominio público y puede ser utilizada libremente. Se solicita citar la fuente.</P>
      </FooterTextWrapper>
    </Footer>
  ))

storiesOf('layouts/about', module)
  .add('About', () => (
    <About>
      <AboutImg img={'https://www.ncn.com.ar/wp-content/uploads/2017/12/diputados-prevision1.jpg'} />
      <AboutText>
        <AboutH2>Acerca de la propuesta</AboutH2>
        <AboutP>Co-legis es una plataforma de creación colaborativa de normas. En esta, los diputados asumen un compromiso con la ciudadanía de ponerse a disposición para incorporar puntos de vista y comentarios que se hagan en proyectos de ley a ser presentado en la cámara.</AboutP>
        <AboutLink>  <Link to='/'><a>Conocé más</a> <ArrowRight /></Link></AboutLink>
      </AboutText>
    </About>
  ))

storiesOf('layouts/participate', module)
  .addDecorator(CenterDecorator)
  .add('Participate', () => (
    <Participate>
      <ParticipateTitle>Cómo puedo participar</ParticipateTitle>
      <ParticipateContainer>
        <ParticipateItem>
          <ParticipateTextbox number={'01'} action={'Informate'} description={'Entrá y lee.'} />
          <Separator />
          <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley.'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'02'} action={'Informate'} description={'Entrá y lee.'} />
          <Separator />
          <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley.'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'03'} action={'Informate'} description={'Entrá y lee.'} />
          <Separator />
          <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley.'} />
        </ParticipateItem>
      </ParticipateContainer>
      <Button primary>Registrate y participá</Button>
    </Participate>
  ))
