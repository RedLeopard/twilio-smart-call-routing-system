exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  // If recording already happened → end the call
  if (event.RecordingSid) {
    twiml.say("Thank you. Goodbye.");
    twiml.hangup();
    return callback(null, twiml);
  }

  // First pass → play message and record
  twiml.say("Sorry We missed your call. We are Most Likely in the clouds. Please leave a message after the beep And will reach back in no Time. Thank You.");

  twiml.record({
    maxLength: 180,
    timeout: 5,
    playBeep: true,
    action: `https://${context.DOMAIN_NAME}/voicemail`,
    method: "POST"
  });

  return callback(null, twiml);
};