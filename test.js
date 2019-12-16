describe('Test', function() {
	this.timeout(0)
	const wd = require('wd')
	const driver = wd.promiseChainRemote({
		host: 'localhost',
		port: 4723,
	})

	before(async () => {
		await driver.init({
			platformName: 'android',
			app: 'https://firebasestorage.googleapis.com/v0/b/mq-prod.appspot.com/o/files%2Fazularc%2F1576072839925%2FAllison%20Smith.apk?alt=media&token=44a41540-711f-4e8f-b771-c9ee0418663f',
			deviceName: 'Device',
			automationName: 'UiAutomator2',
			appWaitActivity: '*',
		})
		await driver.setImplicitWaitTimeout(15000)
	})

	after(async () => {
		return await driver.quit()
	})

	it('First Test', async () => {
		await driver.launchApp()
		await new Promise(resolve => setTimeout(resolve, 5000))
		await driver.elementByAndroidUIAutomator("new UiSelector().text(\"Next\")").then(target => target.click())
	})
})