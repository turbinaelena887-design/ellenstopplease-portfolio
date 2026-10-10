import { Text } from '@/components/language';
import { services } from '@/data/services';
import { Reveal } from './reveal';

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <Reveal>
        <div className="eyebrow"><Text>FROM THE FIRST SPARK TO THE FINAL FRAME</Text></div>
        <h2 id="services-title"><Text>WHAT I DO </Text><span className="muted"><Text>/ SERVICES</Text></span></h2>
      </Reveal>
      <ol className="service-list">
        {services.map((service, index) => (
          <li key={service.title}>
            <Reveal className="service-row">
              <span className="service-number" aria-hidden="true"><Text>{String(index + 1).padStart(2, '0')}</Text></span>
              <h3><Text>{service.title}</Text></h3>
              <p><Text>{service.description}</Text></p>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal className="services-cta">
        <h3><Text>FROM CONCEPT TO</Text><br /><span className="muted"><Text>VISUAL EXPERIENCE.</Text></span></h3>
        <div>
          <p><Text>From the first idea to the final frame, I transform creative visions into compelling visual stories that capture attention and bring brands to life.</Text></p>
          <a className="services-button" href="#contact"><Text>LET&apos;S CREATE SOMETHING</Text></a>
        </div>
      </Reveal>
    </section>
  );
}
