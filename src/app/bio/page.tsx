'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { Block } from '@/components/sacred/Block';
import { Card } from '@/components/sacred/Card';
import { Text } from '@/components/sacred/Text';
import { Message } from '@/components/sacred/Message';

export default function Bio() {
  const { language } = useLanguage();

  return (
    <Block maxWidth="2xl" padding="lg">
      <Card mode="left" title={language === 'en' ? 'Biography' : '経歴'}>
        <Message>
          {language === 'en' ? (
            <>
              <Text mono>
                Shiori Murayama is a Japan-native, LA-based dancer who bridges the vibrant dance scenes of Japan and America. 
                Her professional journey spans both countries, having worked with major artists in Japan including BoA, GENERATIONS, 
                and TVXQ, before making LA her home base in 2023.
              </Text>
              <Text mono>
                Since moving to LA, she's had the incredible opportunity to perform at the Super Bowl Halftime Show with Usher, 
                work with artists like Camila Cabello, LISA, and Chloe Bailey, and is currently on tour with Chinese artist JJ Lin. 
                Her earlier US credits include the Puma x Balmain live event, Pepsi's Super Bowl Commercial with Missy Elliott and H.E.R, 
                and J Balvin's "ROSA" music video.
              </Text>
              <Text mono>
                She started performing on big stages in Japan from a young age, which gave her a strong foundation in the industry. 
                Growing up, she was always drawn to American dance culture, constantly taking workshops from US choreographers whenever 
                they visited Tokyo. After high school, this passion led her to move to LA to train and assist well-known choreographers.
              </Text>
              <Text mono>
                She's most proud of staying true to her journey while inspiring others, particularly young dancers from Japan who dream 
                of performing internationally. Her story shows that with dedication, family support, and the courage to step outside 
                your comfort zone, you can create your own path in the dance world.
              </Text>
            </>
          ) : (
            <>
              <Text mono className="jp">
                Shiori Murayama は日本出身の LA を拠点とするダンサーで、日本とアメリカのダンスシーンを橋渡しする存在として活動しています。
                BoA、GENERATIONS、東方神起など日本の主要アーティストとの仕事を経て、2023年に LA を活動拠点としました。
              </Text>
              <Text mono className="jp">
                LA 移住後、Usher とのスーパーボウル・ハーフタイムショーに出演し、Camila Cabello、LISA、Chloe Bailey などの
                アーティストと共演。現在は JJ Lin のツアーに参加しています。これまでの米国での実績には、
                Puma x Balmain ライブイベント、Missy Elliott と H.E.R のペプシスーパーボウル CM、J Balvin の「ROSA」MV などがあります。
              </Text>
              <Text mono className="jp">
                幼い頃から日本の大きなステージで踊り、業界での確かな基盤を築きました。成長期を通じて常にアメリカのダンスカルチャーに
                魅了され、来日する米国のコレオグラファーのワークショップに積極的に参加。高校卒業後、その情熱に導かれ、LA に移住して
                著名なコレオグラファーのアシスタントとして研鑽を積みました。
              </Text>
              <Text mono className="jp">
                自身の道を貫きながら、国際的に活躍することを夢見る日本の若いダンサーたちにインスピレーションを与えられることを
                誇りに思っています。Shiori の歩みは、献身的な努力、家族のサポート、そして居心地の良い場所から一歩踏み出す勇気があれば、
                ダンスの世界で自分だけの道を切り開けることを示しています。
              </Text>
            </>
          )}
        </Message>
      </Card>

      <Block padding="sm">
        <Card mode="right">
          <Message>
            <Text mono>
              <a
                href="https://www.instagram.com/seeee26"
                target="_blank"
                rel="noopener noreferrer"
              >
                @seeee26
              </a>
            </Text>
          </Message>
        </Card>
      </Block>
    </Block>
  );
} 