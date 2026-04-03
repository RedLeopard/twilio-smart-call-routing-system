exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  const answeredBy = event.AnsweredBy;

  console.log("AnsweredBy:", answeredBy);

  // If HUMAN → join conference
  if (answeredBy === "human") {
    twiml.redirect(
      {
        method: "POST"
      },
      `https://${context.DOMAIN_NAME}/join?conf=${event.conf}`
    );

    return callback(null, twiml);
  }

  // If MACHINE (voicemail) → do NOT join
  twiml.hangup();

  return callback(null, twiml);
};