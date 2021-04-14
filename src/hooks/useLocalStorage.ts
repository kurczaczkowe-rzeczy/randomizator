import { useState } from 'react';

import { SetValue } from 'hooks/types';

/** This hook enable get value from localStorage and set value into localStorage. Under the hood it use useState
 * to remember stored localStorage value.
 * @param storageItem - Name of item stored in localStorage.
 * @param initialValue - Value that be set in localstorage if the storageItem doesn't exist.
 * @return Sate value and function that update it and value in localStorage.
 * @example <caption>Example usage of useLocalStorage hook.</caption>
 * import useLocalStorage from 'hooks/localStorage;
 *
 * const AwesomeComponent = (props: Props) => {
 *   const [name, setName] = useLocalStorage('name', 'Bill');
 *
 *   return (
 *     <div>
 *       <span>{name}</span>
 *       <input
 *         type="text"
 *         placeholder="Type your name"
 *         value={name}
 *         onChange={(evt: React.ChangeEventHandler<HTMLInputElement>) => setName(evt.target.value)}
 *       />
 *     </div>
 *   );
 * } */
const useLocalStorage = <T>( storageItem: string, initialValue?: T | undefined ): readonly [T, SetValue<T>] => {
  const [ storageValue, setStorageValue ] = useState<T>(() => {
    try {
      const item = localStorage.getItem( storageItem );

      return item ? JSON.parse( item ) : initialValue;
    } catch ( e: unknown ) {
      console.error( e );

      return initialValue;
    }
  });

  const setValue: SetValue<T> = ( value ) => {
    try {
      const valueToStore = value instanceof Function ? value( storageValue ) : value;

      setStorageValue( valueToStore );
      localStorage.setItem( storageItem, JSON.stringify( valueToStore ));
    } catch ( e: unknown ) {
      console.error( e );
    }
  };

  return [ storageValue, setValue ] as const;
};

export default useLocalStorage;
