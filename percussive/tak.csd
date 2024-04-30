<CsoundSynthesizer>

<CsOptions>

-o tak.wav
--format=24bit

</CsOptions>

<CsInstruments>

sr = 48000
ksmps = 32
nchnls = 2
0dbfs = 1

giStrikeFT ftgen 0, 0, 256, 1, "marmstk1.wav", 0, 0, 0
giVibratoFT ftgen 0, 0, 128, 10, 1

instr tak

aNote = 0

aHighSubAmplitude linseg 0, 1/128, 1, 1/128, .25, 1/16, 0
aHighSubFrequency linseg cpspch ( 12.05 ), 1/256, cpspch ( 8.05 )

aHighSub poscil aHighSubAmplitude, aHighSubFrequency

aNote += aHighSub

/*

aTambourine tambourine 1, 1/128, 32, 1/4, 1

aTambourine = aTambourine

aNote += aTambourine

*/

aGogobell gogobel 1, cpspch ( 8.05 ), .5, .5, giStrikeFT, 6.0, 0.3, giVibratoFT

aNote += aGogobell

aNote clip aNote, 0, 1

aNote clip aNote, 1, 1

outs aNote, aNote

endin

</CsInstruments>

<CsScore>

i "tak" 0 1

</CsScore>
