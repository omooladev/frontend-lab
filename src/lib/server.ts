export const getServerURL = () => {
  const SERVER_URL = process.env.SERVER_URL;
  if (!SERVER_URL) throw new Error('Please provide "SERVER_URL" in the environment variables');
  return SERVER_URL;
};
