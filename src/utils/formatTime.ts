export const formatTime = (utcTime: string | undefined) => {
  if (!utcTime) return;
  return new Date(utcTime).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
