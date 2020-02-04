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
			app: 'https://firebasestorage.googleapis.com/v0/b/mq-prod.appspot.com/o/files%2Fazularc%2F1580808513284%2Fapp-debug.apk?alt=media&token=c7d37497-99fc-41fe-badb-f0250457d44d',
			deviceName: 'Device',
			automationName: 'UiAutomator2',
			appWaitActivity: '*',
			autoGrantPermissions: true,
			noReset: false,
			autoLaunch: false
		})
		// Have Appium automatically determine which permissions your app requires and grant them to the app on install.
		// http://appium.io/docs/en/writing-running-appium/caps/
		await driver.setImplicitWaitTimeout(15000)
	})

	after(async () => {
		return await driver.quit()
	})

	it('Login', async () => {
		await driver.launchApp()
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/emailEditText\")").then(target => target.type("tej.mhatre@azularc.com"))
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/passwordEditText\")").then(target => target.type("12345678"))
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/loginButton\")").then(target => target.click())
		await new Promise(resolve => setTimeout(resolve, 1000))
	})

	it('Select the project Painting Project', async () => {
		await driver.elementByAndroidUIAutomator("new UiSelector().text(\"Painting Project\")").then(target => target.click())
	})

	it('Clock In Tej Mhatre', async () => {
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/clockinout\")").then(target => target.click())
		await driver.elementByAndroidUIAutomator("new UiSelector().text(\"Manual Clock In/Out\")").then(target => target.click())
		await driver.elementByAndroidUIAutomator("new UiSelector().text(\"Tej Mhatre\")").then(target => target.click())
	})

	it('Check Project Overview', async () => {
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/projectOverview\")").then(target => target.click())
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/percentageButton\")").then(target => target.click())
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/hoursButton\")").then(target => target.click())
		await driver.elementByAndroidUIAutomator("new UiSelector().resourceId(\"com.example.allisonsmith:id/menuRight\")").then(target => target.click())
		await driver.elementByAndroidUIAutomator("new UiSelector().text(\"Project Home\")").then(target => target.click())
	})

})
