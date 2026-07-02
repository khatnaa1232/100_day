import unlock2Img from '../../imports/unlock_2.png';
import unlock3Img from '../../imports/unlock_3.png';
import unlock4Img from '../../imports/unlock_4.png';
import unlock5Img from '../../imports/unlock_5.png';
import { UnlockStorySlide } from './UnlockStorySlide';
import { slide4Unlocks } from './unlockContent';

export function Slide11() {
  const [unlock2, unlock3, unlock4, unlock5] = slide4Unlocks;

  return (
    <UnlockStorySlide
      chapter="Хэн ямар саадаас хэрхэн чөлөөлөгдсөн бэ?"
      title="100 ЧӨЛӨӨЛӨЛТ 100 ӨДӨР"
      theme={{
        glowA: 'bg-[#f2b94b]/16',
        glowB: 'bg-[#2ec5ff]/14',
        glowC: 'bg-[#22c55e]/10',
      }}
      items={[
        {
          ...unlock2,
          image: unlock2Img,
          alt: 'Цаасан уул ба жижиг бизнесүүд',
          accent: '#f2b94b',
          metric: '72.4 тэрбум',
          metricLabel: 'төгрөг төлөгдөв',
        },
        {
          ...unlock3,
          image: unlock3Img,
          alt: 'Цаасан уул',
          accent: '#f97316',
          metric: '9376',
          metricLabel: 'шалгалт цуцлав',
        },
        {
          ...unlock4,
          image: unlock4Img,
          alt: 'E-business.mn-д хүсэлт илгээж буй',
          accent: '#2ec5ff',
          metric: '321',
          metricLabel: 'цахим зөвшөөрөл',
        },
        {
          ...unlock5,
          image: unlock5Img,
          alt: 'www.E-business.mn, www.licence.mn үйлчилгээ',
          accent: '#22c55e',
          metric: '146',
          metricLabel: 'бизнес шууд эхлэв',
        },
      ]}
    />
  );
}
