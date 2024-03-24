<CsoundSynthesizer>

<CsOptions>

-odac

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giStrikeFT ftgen 0, 0, 256, 1, "marmstk1.wav", 0, 0, 0
giVibratoFT ftgen 0, 0, 128, 10, 1

instr dom

aNote = 0

aMainSubAmplitude linseg 0, 1/128, 1, 1/128, .25, 1/2, 0
aMainSubFrequency linseg cpspch ( 10.05 ), 1/128, cpspch ( 5.05 )

aMainSub poscil aMainSubAmplitude, aMainSubFrequency

aNote += aMainSub

aHighSubAmplitude linseg 0, 1/128, 1, 1/128, .25, 1/16, 0
aHighSubFrequency linseg cpspch ( 11.05 ), 1/256, cpspch ( 7.05 )

aHighSub poscil aHighSubAmplitude, aHighSubFrequency

aNote += aHighSub / 2

aTambourine tambourine 1, 1/128, 16, 1/2, 1

aTambourine = aTambourine * .25

aNote += aTambourine

aGogobell gogobel 1, cpspch ( 6.05 ), .5, .5, giStrikeFT, 6.0, 0.3, giVibratoFT

aNote += aGogobell / 4

aNote clip aNote, 1, 1

outs aNote, aNote

endin

</CsInstruments>

<CsScore>

i "dom" 0 1

</CsScore>
