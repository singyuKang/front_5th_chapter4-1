## 항해 플러스 프론트엔드 9주차 과제

## 프론트엔드 배포 파이프라인

## 개요
1. Checkout 액션을 사용해 코드 내려받기
2. `npm ci` 명령어로 프로젝트 의존성 설치
3. `npm run build` 명령어로 Next.js 프로젝트 빌드
4. AWS 자격 증명 구성
5. 빌드된 파일을 S3 버킷에 동기화
6. CloudFront 캐시 무효화

## 주요 링크
- S3 버킷 웹사이트 엔드포인트 : http://front-5th-chapter4-1-singyukang.s3-website.ap-northeast-2.amazonaws.com/
- CloudFrount 배포 도메인 이름 : https://donf7c57g46t3.cloudfront.net/

## 배포 프로세스 구조
![ci_cd drawio](https://github.com/user-attachments/assets/fa79e4f6-ad40-424b-a1f4-b490d435ebb4)


## 주요 개념

### GitHub Actions과 CI/CD 도구:
- GitHub Actions는 GitHub에서 제공하는 CI/CD(Continuous Integration/Continuous Deployment) 플랫폼으로, 소프트웨어 개발 워크플로우를 자동화하는 도구입니다.
- CI/CD는 지속적 통합(Continuous Integration)과 지속적 배포(Continuous Deployment)를 의미합니다. CI는 코드 변경 시 자동으로 빌드와 테스트를 수행하여 코드의 품질을 유지하고, CD는 코드가 성공적으로 빌드되면 자동으로 배포하여 최신 상태를 유지합니다.
- commit을 통해 코드를 브렌치에 푸시하면은 자동으로 빌드, 테스트, 배포를 수행합니다.

### S3와 스토리지: 
- Amazon S3 (Simple Storage Service)는 AWS에서 제공하는 확장 가능한 객체 스토리지 서비스입니다. 정적 웹사이트 호스팅을 포함해 다양한 기능을 지원하며, 높은 내구성과 가용성을 바탕으로 여러 형식의 파일을 안정적으로 저장하고 서비스할 수 있습니다.
- 대표적인 사용 사례로는 백업 및 복원, 데이터 아카이빙, 빅데이터 분석용 데이터 레이크, 정적 웹사이트 호스팅 등이 있습니다.

### CloudFront와 CDN: 
- Amazon CloudFront는 AWS에서 제공하는 콘텐츠 전송 네트워크(Content Delivery Network, CDN) 서비스입니다. 전 세계에 분산된 엣지 로케이션(Edge Location)을 통해 사용자에게 정적 및 동적 콘텐츠를 빠르고 안전하게 전달합니다.
- CDN은 사용자와 콘텐츠 서버 간의 거리를 줄여 지연 시간을 최소화하며, 이미지, 동영상, HTML, CSS, JavaScript 파일 등 다양한 콘텐츠의 로딩 속도를 향상시킵니다.
- CloudFront는 S3, EC2, Load Balancer 등 다른 AWS 서비스와도 긴밀하게 통합되며, HTTPS 암호화, 사용자 인증, 캐싱 정책 설정 등 다양한 기능을 통해 보안성과 성능을 동시에 제공합니다.

### 캐시 무효화(Cache Invalidation): 
- CloudFront의 엣지 로케이션에 캐싱된 콘텐츠를 강제로 새로고침하여, 사용자가 항상 최신 버전의 콘텐츠를 받을 수 있도록 보장하는 과정입니다.
- 새로운 배포 시 이전 캐시된 콘텐츠를 무효화하여 최신 콘텐츠를 제공합니다.
- GitHub Actions의 deployment.yml 워크플로우에서 create-invalidation 명령어를 통해 자동으로 수행됩니다.

### Repository secret과 환경변수:
- Repository Secret은 GitHub 저장소에서 민감한 정보를 안전하게 관리하기 위한 기능입니다. 환경 변수와 유사하게 동작하지만, 외부에 노출되지 않도록 보호됩니다.
- AWS 인증 정보 같은 민감한 정보를 안전하게 저장하고 관리합니다.
- 워크플로우 실행 시 필요한 값들을 환경 변수로 주입하여 사용합니다.


## CDN과 성능최적화

| **Time to First Byte** | **Start Render** | **First Contentful Paint** | [**Speed Index**](https://docs.webpagetest.org/metrics/speedindex/) | [**Largest Contentful Paint**](https://www.webpagetest.org/vitals.php?test=250527_BiDcM6_44X&run=2&cached=0#lcp) | [**Cumulative Layout Shift**](https://www.webpagetest.org/vitals.php?test=250527_BiDcM6_44X&run=2&cached=0#cls) | [**Total Blocking Time**](https://www.webpagetest.org/vitals.php?test=250527_BiDcM6_44X&run=2&cached=0#tbt) | **Page Weight** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **3.385**S | **5.700**S | **6.499**S | **7.256**S | **10.302**S | **.582** | **5.379**S | **3,959**KB |
| *When did the content start downloading?* | *When did pixels first start to appear?* | *How soon did text and images start to appear?* | *How soon did the page look usable?* | *When did the largest visible content finish loading?* | *How much did the design shift while loading?* | *Was the main thread blocked?* | *How many bytes downloaded?* |

| **Time to First Byte** | **Start Render** | **First Contentful Paint** | [**Speed Index**](https://docs.webpagetest.org/metrics/speedindex/) | [**Largest Contentful Paint**](https://www.webpagetest.org/vitals.php?test=250527_BiDcQR_44Z&run=2&cached=0#lcp) | [**Cumulative Layout Shift**](https://www.webpagetest.org/vitals.php?test=250527_BiDcQR_44Z&run=2&cached=0#cls) | [**Total Blocking Time**](https://www.webpagetest.org/vitals.php?test=250527_BiDcQR_44Z&run=2&cached=0#tbt) | **Page Weight** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **.733**S | **2.600**S | **2.605**S | **3.920**S | **7.006**S | **.582** | **4.793**S | **3,047**KB |
| *When did the content start downloading?* | *When did pixels first start to appear?* | *How soon did text and images start to appear?* | *How soon did the page look usable?* | *When did the largest visible content finish loading?* | *How much did the design shift while loading?* | *Was the main thread blocked?* | *How many bytes downloaded?* |



![74](https://github.com/user-attachments/assets/5f6bb083-236b-4e89-a805-970d100ed3df)
![스크린샷 2025-05-27 오후 1 51 34](https://github.com/user-attachments/assets/a1a036b2-e59c-45fc-a4fd-702c343558dc)

<img width="965" alt="스크린샷 2025-05-28 오후 7 34 12" src="https://github.com/user-attachments/assets/e1e757e4-4fd2-49d8-9924-516fce1e003b" />

<img width="924" alt="스크린샷 2025-05-28 오후 7 34 27" src="https://github.com/user-attachments/assets/6535310f-04f3-4ada-a6fd-783623591003" />
