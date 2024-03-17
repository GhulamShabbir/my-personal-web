import { SOCIAL_LINKS } from "@/data/socialLinks";

export const sendConfirmationEmail = (userName: string, regNumber: string) => {
  let customerEmailTemplate = `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
            <title>Cyberabad</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
        
                #container {
                    max-width: 700px;
                    margin: 0 auto;
                    padding: 0;
                }
        
                #logo {
                    display: block;
                    margin: 0 auto;
                    text-align: center;
                    margin-bottom: 20px;
                }
        
                #content {
                    margin-bottom: 20px;
                }
        
                #social-links {
                    text-align: left;
                    margin-top: 20px;
                }
        
                #social-links #facebook{
                  text-decoration: none;
                  background-color: #3b5998;
                  padding: 5px;
                  color:white;
                  
      
                }
                .heading1{
                  color:#202123;
                  font-size:32px;
                  line-height:40px;
                  margin:0 0 20px;
                }
                .textAll{
                  font-size:16px;
                  line-height:24px;
                  color:#202123;
                }
                #social-links #youtube{
                  text-decoration: none;
                  background-color: #c4302b;
                  padding: 5px;
                  color:white;
                }
        
                @media only screen and (max-width: 600px) {
                    #container {
                        max-width: 100% !important;
                        width: 100% !important;
                    }
                }
            </style>
        </head>
        <body>
            <div id="container" style="font-size:14px;line-height:20px;font-family:'Poppins';">
                  <div id="logo">
                      <img src="https://cyberabadtest.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4357be5a.jpg&w=96&q=75" width="560" height="168" alt="OpenAI" title="" style="width:70px;height:auto;border:0;line-height:100%;outline:none;text-decoration:none" class="CToWUd" data-bit="iit" alt="Cyberabad's Initiative" />
                      <h3 style="color:#202123;font-size:28px;line-height:30px;margin:20px 0px">Cyberabad's Initiative for Artificial Intelligence, Web 3.0 & Cyberabad</h3>
                  </div>
                  <div>Dear ${userName}</div>
                  <div class="gmail_quote" dir="auto">
                    <br>Thank you for expressing your interest in the Cyberabad's Initiative for Artificial Intelligence, Web 3.0 &amp; Cybersecurity Program!<br>
                    <br>We have received your application. Please note your Registration Number: ${regNumber}.<br>
                    <br>&nbsp;Now that you’ve applied, the next step will be the entrance exam. The details of the entrance exam, including the venue and date will be emailed to you. If you haven’t already downloaded your admit card please download it and save it. You’ll need it when you come for the entrance exam. You can find it at: <a href="https://www.cyberabad.ai/admit-card" rel="noreferrer" target="_blank" >https://www.cyberabad.ai/admit-card</a><br>
                    <br>While applications are being accepted, we encourage you to begin preparing for the entrance exam. The entrance exam will be split into 3 parts:<br>
                    <br>
                    &nbsp; I. English (Reading &amp; Vocabulary)<br>
                    &nbsp; II. Mathematics (10th Grade Math)<br>
                    &nbsp; III. Intelligence Quotient (IQ)<br>
                    <br>For those students who are new to the computer field, you can get a jump start on your learning immediately by starting HTML and CSS:<br>
                    <br>Learn HTML by Hira Khan (Watch Recorded Videos)<br>
                    &nbsp; <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/playlist?list%3DPLKvqnz8z1zWQ3BALy86tIXICkG874wAc6&amp;source=gmail&amp;ust=1686649498374000&amp;usg=AOvVaw3QVSGsZDWzOl3tY88DTl2d">https://www.youtube.com/<wbr>playlist?list=<wbr>PLKvqnz8z1zWQ3BALy86tIXICkG874<wbr>wAc6</a><br>
                    <br>Learn CSS Intro by Hira Khan (Watch Recorded Videos)<br>
                    &nbsp; <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/playlist?list%3DPLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob&amp;source=gmail&amp;ust=1686649498374000&amp;usg=AOvVaw0iDihdFkZk9tIpSIDt4yeS">https://www.youtube.com/<wbr>playlist?list=<wbr>PLKvqnz8z1zWQSWIen_<wbr>zUSEBmtqzPLuRob</a><br>
                    <br>To stay up to date on the latest updates from the Cyberabad's Initiative, please follow us on your favorite social media channels:<br>
                    &nbsp; Facebook Page Link: <a href="${SOCIAL_LINKS.FACEBOOK}" rel="noreferrer" target="_blank">${SOCIAL_LINKS.FACEBOOK}</a><br>
                    &nbsp; YouTube: <a href="${SOCIAL_LINKS.YOUTUBE}" rel="noreferrer" target="_blank">${SOCIAL_LINKS.YOUTUBE}</a><br>
                    &nbsp; LinkedIn: <a href="${SOCIAL_LINKS.LINKED_IN}" rel="noreferrer" target="_blank">${SOCIAL_LINKS.LINKED_IN}</a><br>
                    &nbsp; Twitter: <a href="${SOCIAL_LINKS.TWITTER}" rel="noreferrer" target="_blank">${SOCIAL_LINKS.TWITTER}</a><br>
                    &nbsp; Instagram: <a href="${SOCIAL_LINKS.INSTAGRAM}" rel="noreferrer" target="_blank">${SOCIAL_LINKS.INSTAGRAM}</a><br>
                    <br>
                    &nbsp; Regards,<br>
                    &nbsp; Cyberabad Initiative for AI, Web 3.0 &amp; Cybersecurity<br>
                    &nbsp; Email: <a href="mailto:admin@cyberabad.ai" target="_blank">admin@cyberabad.ai</a><br>
                    &nbsp; Website: <a href="http://www.cyberabad.ai" rel="noreferrer" target="_blank" >Cyberabad.ai</a><div class="yj6qo"></div><div class="adL"><br>
                    <br>
                    </div>
                  </div>
            </div>
        </body>
        </html>
        `;
  return customerEmailTemplate;
};
