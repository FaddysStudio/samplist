import command from '@faddys/command';
import { parse } from 'node:path';

const $$ = Symbol .for;

export default class Composer {

path = parse ( new URL ( import .meta .url ) .pathname ) .dir

name = 'faddys.sco' // `faddys_${ Date .now () }.notation`
$name ( $, value ) { this .name = value }

async $_producer ( $ ) {

if ( process .argv .length !== 3 )
throw [ `Illegal number of arguments: ${ process .argv .length - 2 }` ];

const composer = this;
const notation = await command ( `cat ${ process .argv .pop () }` );
const error = await notation ( $$ ( 'error' ) );

if ( error .length )
throw error;

const output = await notation ( $$ ( 'output' ) );
const score = await command ( `cat - > ${ composer .name }` );
const sections = ( await Promise .all (

output
.map ( async section => await $ ( ... section .trim () .split ( /\s+/ ) ) )

) );

await score (

sections .filter ( section => section ?.length )
.join ( '\n\ns\n\n' ) + '\n\ne'

);

await score ( $$ ( 'end' ) );

// await command ( `csound -odac ${ composer .path }/faddys.orc ${ composer .name }` );

}

tempo = 120
$tempo ( $, value ) { this .tempo = parseFloat ( value ) }

length = 4
$length ( $, value ) { this .length = parseInt ( value ) }

measure = 8
$measure ( $, value ) { this .measure = parseInt ( value ) }

index = 0

async $_director ( $, ... notes ) {

if ( ! notes .length )
return;

const composer = this;
const [ step, sample ] = notes .pop () .split ( '/' );
const index = ++composer .index % 10 === 0 ? ++composer .index : composer .index;

return `${ await $ ( ... notes ) || await $ ( $$ ( 'time' ) ) }
i 1.${ index } [ ${ step }/${ composer .measure } ] 1 "${ composer .path }/../percussive/${ sample }.wav"`;

}

$_time () {

const composer = this;

return `t 0 ${ composer .tempo }
v ${ composer .measure }`;

}

$ () {}

};
