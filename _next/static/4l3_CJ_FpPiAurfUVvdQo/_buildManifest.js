self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/repo-name/umami.js",
        "destination": "/repo-name/script.js"
      },
      {
        "source": "/repo-name/api/send",
        "destination": "/repo-name/api/send"
      }
    ],
    "beforeFiles": [
      {
        "source": "/repo-name//_next/:path+",
        "destination": "/repo-name/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()