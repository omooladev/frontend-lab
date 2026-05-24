'use client';

import { useState } from 'react';

const inputClass = 'p-2 rounded-sm text-base';

export default function LoginForm() {
  const [formData, setFormData] = useState<{ username: string; password: string }>({ username: 'olawole2001', password: 'olawole2001' });
  const loginHandler = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/rate-limiter/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log({ result });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <form onSubmit={loginHandler} className="flex flex-col max-w-100 w-full m-auto gap-4">
      <div className="flex flex-col">
        <label htmlFor="username" className="font-bold">
          Username
        </label>
        <input
          value={formData.username}
          id="username"
          type="text"
          className={`${inputClass}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prevState) => ({
              ...prevState,
              username: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          value={formData.password}
          id="password"
          type="password"
          className={`${inputClass}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <button type="submit" className="m-auto w-full bg-blue-950 text-white hover:bg-blue-950/60 active:scale-90 py-2 px-4 text-base cursor-pointer">
          Login
        </button>
      </div>
    </form>
  );
}
