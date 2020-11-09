# Pet-Finder
Pet Finder app using React Native

---

## How to run project

_After clone the project you need to install deppendecy with NPM Install in terminal_

```
npm install
```

### Run in Android Platform

If using Android X, run jetifier first

```
npx jetify
```

After jetifier run, you can run in your android device / android simulator

```
npm run android
```

### Generate APK in Android

If using Android X, run jetifier first

```
npx jetify
```

After jetifier run, you can build APK for your android device

```
cd android && ./gradlew assembleRelease
```

You can see apk in path folder :

```
android/app/release
```

or

```
android/app/build/outputs/apk/release
```

#### Detail environment :

- production : No Redux Logger
- development : Print Redux Logger in Console
