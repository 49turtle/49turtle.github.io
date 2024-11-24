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
            <h3>프로젝트 개요</h3>
            <ul>
              <li><strong>목표:</strong> 개인 맞춤형 건강보조식품 추천 플랫폼 개발</li>
              <li><strong>주요 기능:</strong> 비타민, 무기질 영양성분 데이터 기반 영양제 추천</li>
            </ul>
          </div>
          <div class="modal-right">
            <img src="./assets/img/vitamine_main.png" alt="VitaMine 주요 화면" class="modal-image" />
            <p class="caption">VitaMine: 영양제 조합 분석 플랫폼</p>
          </div>
        </div>
        <div class="modal-footer">
          <section>
            <h3>사용 기술</h3>
            <p><strong>Front-end:</strong> Vue.js, Pinia</p>
            <p><strong>Back-end:</strong> Java, Spring Boot, MySQL</p>
            <p><strong>ETL:</strong> Selenium</p>
          </section>
          <section>
            <h3>담당 역할</h3>
            <p>프론트엔드 주요 기능 개발: sessionStorage 활용한 유저 상태 유지, 동적 헤더 UI, 데이터 페이지네이션 구현</p>
            <p>크롤링 데이터를 가공해 단위 변환 및 관리자 액션 연동</p>
          </section>
          <section>
            <h3>구현 사항</h3>
            <p><strong>프론트-백엔드 연동:</strong> 데이터 기반 추천 시스템을 위한 API 개발 및 테스트</p>
            <p><strong>데이터 처리:</strong> 대규모 영양제 데이터를 효율적으로 관리 및 시각화</p>
            <img src="./assets/img/vitamine_comb.gif" alt="영양제 조합 분석" class="modal-image" width=70%/>
            <p class="caption">VitaMine: 내 영양제 조합 분석</p>
          </section>
          <section>
            <h3>문제 해결 사례</h3>
            <p><strong>문제:</strong> 대량 데이터 처리 속도 저하 및 UI 업데이트 지연</p>
            <p><strong>해결:</strong> Pinia와 Vue.js의 상태 관리 라이브러리로 UI 상태 갱신 최적화</p>
          </section>
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
            <h3>프로젝트 개요</h3>
            <ul>
              <li><strong>목표:</strong> 자율주행 차량 기반 AI 달리기 자세 분석 플랫폼 개발</li>
              <li><strong>주요 기능:</strong> 영상 분석, 자세 분류, 실시간 피드백 제공</li>
            </ul>
          </div>
          <div class="modal-right">
            <img src="./assets/img/posemate_main.png" alt="POSEMATE 주요 화면" class="modal-image" />
            <p class="caption">POSEMATE: 메인 화면 및 자세 분석 UI</p>
          </div>
        </div>
        <div class="modal-footer">
          <section>
            <h3>담당 역할</h3>
            <p>YOLO 모델을 활용해 관절 포인트를 추출하고, LSTM으로 자세를 분석 및 분류</p>
            <p>GPU 환경(CUDA, CuDNN) 구축 및 데이터 학습 시간 단축</p>
          </section>
          <section>
            <h3>사용 기술</h3>
            <p><strong>Back-end:</strong> Python, FastAPI</p>
            <p><strong>AI:</strong> YOLO, LSTM, TensorFlow</p>
          </section>
          <section>
            <h3>구현 사항</h3>
            <p><strong>실시간 분석:</strong> 영상 데이터를 실시간으로 분석하여 사용자의 자세 피드백 제공</p>
            <p><strong>시각화:</strong> 분석 데이터를 시각적으로 표현하여 협업 간 이해도 향상</p>
            <img src="./assets/img/posemate.gif" alt="POSEMATE 데이터 시각화" class="modal-image" width=250px/>
          </section>
          <section>
            <h3>프로젝트 성과 및 결과</h3>
            <p>달리기 자세를 4개의 클래스로 분류하고, LSTM 모델에 학습시켜 자세 예측 및 점수화를 통한 피드백 제공</p>
            <p>공통 프로젝트 우수상(9팀 중 2등) 및 본선 발표회 진출</p>
          </section>
        </div>
      </div>
    `,
    honeyMorning: `
      <div class="modal-content">
        <div class="modal-header">
          <h2>Honey Morning</h2>
          <p>2024.08 ~ 2024.10 (6인 1팀)</p>
        </div>
        <div class="modal-body">
          <div class="modal-left">
            <h3>프로젝트 개요</h3>
            <ul>
              <li><strong>목표:</strong> AI 기반 맞춤형 뉴스 브리핑 및 퀴즈 제공</li>
              <li><strong>주요 기능:</strong> 알람 설정, 브리핑 제공, 퀴즈 생성</li>
            </ul>
          </div>
          <div class="modal-right">
            <img src="./assets/img/honeymorning_main.png" alt="Honey Morning 주요 화면" class="modal-image" />
            <p class="caption">Honey Morning: 맞춤형 뉴스 및 퀴즈 UI</p>
          </div>
        </div>
        <div class="modal-footer">
          <section>
            <h3>담당 역할</h3>
            <p>React를 활용한 UI 설계 및 Wake Lock API로 모바일 UX 개선</p>
            <p>AudioContext API를 활용한 음성 시각화 및 데이터 연동</p>
          </section>
          <section>
            <h3>사용 기술</h3>
            <p><strong>Front-end:</strong> React, TypeScript, Styled Components</p>
            <p><strong>Back-end:</strong> FastAPI</p>
            <p><strong>AI:</strong> Kobart, HuggingFace</p>
          </section>
          <section>
            <h3>구현 사항</h3>
            <p>모바일 환경에서 알람 및 브리핑 서비스를 원활히 제공</p>
            <p>AI 요약 데이터를 바탕으로 사용자의 관심사를 반영한 브리핑 생성</p>
            <img src="./assets/img/honeymorning_lda.png" alt="Honey Morning LDA" class="modal-image" width=70%/>
            <p class="caption">pyLDAvis로 시각화한 LDA 토픽 모델링 HTML</p>
          </section>
          <section>
            <h3>문제 해결 사례</h3>
            <p><strong>문제:</strong> 사용자 맞춤형 브리핑 생성 시 처리 속도 저하</p>
            <p><strong>해결:</strong> Kmeans 알고리즘 적용으로 데이터 선택 및 처리 최적화</p>
          </section>
        </div>
      </div>
    `,
    trai: `
    <div class="modal-content">
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
            <p><strong>AI:</strong> LangChain, GPT-4o</p>
            <p><strong>Back-end:</strong> Python, FastAPI </p>
            <p><strong>Front-end:</strong> React, TypeScript, styled-components, Three.js</p>
        </section>
        <section>
          <h3>구현 사항</h3>
          <p><strong>RAG 및 개인화 에이전트 구현</strong>: 벡터 저장소를 활용한 투자 성향 문서 임베딩, 사용자가 입력한 투자 성향 문장과 가장 유사한 투자 성향 문서를 찾아 해당 성향을 투자에 적용하는 개인화 에이전트 구현</p>
          <p><strong>멀티모달 AI 활용</strong>: 차트 패턴 분석을 위해 GPT-4 Vision을 활용, ARM Linux 서버 환경에서의 차트 캡쳐 자동화를 위한 Selenium 실행 코드 구현</p>
          <img src="./assets/img/trai_flow.png" alt="TRAI 플로우" class="modal-image" width=60%/>
        </section>
        <section>
          <h3>문제 해결 사례</h3>
          <p><strong>문제:</strong> 오픈소스 LLM의 비용과 프롬프트 최적화 및 기술적 분석 AI 에이전트의 환각 현상</p>
          <p><strong>해결:</strong> LangSmith를 활용한 지연 시간 및 사용 토큰량 추적, 기술적신호(SMA, MACD, RSI 등) 계산 함수로 전처리 후 프롬프트에 동적으로 삽입</p>
        </section>
        <section>
          <h3>프로젝트 성과 및 결과</h3>
          <p>4개의 공통 에이전트와 2개의 개인화 에이전트를 통한 비트코인 자동매매 구현 및 누적 투자 수익률 최대 5% 기록</p>
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
