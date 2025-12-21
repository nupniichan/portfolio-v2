export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/portfolio' : '';
};

export const withBasePath = (path: string) => {
  const base = getBasePath();
  if (path.startsWith(base)) return path;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
};

