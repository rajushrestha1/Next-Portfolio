import { useState, useEffect } from 'react';

export function useRoleSwitcher({ roles = [], interval = 2000 }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (roles.length === 0) return;

    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, interval);

    return () => clearInterval(timer);
  }, [roles, interval]);

  return roles[currentRoleIndex];
}