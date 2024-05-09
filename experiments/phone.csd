<CSoundSynthesizer>

<CsOptions>

--format=flac
-odac
; -o foxonphone.flac

</CsOptions>

<CsInstruments>

sr = 10000
ksmps = 32
nchnls = 1
0dbfs = 1

instr 1

SSample strget p4
p3 filelen SSample

aSample [] diskin2 SSample

aPhone butterlp aSample [ 0 ], 5000
aPhone butterhp aPhone, 25

out aPhone

endin

</CsInstruments>

<CsScore>

i 1 0 1 "fox.wav"

</CsScore>

</CsoundSynthesizer>
