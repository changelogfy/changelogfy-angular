import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-changelogfy',
  template: `<span></span>`,
  styles: [],
})
export class ChangelogfyComponent implements OnInit {
  @Input() appId: string;
  @Input() selector: string;
  @Input() initBadge: boolean = true;
  @Input() userId: string = null;
  @Input() userName: string = null;
  @Input() userEmail: string = null;
  @Input() customData: string = null;

  scriptIsLoaded = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.start();
  }

  loadScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://widget.changelogfy.com/index.js';
      script.id = 'changelogfy-script';
      script.type = 'text/javascript';
      script.async = true;
      document.head.appendChild(script);

      script.addEventListener('load', () => {
        this.scriptIsLoaded = true;
        resolve(script);
      });

      script.addEventListener('error', () => {
        reject(new Error(`Changelogfy failed to load.`));
      });
    });
  }

  async start() {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.scriptIsLoaded) {
          await this.loadScript();
        }

        resolve();

        // @ts-ignore
        changelogfy.destroy();
        // @ts-ignore
        changelogfy.init({
          app_id: this.appId,
          selector: this.selector,
          init_badge: this.initBadge,
          data: {
            user_id: this.userId,
            user_name: this.userName,
            user_email: this.userEmail,
            custom_data: this.customData,
          },
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
