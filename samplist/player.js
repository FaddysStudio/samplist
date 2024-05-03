export const play = `

SSound strget p1
p3 filelen SSound

aLeft, aRight diskin2 SSound

outs aLeft, aRight

` .trim ();

export const rewind = `

instr rewind

rewindscore

endin

` .trim ();
