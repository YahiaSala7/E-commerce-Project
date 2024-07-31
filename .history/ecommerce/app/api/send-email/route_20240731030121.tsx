import { Resend } from "resend";
import { EmailTemplate } from "../../_Components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "yahiasala7@gmail.com",
      to: [body.email],
      subject: "Your Orders From EpicRides",
      react: EmailTemplate({ body }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
