const ArrowLeft = (): JSX.Element => {
  return (
    <svg className="pagination-svg" height="20" width="10">
      <polygon points="10,0 0,10 10,20" />
    </svg>
  );
};

const ArrowRight = (): JSX.Element => {
  return (
    <svg className="pagination-svg" height="20" width="10">
      <polygon points="0,0 10,10 0,20" />
    </svg>
  );
};

export default function Arrow({
  isLeft,
  isDisabled,
  positionClass,
  click,
}: {
  isLeft: boolean;
  isDisabled: boolean;
  positionClass: string;
  click: () => void;
}): JSX.Element {
  return (
    <div
      className={
        'pagination-arrow' +
        (isDisabled
          ? ' pagination-arrow-disabled'
          : ' pagination-arrow-enabled') +
        (isLeft ? ' pagination-arrow-left' : ' pagination-arrow-right') +
        ' ' +
        positionClass
      }
      onClick={click}
    >
      {isLeft ? <ArrowLeft /> : <ArrowRight />}
    </div>
  );
}
