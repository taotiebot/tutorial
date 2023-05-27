import { featureFlag, f1, f2 } from './common'

const context = {
  featureFlag: true,
  fflag: {
    featureFlag: true
  },
  data: {
    fflag: {
      featureFlag: true
    }
  }
}

// If feature flag is true (f1)
if (featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag is false (f2)
if (!featureFlag) {
  f1()
} else {
  f2()
}

// If conditional doesn't have a block wrapper (f1)
if (featureFlag) f1()
else {
  f2()
}

// If else conditional doesn't have a block wrapper (f2)
if (!featureFlag) f1()
else f2()

// If there are multiple statements inside the block (f1, f2, f3)
if (featureFlag) {
  f1()
  f2()
  f1()
} else {
  f2()
  f1()
}

// If there are multiple statements inside the block (inverse) (f2, f1)
if (!featureFlag) {
  f1()
  f2()
  f1()
} else {
  f2()
  f1()
}

// If feature flag within context (f1)
if (context.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within multiple context (f1)
if (context.fflag.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within context (inverse) (f2)
if (!context.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within multiple context (inverse) (f2)
if (!context.fflag.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within multiple context (f1)
if (context.data.fflag.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within multiple context (f2)
if (!context.data.fflag.featureFlag) {
  f1()
} else {
  f2()
}
