# React Native [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/react-native-icon.png">](https://github.com/iamnadhu/ReactNative)
Created by [Nadhu](https://linktr.ee/iamnadhu)

This is a 'React Native' mobile application workspace.


## #1 Installation / Setup / Configuration [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/install-icon.png">](https://github.com/iamnadhu/ReactNative)
```
Step #01: Type '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
[FYI: To install 'Homebrew']

Step #02: Type 'brew install node'
[FYI: To install 'Node']

Step #03: Type 'node -v'
[FYI: To check 'Node version']

Step #04: Type 'brew install watchman'
[FYI: To install 'Watchman']

Step #05: Type 'watchman -v'
[FYI: To check 'Watchman version']

Step #06: Install 'Xcode' and 'Cocoapods'
[FYI: To install 'Cocoapods', type 'sudo gem install cocoapods']

Step #07: Type 'pod --version'
[FYI: To check 'Cocoapods version']

Step #08: Configure Xcode command line tools
[FYI: To configure Xcode command line tools 'Open Xcode -> Preferences -> Locations tab -> Select latest version of Xcode command line tools']

Step #09: Install 'Android Studio' and fix the 'License Issues'
[FYI: To fix the license issues 'Open Android Studio -> Go to configure -> SDK Manager -> SDK Tools Tab -> Install Google Play Licensing Library']

Step #10: Type 'source ~/.bash_profile'
[FYI: To check whether '.bash_profile' file exists and if not goto 'Step #11' or else goto 'Step #12']

**********************************************************************************************************
Step #11: If '.bash_profile' file don't exists then follow below steps:
Step a) Go to directory and type 'cd ~/'
Step b) To create a new '.bash_profile' file, type 'touch .bash_profile'
Step C) Open '.bash_profile' and copy all below contents and paste on that '.bash_profile' file and save

----------------------------------------------
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
----------------------------------------------
**********************************************************************************************************

Step #12: Type 'sudo npm i -g react-native-cli'
[FYI: To Install 'React Native Cli']

Step #15: Type 'npx react-native init MyFirstApp'
[FYI: To create a new 'React Native' project with name 'MyFirstApp']
```


## #2 Introduction [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/introduction-icon.png">](https://github.com/iamnadhu/ReactNative)

```
a) Steps to run a project

b) Steps to run on an 'iOS Simulator' / 'Physical Device'

c) Steps to run on an 'Android Emulator' / 'Physical Device'
```

### a) Steps to run a project
```
Step #1: Clone / download your project.

Step #2: Make sure you are in the project main folder.
[FYI: you can see folders / files such as 'android', 'ios', 'App.js', 'index.js' etc... 

Step #3: Type 'npm install'
[FYI: To install 'Node' files / libraries / dependences]

Step #4: Type 'npx pod-install ios' OR 'cd ios && pod install && cd ..'
[FYI: To install 'Pod' files / libraries / dependences.]

Step #5: Type 'npx react-native start'
[FYI: To start 'React Native Metro']

Step #6: Press 'Ctrl + C'
[FYI: Stop / Break the 'Terminal']
```

### b) Steps to run on an 'iOS Simulator' / 'Physical Device'
```
Step #1: Type 'xcrun simctl list devices'
[FYI: List all 'iOS Simulators' / 'Physical Devices']

Step #2: Type 'open -a Simulator'
[FYI: To open ios simulator, Default will be 'iPhone 12 Pro']

Step #4: Type 'npx react-native run-ios'
[FYI: Run on 'iOS Simulator' / 'Physical Device', Default will be 'iPhone 12 Pro']

Step #5: Type 'npx react-native run-ios --simulator="iPhone 12 Pro Max"'
[FYI: Run on a specified 'iOS Simulator' / 'Physical Device', Here it's 'iPhone 12 Pro Max']

Step #6: Press 'Ctrl + C'
[FYI: Stop / Break the 'Terminal']
```

### c) Steps to run on an 'Android Emulator' / 'Physical Device'
```
Step #1: Type 'adb devices'
FYI: List all 'Android Emulators' / 'Physical Devices']

Step #2: Type 'emulator -avd Pixel'
[FYI: To open android emulator named 'Pixel', if it doen't open type 'source ~/.bash_profile' then type 'emulator -avd Pixel' again]

Step #3: Type 'npx react-native run-android'
[FYI: Run on 'Android Emulator' / 'Physical Device']

Step #4: Press 'Ctrl + C'
[FYI: Stop / Break the 'Terminal']
```


## #3 Repository contains [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/repository-icon.png">](https://github.com/iamnadhu/ReactNative)

```
A) Core:
      Widgets, View, List View etc...

B) Advance:
      JSON Parsing, Grid View, Stack, Alert Dialog, Firebase etc...

C) Projects:
      Chat Application, Shopping Cart, Restaurant App etc...

D) Extras:
      Learning references / extras related to 'React Native' mobile application development or resources used such as Udemy, Youtube, Medium etc...
```


### A) Core [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/tutorials-icon.png">](https://github.com/iamnadhu/ReactNative)
>
> [01. My First App](https://github.com/iamnadhu/ReactNative/tree/master/Core/My%20First%20App)
>
> [02. Login UI App](https://github.com/iamnadhu/ReactNative/tree/master/Core/Login%20UI%20App)
>

### B) Advance [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/sessions-icon.png">](https://github.com/iamnadhu/ReactNative)
>
> [01. Touch App](https://github.com/iamnadhu/ReactNative/tree/master/Advance/Touch%20App)
>
> [02. Swipe App](https://github.com/iamnadhu/ReactNative/tree/master/Advance/Swipe%20App)
>

### C) Projects [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/projects-icon.png">](https://github.com/iamnadhu/ReactNative)
>
> [01. Chat App](https://github.com/iamnadhu/ReactNative/tree/master/Projects/Chat%20App)
>
> [02. Shopping App](https://github.com/iamnadhu/ReactNative/tree/master/Projects/Shopping%20App)
>
> [03. Restaurant App](https://github.com/iamnadhu/ReactNative/tree/master/Projects/Restaurant%20App)
>
> [04. Blog App](https://github.com/iamnadhu/ReactNative/tree/master/Projects/Blog%20App)
>

### D) Extras [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/extras-icon.png">](https://github.com/iamnadhu/ReactNative)
>
> [01. Learn Code Online](https://github.com/iamnadhu/ReactNative/tree/master/Extras/Learn%20Code%20Online)
>


## Author [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/auther-icon.png">](https://linktr.ee/iamnadhu)
Created by [Nadhu](https://linktr.ee/iamnadhu)

[<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/nadhu-icon.jpg">](https://linktr.ee/iamnadhu)

Follow me on: 

[<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/telegram-icon.png">](https://t.me/iamnadhu)
[<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/instagram-icon.png">](https://www.instagram.com/iamnadhu/)
[<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/whatsapp-icon.png">](https://api.whatsapp.com/send?phone=917293451396&lang=en)
[<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/linkedin-icon.png">](https://www.linkedin.com/in/iamnadhu/)
[<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/facebook-icon.png">](https://www.facebook.com/iamnadhu/)
[<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/github-icon.png">](https://github.com/iamnadhu)


Show your support!

Please ⭐️   this repository if this section helped you!


## License [<img src="https://github.com/iamnadhu/ReactNative/blob/master/Resources/license-icon.png">](https://github.com/iamnadhu/ReactNative)
Copyright © 2021-2022 [Nadhu](https://linktr.ee/iamnadhu)
