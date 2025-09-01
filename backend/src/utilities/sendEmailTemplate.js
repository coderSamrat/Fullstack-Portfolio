export const senderEmailTemplate = ({ name, message }) => {
      return (
            `<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin-top: 20px; border: 1px solid #cccccc; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
                        <tr>
                              <td align="center" bgcolor="#00466a" style="padding: 40px 0 30px 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                                    Thank You For Reaching Out!
                              </td>
                        </tr>
                        <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                          <td style="color: #333333; font-size: 20px;">
                                                <b>Hi ${name},</b>
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style="padding: 20px 0 30px 0; color: #555555; font-size: 16px; line-height: 24px;">
                                                I have successfully received your message and appreciate you contacting me. I will review it and get back to you as soon as possible.
                                                <br><br>
                                                      Here's a copy of your message:
                                                </td>
                                                </tr>
                                                <tr>
                                                      <td>
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-left: 4px solid #00466a; background-color: #f9f9f9;">
                                                                  <tr>
                                                                        <td style="padding: 15px; font-style: italic; color: #777777;">
                                                                              "${message}"
                                                                        </td>
                                                                  </tr>
                                                            </table>
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td style="padding: 30px 0 0 0; color: #555555; font-size: 16px; line-height: 24px;">
                                                            Best regards,<br>
                                                            
                                                      </td>
                                                </tr>
                                          </table>
                                    </td>
                              </tr>
                        <tr>
                              <td bgcolor="#eeeeee" style="padding: 30px 30px 30px 30px; text-align: center; color: #888888; font-size: 12px;">
                                    This is an automated message. Please do not reply directly to this email.
                              </td>
                        </tr>
                  </table>
            </body>`

      );
};

export const receiverEmailTemplate = ({ name, email, mobile, message }) => {
      return (
            `<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin-top: 20px; border: 1px solid #cccccc; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
                        <tr>
                              <td align="center" bgcolor="#333333" style="padding: 40px 0 30px 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                                    New Message from Your Portfolio
                              </td>
                        </tr>
                        <tr>
                              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                          <tr>
                                                <td style="color: #333333; font-size: 20px;">
                                                      <b>You've received a new message!</b>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td
                                                      style="padding: 20px 0 30px 0; color: #555555; font-size: 16px; line-height: 24px;">
                                                      Here are the details from the contact form:
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>
                                                      <table border="0" cellpadding="10" cellspacing="0" width="100%"
                                                            style="border: 1px solid #dddddd;">
                                                            <tr style="background-color: #f9f9f9;">
                                                                  <td width="100" style="font-weight: bold; color: #333;">Name:</td>
                                                                  <td style="color: #555;">${name}</td>
                                                            </tr>
                                                            <tr>
                                                                  <td width="100" style="font-weight: bold; color: #333;">Email:
                                                                  </td>
                                                                  <td style="color: #555;"><a href="mailto:${email}"style="color: #007BFF;">${email}</a></td>
                                                            </tr>
                                                            <tr style="background-color: #f9f9f9;">
                                                                  <td width="100" style="font-weight: bold; color: #333;">Mobile: </td>
                                                                  <td style="color: #555;">${mobile || 'Not provided'}</td>
                                                            </tr>
                                                            <tr>
                                                                  <td width="100" style="font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                                                                  <td style="color: #555; line-height: 22px;">${message}</td>
                                                            </tr>
                                                      </table>
                                                </td>
                                          </tr>
                                    </table>
                              </td>
                        </tr>
                        <tr>
                              <td bgcolor="#eeeeee"
                                    style="padding: 30px 30px 30px 30px; text-align: center; color: #888888; font-size: 12px;">
                                    This message was sent from the contact form on your portfolio website.
                              </td>
                        </tr>
                  </table>
            </body>`
      );
};