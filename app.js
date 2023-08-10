// app.js
let runtime;
require('./pages/common/runtime.js', (mod) => {
    console.log(mod,'mod');
    runtime = mod
}, ({ errMsg, mod }) => {
    console.error(`path: ${mod}, ${errMsg}`)
})
let vendor;
require('./pages/common/vendor.js', (mod) => {
    vendor = mod
}, ({ errMsg, mod }) => {
    console.error(`path: ${mod}, ${errMsg}`)
})
let main1;
require('./pages/common/main.js', (mod) => {
    main1 = mod
}, ({ errMsg, mod }) => {
    console.error(`path: ${mod}, ${errMsg}`)
})

App({

  自己app的逻辑
})