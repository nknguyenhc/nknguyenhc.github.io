import {
  videoLink,
  availablePlatforms,
  projectMotivation,
  ProjectMotivationProps,
  ElaborationProps,
  techStacks,
  TechStack,
} from './data';
import { useCheckAndScrollToId } from '../../../utils/scroll';
import { useState, useEffect, useRef, useMemo, CSSProperties } from 'react';
import TooltipDesktop from '../../tooltip/desktop';
import useViewportWidth from '../../../utils/viewport';
import TooltipMobile from '../../tooltip/mobile';

export default function MatchMiner() {
  return (
    <div className="matchminer central-body">
      <div className="matchminer-title">MatchMiner</div>
      <div className="matchminer-available-platforms" id="available-platforms">
        <div>We are available on:</div>
        <div className="matchminer-available-platforms-list">
          {availablePlatforms.map(
            (availablePlatform, availablePlatformIndex) => (
              <a
                href={availablePlatform.link}
                className="matchminer-available-platforms-item"
                key={availablePlatformIndex}
              >
                <div className="matchminer-available-platforms-item-icon small-img-container">
                  <img src={availablePlatform.icon} alt="platform icon" />
                </div>
                <div className="matchminer-available-platforms-item-text">
                  {availablePlatform.text}
                </div>
              </a>
            )
          )}
        </div>
      </div>
      <MatchMinerVideo />
      <ProjectMotivation />
      <TechStacks />
    </div>
  );
}

const MatchMinerVideo = (): JSX.Element => {
  useCheckAndScrollToId('matchminer-video', 10);

  return (
    <div className="matchminer-video" id="matchminer-video">
      <iframe
        src={videoLink}
        allowFullScreen={true}
        title="Youtube intro video"
      />
    </div>
  );
};

const ProjectMotivation = (): JSX.Element => {
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const showMainList = useMemo<boolean>(() => itemIndex === -1, [itemIndex]);
  const isDesktop = useViewportWidth();
  const mainList = useRef<HTMLDivElement>(null);

  useCheckAndScrollToId('project-motivation', 10);

  useEffect(() => {
    if (!isDesktop) {
      if (!showMainList) {
        mainList.current!.animate(
          [
            {
              opacity: 1,
              transform: 'none',
            },
            {
              opacity: 0,
              transform: 'translateX(-50px)',
            },
          ],
          {
            duration: 700,
          }
        );
      } else {
        mainList.current!.animate(
          [
            {
              opacity: 0,
              tranform: 'translateX(-50px)',
            },
            {
              opacity: 1,
              transform: 'none',
            },
          ],
          {
            duration: 700,
          }
        );
      }
    }
  }, [isDesktop, showMainList]);

  return (
    <div className="matchminer-motivation" id="project-motivation">
      <div className="matchminer-label">Project motivation</div>
      <div className="matchminer-motivation-guide">
        (Click on each item to see more)
      </div>
      <div className="matchminer-motivation-body">
        <div
          className={
            'matchminer-motivation-list' +
            (!showMainList && !isDesktop
              ? ' matchminer-motivation-list-hide'
              : '')
          }
          ref={mainList}
        >
          {projectMotivation.map((motivation, motivationIndex) => (
            <ProjectMotivationItem
              motivation={motivation}
              key={motivationIndex}
              click={() => setItemIndex(motivationIndex)}
            />
          ))}
        </div>
        <div className="matchminer-motivation-list-container">
          {projectMotivation.map((motivation, motivationIndex) => (
            <ProjectElaboration
              elaboration={motivation.elaboration}
              isShow={motivationIndex === itemIndex}
              key={motivationIndex}
            />
          ))}
        </div>
        <div
          className={
            'matchminer-motivation-back-icon' +
            (showMainList ? ' matchminer-motivation-back-icon-hide' : '')
          }
          onClick={() => setItemIndex(-1)}
        >
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

function ArrowRightIcon() {
  return (
    <svg className="matchminer-motivation-arrow" height="40" width="40">
      <line x1="3" x2="37" y1="20" y2="20" />
      <line x1="30" x2="37" y1="13" y2="20" />
      <line x1="30" x2="37" y1="27" y2="20" />
    </svg>
  );
}

const ProjectMotivationItem = ({
  motivation,
  click,
}: {
  motivation: ProjectMotivationProps;
  click: () => void;
}): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const isDesktop = useViewportWidth();

  return (
    <div
      className="matchminer-motivation-item"
      onMouseLeave={() => setIsHover(false)}
      onClick={click}
    >
      <div
        className="matchminer-motivation-item-text"
        onMouseOver={() => setIsHover(true)}
      >
        {motivation.text}
      </div>
      {(isHover || !isDesktop) && <ArrowRightIcon />}
    </div>
  );
};

const ProjectElaboration = ({
  elaboration,
  isShow,
}: {
  elaboration: Array<ElaborationProps>;
  isShow: boolean;
}): JSX.Element => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShow) {
      root.current!.animate(
        [
          {
            transform: 'translateY(130%)',
            opacity: 0,
          },
          {
            transform: 'none',
            opacity: 1,
          },
        ],
        {
          duration: 700,
        }
      );
    } else {
      root.current!.animate(
        [
          {
            transform: 'none',
            opacity: 1,
          },
          {
            transform: 'translateX(70px)',
            opacity: 0,
          },
        ],
        {
          duration: 700,
        }
      );
    }
  }, [isShow]);

  return (
    <div
      className={
        'matchminer-motivation-list matchminer-motivation-list-detail' +
        (isShow ? '' : ' matchminer-motivation-list-hide')
      }
      ref={root}
    >
      {elaboration.map((detail, detailIndex) => (
        <ProjectElaborationItem
          text={detail.displayText}
          tooltipText={detail.tooltipText}
          isElaborationVisible={isShow}
          key={detailIndex}
        />
      ))}
    </div>
  );
};

const ProjectElaborationItem = ({
  text,
  tooltipText,
  isElaborationVisible,
}: {
  text: string;
  tooltipText: string;
  isElaborationVisible: boolean;
}): JSX.Element => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const isDesktop = useViewportWidth();

  return (
    <div
      className="matchminer-motivation-elaboration"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {text}
      {isElaborationVisible && isHovering && isDesktop && (
        <TooltipDesktop width={300} text={tooltipText} place="right" />
      )}
      {!isDesktop && (
        <TooltipMobile width={200} text={tooltipText} place="bottom" />
      )}
    </div>
  );
};

const TechStacks = (): JSX.Element => {
  useCheckAndScrollToId('matchminer-techstack', 0);

  return (
    <div className="matchminer-techstack" id="matchminer-techstack">
      <div className="matchminer-techstack-title">Tech Stacks</div>
      <div className="matchminer-techstack-container">
        {techStacks.map((tech, techIndex) => (
          <TechItem item={tech} key={techIndex} />
        ))}
      </div>
    </div>
  );
};

const TechItem = ({ item }: { item: TechStack }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const textDiv = useRef<HTMLDivElement>(null);
  const headerDiv = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const headerHeight = headerDiv.current!.clientHeight;
    const textHeight = textDiv.current!.clientHeight;
    setHeight(showDropdown ? headerHeight + textHeight : headerHeight);
  }, [showDropdown]);

  return (
    <div
      className="matchminer-techstack-item"
      style={{
        height: height,
      }}
    >
      <div
        className="matchminer-techstack-item-header"
        onClick={() => setShowDropdown((state) => !state)}
        ref={headerDiv}
      >
        <div className="matchminer-techstack-item-icon">
          <img src={item.icon} alt="tech stack" />
        </div>
        <div className="matchminer-techstack-item-name">{item.name}</div>
        <div className="matchminer-techstack-icon">
          <PlusIcon
            style={{
              opacity: showDropdown ? 0 : 1,
            }}
          />
          <MinusIcon
            style={{
              opacity: showDropdown ? 1 : 0,
            }}
          />
        </div>
      </div>
      <div className="matchminer-techstack-item-text" ref={textDiv}>
        {item.elaboration}
      </div>
    </div>
  );
};

const PlusIcon = ({ style }: { style?: CSSProperties }): JSX.Element => (
  <svg style={style} className="matchminer-small-icon" height="20" width="20">
    <line x1="2" x2="18" y1="10" y2="10" />
    <line x1="10" x2="10" y1="2" y2="18" />
  </svg>
);

const MinusIcon = ({ style }: { style?: CSSProperties }): JSX.Element => (
  <svg style={style} className="matchminer-small-icon" height="20" width="20">
    <line x1="2" x2="18" y1="10" y2="10" />
  </svg>
);
