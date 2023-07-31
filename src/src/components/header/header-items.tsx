

type DropdownItem = {
    text: string,
    url: string,
};

type HeaderItem = {
    text: string,
    url?: string,
    dropdown?: Array<DropdownItem>,
};

const headerItems: Array<HeaderItem> = [
    {
        text: 'home',
        url: '/'
    },
    {
        text: 'projects',
        dropdown: [
            {
                text: 'MatchMiner',
                url: '/'
            },
            {
                text: 'Coding Scheme Simulation',
                url: '/'
            }
        ]
    }
];

export default headerItems;