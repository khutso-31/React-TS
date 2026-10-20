import aboutPortrait from '../assets/about-reference.jpg'
import { Icon } from '../components/Icon'

const principles = [
  { number: '01', title: 'Start with people', description: 'Good design begins with listening. We look for the real need behind every brief.' },
  { number: '02', title: 'Keep it clear', description: 'We turn complex ideas into simple, considered experiences that feel easy to use.' },
  { number: '03', title: 'Make it matter', description: 'Every detail has a purpose, and every decision should make the work stronger.' },
]

const capabilities = ['Brand identity', 'Visual design', 'Web design', 'UI / UX', 'Art direction', 'Front-end development']

export function AboutPage() {
  return (
    <section className="inner-page about-page">
      <div className="about-page-intro">
        <div className="page-heading">
          <p className="eyebrow">A little about us</p>
          <h1>We make things <span>mean something.</span></h1>
          <p className="page-intro">
            HYKROX is an independent creative studio for brands with somewhere to go. We bring
            strategy, design, and digital craft together to make work that feels clear, human,
            and unmistakably yours.
          </p>
        </div>
        <div className="about-page-image">
          <img alt="A creative listening to music while finding inspiration" src={aboutPortrait} />
          <span className="image-caption">Curiosity is part of the process.</span>
        </div>
      </div>
      <div className="about-story">
        <div>
          <p className="eyebrow">Our approach</p>
          <h2>Creative thinking.<br /><span>Considered craft.</span></h2>
        </div>
        <p>
          We work across identity and digital design, moving comfortably from the big picture
          to the small details. Each project starts with a conversation and grows through
          collaboration, exploration, and a shared commitment to doing the idea justice.
        </p>
      </div>
      <div className="principles-grid">
        {principles.map((principle) => (
          <article className="principle-card" key={principle.number}>
            <span>{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
      <div className="capabilities-panel">
        <div>
          <p className="eyebrow">Things we do well</p>
          <h2>A versatile set of <span>skills.</span></h2>
        </div>
        <ul>
          {capabilities.map((capability) => (
            <li key={capability}><Icon name="spark" />{capability}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
