<CsoundSynthesizer>

<CsOptions>

-odac

</CsOptions>

<CsInstruments>

sr = 48000
ksmps = 32
nchnls = 2
0dbfs = 1

strset 1, "../instruments/dom.wav"
strset 2, "../instruments/tak.wav"

instr 1, 2

SSound strget p1
iDuration filelen SSound
p3 = iDuration

aLeft, aRight diskin2 SSound

outs aLeft, aRight

endin

instr rewind

rewindscore

endin

</CsInstruments>

<CsScore>

t 0 120

v [ 1/2 ]

i 1 0 1
i 2 1 1

i 2 3 1
i 1 4 1

i 2 6 2

i "rewind" 8 1

</CsScore>
