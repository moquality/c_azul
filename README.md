## Tests for Azul

[Link to the project](https://app.moquality.com/project/azularc)

## Get Started

Install the CodeLab CLI with

```
npm install -g @moquality/codelab
```

Then start codelab inside your test folder

```
cd c_azul
codelab
```

CodeLab will start an Appium server in the background. If you run your Appium test on the default host and port at `localhost:4723`, you will see the output of your Appium test in CodeLab.

Try editing the Appium test and re-running it. CodeLab will show you the output of every Appium step in the dashboard in the [CodeLab page](https://app.moquality.com/project/azularc/app/android:com.example.allisonsmith/codelab/create).

## Create a new test step

To create a new test step select any existing step in CodeLab. You will see the before and after screenshots fo that particular step along with options for creating a new step. If the new step does not depend on the widget you will find the action on this page. Select the action and CodeLab will show you the Appium code you should use in your test for this step.

If the new step depends on a widget, hover over the screenshot and select the widget first. CodeLab will try to find the best selector that widget. Choose the action you want to perform on that widget and CodeLAb will show you the Appium code you should use in your test for this step. You can choose to modify the selectors if you need to and CodeLab will show you the modified code.

That's it. Use CodeLab to create or debug your test. Once you are done, you can simply save it and upload it to MoQuality.

## Docs

See [MoQuality Docs](https://docs.moquality.com/) for additional information.
