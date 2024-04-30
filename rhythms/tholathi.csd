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
p3 filelen SSound

aLeft, aRight diskin2 SSound

outs aLeft, aRight

endin

instr rewind

rewindscore

endin

</CsInstruments>

<CsScore>

t 0 90

v 3

i 1 [0/9] 1
i 2 [1/9] 1
i 2 [2/9] 1
i 2 [3/9] 1
i 2 [4/9] 1
i 2 [5/9] 1
i 1 [6/9] 1
i 2 [7/9] 1
i 2 [8/9] 1

i "rewind" 1 1

</CsScore>
