import command from '@faddys/command';

const output = await command ( 'ls' ) .then ( $ => $ ( Symbol .for ( 'output' ) ) );

console .log ( output );
