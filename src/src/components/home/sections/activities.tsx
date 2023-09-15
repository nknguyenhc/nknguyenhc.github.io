import gamestartImage from '../../../assets/home/gamestart.jpg';
import overchargedImage from '../../../assets/home/overcharged.png';
import dreamyImage from '../../../assets/home/dreamy.png';
import spSpeedImage from '../../../assets/home/SP-speed.jpg';
import cchessBoulderImage from '../../../assets/home/cchess-boulder.jpg';
import spBowImage from '../../../assets/home/SP-bow.jpg';
import { useCallback, useEffect, useRef, useState } from 'react';
import HoverDropdown from '../../dropdown/hover-dropdown';
import useViewportWidth from '../../../utils/viewport';
import ClickDropdown from '../../dropdown/click-dropdown';

type ActivityDetail = {
    image: string,
    detail: string,
}

type Activity = {
    name: string,
    details: Array<ActivityDetail>,
};

const data: Array<Activity> = [
    {
        name: "NUS Game Development, Workshop Lead",
        details: [
            {
                image: gamestartImage,
                detail: "Lead workshops on Godot game development engine for new members in Academic Year 2023-2024, equipping members with game development skills within 4 weeks.",
            },
            {
                image: dreamyImage,
                detail: "Collaborated with group members to produce a platformer game (Guardian of the Dreamy World) using Godot engine within a less than half a year, available on itch.io.",
            },
            {
                image: overchargedImage,
                detail: "Cooperated with club member to develop bullet-hell game (Overcharged Magic) within one week using Godot engine, available on itch.io.",
            },
        ],
    },
    {
        name: "NUS Intellectual Games Club, Chinese Chess, Captain",
        details: [
            {
                image: cchessBoulderImage,
                detail: "Spearheaded training activities for club members as captain in Academic Year 2023-2024.",
            },
            {
                image: spSpeedImage,
                detail: "Coordinated with members to win second place for team category and sixth place for individual category in SP Speed Chess Competition (2023).",
            },
            {
                image: spBowImage,
                detail: "Coordinated with group members to win first place in Singapore Poly Chinese Chess Bow (2022) and third place in NUS Invitational Interschool Competition (2023)",
            },
        ],
    },
];

const dropdownItems = [
    'Game Development',
    'Chinese Chess',
];

export default function Activities(): JSX.Element {
    const [showIndex, setShowIndex] = useState<number>(0);
    const isDesktop = useViewportWidth();

    return <div id="activities" className="activities">
        <div className="home-section-title">Extra-curricular activities</div>
        <div className="activities-dropdown">
            {isDesktop ? <HoverDropdown
                items={dropdownItems.map((item) => ({
                    text: item,
                    set: setShowIndex,
                }))}
                text="Activities"
            /> : <ClickDropdown 
                items={dropdownItems.map((item) => ({
                    text: item,
                    set: setShowIndex,
                }))}
                text="Activities"
            />}
        </div>
        <div className="central-body activities-list">
            {data.map((activity, activityIndex) => (
                <ActivityElaboration
                    activity={activity}
                    isShow={showIndex === activityIndex}
                    key={activityIndex}
                />
            ))}
        </div>
    </div>;
}

const ActivityElaboration = ({ activity, isShow }: {
    activity: Activity,
    isShow: boolean,
}): JSX.Element => {
    const root = useRef<HTMLDivElement>(null);
    const [highlightIndex, setHighlightIndex] = useState<number>(1);
    const [isGoingDown, setIsGoingDown] = useState<boolean>(false);

    const highlightHandler = useCallback<(x: number) => () => void>((index) => {
        return () => {
            switch (index) {
                case (highlightIndex - 1 + activity.details.length) % activity.details.length:
                    setHighlightIndex(state => (state - 1 + activity.details.length) % activity.details.length);
                    setIsGoingDown(false);
                    break;
                case (highlightIndex + 1) % activity.details.length:
                    setHighlightIndex(state => (state + 1) % activity.details.length);
                    setIsGoingDown(true);
                    break;
                default:
                    break;
            }
        }
    }, [activity, highlightIndex]);

    useEffect(() => {
        if (isShow) {
            root.current!.animate([
                {
                    scale: 0,
                },
                {
                    scale: 1
                }
            ], {
                duration: 600
            });
        }
    }, [isShow]);

    return <div 
        className={"activities-activity" + (isShow ? "" : " activities-activity-hide")}
        ref={root}
    >
        <div className="activities-activity-header">{activity.name}</div>
        <div className="activities-activity-body">
            {activity.details.map((detail, detailIndex) => (
                <ActivityDetailElaboration 
                    detail={detail}
                    position={
                        detailIndex === (highlightIndex - 1 + activity.details.length) % activity.details.length
                        ? 'top'
                        : detailIndex === highlightIndex
                        ? 'highlight'
                        : detailIndex === (highlightIndex + 1) % activity.details.length
                        ? 'bottom'
                        : null
                    }
                    setHighlight={highlightHandler(detailIndex)}
                    isGoingDown={isGoingDown}
                    key={detailIndex}
                />
            ))}
        </div>
    </div>;
}

const ActivityDetailElaboration = ({ detail, position, setHighlight, isGoingDown }: {
    detail: ActivityDetail,
    position: 'top' | 'highlight' | 'bottom' | null,
    setHighlight: () => void,
    isGoingDown: boolean,
}): JSX.Element => {
    const isDesktop = useViewportWidth();
    const root = useRef<HTMLDivElement>(null);
    const animationDuration = 400;
    const isTransitionDisabled = (position === 'top' && !isGoingDown) || (position === 'bottom' && isGoingDown);

    useEffect(() => {
        if (isDesktop) {
            return;
        }
        switch (position) {
            case 'top':
                if (!isGoingDown) {
                    console.log("animating down");
                    root.current!.animate([
                        {
                            top: "-190px",
                            opacity: 0,
                        },
                        {
                            top: 0,
                            opacity: 1,
                        },
                    ], {
                        duration: animationDuration,
                    });
                }
                break;
            case 'bottom':
                if (isGoingDown) {
                    console.log("animating up");
                    root.current!.animate([
                        {
                            top: "560px",
                            opacity: 0,
                        },
                        {
                            top: "370px",
                            opacity: 1,
                        },
                    ], {
                        duration: animationDuration,
                    });
                }
                break;
            default:
                break;
        }
    }, [isGoingDown, position, isDesktop]);

    return <div 
        className={"activities-activity-detail" 
            + (!isDesktop ? (
                position === 'top'
                ? " activities-activity-detail-top"
                : position === 'highlight'
                ? " activities-activity-detail-middle"
                : position === 'bottom'
                ? " activities-activity-detail-bottom"
                : " activities-activity-detail-hide"
            ) : "")
            + (!isDesktop && isTransitionDisabled ? " activities-activity-detail-transition-disabled" : "")
        }
        onClick={setHighlight}
        ref={root}
    >
        <div className="activities-activity-image">
            <img src={detail.image} alt="activity" />
        </div>
        <div className="activities-activity-text">{detail.detail}</div>
    </div>;
}