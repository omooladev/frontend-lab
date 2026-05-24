export function BruteForce() {
  return (
    <div className="bg-gray-400 max-w-100 w-full m-auto my-8 text-white px-2 py-6 flex flex-col gap-4">
      <h2>Brute Force</h2>
      <ul>
        <h3 className="text-sm text-bold text-purple-800">Steps on How brute force works</h3>
        <li>Username and password to login is saved as an environment variables.</li>
        <li>You can turn on or off rate limiting.</li>
        <li>When rate-limiting is turned on, you see how the brute force works</li>
        <li>When rate-limiting is turned off, you also see how brute force fails</li>
      </ul>
      <button type="button" className="m-auto w-full bg-red-500 text-white hover:bg-red-500/60 active:scale-90 py-2 px-4 text-base cursor-pointer">
        Brute Force now
      </button>
      <p>
        <span className="text-red-900">Important Note:-***</span> This is just for understanding how rate limiting and brute force works
      </p>
    </div>
  );
}
