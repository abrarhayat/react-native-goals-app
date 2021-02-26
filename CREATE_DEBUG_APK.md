# Steps to create a debug-apk for Android

## Step 1

Run this command to install react-native CLI:  
`npm install -g react-native-cli`

## Step 2

Run this command to make new assets directory  
`mkdir ./android/app/src/main/assets/`

## Step 3

Setup the bundle for the app  
`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

## Step 4

Create the debug apk  
`cd android && ./gradlew assembleDebug`

## The result apk can be found in the directory  

`./android/app/build/outputs/apk/debug/`
