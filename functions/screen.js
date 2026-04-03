exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 25,
    action: `https://${context.DOMAIN_NAME}/screen_result?conf=${event.conf}&caller=${event.caller}`,
    method: "POST"
  });

  gather.say("Press 1 to accept this call.");

  // 🔥 IMPORTANT: after timeout, go to screen_result anyway
  twiml.redirect(
    {
      method: "POST"
    },
    `https://${context.DOMAIN_NAME}/screen_result?conf=${event.conf}&caller=${event.caller}`
  );

  return callback(null, twiml);
};