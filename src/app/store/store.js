import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 5,
  score: 0,

  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) ),
}))

const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "你一個人待在老屋的壁爐前，午後陽光斜照，風靜靜吹著窗簾。你會怎麼打發時間？",
      options: [
        {title: "發呆、想些有的沒的", value: 1},
        {title: "寫字、畫畫、記錄想法", value: 2},
        {title: "翻資料、看冷門知識影片", value: 3}
      ]
    },
    "2":{
      title: "你在老式打字機前，準備寫下一段自我介紹的信。你最自然會選擇怎樣的語氣？",
      options: [
        {title: "口語自然、沒包袱的白話", value: 1},
        {title: "有點詩意、偶爾古風的用詞", value: 2},
        {title: "精準、條理分明的陳述", value: 3}
      ]
    },
    "3":{
      title: "你受邀參加一場舊時代的茶會，坐進了滿是陌生人的沙龍裡。你會怎麼應對？",
      options: [
        {title: "靜靜觀察，沒事不講話", value: 1},
        {title: "適度聊天，但不主動社交", value: 2},
        {title: "一下就變成焦點或搞笑擔當", value: 3}
      ]
    },
    "4":{
      title: "你收到一份從舊報館寄來的資料袋，裡面塞滿雜訊訊號、剪報與信件副本。你的反應是？",
      options: [
        {title: "覺得焦慮，不太想管", value: 1},
        {title: "慢慢整理，挑自己喜歡的看", value: 2},
        {title: "研究完發現我根本不想要這些資料（笑）", value: 3}
      ]
    },
    "5":{
      title: "你被交付一項任務，要修復一台年代久遠的留聲機。你會用什麼節奏完成它？",
      options: [
        {title: "很慢，但有自己邏輯", value: 1},
        {title: "隨性，但總會完成", value: 2},
        {title: "看情況，靈活變通", value: 3}
      ]
    }
  },
}))



export { usePsyStore }
export { useQuestionStore }