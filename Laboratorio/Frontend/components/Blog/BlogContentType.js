import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from './BlogContentType.module.css';

const Content = ({ contentValue }) => {
  const { push } = useRouter();
  // Manejador de Rutas para Contenido
  const HandlerRouteQuery = () => {
    localStorage.Content_Nav = contentValue;
    push(
      `/?focus=blog&content=${contentValue}`,
      `/blog?content=${contentValue}`,
      { shallow: true }
    );
  };
  // Clases del Boton
  let clases = `${style.ContentButton} ${
    localStorage.Content_Nav === contentValue && style.ContentActived
  }`;
  return (
    <div className={clases} onClick={HandlerRouteQuery}>
      <h2>{contentValue}</h2>
    </div>
  );
};

function BlogContentType() {
  // Arreglo de Contenidos
  const ContentTypes = ['video', 'podcast', 'articulo'];
  return (
    <div className={style.BlogContentTypeContainer}>
      <div className={style.BlogContentType}>
        {ContentTypes.map((contentType) => (
          <Content contentValue={contentType} />
        ))}
      </div>
      <div className={style.Profile}>
        <Link href='/cuenta'>
          <a>
            <img
              alt='Imagen Alternativa'
              src='https://i.ibb.co/vPBkZMp/Jay-Alvarrez.jpg'
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
export default BlogContentType;
