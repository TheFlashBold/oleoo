const Rules = {
  source: {
    CAM: [
      'cam',
      'camrip',
      'cam-rip',
      'ts',
      'telesync',
      'pdvd'
    ],
    TC: [
      'tc',
      'telecine'
    ],
    SCREENER: [
      'dvdscr',
      'dvd-scr',
      'dvdscreener',
      'screener',
      'scr',
      'DDC'
    ],
    R5: [
      'r5'
    ],
    DVDRip: [
      'dvdrip',
      'dvd-rip'
    ],
    BDRip: [
      'bdrip',
      'bd-rip',
      'brrip',
      'br-rip'
    ],
    HDRip: [
      'hdrip',
      'hdlight',
      'mhd',
      'hd'
    ],
    'WEB-DL': [
      'webtv',
      'web-tv',
      'webdl',
      'web-dl',
      'webrip',
      'web-rip',
      'webhd',
      'web'
    ],
    'DVD-R': [
      'dvd',
      'dvdr',
      'dvd-r',
      'dvd-5',
      'dvd-9',
      'r6-dvd'
    ],
    BLURAY: [
      'bluray',
      'blu-ray',
      'bdr'
    ],
    BDSCR: [
      'bluray-scr',
      'bdscr',
    ],
    PDTV: [
      'pdtv'
    ],
    SDTV: [
      'sdtv',
      'dsr',
      'dsrip',
      'satrip',
      'dthrip',
      'dvbrip'
    ],
    HDTV: [
      'hdtv',
      'hdtvrip',
      'hdtv-rip'
    ]
  },
  encoding: {
    DivX: [
      'divx'
    ],
    XviD: [
      'xvid'
    ],
    x264: [
      'x264',
      'x.264'
    ],
    x265: [
      'x265',
      'x.265'
    ],
    h264: [
      'h264',
      'h.264'
    ]
  },
  resolution: {
    SD: [
      'sd'
    ],
    '720p': [
      '720p'
    ],
    '1080p': [
      '1080p'
    ]
  },
  dub: {
    DUBBED: [
      'dubbed'
    ],
    AC3: [
      'ac3.dubbed',
      'ac3'
    ],
    LD: [
      'ld',
      'licrodubbed',
      'licro-dubbed'
    ],
    MD: [
      'md',
      'microdubbed',
      'micro-dubbed'
    ]
  },
  language: {
    MULTI: 'multi',
    FRENCH: [
      'french',
      'français',
      'francais',
      'fr'
    ],
    TRUEFRENCH: [
      'truefrench',
      'vff'
    ],
    VFQ: 'vfq',
    VOSTFR: [
      'stfr',
      'vostfr'
    ],
    PERSIAN: 'persian',
    AMHARIC: 'amharic',
    ARABIC: 'arabic',
    CAMBODIAN: 'cambodian',
    CHINESE: 'chinise',
    CREOLE: 'creole',
    DANISH: 'danish',
    DUTCH: 'dutch',
    ENGLISH: [
      'english',
      'en',
      'voa'
    ],
    ESTONIAN: 'estonian',
    FILIPINO: 'filipino',
    FINNISH: 'finnish',
    FLEMISH: 'flemish',
    GERMAN: 'german',
    GREEK: 'greek',
    HEBREW: 'hebrew',
    INDONESIAN: 'indonesian',
    IRISH: 'irish',
    ITALIAN: 'italian',
    JAPANESE: 'japanese',
    KOREAN: 'korean',
    LAOTIAN: 'laotian',
    LATVIAN: 'latvian',
    LITHUANIAN: 'lithuanian',
    MALAY: 'malay',
    MALAYSIAN: 'malaysian',
    MAORI: 'maori',
    NORWEGIAN: 'norwegian',
    PASHTO: 'pashto',
    POLISH: 'polish',
    PORTUGUESE: 'portuguese',
    ROMANIAN: 'romanian',
    RUSSIAN: 'russian',
    SPANISH: 'spanish',
    SWAHILI: 'swahili',
    SWEDISH: 'swedish',
    SWISS: 'swiss',
    TAGALOG: 'tagalog',
    TAJIK: 'tajik',
    THAI: 'thai',
    TURKISH: 'turkish',
    UKRAINIAN: 'ukrainian',
    VIETNAMESE: 'vietnamese',
    WELSH: 'welsh',
    VO: 'vo'
  },
  flags: {
    PROPER: 'proper',
    LIMITED: 'limited',
    FASTSUB: 'fastsub',
    SUBFORCED: 'subforced',
    SUBBED: 'subbed',
    EXTENDED: 'extended',
    THEATRICAL: 'theatrical',
    WORKPRINT: [
      'workprint',
      'wp'
    ],
    FANSUB: 'fansub',
    REPACK: 'repack',
    UNRATED: 'unrated',
    NFOFIX: 'nfofix',
    NTSC: 'ntsc',
    PAL: 'pal',
    INTERNAL: [
      'internal',
      'int'
    ],
    FESTIVAL: 'festival',
    STV: 'stv',
    RETAIL: 'retails',
    REMASTERED: 'remastered',
    RATED: 'rated',
    CHRONO: 'chrono',
    UNCUT: 'uncut',
    UNCENSORED: 'uncensored',
    COMPLETE: 'complete',
    UNTOUCHED: 'untouched',
    DC: 'dc',
    REMUX: 'remux',
    DUAL: 'dual',
    FINAL: 'final',
    COLORIZED: 'colorized',
    WS: 'ws',
    DL: 'dl',
    'DOLBY DIGITAL': [
      'dolby digital',
      'dolby.digital'
    ],
    DTS: 'dts',
    AAC: 'aac',
    'DTS-HD': 'dts-hd',
    'DTS-MA': 'dts-ma',
    TRUEHD: 'truehd',
    '3D': '3d',
    HSBS: 'hsbs',
    HOU: 'hou',
    DOC: 'doc',
    RERIP: [
      'rerip',
      're-rip'
    ],
    'DD5.1': [
      'dd5.1',
      'dd51',
      'dd5-1',
      '5.1',
      '5-1'
    ],
    READNFO: [
      'read.nfo',
      'read-nfo',
      'readnfo'
    ]
  }
}

module.exports = Rules
