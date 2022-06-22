import React from 'react';
import { useSpring } from 'react-spring';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

// boop config defaults
function useBoop({
  x = 3,
  y = 1,
  rotation = 40,
  scale = 1,
  timing = 150,
  origin = 'center',
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})
         transformOrigin(${origin})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  let appliedStyle = prefersReducedMotion ? {} : style;
  return [appliedStyle, trigger];
}
export default useBoop;
