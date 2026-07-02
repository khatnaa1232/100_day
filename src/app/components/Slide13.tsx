import unlock11Img from '../../imports/unlock_11.png';
import unlock12Img from '../../imports/unlock_12.png';
import { UnlockStorySlide } from './UnlockStorySlide';
import { slide6Unlocks } from './unlockContent';

export function Slide13() {
  const [, unlock11, unlock12, unlock13] = slide6Unlocks;

  return (
    <UnlockStorySlide
      chapter="Хэн ямар саадаас хэрхэн чөлөөлөгдсөн бэ?"
      theme={{
        glowA: 'bg-[#a78bfa]/15',
        glowB: 'bg-[#facc15]/12',
        glowC: 'bg-[#fb7185]/10',
      }}
      items={[
        {
          ...unlock11,
          image: unlock11Img,
          alt: 'Эмийн лаборатори',
          accent: '#fb7185',
          metric: '263',
          metricLabel: 'эм жагсаалтаас хасав',
        },
        {
          ...unlock12,
          image: unlock12Img,
          alt: 'Нарны станц, хураагуур ба байршил',
          accent: '#facc15',
          metric: '220 МВт',
          metricLabel: 'нарны станц',
        },
        {
          ...unlock13,
          image: unlock12Img,
          alt: 'Нарны станц, хураагуур ба байршил',
          accent: '#facc15',
          metric: '1072',
          metricLabel: 'нарны станц',
        },
      ]}
    />
  );
}
