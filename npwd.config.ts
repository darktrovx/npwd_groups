import App from './src/App';
import { AppIcon } from './icon';

interface Settings {
  language: 'en';
}

export const path = '/groups';
export default (settings: Settings) => ({
  id: 'GROUPS',
  path,
  nameLocale: "Groups", 
  color: '#fff',
  backgroundColor: '#333',
  icon: AppIcon,
  app: App,
  notificationIcon: AppIcon,
});