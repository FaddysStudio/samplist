sr = 48000
ksmps = 32
nchnls = 4
0dbfs = 1

instr 10, 11, 12, 13

SSample strget p4
p3 filen SSample
aSample [] diskin2 SSample

iChannels lenarray aSample
iChannel init int ( p1 ) % 10 % iChannels

iTrack init frac ( p1 )
STrack sprintf "track/%f", iTrack

chnmix aSample [ iChannel ], STrack

endin

instr 21, 22, 23, 24

iTrack init frac ( p1 )
STrack sprintf "track/%f", iTrack
aSample chnget STrack

aSample clip aSample, 1, 0dbfs

iChannel init int ( p1 ) % 20
outch iChannel, aSample

endin

instr rewind

rewindscore

endin
