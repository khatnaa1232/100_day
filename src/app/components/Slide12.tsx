import unlock6Img from '../../imports/unlock_6.png';
import unlock7Img from '../../imports/unlock_7.png';
import unlock8Img from '../../imports/unlock_8.png';
import unlock9Img from '../../imports/unlock_9.png';
import { UnlockStorySlide } from './UnlockStorySlide';
import { slide5Unlocks } from './unlockContent';

export function Slide12() {
  const [unlock6, unlock7, unlock8, unlock9] = slide5Unlocks;

  return (
    <UnlockStorySlide
      chapter="Хэн ямар саадаас хэрхэн чөлөөлөгдсөн бэ?"
      theme={{
        glowA: 'bg-[#a78bfa]/16',
        glowB: 'bg-[#38bdf8]/14',
        glowC: 'bg-[#f97316]/10',
      }}
      items={[
        {
          ...unlock6,
          image: unlock6Img,
          alt: 'Татварын онцлох 6 чөлөөлөлтийн постер',
          accent: '#a78bfa',
          metric: '2027.01.01',
          metricLabel: 'хэрэгжиж эхэлнэ',
        },
        {
          ...unlock7,
          image: unlock7Img,
          alt: 'Эмч, багш ажлаа хийж буй',
          accent: '#22c55e',
          metric: '131340',
          metricLabel: 'ажилтан чөлөөлөв',
        },
        {
          ...unlock8,
          image: unlock8Img,
          alt: 'Түлш шатахуун хийж буй, Ерөнхий сайдтай ярьж буй',
          accent: '#38bdf8',
          metric: '1.8 их наяд',
          metricLabel: 'эрсдэлээс сэргийлэв',
        },
        {
          ...unlock9,
          image: unlock9Img,
          alt: 'EXCEL Word тайлангууд давхардсан, DELETE товч',
          accent: '#f97316',
          metric: '70% / 30%',
          metricLabel: 'тайлан ба үйлчилгээ',
        },
      ]}
    />
  );
}
