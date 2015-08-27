exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ['tests/*.js'],
    multiCapabilities: [
        {'browserName': 'chrome'}, {'browserName': 'firefox'}, {'browserName': 'safari'}
    ],
    chromeDriver: '~/chromedriver'
}