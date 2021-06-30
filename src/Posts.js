export default function Posts() {
  return (
    <section>
      <header className="main">
        <h1>Titulo</h1>
      </header>
      <h3>Resumen</h3>
      <div className="box">
        <p>El resumen</p>
      </div>
      <p>El Texto</p>
      <h4>Links Relacionados</h4>
      <ul className="alt">
        <li>a</li>
        <li>b</li>
      </ul>
      <h4>Tags</h4>
      <p>tags...</p>
      <h4>Autores</h4>
      <p>autores...</p>
    </section>
  );
}

/* articulos += '<section><header class="main">';
articulos += '<h1>' + obj.titulo + '</h1></header><h3>Resumen</h3><div class="box">';
articulos += '<p>' + obj.resumen + '</p></div>';
articulos += '<p>' + obj.texto + '</p><h4>Links Relacionados</h4><ul class="alt">';
$.each(obj['links-relacionados'], function(i2, link) {
    articulos += '<li>' + link + '</li>';
});
articulos += '</ul><h4>Tags</h4>';
articulos += '<p>' + obj.tags + '</p>';
articulos += '<h4>Autores</h4>';
articulos += '<p>' + obj.autor + '</p>';
articulos += '</section>' */
