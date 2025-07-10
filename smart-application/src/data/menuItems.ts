// src/data/menuItems.ts
import type { IconType } from 'react-icons';
import { FaHome, FaRocket, FaFont, FaWpforms, FaTable, FaPalette, FaPuzzlePiece, FaTools, FaPlug, FaNewspaper } from 'react-icons/fa';

export interface MenuItemType {
  label: string;
  icon: IconType;
  children?: {label:string,path?:string }[];
  path?: string;
  expandable?: boolean;
}

export const menuItems: MenuItemType[] = [
  {
    label: 'Home',
    icon: FaHome, 
    path: '/'
  },
  {
    label: 'Get Started',
    icon: FaRocket,
    
  },
  {
    label: 'Typography',
    icon: FaFont,
    path: '/typography'
  },
  {
    label: 'Forms',
    icon: FaWpforms,
    path: '/forms'
  },
  {
    label: 'Tables',
    icon: FaTable,
    path: '/tables'
  },
  {
    label: 'Color palette',
    icon: FaPalette,
    path: '/colors'
  },
  {
    label: 'Components',
    icon: FaPuzzlePiece,
    expandable: true
  },
  {
    label: 'Utilities',
    icon: FaTools,
    expandable: true
  },
  {
    label: 'Plugins',
    icon: FaPlug,
    expandable:true
  },
  {
    label: 'Templates',
    icon: FaNewspaper,
    expandable: true
  },
];
