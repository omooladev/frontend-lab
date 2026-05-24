import { BruteForce } from '@/components/rate-limiter/BruteForce';
import Controls from '@/components/rate-limiter/Controls';
import LoginForm from '@/components/rate-limiter/LoginForm';

export default function Home() {
  return (
    <section className="px-6 py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pb-6">Rate Limiter Test</h1>
      <section className="flex md:flex-row md:justify-center flex-col items-stretch gap-8">
        <section className="order-2 md:order-1">
          <LoginForm />
          <BruteForce />
        </section>
        <section className="order-1 md:order-2">
          <Controls />
        </section>
      </section>
    </section>
  );
}
