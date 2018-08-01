module.exports = {
  htmlAttrs: {
    lang: 'fr',
    dir: 'ltr',
    prefix: 'og: http://ogp.me/ns#',
  },
  titleTemplate(titleChunk) {
    return titleChunk ? `${titleChunk} - Délectable` : 'Délectable';
  },
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
    {
      hid: 'description',
      name: 'description',
      content: `SpaEtc votre guide beauté & bien-être pour trouver le bon soin, la bonne adresse ! Découvrez notre sélection de soins et d'adresses en France entière.`
    }, // TODO
    {hid: 'keywords', name: 'keywords', content: 'keyword 1, keyword 2'}, // TODO
    {name: 'referrer', content: 'always'},

    /* Facebook Opengraph */
    {property: 'fb:app_id', content: '1597751973810948'}, // TODO
    {property: 'og:site_name', content: 'SpaEtc'},
    {hid: 'og:title', property: 'og:title', content: 'SpaEtc'},
    {
      hid: 'og:description',
      property: 'og:description',
      content: `SpaEtc votre guide beauté & bien-être pour trouver le bon soin, la bonne adresse ! Découvrez notre sélection de soins et d'adresses en France entière.`
    }, // TODO
    {property: 'og:type', content: 'website'}, // TODO
    {hid: 'og:url', property: 'og:url', content: 'https://wwww.spaetc.com/'}, // TODO
    {hid: 'og:image', property: 'og:image', content: '/imgs/icons/app/thumbnail_facebook.png'}, // TODO
    {hid: 'og:locale', property: 'og:locale', content: 'fr_FR'},

    /* Twitter Opengraph */
    {property: 'twitter:widgets:csp', content: 'on'},
    {property: 'twitter:card', content: 'summary'},
    {property: 'twitter:image', content: '/imgs/icons/app/thumbnail_twitter.png'},
    {hid: 'twitter:title', property: 'twitter:title', content: 'SpaEtc'},
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `SpaEtc votre guide beauté & bien-être pour trouver le bon soin, la bonne adresse ! Découvrez notre sélection de soins et d'adresses en France entière.`
    }, // TODO
    {property: 'twitter:site', content: '@spaetc'}, // TODO

    /* PWA tags */
    {name: 'mobile-web-app-capable', content: 'yes'},
    {name: 'apple-mobile-web-app-capable', content: 'yes'},
    {name: 'application-name', content: 'SpaEtc'},
    {name: 'apple-mobile-web-app-title', content: 'SpaEtc'},
    {name: 'theme-color', content: '#ffffff'},
    {name: 'msapplication-navbutton-color', content: '#ffffff'},
    {name: 'apple-mobile-web-app-status-bar-style', content: 'default'},
    {name: 'msapplication-starturl', content: '/?utm_source=homescreen'},

    /* Microsoft Icons */
    {name: 'msapplication-TileImage', content: '/imgs/icons/app/mstile-144x144.png'}, // TODO
    {name: 'msapplication-square70x70logo', content: '/imgs/icons/app/mstile-70x70.png'}, // TODO
    {name: 'msapplication-square150x150logo', content: '/imgs/icons/app/mstile-150x150.png'}, // TODO
    {name: 'msapplication-wide310x150logo', content: '/imgs/icons/app/mstile-310x150.png'}, // TODO
    {name: 'msapplication-square310x310logo', content: '/imgs/icons/app/mstile-310x310.png'}, // TODO
  ],
  link: [

    /* Browser Favicon */
    {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/imgs/icons/app/favicon-16x16.png'}, // TODO
    {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/imgs/icons/app/favicon-32x32.png'}, // TODO
    {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/imgs/icons/app/favicon-96x96.png'}, // TODO
    {rel: 'icon', type: 'image/png', sizes: '128x128', href: '/imgs/icons/app/favicon-128x128.png'}, // TODO
    {rel: 'icon', type: 'image/png', sizes: '196x196', href: '/imgs/icons/app/favicon-196x196.png'}, // TODO

    /* iOS Icons */
    {rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/imgs/icons/app/apple-touch-icon-57x57.png'}, // TODO
    {rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/imgs/icons/app/apple-touch-icon-60x60.png'}, // TODO
    {rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/imgs/icons/app/apple-touch-icon-72x72.png'}, // TODO
    {rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/imgs/icons/app/apple-touch-icon-76x76.png'}, // TODO
    {rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/imgs/icons/app/apple-touch-icon-114x114.png'}, // TODO
    {rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/imgs/icons/app/apple-touch-icon-120x120.png'}, // TODO
    {rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/imgs/icons/app/apple-touch-icon-144x144.png'}, // TODO
    {rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/imgs/icons/app/apple-touch-icon-152x152.png'}, // TODO

    /* iOS Splashscreens */
    {
      rel: 'apple-touch-startup-image',
      href: '/imgs/icons/app/apple-touch-startup-image-640x1136.png',
      media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    }, // TODO
    {
      rel: 'apple-touch-startup-image',
      href: '/imgs/icons/app/apple-touch-startup-image-750x1294.png',
      media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    }, // TODO
    {
      rel: 'apple-touch-startup-image',
      href: '/imgs/icons/app/apple-touch-startup-image-1242x2148.png',
      media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
    }, // TODO
    {
      rel: 'apple-touch-startup-image',
      href: '/imgs/icons/app/apple-touch-startup-image-1125x2436.png',
      media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
    }, // TODO
    {
      rel: 'apple-touch-startup-image',
      href: '/imgs/icons/app/apple-touch-startup-image-1536x2048.png',
      media: '(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
    }, // TODO
    {
      rel: 'apple-touch-startup-image',
      href: '/imgs/icons/app/apple-touch-startup-image-1668x2224.png',
      media: '(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
    }, // TODO
    {
      rel: 'apple-touch-startup-image',
      href: '/imgs/icons/app/apple-touch-startup-image-2048x2732.png',
      media: '(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
    }, // TODO

    /* Mask Icon */
    {rel: 'mask-icon', href: '/imgs/icons/app/mask-icon.svg', color: '#FF5A5F'}, // TODO

    {rel: 'image_src', href: '/imgs/icons/app/app_thumbnail.jpg'}, // TODO
    {hid: 'canonical', rel: 'canonical', href: 'https://wwww.spaetc.com/'}, // TODO
    {hid: 'publisher', rel: 'publisher', href: 'https://plus.google.com/+SpaetcFr/'},
    {rel: 'manifest', href: '/manifest.json'},
    {rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml'},
    {rel: 'alternate', href: 'https://wwww.spaetc.com/', hreflang: 'x-default'},

  ],
};
