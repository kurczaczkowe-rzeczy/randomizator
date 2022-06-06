import { jsonToCSV } from 'react-papaparse';

/** Method create file name from actual date and time. */
export const getNewFileName = (): string => {
  const date = new Date();
  const datePart = `${ date.getFullYear() }${ date.getMonth() + 1 }${ date.getDate() }`;
  const timePart = `${ date.getHours() }${ date.getMinutes() }${ date.getSeconds() }`;

  return `${ datePart }${ timePart }`;
};

/** Method prepare csv content from provided data and starts download a CSV file. */
export const startDownloadCSV = < T = unknown >( fileContent: T, fileName: string ): void => {
  const csvContent = `data:text/csv;charset=utf-8,${ jsonToCSV( fileContent ) }`;
  const encodedUri = encodeURI( csvContent );
  const linkEl = document.createElement( 'a' );

  linkEl.setAttribute( 'href', encodedUri );
  linkEl.setAttribute( 'download', `${ fileName }.csv` );

  linkEl.click();
};
