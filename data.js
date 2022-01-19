const Proposals = [
  {
    id: 1,
    problem: {
      text: "ワイワイ感のあるPTA活動のためにどうしたらいいか",
    },
    harm: "harm1",
    cause: "cause1",
    solutions: [
      {
        id: 1,
        law: "隔週ワークショップを開催する。\n\n予算は1回2500円で、模造紙、ペン、付箋などをなくなり次第買い足す形で用意する。\n\nワークショップ部会を新設し予算管理をする。board機能と併用し、リモート参加と同期する。",
        to: 1,
        since: 19951117,
        until: 20220101,
        amount: 100,
        members: [
          {
            id: 1,
            address: "ワークショップ部会",
          },
          {
            id: 2,
            address: "0xMEMBER2_iusganvu",
          },
        ],
      },
      {
        id: 2,
        law: "毎回Zoomに接続しながらboardを使う。",
        to: 23,
        since: 19951117,
        until: 20220101,
        amount: 0,
        members: [],
      },
    ],
  },
  {
    id: 2,
    problem: {
      text: "ワイワイ感のあるPTA活動のためにどうしたらいいか２",
    },
    harm: "harm1",
    cause: "cause2",
    solutions: [
      {
        id: 1,
        law: "隔週ワークショップを開催する。\n\n予算は1回2500円で、模造紙、ペン、付箋などをなくなり次第買い足す形で用意する。\n\nワークショップ部会を新設し予算管理をする。board機能と併用し、リモート参加と同期する。",
        to: 1,
        since: 19951117,
        until: 20220101,
        amount: 100,
        members: [
          {
            id: 1,
            address: "ワークショップ部会",
          },
          {
            id: 2,
            address: "0xMEMBER2_iusganvu",
          },
        ],
      },
      {
        id: 2,
        law: "毎回Zoomに接続しながらboardを使う。",
        to: 23,
        since: 19951117,
        until: 20220101,
        amount: 0,
        members: [],
      },
    ],
  },
];

module.exports = {
  Proposals,
};
