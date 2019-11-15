import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  docsRoute(this, function() {
    this.route('forms', function() {
      this.route('input-text');
      this.route('input-textarea');
      this.route('input-radio');
      this.route('input-radio-group');
      this.route('input-checkbox');
      this.route('input-checkbox-group');
    });
  });

  this.route('not-found', { path: '/*path' });
});
