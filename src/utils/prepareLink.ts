import { APP_NAME_SUFFIX } from 'constans';

const prepareLink = ( link: string, prefix = APP_NAME_SUFFIX ): string => `${ prefix }${ link }`;

export default prepareLink;
