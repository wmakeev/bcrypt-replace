const { getHasher } = require("./index");
const test = require("tape");

const ORDER_SALT = "$2b$10$z.IEPx2xxMcgbllhxBsCuN4yHeieEWEagIZ03tewBpe";

const getNameHash = getHasher(ORDER_SALT);

test("getNameHash", (t) => {
  const source = [
    ["", "$2b$10$z.IEPx2xxMcgbllhxBsCu.5FhJcsiptuwDI4f3Udqi03ANjj00Req"],
    ["a", "$2b$10$z.IEPx2xxMcgbllhxBsCu.tOdQ6ikFOrMaAzALQ3Fmlia0TGlhku2"],
    ["1", "$2b$10$z.IEPx2xxMcgbllhxBsCu.aW4htiZ4jCIwDex5XcIL/k6FBmGH93."],
    ["123", "$2b$10$z.IEPx2xxMcgbllhxBsCu.q2m5PVH6jGCckC9ZMFJyW.xlWXungzy"],
    [
      "!@#$%^&*(",
      "$2b$10$z.IEPx2xxMcgbllhxBsCu.BwAMtP8ncofm/a9zWAeuWGTKtabww5e",
    ],
    [
      "21-12345",
      "$2b$10$z.IEPx2xxMcgbllhxBsCu.bSNGU5Ef1cnMaZpvU7ZWPFRTjsWNuDC",
    ],
    ["20-123", "$2b$10$z.IEPx2xxMcgbllhxBsCu.kxq4BVhYoI4xNzZhUpJaCakOA9o4Gxy"],
    [
      "kfwgeiohfgbejk kugwkrhieh  kjeht ioerhg iuehtoerh tike therkth lkerhtkerht kej",
      "$2b$10$z.IEPx2xxMcgbllhxBsCu.nY0/eoslqXnGYlZ0OHmXu1lf9ylSY3i",
    ],
    [
      "шла Саша по шоссе",
      "$2b$10$z.IEPx2xxMcgbllhxBsCu.Q1wMPQ0e/Jo8/iM/CYwbuXtcvDiQGhu",
    ],
  ];

  for (const [str, result] of source) {
    t.equals(getNameHash(str), result, `showl get hash for "${str}" string`);
  }

  t.end();
});
