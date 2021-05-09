import { APP_SUFFIX } from 'constans';

const prepareLink = ( link: string, prefix = APP_SUFFIX ): string => `${ prefix }${ link }`;

export default prepareLink;
