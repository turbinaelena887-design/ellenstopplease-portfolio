import { services } from '@/data/services';
import { Reveal } from './reveal';

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <Reveal>
        <div className="eyebrow">FROM THE FIRST SPARK TO THE FINAL FRAME</div>
        <h2 id="services-title">WHAT I DO <span className="muted">/ SERVICES</span></h2>
      </Reveal>
      <ol className="service-list">
        {services.map((service, index) => (
          <li key={service.title}>
            <Reveal className="service-row">
              <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal className="services-cta">
        <h3>FROM CONCEPT TO<br /><span className="muted">VISUAL EXPERIENCE.</span></h3>
        <div>
          <p>From the first idea to the final frame, I transform creative visions into compelling visual stories that capture attention and bring brands to life.</p>
          <a className="services-button" href="#contact">LET&apos;S CREATE SOMETHING</a>
        </div>
      </Reveal>
    </section>
  );
}
