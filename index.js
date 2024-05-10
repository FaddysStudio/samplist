#!/usr/bin/env node

import Scenarist from '@faddys/scenarist';
import composer from './composer.js';
import command from '@faddys/command';
import { parse } from 'node:path';

try {

await Scenarist ( new class Samplist {

$_director = composer

async $_producer ( $ ) {

await $ ( ... process .argv .slice ( 2 ) );

}

} );

} catch ( reasons ) {

if ( reasons ?.forEach )
reasons .forEach ( reason => console .error ( reason ) );

else
console .error ( reasons );

const { dir } = parse ( new URL ( import .meta .url ) .pathname );
const json = await command ( `cat ${ dir }/package.json` );
const metadata = JSON .parse ( ( await json ( Symbol .for ( 'output' ) ) ) .join ( '\n' ) );

console .error ( `
${ metadata .name } v${ metadata .version }` );

}
