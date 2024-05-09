import command from '@faddys/command';
import { parse, resolve, normalize } from 'node:path';

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
const file = resolve ( process .cwd (), process .argv .pop () );
const { notation, error } = await command ( `cat ${ file }` )
.then ( async $ => ( {

notation: await $ ( $$ ('output' ) ),
error: await $ ( $$ ( 'error' ) )

} ) );

if ( error .length )
throw error;

const score = composer .score = await command ( `cat - > ${ composer .name }` );

for ( const line of notation )
try {

composer .index = ++composer .index || 1;

await $ ( ... line .trim () .split ( /\s+/ ) );

} catch ( error ) {

command ( `rm ${ composer .name }` );
score ( $$ ( 'end' ) );

throw [

`file://${ file }:${ composer .index }
${ line }
^^^
`,
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

composer .section .push ( `i 1.${ track } [ ${ step }/${ composer .measure } ] 1 "${ sample }"` );

}

async $$ ( $, name, ... paths ) {

const composer = this;

if ( ! paths .length ) {

if ( ! composer .kit [ name ] ?.length )
throw 'Empty kit';

else
return console .log ( composer .kit [ name ] .join ( '\n' ) );

}

const path = paths .shift ();
const directory = await command ( `ls ${ path }` );
const list = await directory ( $$ ( 'output' ) );
const kit = composer .kit [ name ] = composer .kit [ name ] || [];

for ( let sample of list ) {

sample = `${ path }/${ sample }`;

const info = await command ( `file --brief --mime-type ${ sample }` );
const [ type ] = await info ( $$ ( 'output' ) );

if ( type .startsWith ( 'audio' ) )
kit .push ( sample )

}

await $ ( '$', name, ... paths );

}

$_time () {

const composer = this;

return `t 0 ${ composer .tempo }
v ${ composer .measure }`;

}

$ () {}

};
