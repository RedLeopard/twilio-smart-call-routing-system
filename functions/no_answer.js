exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient();

  const callerSid = event.caller;
  const callStatus = event.CallStatus;

  console.log("Call completed with status:", callStatus);

  if (callStatus === "no-answer" || callStatus === "busy" || callStatus === "failed") {
    await client.calls(callerSid).update({
      url: `https://${context.DOMAIN_NAME}/voicemail`,
      method: "POST"
    });
  }

  return callback(null, "Done");
};