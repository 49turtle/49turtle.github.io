function openModal(projectId) {
  const modal = document.getElementById("modal");
  const modalDetails = document.getElementById("modal-details");

  // 프로젝트 정보
  const projectDetails = {
    vitaMine: `
      <div class="modal-content">
      <div class="modal-header">
        <h2>VitaMine</h2>
        <p>2024.04 ~ 2024.05 (2인 1팀)</p>
      </div>
      <div class="modal-body">
        <div class="modal-left">
          <ul>
            <li>
              <strong>프로젝트 개요</strong>
              <ul>
                <li>Vue.js와 Spring을 활용해 건강 데이터를 기반으로 맞춤형 추천 시스템 개발</li>
                <li>주요 기능: 데이터 크롤링 및 관리</li>
              </ul>
            </li>
            <li>
              <strong>담당 역할</strong>
              <ul>
                <li>프론트엔드 개발</li>
                <li>데이터 크롤링 및 가공</li>
              </ul>
            </li>
            <li>
              <strong>사용 기술</strong>
              <ul>
                <li>Vue.js, Spring, Selenium</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="modal-right">
          <div class="modal-image-placeholder">이미지를 넣어주세요</div>
          <p class="caption">이미지에 대한 부가 설명</p>
        </div>
      </div>
      </div>
    `,
    posemate: `
      <div class="modal-content">
      <div class="modal-header">
        <h2>POSEMATE</h2>
        <p>2024.07 ~ 2024.08 (6인 1팀)</p>
      </div>
      <div class="modal-body">
        <div class="modal-left">
          <ul>
            <li>
              <strong>프로젝트 개요</strong>
              <ul>
                <li>YOLO 및 LSTM을 활용한 실시간 자세 분석 및 피드백</li>
                <li>공통 프로젝트 우수상(2등) 수상</li>
              </ul>
            </li>
            <li>
              <strong>담당 역할</strong>
              <ul>
                <li>AI 모델 선정 및 적용</li>
                <li>데이터 시각화</li>
              </ul>
            </li>
            <li>
              <strong>사용 기술</strong>
              <ul>
                <li>YOLO, LSTM, Python, FastAPI</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="modal-right">
          <div class="modal-image-placeholder">이미지를 넣어주세요</div>
          <p class="caption">이미지에 대한 부가 설명</p>
        </div>
      </div>
      </div>
    `,
    honeyMorning: `
    <div class="modal-content">
      <!-- 헤더 -->
      <div class="modal-header">
        <h2>Honey Morning</h2>
        <p>2024.08 ~ 2024.10 (6인 1팀)</p>
      </div>

      <!-- 본문 -->
      <div class="modal-body">
        <div class="modal-left">
          <h3>프로젝트 개요</h3>
          <ul>
            <li><strong>목표:</strong> AI 기반 맞춤형 뉴스 브리핑 및 퀴즈로 시작하는 아침 서비스 개발</li>
            <li><strong>배경:</strong> 관심사 선택 및 AI 음악 생성으로 차별화된 사용자 경험 제공</li>
            <li><strong>주요 기능:</strong> 브리핑 생성, 알람 음악 제작, 퀴즈 제공</li>
          </ul>
        </div>
        <div class="modal-right">
          <img src="./assets/img/honeymorning_main.png" alt="Honey Morning 주요 기능" class="modal-image" />
          <p class="caption">Honey Morning 서비스 주요 기능</p>
        </div>
      </div>

      <!-- 추가 정보 -->
      <div class="modal-footer">
        <section>
          <h3>담당 역할</h3>
          <p>프론트엔드 개발: UI 구현 및 핵심 기능 개발</p>
          <p>PWA 구현: Vite 기반 Progressive Web App 설정</p>
          <p>수면 유지 모드: Wake Lock API 활용</p>
          <p>AI 모델 연동: 네이버 뉴스 크롤링 및 토픽 모델링 API 작성</p>
        </section>
        <section>
          <h3>사용 기술</h3>
          <ul>
            <p><strong>Front-end:</strong> React, TypeScript, React-Query, styled-components, Three.js</p>
            <p><strong>Back-end:</strong> FastAPI, Spring Boot, Redis</p>
            <p><strong>AI:</strong> Hugging Face, Kobart, LDA</p>
            <p><strong>Infra:</strong> Docker, Jenkins, AWS EC2, Nginx</p>
          </ul>
        </section>
        <section>
          <h3>구현 사항</h3>
          <p>브라우저에서도 끊김 없이 알람 설정 및 브리핑 서비스 제공</p>
          <p>크롤링 자동화를 통해 사용자 맞춤 뉴스 데이터 제공</p>
          <p>Wake Lock API를 통해 모바일 UX 최적화</p>
        </section>
        <section>
          <h3>문제 해결 사례</h3>
          <p>
            <strong>문제:</strong> 크롤링된 데이터의 양이 많아 서버 응답 속도 저하 발생<br />
            <strong>해결:</strong> Redis와 Kmeans 알고리즘을 사용해 데이터 처리 효율성 극대화
          </p>
        </section>
        <section>
          <h3>프로젝트 성과 및 결과</h3>
          <p>PWA와 Wake Lock API를 활용해 모바일 친화적인 UX 제공</p>
          <p>팀 내 토픽 모델링 최적화를 통한 AI 성능 향상</p>
        </section>
        <section>
          <h3>프로젝트 회고</h3>
          <p>
            본 프로젝트를 통해 PWA와 Wake Lock API의 실용성을 체감하였으며, AI 모델 최적화 과정에서 데이터 분석의 중요성을 실감했습니다.
            향후 성능 최적화와 테스트 자동화를 적극 도입하여 더 나은 프로젝트를 개발하고자 합니다.
          </p>
        </section>
      </div>
    </div>
  `,

    trai: `
    <div class="modal-content">
      <!-- 헤더 -->
      <div class="modal-header">
        <h2>TRAI</h2>
        <p>2024.10 ~ 2024.11 (6인 1팀)</p>
      </div>

      <!-- 본문 -->
      <div class="modal-body">
        <div class="modal-left">
          <h3>프로젝트 개요</h3>
          <ul>
            <li><strong>목표:</strong> 생성형 AI와 멀티 에이전트를 활용한 비트코인 자동매매 플랫폼 개발</li>
            <li><strong>배경:</strong> 금융 투자업에서의 대형 언어 모델(LLM)의 활용 가능성 및 복잡한 프로세스의 자동화</li>
            <li><strong>주요 기능:</strong> 비트코인 AI 자동매매, 개인 투자 성향 설정, 상세 AI 전략 열람</li>
          </ul>
        </div>
        <div class="modal-right">
          <img src="./assets/img/trai_main.jpg" alt="TRAI 메인 화면" class="modal-image" />
          <p class="caption">TRAI 메인 화면</p>
        </div>
      </div>

      <!-- 추가 정보 -->
      <div class="modal-footer">
        <section>
          <h3>담당 역할</h3>
          <p><strong>AI 개발</strong>: LangChain을 활용한 차트 패턴 분석, 뉴스 검색, 의사결정 AI 에이전트 개발</p>
          <p><strong>프론트엔드 AI 연동</strong>: 차트 패턴 분석 결과 연동 및 거래 및 상세 전략 페이지 모달 창 구현</p>
        </section>
        <section>
          <h3>사용 기술</h3>
          <ul>
            <p><strong>Front-end:</strong> React, TypeScript, styled-components, Three.js</p>
            <p><strong>Back-end:</strong> Spring Boot, FastAPI </p>
            <p><strong>AI:</strong> LangChain, GPT-4o, Selenium</p>
            <p><strong>Infra:</strong> Docker, Jenkins, AWS EC2, Nginx</p>
          </ul>
        </section>
        <section>
          <h3>구현 사항</h3>
          <p><strong>RAG 및 개인화 에이전트 구현</strong>: 벡터 저장소를 활용한 투자 성향 문서 임베딩, 사용자가 입력한 투자 성향 문장과 가장 유사한 투자 성향 문서를 찾아 해당 성향을 투자에 적용하는 개인화 에이전트 구현</p>
          <p><strong>멀티모달 AI 활용</strong>: 차트 패턴 분석을 위해 GPT-4 Vision을 활용, ARM Linux 서버 환경에서의 차트 캡쳐 자동화를 위한 Selenium 실행 코드 구현</p>
        </section>
        <section>
          <h3>문제 해결 사례</h3>
          <p><strong>문제:</strong> 오픈소스 LLM의 비용과 프롬프트 최적화 및 기술적 분석 AI 에이전트의 환각 현상</p>
          <p><strong>해결:</strong> LangSmith를 활용한 지연 시간 및 사용 토큰량 추적, 기술적신호(SMA, MACD, RSI 등) 계산 함수로 전처리 후 프롬프트에 동적으로 삽입</p>
        </section>
        <section>
          <h3>프로젝트 성과 및 결과</h3>
          <p>4개의 공통 에이전트와 2개의 개인화 에이전트를 통한 비트코인 자동매매 구현 및 최대 누적 투자 수익률 5% 기록</p>
          <p>LangSmith 모니터링 결과, 회당 최대 응답 시간 25초 미만, 8,300토큰(약 50원 미만)으로 프롬프트 성능 최적화</p>
        </section>
      </div>
    </div>
    `,
  };

  modalDetails.innerHTML = projectDetails[projectId];
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// 화면 밖을 클릭했을 때 모달 닫기
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
});
