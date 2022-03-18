import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'store/reducers/rootReducer';

/** Pre-typed useSelector hook with store root state. */
const useTypedSelector: TypedUseSelectorHook< RootState > = useSelector;

export default useTypedSelector;
