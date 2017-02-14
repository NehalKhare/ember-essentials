import Ember from 'ember';
import ENV from 'bookmarker/config/environment'

export default Ember.Route.extend({
  model() {
    Ember.Logger.info("ENV.APP.title === " + ENV.APP.title);
  }
});
