self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/memory-valley/umami.js",
        "destination": "/memory-valley/script.js"
      },
      {
        "source": "/memory-valley/api/send",
        "destination": "/memory-valley/api/send"
      }
    ],
    "beforeFiles": [
      {
        "source": "/memory-valley//_next/:path+",
        "destination": "/memory-valley/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()