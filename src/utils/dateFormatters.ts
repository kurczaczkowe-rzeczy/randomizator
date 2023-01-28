export const formatToDateTime = ( date: Date ): string => Intl.DateTimeFormat(
  'pl-PL',
  {
    dateStyle: 'short',
    timeStyle: 'medium',
  },
)
  .format( date )
  .replace( /,/, '' );
