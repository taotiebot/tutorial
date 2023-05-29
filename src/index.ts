const context = {
  featureFlag: false
}

if (context.featureFlag) {
  console.log('Show the exciting new feature')
} else {
  console.log('Show the old feature')
}
