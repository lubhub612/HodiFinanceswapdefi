import { MenuEntry } from '@pancakeswap-libs/uikit'
import DashboardIcon from "./assets/images/dashboard.svg";
import AccountIcon from "./assets/images/account.svg";
import CalcIcon from "./assets/images/calculator.svg";
import SwapIcon from "./assets/images/swap.svg";
import GuruIcon from "./assets/images/guru.svg";
import AnalyticsIcon from "./assets/images/Analytics.svg";
import DocIcon from "./assets/images/document.svg";
import LpIcon from "./assets/images/liquidity.svg";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pancake-test.pages.dev',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'Analytics',
        href: 'https://app.hodi.finance/',
      },
      {
        label: 'Calculator',
        href: 'https://app.hodi.finance/',
      },
    ],
  },
  {
    label: 'Dashboard',
    icon: 'FarmIcon',
    href: 'https://app.hodi.finance/',
  },
  {
    label: 'Account',
    icon: 'PoolIcon',
    href: 'https://app.hodi.finance/',
  },
  {
    label: 'Dex Guru',
    icon: 'GroupsIcon',
    href: 'https://dex.guru/token/0xcad74f35ed4433e807673943b23ff6416740c859-bsc',
  },
  {
    label: 'Docs',
    icon: 'InfoIcon',
    href: 'https://docs.hodi.finance/',
  },
]

export default config
