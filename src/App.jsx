import React from 'react'
import logo from '../Logo.png'

const services = [
  {
    title: 'Clinica veterinaria',
    description:
      'Atencion profesional con enfoque preventivo, diagnosticos precisos y acompanamiento humano en cada etapa de la salud de tu mascota.',
    items: ['Consultas generales', 'Vacunacion y desparasitacion', 'Urgencias y control medico'],
  },
  {
    title: 'Estetica canina',
    description:
      'Banamos, cuidamos y engreimos a tu mascota con productos de calidad y protocolos que reducen el estres durante la sesion.',
    items: ['Bano y grooming profesional', 'Cortes segun raza o estilo', 'Spa e higiene especializada'],
  },
]

const gallery = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB64fShM7WXaIvAL92rUUBt5pJl8XEw17hoLwRQ_Qa7seNSsfLJh8ftGfyIuNZqpmaNJDzlfcV76AMI7gN1aLQawDsKK7-RZGidSCqalE_LNBUGtZJGBSYmpkNN05nXL1euyLScc-cl_Z0_uCmSOu_pBxRynzHg9SM6tcfS_Hq_lOV-O2zoO8wIishiZ-WGH8O4IJvq5bje8eL81RsCJqghsNwnWrCBjv0qKbIV5KsmHnbc3ADjQPFCj6uUHNNkIRW40mTgzSaEpzcT',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuArU0yHOEshDHE96ONUw9qHRkNS5wNZJJgdEKQNHOk5t6irAkOjAH0C2VKT-k8Ku5AL8ilu7GSfgrne16mOOgCvcCbcz95cZGm8vO8MA8YDxWD8glaxFgSptKkPQ090rr6G6ZwrPVrE1sd9TL-4jKScuZUF8Jq4NJwsQu7Oafwx6P2cnonAjjBvh3zWLIbwXxHszpkw4YgZNKUeFmiABqNWZVE8FLHAZj8xY8sy6fPgJPMCREV-WB83DYaWR4idh-wKpWq1jdiXLpoJ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA7VP49tMUKaPU6Rc0m33XUWhpQqo9EYggS-keUkANkkV2MZaTKPtCScTQqwIuQwd-ZW6QU8cnPJw2J5fSwLkB2YNI26nnTF1VvLvo9JOjtJEIIlQ9DwFzyEqkXbb5xNpiEhIrdMGRRzGR8S3hfuMLVk7ERQLFb-cBgiVH-5v7LPJOhTPZkV0fkHzW4W3D41xtZQqtUJJmT-8GC4ViBmLc7Z3ug8z4dYo2hGqLAtZYqJCHR-s3FzyPzCsW4nqh6uyeNeeFebiHsZABb',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAOjJ1nzKVU4J31axYxeP0s8KnzN_8A-6MIAQiFfFAUyl32OHHxgckkfD3sgUttuvUVj8CoDMkluRQIQMXhOmgMsfacvUIQkeiEG5vv6yavLH6dpeYFQ7a5W-kQYkNRHy99hKYQYaFDBlSv00dLYplfFz6Vv8Gwxv2zKnevEXp4YYMDMhq5Q6Ze5OelMeRCsBUWzlFmCBeXi3Hgpm-9CaR8p5X9Sc8c5FCGRZc-MvwVybWt1QLLhAULJw2W49L8KDcO3mE9e1wY5b00',
]

const testimonials = [
  {
    name: 'Maria G.',
    pet: 'duena de Toby',
    text: 'Lleve a mi perrito por una urgencia y me atendieron con muchisima calidez. Todo fue claro, rapido y muy profesional.',
  },
  {
    name: 'Carlos R.',
    pet: 'dueno de Luna',
    text: 'El servicio de estetica es excelente. Mi mascota sale tranquila, limpia y feliz. Se nota que aman lo que hacen.',
  },
  {
    name: 'Lucia F.',
    pet: 'duena de Max',
    text: 'Afrivet se siente como una segunda casa. Siempre explican todo con paciencia y cuidan cada detalle.',
  },
]

const locations = [
  {
    name: 'Los Olivos',
    city: 'Lima, Peru',
    phone: '986068412',
    whatsapp: '51986068412',
  },
  {
    name: 'Comas',
    city: 'Lima, Peru',
    phone: '983166007',
    whatsapp: '51983166007',
  },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M19.11 17.17c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.45-1.73-1.62-2.02-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.15.19 1.92 2.94 4.65 4.12.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.18-.55-.33Z" />
      <path d="M16.03 3.2c-7.02 0-12.71 5.69-12.71 12.71 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.69-1.76a12.75 12.75 0 0 0 6.14 1.57h.01c7.02 0 12.72-5.69 12.72-12.71 0-3.4-1.32-6.6-3.73-9.01A12.62 12.62 0 0 0 16.03 3.2Zm0 23.25h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.23-3.97 1.04 1.06-3.87-.25-.4a10.5 10.5 0 1 1 8.91 4.93Z" />
    </svg>
  )
}

function App() {
  const whatsappUrl = 'https://wa.me/51986068412'

  return (
    <>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp a la sede Los Olivos">
        <WhatsAppIcon />
      </a>

      <header className="site-header">
        <div className="container nav">
          <a href="#inicio" className="brand">
            <img className="brand-logo" src={logo} alt="Afrivet Clinica Veterinaria" />
            <strong className="brand-title">Afrivet</strong>
          </a>

          <nav className="menu">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#galeria">Galeria</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="button button-primary button-small" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar cita
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <img
            className="hero-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6YTZZ28ae9w4nm3shR8PKdT7SjKmkOEsDLZGV4McELv1dJJMG2T1Hqs3DWeOev7aZ7nIzmRrgvK0IzElA1sxjPtR_as1hdap_RL0lwTv9f70jO_zrV4aX5P__wQenv8rqJaxmApICQyymsFY6WL7RGQZ_4LYtomb4LQ_ILyePiFMRhnUE34YM2PEVXe0gGAGNLywRDGbBB4hN-ZyKeK7C9vEiZ0N2vnk3cdFaSQa97mwqRsMfuxDHnLblCZHgae1-YLVqpCkNz5Co"
            alt="Mascotas en un entorno veterinario calido y profesional"
          />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-float">Professional Pet Care</p>
              <h1>Somos un segundo hogar para nuestras mascotas</h1>
              <p className="lead">
                Atendemos con experiencia, empatia y espacios pensados para que cada visita sea tranquila para tu mascota y para ti.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Agendar por WhatsApp
                </a>
                <a className="button button-secondary" href="#servicios">
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="servicios">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">Nuestros servicios</p>
              <h2>Atencion integral para el bienestar de tu mascota</h2>
            </div>
            <div className="cards two-columns">
              {services.map((service) => (
                <article className="card service-card" key={service.title}>
                  <div className="card-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="nosotros">
          <div className="container split">
            <div className="media-frame">
              <div className="media-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvoM_Y1XIo8FlGeMw0Dn5KmM_qtzMZMA1ew4iabflScrJ8-J8HoZFErAJMBU_JqFbdMAh9sa_Ba3av4UWVqSGzZ3dEtBU2HjrIbx1iS9kyW1PRHh2tugibtd5JGsFAW3juRCJKbgrsmIb03WXWmRKv87YDqS9EteD_pmxtarHsIg0gsJXo6UzSTQAx4FV19OUSvP1nWGXVpCPXog8r9qxWmjdTOEKpqyagmcqE8nb81plw1RjmVlktF1zi1lcRv4pz78AcCsXVIXOx"
                  alt="Veterinario atendiendo con cuidado a una mascota"
                />
              </div>
            </div>
            <div className="copy-block">
              <p className="eyebrow">Nuestra filosofia</p>
              <h2>Un servicio profesional con cercania real</h2>
              <p>
                En Afrivet combinamos precision clinica, trato humano y ambientes calidos para que cada mascota reciba atencion segura y sin estres innecesario.
              </p>
              <div className="stats">
                <div>
                  <strong>15+</strong>
                  <span>Anos de experiencia</span>
                </div>
                <div>
                  <strong>5k+</strong>
                  <span>Mascotas atendidas</span>
                </div>
              </div>
              <blockquote>
                No solo cuidamos la salud de tu mascota, tambien cuidamos la tranquilidad de toda la familia.
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section section-light" id="galeria">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">Galeria</p>
              <h2>Nuestros espacios y mascotas felices</h2>
            </div>
            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <figure className={`gallery-item item-${index + 1}`} key={image}>
                  <img src={image} alt={`Imagen destacada de Afrivet ${index + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Testimonios</p>
              <h2>Lo que dicen nuestras familias</h2>
            </div>
            <div className="cards three-columns">
              {testimonials.map((item) => (
                <article className="card testimonial-card" key={item.name}>
                  <div className="stars">★★★★★</div>
                  <p>{item.text}</p>
                  <div className="testimonial-author">
                    <div className="avatar">{item.name.charAt(0)}</div>
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.pet}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <p className="eyebrow light">Contactanos hoy</p>
              <h2>Tu mascota necesita atencion con confianza y calidez</h2>
              <p>
                Escríbenos por WhatsApp o llama a la sede mas cercana para reservar una cita.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp Los Olivos
                </a>
                <a className="button button-outline-light" href="tel:983166007">
                  Llamar a Comas
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contacto">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="brand">
              <img className="brand-logo footer-logo" src={logo} alt="Afrivet Clinica Veterinaria" />
            </a>
            <p>Somos un segundo hogar para nuestras mascotas, con atencion cercana y profesional en Lima.</p>
          </div>

          <div>
            <h3>Servicios</h3>
            <ul className="footer-list">
              <li>Consulta medica</li>
              <li>Vacunacion</li>
              <li>Estetica canina</li>
              <li>Control preventivo</li>
            </ul>
          </div>

          <div>
            <h3>Sedes</h3>
            <div className="location-list">
              {locations.map((location) => (
                <a
                  className="location-card"
                  href={`https://wa.me/${location.whatsapp}`}
                  key={location.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{location.name}</strong>
                  <span>{location.city}</span>
                  <span>{location.phone}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Horarios</h3>
            <ul className="footer-list">
              <li>Lunes a viernes: 9:00 - 19:00</li>
              <li>Sabados: 10:00 - 15:00</li>
              <li>Atencion prioritaria segun disponibilidad</li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>Afrivet 2026. Todos los derechos reservados.</span>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp Los Olivos: 986068412
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
