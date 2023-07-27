export const extractInitialsFromName = (fullName) => {
  if (typeof fullName !== 'string' || !fullName.trim()) return '';

  const names = fullName.trim().split(' ');

  return names.length === 1
    ? names.join('').substring(0, 2)
    : names.slice(0, 2).map(name => name.substring(0, 1).toUpperCase()).join('');
};
