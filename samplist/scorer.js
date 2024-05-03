export const steps = process .argv .slice ( 2 );
export const name = steps .shift ();
export const tempo = parseInt ( steps .shift () );
export const [ length, measure ] = steps .shift () .split ( '/' ) .map ( value => parseInt ( value ) );
export const score = [

`t 0 ${ tempo }`,
`v ${ length }`,

... steps .map ( step => step .split ( '/' ) )
.map ( ( [ step, sample ] ) => `i $${ sample } [${ step }/${ measure }] 1` )

];
