// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

getUserLanguage = function () {
  // Put here the logic for determining the user language

  return "zh";
};

if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);

    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
  });
}
