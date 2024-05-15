import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'RynXD',
  subtitle: 'Blog',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/profile.jpg',
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    //LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/RynXD-Host',
      external: true,
    },
    {
      name: 'Rest Api',
      url: 'https://api-floobot.cyclic.app',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/profile.jpg',
  name: 'RynXD',
  bio: 'Hi, i am RynXD, im 19 years old.',
  links: [
    {
      name: 'Youtube',
      icon: 'fa6-brands:youtube',
      url: 'https://youtube.com/@RynXDHost',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://instagram.com/_rynxd',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/RynXD-Host',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
