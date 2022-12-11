import { useRouter } from 'next/router';
import style from './Post.module.css';
function Post({ children: video, handlerVideoData }) {
  const router = useRouter();
  const HandlerSource = (_id) => {
    router.push(
      `/?focus=blog&content=video&source=${_id}`,
      `/blog?content=video&source=${_id}`,
      {
        shallow: true,
      }
    );
    window.scrollTo(0, 0);
    handlerVideoData(video);
  };
  let contentType = router.query.content;
  let clase = style.Post + ' ';
  contentType === 'video ' && (clase += style.video + ' ');
  contentType === 'podcast ' && (clase += style.podcast + ' ');
  contentType === 'articulo ' && (clase += style.articulo + ' ');
  return (
    <div
      className={clase}
      onClick={() => {
        HandlerSource(video._id);
      }}
    >
      <div className={style.MiniPlay}>
        <div>
          <svg
            viewBox='0 0 73 71'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.75 20.1484C20.75 14.7598 26.5833 11.3919 31.25 14.0862L66.5 34.4378C71.1667 37.1321 71.1667 43.8679 66.5 46.5622L31.25 66.9138C26.5833 69.6081 20.75 66.2402 20.75 60.8516L20.75 20.1484Z'
              fill='#2B2929'
            />
          </svg>
        </div>
      </div>
      <div>
        <h2>{video.title}</h2>
        <label>{video.duracion} min</label>
      </div>
    </div>
  );
}
export default Post;
