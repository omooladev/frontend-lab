const serverURL = 'http://localhost:3000';

/**
 * A login function that hits the login API 1000 times to test how brute force works
 * This functions shows that without rate limit configured on the server, 1000 request is sent in total
 * To Test this function better, turn off the ENABLE_RATE_LIMIT VARIABLE OFF
 */
const login = async () => {
  for (let index = 0; index < 1000; index++) {
    const response = await fetch(`${serverURL}/api/rate-limiter/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'brute-force-101', password: 'brute-force-101' }),
    });
    const data = await response.json();
    console.log(index + 1, response.status, data);
  }
};

login();
