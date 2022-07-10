/**
 * Method deeply clones current state of passed value. Firstly stringify value and then parse to javascript variable.
 * @param value - value to deeply clone
 */
const deepClone = <Value>( value: Value ): Value => JSON.parse( JSON.stringify( value ));

export default deepClone;
