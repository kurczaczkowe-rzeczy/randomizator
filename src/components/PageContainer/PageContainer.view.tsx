import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers/rootReducer';

import LoadingScreen from 'components/loadingScreen';

import { IPageContainer } from './PageContainer.types';

/**
 * Component wraps page component and add loader logic. Loader only shows when something is in progres.
 */
export const PageContainer = ({ children }: IPageContainer ): JSX.Element => {
  const hasWidgetLoading = useSelector(( state: RootState ) => state.global.bindToCard.length > 0 );
  const isLoading = useSelector(( state: RootState ) => state.global.isLoading );

  const isLoaderVisible = isLoading && !hasWidgetLoading;

  return (
    <>
      { isLoaderVisible && <LoadingScreen /> }
      {children}
    </>
  );
};

export default PageContainer;
