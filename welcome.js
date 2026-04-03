exports.handler = async function (context, event, callback) {
  console.log("Inbound call");

  const twiml = new Twilio.twiml.VoiceResponse();
  const client = context.getTwilioClient();

  const confName = `conf_${event.CallSid}`;

  // Greeting
  twiml.say("Thanks for calling Cloud Systems Direct. Please hold while I connect you.");

  // Put caller into conference with music
  const dial = twiml.dial();
  dial.conference(
    {
      waitUrl: "https://demo.twilio.com/docs/classic.mp3",
      startConferenceOnEnter: true,
      endConferenceOnExit: true
    },
    confName
  );

  // 🔥 CALL YOUR PHONE → BUT GO TO SCREEN FIRST (NOT JOIN)
  await client.calls.create({
    to: "+1314*******",
    from: "+1314*******",
    timeout: 20,
    url: `https://${context.DOMAIN_NAME}/screen?conf=${confName}&caller=${event.CallSid}`,
    method: "POST"
  });

  return callback(null, twiml);
};