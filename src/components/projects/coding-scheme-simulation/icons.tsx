export const CopyIcon = ({ onClick }: { onClick: () => void }): JSX.Element => (
  <svg height="20" width="20" onClick={onClick}>
    <line x1="2" x2="14" y1="6" y2="6" />
    <line x1="14" x2="14" y1="6" y2="18" />
    <line x1="14" x2="2" y1="18" y2="18" />
    <line x1="2" x2="2" y1="18" y2="6" />
    <line x1="6" x2="6" y1="6" y2="2" />
    <line x1="6" x2="18" y1="2" y2="2" />
    <line x1="18" x2="18" y1="2" y2="14" />
    <line x1="18" x2="14" y1="14" y2="14" />
  </svg>
);

export const DownloadIcon = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => (
  <svg height="20" width="20" onClick={onClick}>
    <line x1="2" x2="2" y1="14" y2="18" />
    <line x1="2" x2="18" y1="18" y2="18" />
    <line x1="18" x2="18" y1="18" y2="14" />
    <line x1="10" x2="10" y1="2" y2="15" />
    <line x1="6" x2="10" y1="11" y2="15" />
    <line x1="10" x2="14" y1="15" y2="11" />
  </svg>
);

export const ShowHideIcon = ({
  onClick,
  isShow,
}: {
  onClick: () => void;
  isShow: boolean;
}): JSX.Element => (
  <svg
    height="20"
    width="20"
    className={
      'css-source-code-header-icon' +
      (isShow ? '' : ' css-source-code-header-icon-hide')
    }
    onClick={onClick}
  >
    <line x1="5" x2="10" y1="9" y2="14" />
    <line x1="10" x2="15" y1="14" y2="9" />
  </svg>
);

export const FoldGutter = ({ isShow }: { isShow: boolean }): JSX.Element => (
  <svg
    height="10"
    width="10"
    className={
      'css-source-code-content-icon' +
      (isShow ? '' : ' css-source-code-content-icon-hide')
    }
  >
    <line x1="2" x2="5" y1="4" y2="7" />
    <line x1="5" x2="8" y1="7" y2="4" />
  </svg>
);
