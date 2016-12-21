export default function(superClass) {
  return {
    with: function() {
      const childClasses = [...arguments]
      childClasses.forEach((options) => {
        if(typeof options == 'function') {
          const funcWithClass = options
          superClass = funcWithClass(superClass)
        } else {
          const funcWithClass = options[0]
          const funcWithClassArgs =
            (options.length > 1) ?
            [superClass, ...options.slice(1)] :
            [superClass]
          superClass = funcWithClass.apply(null, funcWithClassArgs)
        }
      })
      return superClass
    }
  }
}
