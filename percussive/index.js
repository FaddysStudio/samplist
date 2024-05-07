import Scenarist from '@faddys/scenarist';
import command from '@faddys/command';
import { parse } from 'node:path';

const { dir } = parse ( new URL ( import .meta .url ) .pathname );

try {

await Scenarist ( new class Tambourine {

duration = 1/32
$duration ( $, value ) { this .duration = parseFloat ( value ) }

objects = 32
$objects ( $, value ) { this .objects = parseInt ( value ) }

damp = 0
$damp ( $, value ) { this .damp = parseFloat ( value ) }

energy = 0
$energy ( $, value ) { this .energy = parseFloat ( value ) }

main = 2300
$main ( $, value ) { this .main = parseFloat ( value ) }

first = 5600
$1st ( $, value ) { this .first = parseFloat ( value ) }

second = 8100
$2nd ( $, value ) { this .second = parseFloat ( value ) }

async $_producer ( $ ) {

const tambourine = this;
const argv = process .argv .slice ( 2 );

if ( argv .length !== 1 )
throw [ "Faddy's Tambourine accepts only one argument containing the path to a design file." ];

const design = await command ( `cat ${ argv .pop () }` );
const error = await design ( Symbol .for ( 'error' ) );

if ( error .length )
throw error;

const score = await command ( `cat - > ${ dir }/tambourine.sco` );
const output = ( await design ( Symbol .for ( 'output' ) ) );

for ( const line of output )
await score ( await $ ( ... line .trim () .split ( /\s+/ ) ) );

await score ( Symbol .for ( 'end' ) );

const synthesizer = await command ( 'csound -odac tambourine.orc tambourine.sco' );

/*
( await synthesizer ( Symbol .for ( 'error' ) ) )
.forEach ( line => console .error ( line ) );
*/

}

async $_director ( $, ... adjustments ) {

const tambourine = this;

if ( ! adjustments .length )
return `i "tambourine" 0 ${ Object .values ( tambourine ) .join ( ' ' ) }`;

await $ ( ... adjustments .shift () .split ( '/' ) );

return await $ ( ... adjustments );

}

} );

} catch ( reasons ) {

console .error ( '@faddys/tambourine: Failed to produce a tambourine sound.' );

if ( reasons ?.forEach )
reasons .forEach ( reason => console .error ( reason ) );

else
console .error ( reasons );

}
