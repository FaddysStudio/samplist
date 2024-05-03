#!/usr/bin/env node

import { writeFile } from 'node:fs/promises';
import { parse } from 'node:path';
import { spawn } from 'node:child_process';

const { dir } = parse ( new URL ( import .meta .url ) .pathname );
const { default: samples } = await import ( dir + '/samples.js' );
const kit = samples .map ( ( sample, index ) => `#define ${ sample } #${ index + 1 }#` );
const bank = samples .map ( sample => `strset $${ sample }, "${ dir }/../percussive/${ sample }.wav"` );
const { play, rewind } = await import ( dir + '/player.js' );
const orchestra = [];

orchestra .push (

kit .join ( '\n' ),
bank .join ( '\n' ),
'instr ' + samples .map ( sample => `$${ sample }` ) .join ( ', ' ),
play,
'endin',
rewind

);

await writeFile ( dir + '/faddys.orc', orchestra .join ( '\n\n' ) );

const { name, score } = await import ( dir + '/scorer.js' );

await writeFile ( name, [

kit .join ( '\n' ),
... score

] .join ( '\n' ) );

const engine = await spawn ( 'csound', [

'-odac',
dir + '/faddys.orc',
name

] );
