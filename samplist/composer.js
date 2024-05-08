import command from '@faddys/command';
import { parse } from 'node:path';

const $$ = Symbol .for;

export default class Composer {

path = parse ( new URL ( import .meta .url ) .pathname ) .dir

name = 'faddys.sco' // `faddys_${ Date .now () }.notation`
$name ( $, value ) { this .name = value }

kit = {}
section = []

async $_producer ( $ ) {

if ( process .argv .length !== 3 )
throw [ `Illegal number of arguments: ${ process .argv .length - 2 }` ];

const composer = this;
const notation = await command ( `cat ${ process .argv .pop () }` );
const error = await notation ( $$ ( 'error' ) );

if ( error .length )
throw error;

const score = composer .score = await command ( `cat - > ${ composer .name }` );
const output = await notation ( $$ ( 'output' ) );

for ( const line of output )
try {

composer .index = ++composer .index || 1;

await $ ( ... line .trim () .split ( /\s+/ ) );

} catch ( error ) {

command ( `rm ${ composer .name }` );
score ( $$ ( 'end' ) );

throw [

`#error #line ${ composer .index }:
${ line }`,
... ( error instanceof Array ? error : [ error ] )

];

}

await score ( $$ ( 'end' ) );

// await command ( `csound -odac ${ composer .path }/faddys.orc ${ composer .name }` );

}

tempo = 120
$tempo ( $, value ) { this .tempo = parseFloat ( value ) }

length = 4
$length ( $, value ) { this .length = parseInt ( value ) }

measure = 8
$measure ( $, value ) { this .measure = parseInt ( value ) }

track = 0

async $_director ( $, ... details ) {

if ( ! details .length )
return;

const composer = this;
const step = parseFloat ( details .shift () );

if ( isNaN ( step ) || step < 0 || step >= composer .measure )
throw [ 'Invalid step number:', step ];

if ( ! details .length )
throw [ 'The sample to be played at this step is missing.', `#step ${ step }` ];

const sample = composer .kit [ details .shift () ];

if ( ! sample )
throw [ 'Sample not found.', `#sample ${ sample }` ];

const track = ++composer .track % 10 === 0 ? ++composer .track : composer .track;

section .push ( `i 1.${ track } [ ${ step }/${ composer .measure } ] 1 "${ sample }"` );

}

$_time () {

const composer = this;

return `t 0 ${ composer .tempo }
v ${ composer .measure }`;

}

$ () {}

};
