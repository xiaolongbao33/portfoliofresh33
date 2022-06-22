import { ArrowBackIcon } from '@chakra-ui/icons';
import useBoop from '../hooks/useBoop';
import { animated } from 'react-spring';

export default function ChevronIcon() {
  const [style, trigger] = useBoop({
    x: -5,
    y: 0,
    rotation: 0,
    scale: 1,
    timing: 150,
    origin: 'center',
    springConfig: {
      tension: 300,
      friction: 10,
    },
  });

  return (
    <>
      <animated.div style={style} onMouseEnter={trigger}>
        <ArrowBackIcon />
      </animated.div>
    </>
  );
}
