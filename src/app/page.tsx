import Link from 'next/link';
export default function Home() {
  return (
    <section className="min-h-screen flex flex-col h-full  items-center justify-center">
      <h1 className='py-8 text-2xl uppercase'>List of projects</h1>
      <div className='flex items-center justify-center gap-8'>
        <Link href="/projects/countdown-clock" className="text-blue-600">
          Countdown clock
        </Link>
        <Link href="/projects/rate-limiter" className="text-blue-600">
          Rate Limiter
        </Link>
      </div>
    </section>
  );
}
