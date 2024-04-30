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

#include "design/field.part"
#include "design/channel.part"
#include "design/sampler.part"
#include "design/sample.part"

</CsInstruments>

<CsScore>

t 0 90

v 1

#include "score/faddys.part"

i "out" 0 -1

</CsScore>

</CsoundSynthesizer>
