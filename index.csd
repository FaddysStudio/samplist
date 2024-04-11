<CsoundSynthesizer>

<CsOptions>

;;-m0
-odac

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

#include "field.part"
#include "channel.part"
#include "sampler.part"
#include "sample.part"

</CsInstruments>

<CsScore>

t 0 90

v 1

#include "faddys2.sco"

i "out" 0 -1

</CsScore>

</CsoundSynthesizer>
