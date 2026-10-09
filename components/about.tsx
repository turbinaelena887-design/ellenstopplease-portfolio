import { Reveal } from './reveal';

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <Reveal>
        <div className="eyebrow">ABOUT ME</div>
        <h2 id="about-title">Creativity <span className="muted">with a vision.</span></h2>
      </Reveal>
      <Reveal className="about-copy">
        <div className="about-column">
          <p>I&apos;m <strong>Olena Turbina</strong>, an <strong>AI Creative &amp; Content Creator</strong> turning bold ideas into captivating visual experiences.</p>
          <p>Working at the intersection of art, technology, and storytelling, I create cinematic AI films, fashion campaigns, and concept-driven visuals that blur the line between reality and imagination.</p>
          <p>I don&apos;t just follow trends — I create original concepts, explore unconventional perspectives, and develop distinctive visual identities. From hyperrealistic imagery to surreal worlds, every detail serves a purpose: to tell a story, evoke emotion, and make an impact.</p>
        </div>
        <div className="about-column">
          <p>For me, great visuals are <strong>more than aesthetics.</strong> They&apos;re about creating meaningful connections between brands and their audiences.</p>
          <p>Currently expanding my expertise through <strong>AI Creatorka</strong>, I continuously explore new technologies and creative possibilities.</p>
        </div>
      </Reveal>
      <Reveal className="about-mission">
        <p><span className="eyebrow">My mission?</span> To create visuals that make people <em>stop, feel, and remember.</em></p>
      </Reveal>
    </section>
  );
}
