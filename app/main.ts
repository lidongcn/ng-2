import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

/**
 * 我们通过 引导 根模块来启动应用。
 * 在开发期间，我们通常在一个 main.ts 文件中来引导 AppModule ，就像这样：
 */
platformBrowserDynamic().bootstrapModule(AppModule);
