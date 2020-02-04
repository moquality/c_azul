## Tests for Azul

[Link to the project](https://app.moquality.com/project/azularc)

## Get Started

Install the MQLAB CLI with

```
npm install -g @moquality/mqlab
```

Then start `mqlab` inside your test folder

```
cd c_azul
mqlab
```

MQLAB will start an Appium server in the background. If you run your Appium test on the default host and port at `localhost:4723`, you will see the output of your Appium test in the dashboard.

Try editing the Appium test and re-running it. You will see the output of every Appium step in the dashboard in the [dashboard](https://app.moquality.com/project/azularc/app/android:com.example.allisonsmith/tests/create).

## Create a new test step

To create a new test step select any existing step in the dashboard. You will see the before and after screenshots fo that particular step along with options for creating a new step. If the new step does not depend on the widget you will find the action on this page. Select the action and MQLab will show you the Appium code you should use in your test for this step.

If the new step depends on a widget, hover over the screenshot and select the widget first. MQLab will try to find the best selector that widget. Choose the action you want to perform on that widget and MQLab will show you the Appium code you should use in your test for this step. You can choose to modify the selectors if you need to and MQLab will show you the modified code.

That's it. Use MQLab to create or debug your test. Once you are done, you can simply save it and upload it to MoQuality.

## Docs

See [MoQuality Docs](https://docs.moquality.com/) for additional information.
