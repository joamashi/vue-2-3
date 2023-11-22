/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
}

// app.use() 함수는 Express 앱에서 항상 실행하는 미들웨어의 역할을 합니다. app.get(), app.post() 등과 달리 요청 URL을 지정하지 않아도 app.use()를 사용할 수 있으며, 해당 경우에는 URL에 상관없이 앱이 요청을 수신할 때마다 매번 실행됩니다
