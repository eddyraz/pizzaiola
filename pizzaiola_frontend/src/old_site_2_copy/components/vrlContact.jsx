import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="contact2-section section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 wow bounceInLeft" data-wow-delay="0.3s">
            <h1 className="section-title">CONTÁCTENOS</h1>
            <p className="section-subcontent mb-30">Comparta sus opiniones sobre nuestro servicio con los especialistas de la biblioteca <br/> normalmente repondemos en 24 horas</p>
            <form method="post"  className="mt-30 shake" name="contact-form" data-toggle="validator">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                    <label for="name" className="sr-only">Nombre y Apellidos</label>
                    <input type="text" placeholder="Su Nombre y Apellidos" id="name" className="form-control contact-control" name="name" required data-error="Please enter your name"/>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group">
                    <label for="email" className="sr-only">Correo Electrónico</label>
                    <input type="email" placeholder="Correo Electrónico" id="email" className="form-control contact-control" name="email" required data-error="Please enter your Email"/>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group">
                    <label for="subject" className="sr-only">Asunto</label>
                    <input type="text" placeholder="Asunto" id="msg_subject" className="form-control contact-control" name="subject" required data-error="Please enter your message subject"/>
                    <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="message" className="sr-only">Mensaje</label>
                  <textarea placeholder="Mensaje" rows="7" id="message" className="form-control" name="message" required data-error="Write your message"></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="form-group col-xs-12">
              <button className="btn btn-common btn-lg btn-block" name="submit" id="form-submit" type="submit"><i className="fa fa-envelope"></i> Enviar</button>
            </div>
          </form>
          </div>

          <div className="col-md-4 clearfix wow bounceInRight" data-wow-delay="0.4s">
            <div id="google-map-contact2"></div>
            <div className="contact-info2 mt-30">
              <h2 className="small-title">Informacion de Contacto</h2>
              <ul className="contact-info2">
                <li>
                  <p><strong><i className="fa fa-map-marker"></i> Dirección:</strong> Calle Tacón s/n entre Chacón y Mercaderes, La habana Vieja</p>
                </li>
                <li>
                  <p><strong><i className="fa fa-envelope"></i> Escríbanos:</strong> <a href="mailto:iblioteca@ccpadrevarela.org">biblioteca@ccpadrevarela.org</a></p>
                </li>
                <li>
                  <p><strong><i className="fa fa-phone"></i>Teléfono:</strong> +53-7862-6989</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
