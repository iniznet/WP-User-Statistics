# vue-wp-plugin-starter
Vue Wordpress Plugin Starter with Vue3, Typescript, and Laravel Mix (Webpack wrapper)

Effortlessly create a new plugin with this template!

**Scaffolding**

Use the [init-plugin.sh](init-plugin.sh) bash script to scaffold a new plugin.

Run:
```shell
bash init-plugin.sh
```

Use `composer install` to install php dependencies, and use `npm install` for front-end dependencies.

To build `dist.zip` for deployment:
```shell
composer app:package
```

Deploy `dist.zip` to a wordpress website:
```shell
cd your-wp-site-root
cd wp-content/plugins
unzip dist.zip -d wp-your-plugin-folder-name
```

Also, don't forget to update [readme.txt](readme.txt) file appropriately since it is one of wordpress plugin required file.

# Project structures
```
vue-wp-plugin-starter/
└───assets/
    │   admin.css                    - css for wordpress admin
    │   admin.html                   - admin demo html template
    │   frontend.css                 - css for front-end supporting full routing
    │   frontend.html                - front-end demo html template
    │   frontview.css                - css for front-end allow dynamic vue view/page
    │   frontview.html               - demo of dynamic vue view/page html template
└───config/
    │   settings.php                 - plugin config file for admin settings page
└───includes/
    └───Api/
    |   │   SettingsController.php   - REST Api for admin settings
    │   AdminLoader.php              - load wordpress admin stuff
    │   ApiRouters.php               - load REST Api routes
    │   Assets.php                   - maintain plugin assets
    │   CliLoader.php                - load CLI commands
    │   ExampleCommand.php           - hello world command
    │   FrontendLoader.php           - load vue front-end shortcodes
    │   Main.php                     - Main plugin instance
    │   Migrations.php               - handle database migrations
└───public/
    └───css/                         - output of assets/ folder
    └───js/                          - compiled/output of src
    │   mix-manifest.json            - versioning builted assets
└───src/
    └───admin/
    │   └───router/
    │   |   |    index.ts            - map all route/files in admin router folder
    │   |   admin-menu-fix.js        - SPA menu selector for wordpress admin
    │   |   admin.ts                 - admin main entry point
    │   |   App.vue                  - admin main view
    └───frontend/
    │   └───router/
    │   |   |    index.ts            - map all route/files in frontend router folder
    │   └───views/
    │   |   |    Home.Vue
    │   |   App.vue                  - frontend main view
    │   |   frontend.ts              - frontend main entry point
    └───frontview/
    │   └───router/
    │   |   |    index.ts            - just a dummy router
    │   └───views/
    │   |   |    Comp2.Vue           - demo second view
    │   |   |    Home.Vue            - demo main/first view
    │   |   App.vue                  - main view
    │   |   frontview.ts             - main entry point
    │   shims-vue.d.ts               - allow vue to use in typescript
    │   shims-window.d.ts            - allow windows object use in typescript
└───tests/
    └───jsunit/
    │   └───admin/
    │   │   └───views/
    │   |   |   Dashboard.spec.ts    - Demo jest/javascript unit testing
    └───phpunit/
    │   └───inc/                     - mocking/fake and base files
    │   |   |   class-wp-rest-controller.php
    │   |   |   PluginTestCase.php
    │   └───testcases/               - PHP unit testing files
    │   |   AdminTests.php
    │   |   ApiTests.php
    │   |   AssetsTests.php
    │   |   FrontendTests.php
    │   |   SettingControllerTests.php
    │   bootstrap.php                - loader file, act like (fake) plugin file in main folder
-----
.... additional root folder listing and be seen above
-----
```

**Note**: Purpose above listing is to provide overview of our project structure so not all files are listed.

# Vue/Front-end apps
There are two front-end apps in this starter/example.  Let say your prefix is `wp-awesome-plugin`, then your shortcodes would be (also see `include/FrontendLoader.php`):

```html
<!-- frontend app (full route) example -->
[wp-awesome-plugin-vue-app postfix='frontend']

<!-- frontview app (dynamic view) example, render component in frontview/views/Comp2.vue folder -->
[wp-awesome-plugin-vue-app postfix='frontview' view="Comp2"]
```

Since admin does not require shortcode, it is automatically generate with wrapper id=`admin-app-wrapper`

Run/preview locally:
```shell
npm run watch
```

Preview online: https://niiknow.github.io/vue-wp-plugin-starter/

![screenshot](https://raw.githubusercontent.com/niiknow/vue-wp-plugin-starter/master/screenshot.gif?raw=true)
