#define C #60#
#define D #62#
#define E #63#
#define F #65#
#define G #67#
#define A #68#
#define B #71#

{ 1 octave

i "synthesizer" [ $octave * 16 ] 1 0 $C 64

i . + . . $D 64

i . . . . $E 64

i . . . . $F 64

i . . . . $G 64

i . . . . $A 64

i . . . . $B 64

i . . . . [ $C + 12 ] 64

i . . . . [ $C + 12 ] 64

i . . . . $B 64

i . . . . $A 64

i . . . . $G 64

i . . . . $F 64

i . . . . $E 64

i . . . . $D 64

i . . . . $C 64

i . . . . $C 64

}
