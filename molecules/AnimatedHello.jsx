import FadeIn from '../atoms/FadeIn';
import Hello from '../atoms/Hello';
export default function AnimatedHello() {
  return (
    <FadeIn>
      <Hello />
    </FadeIn>
  );
}
