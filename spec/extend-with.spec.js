import extend from '../src'
describe('Extend class functions', () => {

  let Superman
  const abilities = ['levitation','telekinesis','strength']

  beforeEach(() => {
    Superman = class {}
  })

  it('with arguments', () => {
    const withSupermanLevitation =
      (superClass, value) => class extends superClass {
        static levitation = value
      }

    const withSupermanTelekinesis =
      (superClass, value) => class extends superClass {
        static telekinesis = value
      }

    const withSupermanStrength =
      (superClass, value) => class extends superClass {
        static strength = value
      }

    const SupermanExtended =
      extend(Superman).with(
        [withSupermanLevitation, true],
        [withSupermanTelekinesis, true],
        [withSupermanStrength, true],
      )

    abilities.forEach((ability) => {
      expect(SupermanExtended[ability]).toBe(true)
    })

  })

  it('without arguments', () => {

    const withSupermanLevitation =
      superClass => class extends superClass {
        static levitation = true
      }

    const withSupermanTelekinesis =
      superClass => class extends superClass {
        static telekinesis = true
      }

    const withSupermanStrength =
      superClass => class extends superClass {
        static strength = true
      }

    const SupermanExtended =
      extend(Superman).with(
        withSupermanLevitation,
        [withSupermanTelekinesis],
        [withSupermanStrength],
      )

    abilities.forEach((ability) => {
      expect(SupermanExtended[ability]).toBe(true)
    })
  })

})
