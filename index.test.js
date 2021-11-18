const test = require("tape");

const { getHasher, compareHash } = require("./index");

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

test("compareHash", (t) => {
  const source = [
    ["", "$2b$10$03s5duOrgmhZkBE8XmRZjuep0Ir59g1axhOhnf0jzVwVx/PoF25aq"],
    ["a", "$2b$10$NFDsxTnsdE9Y5VYLukg1geBvR2sGpgzttic5f5ZTHfAr9wEQye0oC"],
    ["1", "$2b$10$bsbNeuCZe2xsH9ptWiLVi.s7I/sbiCxTXKnZXqc1DyMvstb4icdNK"],
    ["123", "$2b$10$dTLrjwMQxDuEJWAO/4dbTujry/h.VhozG995udB/VlI4PNYNFbtOy"],
    [
      "!@#$%^&*(",
      "$2b$10$1KoQvVa1uwEztlVJp0ZQkeSVwSPWyc4FCbPKwRfW3OO5nEqY.OhRS",
    ],
    [
      "21-12345",
      "$2b$10$ZaYOciEKGOBy0m/d/5ozvuVSCxL4VwDgFALcwVRQKUhbMvobFmwG2",
    ],
    ["20-123", "$2b$10$idQZ7vN0LzId2BcxjDWt4.BsPErRF/6KbKimvEOuDT9/eDnZNB0EW"],
    [
      "kfwgeiohfgbejk kugwkrhieh  kjeht ioerhg iuehtoerh tike therkth lkerhtkerht kej",
      "$2b$10$ibTMr/2HGsGkpMtJdooBw.TE1jgEwklg.s9dhvciMXycBnv1ZRYUy",
    ],
    [
      "шла Саша по шоссе",
      "$2b$10$qEJ85ATbfGqrlICyLuMld.j3DrEQ2DVjqhCYBdear9r.GJD8bcJL2",
    ],
  ];

  for (const [str, result] of source) {
    t.ok(compareHash(str, result), `should compare "${str}"`);
  }

  t.end();
});
