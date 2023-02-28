import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  //informacion del email

  await transport.sendMail({
    from: '"UpTask - Administradoe de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en UpTask",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
    <p>Tu cuenta esta casi lista solo debes comprobarla en el siguiente enlace : <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    </p>

    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //informacion del email

  await transport.sendMail({
    from: '"UpTask - Administradoe de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Restablece tu Password",
    text: "Restablece tu Password en UpTask",
    html: `<p>Hola: ${nombre} has solicitado restablecer tu Password en UpTask</p>
    <p>Sigue el siguiente enlace para generar un nuevo Password:
     <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a>
    </p>

    <p>Si tu no solicitastes este email, puedes ignorar este mensaje.</p>
    
    `,
  });
};
