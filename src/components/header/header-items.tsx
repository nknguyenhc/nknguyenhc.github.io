export type DropdownItem = {
  text: string;
  url: string;
};

export class HeaderItemWithLink {
  text: string;
  url: string;
  constructor({ text, url }: { text: string; url: string }) {
    this.text = text;
    this.url = url;
  }
}

export class HeaderItemWithDropdown {
  text: string;
  dropdown: Array<DropdownItem>;
  constructor({
    text,
    dropdown,
  }: {
    text: string;
    dropdown: Array<DropdownItem>;
  }) {
    this.text = text;
    this.dropdown = dropdown;
  }
}

const headerItems: Array<HeaderItemWithLink | HeaderItemWithDropdown> = [
  new HeaderItemWithLink({
    text: 'Home',
    url: '/',
  }),
  new HeaderItemWithDropdown({
    text: 'Academics',
    dropdown: [
      {
        text: 'Modules',
        url: '/academics/modules',
      },
      {
        text: 'TA Positions',
        url: '/academics/ta',
      },
    ],
  }),
  new HeaderItemWithDropdown({
    text: 'Projects',
    dropdown: [
      {
        text: 'MatchMiner',
        url: '/project/matchminer',
      },
      {
        text: 'Coding Scheme Simulation',
        url: '/project/coding-scheme-simulation',
      },
      {
        text: 'Quack Nkn',
        url: '/project/quack-nkn',
      },
      {
        text: 'Ultimate Tictactoe',
        url: '/project/ultimate-tictactoe',
      },
    ],
  }),
  new HeaderItemWithDropdown({
    text: 'Guides',
    dropdown: [
      {
        text: 'Deploy Django on Heroku',
        url: '/guide/deploy-django-on-heroku',
      },
    ],
  }),
];

export default headerItems;
