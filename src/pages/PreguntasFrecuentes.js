// importacion css
import "./PreguntasFrecuentes.css";

const PreguntasFrecuentes = () => {
  return (
    <div className="QuestionContainer">
      <div className="questionDiv">
        <h5 className="question">¿Cómo puedo realizar mi compra?</h5>
        <p className="answer">
          La compra es únicamente online desde platonicaLenceria.com.ar o
          atraves de Mercado Libre
        </p>
      </div>
      <div className="questionDiv">
        <h5 className="question">¿Cómo consulto el stock de un producto para realizar mi compra?</h5>
        <p className="answer">
          Cada producto publicado cuenta con su stock actualizado. Si tu
          producto hoy no tiene stock disponible, te recomendamos que verifiques
          nuevamente en unos días, ya que nuestro stock depende de los
          proveedores, las marcas y las temporadas, por lo cual no podemos
          confirmar un plazo especifico de reposición.
        </p>
        <p className="answer">
          De todas formas, recordá que siempre hay nuevos productos disponibles
          para vos!
        </p>
      </div>
      <div className="questionDiv">
        <h5 className="question">¿Cómo consulto el detalle de los productos?</h5>
        <p className="answer">
          Cada producto publicado cuenta con una ficha de detalles, donde se
          informa material, talles, color, etc. Podés acceder a esta información
          al pie del producto elegido.
        </p>
      </div>
      <div className="questionDiv">
        <h5 className="question">¿Cómo accedo al beneficio 3 y 6 cuotas sin interés?</h5>
        <p className="answer">
          Podes abonar con 3 y hasta 6 cuotas sin interes seleccionando la
          plataforma Mercado Pago al momento de abonar tu orden de compra.
        </p>
      </div>
      <div className="questionDiv">
        <h5 className="question">¿Qué formas de pago puedo aprovechar para realizar mi compra?</h5>
        <p className="answer">
          Podés realizar el pago mediante MercadoPago o transferencia bancaria.
          El sistema de cobranza a través de tarjeta de crédito es 100% seguro.
          Los números son encriptados y no sufren ningún tipo de amenaza en
          nuestro banco de datos, siendo enviados directamente a la
          administradora de la tarjeta de crédito.
        </p>
      </div>
      <div className="questionDiv">
        <h5 className="question">¿Cómo se realizan los envíos?</h5>
        <p className="answer">
          Trabajamos con: MENSAJERÍA y OCA. Por la situacion de público
          conocimiento, OCA podría experimentar demoras mayores, que nos exceden
          completamente. Podés ver su trayecto con el link de seguimiento que se
          te envía al momento del despacho.
        </p>
      </div>
      <div className="questionDiv">
        <h5 className="question">¿Cuál es el costo de envío?</h5>
        <p className="answer">
          El costo de envío será mostrado en base al total de la compra y
          domicilio, en la confirmación de la compra, en el momento previo al
          pago. Para las compras mayores a $8000 dentro de Ciudad Autónoma de
          Buenos Aires por motomensajería o por OCA a todo el país, el envío es
          gratuito, por tiempo limitado.
        </p>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
