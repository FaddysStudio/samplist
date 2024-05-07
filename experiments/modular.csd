<CSoundSynthesizer>

<CsOptions>

-odac

</CsOptions>

<CsInstruments>

sr = 48000
ksmps = 32
nchnls = 1
0dbfs = 1

instr 1

SSample strget p4
p3 filelen SSample

aSample, a_ diskin2 SSample

chnmix aSample, "1"

endin

instr 2

aSample chnget "1"

aAmplitude linen .5, p3/8, p3, p3/8

chnclear "1"
chnmix aSample * aAmplitude, "1"

endin

instr 3

aSample chnget "1"

out aSample

chnclear "1"

endin

instr rewind

rewindscore

endin

</CsInstruments>

<CsScore>

i 1 0 1 "../percussive/dom.wav"
i 2 0 1
i 3 0 1

i "rewind" 1 1

</CsScore>

</CsoundSynthesizer>
