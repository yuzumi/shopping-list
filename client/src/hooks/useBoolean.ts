import {
  SetStateAction,
  useCallback,
  useMemo,
  useState,
  Dispatch
} from 'react';

export type UseBoolean = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export default function useBoolean(initialValue: boolean = false): UseBoolean {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setValue(value => !value), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return useMemo(
    () => ({
      value,
      setValue,
      toggle,
      setTrue,
      setFalse
    }),
    [setFalse, setTrue, toggle, value]
  );
}
