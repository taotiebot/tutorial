import { featureFlag, f1, f2 } from './common'

const context = {
  featureFlag: true,
  fflag: {
    featureFlag: true
  }
}

// If feature flag is true
if (featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag is false
if (!featureFlag) {
  f1()
} else {
  f2()
}

// If conditional doesn't have a block wrapper
if (featureFlag) f1()
else {
  f2()
}

if (!featureFlag) f1()
else f2()

// If there are multiple statements inside the block
if (featureFlag) {
  f1()
  f2()
  f1()
} else {
  f2()
  f1()
}

// If there are multiple statements inside the block (inverse)
if (!featureFlag) {
  f1()
  f2()
  f1()
} else {
  f2()
  f1()
}

// If feature flag within context
if (context.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within multiple context
if (context.fflag.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within context (inverse)
if (!context.featureFlag) {
  f1()
} else {
  f2()
}

// If feature flag within multiple context (inverse)
if (!context.fflag.featureFlag) {
  f1()
} else {
  f2()
}
