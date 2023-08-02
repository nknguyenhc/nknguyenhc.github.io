

export type DropdownItem = {
    text: string,
    url: string,
};

export class HeaderItemWithLink {
    text: string;
    url: string;
    constructor({ text, url }: {
        text: string,
        url: string,
    }) {
        this.text = text;
        this.url = url;
    }
}

export class HeaderItemWithDropdown {
    text: string;
    dropdown: Array<DropdownItem>;
    constructor({ text, dropdown}: { 
        text: string, 
        dropdown: Array<DropdownItem>,
    }) {
        this.text = text;
        this.dropdown = dropdown;
    }
};

const headerItems: Array<HeaderItemWithLink | HeaderItemWithDropdown> = [
    new HeaderItemWithLink({
        text: 'Home',
        url: '/'
    }),
    new HeaderItemWithDropdown({
        text: 'Projects',
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
    }),
    new HeaderItemWithDropdown({
        text: 'Guides',
        dropdown: [
            {
                text: 'Deploy Django on Heroku',
                url: '/guide/deploy-django-on-heroku'
            }
        ]
    }),
];

export default headerItems;