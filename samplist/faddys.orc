#define dom #1#
#define tak #2#

strset $dom, "/home/faddymichel/studio/kit/samplist/../percussive/dom.wav"
strset $tak, "/home/faddymichel/studio/kit/samplist/../percussive/tak.wav"

instr $dom, $tak

SSound strget p1
p3 filelen SSound

aLeft, aRight diskin2 SSound

outs aLeft, aRight

endin

instr rewind

rewindscore

endin