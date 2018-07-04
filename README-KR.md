# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)
upbit-api는 업비트의 Open API를 좀 더 쉽게 사용할 수 있도록 만든 node.js용 라이브러리입니다.

타입스크립트로 작성되어 있으며, es2017로 컴파일 되어있습니다.

RestfulAPI와 WebSocket API를 모두 지원하는 것이 목표입니다.

## ticker()
마켓 오브젝트(KRW-BTC 같은 것을 일컫습니다.) 배열을 생성합니다.
## autoUpdate()
마켓 오브젝트를 일정 시간마다 업데이트 합니다.