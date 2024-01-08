export const CopyIcon = ({ onClick }: {
    onClick: () => void,
}): JSX.Element => (
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

export const DownloadIcon = ({ onClick }: {
    onClick: () => void,
}): JSX.Element => (
    <svg height="20" width="20" onClick={onClick}>
        <line x1="2" x2="2" y1="14" y2="18" />
        <line x1="2" x2="18" y1="18" y2="18" />
        <line x1="18" x2="18" y1="18" y2="14" />
        <line x1="10" x2="10" y1="2" y2="15" />
        <line x1="6" x2="10" y1="11" y2="15" />
        <line x1="10" x2="14" y1="15" y2="11" />
    </svg>
)
