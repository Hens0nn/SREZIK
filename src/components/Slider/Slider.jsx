import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=5d08f76705419a7df6264036e971efb71c2e96245ae9a323-10236784-images-thumbs&n=13"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=590474c0f2755d16918b9b2fd437458ae7debad5-4285843-images-thumbs&n=13"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=85076282526303c31c117e94fe72f0c1_l-5299516-images-thumbs&n=13"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=ad9b5be70e1f1d7673cd6fa9789a281b3fef55081fd7c534-12190868-images-thumbs&n=13"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=5d08f76705419a7df6264036e971efb71c2e96245ae9a323-10236784-images-thumbs&n=13"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=5d08f76705419a7df6264036e971efb71c2e96245ae9a323-10236784-images-thumbs&n=13"></img>
      </div>
    </Slider>
  );
}