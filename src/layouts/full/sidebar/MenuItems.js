import { IconLayoutDashboard, IconChartBubble, IconChartLine, IconChartBar } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard/dashboard',
  },
  {
    navlabel: true,
    subheader: 'More About',
  },
  {
    id: uniqueId(),
    title: 'Chart 01',
    icon: IconChartBubble,
    href: '/dashboard/chartOne',
  },
  {
    id: uniqueId(),
    title: 'Chart 02',
    icon: IconChartLine,
    href: '/dashboard/chartTwo',
  },
  {
    id: uniqueId(),
    title: 'Chart 03',
    icon: IconChartBar,
    href: '/dashboard/chartThree',
  },
];

export default Menuitems;
