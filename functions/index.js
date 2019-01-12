const {
  BasicCard,
  Image,
  Suggestions,
  dialogflow,
} = require('actions-on-google');
const functions = require('firebase-functions');

const images = (name) => {
  return 'placeholder.png';
};

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Welcome to Trade Talks Captain!');
  conv.ask(new Suggestions('Sail to Coral Island'));
});

app.intent('Change Location', (conv, params) => {
  const { locale } = params;
  conv.ask("We've arrived at " + JSON.stringify(locale) + " Captain!");
  conv.ask(new BasicCard({
    image: new Image({
      url: images(),
      alt: 'character image',
    }),
  }));
});

exports.aog = functions.https.onRequest(app);

