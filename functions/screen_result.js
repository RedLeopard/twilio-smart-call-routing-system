exports.handler = async function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  const client = context.getTwilioClient();

  const digits = event.Digits;
  const confName = event.conf;
  const callerSid = event.caller;

  // ✅ You answered → join
  if (digits === "1") {
    twiml.redirect(
      {
        method: "POST"
      },
      `https://${context.DOMAIN_NAME}/join?conf=${confName}`
    );

    return callback(null, twiml);
  }

  // ❌ You did NOT answer → SEND TO YOUR EXISTING VOICEMAIL FUNCTION
  await client.calls(callerSid).update({
    url: `https://${context.DOMAIN_NAME}/voicemail`,
    method: "POST"
  });

  return callback(null, twiml);
};