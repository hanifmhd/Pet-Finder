# Pet-Finder
Pet Finder app using React Native

---

## Clone App from Dribbble
https://dribbble.com/shots/4745402/attachments/1069154?mode=media

![](https://cdn.dribbble.com/users/287119/screenshots/4745402/attachments/1069154/limage.png)

## API
https://dog.ceo/dog-api/documentation/

## Little bit modification
Intro|Login
:-------------------------:|:-------------------------:
![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604931738.png)  |  ![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604931746.png)

## 
Home|Sub-breed-column|Sub-breed-list
:-------------------------:|:-------------------------:|:-------------------------:
![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604931892.png)  |  ![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604932544.png) | ![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604932908.png)

## 
Detail Info-1|Detail Info-2
:-------------------------:|:-------------------------:
![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604932526.png)  |  ![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604932530.png)

## 
Chat (Coming Soon)|Empty State
:-------------------------:|:-------------------------:
![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604932594.png)  |  ![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604932714.png)

## 
Profile
:-------------------------:
![](https://github.com/hanifmhd/Pet-Finder/blob/main/screenshot/Screenshot_1604932598.png)

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
