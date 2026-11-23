/*
 * 長庚大學大學部必選修科目表資料
 * 每一筆是「某系、某入學年度」的畢業規定，依學校公告的 PDF 人工轉錄。
 *   required:  系訂必修科目（"微積分(1)(2)" 代表兩門）
 *   electives: 本系開設選修科目（未列出的，若科目代號符合 prefixes 也算本系選修）
 *   pickOne:   「N 選一」等必須修過其中一門的組合
 *   rules:     畢業學分門檻；electiveOtherMax 為他系選修最多採計學分
 * 新增科系：照同樣格式加一筆，並把 status 設為 "ok"。
 */
window.CGU_PROGRAMS = [
  {
    id: 'AI-112', dept: '人工智慧學系', year: 112, status: 'ok',
    source: 'https://www.cgu.edu.tw/Uploads/upload/996882ed-a97c-4226-a62e-11b9691d88d6.pdf',
    prefixes: ['AI', 'AIM'],
    rules: { total: 128, required: 60, elective: 40, electiveOwnMin: 30, electiveOtherMax: null, gen: 28 },
    required: [
      '離散數學', '程式設計', '智慧計算導論', '機率與統計', '資訊安全', 'AI程式語言',
      '普通物理學', '有機化學', '普通生物學', '微積分(1)(2)',
      '線性代數', '機器學習', '大腦與認知科學', '資料結構', '深度學習', '演算法',
      '專題研究(1)(2)', '電腦視覺', '資料探勘', '自然語言處理與應用', '專題演講',
      '專題研究(3)'
    ],
    electives: [
      '行動應用程式開發', 'Web應用程式開發', '計算機網路', '人體疾病概論', '資料科學', '作業系統',
      '體學概論', '平行程式設計', '雲端系統', '實習(1)', '海外研讀', '虛擬與擴充實境', '資訊檢索與擷取',
      '基因組數據科學', '智慧網宇實體系統', '多代理人系統導論', '量子計算導論', '生物資訊分析',
      '醫學影像處理', '區塊鏈技術基礎與應用',
      '深度學習應用', '機器學習與其醫學應用', '智慧物聯網', '臨床資訊工程', '生成式人工智慧應用',
      '進階人工智慧程式設計', '資安結構', 'AI晶片設計', '人工智慧與臨床決策'
    ],
    pickOne: [],
    notes: [
      '通識：英文領域、核心、多元課程共 28 學分（必修「AI程式語言」抵免多元-運算思維 1 學分後）。',
      '體育大一、大二必修 0 學分；深耕學園必修 0 學分；另有英文畢業門檻。',
      '本系碩士班選修課程皆可認列為系選修學分。'
    ]
  },
  {
    id: 'AI-114', dept: '人工智慧學系', year: 114, status: 'ok',
    source: 'https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/e18a5234-7e02-4e3e-8ac5-95c5f5ac97bb?subjectId=68096',
    prefixes: ['AI', 'AIM'],
    rules: { total: 128, required: 61, elective: 43, electiveOwnMin: 33, electiveOtherMax: 10, gen: 24 },
    required: [
      '程式設計', '智慧計算導論', '離散數學', 'AI程式語言', '微積分', '普通物理學', '有機化學', '普通生物學',
      '線性代數', '資料結構與演算法', '機器學習', '機率與統計', '資料探勘', '演算法設計',
      '專題研究(1)(2)', '電腦視覺', '資料分析', '深度學習', '專題演講', '雲端系統', '自然語言處理與應用', '資訊安全',
      '專題研究(3)'
    ],
    electives: [
      '行動應用程式開發', '大腦與認知科學', 'Web應用程式開發', '計算機網路',
      '人體疾病概論', '資料科學', '體學概論', '智慧物聯網', '平行程式設計', '作業系統', '區塊鏈技術基礎與應用',
      '實習(1)(2)', '海外研讀', '基因組數據科學', '虛擬與擴充實境', '智慧網宇實體系統', '機器學習專題',
      '多代理人系統', '量子計算導論', '生物資訊分析', '醫學影像處理', '量子機器學習', '臨床資訊工程',
      '健康資料管理與分析', '深度學習專題', '深度學習應用', '資安結構', '語音處理', '資訊檢索與擷取',
      '生成式人工智慧應用', '進階人工智慧程式設計', '人工智慧學術英文技巧'
    ],
    pickOne: [],
    notes: [
      '選修 43 學分：本系選修至少 33 學分，他系課程最多承認 10 學分（通識、體育、全民國防不列入）。',
      '資訊工程學系大三（含）以上課程可認列本系選修，最多 12 學分。',
      '通識：全人、英文、核心、多元課程共 24 學分（「AI程式語言」抵免 1 學分後）。',
      '體育大一、大二必修 0 學分；另有英文畢業門檻。選修「量子機器學習」前須先修過「量子計算導論」。'
    ]
  },
  {
    id: 'AI-115', dept: '人工智慧學系', year: 115, status: 'ok',
    source: 'https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/3312715b-0bd3-490b-bed8-62611e6d75a5?subjectId=78881',
    prefixes: ['AI', 'AIM'],
    rules: { total: 128, required: 61, elective: 43, electiveOwnMin: 33, electiveOtherMax: 10, gen: 24 },
    required: [
      '程式設計', '智慧計算導論', '離散數學', 'AI程式語言', '微積分', '物件導向程式設計', '人工智慧應用實務',
      '線性代數', '資料結構與演算法', '資料探勘', '機率與統計', '機器學習', '演算法設計',
      '專題研究(1)(2)', '電腦視覺', '資料分析', '深度學習', '人工智慧講座', '雲端系統', '自然語言處理與應用', '資訊安全',
      '專題研究(3)'
    ],
    electives: [
      '普通物理學', '有機化學', '普通生物學', '計算機概論',
      '行動應用程式開發', '大腦與認知科學', 'Web應用程式開發', '計算機網路',
      '人體疾病概論', '體學概論', '平行程式設計', '作業系統', '虛擬與擴充實境', '健康資料管理與分析', '語音處理',
      '實習(1)(2)', '海外研讀', '深度學習專題', '資訊檢索與擷取'
    ],
    pickOne: [{ label: '普通物理學／有機化學／普通生物學 三選一', any: ['普通物理學', '有機化學', '普通生物學'] }],
    notes: [
      '選修 43 學分：本系選修至少 33 學分，他系課程最多承認 10 學分（通識、體育、全民國防不列入）。',
      '資訊工程學系大三（含）以上課程可認列本系選修，最多 12 學分。',
      '通識：全人、英文、核心、多元課程共 24 學分（「AI程式語言」抵免 1 學分後）。',
      '體育大一、大二必修 0 學分；另有英文畢業門檻；本系碩士班選修課程皆可認列為系選修。'
    ]
  }
];

/* 學校已公告、尚未轉錄的科目表（選了會顯示連結，門檻需自行填寫） */
window.CGU_SOURCES = {"醫學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/7206d621-a458-4f3a-974b-7cc5f04643f8?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/17ccd12c-35c6-4de1-b4be-c4934328b444?subjectId=68096"},"醫學科學學士學位學程":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/8d21dc5e-0113-4284-becf-4439fd9d04a5?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/b319fe67-2d7b-4f7b-a7cf-bbccd03e81e6?subjectId=68096"},"護理學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/47c16ae6-19b4-4b20-add6-18d5981dd92c?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/ee58cccf-cb47-4d3a-96cd-c30b133958f9?subjectId=68096"},"學士後護理學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/c112c6ad-0f3c-4986-8378-da18cea4b936?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/af9fc597-5ab9-45f0-b7ab-6969662d88b3?subjectId=68096"},"醫學生物技術暨檢驗學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/8f5df5ad-1fae-435d-8282-4afe87ea4153?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/06f547c1-85da-4d08-8dfc-83591a025f2d?subjectId=68096"},"物理治療學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/3ea1d021-569e-4afd-ac0b-896042681cf7?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/77099211-d41f-4557-8f51-616ecfff3c5b?subjectId=68096"},"職能治療學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/7546c7f1-869f-48b2-a0c8-8be1b9d6093e?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/b6917886-b4da-46b8-b9b1-870582773e36?subjectId=68096"},"中醫學系(單修)":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/31f2055d-ad7c-44b6-99e7-e39a08d0eb80?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/8ec91602-d58d-4111-9433-7a9547fe4ff6?subjectId=68096"},"中醫學系(雙主修)":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/22cc91fd-d5d1-4701-9c2e-0ee37cc3a489?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/9052b861-31a3-4a77-ba8e-5632a0a1db49?subjectId=68096"},"呼吸治療學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/5eba510a-d4dd-4986-bb2c-6f71d86800ea?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/e9e034ec-ee4f-4c76-972a-d6f7fe22e8fd?subjectId=68096"},"生物醫學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/49e9e845-0965-4430-9999-65c50bf21602?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/aca45985-3ef2-4a33-8cd1-0b88d86d735b?subjectId=68096"},"醫學影像暨放射科學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/dfb56373-b8b2-4e6b-ae1d-deb6330240c1?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/83c83082-1c31-47d9-8ee1-86f9e3d70714?subjectId=68096"},"電機工程學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/14a72f36-2ca7-4d75-b72f-4ed2da047ef4?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/250a6999-40f1-4f07-89ed-2ecc770ec5d2?subjectId=68096"},"機械工程學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/6f6b35db-e4bd-4207-a99a-06a66927cdf3?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/e94ddccc-44b8-4ed3-bd77-ed202c42fda8?subjectId=68096"},"化工與材料工程學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/697ec0e8-5256-41f5-9482-ed5519566c1e?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/15d18dcb-6d73-4918-b92d-5470f6181261?subjectId=68096"},"電子工程學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/1276e9f0-d138-4d6f-b77b-2a895c12652d?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/52672e28-fc5a-40d7-81f0-6bc2e910d379?subjectId=68096"},"資訊工程學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/8d7d41de-b550-4957-9cb0-0f61bcf5a3c5?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/f8d09c71-7bb9-44cc-94fb-3650dc3c7b89?subjectId=68096"},"生物醫學工程學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/24b65181-0dfe-46b2-8eda-040b051a61c4?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/293ea147-6490-42e1-879a-fe03d3120cb4?subjectId=68096"},"醫務管理學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/9ea1a172-570c-4dae-8561-10a2df25a597?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/00584f5b-5fef-4b43-94ea-630178f781e0?subjectId=68096"},"工商管理學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/cfa2e9c7-4077-4b6a-8a8e-6ed08127d4e0?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/38a51852-e1d7-4e92-a5aa-673c785c8829?subjectId=68096"},"工業設計學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/d91e41f0-781b-4aec-870c-5671c0176dc2?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/a7ecfa16-2c24-40b0-8ed7-a04a8a43be76?subjectId=68096"},"資訊管理學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/d4e50db4-13ea-4e7e-ac4e-e9cbc75587ca?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/43e7abcb-dc4c-4990-8761-82866ca5471f?subjectId=68096"},"數位金融科技學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/6bcad990-50e0-4a51-89d7-73d296680650?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/4f955a6f-4b4b-49a2-af47-9ea76b2560b4?subjectId=68096"},"人工智慧學系":{"115":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/3312715b-0bd3-490b-bed8-62611e6d75a5?subjectId=78881","114":"https://www.cgu.edu.tw/freshman/ServerFile/GetByKindEditor/e18a5234-7e02-4e3e-8ac5-95c5f5ac97bb?subjectId=68096"}};
