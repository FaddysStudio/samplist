#!/usr/bin/env node

import Scenarist from '@faddys/scenarist';
import composer from './composer.js';
import { parse } from 'node:path';

try {

await Scenarist ( new class Samplist {

$_director = composer

path = parse ( new URL ( import .meta .url ) .pathname ) .dir;

async $_producer ( $ ) {

await $ ( ... process .argv .slice ( 2 ) );

}

} );

} catch ( reasons ) {

console .error ( '@faddys/samplist: #error' );

if ( reasons ?.forEach )
reasons .forEach ( reason => console .error ( reason ) );

else
console .error ( reasons );

}
