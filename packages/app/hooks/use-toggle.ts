import { useState } from 'react';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggleValue = (): void => setValue(!value);
  return [value, toggleValue];
};

export default useToggle;
