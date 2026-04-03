exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  const dial = twiml.dial();
  dial.conference(
    {
      startConferenceOnEnter: true,
      endConferenceOnExit: true
    },
    event.conf
  );

  return callback(null, twiml);
};
