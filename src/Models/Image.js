import { Colors } from '@/Theme'

export const DrawGradientColors = [
  [Colors.kFB2576, Colors.k3F0071],
  [Colors.k3F0071, Colors.k150050],
  [Colors.k150050, Colors.k00F5FF],
  [Colors.k00F5FF, Colors.kFCE700],
  [Colors.kFCE700, Colors.kFF6D28],
  [Colors.kFF6D28, Colors.kEA047E],
  [Colors.kEA047E, Colors.kFFDB5C],
  [Colors.kFFDB5C, Colors.kFF7A51],
  [Colors.kFF7A51, Colors.k5BB318],
  [Colors.k5BB318, Colors.black],
  [Colors.black, Colors.white],
]

export const DrawColors = [
  Colors.primary,
  Colors.white,
  Colors.black,
  Colors.k5BB318,
  Colors.kFF7A51,
  Colors.kFFDB5C,
  Colors.kEA047E,
  Colors.kFF6D28,
  Colors.kFCE700,
  Colors.k00F5FF,
  Colors.k150050,
  Colors.k3F0071,
  Colors.kFB2576,
  ...DrawGradientColors,
]
export const DrawStrokeColors = [
  Colors.primary,
  Colors.white,
  Colors.black,
  Colors.k5BB318,
  Colors.kFF7A51,
  Colors.kFFDB5C,
  Colors.kEA047E,
  Colors.kFF6D28,
  Colors.kFCE700,
  Colors.k00F5FF,
  Colors.k150050,
  Colors.k3F0071,
  Colors.kFB2576,
  'url(#grad0)',
  'url(#grad1)',
  'url(#grad2)',
  'url(#grad3)',
  'url(#grad4)',
  'url(#grad5)',
  'url(#grad6)',
  'url(#grad7)',
  'url(#grad8)',
  'url(#grad9)',
  'url(#grad10)',
]

export const TextType = {
  Normal: 'Normal',
  WhiteBox: 'WhiteBox',
  Revert: 'Revert',
}
export const TextAlignType = {
  Left: 'flex-start',
  Center: 'center',
  Right: 'flex-end',
}
