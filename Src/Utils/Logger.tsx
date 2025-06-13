type LogType = 'i' | 's' | 'w' | 'e' | 'd' | 'u';

const colorCodes: Record<LogType, number> = {
  i: 36, // info (cyan)
  s: 32, // success (green)
  w: 33, // warning (yellow)
  e: 31, // error (red)
  u: 31, // error (red)
  d: 35, // debug (magenta)
};

const labels: Record<LogType, string> = {
  i: 'INFO',
  s: 'SUCCESS',
  w: 'WARN',
  u: 'API_URL',
  e: 'ERROR',
  d: 'DEBUG',
};

export const Logger = (type: LogType = 'i', message: string = ''): void => {
  if (!__DEV__) return;

  const color = colorCodes[type] || 36;
  const label = labels[type] || 'INFO';

  console.log(`\x1b[${color}m[${label}] ${message}\x1b[0m`);

};


