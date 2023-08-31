var GoogleAuth; // Google Auth object.
export function initClient() {
  console.log(process["env"].GOOGLE_CLIENT_SECRET);
  window.gapi.client
    .init({
      apiKey: process["env"].GOOGLE_CLIENT_SECRET,
      clientId: process["env"].GOOGLE_CLIENT_ID,
      scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
    })
    .then(function () {
      GoogleAuth = window.gapi.auth2.getAuthInstance();
      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(window.updateSigninStatus);
    });
}
