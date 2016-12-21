![alt tag](https://raw.githubusercontent.com/sterjakovigor/extend-with/master/logo.jpg)

# How to use?

``` javascript
class SuperMan {}

const withSupermanLevitation =
  (superClass) => class extends superClass {
    static levitation = 'levitation'
  }

const withSupermanTelekinesis =
  (superClass, 'telekinesis') => class extends superClass {
    static telekinesis = value
  }

const SupermanExtended =
  extend(Superman).with(
    withSupermanLevitation,
    [withSupermanTelekinesis, 'telekinesis'] // with arguments
  )

console.log(
  SupermanExtended.levitation,  // => 'levitation'
  SupermanExtended.telekinesis, // => 'telekinesis'
)
```
