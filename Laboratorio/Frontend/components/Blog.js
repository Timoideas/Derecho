import style from './Blog.module.css';
import { Content, Grid, Video } from 'components/Resources/Timoideas';
import BlogContentType from './Blog/BlogContentType';
import Post from './Blog/Post';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import VideosJson from 'public/json/Videos.json';
function Blog() {
  const router = useRouter();
  let contentType = router.query.content;
  const refVideo = useRef();
  const refMoreContent = useRef();
  const playIcon = (
    <svg
      width='60'
      height='60'
      viewBox='0 0 88 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginLeft: '1vh' }}
    >
      <path
        d='M82.5 40.4737C89.8333 44.7076 89.8333 55.2924 82.5 59.5263L16.5 97.6314C9.16665 101.865 -4.92072e-06 96.5729 -4.55058e-06 88.1051L-1.21932e-06 11.8949C-8.49184e-07 3.42706 9.16667 -1.8653 16.5 2.3686L82.5 40.4737Z'
        fill='#fafafa'
      />
    </svg>
  );
  const pauseIcon = (
    <svg
      width='60'
      height='60'
      viewBox='0 0 156 209'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='67' height='209' rx='31' fill='#fafafa' />
      <rect x='89' width='67' height='209' rx='31' fill='#fafafa' />
    </svg>
  );
  const [Player, setPlayer] = useState(false);
  const [SoundMuted, setSoundMuted] = useState(false);

  let { content, source } = router.query;
  const [GridSize, setGridSize] = useState('GridVideo');
  useEffect(() => {
    setGridSize(
      content === 'video'
        ? style.GridVideo
        : content === 'podcast'
        ? style.GridPodcast
        : style.GridArticulo
    );
  }, [content]);
  const togglePlayer = () => {
    setPlayer(!Player);
    Player ? refVideo.current.play() : refVideo.current.pause();
  };
  // Video Duration and CurrentTime States
  const [CurrentTimeVideo, setCurrentTimeVideo] = useState(0);
  const [DurationTimeVideo, setDurationTimeVideo] = useState(0);
  useEffect(() => {
    setDurationTimeVideo(refVideo.current.duration);
    return () => {};
  }, []);
  // Estados de Reproductor y Sonido de Video
  const [VideoValue, setVideoValue] = useState(0);
  const [SoundValue, setSoundValue] = useState(0);
  useEffect(() => {
    refVideo.current.play();
    refVideo.current.volume = 0.1;
    setSoundValue(refVideo.current.volume * 100);
    setVideoValue(refVideo.current.currentTime);
  }, []);
  // Controladores de Volumen
  const handlerVolume = (e) => {
    if (e.target.value <= 1) {
      setSoundMuted(true);
      refVideo.current.volume = 0;
      setSoundValue(0);
    } else {
      setSoundMuted(false);
      setSoundValue(e.target.value);
      refVideo.current.volume = e.target.value / 100;
    }
  };
  const handlerMute = () => {
    setSoundMuted(!SoundMuted);
    refVideo.current.volume = SoundMuted ? SoundValue / 100 : 0;
  };
  // Controladores de Avance y Retroceso
  const handlerBack = () => {
    refVideo.current.currentTime -= 5;
  };
  const handlerForward = () => {
    refVideo.current.currentTime += 5;
  };
  // Controladores de Tiempo de Reproducción
  const handlerCurrentTime = (e) => {
    refVideo.current.currentTime =
      (e.target.value * refVideo.current.duration) / 100;
    setVideoValue(e.target.value);
  };
  const handlerPlayCurrentTime = (e) => {
    setVideoValue((e.target.currentTime / e.target.duration) * 100);
  };
  // Get Time
  const VideoTimeHandler = (time) => {
    var minute = parseInt((time % 3600) / 60);
    if (minute < 10) {
      minute = '0' + minute;
    }
    var second = Math.ceil(time % 60);
    if (second < 10) {
      second = '0' + second;
    }
    var fullTime = minute + ':' + second;
    return fullTime;
  };
  // Video Object State
  const [VideoData, setVideoData] = useState({
    _id: '2',
    title: 'Vamonos a Marte',
    duracion: '2',
    url: 'videos/Marte.webm',
    banner: 'videos/Marte.webm',
    año: '2020',
    nuevo: false,
  });
  const handlerVideoData = (data) => {
    setVideoData(data);
    refVideo.current.play();
  };
  return (
    <Content flex={1} className={style.Blog}>
      <Content center flex={2} className={style.MediaContainer}>
        <BlogContentType />
        <Content center flex={1} className={style.Screen}>
          <div className={style.ScreenEvents}>
            {/* Video o Banner */}
            <div className={style.PlayPauseContainer}>
              <div className={style.PlayPause} onClick={togglePlayer}>
                {Player ? playIcon : pauseIcon}
              </div>
            </div>
          </div>
        </Content>
        <Content center flex={1} className={style.ControlesContainer}>
          <Content center flex={1} row>
            <div className={style.CompartirContainer}>
              <div className={style.CompartirTitle}>
                Compartir este {contentType} en:
              </div>
              <div className={style.Redes}>
                <a
                  href='https://www.facebook.com/sharer/sharer.php?u=https://lab.timoideas.com/?focus=blog&content=video'
                  target='_blank'
                >
                  <div className={style.CompartirFB}>Facebook</div>
                </a>
                <a
                  href='https://twitter.com/intent/tweet?url=https://lab.timoideas.com/?focus=blog&content=video&text=Laboratorio'
                  target='_blank'
                >
                  <div className={style.CompartirTT}>Twitter</div>
                </a>
              </div>
            </div>
            <div className={style.Controles}>
              <div className={style.Speed}>
                <div>
                  <svg
                    viewBox='0 0 81 93'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={handlerBack}
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M26.8693 12.3038C22.8693 14.6132 22.8693 20.3867 26.8693 22.6961L45.6193 33.5215C49.6193 35.8309 54.6193 32.9441 54.6193 28.3253V23.6788C62.5281 27.3425 68.8779 33.9618 71.7781 42.6516C77.3696 59.4054 68.0863 77.7069 50.9519 84.3466C33.2643 89.3287 14.8501 80.271 9.25859 63.5173C5.625 52.6299 8.27291 41.089 15.2749 32.5196C15.5873 32.4793 15.9011 32.4082 16.2122 32.3043C18.6785 31.4812 20.0437 28.9137 19.2614 26.5696C18.479 24.2255 15.8455 22.9926 13.3792 23.8157C11.4257 24.4676 10.1631 26.2139 10.1111 28.0768C1.45332 38.426 -1.86528 52.4932 2.56066 65.7546C9.32585 86.0251 31.6893 96.9335 53.0796 90.7216C73.9131 82.8415 85.2424 60.6883 78.4772 40.4178C74.6028 28.8091 65.6127 20.2709 54.6193 16.2605V6.67466C54.6193 2.05585 49.6193 -0.830887 45.6193 1.47851L26.8693 12.3038ZM35.4596 65.5781C36.608 66.1055 37.9029 66.3691 39.3443 66.3691C41.9811 66.3691 43.985 65.5898 45.3561 64.0313C46.7389 62.4727 47.4303 60.4102 47.4303 57.8438C47.4303 55.207 46.7506 53.1094 45.3912 51.5508C44.0436 49.9922 42.192 49.2246 39.8365 49.2481C38.9693 49.2715 38.2018 49.418 37.5338 49.6875C36.8775 49.9453 36.2858 50.2734 35.7584 50.6719L36.5846 43.4824H44.2311L44.565 45.4688H47.1666V40.4063H33.649L32.1725 54.4512L35.0553 54.75C35.3365 53.9063 35.7818 53.2793 36.3912 52.8691C37.0123 52.459 38.0025 52.2539 39.3619 52.2539C40.8033 52.2539 41.9283 52.7813 42.7369 53.8359C43.5572 54.8789 43.9674 56.2266 43.9674 57.8789C43.9674 59.6719 43.5631 61.084 42.7545 62.1152C41.9459 63.1465 40.8092 63.6621 39.3443 63.6621C38.0787 63.6621 37.0416 63.2754 36.233 62.502C35.4361 61.7285 35.0377 60.6504 35.0377 59.2676H31.9088L31.8736 59.3731C31.8385 60.9082 32.1432 62.1973 32.7877 63.2402C33.4322 64.2715 34.3229 65.0508 35.4596 65.5781Z'
                      fill='#fafafa'
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    viewBox='0 0 81 93'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={handlerForward}
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M54 12.3038C58 14.6132 58 20.3867 54 22.6961L35.25 33.5215C31.25 35.8309 26.25 32.9441 26.25 28.3253V23.6788C18.3412 27.3425 11.9914 33.9618 9.0912 42.6516C3.49969 59.4054 12.7829 77.7069 29.9173 84.3466C47.6049 89.3287 66.0192 80.271 71.6107 63.5173C75.2443 52.6299 72.5964 41.089 65.5944 32.5196C65.282 32.4793 64.9682 32.4082 64.6571 32.3043C62.1907 31.4812 60.8256 28.9137 61.6079 26.5696C62.3902 24.2255 65.0238 22.9926 67.4901 23.8157C69.4436 24.4676 70.7062 26.2139 70.7581 28.0768C79.416 38.426 82.7346 52.4932 78.3086 65.7546C71.5434 86.0251 49.18 96.9335 27.7897 90.7216C6.95613 82.8415 -4.3731 60.6883 2.39209 40.4178C6.26644 28.8091 15.2566 20.2709 26.25 16.2605V6.67466C26.25 2.05586 31.25 -0.830885 35.25 1.47852L54 12.3038ZM35.291 65.5781C36.4395 66.1055 37.7344 66.3691 39.1758 66.3691C41.8125 66.3691 43.8164 65.5898 45.1875 64.0312C46.5703 62.4726 47.2617 60.4101 47.2617 57.8437C47.2617 55.207 46.582 53.1094 45.2227 51.5508C43.875 49.9922 42.0234 49.2246 39.668 49.248C38.8008 49.2715 38.0332 49.418 37.3652 49.6875C36.709 49.9453 36.1172 50.2734 35.5898 50.6719L36.416 43.4824H44.0625L44.3965 45.4687H46.998V40.4062H33.4805L32.0039 54.4512L34.8867 54.75C35.168 53.9062 35.6133 53.2793 36.2227 52.8691C36.8438 52.459 37.834 52.2539 39.1934 52.2539C40.6348 52.2539 41.7598 52.7812 42.5684 53.8359C43.3887 54.8789 43.7988 56.2265 43.7988 57.8789C43.7988 59.6719 43.3945 61.084 42.5859 62.1152C41.7773 63.1465 40.6406 63.6621 39.1758 63.6621C37.9102 63.6621 36.873 63.2754 36.0645 62.5019C35.2676 61.7285 34.8691 60.6504 34.8691 59.2676H31.7402L31.7051 59.373C31.6699 60.9082 31.9746 62.1973 32.6191 63.2402C33.2637 64.2715 34.1543 65.0508 35.291 65.5781Z'
                      fill='#fafafa'
                    />
                  </svg>
                </div>
              </div>
              <div className={style.Sound}>
                <div>
                  <svg
                    viewBox='0 0 97 97'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={handlerMute}
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d={
                        SoundMuted
                          ? 'M2.37166 85.786C-0.0802002 88.2378 -0.0802002 92.2131 2.37167 94.6649C4.82353 97.1168 8.79878 97.1168 11.2506 94.6649L94.5183 11.3973C96.9702 8.94541 96.9702 4.97016 94.5183 2.51829C92.0664 0.0664139 88.0912 0.0664139 85.6393 2.51829L2.37166 85.786ZM47.778 85.2134L36.8804 76.1928L57.5879 55.4853L57.6153 79.1311C57.6229 85.7096 52.3306 88.9818 47.778 85.2134ZM63.1723 63.83V49.9009L76.9927 36.0805C77.9256 38.4481 78.4381 41.0273 78.4381 43.7262C78.4381 53.3097 71.9765 61.3839 63.1723 63.83ZM86.5798 43.7262C86.5798 38.7448 85.3241 34.0568 83.1119 29.9613L88.6939 24.3793C92.1919 29.9938 94.2127 36.624 94.2127 43.7262C94.2127 62.0576 80.75 77.2445 63.1723 79.9392V72.1915C76.5129 69.5833 86.5798 57.8304 86.5798 43.7262ZM63.1723 7.51319C65.9892 7.94501 68.7003 8.69767 71.2674 9.73264L65.2519 15.7481C64.5685 15.561 63.8749 15.3982 63.1723 15.2608V7.51319ZM57.5367 11.3643L57.5507 23.4493L10.9196 70.0804C4.72885 69.0846 0 63.7175 0 57.2459V29.7924C0 22.6127 5.8203 16.7924 13 16.7924H28.747L46.4546 2.19102C50.9444 -1.5111 57.5281 3.93861 57.5367 11.3643Z'
                          : 'M57.5367 10.3643C57.5281 2.93861 50.9444 -2.51112 46.4546 1.19102L28.747 15.7924H13C5.8203 15.7924 0 21.6127 0 28.7924V56.2459C0 63.4256 5.8203 69.2459 13 69.2459H29.6961L47.778 84.2133C52.3306 87.9818 57.6229 84.7096 57.6153 78.1311L57.5367 10.3643ZM94.2127 42.7262C94.2127 61.0575 80.75 76.2445 63.1723 78.9392V71.1915C76.5129 68.5833 86.5798 56.8304 86.5798 42.7262C86.5798 28.622 76.5129 16.8691 63.1723 14.2608V6.51318C80.75 9.20789 94.2127 24.3948 94.2127 42.7262ZM78.4381 42.7262C78.4381 52.3097 71.9765 60.384 63.1723 62.83V22.6223C71.9765 25.0684 78.4381 33.1427 78.4381 42.7262Z'
                      }
                      fill='#fafafa'
                    />
                  </svg>
                </div>
                <div className={style.SoundController}>
                  <input
                    type='range'
                    className={style.SoundSlider}
                    onChange={handlerVolume}
                    value={SoundMuted ? 0 : SoundValue}
                  />
                </div>
              </div>
            </div>
          </Content>
          <Content center flex={2} className={style.DetallesContainer}>
            <div className={style.Title}>{VideoValue.title}</div>
            <div className={style.Detalles}>
              <div className={style.Timeline}>
                <label></label>
                <input
                  type='range'
                  className={style.VideoSlider}
                  onChange={handlerCurrentTime}
                  value={VideoValue}
                />
              </div>
              <div className={style.DuracionContainer}>
                <div className={style.Duracion}>
                  {`${VideoTimeHandler(DurationTimeVideo)} / ${'G)'}`}
                </div>
                <div className={style.Nuevo}>
                  <div>Nuevo</div>
                </div>
              </div>
            </div>
          </Content>
        </Content>
        <Content center className={style.BannerContainer}>
          <div className={style.Banner} onClick={togglePlayer}>
            <video
              ref={refVideo}
              src={VideoData.url}
              style={{ pointerEvents: 'visible' }}
              onTimeUpdate={handlerPlayCurrentTime}
              onEnded={() => {
                refMoreContent.current.scrollIntoView();
                setPlayer(true);
              }}
            />
          </div>
        </Content>
      </Content>
      <Content className={style.PostContainer}>
        <div className={style.Parallax}></div>
        <div className={style.TitleContentContainer} ref={refMoreContent}>
          <h3>Más contenido</h3>
        </div>
        <Grid gap={2} className={`${style.Grid} ${GridSize}`} columns={[0, 5]}>
          {VideosJson.map((video) => (
            <Post key={video._id} handlerVideoData={handlerVideoData}>
              {video}
            </Post>
          ))}
        </Grid>
      </Content>
    </Content>
  );
}
export default Blog;
