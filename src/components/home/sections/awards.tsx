import DeansList from '../../../assets/home/deans-list.png';
import DeansList2425S1 from '../../../assets/home/deans-list-ay2425s1.png';
import DeansList2425S2 from '../../../assets/home/deans-list-ay2425s2.png';
import CS1101S from '../../../assets/home/CS1101S.png';
import CS1231S from '../../../assets/home/CS1231S.png';
import CS2103T from '../../../assets/home/CS2103T.png';
import SPL from '../../../assets/home/SPL.png';
import CDDC from '../../../assets/home/CDDC.png';
import SPhO from '../../../assets/home/SPhO.png';
import SMO8 from '../../../assets/home/SMO8.png';
import SMO20 from '../../../assets/home/SMO20.png';
import SJPO from '../../../assets/home/SJPO.png';
import tiktokHackthon from '../../../assets/home/tiktok-hackathon.png';
import terminal from '../../../assets/home/terminal.png';
import honourStudentTutors from '../../../assets/home/honour-student-tutors.png';
import AICTF from '../../../assets/home/AI-CTF.png';
import { MouseEvent, useState, useEffect, useRef, useCallback } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setImage } from '../../../redux/modalSlice';

type Award = {
  name: string;
  description: string;
  details: Array<string>;
  img: string;
  certificate?: string;
};

const awards: Array<Award> = [
  {
    name: "Dean's List, NUS School of Computing",
    description:
      "Dean's List certificate in NUS School of Computing was awarded to students with top performance (5-10%).",
    details: ['Obtained in Semester 2 of AY 2024-2025', 'Overall GPA: 4.88'],
    img: DeansList2425S2,
    certificate:
      'https://credentials.nus.edu.sg/c778202a-1d3c-46c3-a535-4a7952a2d57d#acc.76LdmKSO',
  },
  {
    name: "Dean's List, NUS School of Computing",
    description:
      "Dean's List certificate in NUS School of Computing was awarded to students with top performance (5-10%).",
    details: ['Obtained in Semester 1 of AY 2024-2025', 'Overall GPA: 4.88'],
    img: DeansList2425S1,
    certificate:
      'https://credentials.nus.edu.sg/c778202a-1d3c-46c3-a535-4a7952a2d57d#acc.76LdmKSO',
  },
  {
    name: 'Honour List of Student Tutors',
    description:
      'The honour is awarded to tutors in recognition of their high level of commitment to, and achievement of good teaching.',
    details: ['Obtained in AY 2023-2024'],
    img: honourStudentTutors,
    certificate:
      'https://credentials.nus.edu.sg/3e71ebe3-699e-436e-9d8b-9344cc28d7ef#acc.BU4Vgm27',
  },
  {
    name: 'AI CTF 2024, top 10',
    description:
      'AI CTF is a capture-the-flag competition on AI concepts, with challenges in various domains like model inversion, data analysis, prompt injection, model fingerprinting.',
    details: ['Overall top 10', 'Shortlisted to final round'],
    img: AICTF,
  },
  {
    name: 'Terminal Fall 2023, 3rd place',
    description:
      'Terminal is an AI competition where teams code algorithms for a tower-defense game and compete in a group round-robin format.',
    details: ['Overall 3rd place with cash prize', 'Fall 2023 APAC region'],
    img: terminal,
    certificate:
      'https://www.credential.net/ed4be9a2-7057-43ec-8c10-777a9917fd3e#gs.6wfj2l',
  },
  {
    name: "Dean's List, NUS School of Computing",
    description:
      "Dean's List certificate in NUS School of Computing was awarded to students with top performance (5-10%).",
    details: ['Obtained in Semester 1 of AY 2022-2023', 'Overall GPA: 5.0'],
    img: DeansList,
    certificate:
      'https://credentials.nus.edu.sg/49219b34-3455-4734-958f-e48ce44a5b9e',
  },
  {
    name: 'Tiktok Hackathon 2023, Finalist',
    description:
      'Tiktok Hackathon was divided into 4 problem statements, and 12 best teams were shortlisted to the final round. Our team tackled problem statement 4, reshaping payment, and created an e-wallet with special features of guardian linking and integration with Stripe.',
    details: ['Shorted to final', 'Obtained in September 2023'],
    img: tiktokHackthon,
  },
  {
    name: 'Top in Software Engineering (CS2103T)',
    description:
      'Top Student certificate was awared to students with top performance in Software Engineering module (CS2103T).',
    details: [
      'Obtained in Semester 1 of AY 2023-2024',
      'Overall module score: A+',
    ],
    img: CS2103T,
    certificate:
      'https://credentials.nus.edu.sg/f67bcbf3-c840-4670-81ad-96d67206d783',
  },
  {
    name: 'Top in Programming Methodology module (CS1101S)',
    description:
      'Top Student certificate was awarded to students with top performance in Programming Methodology module (CS1101S).',
    details: [
      'Obtained in Semester 1 of AY 2022-2023',
      'Overall module score: A+',
    ],
    img: CS1101S,
    certificate:
      'https://credentials.nus.edu.sg/6954d80c-4252-435c-b3b2-30eb97f9ff09',
  },
  {
    name: 'Top in Discrete Structure module (CS1231S)',
    description:
      'Top Student certificate was awarded to students with top performance in Discrete Structure module (CS1231S).',
    details: [
      'Obtained in Semester 1 of AY 2022-2023',
      'Overall module score: A+',
    ],
    img: CS1231S,
    certificate:
      'https://credentials.nus.edu.sg/00d2b02f-4f16-4431-98fe-2f6d547a077a',
  },
  {
    name: 'Cyber Defense Discovery Camp (CDDC), 8th (Uni category)',
    description:
      "CDDC is a Capture The Flag event organised by Defense Science and Technology Agency, aimed at enhancing students' knowledge in cyber security. My team was shortlisted to the final round, and obtained 8th rank.",
    details: ['Obtained in Jun 2023'],
    img: CDDC,
    certificate:
      'https://certificates.nextid.com/certificate?id=3d39b28e-d9f0-4037-a71f-c9df35c78146',
  },
  {
    name: 'Singapore Physics League, 8th and Gold Award',
    description:
      'Students work in teams of 3-5 people to solve Physics problems and advance on the leaderboard. The problems are pitched at Physics Olympiad level, and answers are autograded. More than 100 teams participated in the competition.',
    details: [
      'Obtained in Jun 2021',
      'Team with highest score in Hwa Chong Institution',
    ],
    img: SPL,
  },
  {
    name: 'Singapore Physics Olympiad, Gold',
    description:
      'Singapore Physics Olympiad is a venue for students to showcase their knowledge and understanding in Physics. More than 200 students from schools in Singapore participate in the competition, with around 20 top students obtaining gold medal. The competition consists of two rounds, theoretical and practical rounds.',
    details: ['Obtained in Feb 2021'],
    img: SPhO,
  },
  {
    name: 'Singapore Mathematical Olympiad, Gold & 8th rank (senior section)',
    description:
      'Singapore Mathematical Olympiad is a venue for students showcase their Mathematical skills. The contest is divided into 3 sections, where senior section is for secondary students. The competition consists of two rounds, with round 1 being multiple-choice and round 2 being free-response.',
    details: ['Obtained in Aug 2018'],
    img: SMO8,
  },
  {
    name: 'Singapore Mathematical Olympiad, Gold & 20th rank (open section)',
    description:
      'Singapore Mathematical Olympiad is a venue for students showcase their Mathematical skills. The contest is divided into 3 sections, where open section is for all students of JC level or below. The competition consists of two rounds, with round 1 being multiple-choice and round 2 being free-response.',
    details: ['Obtained in Aug 2019'],
    img: SMO20,
  },
  {
    name: 'Singapore Junior Physics Olympiad, Gold',
    description:
      'Singapore Junior Physics Olympiad is a platform for secondary school students to showcase their Physics knowledge and skills. The Open section is open to secondary schools not meeting age criterion.',
    details: ['Obtained in Aug 2019'],
    img: SJPO,
  },
];

export default function Awards(): JSX.Element {
  const [count, setCount] = useState<number>(3);

  return (
    <div className="awards" id="awards">
      <div className="home-section-title">Awards and Certificates</div>
      <div className="awards-list">
        {awards.slice(0, count).map((award, awardIndex) => (
          <AwardListing award={award} key={awardIndex} />
        ))}
      </div>
      {count < awards.length && (
        <div
          className="awards-showmore"
          onClick={() => setCount((count) => count + 3)}
        >
          See more
        </div>
      )}
    </div>
  );
}

const AwardListing = ({ award }: { award: Award }): JSX.Element => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const awardDiv = useRef<HTMLDivElement>(null);
  const bottomTolerance = 200;
  const dispatch = useAppDispatch();

  const handleImageClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      dispatch(
        setImage({
          image: award.img,
          height: target.clientHeight,
          width: target.clientWidth,
          top: target.getBoundingClientRect().top,
          left: target.getBoundingClientRect().left,
        })
      );
    },
    [dispatch, award.img]
  );

  const calculateInView = useCallback<() => void>(() => {
    setIsInView(
      awardDiv.current!.getBoundingClientRect().bottom <
        window.innerHeight + bottomTolerance
    );
  }, []);

  useEffect(() => {
    calculateInView();
    window.addEventListener('scroll', calculateInView);
    return () => window.removeEventListener('scroll', calculateInView);
  }, [calculateInView]);

  return (
    <div className="award" ref={awardDiv}>
      <div className="award-image" onClick={handleImageClick}>
        <img src={award.img} alt="award certificate/medal" />
      </div>
      <div className={'award-text' + (isInView ? ' award-text-show' : '')}>
        <div className="award-name">{award.name}</div>
        <div className="award-description">{award.description}</div>
        <div className="award-details">
          {award.details.map((detail, detailIndex) => (
            <div className="award-detail" key={detailIndex}>
              <BulletListing />
              <div className="award-detail-text">{detail}</div>
            </div>
          ))}
          {award.certificate && (
            <div className="award-detail">
              <BulletListing />
              <div className="award-detail-text">
                View{' '}
                <a
                  className="award-detail-certificate"
                  href={award.certificate}
                >
                  certificate
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BulletListing = (): JSX.Element => {
  return (
    <svg height="14" width="14">
      <line x1="0" x2="12" y1="0" y2="7" />
      <line x1="0" x2="12" y1="14" y2="7" />
    </svg>
  );
};
