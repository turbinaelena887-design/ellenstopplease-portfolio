import { Text } from '@/components/language';
import { Reveal } from './reveal';

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <Reveal>
        <div className="eyebrow"><Text>ABOUT ME</Text></div>
        <h2 id="about-title"><Text>Creativity </Text><span className="muted"><Text>with a vision.</Text></span></h2>
      </Reveal>
      <Reveal className="about-copy">
        <div className="about-column">
          <p><Text>I&apos;m </Text><strong><Text>Olena Turbina</Text></strong><Text>, an </Text><strong><Text>AI Creative Director &amp; Content Creator</Text></strong> <Text>turning bold ideas into captivating visual experiences.</Text></p>
          <p><Text>Working at the intersection of art, technology, and storytelling, I create cinematic AI films, fashion campaigns, and concept-driven visuals that blur the line between reality and imagination.</Text></p>
          <p><Text>I don&apos;t just follow trends — I create original concepts, explore unconventional perspectives, and develop distinctive visual identities. From hyperrealistic imagery to surreal worlds, every detail serves a purpose: to tell a story, evoke emotion, and make an impact.</Text></p>
        </div>
        <div className="about-column">
          <p><Text>For me, great visuals are </Text><strong><Text>more than aesthetics.</Text></strong> <Text>They&apos;re about creating meaningful connections between brands and their audiences.</Text></p>
          <p><Text>Currently expanding my expertise through </Text><strong><Text>AI Creatorka</Text></strong><Text>, I continuously explore new technologies and creative possibilities.</Text></p>
        </div>
      </Reveal>
      <Reveal className="about-mission">
        <p><span className="eyebrow"><Text>My mission?</Text></span> <Text>To create visuals that make people </Text><em><Text>stop, feel, and remember.</Text></em></p>
      </Reveal>
    </section>
  );
}
