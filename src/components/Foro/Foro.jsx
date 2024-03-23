import React from 'react'

import './Foro.css';

import Footer from '../Footer/Footer';

function Foro() {
  return (
    <div className='Foro'>
      <div className="container">
      <div className="jumbotron">
          <h1>Foro de Comunicación - Los Robles</h1>
          <h2>Este foro es un espacio dedicado a fomentar la comunicación abierta, el intercambio de ideas y la cooperación entre todos los residentes. Aquí podrán compartir sus inquietudes, sugerencias, eventos comunitarios, y cualquier otro tema que contribuya a fortalecer nuestros lazos y mejorar nuestra calidad de vida.</h2>
      </div>
      <div className="forum-wrapper">
          <div className="categories">
              <div className="topic-title">
                  <div className="tt-title">Categoría</div>
                  <div className="tt-topic">Temas</div>
                  <div className="tt-post">Publicaciones</div>
                  <div className="tt-l-post">Última pubicación</div>
              </div>
              
              {/* Content */}
              <div className="topic-content">
                  <div className="tc-description">
                      <div className="d-title">Alerta Temprana. </div>
                      <div className="d-description">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi commodi velit
                              dicta voluptatem, </p>
                      </div>
                      <div className="mobile-info">
                          <div className="mi-topics">
                              <p>Reunión mensual de vecinos.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-posts">
                              <p>Publicación.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-lpost">
                              <p>Última Publicación</p>
                              <p>by @aldosanchez</p>
                              <p>Jueves Marzo 7, 2024 6:43p.m.</p>
                          </div>
                      </div>
                  </div>
                  <div className="tc-topic">3</div>
                  <div className="tc-post">3</div>
                  <div className="tc-l-post">
                      <div className="lp-user">by @melissadelangel</div>
                      <div className="lp-date">Miércoles Marzo 6, 2024 6:43p.m.</div>
                  </div>
              </div>
              {/*End of Content*/}
              <div className="topic-content">
                  <div className="tc-description">
                      <div className="d-title">Mesa Directiva. </div>
                      <div className="d-description">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi commodi velit
                              dicta voluptatem, </p>
                      </div>
                      <div className="mobile-info">
                          <div className="mi-topics">
                              <p>Administración de recursos.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-posts">
                              <p>Tesorería.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-lpost">
                              <p>Última Publicación.</p>
                              <p>by @dianacordero</p>
                              <p>Martes Marzo 5, 2024 6:43pm</p>
                          </div>
                      </div>
                  </div>
                  <div className="tc-topic">3</div>
                  <div className="tc-post">3</div>
                  <div className="tc-l-post">
                      <div className="lp-user">by @margaritapuebla</div>
                      <div className="lp-date">Martes Marzo 5, 2024 6:43pm</div>
                  </div>
              </div>
              <div className="topic-content">
                  <div className="tc-description">
                      <div className="d-title">Mantenimiento de áreas verdes. </div>
                      <div className="d-description">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi commodi velit
                              dicta voluptatem, </p>
                      </div>
                      <div className="mobile-info">
                          <div className="mi-topics">
                              <p>Jardineras.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-posts">
                              <p>Limpieza de Jardineras.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-lpost">
                              <p>Última Publicación.</p>
                              <p>by @melissadelangel</p>
                              <p>Lunes Marzo 4, 2024 12:25 p.m.</p>
                          </div>
                      </div>
                  </div>
                  <div className="tc-topic">3</div>
                  <div className="tc-post">3</div>
                  <div className="tc-l-post">
                      <div className="lp-user">by @aldosanchez</div>
                      <div className="lp-date">Lunes Marzo 4, 2024 7:24 p.m.</div>
                  </div>
              </div>
              <div className="topic-content">
                  <div className="tc-description">
                      <div className="d-title">Mantenimiento de Piscina.</div>
                      <div className="d-description">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi commodi velit
                              dicta voluptatem, </p>
                      </div>
                      <div className="mobile-info">
                          <div className="mi-topics">
                              <p>Horario de Limpieza..</p>
                              <p>3</p>
                          </div>
                          <div className="mi-posts">
                              <p>Compra de Químicos.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-lpost">
                              <p>Última Publicación.</p>
                              <p>by @dianacordero.</p>
                              <p>Lunes Marzo 4, 2024 5:34 p.m.</p>
                          </div>
                      </div>
                  </div>
                  <div className="tc-topic">3</div>
                  <div className="tc-post">3</div>
                  <div className="tc-l-post">
                      <div className="lp-user">by @dianacordero.</div>
                      <div className="lp-date">Lunes Marzo 4, 2024 6:22 p.m.</div>
                  </div>
              </div>
              <div className="topic-content">
                  <div className="tc-description">
                      <div className="d-title">Evento Días Santos.</div>
                      <div className="d-description">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi commodi velit
                              dicta voluptatem, </p>
                      </div>
                      <div className="mobile-info">
                          <div className="mi-topics">
                              <p>Kermes.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-posts">
                              <p>Vendimia.</p>
                              <p>3</p>
                          </div>
                          <div className="mi-lpost">
                              <p>Última Publicación.</p>
                              <p>by @aldosanchez</p>
                              <p>Domingo Marzo 3, 2024 3:27 p.m.</p>
                          </div>
                      </div>
                  </div>
                  <div className="tc-topic">3</div>
                  <div className="tc-post">3</div>
                  <div className="tc-l-post">
                      <div className="lp-user">by @aldosanchez</div>
                      <div className="lp-date">Domingo Marzo 3, 2024 9:12 a.m.</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="newPost">
        <form action="newPost.php" method="post">
          <h3>Nuevo Post</h3>
          <input type="text" name="title" placeholder="Título" className="inputTitle"/>
          <textarea name="content" cols="30" rows="10" placeholder="Escribe tu mensaje" className="inputContent"></textarea>
          <button type="submit" className="btn">Publicar</button>
        </form>
      </div>
  </div>
    </div>
  );
};
<Footer />
export default Foro
