/**
 * Legal texts, transcribed VERBATIM from elfamos.com:
 *   crbst_28.html → Aviso legal
 *   crbst_27.html → Política de privacidad
 *   crbst_24.html → Política de cookies
 *
 * These are kept in Spanish in every language version on purpose. They are the
 * legally binding texts; translating them would change their legal meaning,
 * and the brief forbids replacing legal copy with invented text. The VAL/EN
 * pages show a short localized note above the Spanish original instead.
 *
 * Do not paraphrase, shorten or "improve" anything in this file.
 */

export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "dl"; items: { term: string; value: string }[] };

export type LegalDoc = {
  title: string;
  published: string;
  blocks: LegalBlock[];
};

export const avisoLegal: LegalDoc = {
  title: "Aviso legal y condiciones de uso",
  published:
    "Primera publicación: 21 Mayo 2018 / Modificado y actualizado: 31 Enero 2019",
  blocks: [
    { type: "h2", text: "1. Aviso legal y condiciones de uso" },
    {
      type: "p",
      text: "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), te informamos de los datos que identifican a la entidad titular de la web www.elfamos.es",
    },
    {
      type: "dl",
      items: [
        { term: "Nombre", value: "RESTAURANTE EL FAMOS SL" },
        { term: "CIF", value: "B96750195" },
        {
          term: "Dirección",
          value: "Camino Iglesia de Vera 14, 46022 (Valencia)",
        },
        { term: "Teléfono", value: "+34 96 371 00 28" },
        { term: "Email", value: "info@elfamos.com" },
      ],
    },
    {
      type: "p",
      text: "Está inscrita en el Registro Mercantil, en el tomo 6054, folio 23 hoja V-59824.",
    },

    { type: "h2", text: "2. Aceptación de las condiciones de uso" },
    {
      type: "p",
      text: "Las presentes condiciones de uso y Aviso legal, así como la Política de privacidad y la de cookies, rigen el acceso y uso de la web por tu parte, como usuario de la misma.",
    },
    {
      type: "p",
      text: "El hecho de usar la web supone que has leído y aceptas esta información legal.",
    },

    { type: "h2", text: "3. Contenido de la web" },
    {
      type: "p",
      text: "El sitio web alojado bajo el nombre de dominio www.elfamos.com constituye una web corporativa que ofrece información sobre los servicios que ofrece el RESTAURANTE EL FAMOS SL que consisten en la formación de profesionales del transporte, formación de formadores, cursos de certificación profesional e implantación de planes de movilidad en empresas.",
    },

    { type: "h2", text: "4. Uso de la web" },
    {
      type: "p",
      text: "Como usuario te comprometes a hacer un uso correcto y legal del contenido y de los recursos accesibles desde esta web, respetando siempre a los demás usuarios.",
    },
    {
      type: "p",
      text: "Como usuario renuncias a utilizar cualquier recurso o información contenida en este web con fines ilícitos, ilegales o contrarios a la buena fe y al orden público, así como cualquier medio que pueda dañar, inutilizar o impedir el uso normal de los recursos e informaciones contenidos en la web, o los sistemas de información, documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático del RESTAURANTE EL FAMOS SL, de sus miembros o de cualquier otro usuario de la web.",
    },
    {
      type: "p",
      text: "Si incumplieras cualquiera de estas obligaciones, deberás responder de todos los daños y perjuicios que causes.",
    },
    {
      type: "p",
      text: "El RESTAURANTE EL FAMOS SL se reserva el derecho de dejar de prestar el servicio para retirar los contenidos ilegales, sin perjuicio de la responsabilidad por daños y perjuicios que pudiera derivarse. Dicha suspensión o retirada no dará derecho a indemnización ninguna.",
    },

    { type: "h2", text: "5. Contenidos y servicios enlazados a través de la web" },
    {
      type: "p",
      text: "Los enlaces o links que contiene esta web pueden conducirte a otras webs gestionadas por terceros, sobre las que no tenemos ninguna responsabilidad, por ello, el RESTAURANTE EL FAMOS SL no responde ni del estado ni de los contenidos de dichas web ni tampoco implica que los recomiende o que apruebe sus contenidos.",
    },
    {
      type: "p",
      text: "En todo caso, el acceso a dichas webs supone que debes someterte a sus propias políticas legales, sin que exista responsabilidad por parte del RESTAURANTE EL FAMOS SL.",
    },

    { type: "h2", text: "6. Derechos de propiedad intelectual e industrial" },
    {
      type: "p",
      text: "Todos los materiales e información de la web del RESTAURANTE EL FAMOS SL están sometidos a la normativa vigente sobre Propiedad Intelectual y/o Industrial.",
    },
    {
      type: "p",
      text: "El FAMOS es titular de los derechos de propiedad industrial e intelectual de la web, así como de los contenidos que alberga.",
    },
    {
      type: "p",
      text: "Por tanto, no se permite el uso de los contenidos de la web sin la autorización expresa y por escrito de la entidad. Cualquier uso de la web o de sus contenidos deberá tener una finalidad particular.",
    },
    {
      type: "p",
      text: "Los elementos como logotipos o imágenes que aparezcan en la web ajenos al FAMOS, pertenecen a sus respectivos propietarios por lo que serán éstos los responsables de cualquier posible disputa que pudiera surgir respecto a ellos.",
    },
    {
      type: "p",
      text: "Si tienes alguna duda con respecto a la propiedad de cualquiera de los contenidos o servicios que se ofrecen a través de la web, no dudes en contactar con nosotros para poder ayudarte.",
    },

    { type: "h2", text: "7. Exoneración de responsabilidad" },
    {
      type: "p",
      text: "El RESTAURANTE EL FAMOS SL velará, en la medida de sus propios recursos técnicos y humanos por el correcto funcionamiento de la web así como porque su contenido sea correcto y veraz.",
    },
    {
      type: "p",
      text: "Sin embargo el RESTAURANTE EL FAMOS SL no puede garantizar la ausencia de virus u otros elementos lesivos, introducidos por terceros, que pudieran causar daños o alteraciones en el sistema informático, en los documentos electrónicos o en tus ficheros cuando visitas la web como usuario.",
    },
    { type: "p", text: "El RESTAURANTE EL FAMOS SL no se hace responsable de:" },
    {
      type: "ul",
      items: [
        "Los daños derivados del mal uso de esta web o de sus contenidos por los usuarios, ni de cualquier acción realizada sobre la base de la información que aparece en la web.",
        "Los errores u omisiones que pudieran aparecer en los contenidos de la web.",
        "Las pérdidas o daños causados en el software y equipos informáticos de los usuarios o de terceros por el incumplimiento de estas condiciones de uso por parte tu parte, como usuario, o por fallos o desconexiones en las redes de telecomunicaciones que produzcan la suspensión, cancelación o interrupción del servicio de la web antes o durante la prestación del mismo.",
      ],
    },
    {
      type: "p",
      text: "Te corresponde, como usuario, disponer de las herramientas adecuadas para la detección y desinfección de programas informáticos dañinos.",
    },

    { type: "h2", text: "8. Actualización de estas condiciones" },
    {
      type: "p",
      text: "El RESTAURANTE EL FAMOS SL te informa de que estas condiciones de uso, el resto de textos legales y en general, cualquier elemento que forma parte del diseño y configuración de la web, podrá ser modificado cambiando de esta forma, la fecha de actualización que aparece en el encabezado de la información legal.",
    },
    {
      type: "p",
      text: "Los nuevos efectos que produzca la modificación se pondrán en marcha una vez publicada en la web, por ello es importante que aceptes la vinculación a las condiciones aplicables a la web en cada momento.",
    },

    { type: "h2", text: "9. Legislación y jurisdicción aplicable" },
    {
      type: "p",
      text: "Estas condiciones de uso se regirán e interpretarán conforme a la legislación española y cualquier disputa relacionada con la web del RESTAURANTE EL FAMOS SL se tramitará ante la jurisdicción española.",
    },
  ],
};

export const privacidad: LegalDoc = {
  title: "Política de privacidad",
  published: "Publicado: 21 Mayo 2018 / Modificado y actualizado: 31 Enero 2019",
  blocks: [
    {
      type: "p",
      text: "Desde el RESTAURANTE EL FAMOS SL estamos comprometidos con la defensa de los derechos de protección de datos personales de nuestros clientes y contactos por ello publicamos esta información, con el fin de informar debidamente:",
    },
    {
      type: "ul",
      items: [
        "De sus derechos y del uso de esta web ANTES de facilitar los datos;",
        "De las medidas que garantizan la salvaguarda e integridad de los datos;",
        "Para que el consentimiento previo al envío de datos por su parte pueda estar debidamente fundamentado",
      ],
    },
    {
      type: "p",
      text: "Todo ello cumpliendo con todas las obligaciones legalmente dispuestas en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos (LOPD), en su Reglamento de Desarrollo 1720/2007, de 21 de diciembre y en el Reglamento Europeo de Protección de Datos (RGPD), así como toda la normativa española y europea aplicable a esta materia.",
    },
    {
      type: "p",
      text: "Por ello, cualquier usuario que desee información, debe haber marcado obligatoriamente la opción de haber leído y aceptado la política de privacidad del sitio web, el aviso legal y la política de cookies.",
    },

    { type: "h2", text: "1. ¿Quién es el Responsable del tratamiento de tus datos?" },
    {
      type: "dl",
      items: [
        { term: "Identidad", value: "RESTAURANTE EL FAMOS SL" },
        {
          term: "Dirección postal",
          value: "Camino de la Iglesia de Vera 14 (46022) Valencia",
        },
        { term: "Teléfono", value: "+34 96 371 00 28" },
        { term: "Correo electrónico", value: "info@elfamos.com" },
      ],
    },

    { type: "h2", text: "2. ¿Cuál es la finalidad del tratamiento de tus datos?" },
    {
      type: "p",
      text: "Inicialmente no disponemos de formularios de captación de datos personales, pero es posible que en breve insertemos un formulario para facilitar el contacto con nuestros clientes. Por el momento, los datos que podamos recabar serán los que nos lleguen vía correo electrónico, y corresponderán con las consultas o peticiones de reserva de mesa que nos puedan hacer. Una vez recogidos, tus datos pasan a formar parte de un tratamiento al que se le aplican las medidas de seguridad correspondientes.",
    },

    { type: "h2", text: "3. ¿Por cuánto tiempo conservaremos tus datos?" },
    {
      type: "p",
      text: "Los datos personales recogidos a través de los formularios de la web se conservarán durante el tiempo estrictamente necesario, una vez terminada la relación se mantendrán bloqueados sólo con el fin de cumplir las posibles obligaciones legales.",
    },

    { type: "h2", text: "4. ¿Cuál es la legitimación para el tratamiento de tus datos?" },
    {
      type: "p",
      text: "Legalmente podemos tratar los datos que te solicitamos al habernos proporcionado tu consentimiento para poder hacerlo. Esto es así porque has manifestado expresamente tu consentimiento mediante la activación de la casilla he leído y acepto.",
    },

    { type: "h2", text: "5. ¿Se comunican tus datos a otros destinatarios?" },
    {
      type: "p",
      text: "Los datos que introduces en la web no serán comunicados a otras entidades, salvo por imperativo legal o para poder dar cumplimiento al objeto para el cual fueron facilitados.",
    },
    {
      type: "p",
      text: "Tus datos se recogen a través de los formularios insertados en nuestra web que está alojada en los servidores de la empresa situada en España, por ello tus datos no salen de nuestro país.",
    },
    {
      type: "p",
      text: "Puedes consultar su política de privacidad en: http://www.ebmproyectos.com",
    },

    { type: "h2", text: "6. ¿Qué derechos tienes al facilitarnos tus datos?" },
    { type: "p", text: "Son los siguientes:" },
    {
      type: "dl",
      items: [
        {
          term: "Derecho de información",
          value:
            "tienes derecho a ser informado de forma clara ANTES de que tus datos sean recogidos sobre qué datos tuyos están siendo tratados, con qué finalidad se tratan, donde han conseguido los datos y si los van a comunicar o los han comunicado a alguien",
        },
        {
          term: "Derecho de acceso",
          value:
            "para conocer qué datos tuyos están siendo tratados, con qué finalidad se tratan, donde han conseguido los datos y si los van a comunicar o los han comunicado a alguien",
        },
        {
          term: "Derecho de rectificación",
          value: "para modificar aquellos datos tuyos inexactos o incompletos",
        },
        {
          term: "Derecho de cancelación",
          value: "para cancelar tus datos inadecuados o excesivos",
        },
        {
          term: "Derecho de oposición",
          value:
            "para evitar que se traten tus datos o que dejen de tratarse aunque sólo en los supuestos que establece la ley",
        },
        {
          term: "Derecho de limitación del tratamiento",
          value:
            "para solicitar que se suspenda el tratamiento de datos en los supuestos que establece la ley",
        },
        {
          term: "Derecho a la portabilidad de los datos",
          value:
            "para poder recibir tus datos facilitados en un formato electrónico estructurado y de uso habitual y poder transmitirlos a otro responsable",
        },
        {
          term: "Derecho a no ser objeto de decisiones individualizadas",
          value:
            "con el fin de que no se tome una decisión sobre ti que produzca efectos jurídicos o te afecte basada sólo en el tratamiento de tus datos",
        },
      ],
    },

    { type: "h2", text: "7. ¿Cómo puedes ejercitar tus derechos?" },
    {
      type: "p",
      text: "Para ejercer cualquiera de tus derechos deberás solicitarlo al email info@elfamos.com incluyendo:",
    },
    {
      type: "ul",
      items: [
        "Fotocopia del dni (pasaporte u otro documento de identidad) o firma electrónica.",
        "Contenido de la petición que realizas y si fuera necesario, los documentos que la acreditan.",
        "Dirección (a efectos de notificaciones), fecha y firma",
      ],
    },
    {
      type: "p",
      text: "Si ejercitas tus derechos por un representante voluntario expresamente designado, deberás aportar el documento o instrumento electrónico que acredite la representación.",
    },
    {
      type: "p",
      text: "En el caso de que el titular de los datos fuera menor de edad o incapacitado, se ejercitará los derechos por su representante legal debidamente acreditado.",
    },

    { type: "h2", text: "8. ¿Qué puedes hacer si tus derechos no han sido atendidos?" },
    {
      type: "p",
      text: "En caso de que consideres que no hemos satisfecho tu petición, puedes presentar una reclamación a la Agencia Española de Protección de Datos en el apartado de su web: https://sedeagpd.gob.es/sede-electronica-web/vistas/formReclamacionDerechos/reclamacionDerechos.jsf",
    },

    { type: "h2", text: "9. Enlaces a otras webs" },
    {
      type: "p",
      text: "Esta política de privacidad sólo se aplica a los datos personales recabados a través de nuestra web, pero esta web contiene enlaces a otras páginas web por lo que el FAMOS no es responsable de las prácticas de privacidad de esas otras webs.",
    },
    {
      type: "p",
      text: "Es decir, al pinchar en uno de estos enlaces están abandonando nuestra web por lo que deberías leer las políticas de privacidad de esas otras webs que recaben datos personales.",
    },
    {
      type: "p",
      text: "Si quieres más información, la Agencia Española de Protección de Datos ha editado una guía del ciudadano, puedes acceder en: http://www.agpd.es/portalwebAGPD/canaldocumentacion/publicaciones/common/Guias/GUIA_CIUDADANO.pdf",
    },
  ],
};

export const cookies: LegalDoc = {
  title: "Política de cookies",
  published:
    "Primera publicación: 21 Mayo 2018 / Modificado y actualizado: 31 Enero 2019",
  blocks: [
    {
      type: "p",
      text: "La mera visita de nuestra web no supone que nos estés facilitando dato personal alguno ni estás obligado a ello.",
    },
    {
      type: "p",
      text: "Sin embargo, hemos de informarte que el Restaurante EL FAMOS SL no hace uso o activa diferentes cookies.",
    },
    {
      type: "p",
      text: "No obstante en el supuesto de que en un futuro podamos utilizarlas para poder ofrecerte un mejor servicio a continuación detallamos que es y que supone el uso de cookies.",
    },

    { type: "h2", text: "1. ¿Qué es una cookie?" },
    {
      type: "p",
      text: "Entendemos por cookies el conjunto de caracteres que se almacenan en el disco duro o en la memoria temporal del ordenador de un usuario cuando accede a las páginas de determinados sitios web.",
    },

    { type: "h2", text: "2. ¿Qué tipos de cookies existen?" },
    {
      type: "p",
      text: "Existen diferentes tipos de cookies, dependiendo del servicio que prestan. Según la finalidad para la que se traten los datos obtenidos a través de las cookies, podemos distinguir entre:",
    },
    {
      type: "ul",
      items: [
        "Cookies técnicas: aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.",
        "Cookies de personalización: Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.",
        "Cookies de análisis: Son aquéllas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.",
        "Cookies publicitarias: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.",
        "Cookies de publicidad comportamental: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.",
      ],
    },

    { type: "h2", text: "3. ¿Qué nivel de intrusión producen?" },
    {
      type: "p",
      text: "En función del tipo de cookies utilizadas, también se obtienen diferentes tipos de datos, y por lo tanto, el nivel de intrusión es variable. Podemos establecer tres niveles de intrusión:",
    },
    {
      type: "ul",
      items: [
        "Nivel 1 o cookies no intrusivas: son cookies de inicio de sesión en sitios donde existen usuarios registrados, carritos de la compra, preferencias de visualización... son inherentes al sistema y su bloqueo provocaría no poder usar los servicios solicitados. (Técnicas, de personalización)",
        "Nivel 2 o mínimamente intrusivas: son cookies de uso propio vinculadas a servicios de terceros, como por ejemplo, las analíticas y estadísticas. Un ejemplo pueden ser las cookies usadas por Google Analytics o Yahoo Web Analytics. (de análisis)",
        "Nivel 3 o moderadamente intrusivas: proporcionadas, administradas y de uso de terceros con el fin de obtener datos para emplazamientos publicitarios (banners) o el uso de contenido de carácter social (plugin de redes sociales) y que deben estar autorizadas expresamente por el usuario. En el caso de las cookies de carácter social, el consentimiento se hace en los propios sitios de las redes sociales. (Publicitarias, de publicidad comportamental)",
      ],
    },

    { type: "h2", text: "4. ¿Qué cookies recogería nuestra web?" },
    {
      type: "p",
      text: "El usuario aceptaría el uso de cookies y seguimientos de IPs. Nuestro analizador de tráfico del sitio web utilizaría cookies y seguimientos de IPs que permiten recoger datos a efectos estadísticos como: fecha de la primera visita, número de veces que se ha visitado, fecha de la última visita, URL y dominio de la que proviene, explorador utilizado y resolución de la pantalla.",
    },
    {
      type: "p",
      text: "Solamente utilizaremos las cookies necesarias para prestar el servicio, y el nivel de intrusión es el mínimo posible. Además de estas cookies, pueden existir cookies de terceros, generadas por el propio navegador, sistema operativo, herramientas de seguimiento de tráfico, etc.",
    },
    {
      type: "p",
      text: "En cualquier caso, estas cookies son NO INTRUSIVAS pero no podemos especificarlas todas ya que depende desde qué sistema operativo o navegador acceda el usuario a la web, si en algún momento detectamos la presencia de cookies con un PERFIL ALTO de intrusión, te informaremos debidamente, solicitando de forma expresa que aceptes que las utilicemos durante tu navegación.",
    },

    {
      type: "h2",
      text: "5. ¿Puedo configurar el navegador para impedir la instalación de cookies?",
    },
    {
      type: "p",
      text: "Si, tienes la opción de configurar tu navegador para ser avisado en pantalla de la recepción de cookies y para impedir la instalación de cookies en tu disco duro, si bien, no te lo recomendamos ya que es posible que pierda parte de sus funcionalidades, no puedas acceder a diferentes partes de la web o aprovecharte de alguno de nuestros servicios, y porque, a grandes rasgos una de las ventajas es la comodidad de no tener que incluir tus datos cada vez que entres en tu perfil en nuestra web.",
    },
    {
      type: "p",
      text: "La forma en que debes configurarlo dependerá de las características de tu navegador. Puedes restringir, bloquear o borrar las cookies de cualquier página web, a través de tu navegador, consultando las instrucciones de Google Chrome, Firefox, Internet Explorer o Safari.",
    },
    {
      type: "p",
      text: "En el caso de las cookies activadas por la herramienta Google Analytics os facilitamos la información de estas cookies de la propia web del programador: https://www.google.es/intl/es/policies/technologies/types/",
    },
    {
      type: "p",
      text: "En el caso de las cookies de redes sociales externas que se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales y que se generan únicamente para los usuarios de dichas redes sociales, las condiciones de utilización de estas cookies y la información recopilada se regulan por la política de privacidad de la plataforma social correspondiente (LinkedIn, Facebook).",
    },
  ],
};

/** Data-protection clause shown beside the contact form on contacto.html. */
export const formDataClause =
  "De acuerdo con lo establecido por la Ley Orgánica 15/1999, le informamos que los datos obtenidos de este formulario serán incorporados a un fichero automatizado bajo la responsabilidad de CASA EL FAMOS SL con la finalidad de atender sus consultas y remitirle información relacionada que pueda ser de su interés. Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición mediante un escrito a nuestra dirección IGLESIA DE VERA 14 46022, VALENCIA. Mientras no nos comunique lo contrario, entenderemos que sus datos no han sido modificados, que usted se compromete a notificarnos cualquier variación y que tenemos su consentimiento para utilizarlos para las finalidades mencionadas. El envío de estos datos implica la aceptación de esta cláusula.";
