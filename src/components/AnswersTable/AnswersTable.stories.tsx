import {
  useCallback,
  useRef,
  useState,
} from 'react';
import { IndexRange } from 'react-virtualized';
import { Story, Meta } from '@storybook/react';
import _slice from 'lodash/slice';

import { IAnswersTable } from './AnswersTable.types';
import Component from './AnswersTable.view';
import mockData, { allRows } from './AnswersTable.mock';

export default{
  title: 'components/AnswersTable',
  component: Component,
  args: mockData,
  decorators: [
    ( Story, { args: { rows: _rows, onLoadMoreRows: _onLoadMoreRows }}) => {
      const [ rows, setRows ] = useState< IAnswersTable[ 'rows' ]>( _rows );
      const lastStopIndexRef = useRef( 0 );

      const onLoadMoreRows = useCallback(( params: IndexRange ) => {
        _onLoadMoreRows( params );

        return new Promise(( resolve ) => {
          setTimeout(() => {
            const newRows = _slice(
              allRows,
              lastStopIndexRef.current || params.startIndex,
              params.stopIndex,
            );

            lastStopIndexRef.current = lastStopIndexRef.current < params.stopIndex
              ? params.stopIndex
              : lastStopIndexRef.current;

            setRows( newRows );

            resolve( undefined );
          }, 500 );
        });
      }, [ _onLoadMoreRows ]);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <Story rows={ rows } onLoadMoreRows={ onLoadMoreRows } />;
    },
  ],
} as Meta;

const Template: Story< IAnswersTable > = ( args, context ) => <Component { ...args } { ...context } />;

export const AnswersTable = Template.bind({});
AnswersTable.storyName = 'AnswersTable';
